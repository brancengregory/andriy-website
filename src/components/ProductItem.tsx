import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { PlusIcon, MinusIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addToCart, cartItems, removeFromCart, updateQuantity } = useCart();
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleIncrementQuantity = () => {
    addToCart({ ...product });
  };

  const handleDecrementQuantity = () => {
    if (quantityInCart > 1) {
      updateQuantity(product.id, quantityInCart - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className='product-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 m-4'>
      <Image src={product.image} alt={product.title} width={500} height={300} objectFit='cover' className="w-full" />
      <div className='product-info p-6 text-center'>
        <h3 className='text-lg text-gray-900 font-semibold mb-1'>{product.title}</h3>
        <p className='text-gray-600 mb-3'>${product.price.toFixed(2)}</p>
        <div className='quantity-controls flex items-center justify-center space-x-2 mb-4'>
          <button onClick={handleDecrementQuantity} disabled={quantityInCart <= 0} className='text-gray-500 bg-gray-200 rounded-full p-2 hover:bg-gray-300'>
            <MinusIcon className="w-5 h-5" />
          </button>
          <span className='text-lg font-semibold'>{quantityInCart}</span>
          <button onClick={handleIncrementQuantity} className='text-gray-500 bg-gray-200 rounded-full p-2 hover:bg-gray-300'>
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
        <button className='add-to-cart-btn bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center w-full' onClick={handleIncrementQuantity}>
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
