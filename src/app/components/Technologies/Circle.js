"use client"
import techcss from './techcss.module.css'

import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
export default function Circle() {

    useEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();
        if (window!=='undefined' && window.innerWidth > 900) {

            tl.to("#nav", {
                y: '-100%',
                scrollTrigger: {
                    trigger: `#techPage`,
                    scroller: `body`,
                    start: 'top 100px',
                    end: 'top top',
                    scrub: 1,

                }
            })
        }
        tl.from(`#inner`, {
            // opacity: 0,
            scale: 1,
            delay: 1,
            scrollTrigger: {
                trigger: `#techPage`,
                scroller: `body`,
                start: 'top top',
                end: 'top -400%',
                pin: true,
                scrub: 5,
            }

        })
        tl.from('#outerCircle', {
            opacity: 0,
            scale: 0.5,
            stagger: 1,
            // rotate: '100deg',
            scrollTrigger: {
                trigger: `#techPage`,
                scroller: 'body',
                start: 'top top',
                end: 'top -100%',
                // pin:true,
                scrub: 3,
            }
        })

    }, []);
    return (<div id='techAnimation' className={techcss.techAnimation}>
        <div id='line' className={techcss.line}>

        </div>
        <div id='inner' className={techcss.innerCircle}>
        </div>
        <div id='outerCircle' className={techcss.outerCircle1}>
            <div className={techcss.imageBox}>
                <div style={{ '--i': 0 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/Html.png'} alt='html' />
                </div>
                <div style={{ '--i': 1 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/CSS.png'} alt='css' />
                </div>
                <div style={{ '--i': 2 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/Javascript.png'} alt='javascript' />
                </div>

            </div>
        </div>
        <div id='outerCircle' className={techcss.outerCircle2}>
            <div className={techcss.imageBox}>
                <div style={{ '--i': 0 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/ReactNative.png'} alt='reactnative' />
                </div>
                <div style={{ '--i': 1.2 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/React.png'} alt='react' />
                </div>
            </div>
        </div>
        <div id='outerCircle' className={techcss.outerCircle3}>
            <div className={techcss.imageBox}>
                <div style={{ '--i': 0.2 }} className={techcss.imgimgbox}>

                    <Image height={100} width={100} src={'/Next.png'} alt='next' />
                </div>
                <div style={{ '--i': -0.8 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/Node.png'} alt='node' />

                </div>
            </div>
        </div>
        <div id='outerCircle' className={techcss.outerCircle4}>

            <div className={techcss.imageBox}>
                <div style={{ '--i': 0.2 }} className={techcss.imgimgbox}>

                    <Image height={100} width={100} src={'/MongoDB.png'} alt='mongodb' />
                </div>
                <div style={{ '--i': -0.8 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/Blockchain.png'} alt='blockchain' />

                </div>
            </div>
        </div>
    </div>)
}