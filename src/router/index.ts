import { Router } from '@vaadin/router';

const routes = [
  { path: '/', component: 'home-page' },
  { path: '/products', component: 'products-page' },
  { path: '/products/:id', component: 'product-details-page' },
  { path: '/cart', component: 'cart-page' },
];

export const router = new Router(document.querySelector('main'));
router.setRoutes(routes);
