import Footer from "@/app/components/Footer/Footer";
import Button from "./Button";
import DigitalNav from "./DigitalNav";
import digitalcss from './digitalcss.module.css'
export default function digitalmarketing() {
    return (<div>
        {/* <DigitalNav /> */}
        <main className={digitalcss.main}>
            <section className={digitalcss.section1}>
                <video muted src="https://canesdigital.de/wp-content/uploads/2023/09/Design-ohne-Titel-12-1.mp4">
                </video>
                <div className={digitalcss.text}>
                    <p>Welcome <br /> to the premier destination for
                        <br />
                        Digital Marketing and Marketers in Ranchi!</p>
                    <Button
                        text="Get a free consultation"
                        bcolor="transparent"
                        tcolor="white"
                        bordercolor="white" />
                </div>
            </section>
            <section className={digitalcss.section2}>
                {/* Carousel */}

                <p>AS SEEN IN</p>
                <div className={digitalcss.carousalContainer}>
                    <div className={digitalcss.carousalImagesContainer}>
                        <img src="/1.jpg" />
                        <img src="/2.jpg" />
                        <img src="/3.jpg" />
                        <img src="/4.jpg" />
                        <img src="/5.jpg" />
                    </div>
                    <div className={digitalcss.carousalImagesContainer}>
                        <img src="/1.jpg" />
                        <img src="/2.jpg" />
                        <img src="/3.jpg" />
                        <img src="/4.jpg" />
                        <img src="/5.jpg" />
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
                        <Button
                            text={'Free consultation'}
                            bcolor="black"
                            tcolor="white"
                            bordercolor="none" />
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
            {/* <section className={digitalcss.section4}>
                <div className={digitalcss.sliderOuter}>

                    <div className={digitalcss.sec4slider}>
                        <span>build</span>
                        <span>Painter</span>
                        <span>carpenter</span>
                        <span>Electrician</span>
                        <span>Developer</span>
                        <span>build</span>
                        <span>builders</span>
                        <span>Bricklayers</span>
                        <span>Road</span>
                        <span>Pavement</span>
                    </div>
                    <div className={digitalcss.sec4slider}>
                        <span>build</span>
                        <span>Painter</span>
                        <span>carpenter</span>
                        <span>Electrician</span>
                        <span>Developer</span>
                        <span>build</span>
                        <span>builders</span>
                        <span>Bricklayers</span>
                        <span>Road</span>
                        <span>Pavement</span>
                    </div>

                </div>
            </section>
            <section className={digitalcss.section5}>
                <div className={digitalcss.sec5Outer}>

                    <div className={digitalcss.sec5inner}>

                        <p>STRATEGIC SEO SOLUTIONS FOR THE CONSTRUCTION INDUSTRY</p>
                        <h2>Where others stop, let&apos;s get started: SEO for construction</h2>
                        <p>At Canes Digital, we don&apos;t just focus on technical aspects and rankings. Our holistic SEO solutions are designed to noticeably increase your sales and conversions.</p>
                        <div className={digitalcss.list}>

                            <div className={digitalcss.listitem}>
                                <span>01.</span>
                                <div className={digitalcss.listtext}>

                                    <h2>Local SEO</h2>
                                    <p>Increase your local visibility and reach more customers in your area</p>

                                </div>
                                <div className={digitalcss.listimage}>
                                    <img src="/customer.svg" />
                                </div>
                            </div>
                            <div className={digitalcss.listitem}>
                                <span>02.</span>
                                <div className={digitalcss.listtext}>

                                    <h2>Keyword Optimization</h2>
                                    <p>Increase your local visibility and reach more customers in your area</p>

                                </div>
                                <div className={digitalcss.listimage}>
                                    <img src="/customer.svg" />
                                </div>
                            </div>
                            <div className={digitalcss.listitem}>
                                <span>03.</span>
                                <div className={digitalcss.listtext}>

                                    <h2>Content Marketing</h2>
                                    <p>Increase your local visibility and reach more customers in your area</p>

                                </div>
                                <div className={digitalcss.listimage}>
                                    <img src="/customer.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={digitalcss.sec5inner2}>
                        <p>THE PARTNER YOUR CONSTRUCTION COMPANY DESERVES</p>
                        <h2>Why Canes Digital is the best choice for your construction industry</h2>
                        <p>With years of expertise in the field of SEO and a large number of satisfied customers in the construction industry, we offer you tailor-made solutions for your challenges.</p>
                        <div className={digitalcss.signature}>

                            <img src="https://i0.wp.com/canesdigital.de/wp-content/uploads/2023/02/signature.png?w=230&ssl=1" alt="signature" />
                        </div>
                        <div className={digitalcss.button}>
                            <Button text="Free SEO Consultation" tcolor="white" bcolor="black" />
                        </div>
                        <div className={digitalcss.numbers}>
                            <div className={digitalcss.number}>
                                <h2>50<span>+</span></h2>
                                <p>Successful support for projects</p>
                            </div>
                            <div className={digitalcss.number}>
                                <h2>250<span>%</span></h2>
                                <p>Average increase in sales
                                </p>
                            </div>
                            <div className={digitalcss.number}>
                                <h2>1000<span>+</span></h2>
                                <p>Generated leads</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className={digitalcss.section6}>
                <img src="/2.jpg"/>
            </section> */}
        </main>
        <div></div>
    </div>)
}