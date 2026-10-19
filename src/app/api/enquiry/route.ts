import { NextResponse } from "next/server";

/**
 * Enquiry endpoint.
 *
 * Delivery: transactional email through Resend (https://resend.com), configured
 * with three environment variables:
 *   RESEND_API_KEY  – API key of the SARTO Resend account
 *   ENQUIRY_TO      – inbox that receives enquiries, e.g. contact@sarto-interiors.ch
 *   ENQUIRY_FROM    – verified sender, e.g. "SARTO Website <website@sarto-interiors.ch>"
 *
 * Without configuration the endpoint answers 503 and the form shows the
 * direct email address. It never reports success unless the mail provider
 * has accepted the message (no false "sent" state).
 *
 * Uploaded files are listed in the mail (name, type, size) and attached up to
 * a total of 8 MB; larger uploads are listed only. INTEGRATION_POINT for a
 * CRM: forward `enquiry` below.
 */

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED = new Set(["application/pdf", "image/jpeg", "image/png"]);
const PATHS = new Set(["private", "professional", "developer"]);

export async function POST(req: Request) {
  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot
  if (String(data.get("website") ?? "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const str = (k: string) => String(data.get(k) ?? "").trim();
  const rawPath = str("path");
  const path = PATHS.has(rawPath) ? rawPath : "private";
  const name = str("name");
  const email = str("email");
  const location = str("location");
  const stage = str("stage");
  const consent = data.get("consent") !== null;

  const missing: string[] = [];
  if (!name) missing.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) missing.push("email");
  if (!location) missing.push("location");
  if (!stage) missing.push("stage");
  if (!consent) missing.push("consent");
  if (path !== "private" && !str("company")) missing.push("company");

  const scope = data.getAll("scope").map(String).filter(Boolean);
  if (path === "developer") {
    if (!str("objectType")) missing.push("objectType");
    if (!/^\d+$/.test(str("units"))) missing.push("units");
    if (!str("timeframe")) missing.push("timeframe");
    if (scope.length === 0) missing.push("scope");
  } else if (!str("projectType")) {
    missing.push("projectType");
  }
  if (missing.length) {
    return NextResponse.json({ ok: false, error: "missing_fields", fields: missing }, { status: 422 });
  }

  const files = data
    .getAll("files")
    .filter((f): f is File => f instanceof File && f.size > 0)
    .map((f) => ({ name: f.name, type: f.type, size: f.size }));
  const rejected = files.filter((f) => f.size > MAX_FILE_BYTES || !ALLOWED.has(f.type));
  if (rejected.length) {
    return NextResponse.json({ ok: false, error: "file_rejected", files: rejected.map((f) => f.name) }, { status: 422 });
  }

  const enquiry = {
    receivedAt: new Date().toISOString(),
    locale: str("locale"),
    path,
    name,
    email,
    phone: str("phone"),
    company: str("company"),
    location,
    projectType: str("projectType"),
    objectType: str("objectType"),
    units: str("units"),
    scope,
    timeframe: str("timeframe"),
    stage,
    message: str("message"),
    files,
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO;
  const from = process.env.ENQUIRY_FROM;
  if (!apiKey || !to || !from) {
    console.error("[sarto] enquiry delivery not configured (RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM)");
    return NextResponse.json({ ok: false, error: "delivery_not_configured" }, { status: 503 });
  }

  const attachments: { filename: string; content: string }[] = [];
  let attached = 0;
  for (const f of data.getAll("files")) {
    if (!(f instanceof File) || f.size === 0) continue;
    if (attached + f.size > 8 * 1024 * 1024) continue;
    attached += f.size;
    attachments.push({ filename: f.name, content: Buffer.from(await f.arrayBuffer()).toString("base64") });
  }

  const label = path === "developer" ? "Entwickler" : path === "professional" ? "Architekt" : "Privat";
  const lines = Object.entries(enquiry)
    .filter(([k]) => k !== "files")
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .concat(files.map((f) => `file: ${f.name} (${f.type}, ${Math.round(f.size / 1024)} KB)`));

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `SARTO Anfrage · ${label} · ${name}${location ? ` · ${location}` : ""}`,
        text: lines.join("\n"),
        attachments,
      }),
    });
    if (!res.ok) {
      console.error("[sarto] enquiry delivery failed", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[sarto] enquiry delivery error", err);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
