type PageHeaderProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02] tracking-tight">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{children}</div>
      </div>
    </header>
  );
}
