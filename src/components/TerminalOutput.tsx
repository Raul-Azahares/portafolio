import type { ReactNode } from "react";

export type HistoryEntry = { id: number; command: string; content: ReactNode };

export function TerminalOutput({ entries }: { entries: HistoryEntry[] }) {
  return <div aria-live="polite" className="mx-auto w-full max-w-3xl space-y-8 px-4 py-10 sm:px-6">{entries.map((entry) => <section key={entry.id} className="space-y-3"><div className="flex items-center gap-2 text-sm text-zinc-400"><span className="grid h-6 w-6 place-items-center rounded-md bg-amber-300/15 text-xs text-amber-200">R</span><span>{entry.command}</span></div><div className="rounded-xl border border-white/7 bg-white/[0.025] px-4 py-4 text-sm leading-6 text-zinc-300 sm:px-5 sm:text-[15px]">{entry.content}</div></section>)}</div>;
}
