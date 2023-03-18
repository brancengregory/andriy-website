import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Product } from '../../types';

@customElement('product-card')
export class ProductCard extends LitElement {
  static styles = css`
    .card {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 1rem;
    }
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    img {
      width: 100%;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    button {
      display: block;
      margin: 0 auto;
    }
  `;

  @property({ type: Object })
  product: Product = {
    id: 0,
    name: '',
    image: '',
    price: 0,
    description: '',
  };

  render() {
    return html`
      <div class="card">
        <h3>${this.product.name}</h3>
        <img src="${this.product.image}" alt="${this.product.name}" />
        <p>${this.product.description}</p>
        <button @click=${this.addToCart}>Add to Cart</button>
      </div>
    `;
  }

  addToCart() {
    // Add the selected product to the cart and show a message
    console.log(`Product with ID: ${this.product.id} added to cart`);
  }
}
