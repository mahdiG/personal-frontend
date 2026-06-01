import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { localized } from "../../utils/localization";
import { SignalWatcher } from "@lit-labs/signals";
import { stitchLayout } from "../../styles/styles";

@customElement("resume-page")
@localized()
export class ResumePage extends SignalWatcher(LitElement) {
  protected override render() {
    return html`
      <div class="page-content">
        <div class="resume-container">
          <!-- Print / Save actions -->
          <div class="resume-actions">
            <button
              class="print-button"
              @click=${this.printResume}
              aria-label="Print / Save as PDF"
            >
              <span class="print-icon">print</span>
              <span class="print-label">Print / Save PDF</span>
            </button>
          </div>
          <article class="resume-paper">
            <!-- Header -->
            <header class="resume-header">
              <h1 class="resume-name">Elias Thorne</h1>
              <h2 class="resume-title">Lead Interface Designer</h2>
              <div class="resume-contact">
                <span class="contact-item">
                  <span class="contact-icon">mail</span>
                  elias.thorne@quietpaper.io
                </span>
                <span class="contact-item">
                  <span class="contact-icon">language</span>
                  eliasthorne.design
                </span>
                <span class="contact-item">
                  <span class="contact-icon">location_on</span>
                  Portland, OR
                </span>
              </div>
            </header>

            <!-- Summary -->
            <section class="resume-section avoid-break">
              <p class="resume-summary">
                Digital product designer with a decade of experience crafting
                tools for clarity. Focused on stripping away extraneous chrome
                to build systems that respect user cognition. Specializes in
                typography-driven design systems, minimalist architecture, and
                the seamless integration of AI affordances.
              </p>
            </section>

            <!-- Experience -->
            <section class="resume-section">
              <h3 class="section-title">Experience</h3>
              <div class="experience-list">
                <!-- Job 1 -->
                <div class="experience-entry avoid-break">
                  <div class="experience-header">
                    <h4 class="experience-role">Principal Product Designer</h4>
                    <span class="experience-date">2021 — Present</span>
                  </div>
                  <div class="experience-company">Acme AI Labs</div>
                  <ul class="experience-bullets">
                    <li>
                      Architected the core design system for an AI-native
                      operating environment, reducing visual noise by 40% across
                      key workflows.
                    </li>
                    <li>
                      Led a team of three designers to conceptualize and ship a
                      dynamic canvas interface that replaced standard paginated
                      data tables.
                    </li>
                    <li>
                      Authored the internal "Ethos & Restraint" design
                      manifesto, standardizing interactions and micro-animations
                      globally.
                    </li>
                  </ul>
                </div>

                <!-- Job 2 -->
                <div class="experience-entry avoid-break">
                  <div class="experience-header">
                    <h4 class="experience-role">Senior UI Designer</h4>
                    <span class="experience-date">2017 — 2021</span>
                  </div>
                  <div class="experience-company">Current Systems</div>
                  <ul class="experience-bullets">
                    <li>
                      Redesigned the flagship enterprise dashboard, migrating
                      from a high-density, high-border aesthetic to a flat,
                      whitespace-driven layout.
                    </li>
                    <li>
                      Developed comprehensive React component libraries
                      emphasizing typographic hierarchy over color coding for
                      state management.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Skills & Education Grid -->
            <div class="resume-grid avoid-break">
              <!-- Skills -->
              <section class="resume-section">
                <h3 class="section-title">Capabilities</h3>
                <p class="skills-text">
                  Design Systems, Interface Architecture, Typographic Layout,
                  Interaction Design, CSS/Tailwind, Prototyping, Accessibility
                  Standards, Minimalist Ideation.
                </p>
              </section>

              <!-- Education -->
              <section class="resume-section">
                <h3 class="section-title">Education</h3>
                <div class="education-entry">
                  <h4 class="education-degree">BFA Graphic Design</h4>
                  <div class="education-school">
                    Rhode Island School of Design
                  </div>
                  <div class="education-date">2010 — 2014</div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    `;
  }

  private printResume = () => {
    window.print();
  };

