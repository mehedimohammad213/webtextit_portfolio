import Link from "next/link";
import { buttonClass } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col px-5 py-24 sm:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine">404</p>
      <h1 className="mt-4 max-w-xl font-display text-5xl tracking-tight">This page is not on the site.</h1>
      <p className="mt-4 max-w-lg text-lg text-muted">
        The link may be out of date. The products, services, and contact pages are still here.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonClass.primary}>
          Back home
        </Link>
        <Link href="/contact" className={buttonClass.secondary}>
          Contact
        </Link>
      </div>
    </div>
  );
}
