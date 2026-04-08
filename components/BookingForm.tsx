"use client";

import { useMemo, useState } from "react";
import { siteConfig, subjects } from "@/components/siteConfig";

type FormState = {
  parentOrStudentName: string;
  email: string;
  phone: string;
  subject: (typeof subjects)[number] | "";
  yearGroup: string;
  goals: string;
  availability: string;
};

function encodeMailto(value: string) {
  return encodeURIComponent(value).replace(/%0A/g, "%0D%0A");
}

export function BookingForm() {
  const [state, setState] = useState<FormState>({
    parentOrStudentName: "",
    email: "",
    phone: "",
    subject: "",
    yearGroup: "",
    goals: "",
    availability: "",
  });

  const mailtoHref = useMemo(() => {
    const lines = [
      `Name: ${state.parentOrStudentName || "-"}`,
      `Email: ${state.email || "-"}`,
      `Phone: ${state.phone || "-"}`,
      `Subject: ${state.subject || "-"}`,
      `Year group: ${state.yearGroup || "-"}`,
      `Goals: ${state.goals || "-"}`,
      `Availability: ${state.availability || "-"}`,
    ];

    const subject = `Lesson enquiry — ${state.subject || "Tuition"}`;
    const body = lines.join("\n");
    return `mailto:${siteConfig.primaryEmail}?subject=${encodeMailto(
      subject,
    )}&body=${encodeMailto(body)}`;
  }, [state]);

  const isReady =
    state.parentOrStudentName.trim().length > 1 &&
    state.email.trim().includes("@") &&
    (state.phone.trim().length > 0 || state.availability.trim().length > 0);

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-black">
            Book a lesson (fastest)
          </p>
          <p className="mt-1 text-sm text-black/60">
            Fill this in and tap “Request a lesson”. It opens your email with
            everything pre-filled.
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          2 minutes
        </span>
      </div>

      <form className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs font-medium text-black/70">Name</span>
          <input
            value={state.parentOrStudentName}
            onChange={(e) =>
              setState((s) => ({ ...s, parentOrStudentName: e.target.value }))
            }
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none ring-0 transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
            placeholder="Parent/Student name"
            autoComplete="name"
            required
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-medium text-black/70">Email</span>
          <input
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
            placeholder="you@example.com"
            inputMode="email"
            autoComplete="email"
            required
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-medium text-black/70">Phone</span>
          <input
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
            placeholder="Optional (for quick scheduling)"
            inputMode="tel"
            autoComplete="tel"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-medium text-black/70">Subject</span>
          <select
            value={state.subject}
            onChange={(e) =>
              setState((s) => ({
                ...s,
                subject: e.target.value as FormState["subject"],
              }))
            }
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
          >
            <option value="">Choose…</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-medium text-black/70">Year group</span>
          <input
            value={state.yearGroup}
            onChange={(e) =>
              setState((s) => ({ ...s, yearGroup: e.target.value }))
            }
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
            placeholder="e.g., Year 6, GCSE Year 11, A-Level"
          />
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-medium text-black/70">Goals</span>
          <textarea
            value={state.goals}
            onChange={(e) => setState((s) => ({ ...s, goals: e.target.value }))}
            className="min-h-24 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
            placeholder="What do you want to improve? (exam grade, confidence, gaps, etc.)"
          />
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-medium text-black/70">
            Availability
          </span>
          <input
            value={state.availability}
            onChange={(e) =>
              setState((s) => ({ ...s, availability: e.target.value }))
            }
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
            placeholder="e.g., Tue/Thu after 6pm, weekends"
          />
        </label>

        <div className="sm:col-span-2">
          <a
            href={mailtoHref}
            aria-disabled={!isReady}
            className={[
              "flex h-12 w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition",
              isReady
                ? "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.25)]"
                : "cursor-not-allowed bg-black/5 text-black/40",
            ].join(" ")}
            onClick={(e) => {
              if (!isReady) e.preventDefault();
            }}
          >
            Request a lesson
          </a>

          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <a
              href={`tel:${siteConfig.primaryPhoneE164}`}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 font-medium text-black/80 hover:bg-black/[0.03]"
            >
              Call {siteConfig.primaryPhoneDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.primaryPhoneE164.replace(
                "+",
                "",
              )}`}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 font-medium text-black/80 hover:bg-black/[0.03]"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-3 text-xs text-black/50">
            Tip: update contact details in{" "}
            <code className="rounded bg-black/[0.04] px-1 py-0.5">
              components/siteConfig.ts
            </code>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

