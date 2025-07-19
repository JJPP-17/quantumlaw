import HomePage from './home/page';
<<<<<<< HEAD
=======
import Head from 'next/head';
>>>>>>> f59dd2f (update Analytics)

export default function Home() {
  return (
    <>
<<<<<<< HEAD
=======
      <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KZ1WBWYXWB"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZ1WBWYXWB');
          `,
        }} />
      </Head>
>>>>>>> f59dd2f (update Analytics)
      <HomePage />
    </>
  )
}