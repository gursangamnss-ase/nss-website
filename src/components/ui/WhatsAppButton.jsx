"use client";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/918283030094?text=Hello%20NetSquare%20Softwares%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 select-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NetSquare Softwares on WhatsApp"
        className="group relative flex items-center justify-center size-[50px] sm:size-[56px] rounded-full bg-black border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:scale-110 active:scale-95 hover:border-white/40 hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {/* Subtle ambient ping ring (monochrome) */}
        <span
          className="absolute inset-0 rounded-full bg-white/10 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Icon (pure monochrome outline & handset) */}
        <span className="relative flex items-center justify-center size-[28px] sm:size-[32px] shrink-0 text-white">
          <svg
            viewBox="0 0 507.249 507.249"
            width="100%"
            height="100%"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M254.674,0.05C116.258,0.05,3.643,112.439,3.643,250.586c0,42.823,11.507,85.538,33.305,123.761L0,507.199l135.252-36.461c39.432,21.546,80.653,32.919,119.422,32.919c136.914,0,252.575-115.897,252.575-253.071C507.249,112.439,393.946,0.05,254.674,0.05z M254.674,461.69c-36.663,0-74.324-11.163-108.938-32.281l-4.365-2.677l-82.516,21.244l22.478-79.83l-2.946-4.591C56.941,330.173,45.61,291.11,45.61,250.586c0-115.007,93.788-208.569,209.064-208.569c116.132,0,210.608,93.562,210.608,208.569C465.282,366.986,370.805,461.69,254.674,461.69z"
            />
            <path
              fill="currentColor"
              d="M299.502,313.353c-3.785,4.919-10.265,6.841-16.132,4.784c-14.814-5.204-65.293-26.322-92.957-79.603c-2.736-5.296-1.998-11.6,1.863-16.073l19.909-23.032l-22.855-53.105l-15.553-0.848c-0.193-0.017-0.394-0.017-0.596-0.017c-2.552,0-5.002,0.898-6.925,2.577c-6.387,5.548-17.584,17.022-20.849,31.559c-5.128,22.83,3.374,50.831,23.921,78.848c13.539,18.466,54.75,74.651,132.868,96.734c18.608,5.263,35.412,3.257,49.882-6.001c9.292-5.943,15.99-15.738,18.373-26.876l2.51-11.709l-52.937-24.173L299.502,313.353z"
            />
          </svg>
        </span>

        {/* Tooltip on hover (visible on desktop) */}
        <span
          role="tooltip"
          className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-black text-white text-[12px] sm:text-[13px] font-medium py-1.5 px-3 shadow-lg opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 border border-white/15 hidden sm:inline-flex items-center gap-1.5"
        >
          <span className="size-1.5 rounded-full bg-white shrink-0" aria-hidden="true" />
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
