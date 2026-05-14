"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/projects";
import Lightbox from "@/components/Lightbox";

export default function ProjectsGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current !== null && current > 0 ? current - 1 : current
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current !== null && current < projects.length - 1 ? current + 1 : current
    );
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p
            className="text-sm font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--primary)" }}
          >
            Realizacje
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight lg:text-6xl">
            Zobacz wykonane projekty
          </h1>

          <p className="mt-6 text-lg leading-8 text-black/70">
            Przykładowe altany, wiaty i drewniane konstrukcje ogrodowe wykonane
            na indywidualne zamówienie.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <button
              key={project.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-4xl border text-left cursor-pointer transition hover:border-(--secondary)"
              style={{ borderColor: "var(--muted)" }}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </section>
  );
}