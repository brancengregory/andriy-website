import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Product } from '../types/Product';
import { products } from '../mock/Products';
import { router } from '../router';

@customElement('product-details-page')
export class ProductDetailsPage extends LitElement {
  static styles = css`
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    img {
      max-width: 100%;
    }
  `;

  @query('#product')
  productEl!: HTMLDivElement;

  product: Product | undefined;

  connectedCallback() {
    super.connectedCallback();
    const { id } = router.location.params as { id: string };
    this.product = products.find(product => product.id === parseInt(id));
  }

  render() {
    if (!this.product) {
      return html`<p>Loading...</p>`;
    }
    return html`
      <div id="product">
        <h1>${this.product.name}</h1>
        <img src="${this.product.image}" alt="${this.product.name}" />
        <p>${this.product.description}</p>
        <p>Price: $${this.product.price}</p>
      </div>
    `;
  }
}
