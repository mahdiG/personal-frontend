# Using Stitch MCP to Create Pages

This document describes the workflow for taking a design from the **Stitch** design tool (via its MCP server) and turning it into a working page in this project.

> **Source of truth:** This guide captures patterns learned from creating the resume page (`src/pages/resume/resume-page.ts`) from the Stitch "Resume — Quiet Paper" design.

---

## Prerequisites

- **Stitch MCP server** must be connected and available. You can list available Stitch projects via the MCP tools it exposes.
- The **design system** (`docs/design-system.md`) and **CSS variables** (`src/styles/variables.ts`) must be your palette — never hardcode colors, spacing, or typography.
- **Existing page patterns** live in `src/pages/`. Study the notes pages (`notes-page.ts`, `notes-trash-page.ts`) as canonical examples.

---

## Workflow

### 1. Explore the Stitch Design

Use the Stitch MCP to list projects and get design details:

```
Use the Stitch MCP server to:
1. List available projects → find the project containing the design
2. Get the design's detailed data → extract layout, sections, typography, spacing
```

Pay attention to:
- Page layout (header, body, sidebar, etc.)
- Section structure (what content blocks exist)
- Typography hierarchy (headings, body, captions)
- Responsive behavior (mobile vs. desktop)

### 2. Map Design to Project Patterns

Before writing code, decide which **existing page pattern** to follow. The project has two main page patterns:

| Pattern | Characteristics | Example |
|---------|-----------------|---------|
| **List/manage page** | Full-height scroll, nav bar at bottom, list of items | `notes-page.ts`, `tasks-page.ts` |
| **Form/detail page** | Full-height scroll, nav bar at bottom, form or detail content | `note-form-page.ts`, `task-form-page.ts` |

For a **resume/display page**, follow the **form/detail pattern** (like `note-form-page.ts`):
- `display: flex; flex-direction: column; height: 100dvh`
- Scrollable container: `flex-grow: 1; overflow-y: auto`
- Bottom navigation bar using the shared `navBar` style
- Content has `max-width` and centered layout

### 3. Create the Page File

Create the file at `src/pages/<section>/<page-name>.ts` using this boilerplate:

```typescript
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "../../utils/localization";
import { SignalWatcher } from "@lit-labs/signals";
import { navigate } from "../../utils/router";
import { navBar } from "../../styles/styles";

@customElement("page-name")
@localized()
export class PageName extends SignalWatcher(LitElement) {
  // Navigation helper
  private goBack = () => {
    navigate(this, "/target-path");
  };

  protected override render() {
    return html`
      <!-- Scrollable content area -->
      <div class="container">
        <!-- Page content here, using semantic HTML -->
      </div>

      <!-- Bottom navigation bar -->
      <div class="nav-bar">
        <icon-button @click=${this.goBack}>arrow_back</icon-button>
        <span class="page-name">${msg("Page Title")}</span>
        <!-- Optional right action -->
        <icon-button @click=${this.someAction}>action_icon</icon-button>
      </div>
    `;
  }

  static override styles = [
    navBar,
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100dvh;
        width: 100%;
        box-sizing: border-box;
      }

      .container {
        flex-grow: 1;
        overflow-y: auto;
        padding: var(--space-sm);
      }

      /* ... rest of component styles using design tokens ... */
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "page-name": PageName;
  }
}
```

### 4. Use Design Tokens, Never Hardcoded Values

Reference `src/styles/variables.ts` and `docs/design-system.md` for all visual properties.

**Everyday shortcut tokens (prefer these first):**

| Category | Tokens |
|----------|--------|
| Spacing | `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl` |
| Typography | `--text-caption`, `--text-small`, `--text-body`, `--text-heading`, `--text-title`, `--text-display` |
| Line height | `--leading-body`, `--leading-heading`, `--leading-caption` |
| Colors | `--color-bg`, `--color-surface`, `--color-text`, `--color-text-soft`, `--color-text-disabled`, `--color-border`, `--color-error`, `--color-knockout` |
| Radius | `--radius-sm`, `--radius-md`, `--radius-full` |
| Motion | `--transition-fast`, `--transition-normal` |

