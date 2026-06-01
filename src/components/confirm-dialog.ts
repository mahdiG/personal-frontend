import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "../utils/localization";

@customElement("confirm-dialog")
@localized()
export class ConfirmDialog extends LitElement {
  @property({ type: String })
  message = "";

  @property({ type: String, attribute: "confirm-label" })
  confirmLabel = msg("Delete");

  @property({ type: String, attribute: "cancel-label" })
  cancelLabel = msg("Cancel");

  private handleConfirm = () => {
    this.dispatchEvent(
      new CustomEvent("confirm", { bubbles: true, composed: true }),
    );
  };

  private handleCancel = () => {
    this.dispatchEvent(
      new CustomEvent("cancel", { bubbles: true, composed: true }),
    );
  };

  private stopPropagation = (e: Event): void => {
    e.stopPropagation();
  };

  protected override render() {
    return html`
      <div class="backdrop" @click=${this.handleCancel}>
        <div class="dialog" @click=${this.stopPropagation}>
          <p class="message">${this.message}</p>
          <div class="actions">
            <button class="cancel" @click=${this.handleCancel}>
              ${this.cancelLabel}
            </button>
            <button class="confirm" @click=${this.handleConfirm}>
              ${this.confirmLabel}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  static override styles = css`
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
    }

    .backdrop {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }

    .dialog {
      background: var(--color-surface, #fff);
      border-radius: var(--radius-lg, 12px);
      padding: var(--space-lg, 24px);
      max-width: 360px;
      width: 90%;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
    }

    .message {
      margin: 0 0 var(--space-lg, 24px);
      font-size: var(--text-body, 1rem);
      color: var(--color-text, #1a1a1a);
      line-height: 1.5;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: var(--space-sm, 8px);
    }

    button {
      padding: var(--space-sm, 8px) var(--space-md, 16px);
      border-radius: var(--radius-sm, 6px);
      border: none;
      font-size: var(--text-body, 1rem);
      cursor: pointer;
      min-height: 44px;
      transition: var(--transition-fast, 150ms);
    }

    .cancel {
      background: var(--color-surface-alt);
      color: var(--color-text-soft);
    }

    .cancel:hover {
      background: var(--color-chip-bg-hover);
    }

    .confirm {
      background: var(--color-danger, #d32f2f);
      color: #fff;
    }

    .confirm:hover {
      opacity: 0.9;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "confirm-dialog": ConfirmDialog;
  }
}
