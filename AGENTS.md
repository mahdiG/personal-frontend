# AGENTS.md — Jarvis Frontend Instructions

This file is the **source of truth** for AI agents and developers working on this project.  
AI agents **must** follow it when generating or editing code, and they **must** update it when corrected or when learning something new about the project.

---

## Key Project Files

- `docs/design-system.md` – design tokens, component patterns, visual guidelines
- `src/styles/variables.ts` – CSS custom properties and design constants (consume these, never hardcode values)
- `src/components/` – reusable web components (Lit); always check for existing components before building new ones
- **Menu is a component, not a page**: The menu (navigation drawer) is rendered by `app-menu` as a slide-out overlay triggered by `app-root`. Every Stitch-aligned page (`home`, `journal`, `portfolio`, `resume`) only renders its `.page-content` contents — the top bar, back button, menu button, footer, and drawer are provided by `app-root`. Never create a separate route for the menu.

---

## Coding Guidelines

These apply to all code in the repository.

### API source of truth

- **Always check `http://localhost:3000/v1/swagger/doc.json`** before implementing API calls. This is the single source of truth for available endpoints, request/response shapes, HTTP methods, and field names (including casing conventions).
- **Backend fields use PascalCase** (e.g. `ID`, `Title`, `Content`, `CreatedAt`, `Tags`). The frontend must either match this in its types or transform responses accordingly — never hardcode mismatched field names.

### API conventions

- **API functions that deal with entities must accept the full entity type**, not individual fields. For example `createNote(note: Note)`.
- **For update operations**, the ID should be extracted from the entity object itself (e.g. `updateNote(note: Note)` uses `note.ID` to construct the URL), rather than passed as a separate parameter.
- This pattern ensures consistency across all API modules and makes call sites simpler.

### Principles (highest priority)

- **Clarity over cleverness**: optimize for readability, predictability, and maintainability.
- **Make intent obvious**: write code that a teammate can understand quickly without extra context.
- **Small, composable pieces**: prefer functional and modular code where each function does one clear thing.
- **Stability through tests**: write tests so changing code later is safe and fast.

### Naming

- **Use complete, understandable names**: avoid short/unclear names (example bad names: `b`, `res`, `obj`, `foo`, single-letter variables like `t`, generic names like `data`). Names should be self-explanatory and reveal intent.
- **Prefer descriptive names over abbreviations**: for example use `localizeLabel`/`localizeMessage` instead of `t`, `transformedResult` instead of `result`, `isLoading` instead of `loading`. A name like `t` is never acceptable — always spell out the meaning.
- **Do not use `reduce`**: `Array.prototype.reduce` is confusing and harms readability. Use `for` loops, `map`, `filter`, or `flatMap` instead.
- **Prefer domain language**: name things after product concepts (habit, timeline event, streak, session).
- **Boolean naming**:
  - Use `is/has/can/should` prefixes: `isAuthenticated`, `hasUnsavedChanges`.
  - Avoid double negatives.
- **Function naming**:
  - Prefer verbs: `createTimelineEvent`, `parseHabitSchedule`, `formatDuration`.
  - Event handlers: `onX` props, `handleX` implementations (keep consistent).
- **Case conventions**:
  - **kebab-case** for: CSS class names (`habit-card`, `progress-bar`), file names (`jarvis-button.ts`), directory names (`event-timeline-page.ts`), and Lit custom event names (`@reset-demo`, `@habit-toggled`).
  - **camelCase** for: function names (`createTimelineEvent`), methods (`renderHeader`), variables (`completedCount`), properties (`measurementType`), and Lit property/attribute names (`completedToday`).
- **PascalCase (CapitalCamelCase)** for: type/interface/class names (`Habit`, `HabitMeasurementType`, `TimelineEvent`) and **all type fields/properties** (`ID`, `Name`, `MeasurementType`, `CompletedToday`) to mirror backend model structs (check `http://localhost:3000/v1/swagger/doc.json` for exact field names). Acronyms (`ID`, `URL`, `HTTP`) remain fully uppercase.
  - Never mix: don't use camelCase in CSS classes or kebab-case in JS identifiers.
  - **Important**: The backend always returns PascalCase JSON keys. Your types must use `ID`, `Title`, `Content`, `CreatedAt`, etc. — not `id`, `title`, `content`, `createdAt`. If you accidentally use camelCase fields, the data will be `undefined` at runtime.

