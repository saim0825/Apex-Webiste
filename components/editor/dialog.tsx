import type { ReactNode } from "react";

type EditorDialogProps = { title: string; description?: string; children?: ReactNode; footer?: ReactNode };

export function EditorDialog({ title, description, children, footer }: EditorDialogProps) {
  return <section role="dialog" aria-labelledby="editor-dialog-title" className="w-full max-w-lg rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 shadow-2xl"><h2 id="editor-dialog-title" className="text-lg font-semibold">{title}</h2>{description ? <p className="mt-2 text-sm text-[var(--text-muted)]">{description}</p> : null}<div className="mt-5">{children}</div>{footer ? <footer className="mt-6 flex justify-end gap-3">{footer}</footer> : null}</section>;
}
