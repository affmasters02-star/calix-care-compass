# Plan: Link Pages with Navigation Menu Items

The user wants to ensure all navigation menu items in the header correctly link to their respective pages. I will verify and update the navigation links in the `Header` component to match the existing route structure.

## Technical Details
- **File**: `src/components/site/Header.tsx`
- **Navigation Mapping**:
  - `HOME` -> `/`
  - `ABOUT US` -> `/about` (currently links to `/#about`)
  - `SPECIALTIES` -> `/specialties` (already a link)
  - `SERVICES` -> `/patient-services` (already a link)
  - `DOCTORS` -> `/doctors` (currently links to `/#doctors`)
  - `FACILITIES` -> `/facilities`
  - `TESTIMONIALS` -> `/testimonials` (currently links to `/#testimonials`)
  - `CONTACT` -> `/contact`

## Proposed Changes

### Navigation Component Updates
- Update `NavLink` targets in `Header.tsx` to point to dedicated route paths instead of section anchors where appropriate, ensuring full-page navigation works as expected for a multi-page site.
- Ensure the mobile navigation (`MobileNav` component) also reflects these updated links.

### Route Alignment
- Verify that `src/routes/about.tsx`, `src/routes/doctors.tsx`, and `src/routes/testimonials.tsx` are correctly utilized.
