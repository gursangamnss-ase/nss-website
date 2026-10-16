export default function ServiceFeatureTag({ label, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[15px] font-normal text-white sm:text-[16px] lg:text-[18px] leading-tight ${className}`}
    >
      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full bg-white"
      />
      <span>{label}</span>
    </span>
  );
}
