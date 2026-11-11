"use client";

import { useState } from "react";
import FormField from "@/components/forms/FormField";
import Button from "@/components/ui/Button";
import { contactData } from "@/data/contactData";

export default function ContactForm() {
  const { form } = contactData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setErrorMessage("Please fill in all required fields correctly.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setErrorMessage("");

    // Simulate clean client-side submission with realistic response delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="rounded-[26px] bg-[var(--color-surface)] p-7 sm:p-10 shadow-sm border border-neutral-100/60">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-primary)] tracking-tight mb-8">
        {form.heading}
      </h2>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Full Name */}
        <FormField
          id="contact-name"
          name="name"
          label={form.fields.name.label}
          required
          autoComplete="name"
          value={formData.name}
          error={errors.name}
          onChange={handleChange}
          placeholder={form.fields.name.placeholder}
        />

        {/* Email Address */}
        <FormField
          id="contact-email"
          name="email"
          type="email"
          label={form.fields.email.label}
          required
          autoComplete="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
          placeholder={form.fields.email.placeholder}
        />

        {/* Message */}
        <FormField
          id="contact-message"
          name="message"
          as="textarea"
          rows={4}
          label={form.fields.message.label}
          value={formData.message}
          onChange={handleChange}
          placeholder={form.fields.message.placeholder}
        />

        {/* Response Notification Message above Submit Button */}
        {status === "success" && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-800 animate-in fade-in duration-300"
          >
            <svg
              className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold text-emerald-900">
                Message Received!
              </p>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                {form.successMessage ||
                  "Thank you! Your message has been sent successfully. We'll be in touch soon."}
              </p>
            </div>
          </div>
        )}

        {status === "error" && errorMessage && (
          <div
            role="alert"
            className="flex items-center gap-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 sm:p-3.5 text-xs sm:text-sm font-medium text-rose-700 animate-in fade-in duration-300"
          >
            <svg
              className="w-5 h-5 text-rose-600 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="dark"
            size="md"
            showArrow={false}
            disabled={status === "submitting"}
            className="w-auto px-9 py-3 text-base font-semibold shadow-md hover:shadow-lg disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : form.submitButton}
          </Button>
        </div>
      </form>
    </div>
  );
}
