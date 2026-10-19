"use client";

import { useSearchParams } from "next/navigation";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import type { ContactFields } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { site } from "@/content/site";

type Path = "private" | "professional" | "developer";
type Status = "idle" | "sending" | "sent" | "error";

const PATHS: Path[] = ["private", "professional", "developer"];

export function EnquiryForm({ locale, f }: { locale: Locale; f: ContactFields }) {
  const params = useSearchParams();
  const fromQuery = params.get("path");
  const initial: Path = PATHS.includes(fromQuery as Path) ? (fromQuery as Path) : "private";
  const [path, setPath] = useState<Path>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("path", path);
    data.set("locale", locale);
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: data });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
      form.closest("section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" aria-live="polite" className="pt-2">
        <h2 className="text-h2">{f.success.title}</h2>
        <p className="mt-6 max-w-lg text-[1rem] text-charcoal/80">{f.success.text}</p>
      </div>
    );
  }

  const field =
    "w-full border-0 border-b border-charcoal/30 bg-transparent px-0 py-3 text-[1rem] text-charcoal placeholder:text-charcoal/35 focus:border-charcoal focus:outline-none focus-visible:outline-none";
  const label = "eyebrow block text-charcoal/60";
  const isPro = path !== "private";
  const isDev = path === "developer";

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      {/* Path selection */}
      <fieldset>
        <legend className={label}>{f.pathLabel}</legend>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {PATHS.map((p) => {
            const active = path === p;
            return (
              <label
                key={p}
                className={`cursor-pointer border p-5 transition-colors ${
                  active ? "border-charcoal" : "border-charcoal/20 hover:border-charcoal/50"
                }`}
              >
                <input type="radio" name="path-choice" value={p} checked={active} onChange={() => setPath(p)} className="sr-only" />
                <span className="display block text-[1.4rem] leading-tight">{f.paths[p].label}</span>
                <span className="mt-1 block text-[0.8125rem] text-charcoal/65">{f.paths[p].text}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <Field id={id("name")} label={f.name} required>
          <input id={id("name")} name="name" required autoComplete="name" className={field} />
        </Field>
        <Field id={id("email")} label={f.email} required>
          <input id={id("email")} name="email" type="email" required autoComplete="email" className={field} />
        </Field>
        <Field id={id("phone")} label={f.phone}>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" className={field} />
        </Field>
        {isPro && (
          <Field id={id("company")} label={f.company} required>
            <input id={id("company")} name="company" required autoComplete="organization" className={field} />
          </Field>
        )}
        <Field id={id("location")} label={f.location} required>
          <input id={id("location")} name="location" required className={field} />
        </Field>

        {isDev ? (
          <>
            <Select id={id("objectType")} name="objectType" label={f.objectType} options={f.objectTypes} cls={field} />
            <Field id={id("units")} label={f.units} required>
              <input id={id("units")} name="units" type="number" min={1} inputMode="numeric" required className={field} />
            </Field>
            <Select id={id("timeframe")} name="timeframe" label={f.timeframe} options={f.timeframes} cls={field} />
            <Select id={id("stage")} name="stage" label={f.stage} options={f.stages} cls={field} />
          </>
        ) : (
          <>
            <Select id={id("type")} name="projectType" label={f.projectType} options={f.projectTypes} cls={field} />
            <Select id={id("stage")} name="stage" label={f.stage} options={f.stages} cls={field} />
          </>
        )}
      </div>

      {isDev && (
        <fieldset>
          <legend className={label}>
            {f.scope} <span aria-hidden="true">*</span>
          </legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {f.scopes.map((s) => (
              <label key={s} className="flex items-center gap-3 text-[0.9375rem] text-charcoal/80">
                <input type="checkbox" name="scope" value={s} className="h-4 w-4 accent-charcoal" />
                {s}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <Field id={id("message")} label={f.message}>
        <textarea id={id("message")} name="message" rows={5} placeholder={f.messageHint} className={`${field} resize-y`} />
      </Field>

      <div>
        <label htmlFor={id("files")} className={label}>
          {f.files}
        </label>
        <input
          id={id("files")}
          name="files"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
          className="mt-3 block w-full text-[0.875rem] text-charcoal/70 file:mr-4 file:border file:border-charcoal/30 file:bg-transparent file:px-4 file:py-2 file:text-[0.75rem] file:tracking-[0.06em] file:text-charcoal"
        />
        <p className="mt-2 text-[0.75rem] text-charcoal/50">{f.filesHint}</p>
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-[0.875rem] text-charcoal/75">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-charcoal" />
        <span>{f.consent}</span>
      </label>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-charcoal px-7 py-4 text-[0.8125rem] tracking-[0.08em] transition-colors hover:bg-charcoal hover:text-ivory disabled:opacity-50"
        >
          {status === "sending" ? f.sending : f.submit}
        </button>
        {status === "error" && (
          <p role="alert" className="max-w-md text-[0.875rem] text-walnut">
            {f.error}{" "}
            <a href={`mailto:${site.contact.email}`} className="link-line">
              {site.contact.email}
            </a>
          </p>
        )}
      </div>
      <p className="text-[0.75rem] text-charcoal/45">* {f.required}</p>
    </form>
  );
}

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-charcoal/60">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}

function Select({ id, name, label, options, cls }: { id: string; name: string; label: string; options: string[]; cls: string }) {
  return (
    <Field id={id} label={label} required>
      <div className="relative">
        <select id={id} name={name} required defaultValue="" className={`${cls} appearance-none pr-8`}>
          <option value="" disabled>
            –
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <Caret />
      </div>
    </Field>
  );
}

function Caret() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="pointer-events-none absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-charcoal/60">
      <path d="M1 4l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
