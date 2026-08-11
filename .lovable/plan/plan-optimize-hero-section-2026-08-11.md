# Plan: Optimize Hero Section

Optimize the hero section for a premium, hospital-grade aesthetic with improved mobile responsiveness, visual hierarchy, and trust-building elements.

## User Review Required

> [!IMPORTANT]
> The current hero uses a hospital exterior image with a navy overlay. I will enhance this with a more sophisticated multi-layer gradient and improved typography. If you have a specific hero image you'd prefer (e.g., a team of smiling doctors), please let me know.

## Proposed Changes

### Hero Section (`src/routes/index.tsx`)
- **Visual Polish**: 
    - Replace the current overlay with a more modern, layered gradient system (radial + linear) for better text readability and depth.
    - Add a subtle glassmorphism effect to the trust badge ("24/7 EMERGENCY").
    - Implement a "floating" animation for trust icons or badges to add life to the section.
- **Typography & Layout**:
    - Refine `h1` and `p` tag sizing for better balance between desktop and mobile.
    - Improve the "Under One Roof" highlight with a more distinct clinical pink/teal gradient or glow.
    - Add a "Quick Stats" or "Trust Indicators" bar immediately below the hero content (or integrated into the bottom) to showcase hospital scale (e.g., 10+ Specialties, 24/7 Care, etc.).
- **Mobile Optimization**:
    - Ensure CTAs are vertically stacked on small screens for better thumb-reach.
    - Adjust the image focal point for vertical viewports.

### Design System (`src/styles.css`)
- Add a new `@utility` for a "premium-glass-glow" to be used in the hero and other high-impact sections.

### Components (`src/components/site/Bits.tsx`)
- Ensure `PageHero` (used on interior pages) is also refreshed to match the new homepage hero aesthetic for consistency.

## Technical Details
- Use Framer Motion (via `tw-animate-css` or inline) for subtle entry animations.
- Optimize image loading with `fetchpriority="high"` for the LCP element.
- Use `clamp()` for responsive typography to avoid breaking layouts on mid-size tablets.
