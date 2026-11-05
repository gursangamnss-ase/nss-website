"use client";

import { useState, useEffect, useRef } from "react";
import FormField from "@/components/forms/FormField";
import { enquiryData } from "@/data/enquiryData";

export default function EnquiryForm({ form = enquiryData.form }) {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full lg:w-[580px] rounded-[22px] sm:rounded-[26px] bg-[var(--color-surface)] p-7 sm:p-10 md:p-11 text-[var(--color-primary)] shadow-[0_24px_60px_rgba(0,0,0,0.55)] flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />

        {/* Form Actions: Submit & Email Copy */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-3 mt-1">
          <button
            type="submit"
            className="bg-[var(--color-primary)] hover:bg-neutral-800 text-white font-medium text-base px-10 py-3.5 rounded-full transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
          >
            {form.submitText}
          </button>
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
