# Plan: Fix Doctor Card UI in "Our Doctors" Section

Fix the doctor cards in the homepage "Our Doctors" section to ensure a premium, responsive layout that matches the provided design reference.

## Proposed Changes

### 1. Frontend: Doctor Card UI Refinement
- Modify `src/routes/index.tsx` (Doctor grid within `DoctorFilters` component).
- **Layout Adjustment:** Change the current `flex-col` layout (which centers items on mobile) to a more structured horizontal layout where possible, or a better-balanced vertical layout for small screens.
- **Avatar Styling:** Ensure the initials/placeholder icon looks consistent with the design reference (rounded square with glass highlight).
- **Action Buttons:** Standardize the "Book Appointment" and "View Profile" buttons for better alignment and responsiveness.
- **Specialty Badge:** Style the specialty tag to be more prominent and consistent.
- **Experience Badge:** Adjust positioning to ensure it doesn't overlap text awkwardly on smaller screens.

### 2. Responsiveness
- Ensure card padding and font sizes scale correctly from mobile to desktop.
- Fix button stacking behavior on narrow screens.

## Technical Details
- **File:** `src/routes/index.tsx`
- **Component:** `DoctorFilters` (specifically the doctor mapping loop).
- **Styles:** Use existing Tailwind utilities (`rounded-[2.5rem]`, `shadow-premium`, `bg-gradient-to-br`) and `cn` for conditional classes.
- **Consistency:** Ensure changes are mirrored or shared with `src/routes/doctors.tsx` if necessary, though the request specifically mentions the "Our Doctors" section (typically the homepage).

## User Review Required
- Does the current "initials" avatar (e.g., "AM" for Dr. Arvind Menon) meet your needs, or should I implement a specific placeholder image?
