import { commandRegistry } from "./commandRegistry";
import type { Command } from "./types";

export const helpCommand: Command = {
  name: "/help", usage: "/help", description: "List available commands",
  execute: () => ({ content: <div><p className="mb-3 text-stone-300">Available commands</p><div className="space-y-1">{commandRegistry.map((command) => <p key={command.name}><span className="text-amber-300">{command.usage.padEnd(24)}</span><span className="text-zinc-400">{command.description}</span></p>)}</div><p className="mt-4 text-zinc-500">Tip: use ↑ and ↓ to browse command history.</p></div> }),
};
