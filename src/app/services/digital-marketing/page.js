'use client'
import Footer from "@/app/components/Footer/Footer";
import Button from "./Button";
import DigitalNav from "./DigitalNav";
import digitalcss from './digitalcss.module.css'
import LocoScroll from "../../../../hooks/LocoScroll";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function DigitalMarketing() {
    LocoScroll(true);


    return (<div>
        {/* <DigitalNav /> */}
        <main className={digitalcss.main}>
            <section className={digitalcss.section1}>
                <video autoPlay loop muted src="https://canesdigital.de/wp-content/uploads/2023/09/Design-ohne-Titel-12-1.mp4">
                </video>
                <div className={digitalcss.text}>
                    <p>Welcome <br /> to the premier destination for
                        <br />
                        Digital Marketing and Marketers in Ranchi!</p>
                    <div className={digitalcss.buttondiv + ' ' + digitalcss.sec1button}>
                        <button><span>Get a free consultation</span></button>
                    </div>
                </div>
            </section>
            <div data-scroll-container>

                <section className={digitalcss.section2}>
                    {/* Carousel */}

                    <p>AS SEEN IN</p>
                    <div className={digitalcss.carousalContainer}>
                        <div className={digitalcss.carousalImagesContainer}>
                            <img src="/1.jpg" alt="1" />
                            <img src="/2.jpg" alt="1" />
                            <img src="/3.jpg" alt="1" />
                            <img src="/4.jpg" alt="1" />
                            <img src="/5.jpg" alt="1" />
                        </div>
                        <div className={digitalcss.carousalImagesContainer}>
                            <img src="/1.jpg" alt="1" />
                            <img src="/2.jpg" alt="1" />
                            <img src="/3.jpg" alt="1" />
                            <img src="/4.jpg" alt="1" />
                            <img src="/5.jpg" alt="1" />
                        </div>
                    </div>

                    <p>UNDERSTANDING THE CHALLENGES OF THE CONSTRUCTION INDUSTRY</p>

                    <h2>How we solve the biggest problems
                        in the construction industry</h2>
                    <div className={digitalcss.cardsContainer}>
                        <div className={digitalcss.cardContainer1}>


                            <div className={digitalcss.card}>
                                <img src="/customer.svg" alt="cardImage" />
                                <h2>Difficulties in attracting customers</h2>
                                <p>Without a targeted digital strategy that prioritizes your expertise and quality, you&apos;ll miss out on potential business</p>

                            </div>
                        </div>
                        <div className={digitalcss.cardContainer2}>


                            <div className={digitalcss.card}>
                                <img src="/customer.svg" alt="cardImage" />
                                <h2>Difficulties in attracting customers</h2>
                                <p>Without a targeted digital strategy that prioritizes your expertise and quality, you&apos;ll miss out on potential business</p>

                            </div>
                        </div>
                        <div className={digitalcss.cardContainer}>


                            <div className={digitalcss.card}>
                                <img src="/customer.svg" alt="cardImage" />
                                <h2>Difficulties in attracting customers</h2>
                                <p>Without a targeted digital strategy that prioritizes your expertise and quality, you&apos;ll miss out on potential business</p>
                            </div>

                        </div>
                        <div className={digitalcss.cardContainer}>


                            <div className={digitalcss.card}>
                                <img src="/customer.svg" alt="cardImage" />
                                <h2>Difficulties in attracting customers</h2>
                                <p>Without a targeted digital strategy that prioritizes your expertise and quality, you&apos;ll miss out on potential business</p>

                            </div>
                        </div>
                        <div className={digitalcss.cardContainer}>

                            <div className={digitalcss.card}>
                                <img src="/customer.svg" alt="cardImage" />
                                <h2>Difficulties in attracting customers</h2>
                                <p>Without a targeted digital strategy that prioritizes your expertise and quality, you&apos;ll miss out on potential business</p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className={digitalcss.section3}>
                    <div className={digitalcss.secdiv}>

                        <div className={digitalcss.sec3left}>
                            <p>SOLVE YOUR CONSTRUCTION CHALLENGES</p>
                            <h2><span>Your specialist for SEO in the</span>
                                <br />
                                <span> construction industry</span></h2>
                            <div className={digitalcss.sec3leftinner}>
                                <div className={digitalcss.sec3leftinnerinner}>
                                    <h2>CUSTOMER ACQUISITION</h2>
                                    <p>Finding new, qualified customers is time-consuming and costly. With our specialized SEO strategy for the construction industry, you can expand your reach and attract customers who are already looking for your services. In this way, you increase your sales without wastage.</p>
                                </div>
                                <div className={digitalcss.sec3leftinnerinner}>
                                    <h2>FLUCTUATION OF THE ORDER SITUATION</h2>
                                    <p>An unpredictable flow of orders can put a financial strain on your business. Canes Digital develops an SEO strategy for you that specifically addresses customers who are looking for your services. In this way, you stabilize your order situation and can plan more efficiently.</p>
                                </div>
                            </div>
                            <div className={digitalcss.buttondiv + ' ' + digitalcss.sec3button}>
                                <button><span>Free consultation</span></button>
                            </div>
                        </div>
                        <div className={digitalcss.sec3right}>
                            <div className={digitalcss.sec3rightinner}>
                                <img src="/customer.svg" />
                                <img src="/customer.svg" />
                                <img src="/customer.svg" />
                            </div>
                        </div>
                    </div>

                </section>
                
            </div>

        </main>
          
        <div className={digitalcss.section7}><Footer /></div>
    </div>)
}