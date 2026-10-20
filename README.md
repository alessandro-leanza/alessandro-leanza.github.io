# Alessandro Leanza — personal website

A minimal Astro + TypeScript static site for a research website and portfolio.
The homepage uses supplied research content with explicitly marked placeholders for
unprovided details. No portfolio template or frontend UI framework is used.

## Local development

Use Node.js 24 (`nvm use` if you use nvm) and npm.

```sh
npm ci
npm run dev
```

```sh
npm run check   # Astro and TypeScript diagnostics
npm run build   # Generate the static site in dist/
npm run preview # Serve the production build locally
```

## Structure

- `src/pages/`: Home, Projects, Publications, and About routes.
- `src/layouts/BaseLayout.astro`: shared document, navigation, and page title.
- `src/components/home/`: reusable homepage sections.
- `src/components/`: shared navigation, footer, cards, and publication list.
- `src/data/links.ts`: verified CV and profile destinations (currently `null` placeholders).
- `src/styles/global.css`: shared design tokens, responsive layout, and global styles.
- `astro.config.mjs`: static output and canonical site URL.

## Deployment

The site targets `https://alessandro-leanza.github.io` at the domain root;
no base path or server adapter is required.

In the repository's **Settings → Pages**, choose **GitHub Actions** as the
build and deployment source. Push to `main` to check, build, and deploy using
`.github/workflows/deploy.yml`. Pull requests run checks and build without
deploying. The workflow can also be started manually from `main`.

Deployment uses GitHub's built-in token and requires no custom secrets.

## Adding content

Set verified destinations in `src/data/links.ts`; missing destinations render as
marked, non-clickable placeholders. Email destinations should use `mailto:`.
Project data lives in `src/components/home/SelectedProjects.astro`. Project cards
accept an optional `href`; add it when the matching `/projects/<slug>/` route exists.
Replace the labeled image areas, publication entries, and biography placeholder
with verified content when available. Typography uses locally available sans-serif
fonts; no remote font or client-side JavaScript is required.
