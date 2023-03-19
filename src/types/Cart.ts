import { Product } from '../types/Product';

export interface Cart {
  id: number;
  products: Product[];
  totalPrice: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
