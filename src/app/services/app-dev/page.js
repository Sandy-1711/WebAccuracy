'use client'
import Footer from '@/app/components/Footer/Footer'
import appcss from './appcss.module.css'
import LocoScroll from '../../../../hooks/LocoScroll'
import { useLayoutEffect, useState } from 'react';
import loadcss from './loading.module.css'
import Nav from '@/app/components/Nav/nav';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
export default function AppDevPage() {

    LocoScroll(true);
    useLayoutEffect(function () {
        document.querySelector('main').style.height = "100vh";
        document.querySelector('main').style.overflowY = "hidden";
        var a = 0;
        setInterval(function () {
            a += Math.floor(Math.random() * 10)
            if (a < 100) {
                document.querySelector(`.${loadcss.loading} h2`).innerHTML = a + " %";
            }
            else {
                a = 100;
                document.querySelector(`.${loadcss.loading} h2`).innerHTML = a + " %";
                document.getElementById('loading').style.transform = "translate(0,-100vh)";

                document.querySelector('main').style.height = "max-content";
                document.querySelector('main').style.overflowY = "scroll";

            }
        }, 100)

    }, [])
    return (<main id='main' data-scroll-container className={appcss.main}>
        <div id='loading' className={loadcss.loading}>
            <h2>0%</h2>
        </div>
        <Nav />
        <section className={appcss.section1}>
            <div className={appcss.sec1text}>
                <h1>App Development</h1>
                <p>React Native and Flutter for captivating cross-platform interfaces on iOS and Android</p>
            </div>
            <div className={appcss.parallax1}>
                <div data-scroll data-scroll-speed='0.9' className={appcss.column1}>
                    <Image height={400} width={400} className={appcss.img} src='https://framerusercontent.com/images/5lToVG0ayJSToMZALDqmRSO8bhM.png' alt="App developement, android, ios, responsive design" />
                    <Image height={400} width={400} alt="App developement, android, ios, responsive design" className={appcss.img} src='https://framerusercontent.com/images/ooWW5gmbcriozqsjPbkbEYNvSno.png' />
                </div>
                <div data-scroll data-scroll-speed='0.4' className={appcss.column2}>
                    <Image height={400} width={400} alt="App developement, android, ios, responsive design" className={appcss.img} src='https://framerusercontent.com/images/KV3tMFWhNZZ2whw411sVwm6qI.png' />
                    <Image height={400} width={400} alt="App developement, android, ios, responsive design" className={appcss.img} src='https://framerusercontent.com/images/Gy27YxkY90Upc01050lnDHCOVqE.png' />
                </div>
                <div data-scroll data-scroll-speed='-0.3' className={appcss.column3}>
                    <Image height={400} width={400} alt="App developement, android, ios, responsive design" className={appcss.img} src='https://framerusercontent.com/images/N4DS9jet0Rb2X5oK6rbPG8l3g.png' />
                </div>
                <div data-scroll data-scroll-speed='0.8' className={appcss.column4}>
                    <Image height={400} width={400} alt="App developement, android, ios, responsive design" className={appcss.img} src='https://framerusercontent.com/images/wFSikuMlrdbYB15PCb2J9PHMJA.png' />
                    <Image height={400} width={400} alt="App developement, android, ios, responsive design" className={appcss.img} src='https://framerusercontent.com/images/GtO7c1DreUXQAkBcudzbkIJtOss.png' />
                </div>
            </div>
        </section>
        <section id='section2' className={appcss.section2}>
            <div className={appcss.parallax2}>
                <div className={appcss.container}>

                    <div data-scroll data-scroll-speed='-0.2' className={appcss.p2c1}>
                        <Image height={400} width={400} alt="App developement, android, ios, responsive design" src='https://framerusercontent.com/images/U6c3zcltFBM0PDsAkL1YFpZSSM.png' />
                    </div>
                    <div data-scroll data-scroll-speed='0.6' className={appcss.p2c2}>
                        <Image height={400} width={400} alt="App developement, android, ios, responsive design" src='https://framerusercontent.com/images/U9G0NspnHN4PLubgUi69HHxug.png' />
                    </div>
                </div>
            </div>
            <div className={appcss.sec2text}>
                <p>Embark on the Future of App Development with Seasoned Developers in Ranchi! 🚀 Are you in pursuit of visionary app designers and developers in Ranchi? Look no further! Our forward-thinking app development solutions are meticulously crafted to breathe life into your concepts within the digital realm. We harness the power of an array of cutting-edge technologies, including React Native and Flutter, to architect visually mesmerizing and functionally adept cross-platform applications that resonate universally on iOS and Android platforms.</p>
                <p>Cloud integration for scalable and flexible app architecture</p>
            </div>
        </section>
        <section id='section3' className={appcss.section2 + ' ' + appcss.section3}>
            <div className={appcss.sec2text}>
                <p>Hailing from our Ranchi-based development hub, our adept team is fluent in a spectrum of the most up-to-date technologies and industry trends, ensuring your app remains at the forefront of innovation. Drawing on languages such as Node.js, Python, and Java for back-end development, we ensure fluid user experiences supported by unmatched speed and efficiency across both iOS and Android. Whether you&apos;re envisioning a dynamic e-commerce powerhouse, a feature-rich social networking platform, or a groundbreaking utility app, rest assured, we have you covered.</p>
                <p>AI-powered features for personalized user experiences</p>
            </div>
            <div className={appcss.parallax2 + ' ' + appcss.parallax3}>
                <div className={appcss.container}>

                    <div data-scroll data-scroll-speed='0.5' className={appcss.p2c1 + ' ' + appcss.p3c1}>
                        <Image height={400} width={400} alt="App developement, android, ios, responsive design" src='https://framerusercontent.com/images/LrbnXprPfPD5RFyVd7gwXAqpGY.png' />
                    </div>
                    <div data-scroll data-scroll-speed='0.8' className={appcss.p2c2 + ' ' + appcss.p3c2}>
                        <Image height={400} width={400} alt="App developement, android, ios, responsive design" src='https://framerusercontent.com/images/2IFGrfquCalyJJmwTffgtNYPgH4.png' />
                    </div>
                </div>
            </div>
        </section>
        <section id='section4' className={appcss.section2 + ' ' + appcss.section4}>
            <div className={appcss.parallax2 + ' ' + appcss.parallax4}>
                <div className={appcss.container + ' ' + appcss.container4}>

                    <div data-scroll data-scroll-speed='0.4' className={appcss.p2c1 + ' ' + appcss.p4c1}>
                        <Image height={400} width={400} alt="App developement, android, ios, responsive design" src='https://framerusercontent.com/images/K6VFftynlCSxm5B928v9pJgSQAI.png' />
                    </div>
                    <div data-scroll data-scroll-speed='-0.2' className={appcss.p2c2 + ' ' + appcss.p4c2}>
                        <Image height={400} width={400} alt="App developement, android, ios, responsive design" src='https://framerusercontent.com/images/N4DS9jet0Rb2X5oK6rbPG8l3g.png' />
                    </div>
                </div>
            </div>
            <div className={appcss.sec2text}>
                <p>Elevate your competitive edge in the digital landscape with apps that seamlessly blend creative prowess, functional ingenuity, and a design philosophy rooted in user-centricity across multiple platforms. Join forces with us to embark on your app journey, guided by the leading app developers in Ranchi!</p>
                <p>Back-end languages such as Node.js, Python, and Java for robust operations</p>
            </div>
        </section>
        <hr style={{ width: '100%', color: 'black' }} />
         
        <Footer />
    </main>)
}