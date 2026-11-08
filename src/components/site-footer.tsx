import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, products, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo className="h-16 w-16" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            WebText IT designs, builds, and supports software products: apps,
            websites, custom software, ERP, CMS, and SaaS.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm font-medium">Visit</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-sm font-medium">Products</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted">
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`} className="hover:text-ink">
                  {product.nav}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium">Email</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-sm text-muted hover:text-ink"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 WebText IT</p>
          <p>Apps, web, software, ERP, CMS, and SaaS.</p>
        </div>
      </div>
    </footer>
  );
}
