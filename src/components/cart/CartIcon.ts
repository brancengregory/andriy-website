import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CartService } from '../../services';

@customElement('cart-icon')
export class CartIcon extends LitElement {
  @property({ type: Number }) itemCount = 0;

  static styles = css`
    .cart-icon {
      position: relative;
    }
    .item-count {
      background-color: red;
      border-radius: 50%;
      color: white;
      font-size: 0.8rem;
      height: 1.5rem;
      line-height: 1.5rem;
      position: absolute;
      right: -0.5rem;
      text-align: center;
      top: -0.5rem;
      width: 1.5rem;
    }
  `;

  render() {
    return html`
      <div class="cart-icon" @click=${this.handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M6 7V6c0-1.7 1.3-3 3-3s3 1.3 3 3v1h8v2H8v11c0 1.1-.9 2-2 2s-2-.9-2-2V9H1V7h5zm4 0V6c0-.6-.4-1-1-1s-1 .4-1 1v1h2zm8 0h-2V6c0-.6-.4-1-1-1s-1 .4-1 1v1h-2v2h8V7zM8 11h8v7H8v-7zm2 5h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1s.4 1 1 1z"
          />
        </svg>
        ${this.itemCount > 0 ? html`<div class="item-count">${this.itemCount}</div>` : ''}
      </div>
    `;
  }

  handleClick() {
    const router = Router.getInstance();
    router.navigateTo('/cart');
  }

  connectedCallback() {
    super.connectedCallback();
    CartService.getInstance().onCartUpdate((cart) => {
      this.itemCount = cart.items.length;
    });
  }
}
