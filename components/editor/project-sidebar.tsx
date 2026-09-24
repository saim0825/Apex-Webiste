"use client";

import { useState } from "react";
import { Plus, X } from "./icons";

type ProjectSidebarProps = { isOpen: boolean; onClose: () => void };

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  const [tab, setTab] = useState<"projects" | "shared">("projects");
  return <aside className={`fixed bottom-0 left-0 top-12 z-30 flex w-80 flex-col border-r border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl transition-transform duration-200 ${isOpen ? "translate-x-0" : "-translate-x-full"}`} aria-hidden={!isOpen}>
    <div className="flex h-14 items-center justify-between border-b border-[var(--border-default)] px-4"><h2 className="font-semibold">Projects</h2><button type="button" onClick={onClose} aria-label="Close project sidebar" className="rounded-md p-2 text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"><X className="h-5 w-5" /></button></div>
    <div className="p-4"><div role="tablist" aria-label="Project views" className="grid grid-cols-2 rounded-md bg-[var(--bg-elevated)] p-1"><button role="tab" aria-selected={tab === "projects"} onClick={() => setTab("projects")} className={`rounded px-3 py-2 text-sm ${tab === "projects" ? "bg-[var(--bg-surface)] text-[var(--text-primary)]" : "text-[var(--text-muted)]"}`}>My Projects</button><button role="tab" aria-selected={tab === "shared"} onClick={() => setTab("shared")} className={`rounded px-3 py-2 text-sm ${tab === "shared" ? "bg-[var(--bg-surface)] text-[var(--text-primary)]" : "text-[var(--text-muted)]"}`}>Shared</button></div></div>
    <div className="flex flex-1 items-center justify-center px-6 text-center text-sm text-[var(--text-muted)]" role="tabpanel">{tab === "projects" ? "Your projects will appear here." : "Shared projects will appear here."}</div>
    <div className="p-4"><button type="button" className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--accent-primary)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"><Plus className="h-4 w-4" />New Project</button></div>
  </aside>;
}
