// CartContext.ts
import React, { createContext, useContext, useState, ReactNode, FunctionComponent } from 'react';
import { Product } from '../types/product';

// Define a type for the product items in the cart
export type CartItem = {
  id: string; // or number if your product IDs are numbers
  title: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
};

// Define the shape of your context state
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void; // or number
  updateQuantity: (productId: string, quantity: number) => void; // or number
};

// Define the type for CartProvider props
type CartProviderProps = {
  children: ReactNode;
};

// Create the context with a default value
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// CartProvider component
export const CartProvider: FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // If item exists, increase the quantity
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If the item doesn't exist, add a new item with quantity 1
      const newItem: CartItem = {
        ...product,
        quantity: 1, // Set the initial quantity for the new cart item
      };
      return [...prevItems, newItem];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
