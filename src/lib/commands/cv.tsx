import type { Command } from "./types";

const CV_PATH = "/Raul_Azahares_CV.pdf";

export const cvCommand: Command = {
  name: "/cv",
  usage: "/cv",
  description: "Download my resume as a PDF",
  execute: () => {
    const link = document.createElement("a");
    link.href = CV_PATH;
    link.download = "Raul_Azahares_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return { content: <p className="text-zinc-300">Downloading resume… if it didn&apos;t start, <a className="text-amber-300 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-100" href={CV_PATH} download>grab it here ↗</a>.</p> };
  },
};
