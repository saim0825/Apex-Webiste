import type { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode; mode: "sign-in" | "sign-up" }) {
  return <main className="relative grid min-h-screen bg-cover bg-center lg:grid-cols-2" style={{ backgroundImage: "url('/apex-background.png')" }}>
    <div className="pointer-events-none absolute inset-0 bg-[#04152d]/20" aria-hidden="true" />
    <section className="relative z-10 hidden min-h-screen lg:block" aria-label="Apex Real Estate Consultants" />
    <section className="relative z-10 flex items-center justify-center p-6 sm:p-10"><div className="w-full max-w-md">{children}</div></section>
  </main>;
}
