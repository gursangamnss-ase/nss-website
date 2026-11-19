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
  inputClassName = "",
}) {
  const inputId = id || name;
  const isTextarea = as === "textarea";

  const defaultRounding = isTextarea ? "rounded-[22px]" : "rounded-full";

  const baseInputStyles =
    `w-full ${defaultRounding} bg-white border border-neutral-200/90 px-5 py-3.5 text-sm text-[var(--color-primary)] placeholder:text-neutral-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${inputClassName}`.trim();

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

