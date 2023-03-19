// ProductCard.ts

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Product } from '../../types/Product';
import '../buttons/AddToCart';
import { addToCart } from '../../utils/Cart';

@customElement('product-card')
export class ProductCard extends LitElement {
  static styles = css`
    .card {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      width: 100%;
      max-width: 300px;
      margin-bottom: 1rem;
    }
  `;

  @property({ type: Object })
  product!: Product;

  render() {
    return html`
      <div class="card">
        <img src="${this.product.image}" alt="${this.product.name}" />
        <h2>${this.product.name}</h2>
        <p>${this.product.description}</p>
        <p>$${this.product.price}</p>
        <add-to-cart-button
          @add-to-cart="${this.handleAddToCart}"
        ></add-to-cart-button>
        <button @click="${this.viewDetails}">View Details</button>
      </div>
    `;
  }

  // Handle the add-to-cart event
  private handleAddToCart() {
    // Use the addToCart function from the mock data source
    addToCart(this.product);
    console.log(`Added to cart: ${this.product.name}`);
  }

  // View product details
  private viewDetails() {
    // Add your logic to navigate to the product details page
    console.log(`View details for: ${this.product.name}`);
  }
}
