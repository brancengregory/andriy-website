import Layout from '@/components/Layout';
import Link from 'next/link';
import { Product } from '@/types';
import Image from 'next/image';
import Head from 'next/head';
import { getAllProductData } from '@/lib/products';
import { GetStaticPropsContext } from 'next';


export async function getStaticProps(context: GetStaticPropsContext) {
  const productData = await getAllProductData();
  return {
    props: {
      productData,
    },
  };
}

interface ProductsProps {
  productData: Product[];
}

export default function Products({ productData: products }: ProductsProps) {
  return (
    <Layout>
      <Head>
        <title>All Products | Pro Toppers</title>
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={300}
                  className="rounded-md"
                />
                <div className="mt-2">
                  <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-gray-600">${product.price}</p>
                </div>
            </Link>
          ))}
        </div>
        {/* Add your sorting and filtering controls here */}
      </div>
    </Layout>
  );
}
