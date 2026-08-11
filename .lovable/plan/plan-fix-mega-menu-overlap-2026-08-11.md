# Plan: Fix Mega Menu Overlap

The user reported that the specialties mega menu dropdown is overlapping the header. Based on the provided image and code, the mega menu is using `fixed` positioning with a `z-50` index, which is the same as the main `header` element. This causes the mega menu to appear on top of the navigation bar when active, rather than appearing below it.

## Technical Details
- **File**: `src/components/site/Header.tsx`
- **Issue**: Both the `header` and the `SpecialtiesMegaMenu` container have `z-50`. Since the mega menu is nested inside the header's nav structure but uses `fixed` positioning, its `z-50` relative to the viewport might be fighting with the header's `z-50`.
- **Solution**: 
    1. Adjust the `z-index` of the mega menu container to be slightly lower than the header's navigation elements, or ensure the header container has a higher stacking context.
    2. Alternatively, adjust the `top` calculation or add a margin/padding to ensure it visually starts exactly where the header ends without overlapping the navigation text.
    3. The image shows the mega menu content (the white box) is physically covering the "SPECIALTIES" link and other nav items. I will reduce the `z-index` of the mega menu's outer `fixed` container to `z-40` while keeping the `header` at `z-50`.

## Proposed Changes
### `src/components/site/Header.tsx`
- Change the `z-index` of the `div` with `ref={containerRef}` inside `SpecialtiesMegaMenu` from `z-50` to `z-40`.
- This will ensure the header (which is `z-50`) stays on top of the mega menu dropdown, allowing the navigation links to remain visible even when the menu is open.
