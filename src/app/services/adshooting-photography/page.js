'use client'

import { useLayoutEffect } from "react";
import adcss from './adcss.module.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "./Button";
import Footer from "@/app/components/Footer/Footer";
import LocoScroll from "../../../../hooks/LocoScroll";
import Image from "next/image";
export default function Adshootingpage() {
    LocoScroll(true);

    useLayoutEffect(function () {

        // window.addEventListener('mousemove', function (e) {
        //     let x = e.clientX + 10;
        //     let y = e.clientY + 10;
        //     gsap.to(`.${adcss.mouseCursor}`, {
        //         x: x,
        //         y: y,
        //     })
        // })
        // document.getElementById('body').style.overflowY = "hidden"
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();
        gsap.from(`.${adcss.sec1Text} p span`, {
            delay: 0.2,
            opacity: 0,
            duration: '1',
            stagger: '0.05',
        })
        if (window.innerWidth > 768) {

            gsap.from(`.${adcss.sec1Image}`, {
                transform: 'scale(0.8)',
                scrollTrigger: {
                    scroller: 'body',
                    trigger: `.${adcss.sec1Image}`,
                    start: 'top 75%',
                    end: 'top 25%',
                    scrub: true,
                }
            })
            gsap.to(`.${adcss.sec7ImageBox}`, {
                scale: 0.7,
                y: 100,
                scrollTrigger: {
                    scroller: 'body',
                    trigger: `.${adcss.section7}`,
                    start: 'top top',
                    end: 'top -50%',
                    // markers: true,
                    pin: true,
                    scrub: 2,
                }
            })
        }

        if (window.innerWidth > 1200) {

            gsap.to(`.${adcss.fixbutton}`, {
                opacity: 0,
                scrollTrigger: {
                    scroller: 'body',
                    trigger: `.${adcss.sec1Image}`,
                    start: 'top 75%',
                    end: 'top 50%',
                    scrub: true,
                }
            })

        }
        gsap.to(`.${adcss.sec7ImageBox} h2`, {
            opacity: 0,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${adcss.section7}`,
                start: 'top top',
                end: 'top -10%',
                // markers: true,
                // pin: true,
                scrub: 2,
            }
        })

    })
    return (<main className={adcss.main} >

        {/* <div className={adcss.mouseCursor}></div> */}
        <section className={adcss.section1}>
            <div data-scroll data-scroll-speed='-1' className={adcss.sec1Text}>
                <p>

                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span> </span>
                    <span>t</span>
                    <span>o</span>
                    <span> </span>
                    <span>O</span>
                    <span>u</span>
                    <span>r</span>
                    <span> </span>
                    <span>A</span>
                    <span>d</span>
                    <span> </span>
                    <span>S</span>
                    <span>h</span>
                    <span>o</span>
                    <span>o</span>
                    <span>t</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                    <span> </span>
                    <span>and</span>
                    <span> </span>
                    <span>P</span>
                    <span>h</span>
                    <span>o</span>
                    <span>t</span>
                    <span>o</span>
                    <span>g</span>
                    <span>r</span>
                    <span>a</span>
                    <span>p</span>
                    <span>h</span>
                    <span>y</span>
                    <span> </span>
                    <span>S</span>
                    <span>e</span>
                    <span>r</span>
                    <span>v</span>
                    <span>i</span>
                    <span>c</span>
                    <span>e</span>
                    <span>s</span>
                    <span> </span>
                    <span>i</span>
                    <span>n</span>
                    <span> </span>
                    <span>R</span>
                    <span>a</span>
                    <span>n</span>
                    <span>c</span>
                    <span>h</span>
                    <span>i</span>
                    <span>!</span>
                </p>
                {/* <button>CREATIVE SERVICES &rarr;</button> */}
            </div>
            <Button className={adcss.fixbutton} text="Creative services" />
            <div className={adcss.sec1Image}>
                <Image height={5000} width={5000} src="/4.jpg" />
            </div>
        </section>
        <section className={adcss.section2}>
            <div className={adcss.sec2Text}>
                <h2>Let&apos;s create amazing <br /> video content</h2>
                <p>CO-DA Studios is a digital media content production company specializing in marketing content creation for brands & individuals. Providing graphic design, video production, photography, and animation that seek to inspire your brand&apos;s clientele.</p>
                <Button text="Watch our reel " />

            </div>
        </section>
        <section id="section3" className={adcss.section3}>
            {/* <div className={adcss.secOuter}> */}


            <div className={adcss.secInner}>
                <div className={adcss.sec3InLeft}>
                    <p>
                        <span>V</span>
                        <span>I</span>
                        <span>D</span>
                        <span>E</span>
                        <span>O</span>
                        <span> </span>
                        <span>P</span>
                        <span>R</span>
                        <span>O</span>
                        <span>D</span>
                        <span>U</span>
                        <span>C</span>
                        <span>T</span>
                        <span>I</span>
                        <span>O</span>
                        <span>N</span>
                    </p>

                    <p>The world of social media is transitioning to video. CO-DA Studios is here to make sure your brand is at the forefront of that change.</p>
                </div>
                <div className={adcss.sec3InRight}>
                    <Image height={1000} width={1000} src="https://i0.wp.com/co-dastudios.com/wp-content/uploads/2022/12/Video-2048x2048.jpg" />
                </div>
            </div>

            {/* </div> */}

        </section>
        <section id="section4" className={adcss.section4}>
            <div className={adcss.secInner}>
                <div className={adcss.sec3InLeft}>
                    <p>
                        <span>V</span>
                        <span>I</span>
                        <span>D</span>
                        <span>E</span>
                        <span>O</span>
                        <span> </span>
                        <span>P</span>
                        <span>R</span>
                        <span>O</span>
                        <span>D</span>
                        <span>U</span>
                        <span>C</span>
                        <span>T</span>
                        <span>I</span>
                        <span>O</span>
                        <span>N</span>
                    </p>

                    <p>The world of social media is transitioning to video. CO-DA Studios is here to make sure your brand is at the forefront of that change.</p>
                </div>
                <div className={adcss.sec3InRight}>
                    <Image height={1000} width={1000} src="https://i0.wp.com/co-dastudios.com/wp-content/uploads/2022/12/Video-2048x2048.jpg" />
                </div>
            </div>
        </section>
        <section id="section5" className={adcss.section5}>
            <div className={adcss.secInner}>
                <div className={adcss.sec3InLeft}>
                    <p>
                        <span>V</span>
                        <span>I</span>
                        <span>D</span>
                        <span>E</span>
                        <span>O</span>
                        <span> </span>
                        <span>P</span>
                        <span>R</span>
                        <span>O</span>
                        <span>D</span>
                        <span>U</span>
                        <span>C</span>
                        <span>T</span>
                        <span>I</span>
                        <span>O</span>
                        <span>N</span>
                    </p>

                    <p>The world of social media is transitioning to video. CO-DA Studios is here to make sure your brand is at the forefront of that change.</p>
                </div>
                <div className={adcss.sec3InRight}>
                    <Image height={1000} width={1000} src="https://i0.wp.com/co-dastudios.com/wp-content/uploads/2022/12/Video-2048x2048.jpg" />
                </div>
            </div>
        </section>
        <section className={adcss.section6}>
            <div className={adcss.sec6Inner}>
                <div className={adcss.sec6Text}>
                    <h2>We capture your vision</h2>
                    <p>Looking to shoot a big-budget commercial or maybe just a short social video? CO-DA Studios has you covered with our team of talented creatives, and film industry professionals to take on productions of any size. We are the creative team you partner with to make your vision a reality.</p>
                </div>
                <div className={adcss.imagesbox}>
                    <div className={adcss.imagebox}>
                        <div className={adcss.imageboxtext}>

                            <h2>Animation</h2>
                            <p>Seamlessly looping content</p>
                        </div>
                        <Image height={1000} width={1000} src="/2.jpg" />
                    </div>
                    <div className={adcss.imagebox}>
                        <div className={adcss.imageboxtext}>

                            <h2>Animation</h2>
                            <p>Seamlessly looping content</p>
                        </div>
                        <Image height={1000} width={1000} src="/3.jpg" />
                    </div>
                    <div className={adcss.imagebox}>
                        <div className={adcss.imageboxtext}>

                            <h2>Animation</h2>
                            <p>Seamlessly looping content</p>
                        </div>
                        <Image height={1000} width={1000} src="/4.jpg" />
                    </div>
                </div>
            </div>
        </section>
        <section className={adcss.section7}>
            <h2>Talk to a creative</h2>
            <div className={adcss.sec7ImageBox}>
                <Image height={1000} width={1000} src="https://i0.wp.com/co-dastudios.com/wp-content/uploads/2023/01/Studios-SubHeader-copy-22-2.jpg" />
                <h2>Have a project in mind?</h2>
            </div>
        </section>
        <section className={adcss.footer}>
            <Footer />
        </section>
    </main>)
}