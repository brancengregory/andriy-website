import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Layout from '@/components/layout';
import { getSortedProductsData } from '@/lib/products';
import { Product } from '@/types';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  const allProductsData = getSortedProductsData();
  return {
    props: {
      allProductsData,
    },
  };
}

interface HomeProps {
  allProductsData: Product[];
}

export default function Home({ allProductsData }: HomeProps) {
  return (
    <Layout home={true}>
      <Head>
        <title>Pro Toppers</title>
      </Head>
      <section className='mt-10'>
        <h2 className='text-2xl text-center'>Top Products</h2>
        <ul className='text-center sm:text-left'>
          {allProductsData.map(({ id, price, title }) => (
            <li key={id}>
              <Link href={`/products/${id}`}>{title}</Link>
              <br />
              <p>{price}</p>
            </li>
          ))}
        </ul>
        <Link href="/products">All Products</Link>
      </section>
    </Layout>
  );
}
