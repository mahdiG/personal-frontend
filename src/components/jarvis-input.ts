import { LitElement, css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "../utils/localization";
import { getRandomID } from "../utils/utils";

@customElement("jarvis-input")
@localized()
export class JarvisInput extends LitElement {
  /** The current input value. */
  @property({ type: String })
  value = "";

  /**
   * Text that serves both as the floating label and as a fallback placeholder.
   * Pass a localized string if you are using the @localized() decorator.
   */
  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  label = "";

  /** Whether the input is disabled. */
  @property({ type: Boolean, attribute: false })
  isDisabled = false;

  /* Unique ID to associate the label with the input for accessibility. */
  private _inputId = `jarvis-input-${getRandomID()}`;

  /** Updates the value and dispatches a composed input event. */
  private onInput = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    // Dispatch a composed input event that will bubble up through the shadow DOM.
    // The parent can listen for "input" on <jarvis-input> and read event.target.value.
    this.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        composed: true,
      }),
    );
  };

  private onKeyup = (event: KeyboardEvent): void => {
    this.dispatchEvent(
      new KeyboardEvent("onKeyup", {
        bubbles: true,
        composed: true,
        key: event.key,
        code: event.code,
        repeat: event.repeat,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey,
      }),
    );
  };

  protected override render() {
    return html`
      <div class="input-container">
        <input
          class="input-field"
          type="text"
          id=${this._inputId}
          .value=${this.value}
          ?disabled=${this.isDisabled}
          .placeholder=${this.placeholder}
          @input=${this.onInput}
          @keyup=${this.onKeyup}
        />

        ${this.label
          ? html`
              <label for=${this._inputId} class="floating-label"
                >${this.label}</label
              >
            `
          : nothing}
      </div>
    `;
  }

  static override styles = [
    css`
      :host {
        display: inline-block;
        width: 100%;
        font-family: inherit;
      }

      .input-container {
        position: relative;
      }

      .input-field {
        width: 100%;
        border: none;
        border-bottom: 1px solid var(--color-text-disabled);
        background: transparent;
        padding: 0;
        font-size: 1rem;
        line-height: 1.5;
        color: var(--color-text-color, inherit);
        outline: none;
        transition: border-color 0.2s ease;
        font-family: inherit;
      }

      .input-field:focus {
        border-bottom-color: var(--color-text);
        border-bottom-width: 1px;
      }

      .input-field:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        border-bottom-style: dashed;
      }

      .floating-label {
        position: absolute;
        left: 0;
        bottom: 0.25rem; /* sits on top of the underline */
        font-size: 1rem;
        color: var(--color-text-soft);
        pointer-events: none;
        transition: all 0.2s ease;
        transform-origin: left bottom;
        white-space: nowrap;
      }

      /* Float the label when the input is focused or contains a value */
      .input-field:focus ~ .floating-label,
      .input-field:not(:placeholder-shown) ~ .floating-label {
        transform: translateY(-100%) scale(0.75);
        color: var(--color-text);
      }

      /* Dim the label when disabled */
      .input-field:disabled ~ .floating-label {
        opacity: 0.5;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "jarvis-input": JarvisInput;
  }
}
