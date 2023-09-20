'use client'
import { useEffect, useLayoutEffect } from 'react'
import webcss from './webcss.module.css'
import useLocoScroll from '@/app/hooks/useLocoScroll';
export default function webdevpage() {
    useLocoScroll(true);


    return (<div id='main' data-scroll-container className={webcss.homePage}>
        <section className={webcss.section1}>
            <div className={webcss.text}>

                <h1 >Website Developers <br /> in Ranchi</h1>
                <p >Working with brands all over the world</p>
            </div>
            <div className={webcss.rectcontainer}>

                <div className={webcss.rect1}>
                    <img data-scroll data-scroll-speed='1' className={webcss.image1} src='https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/64400ef540315397c64f31eb_Big_CartoonMac%20(1).png' />
                    <img data-scroll data-scroll-speed='-2' className={webcss.image2} src='https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/6440121812d7d0053d768527_Big_SplashColor-p-1080.png' />
                </div>
            </div>
            <p>Leading digital agency with solid design and development expertise. We focus on building Webflow websites.</p>
        </section>
        <section className={webcss.section2}>
            <div  className={webcss.imagesContainer}>

                <div data-scroll className={webcss.imageContainer}>
                    <img data-scroll data-scroll-speed='0.001' src='/1.jpg'/>
                </div>
                <div data-scroll className={webcss.imageContainer}>
                    <img src='/2.jpg'/>
                </div>
                <div className={webcss.imageContainer}>
                    <img src='/3.jpg'/>
                </div>
                <div className={webcss.imageContainer}>
                    <img src='/4.jpg' />
                </div>
            </div>
        </section>

    </div>)
}