import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Pro Toppers';
export const siteTitle = 'Pro Toppers';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className=''>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Come buy the best quality cake toppers and ornaments at the best prices"
        />
      </Head>
      <header className=''>
        {home ? (
          <div className='flex'>
            <Image
              priority
              src="/images/profile.jpg"
              className='flex-auto m-0'
              height={144}
              width={144}
              alt=""
            />
            <h1 className=''>{name}</h1>
          </div>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className=''
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className=''>
              <Link href="/" className=''>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className=''>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
