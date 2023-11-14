import Layout from '@/components/layout';
import Cart from '../components/Cart';

export default function CartPage() {
  return (
    <Layout home={false}>
      <h1>Your Cart</h1>
      <Cart />
    </Layout>
  );
}