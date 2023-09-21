'use client'
import webcss from './webcss.module.css'
import LocoScroll from '@/app/hooks/LocoScroll';
import { useEffect, useState } from 'react';
export default function WebDevPage() {
    // const [width, setWidth] = useState();
    // LocoScroll(true);
    // useEffect(function () {
    //     setWidth(window.innerWidth)
    //     if (width > 900) {

    //         document.getElementById('body').style.overflowY = "hidden"
    //     }
    //     window.addEventListener('resize', function () {
    //         setWidth(window.innerWidth);
    //     })
    // })

    return (<div data-scroll-container className={webcss.homePage}>
        <section className={webcss.section1}>

            <div data-scroll data-scroll-speed='2' className={webcss.text}>

                <h1 >Website Developers <br /> in Ranchi</h1>
                <p >Working with brands all over the world</p>
            </div>
            <div data-scroll data-scroll-speed='4' className={webcss.rectcontainer}>

                <div className={webcss.rect1}>
                    <img className={webcss.image1} src='https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/64400ef540315397c64f31eb_Big_CartoonMac%20(1).png' />
                    <img data-scroll data-scroll-speed='3' className={webcss.image2} src='https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/6440121812d7d0053d768527_Big_SplashColor-p-1080.png' />
                </div>
            </div>
            <p data-scroll data-scroll-speed='-4'>Leading digital agency with solid design and development expertise. We focus on building Webflow websites.</p>
        </section>
        <section className={webcss.section2}>
            <div className={webcss.imagesContainer}>

                <div  className={webcss.imageContainer}>
                    <img data-scroll data-scroll-speed='0.1' src='/1.jpg' />
                </div>
                <div  className={webcss.imageContainer}>
                    <img data-scroll data-scroll-speed='0.1' src='/2.jpg'/>
                </div>
                <div  className={webcss.imageContainer}>
                    <img data-scroll data-scroll-speed='0.1' src='/3.jpg'/>
                </div>
                <div  className={webcss.imageContainer}>
                    <img data-scroll data-scroll-speed='0.1' src='/4.jpg' />
                </div>
            </div>
        </section>

    </div>)
}