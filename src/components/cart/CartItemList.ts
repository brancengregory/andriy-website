import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CartItem } from '../../types/Cart';
import './CartItem';

@customElement('cart-item-list')
export class CartItemListComponent extends LitElement {
  static styles = css`
    .cart-item-list {
      display: flex;
      flex-direction: column;
    }
  `;

  @property({ type: Array })
  cartItems: CartItem[] = [];

  render() {
    return html`
      <div class="cart-item-list">
        ${this.cartItems.map(
          cartItem => html`<cart-item .cartItem="${cartItem}"></cart-item>`
        )}
      </div>
    `;
  }
}
