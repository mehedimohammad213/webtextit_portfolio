"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { buttonClass, nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  function isCurrent(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="h-1 bg-signal" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={`text-sm font-medium transition hover:text-ink ${
                isCurrent(item.href) ? "text-ink" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className={buttonClass.primaryDesktop}>
            Start a project
          </Link>
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-full border border-line px-3 text-sm font-medium md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="site-menu" aria-label="Mobile" className="border-t border-line md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className="border-b border-line py-3 text-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className={`${buttonClass.primary} my-4`}>
              Start a project
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
