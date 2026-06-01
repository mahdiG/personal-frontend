import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "../utils/localization";

@customElement("icon-button")
@localized()
export class IconButton extends LitElement {
  @property({ type: Boolean, attribute: false })
  isDisabled = false;

  @property({ type: Boolean, attribute: false })
  isLoading = false;

  protected override render() {
    return html`
      <button class="icon" .disable=${this.isDisabled}><slot></slot></button>
    `;
  }

  static override styles = [
    css`
      .icon {
        cursor: pointer;
        height: 100%;
        background-color: inherit;
        border: none;
        font-family: "MaterialIcons";
        font-size: inherit;
        color: inherit;
        padding: unset;
        vertical-align: inherit;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "icon-button": IconButton;
  }
}
