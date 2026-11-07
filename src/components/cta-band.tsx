import Link from "next/link";
import { buttonClass } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Tell us what the software needs to do.",
  text = "Share the workflow, who will use it, and any system it has to connect to. We reply with a clear next step.",
}: CtaBandProps) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-paper/60">
            Next step
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/75">{text}</p>
        </div>
        <Link href="/contact" className={buttonClass.onDark}>
          Start a project
        </Link>
      </div>
    </section>
  );
}
