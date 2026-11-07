import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SystemBoard } from "@/components/system-board";
import { buttonClass, examples, industries, principles, products, services } from "@/lib/site";

const rail = [...products.map((product) => product.nav), "Integrations", "Care"];

const tones = {
  paper: "border-line bg-card text-ink",
  pine: "border-pine bg-pine text-paper",
  ink: "border-ink bg-ink text-paper",
} as const;

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine">
            Software company
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,7vw,5.4rem)] leading-[0.96] tracking-tight">
            Software your company
            <span className="block italic text-pine">can actually run.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Webtextit designs and builds apps, websites, custom software, ERP, CMS, and SaaS.
            We scope the work, ship the product, and leave your team able to use it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={buttonClass.primary}>
              Start a project
            </Link>
            <Link href="/products" className={buttonClass.secondary}>
              See what we build
            </Link>
          </div>
        </div>
        <SystemBoard />
      </section>

      <div className="overflow-hidden border-y border-line bg-card py-4" aria-hidden="true">
        <div className="rail-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-10 pr-10">
              {rail.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-10 text-sm font-medium">
                  {item}
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24" aria-labelledby="products-heading">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine">Products</p>
          <h2
            id="products-heading"
            className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl"
          >
            What Webtextit sells and builds.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Six lines of work, plus the software that sits next to them: integrations, portals,
            and the admin tools a team needs to keep going.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className={`group flex flex-col justify-between rounded-[1.4rem] border p-6 transition motion-safe:hover:-translate-y-0.5 ${
                product.wide ? "md:col-span-2" : ""
              } ${tones[product.tone]}`}
            >
              <div>
                <p className={`font-display text-3xl ${product.tone === "paper" ? "text-signal" : "text-paper/80"}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-3xl tracking-tight">{product.name}</h3>
                <p className={`mt-3 max-w-xl text-base leading-relaxed ${product.tone === "paper" ? "text-muted" : "text-paper/75"}`}>
                  {product.short}
                </p>
              </div>
              <p className="mt-8 text-sm font-medium">
                View {product.nav}
                <span aria-hidden="true"> →</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card" aria-labelledby="process-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine">How it runs</p>
            <h2 id="process-heading" className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              From the job to be done, through launch.
            </h2>
          </div>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[1.4rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <li key={service.step} className="bg-paper p-5">
                <p className="font-display text-3xl text-signal">{service.step}</p>
                <h3 className="mt-4 text-lg font-medium">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
              </li>
            ))}
          </ol>
          <Link href="/services" className="mt-8 inline-flex text-sm font-medium underline decoration-sand decoration-2 underline-offset-4 hover:decoration-signal">
            Read the services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24" aria-labelledby="work-heading">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine">Work</p>
            <h2 id="work-heading" className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              Systems we put together.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Examples of the kind of software Webtextit delivers. They describe the work, not a client list.
            </p>
          </div>
          <Link href="/work" className={buttonClass.secondary}>
            All examples
          </Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {examples.slice(0, 3).map((example) => (
            <Link
              key={example.slug}
              href={`/work/${example.slug}`}
              className="flex flex-col rounded-[1.4rem] border border-line bg-card p-6 transition motion-safe:hover:-translate-y-0.5 hover:border-ink"
            >
              <p className="text-sm font-medium text-pine">{example.setting}</p>
              <h3 className="mt-3 font-display text-3xl tracking-tight">{example.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{example.summary}</p>
              <p className="mt-6 text-sm font-medium">
                Read the example
                <span aria-hidden="true"> →</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="principles-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine">Approach</p>
            <h2 id="principles-heading" className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              Built to be used on a Tuesday.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <li key={industry} className="rounded-full border border-line bg-card px-3 py-1 text-sm">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
          <ol className="space-y-6">
            {principles.map((principle, index) => (
              <li key={principle.title} className="border-t border-line pt-6">
                <p className="text-sm font-medium text-pine">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-3xl tracking-tight">{principle.title}</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">{principle.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
