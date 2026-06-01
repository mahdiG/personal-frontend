import { css } from "lit";

// the dot dot dot (...) for long texts
export const ellipses = css`
  .ellipses {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* Number of lines to show before truncating */
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    max-width: 100%;
    line-height: 1.4;
  }
`;

export const navBar = css`
  .nav-bar {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    min-height: var(--space-10);
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    color: var(--color-text-soft);
  }
  .nav-bar icon-button {
    text-align: center;
    align-content: center;
    height: 100%;
    padding: 0 var(--space-xs);
  }
  .nav-bar .page-name {
    flex-grow: 1;
    font-size: 1rem;
    line-height: 100%;
    height: 100%;
    align-content: center;
  }
`;

/* Shared styles for Stitch-aligned pages (home, portfolio, journal, resume) */
export const stitchLayout = css`
  :host {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    background: var(--color-bg);
    color: var(--color-text-primary);
  }

  /* Main content area */
  .page-content {
    flex: 1;
    width: 100%;
    max-width: 36rem;
    margin: 0 auto;
    padding: var(--space-md) var(--space-sm) var(--space-lg);
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .page-content {
      padding: var(--space-lg) var(--space-md) var(--space-xl);
    }
  }
`;
