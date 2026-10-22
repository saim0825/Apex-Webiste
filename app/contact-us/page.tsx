import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SocialLinks } from "@/components/site/social-links";

export default function ContactUsPage() {
  return <div className="min-h-screen bg-[var(--site-background)] text-[var(--brand-navy-deep)]">
    <SiteHeader solid />
    <main className="pt-40">
      <section className="bg-[var(--brand-navy-deep)] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200">Contact Us</p><h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">Drop us a line.</h1><p className="mt-7 max-w-2xl text-xl leading-8 text-blue-100/85">Tell us what you are considering and an Apex consultant will help you understand the next step.</p></div></section>
      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-28">
        <form action="mailto:apexrealestateconsultants@gmail.com" method="post" encType="text/plain" className="rounded-xl border border-[var(--site-border)] bg-white p-7 shadow-sm sm:p-9"><div className="grid gap-5"><label className="grid gap-2 text-sm font-medium">Name<input required name="Name" type="text" className="rounded-md border border-[var(--site-border)] bg-[var(--site-background)] px-3 py-3 font-normal outline-none focus:border-[var(--brand-orange)]" /></label><label className="grid gap-2 text-sm font-medium">Email<input required name="Email" type="email" className="rounded-md border border-[var(--site-border)] bg-[var(--site-background)] px-3 py-3 font-normal outline-none focus:border-[var(--brand-orange)]" /></label><label className="grid gap-2 text-sm font-medium">Message<textarea required name="Message" rows={6} className="rounded-md border border-[var(--site-border)] bg-[var(--site-background)] px-3 py-3 font-normal outline-none focus:border-[var(--brand-orange)]" /></label><button type="submit" className="rounded-md bg-[var(--brand-orange)] px-6 py-3.5 font-semibold text-white transition hover:bg-[#d94d21]">Send</button></div><p className="mt-4 text-xs leading-5 text-[var(--site-muted)]">Submitting opens your email application to send the enquiry to Apex.</p></form>
        <aside className="space-y-8"><div><h2 className="text-xl font-semibold">Better yet, call us for an immediate response</h2><p className="mt-3 leading-7 text-[var(--site-muted)]">Apex Real Estate Consultants</p><p className="mt-2 text-[var(--site-muted)]"><a href="tel:3053890473" className="font-semibold text-[var(--brand-navy)] transition hover:text-[var(--brand-orange)]">305-389-0473</a> Residential</p><p className="mt-1 text-[var(--site-muted)]"><a href="tel:9543992060" className="font-semibold text-[var(--brand-navy)] transition hover:text-[var(--brand-orange)]">954-399-2060</a> Business</p></div><div><h2 className="text-xl font-semibold">Hours</h2><p className="mt-3 leading-7 text-[var(--site-muted)]">Monday–Friday: 07:00 am – 07:00 pm<br />Saturday–Sunday: By Appointment</p></div><div><h2 className="text-xl font-semibold">Connect with us</h2><div className="mt-4 rounded-xl bg-[var(--brand-navy-deep)] p-4"><SocialLinks /></div></div></aside>
      </section>
    </main>
    <SiteFooter />
  </div>;
}