  static override styles = [
    stitchLayout,
    css`
      .resume-container {
        flex: 1;
        overflow-y: auto;
        padding: var(--space-sm);
        width: 100%;
        max-width: 36rem;
        margin: 0 auto;
      }

      .resume-actions {
        display: flex;
        justify-content: flex-end;
        padding: var(--space-xs) 0;
        margin-bottom: var(--space-sm);
      }

      .print-button {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        padding: var(--space-xs) var(--space-sm);
        background: var(--color-surface);
        border: 1px solid var(--color-divider);
        cursor: pointer;
        font-family: var(--font-sans);
        font-size: var(--text-body);
        color: var(--color-text-secondary);
        border-radius: var(--radius-sm);
        transition:
          color var(--transition-fast),
          background var(--transition-fast),
          border-color var(--transition-fast);
        line-height: 1;
      }

      .print-button:hover {
        color: var(--color-primary);
        background: var(--color-surface-alt);
        border-color: var(--color-primary);
      }

      .print-button:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }

      .print-icon {
        font-family: "MaterialIcons";
        font-size: 1.25rem;
        display: inline-block;
        line-height: 1;
      }

      .print-label {
        font-size: var(--text-small);
        font-weight: var(--font-weight-medium);
      }

      .resume-paper {
        max-width: 210mm;
        width: 100%;
        margin: 0 auto;
        min-height: 297mm;
        background: var(--color-knockout, #ffffff);
        padding: var(--space-lg);
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        border: 1px solid var(--color-divider);
      }

      /* Header */
      .resume-header {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
        padding-bottom: var(--space-md);
        border-bottom: 1px solid var(--color-divider);
      }

      .resume-name {
        font-family: var(--font-sans);
        font-size: var(--text-2xl);
        font-weight: var(--font-weight-bold);
        color: var(--color-text-primary);
        margin: 0;
        letter-spacing: -0.02em;
      }

      .resume-title {
        font-family: var(--font-sans);
        font-size: var(--text-lg);
        font-weight: var(--font-weight-medium);
        color: var(--color-text-secondary);
        margin: 0;
      }

      .resume-contact {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-md);
        margin-top: var(--space-sm);
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
      }

      .contact-icon {
        font-family: "MaterialIcons";
        font-size: 1rem;
        display: inline-block;
      }

      /* Sections */
      .resume-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }

      .section-title {
        font-family: var(--font-sans);
        font-size: var(--text-md);
        font-weight: var(--font-weight-bold);
        color: var(--color-primary);
        margin: 0;
        padding-bottom: var(--space-xs);
        border-bottom: 1px solid var(--color-divider);
      }

      .resume-summary {
        font-size: var(--text-body);
        line-height: var(--leading-body);
        color: var(--color-text);
        margin: 0;
        max-width: 65ch;
      }

      /* Experience */
      .experience-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
      }

      .experience-entry {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
      }

      .experience-header {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 640px) {
        .experience-header {
          flex-direction: row;
          justify-content: space-between;
          align-items: baseline;
        }
      }

      .experience-role {
        font-size: var(--text-md);
        font-weight: var(--font-weight-medium);
        color: var(--color-text-primary);
        margin: 0;
      }

      .experience-date {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
      }

      .experience-company {
        font-size: var(--text-sm);
        color: var(--color-primary);
        font-weight: var(--font-weight-medium);
      }

      .experience-bullets {
        list-style: none;
        margin: var(--space-xs) 0 0 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }

      .experience-bullets li {
        position: relative;
        padding-left: var(--space-md);
        font-size: var(--text-body);
        line-height: var(--leading-body);
        color: var(--color-text-secondary);
      }

      .experience-bullets li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.6em;
        width: 4px;
        height: 4px;
        background: var(--color-text-secondary);
        border-radius: 50%;
      }

      /* Grid (Skills + Education) */
      .resume-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-lg);
      }

      @media (min-width: 640px) {
        .resume-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      /* Skills */
      .skills-text {
        font-size: var(--text-body);
        line-height: var(--leading-body);
        color: var(--color-text-secondary);
        margin: 0;
      }

      /* Education */
      .education-entry {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .education-degree {
        font-size: var(--text-body);
        font-weight: var(--font-weight-medium);
        color: var(--color-text-primary);
        margin: 0;
      }

      .education-school {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
      }

      .education-date {
        font-size: var(--text-caption);
        color: var(--color-text-disabled);
      }

      .avoid-break {
        page-break-inside: avoid;
        break-inside: avoid;
      }

      /* Print styles */
      @media print {
        .resume-container {
          padding: 0;
        }

        .resume-paper {
          box-shadow: none !important;
          border: none !important;
          padding: 0;
          margin: 0;
          max-width: 100%;
          width: 100%;
        }

        .top-bar {
          display: none;
        }

        .resume-actions {
          display: none;
        }

        .experience-bullets li {
          break-inside: avoid;
        }

        .resume-section.avoid-break {
          break-inside: avoid;
        }
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "resume-page": ResumePage;
  }
}
