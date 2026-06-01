import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { stitchLayout } from "../../styles/styles";

@customElement("journal-page")
export class JournalPage extends LitElement {
  override render() {
    return html`
      <div class="page-content">
        <article class="journal-entry">
          <time class="entry-date">Jan 6, 2026</time>
          <h2>Getting Started with Lit</h2>
          <p>
            Lit makes building web components feel natural. The reactive
            properties, the declarative templates — it's everything I wished for
            in a frontend framework. In this post, I'll share my journey moving
            from React to Lit and why I'm never looking back.
          </p>
          <a href="#" class="read-more">Read more →</a>
        </article>

        <article class="journal-entry">
          <time class="entry-date">Dec 28, 2025</time>
          <h2>Designing for the Web in 2026</h2>
          <p>
            Minimalism, performance, and accessibility are the pillars of modern
            web design. Here are the principles I follow to create websites that
            are both beautiful and functional.
          </p>
          <a href="#" class="read-more">Read more →</a>
        </article>

        <article class="journal-entry">
          <time class="entry-date">Dec 15, 2025</time>
          <h2>Why TypeScript Wins</h2>
          <p>
            TypeScript isn't just about types — it's about confidence. The
            ability to refactor without fear, the self-documenting code, the
            incredible tooling. Here's why I choose TypeScript for every
            project.
          </p>
          <a href="#" class="read-more">Read more →</a>
        </article>
      </div>
    `;
  }

  static override styles = stitchLayout;
}

declare global {
  interface HTMLElementTagNameMap {
    "journal-page": JournalPage;
  }
}
