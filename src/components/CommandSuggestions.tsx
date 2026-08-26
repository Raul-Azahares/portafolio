export function CommandSuggestions({ suggestions, onSelect }: { suggestions: string[]; onSelect: (command: string) => void }) {
  if (!suggestions.length) return null;
  return <div className="absolute bottom-[calc(100%+0.6rem)] left-0 z-10 w-full max-w-sm overflow-hidden rounded-lg border border-white/10 bg-zinc-900/95 p-1 shadow-xl backdrop-blur"><p className="px-2 py-1 text-xs text-zinc-500">Suggestions</p>{suggestions.map((suggestion) => <button type="button" key={suggestion} onMouseDown={(event) => event.preventDefault()} onClick={() => onSelect(suggestion)} className="block w-full rounded px-2 py-1.5 text-left text-sm text-zinc-300 transition hover:bg-white/8 hover:text-amber-200">{suggestion}</button>)}</div>;
}
