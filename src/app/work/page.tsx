import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { examples, getProduct } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Examples of the apps, websites, ERP, CMS, and SaaS systems Webtextit designs and delivers.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow="Work" title="Examples of the systems we deliver.">
        <p>
          These describe the kind of software Webtextit puts together. They are not a client
          list and they do not use another company&apos;s results. If one is close to your
          situation, we can scope a version for your team.
        </p>
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:px-8 md:grid-cols-2 md:py-20">
        {examples.map((example) => {
          const product = getProduct(example.productSlug);
          return (
            <Link
              key={example.slug}
              href={`/work/${example.slug}`}
              className="flex flex-col rounded-[1.4rem] border border-line bg-card p-6 transition motion-safe:hover:-translate-y-0.5 hover:border-ink"
            >
              <p className="text-sm font-medium text-pine">
                {example.setting}
                {product ? ` · ${product.nav}` : ""}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight">{example.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{example.summary}</p>
              <p className="mt-6 text-sm font-medium">
                Read the example
                <span aria-hidden="true"> →</span>
              </p>
            </Link>
          );
        })}
      </div>
      <CtaBand title="Have a system like one of these?" text="Tell us where the work breaks today. We will map it to a product and a first release." />
    </>
  );
}
