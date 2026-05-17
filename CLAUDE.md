# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Tasks

- **Start development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Start production server:** `npm run start`
- **Run linter:** `npm run lint`

Note: There is no explicit `test` script defined in `package.json`.

## Commits

Commit titles should follow Conventional Commits specification.

Commit messages should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## High-Level Code Architecture

This project is a Next.js application utilizing the App Router.

**IMPORTANT:** This version of Next.js has breaking changes. APIs, conventions, and file structure may differ from common knowledge. Refer to relevant guides in `node_modules/next/dist/docs/` and heed deprecation notices when working with this codebase.
