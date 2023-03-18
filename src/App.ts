import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router, Route } from './router';


// Importing page components
import './pages/Home';
import './pages/Products';
import './pages/ProductDetails';
import './pages/Cart';

// Importing common components
import './components/common/Header';
import './components/common/Footer';

@customElement('app-root')
export class App extends LitElement {
  static styles = css`
    /* Add your global styles here */
  `;

  constructor() {
    super();
    const router = Router.getInstance(); // Get the instance of the Router
    router.setRoutes([
      new Route('Home', '/', 'home-page'),
      new Route('Products', '/products', 'products-page'),
      new Route('ProductDetails', '/products/:id', 'product-details-page'),
      new Route('Cart', '/cart', 'cart-page'),
    ]);
  }

  render() {
    return html`
      <app-header></app-header>
      <main>
        <home-page></home-page>
      </main>
      <app-footer></app-footer>
    `;
  }
}
