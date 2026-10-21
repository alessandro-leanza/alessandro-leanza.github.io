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
- `src/data/links.ts`: verified CV, work email, and profile destinations.
- `src/data/profile.ts`: CV-derived biography and education.
- `src/data/publications.ts`: selected publications with verified metadata.
- `public/cv/alessandro-leanza-cv.pdf`: public CV, served without modifying the supplied PDF.
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
Update profile and publication data in `src/data/` when new verified content is
available. Replace project image placeholders as real media are supplied. Typography uses locally available sans-serif
fonts; no remote font or client-side JavaScript is required.

## Research project pages

ConceptBot is available at `/projects/conceptbot/`. Future project pages can use
`src/layouts/ProjectLayout.astro` with the reusable hero, pipeline, metric cards,
media, technical snapshot, citation, and navigation in `src/components/project/`.
Project-specific research data is kept in `src/data/conceptbot.ts`; project-only
styles live in `src/styles/project.css` and reuse the global design tokens.

Add verified ConceptBot assets under `public/projects/conceptbot/`; see that
directory's README for filenames and video requirements. Missing assets render
labelled placeholders. Rebuild after adding files. Social previews fall back to
text metadata until the architecture image is available. Videos start paused;
BibTeX is selectable without JavaScript, with an enhanced copy button when the
Clipboard API is available.
