"use client";

import { useEffect, useRef, useState } from "react";
import { CommandSuggestions } from "./CommandSuggestions";

type Props = { value: string; suggestions: string[]; onChange: (value: string) => void; onSubmit: () => void; onHistory: (direction: "up" | "down") => void; onSuggestion: (value: string) => void };

export function TerminalInput({ value, suggestions, onChange, onSubmit, onHistory, onSuggestion }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { setSelectedIndex(-1); }, [suggestions]);
  const submit = () => { if (value.trim()) onSubmit(); };
  return <div className="relative mx-auto w-full max-w-3xl px-4 pb-5 sm:px-6 sm:pb-7"><CommandSuggestions suggestions={suggestions} selectedIndex={selectedIndex} onSelect={onSuggestion} /><div className="rounded-2xl border border-white/12 bg-[#1b1b1b] p-2 shadow-2xl shadow-black/30 transition focus-within:border-amber-200/50"><div className="flex min-h-12 items-center gap-3 px-3"><button type="button" aria-label="Command options" className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-lg leading-none text-zinc-400 transition hover:bg-white/8 hover:text-zinc-100">+</button><input ref={inputRef} value={value} onChange={(event) => onChange(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); if (suggestions.length && selectedIndex >= 0) onSuggestion(suggestions[selectedIndex]); else submit(); return; } if (event.key === "ArrowUp") { event.preventDefault(); if (suggestions.length) setSelectedIndex((current) => current <= 0 ? suggestions.length - 1 : current - 1); else onHistory("up"); return; } if (event.key === "ArrowDown") { event.preventDefault(); if (suggestions.length) setSelectedIndex((current) => current >= suggestions.length - 1 ? 0 : current + 1); else onHistory("down"); return; } if (event.key === "Tab" && suggestions.length) { event.preventDefault(); onSuggestion(suggestions[selectedIndex >= 0 ? selectedIndex : 0]); } if (event.key === "Escape" && suggestions.length) setSelectedIndex(-1); }} aria-label="Portfolio command" autoComplete="off" spellCheck="false" className="min-w-0 flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500 sm:text-[15px]" placeholder="Ask about my work or type /help" /><span className="hidden text-xs text-zinc-500 sm:inline">commands</span><button type="button" onClick={submit} aria-label="Run command" className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-300 text-lg font-medium text-zinc-950 transition hover:bg-amber-200 disabled:opacity-40" disabled={!value.trim()}>↑</button></div><div className="flex items-center justify-between border-t border-white/6 px-3 pt-2 text-[11px] text-zinc-500"><span>Enter to run · ↑↓ history</span><span className="text-amber-200/75">local portfolio</span></div></div></div>;
}
