# Design System Inspired by Anita Bath Photography

## 1. Visual Theme & Atmosphere

Anita Bath Photography's design system embodies the elegance of fine art photography curation. The aesthetic is deliberately minimal and refined, allowing photographic content to command complete visual attention. The interface operates as a sophisticated gallery framework—clean, restrained, and intentionally invisible. Typography is spare and dignified, while the color palette remains nearly monochromatic to ensure images remain the focal point. This approach reflects the curatorial principle that great photography needs breathing room and silence to resonate. The overall mood is contemplative, professional, and gallery-like—evoking museum-quality presentation standards applied to a digital platform.

**Key Characteristics**
- Minimal, content-first layout philosophy
- Monochromatic interface with pure black and white typography
- Generous whitespace and breathing room around imagery
- Photography as the primary visual language
- Gallery-style grid presentation with photographer attribution
- Elegant navigation sidebar with restrained typography
- No unnecessary visual embellishment or ornamentation

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): Text, borders, interface elements, and semantic emphasis across all contexts; primary typography color for hierarchy and readability.
- **Pure White** (`#FFFFFF`): Page background, card backgrounds, and clean contrast surfaces that provide negative space for photography presentation.

### Neutral Scale
- **Light Gray** (`#EFEFEF`): Subtle background tints, card containers, and very soft divider treatment for minimal visual interruption.

### Interactive
- **Dark Gray Text with Transparency** (`#333333` at 70% opacity): Secondary links and subtle calls-to-action that defer to photography content; provides visual distinction without harshness.

### Surface & Borders
- **Transparent Surface** (`rgba(0, 0, 0, 0)`): Default card and container backgrounds to maintain seamless visual hierarchy focused on imagery.
- **No Borders** (0px): Cards and containers use borderless treatment for modern, clean presentation.

## 3. Typography Rules

### Font Family
**Primary Font:** `ui-sans-serif` (Apple system font stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)

**Fallback Stack:** `system-ui, -apple-system, sans-serif`

No secondary font family; single unified sans-serif system throughout maintains visual cohesion.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / Brand Logo | ui-sans-serif | 24px | 400 | 32px | 0px | Anita Bath Photography wordmark; elegant script-like presentation |
| Heading 1 | ui-sans-serif | 28px | 400 | 36px | 0px | Page section titles and major content headers |
| Heading 2 | ui-sans-serif | 24px | 400 | 32px | 0px | Subsection headers and gallery collection titles |
| Heading 3 | ui-sans-serif | 20px | 400 | 28px | 0px | Card titles and photographer names |
| Body / Paragraph | ui-sans-serif | 16px | 400 | 24px | 0px | Main content text, descriptions, and navigation labels |
| Body Small | ui-sans-serif | 14px | 400 | 20px | 0px | Secondary text, captions, and supplementary information |
| Link / Interactive | ui-sans-serif | 16px | 400 | 24px | 0px | Navigation links and interactive elements; default weight |
| Link Secondary | ui-sans-serif | 14px | 500 | 21px | 0px | Subtle secondary links with slight weight emphasis |
| Caption / Meta | ui-sans-serif | 12px | 400 | 18px | 0px | Image credits, attribution, and metadata |

### Principles
- **Single Font Philosophy:** One typeface system eliminates distraction and maintains gallery-like simplicity.
- **Weight Restraint:** Primarily 400 (regular) weight; limited use of 500 (medium) for subtle emphasis only on secondary links.
- **Generous Line Height:** All typography uses elevated line height (1.4–1.5x) to ensure readability and breathing room in interface text.
- **No All-Caps Treatment:** Typography remains in natural case to maintain elegance and avoid harsh visual impact.
- **Left Alignment:** All text aligns left for predictable, refined scanning pattern.

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Padding:** `0px`
- **Height:** `40px`
- **Width:** `40px`
- **Border Radius:** `0px`
- **Border:** `0px solid #000000`
- **Box Shadow:** `none`
- **Hover State:** Opacity shift to `0.7` on text; background remains transparent.
- **Active State:** Text remains `#000000`; slight opacity reduction.

