import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ServiceCardStack } from "@/components/site/service-card-stack";
import Link from "next/link";
import { getSiteContent } from "@/lib/site-content";
import { getPublishedProperties } from "@/lib/properties";

const services = [
  { title: "Residential Real Estate", text: "Guidance for buying, selling, and leasing homes across South Florida.", href: "/residential-real-estate" },
  { title: "Commercial Real Estate", text: "Practical support for commercial property decisions, leasing, and investment opportunities.", href: "/commercial-real-estate" },
  { title: "Business Brokerage", text: "Confidential guidance for owners and buyers navigating a business transition.", href: "https://reliablebusinessbrokers.com/home" },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();
  const publishedProperties = await getPublishedProperties();
  return <div className="min-h-screen bg-[var(--site-background)] text-[var(--brand-navy-deep)]">
    {/* Shared header mirrors the client's live navigation and Services menu. */}
    <SiteHeader />
    {/* <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 bg-[var(--brand-navy-deep)]/25 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3"><Image src="/apex-logo.png" alt="Apex Real Estate Consultants" width={96} height={96} priority className="h-12 w-12 rounded-full object-cover" /><span className="hidden border-l border-white/50 pl-3 text-xs font-medium tracking-[0.12em] sm:block">REAL ESTATE CONSULTANTS</span></a>
        <nav aria-label="Main navigation" className="order-3 flex w-full flex-wrap justify-center gap-4 text-xs sm:order-none sm:w-auto sm:gap-7 sm:text-sm"><a href="#top" className="relative font-semibold text-white after:absolute after:-bottom-3 after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rounded-full after:bg-[var(--brand-orange)]">Home</a><a href="#services" className="hover:text-orange-200">Services</a><a href="#about" className="hover:text-orange-200">Approach</a><a href="#opportunities" className="hover:text-orange-200">Markets</a><a href="#about" className="hover:text-orange-200">Insights</a><a href="#contact" className="hover:text-orange-200">Contact</a></nav>
        <a href="#contact" className="rounded-full border border-white/50 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-white/10">Let&apos;s Talk <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-orange)] text-white">→</span></a>
      </div>
    </header> */}

    <main id="top">
      <section className="relative isolate overflow-hidden bg-[var(--site-background)] text-[var(--brand-navy-deep)]"><div className="absolute inset-y-0 right-0 w-full bg-cover bg-center lg:w-[58%]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=1800&q=85')" }} /><div className="absolute inset-y-0 right-0 w-full bg-gradient-to-r from-[var(--site-background)] via-[var(--site-background)]/90 to-transparent lg:w-[64%]" /><div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20"><div className="max-w-2xl"><p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--brand-orange)]">{content.heroEyebrow}</p><h1 className="max-w-2xl text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-[var(--brand-navy-deep)] sm:text-5xl lg:text-[4.25rem]"><span className="block whitespace-nowrap">{content.heroTitle}</span><span className="block text-[var(--brand-orange)]">{content.heroAccent}</span></h1><p className="mt-6 max-w-lg text-base leading-7 text-[var(--site-muted)] sm:text-lg">{content.heroDescription}</p><div className="mt-7 flex flex-wrap gap-4"><a href="#services" className="rounded-md bg-[var(--brand-orange)] px-6 py-3.5 font-semibold text-white transition hover:bg-[#d94d21]">Explore services <span className="ml-4">→</span></a><Link href="/contact-us" className="rounded-md border border-[var(--brand-navy-deep)] px-6 py-3.5 font-semibold text-[var(--brand-navy-deep)] transition hover:bg-[var(--brand-navy-deep)] hover:text-white">Talk with an advisor</Link></div></div></div></section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">What we do</p><div className="mt-4 max-w-3xl"><h2 className="font-sans text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--brand-navy-deep)] sm:text-5xl">Guidance for your next move.</h2><p className="mt-5 max-w-xl leading-7 text-[var(--site-muted)]">One trusted point of contact for property, business, and investment decisions.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{services.map((service) => <article key={service.title} className="home-service-card group rounded-xl border border-[var(--site-border)] bg-[var(--site-surface)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="mb-10 h-1 w-12 bg-[var(--brand-orange)]" /><h3 className="text-xl font-semibold text-[var(--brand-navy-deep)] transition-colors">{service.title}</h3><p className="mt-4 min-h-20 leading-7 text-[var(--site-muted)] transition-colors">{service.text}</p><a href={service.href} className="mt-6 inline-block font-semibold text-[var(--brand-navy)] transition-colors">Explore service <span aria-hidden="true">→</span></a></article>)}</div></section>

      <ServiceCardStack />

      <section id="opportunities" className="bg-[#eaf0f5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">Opportunities</p><div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="font-sans text-4xl font-semibold tracking-[-0.04em] text-[var(--brand-navy-deep)] sm:text-5xl">Find your next opportunity.</h2><Link href="/contact-us" className="font-semibold text-[var(--brand-navy)]">Speak with a consultant →</Link></div>{publishedProperties.length > 0 ? <div className="mt-10 grid gap-5 md:grid-cols-3">{publishedProperties.slice(0, 3).map((property) => <Link key={property.id} href="/opportunities" className="group overflow-hidden rounded-xl bg-[var(--brand-navy-deep)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="h-52 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${property.imageUrl || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"}')` }} /><div className="border-t border-white/10 px-5 py-5 text-white"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">{property.category}</p><h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">{property.title}</h3></div></Link>)}</div> : <div className="mt-10 rounded-xl border border-dashed border-[var(--site-border)] bg-white/70 px-6 py-16 text-center"><h3 className="text-xl font-semibold text-[var(--brand-navy-deep)]">Opportunities are being prepared.</h3><p className="mx-auto mt-3 max-w-lg leading-7 text-[var(--site-muted)]">Contact Apex for current residential, commercial, and business opportunities. We will share details that are confirmed and relevant to your goals.</p></div>}</div></section>

    </main>

    <SiteFooter />
  </div>;
}
