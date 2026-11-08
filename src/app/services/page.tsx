import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { engagements, faqs, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How a WebText IT project runs: discovery, design, engineering, launch, and care.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="The work around the product.">
        <p>
          WebText IT sells software, and the service that gets it into daily use. Discovery,
          design, engineering, launch, and care are how a project moves, whether the result is
          an app, a website, an ERP, a CMS, or a SaaS product.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="font-display text-4xl tracking-tight">
          Five steps
        </h2>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {services.map((service) => (
            <li key={service.step} className="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
              <p className="font-display text-4xl text-signal md:col-span-2">{service.step}</p>
              <h3 className="font-display text-3xl tracking-tight md:col-span-3">{service.title}</h3>
              <p className="text-base leading-relaxed text-muted md:col-span-7">{service.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-card" aria-labelledby="shapes-heading">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
          <h2 id="shapes-heading" className="font-display text-4xl tracking-tight">
            Three ways a project starts
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {engagements.map((item) => (
              <article key={item.title} className="rounded-[1.4rem] border border-line bg-paper p-6">
                <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 max-w-3xl">
            <h3 className="font-display text-3xl tracking-tight">The stack follows the product</h3>
            <p className="mt-4 leading-relaxed text-muted">
              Public sites and web platforms are usually built in TypeScript. Mobile apps are
              native or cross-platform when one release has to reach both iPhone and Android.
              ERP and SaaS products sit on a database you can back up, with roles and an admin
              area your staff can use. We document how to run what we ship.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="font-display text-4xl tracking-tight">
          Questions we hear first
        </h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.question} className="grid gap-3 py-6 md:grid-cols-12">
              <dt className="font-medium md:col-span-5">{item.question}</dt>
              <dd className="leading-relaxed text-muted md:col-span-7">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
      <CtaBand />
    </>
  );
}