### Functions, modules, and structure

- **Keep functions short**: if a function is hard to scan, split it.
- **One reason to change**: each function should have a single responsibility.
- **Avoid repetition**:
  - Extract reusable helpers and components.
  - Prefer shared utilities over copy/paste.
  - If logic is reused in 3+ places, it likely belongs in a shared module.
- **Keep modules focused**:
  - UI components should not contain heavy business logic.
  - Business logic should be testable without the DOM when possible.
- **Minimize side effects**: isolate IO (network, storage, time) behind small interfaces.

### Types & TypeScript

- **Don't fight the type system**: prefer correct types over `any`. Prefer one type over multiple types. Use zero value instead of null. Use typescript `type` instead of `interface`.
- **Prefer narrow types**: model domain states precisely; avoid “bags of optional fields”.
- **Avoid type assertions** (`as Something`) unless you can justify the invariant.
- **Runtime validation for external data**: anything coming from network/storage is untrusted—validate/parse before use.
- **Type fields match backend structs**: Use PascalCase for all type property names (e.g. `{ID: string; Name: string; MeasurementType: string}`), consistent with the backend model naming convention. Acronyms like `ID`, `URL`, `HTTP` stay fully uppercase. This applies to all `type` and `interface` definitions.

### Error handling & UX

- **Fail loudly in development, gracefully in UI**:
  - Throw or surface actionable errors in dev.
  - In the UI, show clear messages and recovery actions when possible.
- **No silent failures**: avoid empty `catch {} ` blocks.
- **Prefer explicit states**: loading, empty, error states should be intentionally designed.

### UI code (Lit / components)

- **Accessibility is non-negotiable**:
  - Use semantic HTML.
  - Label inputs properly.
  - Ensure keyboard navigation works.
  - Don't rely on color alone for meaning.
- **Consistency over novelty**: reuse existing components/styles/tokens rather than inventing a new pattern.
- **Keep rendering simple**: compute derived view models outside templates when it improves readability.
- **Always consult design system and tokens**: before adding new styles, check `docs/design-system.md` and `src/styles/variables.ts`. Use existing CSS custom properties; never hardcode colors, spacing, or typography.
- **Prefer everyday shortcut CSS variables**: When using CSS custom properties from `src/styles/variables.ts`, prefer the "everyday shortcut" tokens (e.g. `--space-sm`, `--text-body`, `--color-bg`, `--color-text-soft`, `--transition-normal`) over the more granular full-palette tokens (e.g. `--space-3`, `--text-base`, `--color-text-primary`, `--color-text-secondary`) when they are semantically equivalent. The shortcuts are more readable and sufficient for most cases. Only fall back to the granular tokens when the shortcut doesn't exist for the specific value you need.
- **Reuse components**: look in `src/components/` for an existing reusable component before creating a new one. If none fits, create a new reusable component there that follows the design system and is testable.

### Formatting & style

- **Prefer simple control flow**:
  - Early returns over deeply nested `if`s.
  - Small helpers over long inline callbacks.
- **Be consistent**: match the existing style in the file/module unless there's a strong reason to change it.
- **Avoid “magic”**:
  - Use constants for shared literals.
  - Document non-obvious constraints in code (with a short comment explaining _why_, not _what_).

### Dependencies & versions

- **Pin exact dependency versions**: use fixed versions in `package.json` (no `^` / `~`) to avoid unexpected upstream changes.

### Testing (required for non-trivial changes)

Tests are how we keep the app stable and make refactors safe.

- **Write tests for**:
  - Bug fixes (regression tests).
  - Non-trivial logic (parsing, calculations, state transitions).
  - Components with important interaction flows (when feasible).
- **Use the right test runner**:
  - `vitest` for logic/unit tests (fast, no browser).
  - `@web/test-runner` with `@open-wc/testing` for component tests (runs in real browser for full DOM support).
- **Prefer deterministic tests**: control time, randomness, and network boundaries.
- **Test behavior, not implementation**: assert outcomes and user-visible behavior.
- **Keep tests readable**: arrange/act/assert structure, descriptive test names.

### Reviews & maintenance

- **Leave the codebase better**:
  - Small cleanups are good when they reduce future confusion.
  - Don't mix refactors with feature changes unless necessary.
