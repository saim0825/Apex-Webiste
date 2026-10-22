import Link from "next/link";

const cards = [
  { label: "Residential", title: "Homes with a point of view.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", href: "/residential-real-estate", className: "service-stack-card service-stack-card-one" },
  { label: "Commercial", title: "Spaces built for the next move.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85", href: "/commercial-real-estate", className: "service-stack-card service-stack-card-two" },
  { label: "New Construction", title: "The future is taking shape.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85", href: "/new-construction", className: "service-stack-card service-stack-card-three" },
];

export function ServiceCardStack() {
  return <section aria-labelledby="featured-services" className="overflow-hidden bg-[var(--site-background)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">Featured paths</p><h2 id="featured-services" className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-[var(--brand-navy-deep)] sm:text-5xl">Explore the next move.</h2></div><p className="max-w-md leading-7 text-[var(--site-muted)]">Three ways Apex helps clients move with more confidence.</p></div><div className="service-stack-stage"><div className="service-stack-track">{cards.map((card) => <Link key={card.title} href={card.href} className={card.className} style={{ backgroundImage: `url('${card.image}')` }}><span className="service-stack-overlay" /><span className="relative z-10 mt-auto"><span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">{card.label}</span><span className="mt-3 block max-w-xs text-3xl font-semibold leading-tight text-white">{card.title}</span><span className="mt-6 block text-sm font-semibold text-white">Explore service <span className="ml-3">→</span></span></span></Link>)}</div></div></div></section>;
}

