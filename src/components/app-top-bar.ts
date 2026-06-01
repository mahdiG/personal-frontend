import { LitElement, css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-top-bar")
export class AppTopBar extends LitElement {
  @property({ type: String, attribute: "page-title" })
  pageTitle = "";

  @property({ type: Boolean, attribute: "show-back" })
  showBack = false;

  private handleBackClick = () => {
    this.dispatchEvent(
      new CustomEvent("back", {
        bubbles: true,
        composed: true,
      }),
    );
  };

  private handleMenuClick = () => {
    this.dispatchEvent(
      new CustomEvent("toggle-menu", {
        bubbles: true,
        composed: true,
      }),
    );
  };

  protected override render() {
    return html`
      <header class="top-bar">
        <div class="top-bar-inner">
          <div class="top-bar-left">
            ${this.showBack
              ? html`
                  <button
                    class="top-bar-button"
                    @click=${this.handleBackClick}
                    aria-label="Back"
                  >
                    arrow_back
                  </button>
                `
              : nothing}
            <span class="top-bar-title">${this.pageTitle || "Artifex"}</span>
          </div>
          <div class="top-bar-right">
            <div class="top-bar-nav">
              <a class="top-bar-nav-link" href="/">Home</a>
              <a class="top-bar-nav-link" href="/portfolio">Portfolio</a>
              <a class="top-bar-nav-link" href="/journal">Journal</a>
              <a class="top-bar-nav-link" href="/resume">Resume</a>
            </div>
            <button
              class="top-bar-button"
              @click=${this.handleMenuClick}
              aria-label="Menu"
            >
              menu
            </button>
          </div>
        </div>
      </header>
    `;
  }

  static override styles = css`
    .top-bar {
      position: sticky;
      top: 0;
      background: var(--color-bg);
      z-index: 40;
      border-bottom: 1px solid var(--color-divider);
      backdrop-filter: blur(12px);
      transition: background var(--transition-normal);
    }
    .top-bar-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 36rem;
      margin: 0 auto;
      padding: var(--space-sm) var(--space-md);
      box-sizing: border-box;
    }
    .top-bar-left {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }
    .top-bar-right {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }
    .top-bar-title {
      font-family: var(--font-sans);
      font-size: var(--text-heading);
      font-weight: var(--font-weight-medium);
      color: var(--color-text-primary);
      letter-spacing: -0.02em;
    }
    .top-bar-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-xs);
      color: var(--color-text-secondary);
      background: none;
      border: none;
      cursor: pointer;
      font-family: "MaterialIcons";
      font-size: 1.25rem;
      transition: color var(--transition-fast);
      border-radius: var(--radius-sm);
    }
    .top-bar-button:hover {
      color: var(--color-primary);
    }
    .top-bar-nav {
      display: none;
    }
    @media (min-width: 40rem) {
      .top-bar-nav {
        display: flex;
        gap: var(--space-md);
      }
      .top-bar-nav-link {
        font-family: var(--font-sans);
        font-size: var(--text-body);
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: color var(--transition-fast);
      }
      .top-bar-nav-link:hover {
        color: var(--color-primary);
      }
      .top-bar-button:last-child {
        display: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-top-bar": AppTopBar;
  }
}
