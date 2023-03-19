import Layout from '@/components/layout';
import Link from 'next/link';

export default function AllProducts() {
  return (
    <Layout home={true}>
      <h1>All Products</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>
        <Link href="/products/first-product">First Product</Link>
      </h2>
    </Layout>
  );
}