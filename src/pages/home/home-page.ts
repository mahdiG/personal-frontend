import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { stitchLayout } from "../../styles/styles";

@customElement("home-page")
export class HomePage extends LitElement {
  override render() {
    return html`
      <div class="page-content">
        <section>
          <h1>Hello, I'm Artifex</h1>
          <p>
            I build things that live on the internet. I'm a full-stack developer
            passionate about crafting clean, functional, and beautiful digital
            experiences.
          </p>
        </section>

        <section>
          <h2>Featured Work</h2>
          <div class="project-card">
            <h3>Personal Website</h3>
            <p>This very site — built with Lit, TypeScript, and love.</p>
          </div>
          <div class="project-card">
            <h3>Open Source Contributions</h3>
            <p>Various tools and libraries for the web community.</p>
          </div>
        </section>
      </div>
    `;
  }

  static override styles = stitchLayout;
}

declare global {
  interface HTMLElementTagNameMap {
    "home-page": HomePage;
  }
}