#### Icon Button (Social/Navigation)
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Padding:** `8px`
- **Height:** `40px`
- **Width:** `40px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Box Shadow:** `none`
- **Hover State:** Color opacity shifts to `0.6`; no background change.

### Cards & Containers

#### Photo Card (Default)
- **Background:** `rgba(0, 0, 0, 0)` (transparent, image shows through)
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Padding:** `0px`
- **Height:** Auto (responsive, ~200px–250px)
- **Width:** `264px`
- **Border Radius:** `4px`
- **Border:** `none` (0px)
- **Box Shadow:** `none`
- **Overflow:** `hidden` to respect border radius on images
- **Hover State:** Subtle opacity shift on image to `0.95`; photographer name text color shifts to `#333333`.

#### Photographer Attribution Text (Below Card)
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#000000`
- **Font Size:** `14px`
- **Font Weight:** `400`
- **Padding:** `8px 0px 0px 0px`
- **Line Height:** `20px`
- **Text Align:** `center`
- **Hover State:** Color shifts to `#333333` at 70% opacity.

### Navigation

#### Sidebar Navigation
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Padding:** `32px 0px 32px 0px`
- **Height:** Auto (flexible)
- **Width:** `256px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Box Shadow:** `none`
- **Flex Direction:** `column`
- **Gap:** `24px` between nav items
- **Fixed Position:** Left sidebar, full viewport height

#### Navigation Link
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Padding:** `0px`
- **Line Height:** `24px`
- **Text Transform:** `uppercase` (subtle style)
- **Letter Spacing:** `0.5px`
- **Hover State:** Color opacity shifts to `0.6`; no underline decoration.
- **Active State:** Text color remains `#000000`; no underline.

### Links

#### Inline Navigation Link
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Padding:** `0px`
- **Line Height:** `24px`
- **Text Decoration:** `none` (default)
- **Hover State:** Opacity shifts to `0.7`; optional underline at `2px solid #000000`.
- **Visited State:** Color remains `#000000` (no differentiation).

#### Secondary Link (Small)
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#333333` at 70% opacity (`oklch(0.439 0 0 / 0.7)`)
- **Font Size:** `14px`
- **Font Weight:** `500`
- **Padding:** `0px 0px 4px 0px`
- **Line Height:** `21px`
- **Text Decoration:** `none`
- **Hover State:** Color opacity increases to `1.0`; underline appears.
- **Border Bottom:** `1px solid #333333` (on hover only).

## 5. Layout Principles

### Spacing System

**Base Unit:** `8px`

**Spacing Scale:**
- `8px` — Micro spacing (compact padding, tight gaps)
- `16px` — Small spacing (comfortable padding, secondary gaps)
- `20px` — Medium spacing (section margins, standard gaps)
- `24px` — Standard spacing (primary padding, major gaps between sections)
- `28px` — Large spacing (heading margins, significant whitespace)
- `32px` — Extra-large spacing (sidebar padding, major section breaks)
- `40px` — Jumbo spacing (page margin, hero spacing)

**Usage Context:**
- Interior card padding: `0px` (images extend edge-to-edge)
- Navigation sidebar padding: `32px 0px 32px 0px`
- Gap between navigation items: `24px`
- Gap between photo cards: `16px`–`24px`
- Body text line height: `24px` (1.5x multiplier from 16px size)
- Section top/bottom margin: `28px`–`40px`

### Grid & Container

**Maximum Content Width:** `1400px` (flexible, content-driven)

**Photo Grid Strategy:**
- **Column Count (Desktop):** 4 columns of `264px` width each
- **Column Count (Tablet):** 3 columns of `264px` width each
- **Column Count (Mobile):** 2 columns of `100% / 2` width each
- **Gap Between Columns:** `24px`
- **Row Gap:** `24px`–`32px`

**Sidebar Width:** `256px` fixed; content area occupies remaining width.

**Total Horizontal Margin:** `40px` on each side of main content (desktop); `20px` (tablet); `16px` (mobile).

### Whitespace Philosophy

