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
              <h1 class="resume-name">Mahdi Gerami</h1>
              <h2 class="resume-title">
                Senior Software Engineer | Technical Lead
              </h2>
              <div class="resume-contact">
                <span class="contact-item">
                  <span class="contact-icon">mail</span>
                  mahdi.gerami77@gmail.com
                </span>
                <span class="contact-item">
                  <span class="contact-icon">location_on</span>
                  Qom, Iran
                </span>
              </div>
              <div class="resume-contact" style="margin-top: var(--space-xs);">
                <a
                  class="contact-item link-item"
                  href="https://linkedin.com/in/mahdi-gerami"
                  target="_blank"
                  rel="noopener"
                >
                  <span class="contact-icon">link</span>
                  linkedin.com/in/mahdi-gerami
                </a>
                <a
                  class="contact-item link-item"
                  href="https://github.com/mahdiG"
                  target="_blank"
                  rel="noopener"
                >
                  <span class="contact-icon">code</span>
                  github.com/mahdiG
                </a>
              </div>
            </header>

            <!-- Summary -->
            <section class="resume-section avoid-break">
              <p class="resume-summary">
                Senior Software Engineer and Technical Lead with 9+ years of
                experience architecting scalable backend systems, cloud
                platforms, and modern AI pipelines. As the technical co-founder
                of a cloud platform (IaaS/PaaS/GPUaaS), I directed the
                engineering of complex infrastructure serving over 2,000
                developers and companies. I specialize in Go, high-concurrency
                architectures, and bridging the gap between core systems and the
                application layer. Currently focused on integrating practical,
                agentic AI capabilities—such as Model Context Protocol (MCP)
                servers, coding agents, and low-latency local inference—into
                production environments.
              </p>
            </section>

            <!-- Experience -->
            <section class="resume-section">
              <h3 class="section-title">Experience</h3>
              <div class="experience-list">
                <!-- Job 1 -->
                <div class="experience-entry">
                  <div class="experience-header">
                    <h4 class="experience-role">
                      Co-founder & Chief Technology Officer
                    </h4>
                    <span class="experience-date">Apr 2022 — Apr 2026</span>
                  </div>
                  <div class="experience-company">
                    Lexoya Cloud Services (lexoya.com)
                  </div>
                  <ul class="experience-bullets">
                    <li>
                      Engineered a comprehensive cloud platform offering IaaS,
                      PaaS, GPUaaS, DBaaS, Object (S3), and Block Storage,
                      scaling the platform to support over 2,000 registered
                      developers and companies.
                    </li>
                    <li>
                      Architected the core backend infrastructure using Go and
                      GoFiber, building high-performance RESTful APIs to
                      orchestrate complex services and interface with Kubernetes
                      and internal microservices.
                    </li>
                    <li>
                      Built a responsive, highly dynamic SPA cloud management
                      dashboard from scratch utilizing native Web Components and
                      Lit.
                    </li>
                    <li>
                      Directed engineering strategy, mentored a cross-functional
                      team, and established rigorous code-review standards
                      focused on modularity and functional design.
                    </li>
                    <li>
                      Designed and maintained high-availability bare-metal
                      Kubernetes clusters, automating infrastructure
                      provisioning to support massive platform scale.
                    </li>
                  </ul>
                </div>

                <!-- Job 2 -->
                <div class="experience-entry">
                  <div class="experience-header">
                    <h4 class="experience-role">Senior Full-Stack Developer</h4>
                    <span class="experience-date">Mar 2021 — Mar 2022</span>
                  </div>
                  <div class="experience-company">Abrooo</div>
                  <ul class="experience-bullets">
                    <li>
                      Engineered scalable, concurrent backend services and APIs
                      using Golang.
                    </li>
                    <li>
                      Developed a dynamic SPA dashboard utilizing native Web
                      Components for optimized frontend rendering and
                      performance.
                    </li>
                    <li>
                      Led, mentored, and successfully onboarded junior and
                      mid-level frontend engineering personnel.
                    </li>
                  </ul>
                </div>

                <!-- Job 3 -->
                <div class="experience-entry">
                  <div class="experience-header">
                    <h4 class="experience-role">Frontend Developer</h4>
                    <span class="experience-date">Feb 2019 — May 2020</span>
                  </div>
                  <div class="experience-company">Basalam (basalam.com)</div>
                  <ul class="experience-bullets">
                    <li>
                      Spearheaded the end-to-end development of the vendor
                      management dashboard utilizing Vue.js, successfully
                      scaling it to serve thousands of active vendors.
                    </li>
                  </ul>
                </div>

                <!-- Job 4 -->
                <div class="experience-entry">
                  <div class="experience-header">
                    <h4 class="experience-role">Senior Frontend Developer</h4>
                    <span class="experience-date">Jan 2018 — Jan 2019</span>
                  </div>
                  <div class="experience-company">Karans</div>
                  <ul class="experience-bullets">
                    <li>
                      Designed and developed a comprehensive administrative
                      management dashboard using React, streamlining internal
                      operations.
                    </li>
                  </ul>
                </div>

                <!-- Job 5 -->
                <div class="experience-entry">
                  <div class="experience-header">
                    <h4 class="experience-role">Frontend Developer</h4>
                    <span class="experience-date">Feb 2017 — Dec 2017</span>
                  </div>
                  <div class="experience-company">Narvan</div>
                  <ul class="experience-bullets">
                    <li>
                      Built a highly responsive SPA website utilizing React and
                      Redux for state management, and contributed to mobile
                      application development using React Native.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Current Projects -->
            <section class="resume-section avoid-break">
              <h3 class="section-title">Current Projects</h3>
              <div class="experience-entry">
                <div class="experience-header">
                  <h4 class="experience-role">AI Life OS (Jarvis)</h4>
                </div>
                <p class="skills-text">
                  Developing a cross-platform personal AI assistant bridging
                  Linux environments and custom Android launchers using
                  Flutter/Dart. The core backend utilizes Go, PostgreSQL, and
                  custom MCP servers to orchestrate complex coding agents.
                  Engineered a local, offline conversational AI pipeline
                  utilizing Python for CPU-bound audio-to-audio inference.
                </p>
              </div>
            </section>

            <!-- Technical Skills, Education & Languages Grid -->
            <div class="resume-grid avoid-break">
              <!-- Skills -->
              <section class="resume-section">
                <h3 class="section-title">Technical Skills</h3>
                <p class="skills-text">
                  <strong>AI & Agentic Systems:</strong> Coding Agents, Model
                  Context Protocol (MCP), Local LLM Inference, CPU-bound Audio
                  Processing
                  <br />
                  <br />
                  <strong>Backend Engineering:</strong> Golang, PostgreSQL,
                  Python, Node.js, RESTful API Architecture
                  <br />
                  <br />
                  <strong>Systems & Infrastructure:</strong> System
                  Architecture, Kubernetes, Docker, Linux, Ansible
                  <br />
                  <br />
                  <strong>Frontend & Mobile:</strong> TypeScript, Lit, Vue.js,
                  React, Web Components, Flutter, Dart
                </p>
              </section>

              <!-- Education & Languages -->
              <section class="resume-section">
                <h3 class="section-title">Education & Languages</h3>
                <div class="education-entry">
                  <h4 class="education-degree">English Literature</h4>
                  <div class="education-school">University of Qom</div>
                  <div class="education-date">2017</div>
                  <p
                    class="skills-text"
                    style="font-size: var(--text-sm); margin-top: 4px; color: var(--color-text-secondary);"
                  >
                    Completed one semester before transitioning to pursue
                    full-time software engineering.
                  </p>
                </div>
                <div
                  class="education-entry"
                  style="margin-top: var(--space-xs);"
                >
                  <h4 class="education-degree">
                    High School Diploma (Mathematics & Physics)
                  </h4>
                  <div class="education-school">Khajeh Nasir High School</div>
                  <div class="education-date">2014 — 2017</div>
                </div>
                <div
                  class="education-entry"
                  style="margin-top: var(--space-md);"
                >
                  <h4
                    class="education-degree"
                    style="font-size: var(--text-sm); color: var(--color-primary);"
                  >
                    Languages
                  </h4>
                  <p class="skills-text" style="margin-top: 2px;">
                    <strong>Persian:</strong> Native <br />
                    <strong>English:</strong> Professional Working Proficiency
                  </p>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        width: 100%;
        max-width: 36rem;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .resume-actions {
        display: flex;
        justify-content: flex-end;
        align-self: center;
        width: 100%;
        max-width: 210mm;
        padding: var(--space-xs) 0;
        margin-bottom: var(--space-sm);
        box-sizing: border-box;
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
        margin: 0;
        min-height: 297mm;
        background: var(--color-knockout, #ffffff);
        padding: var(--space-md);
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

      .link-item {
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: color var(--transition-fast);
      }

      .link-item:hover {
        color: var(--color-primary);
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

      /* Responsive queries */
      @media (min-width: 640px) {
        .experience-header {
          flex-direction: row;
          justify-content: space-between;
          align-items: baseline;
        }
        .resume-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (min-width: 768px) {
        .page-content {
          max-width: 56rem;
        }
        .resume-container {
          max-width: 56rem;
        }
        .resume-paper {
          padding: var(--space-lg);
        }
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
