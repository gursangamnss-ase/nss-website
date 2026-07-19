# Inside the Studio Section Design

## Goal

Recreate the reference site's second, “Inside the Studio” section inside the existing Next.js application. The implementation must be responsive, component-based, and static; the reference animations are intentionally out of scope.

## Source of Truth

- Live reference: `https://organic-three-565237.framer.app/`
- User-provided desktop and mobile screenshots
- Existing project UI primitives:
  - `src/components/ui/Badge.jsx`
  - `src/components/ui/Rating.jsx`
  - `src/components/ui/Button.jsx`

## Architecture

### `InsideStudioSection`

Create a section-level component that composes the full experience:

1. Metadata row with the existing `Badge`, copyright range, and coordinates.
2. Centered display headline with Geist text and Great Vibes accents for “Strategy” and “Brands.”
3. Two existing `Rating` instances separated visually on desktop and stacked cleanly on narrow screens.
4. A dedicated studio-image card.
5. Supporting paragraph with emphasized phrases.
6. Existing dark `Button` labeled “View our work.”

The section component owns responsive spacing, maximum widths, typography, content order, and composition. It does not duplicate the internals of the existing primitives.

### `StudioImageCard`

Create a new card in `src/components/cards/`. The existing `BrandStoriesCard` remains unchanged because it serves another design.

The new card accepts image, image-alt, avatar, title, and subtitle props. It renders:

- A restrained light border and rounded frame.
- A square, cover-cropped studio image.
- A centered white contact pill overlapping the lower image/frame edge.
- A circular avatar and two lines of compact text inside the pill.

The component is presentational and reusable. It contains no animation or navigation behavior.

## Assets

Copy the real studio image and contact avatar loaded by the reference into `public/images/`; do not hotlink them. Continue using the existing local rating logos through the existing `Rating` component.

## Responsive Behavior

- Desktop: wide centered headline, ratings in one row with a divider, and a large centered card.
- Tablet: reduce headline size and section gaps while preserving the same content order.
- Mobile: hide nonessential metadata values as shown by the supplied mobile reference, use compact multiline headline wrapping, keep ratings readable in a centered row where space allows, and scale the card and supporting copy to the viewport.
- Prevent horizontal overflow at all supported widths.

## Styling

- Background: near-white/light gray consistent with the reference.
- Main typeface: existing Geist setup.
- Script typeface: add Great Vibes through the Next.js font setup.
- Text: near-black primary and muted gray secondary.
- Image/frame radii and borders should remain subtle and close to the source.
- No entrance, scroll, hover, or text-reveal animation is required.

## Verification

- Add a structural component test before implementation, covering the required content and reuse of the existing primitives.
- Run the focused test, lint, and production build.
- Render at desktop and mobile widths and visually compare the implementation with the supplied/source reference.
- Record the final visual comparison in `design-qa.md`.

## Out of Scope

- Rebuilding the existing unrelated card.
- Implementing the source animations.
- Recreating other sections or routes from the Framer site.
- Adding backend behavior to the CTA or contact pill.
