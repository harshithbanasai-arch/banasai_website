"use client";

import { useState, useEffect, FormEvent } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { type Lang, localPath } from "components/i18n";

const CONTACT_EMAIL = "contact@banas-ai.com";

// Where form submissions are sent. Defaults to FormSubmit's AJAX endpoint,
// which forwards to CONTACT_EMAIL with no signup or backend, just a one-time
// confirmation email the first time it is used. Override with a Formspree (or
// any JSON-accepting) endpoint via NEXT_PUBLIC_FORM_ENDPOINT if preferred.
const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type Status = "idle" | "posted" | "email";

// `key` matches the ?interest= query value used by links across the site.
// `value` is what lands in the email, so it stays in English for both languages.
const INTERESTS = [
  {
    key: "grading",
    value: "Waitlist: Banas Grading",
    label: { en: "Waitlist: Banas Grading (produce lines)", kn: "ಕಾಯುವ ಪಟ್ಟಿ: Banas Grading (ಉತ್ಪನ್ನ ಲೈನ್‌ಗಳು)" },
  },
  {
    key: "dehusking",
    value: "Waitlist: Banas Dehusking",
    label: { en: "Waitlist: Banas Dehusking (arecanut)", kn: "ಕಾಯುವ ಪಟ್ಟಿ: Banas Dehusking (ಅಡಿಕೆ)" },
  },
  {
    key: "farm-manager",
    value: "Watch list: Banas Farm Manager",
    label: { en: "Watch list: Banas Farm Manager robot", kn: "ಮಾಹಿತಿ ಪಟ್ಟಿ: Banas Farm Manager ರೋಬೋಟ್" },
  },
  {
    key: "intelligence",
    value: "Banas Intelligence community",
    label: { en: "Banas Intelligence (free community)", kn: "Banas Intelligence (ಉಚಿತ ಸಮುದಾಯ)" },
  },
  {
    key: "partnership",
    value: "Partnership",
    label: { en: "Partnership or reselling", kn: "ಪಾಲುದಾರಿಕೆ ಅಥವಾ ಮರುಮಾರಾಟ" },
  },
  {
    key: "general",
    value: "General Enquiry",
    label: { en: "General enquiry", kn: "ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ" },
  },
];

const COPY = {
  en: {
    title: "Join the waitlist",
    intro:
      "Pick the product you want first: grading, dehusking or the farm manager robot. Waitlist members hear first and get first access to pilots.",
    email: "Email",
    locations: "Locations",
    locationsBody: "Dublin, Karnataka (Bengaluru) & across regions",
    responseTime: "Response time",
    responseTimeBody: "We typically reply within one or two business days.",
    sentTitle: "Message sent!",
    sentBody: "Thanks, we got your message and will reply soon.",
    emailTitle: "Opening your email…",
    emailBody:
      "Your email client should have opened with your message ready to send. If it did not, email us directly at contact@banas-ai.com.",
    name: "Full Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email Address",
    company: "Company / Organisation",
    companyPlaceholder: "Your company name",
    interest: "What are you looking for?",
    message: "Message",
    messagePlaceholder: "Tell us what you need",
    send: "Send Message",
  },
  kn: {
    title: "ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ",
    intro:
      "ನಿಮಗೆ ಮೊದಲು ಬೇಕಾದ ಉತ್ಪನ್ನವನ್ನು ಆರಿಸಿ: ಗ್ರೇಡಿಂಗ್, ಸುಲಿಯುವ ಯಂತ್ರ ಅಥವಾ ತೋಟ ನಿರ್ವಹಣೆಯ ರೋಬೋಟ್. ಕಾಯುವ ಪಟ್ಟಿಯ ಸದಸ್ಯರಿಗೆ ಸುದ್ದಿ ಮೊದಲು ತಿಳಿಯುತ್ತದೆ ಮತ್ತು ಪೈಲಟ್‌ಗಳಲ್ಲಿ ಮೊದಲ ಅವಕಾಶ ಸಿಗುತ್ತದೆ.",
    email: "ಇಮೇಲ್",
    locations: "ಸ್ಥಳಗಳು",
    locationsBody: "ಡಬ್ಲಿನ್, ಕರ್ನಾಟಕ (ಬೆಂಗಳೂರು) ಮತ್ತು ಇತರೆಡೆ",
    responseTime: "ಉತ್ತರಿಸುವ ಸಮಯ",
    responseTimeBody: "ಸಾಮಾನ್ಯವಾಗಿ ಒಂದು ಅಥವಾ ಎರಡು ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಉತ್ತರಿಸುತ್ತೇವೆ. ಕನ್ನಡದಲ್ಲೇ ಬರೆಯಬಹುದು.",
    sentTitle: "ಸಂದೇಶ ಕಳುಹಿಸಲಾಗಿದೆ!",
    sentBody: "ಧನ್ಯವಾದಗಳು, ನಿಮ್ಮ ಸಂದೇಶ ತಲುಪಿದೆ. ಶೀಘ್ರದಲ್ಲೇ ಉತ್ತರಿಸುತ್ತೇವೆ.",
    emailTitle: "ನಿಮ್ಮ ಇಮೇಲ್ ತೆರೆಯುತ್ತಿದೆ…",
    emailBody:
      "ನಿಮ್ಮ ಸಂದೇಶ ಸಿದ್ಧವಾಗಿ ಇಮೇಲ್ ಆ್ಯಪ್ ತೆರೆದಿರಬೇಕು. ತೆರೆಯದಿದ್ದರೆ, ನೇರವಾಗಿ contact@banas-ai.com ಗೆ ಇಮೇಲ್ ಮಾಡಿ.",
    name: "ಪೂರ್ಣ ಹೆಸರು",
    namePlaceholder: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು",
    emailLabel: "ಇಮೇಲ್ ವಿಳಾಸ",
    company: "ಕಂಪನಿ / ಸಂಸ್ಥೆ",
    companyPlaceholder: "ನಿಮ್ಮ ಕಂಪನಿಯ ಹೆಸರು (ಇದ್ದರೆ)",
    interest: "ನಿಮಗೆ ಏನು ಬೇಕು?",
    message: "ಸಂದೇಶ",
    messagePlaceholder: "ನಿಮಗೆ ಏನು ಬೇಕು ಎಂದು ತಿಳಿಸಿ",
    send: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
  },
};

