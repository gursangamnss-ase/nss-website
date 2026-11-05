"use client";

import { useRef, useState } from "react";

export default function AboutHeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full sm:w-[360px] lg:w-[410px] aspect-[410/236] rounded-2xl overflow-hidden bg-neutral-900 shadow-md">
      <video
        ref={videoRef}
        src="/videos/about_video.mp4"
        poster="/images/about/hero-video-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />

      {/* Floating Play/Pause Toggle Button matching Framer reference */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-10 h-10 rounded-full bg-white text-[var(--color-primary)] flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] cursor-pointer z-10"
      >
        {isPlaying ? (
          /* Pause Icon (two vertical bars) */
          <svg
            className="w-3 h-3.5 fill-current"
            viewBox="0 0 11 14"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4.107 1.893v10.214A1.393 1.393 0 0 1 2.715 13.5H2.25a1.393 1.393 0 0 1-1.393-1.393V1.893A1.393 1.393 0 0 1 2.25.5h.465a1.393 1.393 0 0 1 1.392 1.393M8.75.5h-.464a1.393 1.393 0 0 0-1.393 1.393v10.214A1.393 1.393 0 0 0 8.286 13.5h.464a1.393 1.393 0 0 0 1.393-1.393V1.893A1.393 1.393 0 0 0 8.75.5" />
          </svg>
        ) : (
          /* Play Icon (triangle) */
          <svg
            className="w-3 h-3.5 fill-current ml-0.5"
            viewBox="0 0 12 13"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M11 5.634a1 1 0 0 1 0 1.732l-9 5.196a1 1 0 0 1-1.5-.866V1.304A1 1 0 0 1 2 .438z" />
          </svg>
        )}
      </button>
    </div>
  );
}

