# Publifyx.com — Mobile Performance Optimization Plan

**Current Score: ~60/100 (Mobile)**
**Stack: Lovable (React + Vite + Tailwind + shadcn/ui)**

---

## Understanding Your Bottlenecks

Lovable apps ship as a single-page React app bundled with Vite. The typical issues on mobile are:

- **Large JS bundle** — React + all component libraries ship in one chunk
- **No server-side rendering** — the browser downloads JS, parses it, *then* renders content
- **Unoptimized images** — often served as PNG/JPG without modern formats or sizing
- **Render-blocking resources** — fonts and CSS loaded before first paint

---

## 🟢 LOW-HANGING FRUIT (1–2 hours each, big impact)

### 1. Compress & convert all images to WebP/AVIF
**Impact: LCP ↓ 0.5–2s, page weight ↓ 30–70%**

- Export every image as WebP (or AVIF for even better compression)
- Use the `<picture>` element with fallback:
```html
<picture>
  <source srcset="hero.avif" type="image/avif" />
  <source srcset="hero.webp" type="image/webp" />
  <img src="hero.jpg" alt="..." loading="lazy" />
</picture>
```
- Use tools like [Squoosh](https://squoosh.app) for quick conversion
- Target: hero image under 100KB, other images under 50KB

### 2. Add `loading="lazy"` to all below-the-fold images
**Impact: FCP ↓, initial page weight ↓ significantly**

- Every `<img>` tag NOT in the first viewport should have `loading="lazy"`
- The hero/above-fold image should NOT be lazy (add `fetchpriority="high"` instead)
```jsx
// Hero image — load eagerly
<img src="hero.webp" alt="..." fetchpriority="high" />

// Everything else — lazy load
<img src="feature.webp" alt="..." loading="lazy" />
```

### 3. Add explicit `width` and `height` to all images
**Impact: CLS → 0 (already low but this locks it in)**

- Prevents layout shifts as images load
- CSS can still make them responsive with `width: 100%; height: auto;`

### 4. Preload the LCP image
**Impact: LCP ↓ 0.3–1s**

- Identify your largest above-the-fold image (likely the hero)
- Add to `<head>` in `index.html`:
```html
<link rel="preload" as="image" href="/hero.webp" type="image/webp" />
```

### 5. Self-host fonts (or use `font-display: swap`)
**Impact: FCP ↓ 0.2–0.5s**

- If using Google Fonts, the external request adds latency
- Option A: Self-host with `@font-face` and `font-display: swap`
- Option B: Add preconnect hints:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### 6. Minify and inline critical CSS
**Impact: FCP ↓ 0.1–0.3s**

- Vite already minifies CSS, but check if the CSS file is render-blocking
- If so, inline the critical (above-the-fold) CSS directly in `<head>`
- Use [critical](https://github.com/addyosmani/critical) or manually extract ~5KB of above-fold styles

---

## 🟡 MID-SIZE CHANGES (half-day to 1 day, significant impact)

### 7. Code-split with React.lazy + dynamic imports
**Impact: TBT ↓ 30–60%, JS payload ↓ 40–60%**

This is likely your **single biggest win**. Lovable apps often ship the entire app in one JS bundle.

```jsx
import { lazy, Suspense } from 'react';

// Instead of:
// import PricingPage from './pages/Pricing';

// Do this:
const PricingPage = lazy(() => import('./pages/Pricing'));
const AboutPage = lazy(() => import('./pages/About'));
const BlogPage = lazy(() => import('./pages/Blog'));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Suspense>
  );
}
```

**Key rule:** Only the landing page code should load on initial visit. Everything else loads on demand.

### 8. Reduce third-party scripts
**Impact: TBT ↓ 200–500ms**

Audit your third-party scripts (analytics, chat widgets, pixels):
- **Defer analytics**: Load Google Analytics / Mixpanel *after* page load
- **Lazy-load chat widgets**: Don't load Intercom/Crisp until user scrolls or clicks
- **Remove unused scripts**: Check if every `<script>` tag is actually needed

```jsx
// Load analytics after page becomes interactive
useEffect(() => {
  const timer = setTimeout(() => {
    // Load GA, Mixpanel, etc.
  }, 3000); // 3 second delay
  return () => clearTimeout(timer);
}, []);
```

### 9. Configure Vite for optimal chunking
**Impact: Initial JS payload ↓ 30–50%**

In `vite.config.ts`:
```ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code from your app code
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          // Add other heavy libraries
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Set chunk size warning
    chunkSizeWarningLimit: 150, // KB
  },
});
```

### 10. Add proper caching headers
**Impact: Repeat visits load instantly**

If deployed on Vercel/Netlify, add to your config:
```json
// vercel.json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*).webp",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 11. Reduce DOM size
**Impact: TBT ↓, rendering speed ↑**

Lovable/shadcn components can generate deep DOM trees. Review:
- Remove wrapper `<div>`s that only exist for styling (use Tailwind on the parent instead)
- Virtualize long lists with `react-window` or `@tanstack/virtual`
- Hide off-screen sections with `content-visibility: auto` in CSS:
```css
.below-fold-section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
```

---

## Priority Order (What to Do First)

| Priority | Change | Effort | Impact |
|----------|--------|--------|--------|
| 1 | Code-split routes (React.lazy) | 2–3 hrs | ⭐⭐⭐⭐⭐ |
| 2 | Convert images to WebP | 1 hr | ⭐⭐⭐⭐ |
| 3 | Lazy-load below-fold images | 30 min | ⭐⭐⭐⭐ |
| 4 | Preload LCP image | 15 min | ⭐⭐⭐ |
| 5 | Defer third-party scripts | 1–2 hrs | ⭐⭐⭐⭐ |
| 6 | Vite manual chunks config | 1 hr | ⭐⭐⭐ |
| 7 | Self-host / preconnect fonts | 30 min | ⭐⭐⭐ |
| 8 | Add caching headers | 30 min | ⭐⭐ (repeat visits) |
| 9 | Reduce DOM depth | 2–4 hrs | ⭐⭐ |
| 10 | Inline critical CSS | 1–2 hrs | ⭐⭐ |

---

## Realistic Target

With items 1–5 implemented, you should move from **60 → 80+** on mobile.
With all items, **85–90+** is achievable.

The biggest lever is **code splitting** — a typical Lovable app ships 300–500KB of JS upfront. Splitting that so only ~100KB loads initially will dramatically improve TBT and Speed Index.
