import Layout from '@/components/layout';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { Product as ProductType } from '@/types';

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
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4">{productData.title}</h1>
        <div className="mb-4">
          <p className="text-lg font-semibold">{productData.price}</p>
        </div>
        {productData.contentHtml && (
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: productData.contentHtml }}
          />
        )}
      </article>
    </Layout>
  );
}
