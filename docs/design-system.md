# Design System: _Quiet Paper_ (v1.1 — with Everyday Tokens)

**Philosophy:** Distraction‑free, full‑screen, blank‑sheet interface. Remove everything unnecessary. Use whitespace as the primary separator. Colors are warm, muted, never muddy. Motion is gentle and brief. All values are CSS custom properties, easily overridable for A/B testing.

## Design Philosophy & Style Guide: _Quiet Paper_

> _“Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.”_  
> — Antoine de Saint‑Exupéry

The _Quiet Paper_ design system is the visual language of an **AI Life OS** — a tool that organizes your journals, tasks, habits, schedule, and insights. It must fade into the background so your thoughts and intentions take center stage. This philosophy document explains the deep intent behind every design choice, so that anyone — human or AI agent — can carry the same feeling forward when building new components or entire screens.

---

### 1. The Core Metaphor: A Blank Sheet of Paper

Imagine a warm, slightly textured sheet of fine paper on an uncluttered desk, lit by soft window light. There’s no chrome, no gratuitous decoration, no heavy interface. Only the content you choose to put on it. That’s the emotional target: **open, free, and endlessly calm**.

Every design decision is measured against this metaphor:

- **Full‑screen immersion** — The app hides all unnecessary chrome. On mobile, a single floating menu button may auto‑hide. On desktop, you might see nothing but content until you deliberately invoke a command. The screen should feel bigger, more expansive, and entirely yours.
- **Warm white, not sterile** — Pure white (`#FFFFFF`) can feel clinical and harsh, while pure black feels heavy. Instead, the light theme uses a barely perceptible warm off‑white (`#FCFBF9`), evoking paper. The dark theme is a deep, warm brown‑black (`#1E1D1C`) that’s restful rather than severe.
- **No “dirty” grays** — Grays with muddled undertones feel unclean and break the sense of a pristine sheet. The palette stays crisp: cool‑neutral or warm‑neutral depending on context, always clean and intentional.

---

### 2. Minimalism With a Purpose

Minimalism here is not a style; it’s a discipline. Every visible element must answer one question: _“Does this help me think, or does it distract?”_ If it’s purely decorative, it goes.

- **Lines are a last resort** — A border or divider is only added when whitespace alone fails to communicate structure. Inputs have a single bottom border (a nod to the old Material Design purity you love) because the line telegraphs “you can write here” without boxing the user in. Dividers between panels appear only if background color shifts aren’t enough.
- **Whitespace is the separator** — Generous, breathing space replaces borders, frames, and shadows. Items in a list, sections on a page, groups of settings — they’re separated by nothing but carefully scaled spacing. This openness mirrors the blank sheet.
- **Cards that don’t look like cards** — Containers share the background color of the page by default. A “card” is just an area defined by internal padding and alignment, not a bounded box. The moment you add a border or shadow, you’ve created visual clutter that ties the eye down.
- **Icon‑first, text‑only when necessary** — Where possible, icons (Material Symbols, outlined, 24px) replace labels. Buttons are primarily iconic, with text buttons reserved for primary actions. Even then, a text button is simply underlined on hover — no background, no border, just typography.

---

### 3. The Quiet Color Story

Color is used sparingly, like a single pencil mark on a sketch. Nothing shouts; everything whispers.

- **Accent as guide, not decoration** — A muted slate blue (`#5B7A9E` in light, `#7B9AB8` in dark) acts as the only spot of controlled color. It marks what’s selected, what’s focused, and what’s interactive. It’s calm and professional, never hyper‑saturated or playful.
- **Subtle state changes** — Hover backgrounds on icon buttons and chips are barely there (10–12% opacity), just enough to acknowledge the interaction without stealing attention. A selected chip gets a thin accent outline and perhaps a slightly bolder text weight — no dramatic fill.
- **Error with restraint** — Errors use a soft, desaturated red (`#C44D4D`), never an alarming scarlet. The goal is to inform, not to stress.
- **Themes that adapt, not assault** — Both light and dark themes share identical structure; only the luminance flips. This keeps the spatial and typographic experience consistent, day or night.

---

### 4. Typography as Hierarchy, Not Decoration

Type does the heavy lifting of structure without any extra graphic aids. The system relies on weight (regular vs. medium) and size variations to establish order.

- **System fonts, instant load** — Using `system-ui` ensures native performance and a familiar reading rhythm. No custom web font downloads, no flash of unstyled text. The design feels like a native part of your operating system.
- **A restrained scale** — Headings are only slightly larger than body text; display numbers (for stats, streaks) are allowed to be bold in size but remain regular in weight. This keeps the reading experience calm and cohesive.
- **No uppercase, no letter‑spacing tricks** — Everything is set in normal case, with natural letter spacing. There’s no forced “branding” through typographic gymnastics.

