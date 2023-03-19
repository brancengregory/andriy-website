// Import external dependencies
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { router } from './router';
import './pages';
import './components/common/Header';
import './components/common/Footer';

// Define the element
@customElement('app-root')
export class App extends LitElement {
  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `;

  firstUpdated(): void {
    const main = this.shadowRoot?.querySelector('main');
    if (main) {
      router.setOutlet(main);
    }
  }

  render() {
    return html`
      <app-header></app-header>
      <main></main>
      <app-footer></app-footer>
    `;
  }
}
