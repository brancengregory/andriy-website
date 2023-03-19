import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Cart } from '../../types/Cart';
import './CartItem';

@customElement('cart-component')
export class CartComponent extends LitElement {
  static styles = css`
    .cart {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 4px;
    }
    .cart__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cart__items {
      margin-top: 1rem;
    }
    .cart__total {
      margin-top: 1rem;
      font-weight: bold;
    }
  `;

  @property({ type: Object })
  cart!: Cart;

  render() {
    return html`
      <div class="cart">
        <div class="cart__header">
          <h2>Cart</h2>
          <span>${this.cart.products.length} items</span>
        </div>
        <div class="cart__items">
          ${this.cart.products.map(
            cartItem => html`
              <cart-item .cartItem="${cartItem}"></cart-item>
            `
          )}
        </div>
        <div class="cart__total">
          Total: $${this.cart.totalPrice}
        </div>
      </div>
    `;
  }
}
