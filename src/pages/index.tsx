import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Layout from '@/components/layout';
import utilStyles from '@/styles/utils.module.scss';
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Top Products</h2>
        <ul className={utilStyles.list}>
          {allProductsData.map(({ id, price, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/products/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.brightText}>{price}</small>
            </li>
          ))}
        </ul>
        <Link href="/products">All Products</Link>
      </section>
    </Layout>
  );
}