---

### 5. The User’s Attention Is Sacred

An AI Life OS touches deeply personal data — thoughts, habits, moods, schedules. The interface must respect the user’s cognitive load.

- **Distraction‑free by default** — In journal or note views, the editing canvas behaves like Ghostwriter: full screen, no toolbars in sight, maybe a faint cursor and a subtle menu button that disappears after a few seconds of inactivity. You see only your words.
- **Navigation on demand** — A full‑screen hamburger overlay or a hidden command palette replaces persistent sidebars. You ask for navigation; it doesn’t live permanently on screen taking up space.
- **Motion that soothes, not startles** — Transitions are quick (120–200ms) with a gentle deceleration curve. A modal appears with a faint scale and fade; a text button’s underline grows from the center. Animations are there to make interactions feel direct and soft, never to show off.

---

### 6. Built for Iteration: The Token Philosophy

This design system is expressed entirely through CSS custom properties. Every spacing, color, radius, and motion value is a variable. The everyday shortcut tokens (`--space-sm`, `--text-body`, `--color-text`, etc.) let you build 80% of the UI without thinking about the underlying scale.

This approach gives you the power to **A/B test your own taste**:

- Want more breathing room? Change `--space-sm`, `--space-md`, etc., and the whole app reflows.
- Think the accent should be a touch warmer? Change `--color-accent` once.
- Need to differentiate surfaces from the background? Override `--color-surface` with a one‑degree tint.

The system is never static; it’s a living conversation between you and the interface, guided by a clear philosophy but open to refinement.

---

### 7. The Feeling in Three Words

If the interface could be summed up in an emotional promise, it would be: **Quiet. Focused. Free.**

It’s the feeling of sitting down with a blank notebook and a good pen, knowing the world is hushed and you have all the space you need to think. That’s the experience _Quiet Paper_ is designed to deliver, across every component, every screen, and every interaction.

---

_This philosophy is the anchor of the design system. Whenever a new component or layout is created, refer back to these principles: blank sheet, minimal purpose, quiet colors, typographic hierarchy, respect for attention, and flexible tokens. If an element doesn’t serve these ideals, it doesn’t belong._

---

## 1. Everyday Tokens (Shortcuts) ⭐

> **Use these first.** They map to the detailed tokens and cover most common styling decisions. Change their underlying references to adjust the whole UI quickly.

### 1.1 Spacing (gap, padding, margin)

| Variable     | Maps to                  | Typical use                |
| ------------ | ------------------------ | -------------------------- |
| `--space-xs` | `var(--space-2)` (8px)   | Tight gaps, icon padding   |
| `--space-sm` | `var(--space-3)` (12px)  | Inner padding, small gaps  |
| `--space-md` | `var(--space-6)` (24px)  | Section gaps, card padding |
| `--space-lg` | `var(--space-12)` (48px) | Major layout separations   |
| `--space-xl` | `var(--space-16)` (64px) | Page‑level breathing room  |

### 1.2 Typography (font‑size)

| Variable         | Maps to                      | Typical use                 |
| ---------------- | ---------------------------- | --------------------------- |
| `--text-caption` | `var(--text-xs)` (0.75rem)   | Error messages, meta        |
| `--text-small`   | `var(--text-sm)` (0.875rem)  | Secondary labels            |
| `--text-body`    | `var(--text-base)` (1rem)    | Body, inputs, buttons       |
| `--text-heading` | `var(--text-md)` (1.25rem)   | Card titles, small headings |
| `--text-title`   | `var(--text-xl)` (1.953rem)  | Page titles                 |
| `--text-display` | `var(--text-2xl)` (2.441rem) | Large stats, hero numbers   |

**Line‑height shortcuts:**
| Variable | Value | Use with |
|----------|-------|----------|
| `--leading-body` | `1.6` | Body text |
| `--leading-heading` | `1.4` | Headings/titles |
| `--leading-caption` | `1.5` | Small text |

### 1.3 Colors

| Variable                | Maps to                       | Meaning                                       |
| ----------------------- | ----------------------------- | --------------------------------------------- |
| `--color-bg`            | _(direct)_                    | Page background                               |
| `--color-surface`       | _(direct)_                    | Card/panel background (same as bg by default) |
| `--color-text`          | `var(--color-text-primary)`   | Primary text                                  |
| `--color-text-soft`     | `var(--color-text-secondary)` | Muted, labels, captions                       |
| `--color-text-disabled` | _(direct)_                    | Disabled text                                 |
| `--color-accent`        | _(direct)_                    | Focus, selected, links                        |
| `--color-error`         | _(direct)_                    | Error states                                  |
| `--color-border`        | `var(--color-divider)`        | Dividers, input bottom line                   |

