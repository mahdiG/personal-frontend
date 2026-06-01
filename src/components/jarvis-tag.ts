import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "../utils/localization";
import { Tag } from "../types/tag";

import "./icon-button";

@customElement("jarvis-tag")
@localized()
export class JarvisTag extends LitElement {
  @property({ type: Object, attribute: false })
  tag!: Tag;

  @property({ type: Boolean, attribute: false })
  isSelected = true;

  @property({ type: Boolean, attribute: false })
  canDelete = false;

  private _handleDeleteClick = (event: Event): void => {
    event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent("delete", { bubbles: true, composed: true }),
    );
  };

  protected override render() {
    return html`
      <div class="chip ${this.isSelected ? "selected" : ""}">
        <span class="name">${this.tag.Name}</span>
        ${this.canDelete
          ? html`
              <icon-button
                class="delete-button"
                @click=${this._handleDeleteClick}
                >delete</icon-button
              >
            `
          : ""}
      </div>
    `;
  }

  static override styles = [
    css`
      :host {
        --background-color: var(--color-chip-bg);
        --color: var(--color-text-soft);
        --border-color: var(--background-color);
      }
      .chip {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        padding: 0.5rem 0.9rem;
        border-width: 1px;
        border-color: var(--border-color);
        border: 1px solid var(--border-color);
        border-radius: 40rem;
        background-color: var(--background-color);
        color: var(--color);
        font-weight: normal;
        gap: var(--space-xs);
      }

      .selected {
        --border-color: var(--color-text-soft);
        font-weight: bold;
        transition: all var(--transition-normal);
      }

      .name {
        cursor: pointer;
      }

      .delete-button {
        opacity: 0;
        width: 0;
        overflow: hidden;
        transition:
          opacity var(--transition-fast),
          width var(--transition-fast);
        color: var(--color-text-disabled);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .chip:hover .delete-button {
        opacity: 1;
        width: 1.2em;
      }

      .delete-button:hover {
        color: var(--color-error);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "jarvis-tag": JarvisTag;
  }
}
