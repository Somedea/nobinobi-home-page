import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nobinobi LLC.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Nobinobi!" />
        <p className="description">
          Business summary
        </p>
        <p className="description">
          We develop systems and applications.
          For inquiries, please contact the following email address.
          <br/>
          pswty180@gmail.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