**Full palette tokens (use when shortcuts don't exist):**

| Token | Example use |
|-------|-------------|
| `--color-divider` | Borders, dividers |
| `--color-chip-bg` | Chip backgrounds |
| `--color-text-secondary` | Secondary/muted text |
| `--color-knockout` | White card backgrounds |

### 5. Layout Structure (from Stitch Design)

Translate the Stitch design sections into semantic HTML:

```
┌─────────────────────────────┐
│  Container (scrollable)     │
│                             │
│  ┌── Paper/Card ──────────┐ │
│  │  Header                │ │
│  │    - Name              │ │
│  │    - Title             │ │
│  │    - Contact info      │ │
│  ├────────────────────────┤ │
│  │  Section               │ │
│  │    - Summary paragraph │ │
│  ├────────────────────────┤ │
│  │  Section               │ │
│  │    - Experience items  │ │
│  │      * Role + Date     │ │
│  │      * Company         │ │
│  │      * Bullet list     │ │
│  ├────────────────────────┤ │
│  │  Grid (2-col)          │ │
│  │  ├─────────┬──────────┤ │
│  │  │ Skills │ Education│ │
│  │  └─────────┴──────────┘ │
│  └────────────────────────┘ │
│                             │
├─────────────────────────────┤
│  Nav Bar                    │
│  (back | title | action)    │
└─────────────────────────────┘
```

**Key CSS patterns derived from Stitch:**

- **Paper card effect:** Use `--color-knockout` background with subtle `box-shadow`, max-width `210mm` (A4), centered with `margin: 0 auto`
- **Section separation:** `border-bottom: 1px solid var(--color-divider)` under section titles
- **Responsive grid:** `grid-template-columns: 1fr` on mobile, `1fr 1fr` at `640px` breakpoint
- **Print styles:** Hide nav bar with `@media print { .nav-bar { display: none; } }`, remove shadows
- **List items with bullets:** Use `::before` pseudo-element with a small dot (4px, borderRadius 50%) instead of `list-style`

### 6. Register the Route

In `src/utils/router.ts`:

1. **Import the page** at the top of the file (with all other page imports):
   ```typescript
   import "../pages/section/page-name";
   ```

2. **Add a route entry** in the router config array (before the `/*` catch-all):
   ```typescript
   {
     path: "/page-path",
     render: () => html`<page-name></page-name>`,
   },
   ```

For dynamic routes (e.g., `/notes/:id`), use the `params` argument:
```typescript
{
  path: "/notes/:id",
  render: ({ id }) => html`<note-form-page .noteID=${id ?? ""}></note-form-page>`,
},
```

### 7. Verify

Run these commands before considering the task done:

```bash
npm run typecheck    # No type errors
npm run lint         # No lint errors
npm run format:fix   # Formatting applied
```

---

## Common Pitfalls

1. **Missing `navBar` import** — Always import `navBar` from `../../styles/styles` and include it in the `static styles` array. The nav bar's `.nav-bar` class is not a standard Lit class — it comes from this shared style.

2. **Forgetting `SignalWatcher`** — Wrap `LitElement` with `SignalWatcher(LitElement)` so reactive signal values update the component.

3. **Hardcoding values** — Never use raw pixel values for colors, spacing, or typography. Always map to CSS variable tokens.

4. **Missing the global type declaration** — Always include the `declare global { interface HTMLElementTagNameMap { "page-name": PageName; } }` block at the bottom.

5. **Not matching existing code style** — Match the file's indentation, import order, and comment style. Don't reformat surrounding code.

6. **Router import in wrong position** — The import statement goes with the other page imports. The route config entry goes before the `/*` catch-all route.

7. **Using camelCase type fields** — When working with API data, use PascalCase field names (e.g., `ID`, `Title`, `Content`, `CreatedAt`) to match backend structs.

---

## Reference: Resume Page Implementation

The resume page (`src/pages/resume/resume-page.ts`) demonstrates all these patterns:

- **Structure:** Full-height scroll container with nav bar at bottom
- **Content:** Paper-like card with `max-width: 210mm` and `background: var(--color-knockout)`
- **Sections:** Header (name, title, contact), Summary, Experience (job entries with bullets), Skills & Education (responsive grid)
- **Print support:** Clean A4 output with no chrome
- **Tokens used:** `--color-knockout`, `--color-divider`, `--color-text-primary`, `--color-text-secondary`, `--color-text-disabled`, `--color-text`, `--space-xs` through `--space-lg`, `--text-caption` through `--text-2xl`, `--leading-body`
- **Responsive:** Experience header goes horizontal at 640px; Skills/Education grid goes 2-column at 640px
- **Route:** `/resume` — registered in `src/utils/router.ts`