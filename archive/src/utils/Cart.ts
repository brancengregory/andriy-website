import { Cart, CartItem } from '../types/Cart';
import { Product } from '../types/Product';

const CART_STORAGE_KEY = 'cart';

export function saveCart(cart: Cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function loadCart(): Cart | undefined {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  if (cartData) {
    return JSON.parse(cartData);
  } else {
    return undefined;
  }
}

// Load the cart from local storage, or initialize it to an empty cart if not present
export const cart: Cart = loadCart() || {
  id: 1,
  cartItems: [],
  totalPrice: 0,
};

// Utility functions to simulate cart operations
export function addToCart(product: Product, quantity: number = 1): Cart {
  const existingCartItem = cart.cartItems.find(item => item.product.id === product.id);

  if (existingCartItem) {
    existingCartItem.quantity += quantity;
  } else {
    const newCartItem: CartItem = { product, quantity };
    cart.cartItems.push(newCartItem);
  }

  console.log(cart);
  updateTotalPrice();
  console.log(cart);
  saveCart(cart);
  return cart;
}

export function updateCartItemQuantity(productId: number, quantity: number): Cart {
  const cartItem = cart.cartItems.find(item => item.product.id === productId);

  if (cartItem) {
    cartItem.quantity = quantity;
    updateTotalPrice();
    saveCart(cart);
  }

  return cart;
}

export function removeCartItem(productId: number): Cart {
  cart.cartItems = cart.cartItems.filter(item => item.product.id !== productId);
  updateTotalPrice();
  saveCart(cart);
  return cart;
}

export function updateTotalPrice() {
  cart.totalPrice = cart.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  saveCart(cart);
}
