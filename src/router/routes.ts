import { Route, RouteWithRedirect } from '@vaadin/router';

export const routes:  Route[] | RouteWithRedirect[] = [
  { path: '/', component: 'home-page' },
  { path: '/products', component: 'products-page' },
  { path: '/products/:id', component: 'product-details-page' },
  { path: '(.*)', redirect: '/' },
];
