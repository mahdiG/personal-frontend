import { css } from "lit";

export const cssVariables = css`
  :host {
    /* ============================================
       Everyday Shortcut Tokens (use these first)
       ============================================ */

    /* Spacing */
    --space-xs: 0.5rem; /* 8px */
    --space-sm: 0.75rem; /* 12px */
    --space-md: 1.5rem; /* 24px */
    --space-lg: 3rem; /* 48px */
    --space-xl: 4rem; /* 64px */

    /* Typography sizes */
    --text-caption: 0.75rem; /* 12px */
    --text-small: 0.875rem; /* 14px */
    --text-body: 1rem; /* 16px */
    --text-heading: 1.25rem; /* 20px */
    --text-title: 1.953rem; /* 31px */
    --text-display: 2.441rem; /* 39px */

    /* Line heights */
    --leading-body: 1.6;
    --leading-heading: 1.4;
    --leading-caption: 1.5;

    /* Colors (shortcuts map to primary tokens) */
    --color-bg: #faf9f7;
    --color-surface: var(--color-bg);
    --color-text: var(--color-text-primary);
    --color-text-soft: var(--color-text-secondary);
    --color-text-disabled: var(--color-text-disabled);
    --color-primary: #3f5e81;
    --color-error: #c44d4d;
    --color-border: rgba(0, 0, 0, 0.06);

    /* Border radius */
    --radius-sm: 0.25rem; /* 4px */
    --radius-md: 0.5rem; /* 8px */
    --radius-full: 9999px;

    /* Motion */
    --transition-fast: 120ms cubic-bezier(0.2, 0, 0, 1);
    --transition-normal: 200ms cubic-bezier(0.2, 0, 0, 1);

    /* ============================================
       Full Token Reference
       ============================================ */

    /* --- Color Palette (Light) --- */
    --color-bg: #faf9f7;
    --color-surface: var(--color-bg);
    --color-surface-alt: #f4f3f1;
    --color-text-primary: #1c1b1a;
    --color-text-secondary: #6b6560;
    --color-text-disabled: #b7b3ad;
    --color-primary: #3f5e81;
    --color-secondary: var(--color-text-secondary);
    --color-error: #c44d4d;
    --color-divider: rgba(0, 0, 0, 0.06);
    --color-border: var(--color-divider);
    --color-border-focus: var(--color-primary);
    --color-border-error: var(--color-error);
    --color-chip-bg: rgba(0, 0, 0, 0.04);
    --color-chip-bg-hover: rgba(0, 0, 0, 0.07);
    --color-chip-border-selected: var(--color-primary);
    --color-icon-button-hover: var(--color-secondary);
    --color-knockout: #ffffff;

    /* --- Typography --- */
    --font-sans:
      system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --font-mono:
      ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
      monospace;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 600;

    --text-xs: 0.75rem; /* 12px */
    --text-sm: 0.875rem; /* 14px */
    --text-base: 1rem; /* 16px */
    --text-md: 1.25rem; /* 20px */
    --text-lg: 1.563rem; /* 25px */
    --text-xl: 1.953rem; /* 31px */
    --text-2xl: 2.441rem; /* 39px */
    --text-3xl: 3.052rem; /* 49px */

    /* Line heights */
    --line-height-xs: 1.5;
    --line-height-sm: 1.5;
    --line-height-base: 1.6;
    --line-height-md: 1.5;
    --line-height-lg: 1.4;
    --line-height-xl: 1.3;
    --line-height-2xl: 1.2;
    --line-height-3xl: 1.2;

    /* --- Spacing Scale (4px base) --- */
    --space-0: 0;
    --space-1: 0.25rem; /* 4px */
    --space-2: 0.5rem; /* 8px */
    --space-3: 0.75rem; /* 12px */
    --space-4: 1rem; /* 16px */
    --space-5: 1.25rem; /* 20px */
    --space-6: 1.5rem; /* 24px */
    --space-8: 2rem; /* 32px */
    --space-10: 2.5rem; /* 40px */
    --space-12: 3rem; /* 48px */
    --space-16: 4rem; /* 64px */
    --space-20: 5rem; /* 80px */
    --space-24: 6rem; /* 96px */

    /* --- Borders & Radii --- */
    --border-radius-none: 0;
    --border-radius-sm: 0.25rem;
    --border-radius-md: 0.5rem;
    --border-radius-pill: 9999px;
    --border-width-thin: 1px;
    --border-width-focus: 2px;

    /* --- Motion --- */
    --duration-instant: 80ms;
    --duration-fast: 120ms;
    --duration-normal: 200ms;
    --duration-slow: 300ms;
    --easing-standard: cubic-bezier(0.2, 0, 0, 1);
    --easing-enter: cubic-bezier(0, 0, 0.2, 1);
    --easing-exit: cubic-bezier(0.4, 0, 1, 1);
  }

  /* ============================================
     Dark Theme Overrides
     ============================================ */
  @media (prefers-color-scheme: dark) {
    :host {
      /* Everyday shortcuts */
      --color-bg: #1e1d1c;
      --color-surface: var(--color-bg);
      --color-text: #edebe8;
      --color-text-soft: #9c958d;
      --color-text-disabled: #5c5752;
      --color-primary: #8aa9c4;
      --color-error: #d97a7a;
      --color-border: rgba(255, 255, 255, 0.08);

      /* Full palette overrides */
      --color-surface-alt: #252423;
      --color-text-primary: #edebe8;
      --color-text-secondary: #9c958d;
      --color-secondary: var(--color-text-secondary);
      --color-divider: rgba(255, 255, 255, 0.08);
      --color-border-focus: var(--color-primary);
      --color-border-error: var(--color-error);
      --color-chip-bg: rgba(255, 255, 255, 0.06);
      --color-chip-bg-hover: rgba(255, 255, 255, 0.1);
      --color-chip-border-selected: var(--color-primary);
      --color-icon-button-hover: var(--color-secondary);
      --color-knockout: #1e1d1c;
    }
  }
`;
