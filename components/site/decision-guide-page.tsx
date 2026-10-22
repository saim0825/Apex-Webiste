import Link from "next/link";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

type GuideSection = { title: string; description: string };

type DecisionGuidePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  businessTitle: string;
  businessSections: GuideSection[];
  homeTitle: string;
  homeSections: GuideSection[];
};

export function DecisionGuidePage({ eyebrow, title, intro, businessTitle, businessSections, homeTitle, homeSections }: DecisionGuidePageProps) {
  const groups = [
    { label: "Business", title: businessTitle, sections: businessSections },
    { label: "Home", title: homeTitle, sections: homeSections },
  ];

  return <div className="min-h-screen bg-[var(--site-background)] text-[var(--brand-navy-deep)]">
    <SiteHeader solid />
    <main className="pt-[88px]">
      <section className="border-b border-[var(--site-border)] bg-[#eaf0f5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--site-muted)]">{intro}</p></div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">{groups.map((group) => <div key={group.label} className="guide-group-card group rounded-2xl border border-[var(--site-border)] bg-[var(--site-surface)] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-navy-deep)] hover:bg-[var(--brand-navy-deep)] hover:shadow-xl sm:p-9"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">{group.label} guidance</p><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-white sm:text-4xl">{group.title}</h2><div className="mt-8 divide-y divide-[var(--site-border)] border-y border-[var(--site-border)] transition-colors group-hover:divide-white/15 group-hover:border-white/15">{group.sections.map((section, index) => <article key={section.title} className="py-6"><div className="flex gap-5"><span className="mt-1 text-sm font-semibold text-[var(--brand-orange)]">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-xl font-semibold transition-colors group-hover:text-white">{section.title}</h3><p className="mt-3 leading-7 text-[var(--site-muted)] transition-colors group-hover:text-blue-100/80">{section.description}</p></div></div></article>)}</div></div>)}</div>
        <div className="mt-16 flex flex-col justify-between gap-6 rounded-2xl bg-[var(--brand-navy-deep)] p-8 text-white sm:p-10 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">Ready for the next step?</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Make the decision with a clear plan.</h2><p className="mt-3 max-w-xl leading-7 text-blue-100/75">Talk with Apex about your goals, timing, and the right path forward.</p></div><Link href="/contact-us" className="inline-flex shrink-0 rounded-md bg-[var(--brand-orange)] px-6 py-3.5 font-semibold text-white transition hover:bg-[#d94d21]">Talk with an advisor <span className="ml-4">→</span></Link></div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