The design system prioritizes generous, intentional whitespace to allow photography to breathe and command focus. Every interface element is treated as secondary to the image content. Spacing is never compressed; instead, it is distributed liberally to create a sense of refinement and gallery-like curation. Whitespace between images, around navigation, and in typography is architecturally significant—not wasted space, but essential silence that gives meaning to visual content.

### Border Radius Scale

- **Sharp Corners (0px):** Buttons, navigation elements, primary CTA regions; conveys precision and minimalism.
- **Subtle Rounding (4px):** Photo cards, container corners; maintains modern aesthetic without softness.
- **No Larger Radius:** Design system avoids 8px+ radius to maintain gallery aesthetic.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | `box-shadow: none` | Buttons, text, borders, default cards; primary interface layer |
| Raised (1) | `box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)` | Optional hover state on photo cards (subtle lift) |
| Elevated (2) | `box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15)` | Modal overlays, dropdown menus (if present) |
| Deep (3) | `box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2)` | Full-screen modals, overlay panels |

**Shadow Philosophy:**

Anita Bath Photography employs a nearly flat design philosophy with minimal shadow treatment. The default aesthetic uses no shadows whatsoever—maintaining a clean, gallery-like presentation. Shadows are introduced sparingly and only in interactive contexts (hover states on photo cards) to provide subtle feedback without visual distraction. The color palette (black and white) is intentionally low-contrast in shadow rendering, ensuring that depth cues never overshadow photographic content. All shadow colors use black with reduced opacity rather than colored shadows, maintaining tonal consistency with the monochromatic interface.

## 7. Do's and Don'ts

### Do

- **Do prioritize photography as the primary visual language.** Design all interface elements to be subordinate and invisible unless actively interacting.
- **Do use pure `#000000` and `#FFFFFF` as primary interface colors** to maintain maximum contrast and readability without distraction.
- **Do apply consistent `16px` font size for navigation and body text** across all sections; maintain hierarchy through size changes only (no color shifts for emphasis).
- **Do leave generous whitespace around image cards** (`24px`–`32px` gaps) to allow visual breathing room and gallery-like presentation.
- **Do use transparent backgrounds** (`rgba(0, 0, 0, 0)`) for cards and containers to ensure images integrate seamlessly into the layout.
- **Do align all text left** for predictable visual flow and refined scanning patterns.
- **Do apply hover states that shift opacity** to `0.6`–`0.7` rather than changing colors; maintains tonal consistency.
- **Do use `4px` border radius** on photo cards for subtle softness without compromising minimalism.
- **Do respect photographer attribution** by placing names prominently below each image in `14px` weight `400` text.
- **Do maintain the sidebar navigation at `256px` fixed width** as a stable, persistent landmark.

### Don't

- **Don't add decorative elements, gradients, or textures** to the interface; photography should be the only visual richness.
- **Don't use colored shadows or depth effects** that conflict with the monochromatic palette.
- **Don't increase font weight above `500`** except in rare secondary link contexts; maintain consistent `400` weight throughout.
- **Don't apply borders or strokes** to interactive elements; rely on color and opacity shifts for feedback.
- **Don't center-align body text or navigation** outside of card captions; maintain left alignment for professional presentation.
- **Don't compress spacing below `8px`** in any context; the design system prioritizes whitespace as a core principle.
- **Don't introduce animations or transitions** that slow down the gallery experience; keep interactions instantaneous and subtle.
- **Don't use background colors on cards** that obscure or mute photographic content; maintain transparency.
- **Don't add shadows to photo cards in default state**; reserve shadows only for interactive hover states.
- **Don't mix font families or serif/sans-serif combinations**; rely solely on `ui-sans-serif` system font.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Width | Key Changes |
|-----------------|-------|-------------|
| Mobile | `< 640px` | 1 column photo grid, sidebar collapses to hamburger menu, padding reduces to `16px`, font sizes remain constant |
| Tablet | `640px`–`1024px` | 2–3 column photo grid, sidebar persists at `256px` (left), horizontal margin reduces to `20px`, gap between cards `16px` |
| Desktop | `> 1024px` | 4 column photo grid, full sidebar at `256px`, horizontal margin `40px`, gap between cards `24px`, max content width `1400px` |

