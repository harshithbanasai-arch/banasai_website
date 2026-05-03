"use client";

import { useState, FormEvent } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "Existing Datasets",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // In production, you would use a service like Formspree or your own backend
    // For now, we simulate a successful submission
    setSubmitted(true);
    console.log("Form submitted:", formData);
    
    // To make this functional, you can use:
    // fetch("https://formspree.io/f/YOUR_ID", { method: "POST", ... })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
                  Let's talk about your data needs
                </h1>
                <p className="text-xl text-muted-text font-light max-w-3xl mx-auto font-inter">
                  Whether you need access to existing datasets, want to discuss a custom collection project, or just want to understand what we do — we're happy to talk.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-body-text mb-2 font-sora">Email</h2>
                    <a href="mailto:contact@banasai.com" className="text-muted-text hover:text-primary transition-colors font-inter">
                      contact@banasai.com
                    </a>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-body-text mb-2 font-sora">Phone</h2>
                    <a href="tel:+91XXXXXXXXXX" className="text-muted-text hover:text-primary transition-colors font-inter">
                      +91 XXXXX XXXXX
                    </a>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-body-text mb-2 font-sora">Locations</h2>
                    <p className="text-muted-text font-inter">
                      Dublin, Karnataka (Bengaluru) & across regions
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  {submitted ? (
                    <div className="card p-6 bg-green-light border-green-accent/30 text-center">
                      <h3 className="text-xl font-semibold text-green-secondary mb-2 font-sora">
                        Message Sent!
                      </h3>
                      <p className="text-muted-text font-inter">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-body-text mb-2 font-sora">
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
                        <label htmlFor="email" className="block text-sm font-medium text-body-text mb-2 font-sora">
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
                        <label htmlFor="company" className="block text-sm font-medium text-body-text mb-2 font-sora">
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
                        <label htmlFor="interest" className="block text-sm font-medium text-body-text mb-2 font-sora">
                          What are you looking for?
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-button border border-border bg-surface text-body-text focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-inter"
                        >
                          <option value="Existing Datasets">Existing Datasets</option>
                          <option value="Custom Data Contracting">Custom Data Contracting</option>
                          <option value="pH AI Tool">pH AI Tool</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-body-text mb-2 font-sora">
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