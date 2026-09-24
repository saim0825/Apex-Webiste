import { PanelLeftClose, PanelLeftOpen } from "./icons";
import { UserButton } from "@clerk/nextjs";

type EditorNavbarProps = { isSidebarOpen: boolean; onToggleSidebar: () => void };

export function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return <header className="fixed inset-x-0 top-0 z-40 h-12 border-b border-[var(--border-default)] bg-[var(--bg-surface)]" role="banner">
    <div className="grid h-full grid-cols-3 items-center px-4">
      <div className="flex items-center"><button type="button" onClick={onToggleSidebar} aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"} className="rounded-md p-2 text-[var(--text-muted)] transition hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--accent-primary)]">
        {isSidebarOpen ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
      </button></div>
      <div className="text-center text-sm font-medium tracking-wide text-[var(--text-primary)]">Apex Editor</div>
      <div className="flex justify-end"><UserButton /></div>
    </div>
  </header>;
}
