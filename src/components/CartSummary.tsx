import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const CartSummary = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='flex items-center'>
      <Link href="/cart" className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
        <ShoppingCartIcon className="h-6 w-6 mr-2" />
        Cart
        <span className="ml-2 bg-blue-200 text-blue-800 px-2 rounded-full text-xs font-semibold">
          {itemCount}
        </span>
      </Link>
    </div>
  );
};

export default CartSummary;
