import Head from 'next/head'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import PlaylistSection from '../components/PlaylistSection'
import AdPlaceholder from '../components/AdPlaceholder'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ManaTelugu - తెలుగు ప్రపంచానికి డిజిటల్ వేదిక</title>
        <meta name="description" content="ManaTelugu: A premium digital home for Telugu language and culture." />
        <link rel="icon" href="/favicon.ico" />
        {/* AdSense placeholder script */}
        <script data-ad-client="ca-pub-6929353495161929" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <main>
        <HeroSection />
        <PlaylistSection />
        <AdPlaceholder />
      </main>
    </Layout>
  )
}