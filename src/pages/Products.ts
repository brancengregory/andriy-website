import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '../router';

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

  products = [
    {
      id: 1,
      name: 'Wedding Cake Topper',
      image: '/assets/wedding-cake-topper.jpg',
    },
    {
      id: 2,
      name: 'Christmas Ornament',
      image: '/assets/christmas-ornament.jpg',
    },
    // Add more products here...
  ];

  render() {
    return html`
      <div>
        <h1>Our Products</h1>
        <ul>
          ${this.products.map(
            (product) => html`
              <li>
                <a href="/products/${product.id}" @click=${this.handleNavigation}>
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

  handleNavigation(event: MouseEvent, id: number) {
    event.preventDefault();
    const router = Router.getInstance();
    router.navigateTo(`/products/${id}`);
  }
}
