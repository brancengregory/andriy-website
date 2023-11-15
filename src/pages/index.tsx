import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getSortedProductsData } from '@/lib/products';
import { useCart } from '@/contexts/CartContext'; // Adjust the import path as necessary
import { Product } from '@/types';
import Image from 'next/image';
import ProductItem from '@/components/ProductItem';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  try {
    const allProductsData = getSortedProductsData();
    return {
      props: {
        allProductsData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { allProductsData: [] },
    };
  }
}

interface HomeProps {
  allProductsData: Product[];
}

export default function Home({ allProductsData }: HomeProps) {
  const { addToCart } = useCart(); // Use the addToCart function from the cart context

  return (
    <Layout home={true}>
      <Head>
        <title>Pro Toppers</title>
        {/* Add additional meta tags here */}
      </Head>
      <section className='py-10'>
        <div className='bg-gradient-to-b from-blue-100 to-blue-50 py-10'>
          <h2 className='text-4xl text-center font-extrabold mb-12 text-gray-800'>Top Products</h2>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10'>
              {allProductsData.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className='text-center mt-10'>
          <Link href="/products" className='text-lg text-blue-600 font-semibold hover:underline'>
            All Products
          </Link>
        </div>
      </section>
    </Layout>
  );
}
