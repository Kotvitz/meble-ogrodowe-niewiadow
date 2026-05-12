import Link from "next/link";

const links = [
  { href: "/", label: "Start" },
  { href: "/oferta", label: "Oferta" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-black/5 backdrop-blur"
      style={{
        backgroundColor: "rgb(from var(--background) r g b / 0.9)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-(family-name:--font-lora) text-2xl font-semibold tracking-tight"
        >
          Meble Ogrodowe Niewiadów
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition"
              style={{
                color: "var(--foreground)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}