import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Slackerstyle Studios | 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Slackerstyle Studios" />
        <p className="description">
          Slackerstyle Studios creates blockchain experiments. Please view our list of current and past projects. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
