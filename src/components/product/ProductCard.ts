import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Product } from '../../types/Product';

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
      </div>
    `;
  }
}
