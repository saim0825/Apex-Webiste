import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { siteServices, type ServiceSlug, type ServiceSection } from "@/lib/site-services";

const serviceImages: Record<string, string> = {
  "residential-real-estate": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  "commercial-real-estate": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  "probate-services": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  "apex-guide": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
  "deal-structure": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
  "lease-negotation": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  "property-management": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=85",
  "new-construction": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85",
};

function sectionSummary(section: ServiceSection) {
  return section.paragraphs?.[0] ?? section.bullets?.slice(0, 3).join(" · ") ?? "A focused service from Apex Real Estate Consultants.";
}

export function generateStaticParams() {
  return Object.keys(siteServices).map((service) => ({ service }));
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const content = siteServices[service as ServiceSlug];
  if (!content) notFound();

  const cards = content.sections.slice(0, 4);
  const details = content.sections.slice(4);
  const image = serviceImages[service] ?? serviceImages["apex-guide"];

  return <div className="min-h-screen bg-[var(--site-background)] text-[var(--brand-navy-deep)]">
    <SiteHeader solid />
    <main className="pt-[88px]">
      <section className="mx-auto max-w-[1440px] px-5 pt-14 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.68fr]">
          <div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">{content.eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--brand-navy-deep)] sm:text-7xl">{content.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--site-muted)]">{content.description}</p></div>
          <div className="relative min-h-52 overflow-hidden rounded-2xl bg-[var(--brand-navy-deep)] shadow-[0_18px_45px_rgba(8,39,69,.15)]"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} /><div className="absolute inset-0 bg-gradient-to-t from-[#082745]/90 via-[#082745]/20 to-transparent" /><p className="absolute bottom-6 left-6 right-6 text-sm font-medium uppercase tracking-[0.16em] text-white/90">South Florida / Apex Real Estate Consultants</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">Key details</p><p className="mt-3 max-w-2xl text-base leading-7 text-[var(--site-muted)]">{content.body}</p></div><Link href="/contact-us" className="rounded-full bg-[var(--brand-navy-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-orange)]">Talk with Apex <span className="ml-4">→</span></Link></div>
        <div className="grid gap-7 lg:grid-cols-[1fr_0.48fr]">
          <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">{cards.map((section, index) => <article key={section.heading} className="service-detail-card group min-h-56 border-b border-[var(--site-border)] py-8 transition duration-200"><div className="flex items-start justify-between gap-5"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-[var(--brand-navy-deep)] transition-colors group-hover:text-white">{section.heading}</h2></div><span className="text-2xl text-[var(--brand-orange)] transition-transform group-hover:translate-x-1">↗</span></div><p className="mt-4 text-base leading-7 text-[var(--site-muted)] transition-colors group-hover:text-blue-100/80">{sectionSummary(section)}</p></article>)}</div>
          <aside className="relative overflow-hidden rounded-xl bg-[var(--brand-navy-deep)] p-8 text-white shadow-[0_12px_28px_rgba(8,39,69,.2)] sm:p-10"><div className="absolute -right-14 -top-14 h-40 w-40 rounded-full border border-[var(--brand-orange)]/60" /><div className="relative flex h-full flex-col justify-between"><div><span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl font-semibold italic text-[var(--brand-navy-deep)]">#</span><p className="mt-10 text-lg text-white/90">If You Do One Thing...</p><h2 className="mt-5 text-3xl font-medium uppercase tracking-[0.03em] text-[var(--brand-orange)]">Start with clarity.</h2></div><p className="mt-12 leading-7 text-white/65">Bring us the question, the property, or the next decision. We’ll help you identify the move that makes sense.</p></div></aside>
        </div>
        {details.length > 0 ? <div className="mt-20 grid gap-8 border-t border-[var(--site-border)] pt-12">{details.map((section, index) => <section key={section.heading} className="grid gap-6 md:grid-cols-[0.28fr_0.72fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">More detail / {String(index + 5).padStart(2, "0")}</p><h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[var(--brand-navy-deep)]">{section.heading}</h2></div><div>{section.paragraphs?.map((paragraph) => <p key={paragraph} className="mb-4 max-w-3xl leading-8 text-[var(--site-muted)]">{paragraph}</p>)}{section.bullets ? <ul className="grid gap-3 sm:grid-cols-2">{section.bullets.map((bullet) => <li key={bullet} className="border-l-2 border-[var(--brand-orange)] pl-4 leading-7 text-[var(--site-muted)]">{bullet}</li>)}</ul> : null}</div></section>)}</div> : null}
      </section>
    </main>
    <SiteFooter />
  </div>;
}

