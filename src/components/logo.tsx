import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 rounded-md ${inverted ? "text-paper" : "text-ink"}`}
    >
      <Mark />
      <span className="font-display text-[1.35rem] leading-none tracking-tight">
        Webtextit
      </span>
    </Link>
  );
}

export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="8" fill="#1a1612" />
      <rect x="6.5" y="6.5" width="12" height="12" rx="2" fill="#f3efe6" />
      <rect x="13.5" y="13.5" width="12" height="12" rx="2" fill="#d64115" />
    </svg>
  );
}
