import { useState, type FormEvent } from 'react';
import { useI18n } from '../../lib/i18n';
import { SectionShell } from '../ui/SectionShell';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

const EMAILJS_READY =
  Boolean(import.meta.env?.VITE_EMAILJS_SERVICE_ID) &&
  Boolean(import.meta.env?.VITE_EMAILJS_TEMPLATE_ID) &&
  Boolean(import.meta.env?.VITE_EMAILJS_PUBLIC_KEY);

export function Contact() {
  const { t } = useI18n();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get('name') ?? '').trim()) next.name = t.contact.validation.name;
    const email = String(data.get('email') ?? '').trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = t.contact.validation.email;
    if (!String(data.get('message') ?? '').trim())
      next.message = t.contact.validation.message;
    if (!data.get('agreement')) next.agreement = t.contact.validation.agreement;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    if (!EMAILJS_READY) {
      setNotice(t.contact.placeholderNotice);
      setSubmitting(false);
      return;
    }
    // EmailJS integration placeholder — to be wired with @emailjs/browser after install.
    setTimeout(() => {
      setNotice(t.contact.successNotice);
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  const f = t.contact.fields;

  return (
    <SectionShell
      id="contact"
      eyebrow={t.contact.eyebrow}
      title={t.contact.title}
      body={t.contact.body}
    >
      <Reveal>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl border border-[var(--brand-line)] bg-white p-6 md:p-10 grid gap-5 md:grid-cols-2"
        >
          <Field label={f.name} name="name" required error={errors.name} />
          <Field label={f.company} name="company" />
          <Field label={f.email} name="email" type="email" required error={errors.email} />
          <Field label={f.phone} name="phone" type="tel" />

          <SelectField label={f.serviceType} name="serviceType" options={t.contact.serviceOptions} />
          <Field label={f.productCategory} name="productCategory" />
          <Field label={f.quantity} name="quantity" />
          <SelectField label={f.brandStatus} name="brandStatus" options={t.contact.brandOptions} />

          <div className="md:col-span-2">
            <FieldLabel htmlFor="message" required>
              {f.message}
            </FieldLabel>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-xl border border-[var(--brand-line)] bg-[var(--brand-warm-white)]/50 px-4 py-3 text-[15px] text-[var(--brand-charcoal)] placeholder:text-[var(--brand-soft-gray)]/60 outline-none transition focus:border-[var(--brand-accent)] focus:bg-white"
            />
            {errors.message && <FieldError>{errors.message}</FieldError>}
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <label className="flex items-start gap-3 text-[14px] text-[var(--brand-charcoal)]/80 cursor-pointer">
              <input
                type="checkbox"
                name="agreement"
                className="mt-1 size-4 accent-[var(--brand-accent)]"
              />
              <span>{f.agreement}</span>
            </label>
            {errors.agreement && <FieldError>{errors.agreement}</FieldError>}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-[13px] text-[var(--brand-soft-gray)]">
                {notice ?? ''}
              </p>
              <Button type="submit" size="lg" disabled={submitting}>
                {t.contact.submit}
              </Button>
            </div>
          </div>
        </form>
      </Reveal>
    </SectionShell>
  );
}

function FieldLabel({
  children,
  htmlFor,
  required,
}: {
  children: React.ReactNode;
  htmlFor: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[12px] tracking-[0.16em] uppercase text-[var(--brand-charcoal)]/70"
    >
      {children}
      {required && <span className="ml-1 text-[var(--brand-accent)]">*</span>}
    </label>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-[12px] text-[#b34744]">{children}</p>;
}

function Field({
  label,
  name,
  type = 'text',
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-xl border border-[var(--brand-line)] bg-[var(--brand-warm-white)]/50 px-4 h-12 text-[15px] text-[var(--brand-charcoal)] placeholder:text-[var(--brand-soft-gray)]/60 outline-none transition focus:border-[var(--brand-accent)] focus:bg-white"
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-[var(--brand-line)] bg-[var(--brand-warm-white)]/50 px-4 h-12 text-[15px] text-[var(--brand-charcoal)] outline-none transition focus:border-[var(--brand-accent)] focus:bg-white"
      >
        <option value="" disabled>
          —
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
