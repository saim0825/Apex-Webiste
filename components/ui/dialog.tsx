import type { ReactNode } from "react";

type DialogPartProps = { children: ReactNode; className?: string };

export function Dialog({ children, className = "" }: DialogPartProps) {
  return <section role="dialog" className={`rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl ${className}`}>{children}</section>;
}

export function DialogHeader({ children, className = "" }: DialogPartProps) { return <header className={`p-6 pb-0 ${className}`}>{children}</header>; }
export function DialogTitle({ children, className = "" }: DialogPartProps) { return <h2 className={`text-lg font-semibold text-[var(--text-primary)] ${className}`}>{children}</h2>; }
export function DialogDescription({ children, className = "" }: DialogPartProps) { return <p className={`mt-2 text-sm text-[var(--text-muted)] ${className}`}>{children}</p>; }
export function DialogFooter({ children, className = "" }: DialogPartProps) { return <footer className={`flex justify-end gap-3 p-6 pt-5 ${className}`}>{children}</footer>; }
