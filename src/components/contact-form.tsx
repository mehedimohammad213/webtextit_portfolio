"use client";

import { FormEvent, useState } from "react";
import { buttonClass, interestOptions, site } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  company: "",
  interest: "",
  message: "",
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-card px-3 py-3 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-ink";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSent(false);
  }

  function validate(values: Fields) {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Add a work email we can reply to.";
    }
    if (values.company.trim().length < 2) next.company = "Add the company name.";
    if (!values.interest) next.interest = "Choose what you need, even if you are not sure yet.";
    if (values.message.trim().length < 20) {
      next.message = "Add a few sentences about the work. Twenty characters is the minimum.";
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }

    const subject = `Project inquiry from ${fields.company.trim()}`;
    const body = [
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      `Company: ${fields.company.trim()}`,
      `Need: ${fields.interest}`,
      "",
      fields.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[1.4rem] border border-line bg-card p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input
            className={fieldClass}
            name="name"
            autoComplete="name"
            value={fields.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(event) => update("name", event.target.value)}
          />
          {errors.name ? (
            <span id="name-error" className="mt-1 block text-sm font-normal text-danger">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="block text-sm font-medium">
          Work email
          <input
            className={fieldClass}
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(event) => update("email", event.target.value)}
          />
          {errors.email ? (
            <span id="email-error" className="mt-1 block text-sm font-normal text-danger">
              {errors.email}
            </span>
          ) : null}
        </label>
        <label className="block text-sm font-medium">
          Company
          <input
            className={fieldClass}
            name="company"
            autoComplete="organization"
            value={fields.company}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            onChange={(event) => update("company", event.target.value)}
          />
          {errors.company ? (
            <span id="company-error" className="mt-1 block text-sm font-normal text-danger">
              {errors.company}
            </span>
          ) : null}
        </label>
        <label className="block text-sm font-medium">
          What you need
          <select
            className={fieldClass}
            name="interest"
            value={fields.interest}
            aria-invalid={Boolean(errors.interest)}
            aria-describedby={errors.interest ? "interest-error" : undefined}
            onChange={(event) => update("interest", event.target.value)}
          >
            <option value="">Select one</option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.interest ? (
            <span id="interest-error" className="mt-1 block text-sm font-normal text-danger">
              {errors.interest}
            </span>
          ) : null}
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium">
        Project outline
        <textarea
          className={`${fieldClass} min-h-36 resize-y`}
          name="message"
          maxLength={800}
          value={fields.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          onChange={(event) => update("message", event.target.value)}
        />
        {errors.message ? (
          <span id="message-error" className="mt-1 block text-sm font-normal text-danger">
            {errors.message}
          </span>
        ) : (
          <span id="message-hint" className="mt-1 block text-sm font-normal text-muted">
            Who uses it, what it has to do, and any tool it must connect to.
          </span>
        )}
      </label>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className={buttonClass.primary}>
          Send inquiry
        </button>
        <p className="text-sm text-muted">Opens your email app, addressed to {site.email}.</p>
      </div>
      {sent ? (
        <p role="status" className="mt-4 rounded-xl bg-pine/10 px-4 py-3 text-sm leading-relaxed text-pine">
          Your email app should open with this inquiry. If nothing opened, write to {site.email}{" "}
          and include the same details.
        </p>
      ) : null}
    </form>
  );
}
