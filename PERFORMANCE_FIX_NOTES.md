# Winify Performance + UI Fixes

This build includes the performance fixes and removes the public project-export feature.

## Performance changes
- Removed scroll-linked background parallax from decorative background blobs.
- Reduced decorative background blur/size cost.
- Removed per-mouse-move React state updates from card spotlight effects.
- Removed hero mouse-tracking/parallax springs.
- Reduced heavy backdrop-blur usage.
- Removed continuously animated CTA shimmer.
- Removed navbar entrance animation.
- Removed the expensive blur filter from shared reveal animations.
- Production build uses `vite build`, matching the successful Vercel deployment configuration.

## Export feature removal
- Removed EXPORT ZIP from the desktop navbar.
- Removed project export controls/modal and ZIP-generation logic.
- Removed JSZip dependency/runtime loading.
- The public site no longer exposes a code/project download feature.

## Important
The build is optimized to reduce the main known sources of browser rendering work. Actual performance can still vary by device/browser and by future code changes.

## Run
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
```
