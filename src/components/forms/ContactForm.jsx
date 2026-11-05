"use client";

import { useState } from "react";
import { contactData } from "@/data/contactData";

export default function ContactForm() {
  const { form } = contactData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Simulate clean client-side submission without external API
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="rounded-[26px] bg-[var(--color-surface)] p-7 sm:p-10 shadow-sm border border-neutral-100/60">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-primary)] tracking-tight mb-8">
        {form.heading}
      </h2>

      {status === "success" ? (
        <div
          role="status"
          className="rounded-xl bg-white p-6 border border-emerald-200 text-center space-y-3"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-neutral-800">
            {form.successMessage}
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs text-neutral-500 hover:text-[var(--color-primary)] underline cursor-pointer pt-2"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {status === "error" && errorMessage && (
            <div
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-xs text-red-600 border border-red-200"
            >
              {errorMessage}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-[var(--color-primary)] mb-2"
            >
              {form.fields.name.label}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              aria-required="true"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={form.fields.name.placeholder}
              className="w-full rounded-xl bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-neutral-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-[var(--color-primary)] mb-2"
            >
              {form.fields.email.label}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              aria-required="true"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={form.fields.email.placeholder}
              className="w-full rounded-xl bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-neutral-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-[var(--color-primary)] mb-2"
            >
              {form.fields.message.label}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={form.fields.message.placeholder}
              className="w-full rounded-xl bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-neutral-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors resize-y min-h-[110px]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-8 py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60 transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              {status === "submitting" ? "Sending..." : form.submitButton}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}


