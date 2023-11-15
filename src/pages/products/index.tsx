import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Products() {
  return (
    <Layout home={false}>
      <h1 className='text-2xl font-bold'>Products</h1>
      <ul className='container list-disc list-inside'>
        <li>
          <Link href="/products/cake-topper-1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/ornament-1">Product 2</Link>
        </li>
      </ul>
    </Layout>
  );
}