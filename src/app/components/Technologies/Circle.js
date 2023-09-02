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
        if (window.innerWidth > 900) {

            tl.to("#nav", {
                y: -100,
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
            opacity: 0,
            scrollTrigger: {
                trigger: `#techPage`,
                scroller: `body`,
                start: 'top top',
                end: 'top -100%',
                pin: true,
                scrub: 5,

            }

        })

        tl.from('#outerCircle', {
            opacity: 0,
            stagger: 1,
            rotate: '100deg',

            scrollTrigger: {
                trigger: `#techPage`,
                scroller: 'body',
                start: 'top top',
                end: 'top -100%',
                // pin:true,
                // markers:true,
                scrub: 3,
            }

        })

    }, []);
    return (<div id='techAnimation' className={techcss.techAnimation}>
        <div id='inner' className={techcss.innerCircle}>
        </div>
        <div id='outerCircle' className={techcss.outerCircle1}>
            <div className={techcss.imageBox}>
                <div style={{ '--i': 0 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/Html.png'} />
                </div>
                <div style={{ '--i': 1 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/CSS.png'} />
                </div>
                <div style={{ '--i': 2 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/Javascript.png'} />
                </div>

            </div>
        </div>
        <div id='outerCircle' className={techcss.outerCircle2}>
            <div className={techcss.imageBox}>
                <div style={{ '--i': 0 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/ReactNative.png'} />
                </div>
                <div style={{ '--i': 1.2 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/React.png'} />
                </div>
            </div>
        </div>
        <div id='outerCircle' className={techcss.outerCircle3}>
            <div className={techcss.imageBox}>
                <div style={{ '--i': 0.2 }} className={techcss.imgimgbox}>

                    <Image height={100} width={100} src={'/Next.png'} />
                </div>
                <div style={{ '--i': -0.8 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/Node.png'} />

                </div>
            </div>
        </div>
        <div id='outerCircle' className={techcss.outerCircle4}>

            <div className={techcss.imageBox}>
                <div style={{ '--i': 0.2 }} className={techcss.imgimgbox}>

                    <Image height={100} width={100} src={'/MongoDB.png'} />
                </div>
                <div style={{ '--i': -0.8 }} className={techcss.imgimgbox}>
                    <Image height={100} width={100} src={'/Blockchain.png'} />

                </div>
            </div>
        </div>
    </div>)
}