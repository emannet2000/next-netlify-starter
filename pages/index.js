import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico">
      </Head>

      <main>
        <Header title="Welcome to F & E Enterprises" />
         <p> eman, beth, dondi, mama, luis, jay, tommy, yanni, shan, shawn
        </p>
      </main>

      <Footer />
    </div>
  )
}
