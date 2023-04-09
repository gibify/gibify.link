import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { IoLogoGoogle } from 'react-icons/io5';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>gibify.link | Entrar</title>
        <link rel="icon" href="/favicon.gibify.link.png" />
        <meta name="description" content="compartilhe seus links facilmente." />
        <meta name="keywords" content="links, compartilhar meu links, compartilhar links, social media" />
        <meta name="og:title" content="gibify.link" />
        <meta property="og:description" content="compartilhe seus links facilmente." />
        <meta property="og:image" content="/gibify.link.svg" />
        <meta name="og:url" content="https://www.gibify.link" />
      </Head>
      <div className={`h-screen flex items-center justify-center bg-white text-black ${inter.className}`}>
        <div className='max-w-sm p-3'>
          <Image
            src='/gibify.link.svg'
            alt='gibify.link'
            width={380}
            height={100}
          />
          <h1 className='text-lg font-semibold my-3'>Compartilhe seus links facilmente.</h1>
          <p className='text-gray'>
            Criamos este site para que você possa compartilhar facilmente seus <strong className='text-black'>links </strong>com outras pessoas.
            Entre com a sua conta do <strong className='text-black'>Google </strong>e aproveita para deixar todos os seus contatos em um único lugar!
          </p>
          <button
            className='flex items-center justify-center border p-2 rounded-lg mt-5 w-full'
            onClick={() => signIn('google')}
          >
            <IoLogoGoogle color='black' size={24} />
            <span className='ml-2 text-black font-bold'>Entrar com a conta google</span>
          </button>
        </div>
      </div >
    </>
  )
}
