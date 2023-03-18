// Import external dependencies
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { router } from './router';

// Define the element
@customElement('app-root')
export class App extends LitElement {
  static styles = css`
    /* Add your global styles here */
  `;

  constructor() {
    super();
    router.setOutlet(this.shadowRoot!.querySelector('main') as HTMLElement);
  }

  render() {
    return html`
      <app-header></app-header>
      <main></main>
      <app-footer></app-footer>
    `;
  }
}
