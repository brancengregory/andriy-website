// cart.ts
interface CartItem {
  id: number;
  quantity: number;
}

const CART_KEY = 'cart';

function getCart(): CartItem[] {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
