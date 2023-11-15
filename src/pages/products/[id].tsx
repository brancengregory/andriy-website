import Layout from '@/components/Layout';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { Product as ProductType } from '@/types';
import Image from 'next/image';

import { getAllProductIds, getProductData } from '../../lib/products';

export async function getStaticProps(context: GetStaticPropsContext) {
  const productData = await getProductData(context.params?.id as string);
  return {
    props: {
      productData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

interface ProductProps {
  productData: ProductType;
}

export default function Product({ productData }: ProductProps) {
  return (
    <Layout home={false}>
      <Head>
        <title>{productData.title}</title>
      </Head>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
            <Image
              src={productData.image}
              alt={productData.title}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{productData.title}</h1>
            <p className="text-lg font-semibold text-blue-600">{`$${productData.price.toFixed(2)}`}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
        {productData.contentHtml && (
          <div
            className="mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
            dangerouslySetInnerHTML={{ __html: productData.contentHtml }}
          />
        )}
      </article>
    </Layout>
  );
}