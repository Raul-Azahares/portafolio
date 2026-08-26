import type { ReactNode } from "react";

export type CommandResult = { content: ReactNode } | { clear: true };
export type Command = {
  name: string;
  usage: string;
  description: string;
  execute: (args: string[]) => CommandResult;
};
