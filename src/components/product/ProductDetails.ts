import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Router } from '../../router';
import { Product } from '../../types';
import { products } from '../../mock/products';

@customElement('product-details')
export class ProductDetails extends LitElement {
  static styles = css`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 1rem;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    img {
      width: 300px;
      height: 300px;
      margin-bottom: 1rem;
    }
  `;

  @property({ type: Number })
  productId: number | null = null;

  productData: Product[] = products;

  render() {
    const product = this.productData.find(p => p.id === this.productId);

    if (!product) {
      return html`<div>Product not found.</div>`;
    }

    return html`
      <div class="container">
        <h1>${product.name}</h1>
        <img src="${product.image}" alt="${product.name}" />
        <p>${product.description}</p>
        <button @click="${this.addToCart}">Add to Cart</button>
      </div>
    `;
  }

  addToCart() {
    // Add the selected product to the cart and show a message
    console.log(`Product with ID: ${this.productId} added to cart`);
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('productId')) {
      Router.getInstance().navigateTo(`/product/${this.productId}`);
    }
  }
}