### 1.4 Border Radius

| Variable        | Maps to                              | Use                         |
| --------------- | ------------------------------------ | --------------------------- |
| `--radius-sm`   | `var(--border-radius-sm)` (4px)      | Buttons, small controls     |
| `--radius-md`   | `var(--border-radius-md)` (8px)      | Chips, icon button hover bg |
| `--radius-full` | `var(--border-radius-pill)` (9999px) | Pills, fully‑rounded chips  |

### 1.5 Motion

| Variable              | Maps to                                         | Use                          |
| --------------------- | ----------------------------------------------- | ---------------------------- |
| `--transition-fast`   | `var(--duration-fast) var(--easing-standard)`   | Hover, focus ring, underline |
| `--transition-normal` | `var(--duration-normal) var(--easing-standard)` | Modals, page transitions     |

**How to use the shortcuts (example):**

```css
.card {
  padding: var(--space-md);
  margin-bottom: var(--space-sm);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-text);
  background: var(--color-surface);
}
```

---

## 2. Complete Token Reference

If you need a value outside the shortcuts, use these. The everyday tokens simply point to the appropriate entries below.

### 2.1 Full Color Palette

| Token                          | Light                      | Dark                       | Usage                        |
| ------------------------------ | -------------------------- | -------------------------- | ---------------------------- |
| `--color-bg`                   | `#FCFBF9`                  | `#1E1D1C`                  | Main background              |
| `--color-surface`              | `var(--color-bg)`          | `var(--color-bg)`          | Cards, panels (adjustable)   |
| `--color-surface-alt`          | `#F5F4F2`                  | `#252423`                  | Alternate surface (optional) |
| `--color-text-primary`         | `#1C1B1A`                  | `#EDEBE8`                  | Primary text                 |
| `--color-text-secondary`       | `#6B6560`                  | `#9C958D`                  | Secondary/labels             |
| `--color-text-disabled`        | `#B7B3AD`                  | `#5C5752`                  | Disabled text                |
| `--color-accent`               | `#5B7A9E`                  | `#7B9AB8`                  | Focus, selected              |
| `--color-accent-soft`          | `rgba(91,122,158,0.1)`     | `rgba(123,154,184,0.12)`   | Subtle accent bg             |
| `--color-error`                | `#C44D4D`                  | `#D97A7A`                  | Error states                 |
| `--color-divider`              | `rgba(0,0,0,0.06)`         | `rgba(255,255,255,0.08)`   | Dividers, input border       |
| `--color-chip-bg`              | `rgba(0,0,0,0.04)`         | `rgba(255,255,255,0.06)`   | Chip rest                    |
| `--color-chip-bg-hover`        | `rgba(0,0,0,0.07)`         | `rgba(255,255,255,0.1)`    | Chip hover                   |
| `--color-chip-border-selected` | `var(--color-accent)`      | `var(--color-accent)`      | Chip selected outline        |
| `--color-icon-button-hover`    | `var(--color-accent-soft)` | `var(--color-accent-soft)` | Icon button hover bg         |

### 2.2 Full Typography Scale

| Token         | Font size / line‑height |
| ------------- | ----------------------- |
| `--text-xs`   | `0.75rem / 1.5`         |
| `--text-sm`   | `0.875rem / 1.5`        |
| `--text-base` | `1rem / 1.6`            |
| `--text-md`   | `1.25rem / 1.5`         |
| `--text-lg`   | `1.563rem / 1.4`        |
| `--text-xl`   | `1.953rem / 1.3`        |
| `--text-2xl`  | `2.441rem / 1.2`        |
| `--text-3xl`  | `3.052rem / 1.2`        |

Font family: `system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`  
Monospace: `ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace`  
Weights: `400` normal, `500` medium (selected chips), `600` bold (rare).

### 2.3 Full Spacing Scale (4px base)

| Token        | Value (rem) | Px   |
| ------------ | ----------- | ---- |
| `--space-0`  | 0           | 0    |
| `--space-1`  | 0.25rem     | 4px  |
| `--space-2`  | 0.5rem      | 8px  |
| `--space-3`  | 0.75rem     | 12px |
| `--space-4`  | 1rem        | 16px |
| `--space-5`  | 1.25rem     | 20px |
| `--space-6`  | 1.5rem      | 24px |
| `--space-8`  | 2rem        | 32px |
| `--space-10` | 2.5rem      | 40px |
| `--space-12` | 3rem        | 48px |
| `--space-16` | 4rem        | 64px |
| `--space-20` | 5rem        | 80px |
| `--space-24` | 6rem        | 96px |

### 2.4 Borders & Radii

