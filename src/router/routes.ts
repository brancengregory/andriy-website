import { Route, RouteWithRedirect } from '@vaadin/router';

import { HomePage } from '../pages/Home';
import { ProductsPage } from '../pages/Products';
import { ProductDetailsPage } from '../pages/ProductDetails';

export const routes:  Route[] | RouteWithRedirect[] = [
  { path: '/', component: 'home-page' },
  { path: '/products', component: 'products-page' },
  { path: '/products/:id', component: 'product-details-page' },
  { path: '(.*)', redirect: '/' },
];
