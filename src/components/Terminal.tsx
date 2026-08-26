"use client";

import { useMemo, useRef, useState } from "react";
import { commandRegistry, runCommand } from "@/lib/commands/commandRegistry";
import { profile } from "@/data/profile";
import { TerminalInput } from "./TerminalInput";
import { TerminalOutput, type HistoryEntry } from "./TerminalOutput";

const commandNames = commandRegistry.map((command) => command.name);

export function Terminal() {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const historyIndex = useRef(-1);
  const suggestions = useMemo(() => { const needle = input.trim().toLowerCase(); return needle.startsWith("/") && needle.length > 1 ? commandNames.filter((name) => name.startsWith(needle)).slice(0, 5) : []; }, [input]);
  function execute() { const raw = input.trim(); if (!raw) return; const result = runCommand(raw); if (result && "clear" in result) setEntries([]); else setEntries((current) => [...current, { id: Date.now(), command: raw, content: result?.content ?? <p className="text-rose-300">I don&apos;t recognize that command. Try <span className="text-amber-200">/help</span>.</p> }]); setHistory((current) => current[current.length - 1] === raw ? current : [...current, raw]); historyIndex.current = -1; setInput(""); }
  function navigateHistory(direction: "up" | "down") { if (!history.length) return; const next = direction === "up" ? Math.min(historyIndex.current + 1, history.length - 1) : Math.max(historyIndex.current - 1, -1); historyIndex.current = next; setInput(next === -1 ? "" : history[history.length - 1 - next]); }
  return <main className="terminal-glow min-h-screen bg-[#141414] text-zinc-100"><div className="flex min-h-screen flex-col" onClick={(event) => { const target = event.target as HTMLElement; if (!target.closest("a,button,input")) document.querySelector<HTMLInputElement>("[aria-label='Portfolio command']")?.focus(); }}><header className="flex h-12 items-center justify-between border-b border-white/6 px-4 sm:px-6"><p className="text-sm font-medium tracking-tight text-zinc-200">{profile.name}&apos;s portfolio</p><div className="flex items-center gap-3"><span className="hidden text-xs text-zinc-500 sm:inline">interactive workspace</span><span className="h-2 w-2 rounded-full bg-emerald-400" /></div></header><div className="flex flex-1 flex-col">{entries.length ? <div className="flex-1 overflow-y-auto"><TerminalOutput entries={entries} /></div> : <section className="flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center"><div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-amber-200/20 bg-amber-300/10 text-lg font-semibold text-amber-200">R&gt;</div><h1 className="text-xl font-medium tracking-tight text-zinc-100 sm:text-2xl">Explore my work, one command at a time.</h1><p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">Software engineer focused on backend systems, AI workflows, and developer experience.</p><div className="mt-6 flex flex-wrap justify-center gap-2">{["/projects", "/about", "/skills", "/contact"].map((command) => <button key={command} type="button" onClick={() => setInput(command)} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-amber-200/40 hover:bg-amber-300/10 hover:text-amber-100">{command}</button>)}</div></section>}<TerminalInput value={input} suggestions={suggestions} onChange={setInput} onSubmit={execute} onHistory={navigateHistory} onSuggestion={setInput} /></div></div></main>;
}
