import { projects } from "@/data/projects";
import type { Command } from "./types";

export const projectCommand: Command = { name: "/project", usage: "/project <name>", description: "Open a project by its name", execute: (args) => {
  const query = args.join(" ").toLowerCase().replace(/\s+/g, "");
  const project = projects.find((item) => item.slug === query || item.name.toLowerCase() === query);
  if (!query) return { content: <p className="text-zinc-400">Usage: <span className="text-amber-300">/project ai-troubleshooting-agent</span></p> };
  if (!project) return { content: <p className="text-rose-300">Project not found: {args.join(" ")}. Try <span className="text-amber-300">/projects</span>.</p> };
  return { content: <div className="max-w-2xl space-y-3"><div><p className="text-amber-200">{project.name}</p><p className="text-zinc-400">{project.tagline}</p></div><p className="leading-7 text-zinc-300">{project.description}</p><p><span className="text-zinc-500">Stack: </span>{project.technologies.join(" · ")}</p><div><p className="text-zinc-500">Features</p><ul className="mt-1 space-y-1 text-zinc-300">{project.features.map((feature) => <li key={feature}>• {feature}</li>)}</ul></div><div className="flex flex-wrap gap-x-4 gap-y-2">{project.github && <a className="text-amber-300 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-100" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.demo && <a className="text-amber-300 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-100" href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}</div></div> };
} };
