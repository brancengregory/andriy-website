import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { PlusIcon, MinusIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const cartItem = cartItems.find((item) => item.id === product.id);
  const [inputQuantity, setInputQuantity] = useState(cartItem?.quantity.toString() || '0');

  useEffect(() => {
    if (cartItem) {
      setInputQuantity(cartItem.quantity.toString());
    }
  }, [cartItem]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setInputQuantity(e.target.value); // Keep the input in sync with the user's input
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = parseInt(inputQuantity, 10) + 1;
    setInputQuantity(newQuantity.toString());
    if (newQuantity === 1) {
      addToCart(product);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleDecrement = () => {
    const newQuantity = parseInt(inputQuantity, 10) - 1;
    if (newQuantity >= 0) {
      setInputQuantity(newQuantity.toString());
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleAddToCart = () => {
    handleIncrement();
  };

  return (
    <div className='product-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 m-4'>
      <Link href={`/products/${product.id}`}>
        <Image src={product.image} alt={product.title} width={500} height={300} className="w-full" />
      </Link>
      <div className='product-info p-6 text-center'>
        <Link href={`/products/${product.id}`}>
          <h3 className='text-lg text-gray-900 font-semibold mb-1'>{product.title}</h3>
        </Link>
        <Link href={`/products/${product.id}`}>
          <p className='text-gray-600 mb-3'>${product.price.toFixed(2)}</p>
        </Link>
        <div className='quantity-controls flex items-center justify-center space-x-2 mb-4'>
          <button onClick={handleDecrement} disabled={parseInt(inputQuantity, 10) < 1} className='text-gray-500 bg-gray-200 rounded-full p-2 hover:bg-gray-300'>
            <MinusIcon className="w-5 h-5" />
          </button>
          <input 
            type="number" 
            value={inputQuantity} 
            onChange={handleQuantityChange} 
            className="w-12 text-center border border-gray-300 rounded" 
            min="0" 
          />
          <button onClick={handleIncrement} className='text-gray-500 bg-gray-200 rounded-full p-2 hover:bg-gray-300'>
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
        <button 
          className='add-to-cart-btn bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center w-full' 
          onClick={handleAddToCart}
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;