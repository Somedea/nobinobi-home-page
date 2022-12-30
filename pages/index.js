import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="合同会社のびのび" />
        <h2>事業概要</h2>
        <p className="description">
          システム及びアプリケーションの開発を行っています。
          お問い合わせの際は下記のメールアドレスにご連絡をお願いいたします。
          <br/>
          pswty180@gmail.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
