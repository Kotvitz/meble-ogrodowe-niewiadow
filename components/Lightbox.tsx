"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { projects } from "@/data/projects";

type LightboxProps = {
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function Lightbox({
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const project = projects[activeIndex];

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === projects.length - 1;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && !isFirst) onPrevious();
      if (event.key === "ArrowRight" && !isLast) onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isFirst, isLast, onClose, onPrevious, onNext]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 px-4 py-8"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Zamknij galerię"
        onClick={onClose}
        className="absolute right-2 top-4 flex size-11 items-center cursor-pointer justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X className="size-6" />
      </button>

      <button
        type="button"
        aria-label="Poprzednie zdjęcie"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        disabled={isFirst}
        className="fixed left-3 top-1/2 z-120 flex size-11 -translate-y-1/2 items-center cursor-pointer justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50 md:left-8 md:size-12"
      >
        <ChevronLeft className="size-7" />
      </button>

      <div
        className="relative h-full max-h-[85vh] w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      <button
        type="button"
        aria-label="Następne zdjęcie"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        disabled={isLast}
        className="fixed right-3 top-1/2 z-120 flex size-11 -translate-y-1/2 items-center cursor-pointer justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50 md:right-8 md:size-12"
      >
        <ChevronRight className="size-7" />
      </button>
    </div>
  );
}
