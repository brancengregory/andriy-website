import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstProduct() {
  return (
    <Layout home={false}>
      <Head>
        <title>First Product</title>
      </Head>
      <h1>First Product</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>
        <Link href="/products">Back to all products</Link>
      </h2>
    </Layout>
  );
}