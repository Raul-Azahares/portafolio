import { certifications } from "@/data/certifications";
import type { Command } from "./types";

export const certificationsCommand: Command = { name: "/certifications", usage: "/certifications", description: "List certifications", execute: () => ({ content: <div className="space-y-3">{certifications.map((item) => <p key={item.name}><span className="text-amber-200">{item.name}</span><span className="text-zinc-500"> — {item.issuer}, {item.year}</span></p>)}</div> }) };
