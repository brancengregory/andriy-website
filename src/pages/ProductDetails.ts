import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('product-details-page')
export class ProductDetailsPage extends LitElement {
  static styles = css`
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

  // This is just an example, you should fetch the product data from an API or backend
  productData = {
    1: {
      product_id: 1,
      name: 'Wedding Cake Topper',
      image: '/assets/wedding-cake-topper.jpg',
      description: 'A beautiful wedding cake topper for your special day.',
    },
    2: {
      product_id: 2,
      name: 'Christmas Ornament',
      image: '/assets/christmas-ornament.jpg',
      description: 'A festive ornament to brighten up your Christmas tree.',
    },
  };

  render() {
    const product = this.productData[this.productId || 0] || {};

    return html`
      <div>
        <h1>${product.name}</h1>
        <img src="${product.image}" alt="${product.name}" />
        <p>${product.description}</p>
        <button @click=${this.addToCart}>Add to Cart</button>
      </div>
    `;
  }

  addToCart() {
    // Add the selected product to the cart and show a message
    console.log(`Product with ID: ${this.productId} added to cart`);
  }
}
