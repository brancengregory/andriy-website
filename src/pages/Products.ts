import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { products as mock_products } from '../mock/Products';

@customElement('products-page')
export class ProductsPage extends LitElement {
  static styles = css`
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 1rem;
    }
    img {
      width: 150px;
      height: 150px;
    }
  `;

  products = mock_products;
  router = new Router(this.shadowRoot?.querySelector('main'));

  render() {
    return html`
      <div>
        <h1>Our Products</h1>
        <ul>
          ${this.products.map(
            (product) => html`
              <li>
                <a href="${Router.urlForPath(`/products/${product.id}`)}">
                  <img src="${product.image}" alt="${product.name}" />
                  <p>${product.name}</p>
                </a>
              </li>
            `,
          )}
        </ul>
      </div>
    `;
  }
}
