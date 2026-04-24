# Exotic Electrical PTY Ltd

Premium electrical services website for Sydney-based Exotic Electrical PTY Ltd.

## Tech Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Router (HashRouter)

## Local development

```sh
npm install
npm run dev
```

The dev server runs on http://localhost:8080.

## Build

```sh
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deployment (Netlify)

The repo is configured for Netlify via `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

Push to the linked GitHub repo and Netlify will auto-deploy.

### Contact form

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). A
hidden static copy of the form is registered in `index.html` so Netlify's form
detector can find it at build time. Submissions land in the Netlify dashboard
under **Forms → contact**.
