import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import CartSummary from './CartSummary';

const name = 'Pro Toppers';
export const siteTitle = 'Pro Toppers';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Come buy the best quality cake toppers and ornaments at the best prices"
        />
      </Head>
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full opacity-75"
                height={72}  // Reduced size for smaller screens
                width={72}   // Reduced size for smaller screens
                alt={name}
              />
            </Link>
            <Link href="/">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4 sm:mt-0 sm:ml-4">{name}</h1>
            </Link>
          </div>
          <CartSummary />
        </div>
      </header>
      <main className='container mx-auto'>
        {children}
      </main>
    </div>
  );
}
