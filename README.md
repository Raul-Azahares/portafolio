# Raul Code — Interactive Portfolio

A modern command-driven developer portfolio built with Next.js, TypeScript and Tailwind CSS. All portfolio data is local; there are no APIs, environment variables, databases, authentication flows, or paid services.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npm run build
npm start
```

## Available commands

`/help`, `/about`, `/projects`, `/project <name>`, `/skills`, `/experience`, `/certifications`, `/contact`, and `/clean`. `/clear` remains available as an alias.

Use the up/down arrows for command history, `Tab` for the first matching suggestion, and `Enter` to execute.

## Customize content

Replace the clearly marked example data in `src/data/`:

- `profile.ts` — name, title and contact links
- `projects.ts` — projects and their links
- `skills.ts`, `experience.ts`, `certifications.ts` — portfolio details

## Add a command

Create a command module in `src/lib/commands/` which conforms to `Command`, then add it to `commandRegistry.ts`. The terminal automatically exposes it to help and suggestions.

## Deploy to Vercel

Push this repository to GitHub, import it in Vercel, and use the default Next.js settings. No environment variables are needed; Vercel Hobby deployment works directly.

## Future V2

`commandRegistry` handles known commands locally. A future free-form question router can be added alongside it and direct only unmatched prompts to an AI service, without changing the UI or existing commands.
