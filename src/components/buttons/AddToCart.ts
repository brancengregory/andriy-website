import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('add-to-cart-button')
export class AddToCartButton extends LitElement {
  static styles = css`
    button {
      background-color: #4caf50;
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #45a049;
    }
  `;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  label = 'Add to Cart';

  render() {
    return html`
      <button @click="${this._onClick}" ?disabled="${this.disabled}">
        ${this.label}
      </button>
    `;
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent('add-to-cart', { bubbles: true, composed: true }));
  }
}
