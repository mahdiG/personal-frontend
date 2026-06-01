import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { settings } from "./store/settings";
import { SignalWatcher } from "@lit-labs/signals";
import { localized } from "@lit/localize";
import { getDir, setLocale } from "./utils/localization";
import { cssVariables } from "./styles/variables";
import { createRouter, navigate } from "./utils/router";

import "./components/app-menu";
import "./components/app-top-bar";
import "./components/app-footer";

@customElement("app-root")
@localized()
export class AppRoot extends SignalWatcher(LitElement) {
  private router = createRouter(this);

  @state()
  private isMenuOpen = false;

  override connectedCallback() {
    super.connectedCallback();
    void setLocale(settings.get().Locale);

    this.setRouterEventListener();
    this.addEventListener("toggle-menu", this.handleToggleMenu);
    this.addEventListener("close", this.handleCloseMenu);
    this.addEventListener("back", this.handleBackNavigation);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("toggle-menu", this.handleToggleMenu);
    this.removeEventListener("close", this.handleCloseMenu);
    this.removeEventListener("back", this.handleBackNavigation);
  }

  private setRouterEventListener() {
    this.addEventListener("navigate", (event: Event) => {
      const customEvent = event as CustomEvent<{
        path: string;
        shouldUpdateHistory: boolean;
      }>;

      void this.router.goto(customEvent.detail.path);

      if (customEvent.detail.shouldUpdateHistory) {
        window.history.pushState({}, "", customEvent.detail.path);
      }
    });
  }

  private handleToggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };

  private handleCloseMenu = () => {
    this.isMenuOpen = false;
  };

  private handleBackNavigation = () => {
    navigate(this, "/");
  };

  override render() {
    return html`
      <app-menu .isOpen=${this.isMenuOpen} @close=${this.handleCloseMenu}>
      </app-menu>
      <app-top-bar .showBack=${this.isNotHome}></app-top-bar>
      <main .dir=${getDir(settings.get().Locale)}>${this.router.outlet()}</main>
      <app-footer></app-footer>
    `;
  }

  private get isNotHome(): boolean {
    return window.location.pathname !== "/";
  }

  static override styles = [
    cssVariables,
    css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;
        background-color: var(--color-bg);
        color: var(--color-text);
        box-sizing: border-box;
        font-family: system-ui;
        overflow-x: clip;
      }

      @media print {
        app-top-bar,
        app-footer,
        app-menu {
          display: none !important;
        }
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "app-root": AppRoot;
  }
}
