// Import lit libraries
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Import mock data
// Todo: Replace with real data
import { products as mock_products } from '../mock/Products';

// Import the ProductCard component
import '../components/product/ProductCard';

// Define the ProductsPage component
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

  render() {
    return html`
      <div>
        <h1>Our Products</h1>
        <ul>
          ${this.products.map(
            product => html`
              <li>
                <a href="/products/${product.id}">
                  <product-card .product="${product}"></product-card>
                </a>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}
