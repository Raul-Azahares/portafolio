import { projects } from "@/data/projects";
import type { Command } from "./types";

const findProject = (raw: string) => {
  const index = Number(raw);
  if (Number.isInteger(index) && index >= 1 && index <= projects.length) return projects[index - 1];
  const query = raw.toLowerCase().replace(/\s+/g, "");
  const exact = projects.find((item) => item.slug === query || item.name.toLowerCase().replace(/\s+/g, "") === query);
  if (exact) return exact;
  const matches = projects.filter((item) => item.slug.includes(query) || item.name.toLowerCase().includes(raw.toLowerCase()));
  return matches.length === 1 ? matches[0] : undefined;
};

export const projectCommand: Command = { name: "/project", usage: "/project <name|number>", description: "Open a project by its name, a partial name, or its number in /projects", execute: (args, context) => {
  const raw = args.join(" ").trim();
  const project = raw ? findProject(raw) : undefined;
  if (!raw) return { content: <p className="text-zinc-400">Usage: <span className="text-amber-300">/project ai-troubleshooting-agent</span> or <span className="text-amber-300">/project 1</span></p> };
  if (!project) return { content: <p className="text-rose-300">Project not found: {raw}. Try <span className="text-amber-300">/projects</span>.</p> };
  return { content: <div className="max-w-2xl space-y-3"><div><p className="text-amber-200">{project.name}</p><p className="text-zinc-400">{project.tagline}</p></div><p className="leading-7 text-zinc-300">{project.description}</p><p><span className="text-zinc-500">Stack: </span>{project.technologies.join(" · ")}</p><div><p className="text-zinc-500">Features</p><ul className="mt-1 space-y-1 text-zinc-300">{project.features.map((feature) => <li key={feature}>• {feature}</li>)}</ul></div><div className="flex flex-wrap gap-x-4 gap-y-2">{project.github && <a className="text-amber-300 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-100" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.demo && <a className="text-amber-300 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-100" href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}</div><button type="button" onClick={() => context?.onCommand("/projects", { replaceHistory: true })} className="mt-2 text-sm text-zinc-400 transition hover:text-amber-200">← Back to projects</button></div> };
} };
