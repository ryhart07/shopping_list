# Shopping List (React + Vite)

A simple shopping list app built with React and Vite.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This repo deploys through GitHub Actions.

- Workflow file location must be: `.github/workflows/deploy.yml` (repo root).
- App source lives in `shopping-list/`, so workflow uses:
- `working-directory: shopping-list`
- `cache-dependency-path: shopping-list/package-lock.json`
- `path: shopping-list/dist`
- Vite `base` is set to `/shopping_list/` in `shopping-list/vite.config.js`.

Deployment is triggered on pushes to `master`.

## Common Deployment Issues

- No new workflow runs in Actions:
- Check workflow file is in repo root `.github/workflows/`, not in `shopping-list/.github/workflows/`.

- Site loads but appears broken or blank:
- Ensure `shopping-list/index.html` is using the Vite entry script (`/src/main.jsx`) and does not hardcode hashed files in `assets/`.

- Actions run but site still not updating:
- Verify repository settings at `Settings -> Pages` are set to deploy via `GitHub Actions`.