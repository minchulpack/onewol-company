import { useState, type FormEvent } from 'react';
import { useI18n } from '../../lib/i18n';
import { track } from '../../lib/analytics';
import { Button } from '../ui/button';

/** 수신 주소 — 폼 제출은 모두 이 주소로 간다 */
const INBOX = 'onewwol1210@naver.com';

/**
 * Web3Forms 액세스 키. 있으면 서버로 직접 전송하고,
 * 없으면 메일 클라이언트를 여는 방식으로 대체한다(문의가 유실되지 않도록).
 */
const W3F_KEY = import.meta.env?.VITE_WEB3FORMS_KEY as string | undefined;

const FIELD_ORDER = [
  'name', 'company', 'email', 'phone',
  'serviceType', 'productCategory', 'quantity', 'brandStatus', 'message',
] as const;

const CONTACT_IMG =
  '/images/contact.jpg';

export function Contact() {
  const { t } = useI18n();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const f = t.contact.fields;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

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

    setNotice(null);
    setSubmitting(true);

    const val = (k: string) => String(data.get(k) ?? '').trim();
    const label = (k: string) => (f as Record<string, string>)[k] ?? k;
    const body = FIELD_ORDER
      .map((k) => `${label(k)}: ${val(k) || '-'}`)
      .join('\n');
    const subject = `[홈페이지 문의] ${val('company') || val('name')}`;

    // 키가 없으면 메일 클라이언트로 대체 — 문의를 잃지 않는다
    if (!W3F_KEY) {
      window.location.href =
        `mailto:${INBOX}?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
      track('generate_lead', {
        method: 'mailto',
        service_type: val('serviceType') || '미선택',
        product_category: val('productCategory') || '미선택',
      });
      setNotice(t.contact.placeholderNotice);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: W3F_KEY,
          subject,
          from_name: val('name'),
          replyto: val('email'),
          ...Object.fromEntries(FIELD_ORDER.map((k) => [label(k), val(k)])),
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (!res.ok || !json.success) throw new Error('send failed');
      track('generate_lead', {
        method: 'web3forms',
        service_type: val('serviceType') || '미선택',
        product_category: val('productCategory') || '미선택',
        quantity: val('quantity') || '미기재',
      });
      setNotice(t.contact.successNotice);
      form.reset();
    } catch {
      track('form_error', { form: 'contact' });
      setNotice(t.contact.errorNotice);
    } finally {
      setSubmitting(false);
    }
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
