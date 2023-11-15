// pages/cart.tsx
import Layout from '@/components/Layout';
import CartItem from '@/components/CartItem';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <Layout home={false}>
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Your Cart</h1>
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </ul>
        <div className="mt-8">
          <p className="text-xl text-gray-900">Total: ${total.toFixed(2)}</p>
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md mt-4 hover:bg-blue-700 transition-colors">
            Proceed to Checkout
          </button>
        </div>
        <div className="text-center mt-12">
          <Link href="/" className="text-blue-600 text-sm hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
