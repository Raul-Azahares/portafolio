import { aboutCommand } from "./about";
import { certificationsCommand } from "./certifications";
import { clearCommand } from "./clear";
import { contactCommand } from "./contact";
import { cvCommand } from "./cv";
import { experienceCommand } from "./experience";
import { helpCommand } from "./help";
import { projectCommand } from "./project";
import { projectsCommand } from "./projects";
import { skillsCommand } from "./skills";
import type { Command, CommandContext } from "./types";

export const commandRegistry: Command[] = [helpCommand, aboutCommand, projectsCommand, projectCommand, skillsCommand, experienceCommand, certificationsCommand, cvCommand, contactCommand, clearCommand];

export function runCommand(rawInput: string, context?: CommandContext) {
  const [name, ...args] = rawInput.trim().toLowerCase().split(/\s+/);
  const normalizedName = name === "/clear" ? "/clean" : name;
  return commandRegistry.find((command) => command.name === normalizedName)?.execute(args, context);
}
