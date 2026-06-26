import { useState, type FormEvent } from 'react';
import { useI18n } from '../../lib/i18n';
import { Button } from '../ui/Button';

const EMAILJS_READY =
  Boolean(import.meta.env?.VITE_EMAILJS_SERVICE_ID) &&
  Boolean(import.meta.env?.VITE_EMAILJS_TEMPLATE_ID) &&
  Boolean(import.meta.env?.VITE_EMAILJS_PUBLIC_KEY);

const CONTACT_IMG =
  'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&q=85&auto=format&fit=crop';

export function Contact() {
  const { t } = useI18n();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const f = t.contact.fields;

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
    setTimeout(() => {
      setNotice(t.contact.successNotice);
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-[#FAFAF8]">
      <div className="grid lg:grid-cols-[1fr_1fr] min-h-[680px]">
        {/* ── Left: image + brand statement ── */}
        <div className="relative hidden lg:block">
          <img
            src={CONTACT_IMG}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0D0C14]/55" />
          <div className="relative z-10 h-full flex flex-col justify-end p-12 xl:p-16">
            <p className="text-[9px] tracking-[0.36em] uppercase text-[#C8AA80] mb-5">
              {t.contact.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(32px,3.5vw,52px)] font-light
                           leading-[1.1] tracking-[-0.02em] text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="text-[13px] leading-[1.85] text-white/50 whitespace-pre-line max-w-[360px]">
              {t.contact.body}
            </p>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="px-6 md:px-10 lg:px-14 py-16 md:py-20 bg-[#FAFAF8]">
          {/* Mobile header */}
          <div className="lg:hidden mb-10" data-reveal="up">
            <p className="text-[9px] tracking-[0.36em] uppercase text-[#9A7A56] mb-4">
              {t.contact.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(28px,5vw,44px)] font-light
                           leading-[1.1] tracking-[-0.02em] text-[#111]">
              {t.contact.title}
            </h2>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField label={f.name} name="name" required error={errors.name} />
              <FormField label={f.company} name="company" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField label={f.email} name="email" type="email" required error={errors.email} />
              <FormField label={f.phone} name="phone" type="tel" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <FormSelect label={f.serviceType} name="serviceType" options={t.contact.serviceOptions} />
              <FormField label={f.productCategory} name="productCategory" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField label={f.quantity} name="quantity" />
              <FormSelect label={f.brandStatus} name="brandStatus" options={t.contact.brandOptions} />
            </div>

            {/* Message */}
            <div>
              <FormLabel htmlFor="message" required>{f.message}</FormLabel>
              <textarea
                id="message" name="message" rows={4}
                className="w-full rounded-xl border border-[rgba(17,17,17,0.1)]
                           bg-white px-4 py-3 text-[14px] text-[#111]
                           placeholder:text-[#C9B79F]/60 outline-none
                           transition-colors focus:border-[#9A7A56]
                           resize-none"
              />
              {errors.message && <FormError>{errors.message}</FormError>}
            </div>

            {/* Agreement + submit */}
            <div className="pt-2 space-y-4">
              <label className="flex items-start gap-3 text-[13px] text-[#555] cursor-pointer">
                <input type="checkbox" name="agreement"
                  className="mt-0.5 size-4 accent-[#9A7A56] rounded" />
                <span>{f.agreement}</span>
              </label>
              {errors.agreement && <FormError>{errors.agreement}</FormError>}

              <div className="flex items-center justify-between gap-4 pt-1">
                {notice && (
                  <p className="text-[12px] text-[#9A7A56]">{notice}</p>
                )}
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="ml-auto !bg-[#111] !text-white !border-0 hover:!bg-[#1a1a1a]"
                >
                  {t.contact.submit}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormLabel({ children, htmlFor, required }: {
  children: React.ReactNode; htmlFor: string; required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor}
      className="block mb-2 text-[10px] tracking-[0.18em] uppercase text-[#8A857D]">
      {children}
      {required && <span className="ml-1 text-[#C8AA80]">*</span>}
    </label>
  );
}

function FormError({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-[11px] text-[#b34744]">{children}</p>;
}

function FormField({ label, name, type = 'text', required, error }: {
  label: string; name: string; type?: string; required?: boolean; error?: string;
}) {
  return (
    <div>
      <FormLabel htmlFor={name} required={required}>{label}</FormLabel>
      <input id={name} name={name} type={type}
        className="w-full rounded-xl border border-[rgba(17,17,17,0.1)]
                   bg-white h-11 px-4 text-[14px] text-[#111]
                   outline-none transition-colors focus:border-[#9A7A56]" />
      {error && <FormError>{error}</FormError>}
    </div>
  );
}

function FormSelect({ label, name, options }: {
  label: string; name: string; options: string[];
}) {
  return (
    <div>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <select id={name} name={name} defaultValue=""
        className="w-full rounded-xl border border-[rgba(17,17,17,0.1)]
                   bg-white h-11 px-4 text-[14px] text-[#111]
                   outline-none transition-colors focus:border-[#9A7A56]">
        <option value="" disabled>—</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
