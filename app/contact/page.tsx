"use client";

import { useState, useEffect, FormEvent } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const CONTACT_EMAIL = "contact@banas-ai.com";

// Where form submissions are sent. Defaults to FormSubmit's AJAX endpoint,
// which forwards to CONTACT_EMAIL with no signup or backend — just a one-time
// confirmation email the first time it is used. Override with a Formspree (or
// any JSON-accepting) endpoint via NEXT_PUBLIC_FORM_ENDPOINT if preferred.
const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type Status = "idle" | "posted" | "email";

// `key` matches the ?interest= query value used by links across the site.
const INTERESTS = [
  { key: "grading", value: "Waitlist: Banas Grading", label: "Waitlist: Banas Grading (produce lines)" },
  { key: "dehusking", value: "Waitlist: Banas Dehusking", label: "Waitlist: Banas Dehusking (arecanut)" },
  { key: "farm-manager", value: "Watch list: Banas Farm Manager", label: "Watch list: Banas Farm Manager robot" },
  { key: "intelligence", value: "Banas Intelligence community", label: "Banas Intelligence (free community)" },
  { key: "partnership", value: "Partnership", label: "Partnership or reselling" },
  { key: "general", value: "General Enquiry", label: "General enquiry" },
];

export default function ContactPage() {
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
    const subject = `Banas AI — ${formData.interest || "Enquiry"}${
      formData.company ? ` — ${formData.company}` : ""
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
          _subject: `Banas AI — ${formData.interest}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setStatus("posted");
      } else {
        openMailto();
      }
    } catch (error) {
      // Network/backend failure — fall back to the visitor's own email client.
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
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-body-text mb-6 font-sora font-semibold">
                  Join the waitlist
                </h1>
                <p className="text-xl text-muted-text font-light max-w-3xl mx-auto font-inter">
                  Pick the product you want first: grading, dehusking or the farm manager robot.
                  Waitlist members hear first and get first access to pilots.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-body-text mb-2 font-sora">
                      Email
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
                      Locations
                    </h2>
                    <p className="text-muted-text font-inter">
                      Dublin, Karnataka (Bengaluru) &amp; across regions
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-body-text mb-2 font-sora">
                      Response time
                    </h2>
                    <p className="text-muted-text font-inter">
                      We typically reply within 1–2 business days.
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  {status !== "idle" ? (
                    <div className="card p-6 bg-green-light border-green-accent/30 text-center">
                      <h3 className="text-xl font-semibold text-green-secondary mb-2 font-sora">
                        {status === "posted"
                          ? "Message sent!"
                          : "Opening your email…"}
                      </h3>
                      <p className="text-muted-text font-inter">
                        {status === "posted"
                          ? "Thank you for reaching out. We will get back to you soon."
                          : "Your email client should have opened with your message ready to send. If it did not, email us directly at contact@banas-ai.com."}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-body-text mb-2 font-sora"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-button border border-border bg-surface text-body-text focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-inter"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-body-text mb-2 font-sora"
                        >
                          Email Address
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
                          Company / Organisation
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-button border border-border bg-surface text-body-text focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-inter"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-sm font-medium text-body-text mb-2 font-sora"
                        >
                          What are you looking for?
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
                              {label}
                            </option>
                          ))}
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-body-text mb-2 font-sora"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-button border border-border bg-surface text-body-text focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none font-inter"
                          placeholder="Tell us about your project or requirements..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full btn-primary font-inter"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
