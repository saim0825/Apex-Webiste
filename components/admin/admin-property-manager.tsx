"use client";

import { useEffect, useState, type FormEvent } from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

type Property = { id: string; title: string; category: string; description: string; imageUrl: string | null; published: boolean };
type Content = { heroEyebrow: string; heroTitle: string; heroAccent: string; heroDescription: string };
type Tab = "overview" | "properties" | "content";

const emptyProperty = { title: "", category: "Residential", description: "", imageUrl: "", published: false };
const emptyContent: Content = { heroEyebrow: "", heroTitle: "", heroAccent: "", heroDescription: "" };

export function AdminPropertyManager() {
  const [tab, setTab] = useState<Tab>("overview");
  const [properties, setProperties] = useState<Property[]>([]);
  const [propertyForm, setPropertyForm] = useState(emptyProperty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [content, setContent] = useState(emptyContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;
    Promise.all([fetch("/api/admin/properties", { cache: "no-store" }), fetch("/api/admin/site-content", { cache: "no-store" })])
      .then(async ([propertiesResponse, contentResponse]) => {
        const propertiesBody = await propertiesResponse.json();
        const contentBody = await contentResponse.json();
        if (!propertiesResponse.ok || !contentResponse.ok) throw new Error(propertiesBody.error ?? contentBody.error ?? "Unable to load your content");
        if (!cancelled) { setProperties(propertiesBody); setContent(contentBody); }
      })
      .catch((error: Error) => { if (!cancelled) setMessage(error.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  async function saveProperty(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true); setMessage("");
    try {
      const response = await fetch(editingId ? `/api/admin/properties/${editingId}` : "/api/admin/properties", { method: editingId ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(propertyForm) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? "Unable to save property");
      setProperties((current) => editingId ? current.map((property) => property.id === editingId ? body : property) : [body, ...current]); setPropertyForm(emptyProperty); setEditingId(null); setMessage(editingId ? "Property updated successfully." : "Property saved successfully.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to save property"); } finally { setSaving(false); }
  }

  async function saveContent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true); setMessage("");
    try {
      const response = await fetch("/api/admin/site-content", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? "Unable to save site content");
      setContent(body); setMessage("Your homepage changes are live.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to save site content"); } finally { setSaving(false); }
  }

  async function deleteProperty(id: string) {
    if (!window.confirm("Remove this property from your website?")) return;
    const response = await fetch(`/api/admin/properties/${id}`, { method: "DELETE" });
    if (!response.ok) { setMessage("Unable to remove property."); return; }
    setProperties((current) => current.filter((property) => property.id !== id)); setMessage("Property removed.");
  }

  function editProperty(property: Property) {
    setEditingId(property.id);
    setPropertyForm({ title: property.title, category: property.category, description: property.description, imageUrl: property.imageUrl ?? "", published: property.published });
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const nav = [["overview", "Overview", "⌂"], ["properties", "Properties", "▧"], ["content", "Homepage content", "✦"]] as const;
  return <main className="min-h-screen bg-[#f4f7fa] text-[var(--brand-navy-deep)]">
    <div className="mx-auto flex min-h-screen max-w-[1500px]">
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white px-5 py-8 lg:block">
        <Link href="/" className="flex items-center gap-3"><Image src="/apex-logo-transparent.png" alt="Apex" width={44} height={44} className="h-11 w-11 rounded-full object-contain" /><span className="text-sm font-bold tracking-[0.18em]">APEX</span></Link>
        <p className="mb-4 mt-14 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Manage your website</p>
        <nav className="space-y-1" aria-label="Admin navigation">{nav.map(([key, label, icon]) => <button key={key} type="button" onClick={() => setTab(key)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${tab === key ? "bg-[#082745] text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"}`}><span className="text-lg">{icon}</span>{label}</button>)}</nav>
        <div className="mt-auto pt-16"><Link href="/" className="block rounded-xl bg-[#f4f7fa] px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100">← View public website</Link></div>
      </aside>
      <section className="min-w-0 flex-1 px-5 py-6 sm:px-8 lg:px-12 lg:py-10">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 pb-6"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-orange)]">Apex owner area</p><h1 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Welcome, Carlos Azcarate</h1><p className="mt-1 text-sm text-slate-500">Everything you need to keep your website current.</p></div><div className="flex items-center gap-3"><Link href="/" className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:border-slate-300 sm:block">View website</Link><UserButton appearance={{ variables: { colorBackground: "#ffffff", colorForeground: "#082745", colorMutedForeground: "#5c6b7a", colorPrimary: "#f15b2a" }, elements: { userButtonPopoverCard: "!border !border-slate-200 !bg-white shadow-xl", userButtonPopoverMain: "!bg-white", userPreviewMainIdentifier: "!text-[#082745]", userPreviewSecondaryIdentifier: "!text-[#5c6b7a]", userButtonPopoverActionButton: "!text-[#082745] hover:!bg-[#f4f7fa]", userButtonPopoverActionButtonText: "!text-[#082745]", userButtonPopoverActionButtonIcon: "!text-[#082745]", userButtonPopoverFooter: "!border-t !border-slate-200 !bg-[#f4f7fa]" } }} /></div></header>
        <div className="mt-6 flex gap-2 overflow-x-auto lg:hidden">{nav.map(([key, label]) => <button key={key} type="button" onClick={() => setTab(key)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${tab === key ? "bg-[#082745] text-white" : "bg-white text-slate-600"}`}>{label}</button>)}</div>
        {message && <p className="mt-5 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800" role="status">{message}</p>}
        {loading ? <div className="mt-10 rounded-2xl bg-white p-8 text-slate-500">Loading your website content…</div> : <>
          {tab === "overview" && <section className="mt-8"><div className="grid gap-5 sm:grid-cols-3"><div className="rounded-2xl bg-[#082745] p-6 text-white"><p className="text-sm text-blue-100/75">Published properties</p><p className="mt-3 text-4xl font-semibold">{properties.filter((property) => property.published).length}</p><button onClick={() => setTab("properties")} className="mt-5 text-sm font-semibold text-orange-200">Manage properties →</button></div><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-sm text-slate-500">Saved properties</p><p className="mt-3 text-4xl font-semibold">{properties.length}</p><button onClick={() => setTab("properties")} className="mt-5 text-sm font-semibold text-[var(--brand-navy)]">View all →</button></div><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-sm text-slate-500">Quick edit</p><p className="mt-3 text-lg font-semibold">Update homepage wording</p><button onClick={() => setTab("content")} className="mt-4 text-sm font-semibold text-[var(--brand-navy)]">Edit homepage →</button></div></div><div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">Simple workflow</p><h2 className="mt-3 text-2xl font-semibold">Keep Apex looking its best.</h2><div className="mt-6 grid gap-5 md:grid-cols-3"><div><span className="text-2xl">01</span><h3 className="mt-2 font-semibold">Add a property</h3><p className="mt-1 text-sm leading-6 text-slate-500">Add a title, description, and photo URL for a new opportunity.</p></div><div><span className="text-2xl">02</span><h3 className="mt-2 font-semibold">Review before publishing</h3><p className="mt-1 text-sm leading-6 text-slate-500">Keep new listings as drafts until you are happy with the details.</p></div><div><span className="text-2xl">03</span><h3 className="mt-2 font-semibold">Publish with one click</h3><p className="mt-1 text-sm leading-6 text-slate-500">Published content becomes available to visitors on the public site.</p></div></div></div></section>}
          {tab === "content" && <section className="mt-8 max-w-3xl"><div className="mb-6"><h2 className="text-2xl font-semibold">Homepage content</h2><p className="mt-2 text-sm leading-6 text-slate-500">Change the words visitors see in the first section of your website. You do not need to edit code.</p></div><form onSubmit={saveContent} className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"><label className="block"><span className="text-sm font-semibold">Small heading</span><input required value={content.heroEyebrow} onChange={(event) => setContent({ ...content, heroEyebrow: event.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-orange)]" /></label><label className="block"><span className="text-sm font-semibold">Main heading</span><input required value={content.heroTitle} onChange={(event) => setContent({ ...content, heroTitle: event.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-orange)]" /></label><label className="block"><span className="text-sm font-semibold">Highlighted heading</span><input required value={content.heroAccent} onChange={(event) => setContent({ ...content, heroAccent: event.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-orange)]" /></label><label className="block"><span className="text-sm font-semibold">Description</span><textarea required rows={4} value={content.heroDescription} onChange={(event) => setContent({ ...content, heroDescription: event.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-orange)]" /></label><button disabled={saving} className="rounded-lg bg-[var(--brand-orange)] px-5 py-3 font-semibold text-white hover:bg-[#d94d21] disabled:opacity-60">{saving ? "Saving…" : "Save homepage changes"}</button></form></section>}
          {tab === "properties" && <section className="mt-8"><div className="mb-6"><h2 className="text-2xl font-semibold">Properties</h2><p className="mt-2 text-sm text-slate-500">Add opportunities and decide when they should appear publicly.</p></div><form onSubmit={saveProperty} className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-2"><input required value={propertyForm.title} onChange={(event) => setPropertyForm({ ...propertyForm, title: event.target.value })} placeholder="Property title" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-orange)]" /><select value={propertyForm.category} onChange={(event) => setPropertyForm({ ...propertyForm, category: event.target.value })} className="rounded-lg border border-slate-200 px-4 py-3"><option>Residential</option><option>Commercial</option><option>New Construction</option><option>Business</option></select><textarea required value={propertyForm.description} onChange={(event) => setPropertyForm({ ...propertyForm, description: event.target.value })} placeholder="Short description" rows={3} className="md:col-span-2 rounded-lg border border-slate-200 px-4 py-3" /><input value={propertyForm.imageUrl} onChange={(event) => setPropertyForm({ ...propertyForm, imageUrl: event.target.value })} placeholder="Photo URL" className="md:col-span-2 rounded-lg border border-slate-200 px-4 py-3" /><label className="flex items-center gap-3 text-sm text-slate-600"><input type="checkbox" checked={propertyForm.published} onChange={(event) => setPropertyForm({ ...propertyForm, published: event.target.checked })} />Publish now</label><div className="flex gap-3"><button disabled={saving} className="rounded-lg bg-[var(--brand-orange)] px-5 py-3 font-semibold text-white hover:bg-[#d94d21] disabled:opacity-60">{saving ? "Saving…" : editingId ? "Save changes" : "Add property"}</button>{editingId && <button type="button" onClick={() => { setEditingId(null); setPropertyForm(emptyProperty); }} className="rounded-lg border border-slate-200 px-5 py-3 font-semibold text-slate-600">Cancel</button>}</div></form><div className="mt-8 space-y-3">{properties.length === 0 ? <p className="rounded-xl bg-white p-6 text-sm text-slate-500">No properties added yet.</p> : properties.map((property) => <article key={property.id} className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between"><div><div className="flex flex-wrap items-center gap-3"><h3 className="font-semibold">{property.title}</h3><span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-orange)]">{property.category}</span><span className={`text-xs font-bold uppercase tracking-[0.14em] ${property.published ? "text-emerald-700" : "text-slate-400"}`}>{property.published ? "Published" : "Draft"}</span></div><p className="mt-2 text-sm text-slate-500">{property.description}</p></div><div className="flex gap-2"><button type="button" onClick={() => editProperty(property)} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-[var(--brand-navy)] hover:bg-slate-50">Edit</button><button type="button" onClick={() => deleteProperty(property.id)} className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50">Remove</button></div></article>)}</div></section>}
        </>}
      </section>
    </div>
  </main>;
}
