import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import CartSummary from './CartSummary';

const name = 'Pro Toppers';
export const siteTitle = 'Pro Toppers';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className="bg-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Come buy the best quality cake toppers and ornaments at the best prices"
        />
      </Head>
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
        <div className="flex items-center justify-between"> {/* Use justify-between here */}
          {home ? (
            <div className="flex items-center justify-center">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={144}
                width={144}
                alt={name}
              />
              <h1 className="text-3xl font-bold text-white ml-4">{name}</h1>
            </div>
          ) : (
            <div className='flex items-center justify-center'>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full cursor-pointer"
                  height={108}
                  width={108}
                  alt={name}
                />
              </Link>
              <h1 className="text-3xl font-bold text-white ml-4">
                <Link href="/">
                  {name}
                </Link>
              </h1>
            </div>
          )}
          <CartSummary />
        </div>
      </header>
      <main className='container mx-auto'>
        {children}
        {!home && (
          <div className="container mt-4">
            <Link href="/" className="text-blue-500">
              ← Back to home
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
