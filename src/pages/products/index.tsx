import Layout from '@/components/layout';
import Link from 'next/link';

export default function Products() {
  return (
    <Layout home={false}>
      <h1>Products</h1>
      <h2>
        <ul>
          <li>
            <Link href="/products/cake-topper-1">Product 1</Link>
          </li>
          <li>
            <Link href="/products/ornament-1">Product 2</Link>
          </li>
        </ul>
      </h2>
    </Layout>
  );
}