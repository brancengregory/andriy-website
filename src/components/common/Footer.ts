import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-footer')
export class Footer extends LitElement {
  static styles = css`
    footer {
      background-color: #333;
      color: #fff;
      padding: 1rem;
      display: flex;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <footer>
        &copy; 2023 My Online Store
      </footer>
    `;
  }
}