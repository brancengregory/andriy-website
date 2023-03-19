import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CartItem } from '../../types/Cart';

@customElement('cart-item')
export class CartItemComponent extends LitElement {
  static styles = css`
    .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .cart-item__image {
      width: 100px;
      height: 100px;
      margin-right: 1rem;
    }
    .cart-item__info {
      flex: 1;
    }
    .cart-item__name {
      font-weight: bold;
    }
    .cart-item__price {
      font-weight: bold;
    }
    .cart-item__quantity {
      margin-left: 1rem;
    }
  `;

  @property({ type: Object })
  cartItem!: CartItem;

  render() {
    return html`
      <div class="cart-item">
        <img
          class="cart-item__image"
          src="${this.cartItem.product.image}"
          alt="${this.cartItem.product.name}"
        />
        <div class="cart-item__info">
          <span class="cart-item__name">${this.cartItem.product.name}</span>
          <span class="cart-item__price">$${this.cartItem.product.price}</span>
        </div>
        <span class="cart-item__quantity">${this.cartItem.quantity}</span>
      </div>
    `;
  }
}
