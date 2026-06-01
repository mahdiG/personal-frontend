# Jarvis Frontend

Lit + TypeScript SPA built with Vite.

## Product docs

- **Vision**: `docs/JARVIS_LIFE_OS_VISION.md`
- **Design system (UI source of truth)**: `docs/DESIGN_SYSTEM.md`

## Commands

```bash
npm install

# Dev (single terminal): Vite + tsc typecheck watch
npm run dev

# Production build
npm run typecheck
npm run build

# Preview production build locally
npm run preview
```

## Nginx (SPA routing)

For client-side routing, configure Nginx to fall back to `index.html`:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
