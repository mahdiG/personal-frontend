// it works for now. Maybe later switch to floating-ui if we run into problems

import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("jarvis-popover")
export class JarvisPopover extends LitElement {
  /** The element the popover is anchored to */
  @property({ type: Object }) anchor?: HTMLElement;

  /** Gap between anchor and popover in px */
  @property({ type: Number }) gap = 8;
  /** Minimum distance from popover edge to arrow in px */
  @property({ type: Number, attribute: "arrow-padding" }) arrowPadding = 8;

  @query("#popover") private popoverEl!: HTMLElement;
  @query("#arrow") private arrowEl!: HTMLElement;

  // ----- Automatic repositioning on scroll / resize -----
  private _onPositionChange = (): void => {
    this._position();
  };
  private _observer?: ResizeObserver;

  // Arrow dimensions (matching CSS borders)
  private static readonly ARROW_HALF_SIZE = 6;

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener("scroll", this._onPositionChange, true);
    window.addEventListener("resize", this._onPositionChange);
    this._observer = new ResizeObserver(() => {
      this._position();
    });
  }

  override disconnectedCallback() {
    window.removeEventListener("scroll", this._onPositionChange, true);
    window.removeEventListener("resize", this._onPositionChange);
    this._observer?.disconnect();
    super.disconnectedCallback();
  }

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    this._position();
    if (this._observer) this._observer.observe(this.popoverEl);
  }

  // ---------- Core positioning (refactored) ----------
  private _position() {
    if (!this.anchor) return;

    const anchorRect = this.anchor.getBoundingClientRect();
    const popoverRect = this.popoverEl.getBoundingClientRect();
    if (popoverRect.width === 0 || popoverRect.height === 0) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 1. Decide vertical side and compute ideal coordinates
    const { top, left, arrowClass } = this.calculateInitialPlacement(
      anchorRect,
      popoverRect,
    );

    // 2. Make sure the popover fits within the screen
    const constrained = this.constrainWithinViewport(
      top,
      left,
      popoverRect.width,
      popoverRect.height,
      viewportWidth,
      viewportHeight,
    );

    // 3. Apply final popover position
    this.popoverEl.style.top = `${constrained.top}px`;
    this.popoverEl.style.left = `${constrained.left}px`;

    // 4. Position the arrow correctly
    const arrowLeft = this.calculateArrowHorizontalPosition(
      anchorRect,
      constrained.left,
      popoverRect.width,
      this.arrowPadding,
    );
    this.applyArrowStyles(arrowClass, arrowLeft);
  }

  /**
   * Tries to place the popover above the anchor.
   * Falls back to below if there is not enough room.
   * Returns ideal top/left and the corresponding arrow class.
   */
  private calculateInitialPlacement(
    anchorRect: DOMRect,
    popoverRect: DOMRect,
  ): { top: number; left: number; arrowClass: string } {
    const { gap } = this;

    // Attempt above
    let top = anchorRect.top - popoverRect.height - gap;
    let arrowClass = "bottom"; // arrow at bottom of popover (points down)

    // If it overflows the top edge, flip to below
    if (top < 0) {
      top = anchorRect.bottom + gap;
      arrowClass = "top"; // arrow at top of popover (points up)
    }

    // Center horizontally
    const left = anchorRect.left + anchorRect.width / 2 - popoverRect.width / 2;

    return { top, left, arrowClass };
  }

  /**
   * Clamps the popover position so it never leaves the viewport.
   */
  private constrainWithinViewport(
    top: number,
    left: number,
    popoverWidth: number,
    popoverHeight: number,
    viewportWidth: number,
    viewportHeight: number,
  ): { top: number; left: number } {
    // Prevent bottom overflow
    if (top + popoverHeight > viewportHeight) {
      top = viewportHeight - popoverHeight;
    }
    // Prevent top overflow (will not happen after flip, but is safe)
    top = Math.max(0, top);

    // Keep within horizontal bounds
    left = Math.max(0, Math.min(left, viewportWidth - popoverWidth));

    return { top, left };
  }

  /**
   * Computes the horizontal offset of the arrow so it points to the anchor center,
   * clamped within the popover edge padding.
   */
  private calculateArrowHorizontalPosition(
    anchorRect: DOMRect,
    popoverLeft: number,
    popoverWidth: number,
    arrowPadding: number,
  ): number {
    // Center of the anchor minus half the arrow's own width for true centering
    const anchorCenterX =
      anchorRect.left + anchorRect.width / 2 - JarvisPopover.ARROW_HALF_SIZE;

    // Arrow offset relative to the popover’s left edge
    let arrowLeft = anchorCenterX - popoverLeft;

    // Clamp so the arrow never protrudes beyond the popover border radius / padding
    const minLeft = arrowPadding;
    const maxLeft = popoverWidth - arrowPadding;
    arrowLeft = Math.max(minLeft, Math.min(maxLeft, arrowLeft));

    return arrowLeft;
  }

  /**
   * Applies the correct CSS class and left offset to the arrow element.
   */
  private applyArrowStyles(arrowClass: string, arrowLeft: number): void {
    this.arrowEl.style.transform = "none";
    this.arrowEl.className = `arrow ${arrowClass}`;
    this.arrowEl.style.left = `${arrowLeft}px`;
    this.arrowEl.style.top = ""; // reset any vertical style that may have been set
  }

  private onOverlayClick = (event: Event): void => {
    if (event.target === event.currentTarget) {
      this.dispatchEvent(new CustomEvent("close", {}));
    }
  };

  override render() {
    return html`
      <div class="overlay" @click=${this.onOverlayClick}>
        <div id="popover" class="popover">
          <div id="arrow" class="arrow"></div>
          <slot></slot>
        </div>
      </div>
    `;
  }

  static override styles = css`
    :host {
      position: fixed;
      z-index: 1000;
      --color-background: var(--color-bg);
      /* color: var(--color-text); */
    }

    .overlay {
      width: 100vw;
      height: 100vh;
      position: relative;
      display: flex;
    }

    .popover {
      background-color: var(--color-background);
      border-radius: 6px;
      border: 1px solid var(--color-border);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      padding: 8px 12px;
      position: relative;
      height: fit-content;
    }

    .arrow {
      position: absolute;
      width: 0;
      height: 0;
    }
    .arrow.top {
      bottom: 100%;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid var(--color-background);
    }
    .arrow.bottom {
      top: 100%;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid var(--color-background);
    }
    .arrow.left {
      right: 100%;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid var(--color-background);
    }
    .arrow.right {
      left: 100%;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid var(--color-background);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "jarvis-popover": JarvisPopover;
  }
}
