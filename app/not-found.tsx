import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <p
          className="text-sm font-medium uppercase tracking-[0.25em]"
          style={{ color: "var(--secondary)" }}
        >
          Błąd 404
        </p>

        <h1 className="mt-6 text-5xl font-semibold leading-tight lg:text-7xl">
          Nie znaleziono strony
        </h1>

        <p className="mt-6 text-lg leading-8 text-black/70">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full px-8 py-4 font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Wróć na stronę główną
          </Link>

        </div>
      </div>
    </main>
  );
}