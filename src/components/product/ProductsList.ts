import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Product } from '../../types';
import './ProductCard';

@customElement('products-list')
export class ProductsList extends LitElement {
  static styles = css`
    ul {
      list-style: none;
      padding: 0;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  `;

  @property({ type: Array })
  products: Product[] = [];

  render() {
    return html`
      <ul>
        ${this.products.map(
          product => html`
            <li>
              <product-card .product="${product}"></product-card>
            </li>
          `
        )}
      </ul>
    `;
  }
}
