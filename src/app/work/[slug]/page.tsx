import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { CtaBand } from "@/components/cta-band";
import { RouteFallback } from "@/components/route-fallback";
import { buttonClass, examples, getExample, getProduct } from "@/lib/site";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return examples.map((example) => ({ slug: example.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const example = getExample(slug);
  if (!example) return { title: "Work" };
  return {
    title: example.title,
    description: example.summary,
    alternates: { canonical: `/work/${example.slug}` },
  };
}

export default function WorkExamplePage({ params }: WorkPageProps) {
  return (
    <Suspense fallback={<RouteFallback />}>
      <WorkContent params={params} />
    </Suspense>
  );
}

async function WorkContent({ params }: WorkPageProps) {
  const { slug } = await params;
  const example = getExample(slug);
  if (!example) notFound();
  const product = getProduct(example.productSlug);

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/work", label: "Work" },
            { label: example.title },
          ]}
        />
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.16em] text-pine">
          {example.setting}
          {product ? ` · ${product.nav}` : ""}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.02] tracking-tight">
          {example.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{example.summary}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          This is an example of the kind of system we design and deliver, written so you can
          see the shape of the work.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <section className="rounded-[1.4rem] border border-line p-6">
            <h2 className="font-display text-3xl tracking-tight">The situation</h2>
            <ul className="mt-4 space-y-3">
              {example.situation.map((item) => (
                <li key={item} className="border-t border-line pt-3 text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-[1.4rem] bg-pine p-6 text-paper">
            <h2 className="font-display text-3xl tracking-tight">What gets built</h2>
            <ul className="mt-4 space-y-3">
              {example.delivered.map((item) => (
                <li key={item} className="border-t border-paper/20 pt-3 text-sm leading-relaxed text-paper/85">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {product ? (
          <div className="mt-12 flex flex-col gap-4 rounded-[1.4rem] border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-pine">Related product</p>
              <h2 className="mt-1 font-display text-3xl tracking-tight">{product.name}</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{product.short}</p>
            </div>
            <Link href={`/products/${product.slug}`} className={buttonClass.primary}>
              View {product.nav}
            </Link>
          </div>
        ) : null}
      </article>
      <CtaBand />
    </>
  );
}
