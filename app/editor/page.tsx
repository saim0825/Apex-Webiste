import { EditorShell } from "@/components/editor/editor-shell";

export default function EditorPage() {
  return <EditorShell><main className="flex min-h-[calc(100vh-3rem)] items-center justify-center"><p className="text-[var(--text-muted)]">Select a project to begin.</p></main></EditorShell>;
}
