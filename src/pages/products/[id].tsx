import Layout from '@/components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.scss';

import { getAllProductIds, getProductData } from '../../lib/products';

export async function getStaticProps({ params }) {
  const productData = await getProductData(params.id);
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

export default function Product({ productData }) {
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
        <div dangerouslySetInnerHTML={{ __html: productData.contentHtml }} />
      </article>
    </Layout>
  );
}