// The contact / waitlist page, shared by /contact (English) and /kn/contact (Kannada).
export default function ContactPage({ lang = "en" }: { lang?: Lang }) {
  const t = COPY[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: INTERESTS[0].value,
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  // Preselect the product when arriving from a "Join the waitlist" link.
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("interest");
    const match = INTERESTS.find((i) => i.key === key);
    if (match) setFormData((f) => ({ ...f, interest: match.value }));
  }, []);

  const openMailto = () => {
    const subject = `Banas AI: ${formData.interest || "Enquiry"}${
      formData.company ? `, ${formData.company}` : ""
    }`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInterest: ${formData.interest}\n\n${formData.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("email");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Banas AI: ${formData.interest}`,
          ...(lang === "kn" && { language: "Kannada" }),
          _template: "table",
        }),
      });

      if (response.ok) {
        setStatus("posted");
      } else {
        openMailto();
      }
    } catch (error) {
      // Network/backend failure: fall back to the visitor's own email client.
      openMailto();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div lang={lang} className="flex flex-col min-h-screen bg-background">
      <Header lang={lang} switchHref={localPath(lang === "en" ? "kn" : "en", "/contact")} />
      <main className="flex-grow">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-body-text mb-6 font-sora font-semibold">
                  {t.title}
                </h1>
                <p className="text-xl text-muted-text font-light max-w-3xl mx-auto font-inter">
                  {t.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-body-text mb-2 font-sora">
                      {t.email}
                    </h2>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-muted-text hover:text-primary transition-colors font-inter"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-body-text mb-2 font-sora">
                      {t.locations}
                    </h2>
                    <p className="text-muted-text font-inter">
                      {t.locationsBody}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-body-text mb-2 font-sora">
                      {t.responseTime}
                    </h2>
                    <p className="text-muted-text font-inter">
                      {t.responseTimeBody}
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  {status !== "idle" ? (
                    <div className="card p-6 bg-green-light border-green-accent/30 text-center">
                      <h3 className="text-xl font-semibold text-green-secondary mb-2 font-sora">
                        {status === "posted" ? t.sentTitle : t.emailTitle}
                      </h3>
                      <p className="text-muted-text font-inter">
                        {status === "posted" ? t.sentBody : t.emailBody}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-body-text mb-2 font-sora"
                        >
                          {t.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-button border border-border bg-surface text-body-text focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-inter"
                          placeholder={t.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-body-text mb-2 font-sora"
                        >
                          {t.emailLabel}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-button border border-border bg-surface text-body-text focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-inter"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-body-text mb-2 font-sora"
                        >
                          {t.company}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-button border border-border bg-surface text-body-text focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-inter"
                          placeholder={t.companyPlaceholder}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-sm font-medium text-body-text mb-2 font-sora"
                        >
                          {t.interest}
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-button border border-border bg-surface text-body-text focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-inter"
                        >
                          {INTERESTS.map(({ value, label }) => (
                            <option key={value} value={value}>
                              {label[lang]}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-body-text mb-2 font-sora"
                        >
                          {t.message}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-button border border-border bg-surface text-body-text focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none font-inter"
                          placeholder={t.messagePlaceholder}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full btn-primary font-inter"
                      >
                        {t.send}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
