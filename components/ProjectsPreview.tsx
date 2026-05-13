import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p
              className="text-sm font-medium uppercase tracking-[0.25em]"
              style={{ color: "var(--primary)" }}
            >
              Realizacje
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Zobacz nasze wykonane projekty
            </h2>
          </div>

          <Link
            href="/realizacje"
            className="hidden font-medium md:inline-flex"
            style={{ color: "var(--primary)" }}
          >
            Zobacz wszystkie realizacje →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-4xl border"
              style={{ borderColor: "var(--muted)" }}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/realizacje"
          className="mt-10 inline-flex font-medium md:hidden"
          style={{ color: "var(--primary)" }}
        >
          Zobacz wszystkie realizacje →
        </Link>
      </div>
    </section>
  );
}