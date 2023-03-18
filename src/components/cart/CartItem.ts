import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CartItem as CartItemType } from '../../types/CartProduct';

@customElement('cart-item')
export class CartItem extends LitElement {
  @property({ attribute: false })
  product!: CartProduct;

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #ddd;
    }
    img {
      margin-right: 1rem;
      width: 75px;
      height: 75px;
      object-fit: contain;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      flex: 1;
    }
    .title {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .price {
      color: green;
      font-weight: bold;
    }
    .quantity {
      font-size: 0.8rem;
      color: #666;
    }
    .remove-button {
      color: red;
      border: none;
      background-color: transparent;
      margin-left: 1rem;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <img src="${this.product.image}" alt="${this.product.name}" />
      <div class="info">
        <div class="title">${this.product.name}</div>
        <div class="price">$${this.product.price.toFixed(2)}</div>
        <div class="quantity">Quantity: ${this.product.quantity}</div>
      </div>
      <button class="remove-button" @click=${this.handleRemove}>
        Remove
      </button>
    `;
  }

  handleRemove() {
    this.dispatchEvent(new CustomEvent('remove', { detail: this.product }));
  }
}
