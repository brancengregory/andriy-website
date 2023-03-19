import { Product } from './Product';

export interface Cart {
  id: number;
  cartItems: CartItem[];
  totalPrice: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
