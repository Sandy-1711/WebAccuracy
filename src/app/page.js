import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Technologies from './components/Technologies/Technologies'
import Plans from './components/Plans/Plans'
import Footer from './components/Footer/Footer'
import Feature2 from './components/Feature2/Feature2'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      <Feature2 />
      <Technologies />
      <Plans />
      <Footer />
    </main>
  )
}
