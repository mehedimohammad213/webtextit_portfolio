import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { CtaBand } from "@/components/cta-band";
import { RouteFallback } from "@/components/route-fallback";
import { buttonClass, examplesForProduct, getProduct, products } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.short,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<RouteFallback />}>
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = examplesForProduct(product.slug);

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { label: product.name },
          ]}
        />
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.16em] text-pine">{product.nav}</p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.02] tracking-tight">
          {product.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{product.summary}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className={buttonClass.primary}>
            Ask about {product.nav}
          </Link>
          <Link href="/services" className={buttonClass.secondary}>
            How a project runs
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <section className="rounded-[1.4rem] border border-line bg-card p-6">
            <h2 className="font-display text-3xl tracking-tight">Who it is for</h2>
            <p className="mt-3 leading-relaxed text-muted">{product.audience}</p>
            <h3 className="mt-8 text-sm font-medium uppercase tracking-[0.14em] text-pine">A good fit when</h3>
            <ul className="mt-3 space-y-3">
              {product.fit.map((item) => (
                <li key={item} className="border-t border-line pt-3 text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-[1.4rem] bg-ink p-6 text-paper">
            <h2 className="font-display text-3xl tracking-tight">What you get</h2>
            <ul className="mt-4 space-y-3">
              {product.includes.map((item) => (
                <li key={item} className="border-t border-paper/15 pt-3 text-sm leading-relaxed text-paper/80">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {related.length > 0 ? (
          <section className="mt-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display text-3xl tracking-tight">
              An example of this work
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {related.map((example) => (
                <Link
                  key={example.slug}
                  href={`/work/${example.slug}`}
                  className="rounded-[1.4rem] border border-line p-6 transition hover:border-ink"
                >
                  <p className="text-sm font-medium text-pine">{example.setting}</p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight">{example.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{example.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
      <CtaBand
        title={`Start a ${product.nav} conversation.`}
        text="Tell us who will use it and what the first release has to cover. We will reply with questions or a suggested scope."
      />
    </>
  );
}
