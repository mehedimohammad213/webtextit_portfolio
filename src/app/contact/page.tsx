import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a software project with WebText IT.",
  alternates: { canonical: "/contact" },
};

const notes = [
  {
    title: "What to include",
    text: "Who will use the software, what it has to do, any tool it must connect to, and when you hope to be live.",
  },
  {
    title: "What happens next",
    text: "We read the note and reply with questions, or with a suggested first step and the product line it belongs to.",
  },
  {
    title: "Email directly",
    text: site.email,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Tell us about the software you need.">
        <p>
          Apps, websites, custom software, ERP, CMS, SaaS, or something that sits beside them.
          A short outline is enough to start.
        </p>
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="space-y-4 md:col-span-5">
          {notes.map((note) => (
            <section key={note.title} className="rounded-[1.4rem] border border-line bg-card p-6">
              <h2 className="font-display text-2xl tracking-tight">{note.title}</h2>
              {note.title === "Email directly" ? (
                <a href={`mailto:${site.email}`} className="mt-3 inline-block text-pine underline decoration-sand underline-offset-4">
                  {note.text}
                </a>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-muted">{note.text}</p>
              )}
            </section>
          ))}
        </aside>
      </div>
    </>
  );
}