- **Update docs when behavior changes**:
  - If a change alters how a feature works, update the relevant `docs/` page.
  - If feedback indicates a guideline gap, update this doc so the rule is explicit.

---

## AI Agent Behavioral Rules

These are **mandatory** for all AI coding agents. They build on the Karpathy behavioral guidelines and are tailored to this project’s workflow.

### 1. Think Before Coding

- **State your assumptions** before writing code. If multiple interpretations exist, list them and ask which is correct.
- **Do not hide confusion**. If something is unclear, stop and name exactly what you don’t understand. Ask me before proceeding.
- **Surface tradeoffs**. If a simpler approach exists, explain it and offer the choice. Push back when a request would lead to overcomplication or violate project guidelines.

### 2. Simplicity First

- Produce **the minimum code** that solves the stated problem. No speculative features, no “flexibility” that wasn’t requested.
- Avoid single-use abstractions. If you write 200 lines where 50 would do, rewrite it.
- No error handling for impossible scenarios; handle only the states that can actually happen.

### 3. Surgical Changes

- **Touch only what you must**. Do not “improve” adjacent code, comments, or formatting unless it’s directly required by the task.
- When your changes create orphans (unused imports, variables, functions), remove only those introduced by your changes. Don’t delete pre-existing dead code unless explicitly asked.
- Match the existing style in every file, even if you’d write it differently.

### 4. Goal-Driven Execution

- **Define “done” before starting**. Transform vague requests into verifiable goals:
  - “Add validation” → “Write tests for invalid inputs, then make them pass”
  - “Fix bug” → “Write a failing test that reproduces the bug, then fix it”
  - “Refactor X” → “Ensure all tests pass before and after”
- For multi-step tasks, present a **numbered plan** with a verification step for each:

```

1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]

```

- **Plan first, then confirm**. Before implementing non-trivial changes, outline your plan and ask for confirmation. Only start coding after I confirm.
- **Test that the task succeeded**. Run the relevant tests and demonstrate that success criteria are met. Don’t just say “done” — show evidence.

### 5. Always Write Tests & Verify Compilation

- For any new feature, bug fix, or logic change, write automated tests (unit or component) following the Testing guidelines above.
- Tests are part of the definition of done. No task is complete without them.
- **Check for compile errors**: run `npm run typecheck` and `npm run lint` to verify no type errors or lint issues before committing. A change that introduces compilation errors is not done.

### 5b. Always Format with Prettier

- Run `npm run format:fix` before committing to ensure all changed files match project formatting.
- If your editor doesn't format on save, manually run the formatter after making changes.
- Do not leave formatting inconsistencies in the codebase.

### 6. Update AGENTS.md on Corrections

- If I correct you, that correction becomes a permanent rule. Immediately add it to the **Learned Rules** section below.
- Include the date and a brief reason. Example:
- `(2026-05-22) Use PascalCase for all type fields to match backend structs. (Was mistakenly using camelCase id.)`
- If you’re unsure about how to translate a correction into a rule, ask me before editing.

### 7. General Agent Conduct

- **Follow the Coding Guidelines** in this document to the letter.
- **Prefer minimal diffs**: don’t rewrite unrelated code.
- **Don’t introduce new dependencies** without a clear need.
- **Always consult design tokens and components**: never hardcode styles; always check for reusable components first.
- **Match the existing code style**, even outside the formal conventions (spacing, import order, comment style).
- **If you’re ever unsure, stop and ask.** It’s faster to clarify up front than to undo mistakes later.

---

## Learned Rules

_(This section is updated automatically by AI agents whenever they are corrected or learn a new project-specific rule. Each entry includes the date and the reason.)_

- (2026-05-23) When modifying a reusable component, search all files that use it (e.g., via `search_files`) and update every consumer, not just the one file the task mentions. (Was mistakenly only updating notes-page.ts while missing notes-trash-page.ts.)
- (2026-01-06) Menu is a component (`app-menu`), not a page. It mounts in `app-root` as a slide-out drawer overlay. All pages that use `stitchLayout` must only render their `.page-content` children — the shared shell (top bar, drawer, footer) is provided by `app-root`. (Menu was incorrectly given its own route `/menu` as a full page, causing it to render as a standalone layout rather than an overlay.)

```
---
```
