import { profile } from "@/data/profile";
import type { Command } from "./types";

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => <a className="text-amber-300 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-100" href={href} target="_blank" rel="noreferrer">{children} ↗</a>;
export const contactCommand: Command = { name: "/contact", usage: "/contact", description: "Get in touch", execute: () => ({ content: <div className="space-y-2"><p>Email: <a className="text-amber-300 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-100" href={`mailto:${profile.email}`}>{profile.email}</a></p><p>GitHub: <Link href={profile.github}>{profile.github.replace("https://", "")}</Link></p><p>WhatsApp: <Link href={profile.whatsapp}>{profile.whatsappDisplay}</Link></p></div> }) };