| Token                  | Value         |
| ---------------------- | ------------- |
| `--border-radius-none` | 0             |
| `--border-radius-sm`   | 0.25rem (4px) |
| `--border-radius-md`   | 0.5rem (8px)  |
| `--border-radius-pill` | 9999px        |
| `--border-width-thin`  | 1px           |
| `--border-width-focus` | 2px           |

### 2.5 Motion Values

| Token               | Value                        |
| ------------------- | ---------------------------- |
| `--duration-fast`   | `120ms`                      |
| `--duration-normal` | `200ms`                      |
| `--duration-slow`   | `300ms`                      |
| `--easing-standard` | `cubic-bezier(0.2, 0, 0, 1)` |

---

## 3. Component Specifications (using shortcuts where appropriate)

Every component is mobile‑first (min touch target 44×44px) and defined by tokens.

### 3.1 Input (Floating Label, Bottom Line)

- **Container:** transparent, padding `--space-sm` 0 (horizontal 0).
- **Bottom border:** `1px solid var(--color-border)` resting, `2px solid var(--color-accent)` on focus, `2px solid var(--color-error)` on error.
- **Label:** floating, using `--text-body` when inside, `--text-caption` when floated. Color `--color-text-soft`, focus color `--color-accent`.
- **Error message:** below input, `--text-caption`, `color: var(--color-error)`, margin-top `--space-xs`.
- **Disabled:** border `--color-border`, text `--color-text-disabled`, label `--color-text-disabled`.

### 3.2 Buttons

**Text Button**

- Default: no background, `color: var(--color-accent)` (primary), `--color-text` (secondary).
- Hover: `text-decoration: underline` (transition `--transition-fast`).
- Focus‑visible: underline + background `--color-accent-soft`, `--radius-sm`.
- Disabled: `--color-text-disabled`, no underline.
- Padding: `--space-sm` `--space-md`, min height 44px.

**Icon Button**

- Size: 44×44px, icon 24px (Material Symbols outlined).
- Rest: `color: var(--color-text-soft)`.
- Hover: background `--color-icon-button-hover`, border‑radius `--radius-md`.
- Disabled: opacity 0.4, no hover.

### 3.3 Chips

- Rest: `background: var(--color-chip-bg)`, `border-radius: var(--radius-full)`, `color: var(--color-text)`, padding `--space-xs` `--space-sm`.
- Hover: `background: var(--color-chip-bg-hover)`.
- Selected: `border: 1px solid var(--color-chip-border-selected)`, `color: var(--color-accent)`, `font-weight: 500` (medium).
- Disabled: opacity 0.4.

### 3.4 Cards & Panels

- Card: `background: var(--color-surface)`, no border, no shadow. Padding `--space-md`. Cards separated by `--space-sm` gap.
- Panel/sidebar: separated from main content by a 1px `--color-border` vertical line (if needed, otherwise just whitespace).

### 3.5 Data Displays (Stats, Charts)

- **Stat numbers:** `font-size: var(--text-display)`, `font-weight: 400`, `color: var(--color-text)`. Label below: `--text-small`, `color: var(--color-text-soft)`. No container. Gap `--space-md`.
- **Line charts:** stroke `var(--color-accent)`, width 2px, no grid lines, faint baseline `--color-border`. Tooltip minimal.
- **Bar charts:** bars fill `var(--color-accent)` at 30% opacity, no borders.
- **Streak cells:** today: outline circle `--color-accent`, filled day: background `--color-accent-soft`.

### 3.6 Navigation (Minimal)

- **Hamburger:** icon button top‑left. Full‑screen overlay on tap: `background: var(--color-surface)`, items styled as text buttons, `font-size: var(--text-heading)`, padding `--space-md`. No lines, just whitespace. Active item: `color: var(--color-accent)`.
- **Desktop:** same pattern or always‑visible icon‑only sidebar (expandable).

---

## 4. Responsive & Full‑Screen Behavior

- **Breakpoints (min‑width):** 640px, 768px, 1024px, 1280px. All components stack naturally on mobile.
- **Distraction‑free mode:** For journal/editor view, hide all chrome except a small floating back/menu button. Chrome appears on interaction, fades out after inactivity (`opacity` transition `--transition-normal`).

---

## 5. Implementation Guide for AI Agent

1. Define all tokens from sections 1 and 2 as CSS custom properties on `:root` and `[data-theme="dark"]`.
2. Build components using the **everyday shortcuts** first; fall back to the detailed tokens only when needed.
3. Never use hardcoded values for color, spacing, radius, or motion.
4. Icons: `Material Symbols` static, 24px, outlined, grade 0, optical size 24.
5. The system is ready for A/B testing: just tweak the underlying mappings (e.g., `--space-sm`) and the whole app adapts.
