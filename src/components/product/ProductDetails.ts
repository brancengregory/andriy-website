import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../router';

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
  product_id: number | null = null;

  productData = new Map<number, { product_id: number; name: string; image: string; description: string }>([
    [
      1,
      {
        product_id: 1,
        name: 'Wedding Cake Topper',
        image: '/assets/wedding-cake-topper.jpg',
        description: 'A beautiful wedding cake topper for your special day.',
      },
    ],
    [
      2,
      {
        product_id: 2,
        name: 'Christmas Ornament',
        image: '/assets/christmas-ornament.jpg',
        description: 'A festive ornament to brighten up your Christmas tree.',
      },
    ],
  ]);  

  render() {
    const defaultProduct = {
      product_id: 0,
      name: '',
      image: '',
      description: '',
    };

    const product = this.productData.get(this.product_id || 0) || defaultProduct;

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
    console.log(`Product with ID: ${this.id} added to cart`);
  }
}
