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

## Deployment (Vercel)

The repo is configured for Vercel via `vercel.json`:

- Framework: auto-detected (Vite)
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite so client-side routes resolve to `/`

Push to the linked GitHub repo and Vercel will auto-deploy.

### Contact form

The form currently opens the visitor's email client via `mailto:` prefilled
with the form fields. To accept submissions server-side, drop in a service
endpoint (Formspree, Web3Forms, or a Vercel serverless function + Resend) by
replacing the `handleSubmit` body in `src/components/ContactSection.tsx`.
