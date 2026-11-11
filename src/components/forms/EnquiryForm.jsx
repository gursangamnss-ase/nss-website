"use client";

import { useState, useEffect, useRef } from "react";
import FormField from "@/components/forms/FormField";
import Button from "@/components/ui/Button";
import { enquiryData } from "@/data/enquiryData";

export default function EnquiryForm({ form = enquiryData.form }) {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [responseMessage, setResponseMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(form.email);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
    if (status === "error") {
      setStatus("idle");
      setResponseMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setResponseMessage("Please fill in all required fields correctly.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setResponseMessage("");

    // Simulate clean client-side submission with realistic response delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("success");
    setResponseMessage(
      "Thank you! Your query has been submitted successfully. Our team will get back to you shortly."
    );
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full lg:w-[580px] rounded-[22px] sm:rounded-[26px] bg-[var(--color-surface)] p-7 sm:p-10 md:p-11 text-[var(--color-primary)] shadow-[0_24px_60px_rgba(0,0,0,0.55)] flex flex-col justify-between">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-[var(--color-primary)] tracking-tight mb-2">
          {form.title}
        </h3>

        {/* Full Name */}
        <FormField
          id="fullName"
          name="fullName"
          label="Full name"
          required
          placeholder="Riley Brooks"
          value={formData.fullName}
          error={errors.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
        />

        {/* Email Address */}
        <FormField
          id="email"
          name="email"
          type="email"
          label="Email address"
          required
          placeholder="example@gmail.com"
          value={formData.email}
          error={errors.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />

        {/* Message */}
        <FormField
          id="message"
          name="message"
          as="textarea"
          rows={4}
          label="Message"
          placeholder="Tell us the purpose"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
        />

        {/* Response Notification Message above Submit Button */}
        {status === "success" && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5 sm:p-4 text-emerald-800 animate-in fade-in duration-300"
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
                {responseMessage}
              </p>
            </div>
          </div>
        )}

        {status === "error" && responseMessage && (
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
            <span>{responseMessage}</span>
          </div>
        )}

        {/* Form Actions: Submit & Email Copy */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-2 mt-1">
          <Button
            type="submit"
            variant="dark"
            size="md"
            disabled={status === "submitting"}
            className="disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : form.submitText}
          </Button>

          {/* Email Copy Box */}
          <div className="flex flex-col items-start sm:items-end gap-1.5">
            <span className="text-xs sm:text-[13px] font-semibold text-[var(--color-text-secondary)]">
              {form.preferEmailText}
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[var(--color-primary)] hover:opacity-80 transition-opacity cursor-pointer group"
              title="Click to copy email"
              aria-label="Copy email address to clipboard"
            >
              <span>{form.email}</span>
              {copied ? (
                <span
                  role="status"
                  aria-live="polite"
                  className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full transition-all"
                >
                  Copied!
                </span>
              ) : (
                <svg
                  viewBox="0 0 50 50"
                  className="w-4 h-4 fill-[var(--color-primary)] opacity-80 group-hover:opacity-100 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M38.461 12.821c1.787 0 2.68 0 3.428.119a9.615 9.615 0 0 1 7.992 7.993c.119.747.119 1.64.119 3.427v8.333c0 7.211 0 10.817-1.837 13.344a9.6 9.6 0 0 1-2.127 2.127c-2.527 1.837-6.133 1.837-13.344 1.837H24.36a8.974 8.974 0 0 1-8.975-8.975H20c7.692 0 11.538 0 14.233-1.958a10.3 10.3 0 0 0 2.27-2.27c1.958-2.695 1.958-6.541 1.958-14.233z" />
                  <path d="M34.615 17.308c0-7.211 0-10.817-1.836-13.344a9.6 9.6 0 0 0-2.127-2.128C28.124 0 24.519 0 17.308 0S6.49 0 3.964 1.836a9.6 9.6 0 0 0-2.128 2.128C0 6.49 0 10.097 0 17.308v2.564c0 7.21 0 10.816 1.836 13.344a9.6 9.6 0 0 0 2.128 2.127c2.527 1.836 6.133 1.836 13.344 1.836h4.615c5.288 0 7.932 0 9.786-1.346a7 7 0 0 0 1.56-1.56c1.346-1.854 1.346-4.498 1.346-9.786v-7.18Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
