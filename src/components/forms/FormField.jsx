export default function FormField({
  label,
  id,
  name,
  type = "text",
  as = "input",
  rows = 4,
  value,
  onChange,
  placeholder = "",
  required = false,
  autoComplete,
  error,
  className = "",
}) {
  const inputId = id || name;
  const isTextarea = as === "textarea";

  const baseInputStyles =
    "w-full rounded-xl bg-white border border-[var(--color-border-subtle)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-text-secondary)]/60 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors";

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--color-primary)]"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
        </label>
      )}

      {isTextarea ? (
        <textarea
          id={inputId}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          className={`${baseInputStyles} resize-y min-h-[110px]`}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          autoComplete={autoComplete}
          className={baseInputStyles}
        />
      )}

      {error && (
        <p className="text-xs text-red-600 mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

