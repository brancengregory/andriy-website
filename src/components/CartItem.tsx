import { MinusIcon, PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { CartItem } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useState, useEffect } from 'react';

type CartItemProps = {
  cartItem: CartItem;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const [inputQuantity, setInputQuantity] = useState(cartItem.quantity.toString());

  useEffect(() => {
    setInputQuantity(cartItem.quantity.toString());
  }, [cartItem.quantity]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setInputQuantity(e.target.value); // Keep the input in sync with the user's input
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      updateQuantity(cartItem.id, newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = cartItem.quantity + 1;
    setInputQuantity(newQuantity.toString());
    updateQuantity(cartItem.id, newQuantity);
  };

  const handleDecrement = () => {
    if (cartItem.quantity > 1) {
      const newQuantity = cartItem.quantity - 1;
      setInputQuantity(newQuantity.toString());
      updateQuantity(cartItem.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(cartItem.id);
  };

  return (
    <li className="flex items-center justify-between p-4 hover:bg-gray-50">
      <div className="flex items-center">
        <Link href={`/products/${cartItem.id}`} passHref>
          <Image src={cartItem.image} alt={cartItem.title} width={500} height={300} className="h-16 w-16 rounded mr-4" />
        </Link>
        <Link href={`/products/${cartItem.id}`} passHref>
          <p className="font-medium text-gray-700">{cartItem.title}</p>
        </Link>
      </div>
      <div className="flex items-center">
        <button onClick={handleDecrement} disabled={cartItem.quantity <= 1} className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
          <MinusIcon className="h-5 w-5" />
        </button>
        <input 
          type="number" 
          value={inputQuantity} 
          onChange={handleQuantityChange} 
          className="w-12 text-center border border-gray-300 rounded mx-2" 
          min="1" 
        />
        <button onClick={handleIncrement} className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
      <button onClick={handleRemove} className="text-gray-400 hover:text-gray-600">
        <XCircleIcon className="h-5 w-5" />
      </button>
    </li>
  );
};

export default CartItem;