const modules = [
  { name: "Orders", note: "ERP" },
  { name: "Content", note: "CMS" },
  { name: "Accounts", note: "SaaS" },
];

const rows = [
  { title: "Purchase order", detail: "North warehouse", status: "Waiting" },
  { title: "Homepage", detail: "Spring catalog", status: "In review" },
  { title: "Team plan", detail: "Billing", status: "Active" },
];

export function SystemBoard() {
  return (
    <figure className="relative">
      <div
        aria-hidden="true"
        className="absolute -left-8 top-12 -z-10 hidden h-28 w-28 rounded-full bg-[#f0d2c4] sm:block"
      />
      <div className="rounded-[1.4rem] border border-line bg-card p-4 shadow-[0_30px_70px_-36px_rgba(26,22,18,0.55)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e7b2a2]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ead7a2]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#b7cbb8]" />
          </div>
          <p className="text-xs font-medium tracking-wide text-muted">Sample workspace</p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {modules.map((module) => (
            <div key={module.name} className="rounded-xl bg-paper px-3 py-3">
              <p className="font-display text-xl tracking-tight sm:text-2xl">{module.name}</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-pine">
                {module.note}
              </p>
            </div>
          ))}
        </div>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {rows.map((row) => (
            <li key={row.title} className="flex items-center justify-between gap-3 py-3 text-sm">
              <span>
                <span className="block font-medium">{row.title}</span>
                <span className="text-muted">{row.detail}</span>
              </span>
              <span className="shrink-0 rounded-full bg-sand px-2.5 py-1 text-xs">{row.status}</span>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-muted">
        A sample of the screens. The real product is designed around the workflow you have.
      </figcaption>
    </figure>
  );
}