### Touch Targets

- **Minimum Interactive Target Size:** `44px × 44px` (tap-friendly on all touch devices)
- **Navigation Links:** `40px` height minimum; `32px` padding vertical
- **Icon Buttons:** `40px × 40px` (social icons, menu toggles)
- **Photo Card Hover Zone:** Full card area (`264px × ~200px`) is interactive
- **Spacing Between Tap Targets:** Minimum `8px` on mobile; `16px` on larger screens

### Collapsing Strategy

**Mobile (`< 640px`):**
- Sidebar navigation transforms to **hamburger menu icon** (`40px × 40px`) positioned at top-left
- Menu panel slides in from left on tap, overlaying content
- Photo grid collapses to **1 column** (full width minus `16px` margin each side)
- Horizontal padding reduces to `16px` on all containers
- Navigation items maintain `24px` gap vertically within menu panel
- Font sizes remain unchanged (`16px` for nav, `14px` for captions)

**Tablet (`640px`–`1024px`):**
- Sidebar persists as fixed `256px` column (left)
- Photo grid expands to **2–3 columns** depending on available width
- Horizontal margin between content and sidebar reduces to `20px`
- Card gap (`16px`) remains tighter than desktop
- Photographer names remain `14px` centered below each card

**Desktop (`> 1024px`):**
- Sidebar fixed at `256px` left
- Photo grid expands to **4 columns**
- Horizontal margin increases to `40px`
- Card gap increases to `24px` (standard)
- Full navigation visibility maintained

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary Text & UI:** Pure Black (`#000000`)
- **Secondary Text & Links:** Dark Gray / Black at 70% opacity (`#333333`, `oklch(0.439 0 0 / 0.7)`)
- **Background & Surface:** Pure White (`#FFFFFF`) and Transparent (`rgba(0, 0, 0, 0)`)
- **Subtle Divider / Container:** Light Gray (`#EFEFEF`)
- **Hover State:** Shift opacity to `0.6`–`0.7` (darken slightly)
- **Active State:** Full opacity `1.0`; text color `#000000`

### Iteration Guide

1. **Start with Transparency:** All card and container backgrounds default to `rgba(0, 0, 0, 0)` so photographs show seamlessly; never add opaque backgrounds unless intentional surface emphasis is required.

2. **Typography Stack:** Use `ui-sans-serif` system font exclusively; maintain `400` weight for 95% of interface, reserve `500` for rare secondary links only. Never exceed `500` weight.

3. **Sizing Pattern:** Photo cards are fixed at `264px` width. Desktop layouts: 4-column grid (`1056px` content + margins/gaps). Adjust column count downward at smaller breakpoints (`3`, `2`, `1` column).

4. **Spacing is Sacred:** Use `8px` base unit. Common spacing: `16px` (gaps), `24px` (section spacing), `32px` (sidebar padding), `40px` (outer margin). Never compress below `8px` outside of typography line-height adjustments.

5. **Hover Feedback:** Never change text color on hover; instead shift opacity from `1.0` to `0.6`–`0.7`. For secondary links, optionally add bottom `1px` border on hover. Keep all hover transitions instant (no animation delay).

6. **Navigation Sidebar:** Fixed `256px` width, `32px` vertical padding. Navigation items separated by `24px`. Font size `16px`, weight `400`, all caps with `0.5px` letter spacing. Persist on desktop; collapse to hamburger on mobile (`< 640px`).

7. **Border Radius Constraint:** Use `4px` only on photo cards. All buttons, modals, and overlays remain at `0px` (sharp corners) for minimalist precision aesthetic.

8. **Box Shadow Doctrine:** Default state = `none`. Hover state on photo cards only: optional `0px 2px 4px rgba(0, 0, 0, 0.1)`. Full modals: `0px 8px 24px rgba(0, 0, 0, 0.2)`. Never use colored shadows.

9. **Attribution Hierarchy:** Every photograph displays photographer name below in `14px` weight `400`, centered, `8px` top padding. This is mandatory and treated as part of the card component, not optional metadata.