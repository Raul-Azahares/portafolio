import type { Command } from "./types";
export const clearCommand: Command = { name: "/clean", usage: "/clean", description: "Clear terminal history", execute: () => ({ clear: true }) };
