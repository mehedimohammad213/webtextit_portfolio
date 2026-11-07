import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Apps, websites, custom software, ERP, CMS, and SaaS products from Webtextit.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Products" title="Software we sell and build.">
        <p>
          Choose the closest line of work. If the need sits between two of them — a portal on
          top of an ERP, a CMS inside a SaaS product — say so on the contact form and we will
          scope it as one project.
        </p>
      </PageHeader>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {products.map((product, index) => (
          <article key={product.slug} className="grid gap-6 border-b border-line py-12 md:grid-cols-12 md:py-16">
            <div className="md:col-span-4">
              <p className="font-display text-5xl text-signal">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight">{product.name}</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-muted">{product.summary}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {product.fit.map((item) => (
                  <li key={item} className="rounded-xl bg-card px-4 py-3 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/products/${product.slug}`}
                className="mt-6 inline-flex text-sm font-medium underline decoration-sand decoration-2 underline-offset-4 hover:decoration-signal"
              >
                View {product.nav}
              </Link>
            </div>
          </article>
        ))}
        <p className="max-w-2xl py-12 text-lg leading-relaxed text-muted">
          Need something adjacent — an integration, an admin tool, a booking system, a customer
          portal? Start from the closest product, or tell us the job and we will place it.
        </p>
      </div>
      <CtaBand title="Not sure which product fits?" text="Describe the people and the workflow. We will tell you which line of work it is, and what a first release could include." />
    </>
  );
}
