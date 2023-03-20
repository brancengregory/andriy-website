import Layout from '@/components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.scss';
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
      <article>
        <h1 className={utilStyles.headingXl}>{productData.title}</h1>
        <div className={utilStyles.brightText}>
          <p>{productData.price}</p>
        </div>
        {productData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: productData.contentHtml }} />
        )}
      </article>
    </Layout>
  );
}
