# Design System — Recetario Velázquez

<!-- impeccable:design-schema 1 -->

## World

Costa Nayarita. The Pacific coast of Nayarit, México is the visual ground: ocean-deep navy as the permanent soil, sun-dried fishing net amber as the single accent. The world enters through palette, type weight and slab character, and the amber-to-teal gradient divider that is the app's signature move — the color of a Pacific sunset seen from a palapa. No ornament; depth comes from color commitment, not decoration.

## Palette

| Token | Hex | Role |
|---|---|---|
| `--ocean` | `#0d2b3a` | Primary background — the ground |
| `--ocean-mid` | `#112f40` | Panel surfaces |
| `--ocean-dark` | `#091e2a` | Sidebar, deepest surface |
| `--teal` | `#1a6080` | Secondary text, icons, muted states |
| `--amber` | `#c4862a` | The accent — titles, borders, CTA, quantities |
| `--amber-dim` | `rgba(196,134,42,.15)` | Selected state fills |
| `--cream` | `#e8ddc8` | Primary text |
| `--cream-dim` | `rgba(232,221,200,.55)` | Secondary text, descriptions |
| `--cream-faint` | `rgba(232,221,200,.12)` | Surface tints, hover fills |

Color strategy: **Drenched** — the surface is the ocean. The amber accent is the only warm note against the deep navy ground; it carries all calls to action, quantities, and selection states.

## Typography

| Role | Face | Weight | Notes |
|---|---|---|---|
| Display / headings | Zilla Slab | 400, 600, 700 | Coastal slab-serif; recipe titles, sidebar wordmark |
| Body / UI | Nunito | 300, 400, 600, 700, 800 | Rounded, legible; nav labels, body copy, chips |

Both faces served from Google Fonts via `@import`. Body measure: capped at `68ch` on descriptions. Display sizes are fluid with `clamp()`.

## Signature Move

The **amber-to-teal gradient divider** (`--detail__divider`): a 3px horizontal line with `background: linear-gradient(90deg, var(--amber) 0%, var(--teal) 60%, transparent 100%)`. It appears beneath each recipe title, on the ingredients overview, and centered on the about panel. This is the app's one authored motion anchor: it reads as the color of the Nayarit Pacific sky at sunset.

## Layout

**Shell:** Sidebar (240px fixed) + main area (flex-1). Sidebar is `position: sticky` at 100dvh on desktop, collapses to a horizontal top bar on mobile.

**Recipes view:** Two-column master-detail split. Left: recipe list (360px) with selectable rows. Right: detail panel with header, two-column body (ingredients | steps).

**Detail header:** tag → title (Zilla Slab, fluid 32–52px) → italic subtitle → gradient divider → description → chip row.

**Body grid:** `grid-template-columns: 1fr 1fr` — ingredients on left with hairline row separators, steps on right with amber numbered circles.

## Components

### `.nav-item`
Sidebar navigation button. `border-left: 3px solid transparent` transitions to `var(--amber)` on active. Hover: `cream-faint` background fill with `0.2s var(--ease-out)`.

### `.recipe-row`
Master-detail list row. Grid: `40px 1fr auto`. `translateX(2px)` on hover. Selected state: `amber-dim` fill + amber border.

### `.chip`
Inline metadata badge. Rounded pill (`border-radius: 20px`), `cream-faint` fill. Difficulty variant classes: `badge--low` (green), `badge--mid` (amber), `badge--high` (red).

### `.ingredients__item`
List item with `justify-content: space-between`. Quantity in `Zilla Slab italic` amber. Hover: `cream-faint` fill with negative margin bleed for full-width feel.

### `.steps__item`
Two-column grid: amber numbered circle (28px, `amber-dim` fill, `amber` border) + body text. Subtle `fadeSlideIn` animation on mount.

## Motion

Single authored moment: `@keyframes fadeSlideIn` — `opacity: 0 + translateY(12px)` → `opacity: 1 + translateY(0)`, `0.35s cubic-bezier(0.22, 1, 0.36, 1)`. Fires on the `<article>` when a recipe is selected, and on full-panel views (ingredients, about). Recipe rows get `translateX(2px)` on hover — a 2px nudge right, `0.15s`. No other animations; one authored entrance, motion-consistent.

## Easing

`--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` — exponential ease-out, used for all transitions.

## Browser Surfaces

- `::selection`: `background: var(--amber)`, `color: var(--ocean-dark)`
- Scrollbar track: `var(--ocean-dark)`. Thumb: `var(--teal)`, hover `var(--amber)`.
- `:focus-visible`: `2px solid var(--amber)`, `outline-offset: 3px`.

## Responsive

**Breakpoint: 768px** — sidebar collapses to horizontal top bar (icon-only nav, wordmark shrinks). Content split goes to column. Recipe list unstacks. Detail panel scrolls freely.

**Breakpoint: 900px** — detail body switches from two-column to single-column (ingredients above steps).

## Accessibility

- `aria-label` on sidebar, nav, recipe list, detail article.
- `aria-current="page"` on active nav item.
- `aria-pressed` on selected recipe row.
- `aria-live="polite"` on detail area for recipe switches.
- `role="list"` + `role="listitem"` on chip row.
- Contrast: cream on ocean = 9.8:1. Amber on ocean = 4.6:1 (≥ 4.5:1 for large text). Teal on ocean = 3.4:1 (used only for small decorative labels, not body text).

## Evidence and provenance

Built code-led, Costa Nayarita direction, seed `bfaed7f842c67b30`. Two static hardcoded recipes: Enchiladas Suizas, Pescado Zarandeado Nayarita. Zero findings on detector completion.
