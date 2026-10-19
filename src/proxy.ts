import { NextResponse, type NextRequest } from "next/server";

/**
 * Pre-launch gate.
 * When SITE_PASSWORD is set, every page requires HTTP Basic Auth
 * (user: sarto, password: SITE_PASSWORD) and is marked noindex.
 * Remove the variable at launch; nothing else changes.
 */
export function proxy(req: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) return NextResponse.next();

  const header = req.headers.get("authorization") ?? "";
  if (header.startsWith("Basic ")) {
    const [user, pass] = Buffer.from(header.slice(6), "base64").toString().split(":");
    if (user === "sarto" && pass === password) {
      const res = NextResponse.next();
      res.headers.set("X-Robots-Tag", "noindex, nofollow");
      return res;
    }
  }
  return new NextResponse("SARTO · Vorschau. Zugang nur mit Passwort.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="SARTO Preview", charset="UTF-8"',
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg|brand/).*)"],
};
