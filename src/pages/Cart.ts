import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/cart/CartItemList';
import { Cart } from '../types/Cart';
import { loadCart } from '../utils/Cart';

@customElement('cart-page')
export class CartPage extends LitElement {
  static styles = css`
    .cart-page {
      display: flex;
      flex-direction: column;
      max-width: 800px;
      margin: 0 auto;
    }
    .cart-page__title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .cart-page__total {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 1rem;
    }
  `;

  cart: Cart | undefined;

  constructor() {
    super();
    this.cart = undefined;
  }

  connectedCallback() {
    super.connectedCallback();
    this.cart = loadCart();
  }

  render() {
    if (!this.cart) {
      return html`
        <div class="cart-page">
          <h1 class="cart-page__title">Cart not found</h1>
        </div>
      `;
    }

    return html`
      <div class="cart-page">
        <h1 class="cart-page__title">Your Cart</h1>
        <cart-item-list .cartItems="${this.cart.cartItems}"></cart-item-list>
        <div class="cart-page__total">Total: $${this.cart.totalPrice}</div>
      </div>
    `;
  }
}
