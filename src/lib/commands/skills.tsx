import { skills } from "@/data/skills";
import type { Command } from "./types";

export const skillsCommand: Command = { name: "/skills", usage: "/skills", description: "Explore my technical toolkit", execute: () => ({ content: <div className="grid max-w-3xl gap-x-12 gap-y-4 sm:grid-cols-2">{Object.entries(skills).map(([category, items]) => <div key={category}><p className="text-amber-200">{category}</p><p className="mt-1 leading-6 text-zinc-400">{items.join(" · ")}</p></div>)}</div> }) };
