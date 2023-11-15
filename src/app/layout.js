
import Image from 'next/image'
import './globals.css'
export const metadata = {
  title: 'Website Designers in Ranchi',
  description: 'Are you in pursuit of visionary web designers and developers in Ranchi. Embark on the Future of Website Development with Seasoned Developers in Ranchi!',
}
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head'
import Nav from './components/Nav/nav'
import Script from 'next/script';
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
        <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap" rel="stylesheet"></link>
          </link>
        </link>
      </Head>
      <body id='body' className='mainBody'>
        <div >

          {/* <Nav /> */}
          {children}
        </div>
        {/* <script src='/scripts.js' async></script> */}
        {/* <script src='/dat.gui.min.js' async></script> */}
      </body>
    </html>
  )
}
