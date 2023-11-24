'use client'
import webcss from './webcss.module.css'
import LocoScroll from '../../../../hooks/LocoScroll';
import { useEffect, useState } from 'react';
import Nav from '@/app/components/Nav/nav';
import Footer from '@/app/components/Footer/Footer';
export default function WebDevPage() {
    // const [width, setWidth] = useState();
    LocoScroll(true);
    // useEffect(function () {
    //     setWidth(window.innerWidth)
    //     if (width > 900) {

    //         document.getElementById('body').style.overflowY = "hidden"
    //     }
    //     window.addEventListener('resize', function () {
    //         setWidth(window.innerWidth);
    //     })
    // })
    useEffect(function () {
        var carouselInner = document.querySelectorAll(`.${webcss.carouselInner}`)
        var backButton = document.querySelector(`.${webcss.backButton}`);
        var nextButton = document.querySelector(`.${webcss.nextButton}`)
        backButton.addEventListener('click', function () {
            slideBack();
        })
        nextButton.addEventListener('click', function () {
            nextSlide();
        })

        function slideBack() {
            carouselInner[0].style.transform = "translate(-100%)";
            carouselInner[1].style.transform = "translate(-100%)";
        }
        function nextSlide() {
            carouselInner[0].style.transform = "translate(100%)";
            carouselInner[1].style.transform = "translate(100%)";
        }
    })
    return (
        <>
            <Nav />
            <div className={webcss.homePage}>
                <div className={webcss.navbar}>

                </div>
                <section className={webcss.section1}>

                    <div className={webcss.text}>

                        <h1 >Website Developers <br /> in Ranchi</h1>
                        <p >Working with brands all over the world</p>
                    </div>
                    <div className={webcss.rectcontainer}>

                        <img data-scroll data-scroll-speed='-0.2' className={webcss.image2} src='https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/6440121812d7d0053d768527_Big_SplashColor-p-1080.png' />
                        <img className={webcss.image1} src='https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/64400ef540315397c64f31eb_Big_CartoonMac%20(1).png' />
                        <div data-scroll data-scroll-speed='-0.05' className={webcss.rect1}>
                        </div>
                    </div>
                    <p className={webcss.leadingp}>Leading digital agency with solid design and development expertise. We focus on building Webflow websites.</p>
                </section>
                <section className={webcss.section2}>
                    <div className={webcss.imagesContainer}>
                        <div className={webcss.cont}>

                            <div className={webcss.imageContainer}>
                                <img data-scroll data-scroll-speed='-0.1' src='/1.jpg' />
                            </div>
                            <div className={webcss.caption}>
                                <h2>Moon Juice</h2>
                                <p>Web Design - Development</p>
                            </div>
                        </div>
                        <div className={webcss.cont}>

                            <div className={webcss.imageContainer}>
                                <img data-scroll data-scroll-speed='-0.1' src='/2.jpg' />
                            </div>
                            <div className={webcss.caption}>
                                <h2>Moon Juice</h2>
                                <p>Web Design - Development</p>
                            </div>
                        </div>
                        <div className={webcss.cont}>

                            <div className={webcss.imageContainer}>
                                <img data-scroll data-scroll-speed='-0.1' src='/3.jpg' />
                            </div>
                            <div className={webcss.caption}>
                                <h2>Moon Juice</h2>
                                <p>Web Design - Development</p>
                            </div>
                        </div>
                        <div className={webcss.cont}>

                            <div className={webcss.imageContainer}>
                                <img data-scroll data-scroll-speed='-0.1' src='/4.jpg' />
                            </div>
                            <div className={webcss.caption}>
                                <h2>Moon Juice</h2>
                                <p>Web Design - Development</p>
                            </div>
                        </div>

                    </div>
                </section>
                <section className={webcss.section3}>
                    <h2>Info in pills</h2>
                    <div className={webcss.carouselContainer}>
                        <div className={webcss.backButton}></div>
                        <div className={webcss.nextButton}></div>
                        <div className={webcss.carousel}>
                            <div className={webcss.carouselInner}>

                                <div className={webcss.item}>
                                    <img src='/1.jpg' />
                                    <p>When is my brand new website available?</p>
                                </div>
                                <div className={webcss.item}>
                                    <img src='/2.jpg' />
                                    <p>When is my brand new website available?</p>
                                </div>
                                <div className={webcss.item}>
                                    <img src='/3.jpg' />
                                    <p>When is my brand new website available?</p>
                                </div>
                                <div className={webcss.item}>
                                    <img src='/4.jpg' />
                                    <p>When is my brand new website available?</p>
                                </div>

                            </div>
                            <div className={webcss.carouselInner}>

                                <div className={webcss.item}>
                                    <img src='/1.jpg' />
                                    <p>When is my brand new website available?</p>
                                </div>
                                <div className={webcss.item}>
                                    <img src='/2.jpg' />
                                    <p>When is my brand new website available?</p>
                                </div>
                                <div className={webcss.item}>
                                    <img src='/3.jpg' />
                                    <p>When is my brand new website available?</p>
                                </div>
                                <div className={webcss.item}>
                                    <img src='/4.jpg' />
                                    <p>When is my brand new website available?</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className={webcss.section4}>
                    <div className={webcss.sec4image}></div>
                    <div className={webcss.sec4text}>
                        <h2>Let&apos;s build <br /> something great<br /> together</h2>
                        <p>Whether it&apos;s a new venture or an exciting one!</p>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}