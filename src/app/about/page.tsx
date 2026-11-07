import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { principles, products } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Webtextit is a software company that designs, builds, and supports apps, websites, custom software, ERP, CMS, and SaaS.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="A software company that stays through launch.">
        <p>
          Webtextit designs, builds, and supports the products a business uses to do its work:
          customer and staff apps, websites, custom software, ERP, content systems, and SaaS.
        </p>
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl tracking-tight">How we take on work</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              A project starts with the job to be done. We write down who uses the software,
              what it must do, and what is out of scope. Then we design the flows, build the
              product, move the data, and show the team how everyday tasks work.
            </p>
            <p>
              We work with the people who will live in the software — operations, editors,
              finance, field staff — as well as the person who approves the project. Ordinary
              tasks should be possible without calling a developer.
            </p>
            <p>
              After launch, care is available so the system does not stall the first time the
              business changes. You work with the people designing and building the product.
              There is a named contact, and scope stays in writing.
            </p>
          </div>
        </div>
        <aside className="rounded-[1.4rem] bg-ink p-6 text-paper md:col-span-5">
          <h2 className="font-display text-3xl tracking-tight">What we sell</h2>
          <ul className="mt-4 divide-y divide-paper/15">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="flex items-baseline justify-between gap-4 py-3 text-sm hover:text-paper/80"
                >
                  <span>{product.name}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="border-t border-line" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
          <h2 id="principles-heading" className="font-display text-4xl tracking-tight">
            What we hold to
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <li key={principle.title} className="rounded-[1.4rem] border border-line bg-card p-6">
                <p className="font-display text-3xl text-signal">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-2xl tracking-tight">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{principle.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
