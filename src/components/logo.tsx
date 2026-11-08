import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-12 w-12", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center rounded-full"
      aria-label="WebText IT home"
    >
      <Image
        src="/logo.jpg"
        alt="WebText IT — Digital Solutions for Business"
        width={1024}
        height={1024}
        priority={priority}
        className={`${className} rounded-full object-contain`}
      />
    </Link>
  );
}
