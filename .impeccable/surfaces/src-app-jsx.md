---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

## Scope

Recetario Velázquez — home screen and recipe detail. Two static hardcoded Mexican recipes (Nayarit region). React + Vite, web, desktop-first with mobile support. Mode: Operate (visitor cooks from the app).

## Audience and task

Primary: student/evaluator reviewing code quality and UX craft. Secondary: home cook reading and following a recipe. Job: find and read a recipe, understand ingredients and steps at a glance.

## Direction contract

THESIS: The Pacific coast of Nayarit is the ground — ocean-deep blue (#0d2b3a) as the permanent soil, sun-dried fishing net amber (#c4862a) as the single accent — refusing the white-card recipe grid that any app of this category ships by default.

OWN-WORLD: Dark navy ground (#0d2b3a) with warm cream text (#e8ddc8). Amber (#c4862a) as the only accent, used on titles, borders, and the primary CTA. Secondary blue-teal (#1a6080) for muted states. Zilla Slab for display and headings (coastal slab-serif with a point of view). Nunito for body and UI (rounded, legible, friendly). No decorative ornament; depth comes from the amber-to-teal gradient divider line beneath each recipe title — the signature move, the color of a Pacific sunset seen from a palapa.

STORY: The visitor lands on a two-panel shell: a selectable recipe list on the left (both recipes visible as rows), a full recipe detail on the right. They choose a recipe, read the ingredients list, scroll through the steps. Success is: both recipes readable, interface instantly navigable, design memorable.

FIRST VIEWPORT: Top bar (72px, navy, amber brand accent on wordmark). Left panel (420px, darker navy, two selectable recipe rows with number, title, origin tag, time/servings). Right panel (flex-1): recipe tag, title in Zilla Slab 42px, italic subtitle, amber-to-teal gradient divider, time/servings/difficulty chips, ingredients grid (2 cols), then steps, then a prominent amber CTA button. Selected recipe row highlighted with amber border and background tint.

FORM: Two-panel split (list + detail), a master-detail pattern. Position 2 on the grounded list (the most legible pattern for exactly 2 items). seed: bfaed7f842c67b30.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
