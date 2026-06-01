import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { stitchLayout } from "../../styles/styles";

@customElement("home-page")
export class HomePage extends LitElement {
  override render() {
    return html`
      <div class="page-content">
        <section class="hero">
          <h1 class="hero-name">Mahdi Gerami</h1>
          <p class="hero-tagline">Senior Software Engineer & Cloud Architect</p>

          <p class="hero-summary">
            I build backend systems, cloud infrastructure, and AI-powered tools.
            I spent the last few years co-founding a cloud startup, and now I'm
            channeling that experience into an AI Life OS called Jarvis.
          </p>

          <div class="hero-actions">
            <a class="cta-button" href="/resume">View Resume</a>
            <a
              class="cta-button"
              href="https://github.com/mahdiG"
              target="_blank"
              rel="noopener"
              >GitHub</a
            >
          </div>

          <p class="hero-contact">
            Open to remote senior engineering roles. Let's talk:
            <a class="email-link" href="mailto:mahdi.gerami77@gmail.com"
              >mahdi.gerami77@gmail.com</a
            >
          </p>
        </section>
      </div>
    `;
  }

  static override styles = [
    stitchLayout,
    css`
      .hero {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        padding-top: var(--space-xl);
      }

      .hero-name {
        font-size: var(--text-display);
        line-height: var(--leading-heading);
        font-weight: var(--font-weight-bold);
        color: var(--color-text);
        margin: 0;
        letter-spacing: -0.02em;
      }

      .hero-tagline {
        font-size: var(--text-heading);
        line-height: var(--leading-heading);
        color: var(--color-text-soft);
        margin: 0;
      }

      .hero-summary {
        font-size: var(--text-body);
        line-height: var(--leading-body);
        color: var(--color-text);
        margin: 0;
        max-width: 65ch;
      }

      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-md);
      }

      .cta-button {
        display: inline-flex;
        align-items: center;
        padding: var(--space-sm) var(--space-md);
        min-height: 44px;
        font-size: var(--text-body);
        line-height: 1;
        color: var(--color-primary);
        text-decoration: none;
        border-radius: var(--radius-sm);
        transition: background var(--transition-fast);
      }

      .cta-button:hover {
        text-decoration: underline;
        background: var(--color-accent-soft, rgba(63, 94, 129, 0.1));
      }

      .cta-button:focus-visible {
        text-decoration: underline;
        background: var(--color-accent-soft, rgba(63, 94, 129, 0.1));
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }

      .hero-contact {
        font-size: var(--text-caption);
        line-height: var(--leading-caption);
        color: var(--color-text-soft);
        margin: 0;
      }

      .email-link {
        color: var(--color-primary);
        text-decoration: none;
        transition: text-decoration var(--transition-fast);
      }

      .email-link:hover {
        text-decoration: underline;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "home-page": HomePage;
  }
}
