"use client";

import { useState, type ReactNode } from "react";
import { EditorNavbar } from "./editor-navbar";
import { ProjectSidebar } from "./project-sidebar";

export function EditorShell({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return <div className="min-h-screen"><EditorNavbar isSidebarOpen={isSidebarOpen} onToggleSidebar={() => setIsSidebarOpen((open) => !open)} /><ProjectSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /><div className="pt-12">{children}</div></div>;
}
