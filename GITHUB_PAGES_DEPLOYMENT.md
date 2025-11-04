# GitHub Pages Deployment Guide

## Changes Made for GitHub Pages

All necessary changes have been completed to prepare your project for GitHub Pages deployment.

### Files Modified/Created

1. **[index.html](index.html)** - Moved to root directory
   - Updated script path from `/src/main.tsx` to `/client/src/main.tsx`
   - Favicon reference remains `/favicon.png`

2. **[favicon.png](favicon.png)** - Copied to root directory
   - Source: `client/public/favicon.png`
   - Destination: Root directory

3. **[vite.config.ts](vite.config.ts)** - Updated configuration
   - Changed `root` from `client` directory to project root
   - Added `publicDir` pointing to `client/public`
   - Build output remains `dist/public`

### Deployment Steps

#### Option 1: Using Vite Build (Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```
   This will create optimized static files in `dist/public/`

2. **Deploy to GitHub Pages:**
   - Push your code to GitHub
   - Go to your repository Settings > Pages
   - Set source to "GitHub Actions" or "Deploy from a branch"
   - If using branch deployment, select the branch and `/dist/public` folder
   - Alternatively, create a GitHub Actions workflow (see below)

#### Option 2: GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Important Notes

- **Base URL**: If your site is at `username.github.io/repo-name`, you may need to add a `base` property to your `vite.config.ts`:
  ```typescript
  export default defineConfig({
    base: '/repo-name/',
    // ... rest of config
  });
  ```

- **CNAME**: The existing `CNAME` file in root will be used for custom domain configuration

- **All paths are relative**: The application uses absolute paths starting with `/`, which work correctly on both development and production

### Verification Checklist

✅ index.html moved to root
✅ favicon.png copied to root
✅ vite.config.ts updated with correct paths
✅ Script reference updated to `/client/src/main.tsx`
✅ Path aliases maintained (`@`, `@shared`, `@assets`)
✅ Public directory configured

### Development Workflow

Your development workflow remains unchanged:

```bash
# Development
npm run dev

# Build for production
npm run build

# The dist/public folder contains your deployable site
```

### Troubleshooting

If you encounter issues:

1. **404 on assets**: Add `base` to vite.config.ts if not using custom domain
2. **Build fails**: Try removing `node_modules` and running `npm install` again
3. **Routes not working**: GitHub Pages requires hash-based routing for SPAs, or a custom 404.html that redirects to index.html

---

**Status**: ✅ Ready for GitHub Pages deployment
