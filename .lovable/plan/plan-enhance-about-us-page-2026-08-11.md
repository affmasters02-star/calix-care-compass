# Plan: Enhance About Us Page

Create a comprehensive, premium, and visually engaging "About Us" page for Calix Multispeciality Hospital that establishes trust and highlights clinical excellence.

## Proposed Changes

### About Page (`src/routes/about.tsx`)
- **Enhanced Hero**: Keep the dynamic `PageHero` but ensure it uses the latest brand gradients and typography scale.
- **Section 1: Our Story (History & Mission)**:
    - Redesign "Who We Are" to include a multi-column layout with detailed hospital history.
    - Add a "Clinical Excellence" badge overlay on the team image.
- **Section 2: Mission, Vision, Values**:
    - Upgrade the 3-column grid to use premium card styles (`premium-glass-glow` or `shadow-premium`).
    - Use larger icons and better spacing.
- **Section 3: Clinical Leadership & Team**:
    - Add a placeholder section for "Our Leadership" highlighting the management philosophy of patient-first care.
- **Section 4: Infrastructure & Facilities**:
    - Briefly highlight the hospital's infrastructure (modern OT, ICU capacity) to reinforce the "Multispeciality" positioning.
- **Section 5: Why Choose Us (Redesigned)**:
    - Use a more sophisticated grid with hover effects and clinical icons.
- **Section 6: Departments & Clinical Hubs**:
    - Redesign the simple link list into a more visual department grid with icons.

### Design Elements
- Use the established palette: Primary Blue (#003A8C), Medical Pink (#E83E8C), and Healthcare Teal (#00857A).
- Ensure consistent use of `rounded-[2.5rem]` and `shadow-card`.
- Apply smooth `animate-in` effects for scroll-triggered visibility.

## Technical Details
- Utilize existing components from `src/components/site/Bits.tsx` and `src/lib/site-data.ts`.
- Ensure full responsiveness for mobile and tablet views.
- Optimize images for performance using high-quality assets.
