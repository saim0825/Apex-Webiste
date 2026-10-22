"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const serviceLinks = [
  ["Residential Real Estate", "/residential-real-estate"],
  ["Commercial Real Estate", "/commercial-real-estate"],
  ["Probate Services", "/probate-services"],
  ["Apex Guide", "/apex-guide"],
  ["Deal Structure", "/deal-structure"],
  ["Lease Negotiation", "/lease-negotation"],
  ["Property Management", "/property-management"],
  ["New Construction", "/new-construction"],
] as const;

export function SiteHeader({ solid = false, light = false }: { solid?: boolean; light?: boolean }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const foreground = light ? "text-[#101010]" : "text-white";
  const muted = "transition hover:text-[var(--brand-orange)]";

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBackground = hasScrolled
    ? (light ? "border-black/10 bg-[#f7f6f2]/90 text-[#101010]" : "border-white/10 bg-[var(--brand-navy-deep)]/90 text-white")
    : (light ? "border-black/5 bg-[#f7f6f2]/30 text-[#101010]" : solid ? "border-white/10 bg-[var(--brand-navy-deep)]/35 text-white" : "border-white/15 bg-[var(--brand-navy-deep)]/20 text-white");

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b backdrop-blur-xl transition-all duration-300 ${headerBackground}`}>
      <div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-12">
        <button type="button" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} onPointerDown={() => setMobileMenuOpen((open) => !open)} className={`z-40 inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border md:hidden ${light ? "border-black/25" : "border-white/40"}`}>
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1"><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /></span>
        </button>

        <Link href="/" className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-3 md:static md:translate-x-0 ${foreground}`}>
          <Image src="/apex-logo.png" alt="Apex Real Estate Consultants" width={96} height={96} priority className="h-11 w-11 rounded-full object-cover lg:h-12 lg:w-12" />
          <span className={`hidden border-l pl-3 text-xs font-medium tracking-[0.12em] sm:block ${light ? "border-black/25" : "border-white/50"}`}>REAL ESTATE CONSULTANTS</span>
        </Link>

        <nav aria-label="Main navigation" className="order-3 hidden w-full flex-wrap items-center justify-center gap-4 text-xs md:flex sm:order-none sm:w-auto sm:gap-7 sm:text-sm">
          <Link href="/" className={`font-semibold ${muted}`}>Home</Link>
          <Link href="/opportunities" className={muted}>Opportunities</Link>
          <Link href="/about-apex-real-estate" className={muted}>About Apex</Link>
          <details className="group relative">
            <summary className={`inline-flex cursor-pointer list-none items-center gap-1 ${muted} [&::-webkit-details-marker]:hidden`}>More <span aria-hidden="true" className="text-[10px] transition-transform group-open:rotate-180">▾</span></summary>
            <div role="menu" className="absolute right-0 top-8 z-50 w-64 rounded-lg border border-white/15 bg-[var(--brand-navy-deep)] p-2 text-sm shadow-2xl">
              <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">Services</p>
              {serviceLinks.map(([label, href]) => label === "Apex Guide" ? <a role="menuitem" key={href} href="/apex-guide/index.html" target="_blank" rel="noopener noreferrer" className="block rounded-md px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-[var(--brand-orange)]">{label} <span aria-hidden="true" className="ml-1 text-xs">↗</span></a> : <Link role="menuitem" key={href} href={href} className="block rounded-md px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-[var(--brand-orange)]">{label}</Link>)}
              <div className="my-2 border-t border-white/15" />
              <Link role="menuitem" href="/contact-us" className="block rounded-md px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-[var(--brand-orange)]">Contact Us</Link>
              <Link role="menuitem" href="/sell-a-business-or-home-1" className="block rounded-md px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-[var(--brand-orange)]">Sell a Business or Home</Link>
              <Link role="menuitem" href="/buying-a-business-or-home-1" className="block rounded-md px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-[var(--brand-orange)]">Buying a Business or Home</Link>
            </div>
          </details>
        </nav>

        <Link href="/contact-us" className={`hidden rounded-full border px-4 py-2 text-sm font-semibold shadow-lg transition md:inline-flex ${light ? "border-black/30 hover:bg-black/5" : "border-white/50 text-white hover:bg-white/10"}`}>Let&apos;s Talk <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-orange)] text-white">→</span></Link>

        <a href="#services" aria-label="Search services" className={`z-40 md:hidden ${foreground}`}>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
        </a>
      </div>

      {mobileMenuOpen ? <div className={`relative z-50 border-t px-5 pb-5 pt-3 md:hidden ${light ? "border-black/10 bg-[#f7f6f2]/95 text-[#101010]" : "border-white/10 bg-[var(--brand-navy-deep)]/95 text-white"}`}>
        <nav aria-label="Mobile navigation" className="grid gap-1 text-sm">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2.5 font-semibold hover:bg-white/10">Home</Link>
          <Link href="/opportunities" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2.5 hover:bg-white/10">Opportunities</Link>
          <Link href="/about-apex-real-estate" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2.5 hover:bg-white/10">About Apex</Link>
          <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">Services</p>
          {serviceLinks.map(([label, href]) => label === "Apex Guide" ? <a key={href} href="/apex-guide/index.html" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2.5 hover:bg-white/10 hover:text-[var(--brand-orange)]">{label} <span aria-hidden="true" className="ml-1 text-xs">↗</span></a> : <Link key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2.5 hover:bg-white/10 hover:text-[var(--brand-orange)]">{label}</Link>)}
          <div className="my-2 border-t border-white/15" />
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2.5 hover:bg-white/10">Contact Us</Link>
          <Link href="/sell-a-business-or-home-1" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2.5 hover:bg-white/10">Sell a Business or Home</Link>
          <Link href="/buying-a-business-or-home-1" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2.5 hover:bg-white/10">Buying a Business or Home</Link>
        </nav>
      </div> : null}
    </header>
  );
}
