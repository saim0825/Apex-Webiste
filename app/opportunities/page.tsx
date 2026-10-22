import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { getPublishedProperties } from "@/lib/properties";

const propertyCards = [
  { label: "Residential", title: "Homes with a point of view.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85", href: "/residential-real-estate" },
  { label: "Commercial", title: "Spaces built for the next move.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85", href: "/commercial-real-estate" },
  { label: "New Construction", title: "The future is taking shape.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85", href: "/new-construction" },
];
const services = ["Residential and commercial sales", "Business brokerage", "Property leasing", "Property valuations", "Marketing", "Strategic negotiation"];

export default function OpportunitiesPage() {
  return <OpportunitiesContent />;
}

export const dynamic = "force-dynamic";

async function OpportunitiesContent() {
  const publishedProperties = await getPublishedProperties();
  const cards = publishedProperties.length > 0
    ? publishedProperties.map((property) => ({ title: property.title, image: property.imageUrl || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85", href: `/opportunities/${property.id}` }))
    : propertyCards.map((card) => ({ title: card.title, image: card.image, href: card.href }));
  return (
    <div className="min-h-screen bg-[var(--site-background)] text-[var(--brand-navy-deep)]">
      <SiteHeader solid />
      <main className="pt-[88px]">
        <section className="page-hero bg-[var(--brand-navy-deep)] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">Explore the possibilities</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Opportunities with a clear point of view.</h1><p className="mt-7 max-w-2xl text-xl leading-8 text-blue-100/85">Full-service real estate and business brokerage services in South Florida.</p></div>
        </section>
        <div className="page-intro-circle relative z-10 -mt-16 flex justify-center"><div className="h-32 w-32 rounded-full border-8 border-[var(--site-background)] bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85')" }} role="img" aria-label="South Florida property placeholder" /></div>
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 lg:px-12 lg:pb-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">Property portfolio</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Find the setting for what comes next.</h2></div><p className="max-w-md leading-7 text-[var(--site-muted)]">Our current opportunities are selected around your goals, timing, and the way you want to live or work.</p></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">{cards.map((card) => <Link key={card.title} href={card.href} className="group relative min-h-[28rem] overflow-hidden rounded-2xl bg-[var(--brand-navy-deep)] shadow-sm"><div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${card.image}')` }} /><div className="absolute inset-0 bg-gradient-to-t from-[#082745]/95 via-[#082745]/20 to-transparent" /><div className="relative flex min-h-[28rem] flex-col justify-end p-7 text-white"><h3 className="max-w-sm text-3xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-[var(--brand-orange)]">{card.title}</h3></div></Link>)}</div>
          <div className="mt-16 rounded-2xl bg-[var(--brand-navy-deep)] p-8 text-white shadow-lg sm:p-10"><p className="text-lg text-white/85">If You Do One Thing...</p><h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--brand-orange)]">Start with the right opportunity.</h2><p className="mt-4 max-w-2xl leading-7 text-blue-100/75">Tell us what you are looking for, and we’ll help you make the shortlist clearer.</p></div>
        </section>
        <section className="bg-[#eaf0f5] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">What we provide</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">The right guidance for the transaction in front of you.</h2></div><div><p className="text-lg leading-8 text-[var(--site-muted)]">We provide comprehensive real estate and business brokerage services to clients across South Florida, delivering expert solutions tailored to each transaction.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{services.map((service) => <div key={service} className="rounded-lg border-t-2 border-[var(--brand-orange)] bg-white p-5 shadow-sm"><p className="font-medium">{service}</p></div>)}</div></div></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}

