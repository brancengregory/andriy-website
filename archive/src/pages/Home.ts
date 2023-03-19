import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  `;

  render() {
    return html`
      <div>
        <h1>Welcome to Our Online Store</h1>
        <p>
          We offer a wide range of laser engraved and cut products, including wedding cake toppers, Christmas ornaments,
          and more. Browse our collection and find the perfect gift or decoration for your special occasion.
        </p>
        <a href="/products">Shop Now</a>
      </div>
    `;
  }
}
