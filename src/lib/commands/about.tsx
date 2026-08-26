import { profile } from "@/data/profile";
import type { Command } from "./types";

export const aboutCommand: Command = { name: "/about", usage: "/about", description: "Read my professional introduction", execute: () => ({ content: <div className="max-w-2xl space-y-2"><p className="text-amber-200">{profile.name} — {profile.title}</p><p className="leading-7 text-zinc-300">{profile.about}</p><p className="text-zinc-500">This is placeholder content, intentionally ready for your details.</p></div> }) };
