import type { ReactNode } from "react";

export type CommandResult = { content: ReactNode } | { clear: true };
export type CommandContext = {
  onCommand: (command: string, options?: { replaceHistory?: boolean }) => void;
};
export type Command = {
  name: string;
  usage: string;
  description: string;
  execute: (args: string[], context?: CommandContext) => CommandResult;
};
