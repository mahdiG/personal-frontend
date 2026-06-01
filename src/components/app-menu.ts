import { LitElement, css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { navigate } from "../utils/router";

@customElement("app-menu")
export class AppMenu extends LitElement {
  @property({ type: Boolean, attribute: "is-open" })
  isOpen = false;

  private handleBackdropClick = () => {
    this.close();
  };

  private handleNavClick = (event: Event) => {
    event.preventDefault();
    const path = (event.currentTarget as HTMLAnchorElement).pathname;
    navigate(this, path);
    this.close();
  };

  private close = () => {
    this.dispatchEvent(
      new CustomEvent("close", {
        bubbles: true,
        composed: true,
      }),
    );
  };

  private stopPropagation = (event: Event) => {
    event.stopPropagation();
  };

  protected override render() {
    if (!this.isOpen) return nothing;

    return html`
      <div class="drawer-overlay active" @click=${this.handleBackdropClick}>
        <div class="drawer open" @click=${this.stopPropagation}>
          <div class="drawer-header">
            <span class="drawer-title">Menu</span>
            <button
              class="drawer-close"
              @click=${this.close}
              aria-label="Close"
            >
              close
            </button>
          </div>

          <nav class="drawer-nav">
            <a class="drawer-link" href="/" @click=${this.handleNavClick}>
              <span class="drawer-link-icon">home</span>
              <span>Home</span>
            </a>
            <a
              class="drawer-link"
              href="/portfolio"
              @click=${this.handleNavClick}
            >
              <span class="drawer-link-icon">folder</span>
              <span>Portfolio</span>
            </a>
            <a
              class="drawer-link"
              href="/journal"
              @click=${this.handleNavClick}
            >
              <span class="drawer-link-icon">article</span>
              <span>Journal</span>
            </a>
            <a class="drawer-link" href="/resume" @click=${this.handleNavClick}>
              <span class="drawer-link-icon">description</span>
              <span>Resume</span>
            </a>
          </nav>
        </div>
      </div>
    `;
  }

  static override styles = css`
    /* Drawer Overlay */
    .drawer-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.1);
      z-index: 49;
      backdrop-filter: blur(4px);
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--duration-slow, 300ms)
        var(--easing-standard, cubic-bezier(0.2, 0, 0, 1));
    }
    .drawer-overlay.active {
      opacity: 1;
      pointer-events: auto;
    }

    /* Drawer */
    .drawer {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 50;
      background: var(--color-bg, #faf9f7);
      height: 100%;
      width: min(80vw, 16rem);
      transform: translateX(-100%);
      border-right: 1px solid var(--color-divider, rgba(0, 0, 0, 0.06));
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      gap: var(--space-md, 1.5rem);
      padding: var(--space-lg, 3rem) var(--space-md, 1.5rem);
      transition: transform var(--duration-slow, 300ms)
        var(--easing-standard, cubic-bezier(0.2, 0, 0, 1));
      overflow-y: auto;
    }
    .drawer.open {
      transform: translateX(0);
    }

    .drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-md, 1.5rem);
    }
    .drawer-title {
      font-family: var(--font-sans, system-ui);
      font-size: var(--text-heading, 1.25rem);
      font-weight: var(--font-weight-medium, 500);
      color: var(--color-text-primary, #1c1b1a);
    }
    .drawer-close {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-xs, 0.5rem);
      min-width: 2.75rem;
      min-height: 2.75rem;
      color: var(--color-text-secondary, #6b6560);
      background: none;
      border: none;
      cursor: pointer;
      font-family: "MaterialIcons";
      font-size: 1.25rem;
      transition: color var(--transition-fast, 120ms cubic-bezier(0.2, 0, 0, 1));
    }
    .drawer-close:hover {
      color: var(--color-primary, #3f5e81);
    }

    .drawer-nav {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm, 0.75rem);
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .drawer-link {
      display: flex;
      align-items: center;
      gap: var(--space-sm, 0.75rem);
      text-decoration: none;
      color: var(--color-text-secondary, #6b6560);
      font-family: var(--font-sans, system-ui);
      font-size: var(--text-body, 1rem);
      padding: var(--space-sm, 0.75rem) var(--space-xs, 0.5rem);
      min-height: 2.75rem;
      transition:
        transform var(--duration-fast, 120ms)
          var(--easing-standard, cubic-bezier(0.2, 0, 0, 1)),
        color var(--transition-fast, 120ms cubic-bezier(0.2, 0, 0, 1));
      cursor: pointer;
      border-radius: var(--radius-sm, 0.25rem);
    }
    .drawer-link:hover {
      transform: translateX(4px);
      color: var(--color-primary, #3f5e81);
      background: var(--color-chip-bg, rgba(0, 0, 0, 0.04));
    }
    .drawer-link.active {
      color: var(--color-primary, #3f5e81);
      font-weight: var(--font-weight-medium, 500);
    }
    .drawer-link-icon {
      font-family: "MaterialIcons";
      font-size: 1.25rem;
      width: 1.25rem;
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-menu": AppMenu;
  }
}
