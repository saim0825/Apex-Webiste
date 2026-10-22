import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function OpportunityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await prisma.property.findFirst({ where: { id, published: true } });
  if (!property) notFound();

  return <div className="min-h-screen bg-[var(--site-background)] text-[var(--brand-navy-deep)]"><SiteHeader solid /><main className="pt-[88px]"><section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-24"><div className="min-h-[28rem] rounded-2xl bg-cover bg-center shadow-lg" style={{ backgroundImage: `url('${property.imageUrl || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"}')` }} role="img" aria-label={property.title} /><article className="flex flex-col justify-center"><Link href="/opportunities" className="text-sm font-semibold text-[var(--brand-orange)]">← Back to opportunities</Link><p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">{property.category}</p><h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{property.title}</h1><p className="mt-7 text-lg leading-8 text-[var(--site-muted)]">{property.description}</p><Link href="/contact-us" className="mt-9 inline-flex w-fit rounded-md bg-[var(--brand-orange)] px-6 py-3.5 font-semibold text-white transition hover:bg-[#d94d21]">Speak with a consultant <span className="ml-4">→</span></Link></article></section></main><SiteFooter /></div>;
}
