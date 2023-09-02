import Image from 'next/image'
import './globals.css'
export const metadata = {
  title: 'Website Designers in Ranchi',
  description: 'Embark on the Future of App Development with Seasoned Developers in Ranchi! 🚀 Are you in pursuit of visionary web designers and developers in Ranchi? Look no further! Our forward-thinking web development solutions are meticulously crafted to breathe life into your concepts within the digital realm. We harness the power of an array of cutting-edge technologies, including React and NextJS, to architect visually mesmerizing and functionally adept cross-platform applications that resonate universally on all platforms',
}
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head'
import Nav from './components/Nav/nav'
// import { useIsomorphicLayoutEffect } from './helpers/isomorphicEffect'
// gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }) {
  // useIsomorphicLayoutEffect(function () {

  //   console.log(document.querySelector('#serviceBox'));
  //   gsap.to(document.querySelector('#serviceBox'), {

  //     scrollTrigger: {
  //       trigger: document.querySelector('#serviceBox'),
  //       start: 'top bottom',
  //       end: 'bottom top',
  //       markers: true,
  //       scroller: document.querySelector('.mainBody'),
  //       scrub: .2
  //     },
  //     stagger: .2,

  //   });
  // }, [])
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css' />
      </Head>
      <body className='mainBody'>
        <Nav />
        {children}
      </body>
    </html>
  )
}
