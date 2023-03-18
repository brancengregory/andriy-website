import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class Header extends LitElement {
  static styles = css`
    header {
      background-color: #333;
      color: #fff;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
    }

    h1 {
      margin: 0;
    }

    nav {
      display: flex;
      gap: 1rem;
    }

    a {
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <header>
        <h1>My Online Store</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/products">Products</a>
        </nav>
      </header>
    `;
  }
}
