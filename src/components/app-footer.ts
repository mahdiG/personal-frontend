import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-footer")
export class AppFooter extends LitElement {
  protected override render() {
    return html`
      <footer class="page-footer">
        <div class="footer-inner">
          <div class="footer-links">
            <a href="https://github.com/artifex" target="_blank" rel="noopener"
              >GitHub</a
            >
            <a href="https://twitter.com/artifex" target="_blank" rel="noopener"
              >Twitter</a
            >
            <a href="mailto:hello@artifex.dev">Email</a>
          </div>
          <div class="footer-copy">© 2026 Artifex. All rights reserved.</div>
        </div>
      </footer>
    `;
  }

  static override styles = css`
    .page-footer {
      width: 100%;
      padding: var(--space-xl) 0;
      border-top: 1px solid var(--color-divider);
      margin-top: auto;
    }
    .footer-inner {
      max-width: 36rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-xs);
      opacity: 0.6;
      padding: 0 var(--space-md);
    }
    .footer-links {
      display: flex;
      gap: var(--space-md);
      font-family: var(--font-sans);
      font-size: var(--text-caption);
      color: var(--color-text-secondary);
    }
    .footer-links a {
      color: var(--color-text-secondary);
      text-decoration: underline;
      transition: color var(--transition-fast);
    }
    .footer-links a:hover {
      color: var(--color-primary);
    }
    .footer-copy {
      font-family: var(--font-sans);
      font-size: var(--text-caption);
      color: var(--color-text-secondary);
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-footer": AppFooter;
  }
}
