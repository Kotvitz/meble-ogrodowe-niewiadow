import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsGallery() {
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
            Przykładowe altany, wiaty i drewniane konstrukcje ogrodowe
            wykonane na indywidualne zamówienie.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.image}
              className="group overflow-hidden rounded-4xl border"
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

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}