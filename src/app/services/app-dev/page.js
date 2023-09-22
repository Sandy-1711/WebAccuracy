'use client'
import Footer from '@/app/components/Footer/Footer'
import appcss from './appcss.module.css'
import LocoScroll from '@/app/hooks/LocoScroll'
import { useEffect, useState } from 'react';
export default function AppDevPage() {
    const [width, setWidth] = useState();
    LocoScroll(true);
    useEffect(function () {
        setWidth(window.innerWidth)
        if (width > 900) {

            document.getElementById('body').style.overflowY = "hidden"
        }
        window.addEventListener('resize', function () {
            setWidth(window.innerWidth);
        })
    })
    return (<main data-scroll-container className={appcss.main}>
        {width > 900 && <section className={appcss.section1}>
            <div className={appcss.sec1text}>
                <p>App Development</p>
                <p >React Native and Flutter for captivating cross-platform interfaces on iOS and Android</p>
            </div>
            <div className={appcss.parallax1}>
                <div data-scroll data-scroll-speed='6' className={appcss.column1}>
                    <img className={appcss.img} src='https://framerusercontent.com/images/5lToVG0ayJSToMZALDqmRSO8bhM.png' />
                    <img className={appcss.img} src='https://framerusercontent.com/images/ooWW5gmbcriozqsjPbkbEYNvSno.png' />
                </div>
                <div data-scroll data-scroll-speed='3' className={appcss.column2}>
                    <img className={appcss.img} src='https://framerusercontent.com/images/KV3tMFWhNZZ2whw411sVwm6qI.png' />
                    <img className={appcss.img} src='https://framerusercontent.com/images/Gy27YxkY90Upc01050lnDHCOVqE.png' />
                </div>
                <div data-scroll data-scroll-speed='-3' className={appcss.column3}>
                    <img className={appcss.img} src='https://framerusercontent.com/images/N4DS9jet0Rb2X5oK6rbPG8l3g.png' />
                </div>
                <div data-scroll data-scroll-speed='3' className={appcss.column4}>
                    <img className={appcss.img} src='https://framerusercontent.com/images/wFSikuMlrdbYB15PCb2J9PHMJA.png' />
                    <img className={appcss.img} src='https://framerusercontent.com/images/GtO7c1DreUXQAkBcudzbkIJtOss.png' />
                </div>
            </div>
        </section>}
        <section id='section2' className={appcss.section2}>
            <div className={appcss.parallax2}>
                <div className={appcss.container}>

                    <div data-scroll data-scroll-speed='-1.5' className={appcss.p2c1}>
                        <img src='https://framerusercontent.com/images/U6c3zcltFBM0PDsAkL1YFpZSSM.png' />
                    </div>
                    <div data-scroll data-scroll-speed='1' className={appcss.p2c2}>
                        <img src='https://framerusercontent.com/images/U9G0NspnHN4PLubgUi69HHxug.png' />
                    </div>
                </div>
            </div>
            <div data-scroll data-scroll-speed='1' className={appcss.sec2text}>
                <p>Elevate your competitive edge in the digital landscape with apps that seamlessly blend creative prowess, functional ingenuity, and a design philosophy rooted in user-centricity across multiple platforms. Join forces with us to embark on your app journey, guided by the zleading app developers in Ranchi!</p>
                <p>Cloud integration for scalable and flexible app architecture</p>
            </div>
        </section>
        <section id='section3' className={appcss.section2 + ' ' + appcss.section3}>
            <div className={appcss.sec2text}>
                <p>Hailing from our Ranchi-based development hub, our adept team is fluent in a spectrum of the most up-to-date technologies and industry trends, ensuring your app remains at the forefront of innovation. Drawing on languages such as Node.js, Python, and Java for back-end development, we ensure fluid user experiences supported by unmatched speed and efficiency across both iOS and Android. Whether you&apos;re envisioning a dynamic e-commerce powerhouse, a feature-rich social networking platform, or a groundbreaking utility app, rest assured, we have you covered.</p>
                <p>React Native and Flutter for captivating cross-platform interfaces on iOS and Android</p>
            </div>
            <div className={appcss.parallax2 + ' ' + appcss.parallax3}>
                <div className={appcss.container}>

                    <div data-scroll data-scroll-speed='1.5' className={appcss.p2c1 + ' ' + appcss.p3c1}>
                        <img src='https://framerusercontent.com/images/LrbnXprPfPD5RFyVd7gwXAqpGY.png' />
                    </div>
                    <div data-scroll data-scroll-speed='1' className={appcss.p2c2+' '+appcss.p3c2}>
                        <img src='https://framerusercontent.com/images/2IFGrfquCalyJJmwTffgtNYPgH4.png' />
                    </div>
                </div>
            </div>
        </section>
        <section id='section4' className={appcss.section2 + ' ' + appcss.section4}>
            <div className={appcss.parallax2 + ' ' + appcss.parallax4}>
                <div className={appcss.container + ' ' + appcss.container4}>

                    <div data-scroll data-scroll-speed='1' className={appcss.p2c1 + ' ' + appcss.p4c1}>
                        <img src='https://framerusercontent.com/images/K6VFftynlCSxm5B928v9pJgSQAI.png' />
                    </div>
                    <div data-scroll data-scroll-speed='-2' className={appcss.p2c2 + ' ' + appcss.p4c2}>
                        <img src='https://framerusercontent.com/images/N4DS9jet0Rb2X5oK6rbPG8l3g.png' />
                    </div>
                </div>
            </div>
            <div className={appcss.sec2text}>
                <p>AI-powered features for personalized user experiences</p>
                <p>Back-end languages such as Node.js, Python, and Java for robust operations</p>
            </div>
        </section>
        <hr style={{ width: '100%', color: 'black' }} />
        <Footer />
    </main>)
}