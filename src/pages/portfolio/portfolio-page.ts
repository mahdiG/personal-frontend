import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { stitchLayout } from "../../styles/styles";

@customElement("portfolio-page")
export class PortfolioPage extends LitElement {
  override render() {
    return html`
      <div class="page-content">
        <section class="project">
          <h2>Project One</h2>
          <p>
            A full-stack web application built with Lit, TypeScript, and Go.
            Features real-time collaboration and a clean, minimal UI.
          </p>
          <div class="tags">
            <span class="tag">Lit</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Go</span>
          </div>
        </section>

        <section class="project">
          <h2>Project Two</h2>
          <p>
            An open-source design system with reusable web components,
            documentation, and Figma integration.
          </p>
          <div class="tags">
            <span class="tag">Design System</span>
            <span class="tag">Web Components</span>
            <span class="tag">Figma</span>
          </div>
        </section>

        <section class="project">
          <h2>Project Three</h2>
          <p>
            A mobile-first habit tracking app with streaks, reminders, and
            beautiful data visualizations.
          </p>
          <div class="tags">
            <span class="tag">PWA</span>
            <span class="tag">Lit</span>
            <span class="tag">Charts</span>
          </div>
        </section>
      </div>
    `;
  }

  static override styles = stitchLayout;
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-page": PortfolioPage;
  }
}
