import { experience } from "@/data/experience";
import type { Command } from "./types";

export const experienceCommand: Command = { name: "/experience", usage: "/experience", description: "View professional experience", execute: () => ({ content: <div className="space-y-5">{experience.map((item) => <div key={item.period}><p className="text-zinc-500">{item.period}</p><p className="text-amber-200">{item.role} <span className="text-zinc-400">@ {item.company}</span></p><p className="mt-1 text-zinc-300">{item.summary}</p></div>)}</div> }) };
