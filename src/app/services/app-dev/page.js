'use client'
import Footer from '@/app/components/Footer/Footer'
import appcss from './appcss.module.css'
import useLocoScroll from '@/app/hooks/useLocoScroll'
import { useEffect } from 'react';
export default function appdevpage() {
    useLocoScroll(true);

    useEffect(function(){
        
        document.getElementById('body').style.overflowY = "hidden"
        
    },[])
    return (<main data-scroll-container className={appcss.main}>
        <section className={appcss.section1}>
            <div className={appcss.sec1text}>
                <p>App Development</p>
                <p></p>
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
                <div className={appcss.column3}>
                    <img className={appcss.img} src='https://framerusercontent.com/images/N4DS9jet0Rb2X5oK6rbPG8l3g.png' />
                </div>
                <div data-scroll data-scroll-speed='3' className={appcss.column4}>
                    <img className={appcss.img} src='https://framerusercontent.com/images/wFSikuMlrdbYB15PCb2J9PHMJA.png' />
                    <img className={appcss.img} src='https://framerusercontent.com/images/GtO7c1DreUXQAkBcudzbkIJtOss.png' />
                </div>
            </div>
        </section>
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
                <p>UX/UI design, direction, research, user testing, motion design</p>
                <p>Speedtest: making it convenient for 100m+ people</p>
            </div>
        </section>
        <section id='section3' className={appcss.section2}>
            <div className={appcss.sec2text}>
                <p>UX/UI design, direction, research, user testing, motion design</p>
                <p>Speedtest: making it convenient for 100m+ people</p>
            </div>
            <div className={appcss.parallax2 + ' ' + appcss.parallax3}>
                <div className={appcss.container}>

                    <div data-scroll data-scroll-speed='1.5' className={appcss.p2c1 + ' ' + appcss.p3c1}>
                        <img src='https://framerusercontent.com/images/LrbnXprPfPD5RFyVd7gwXAqpGY.png' />
                    </div>
                    <div data-scroll data-scroll-speed='1' className={appcss.p2c2}>
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
                <p>UX/UI design, direction, research, user testing, motion design</p>
                <p>Speedtest: making it convenient for 100m+ people</p>
            </div>
        </section>
        <hr style={{ width: '100%', color: 'black' }} />
        {/* <Footer /> */}
    </main>)
}