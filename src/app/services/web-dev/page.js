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
                        <p >Unlock the Digital Potential of Your Ideas with Expert Website Developers and Designers in Ranchi!</p>
                    </div>
                    <div className={webcss.rectcontainer}>

                        <div data-scroll data-scroll-speed='-0.05' className={webcss.rect1}>
                            <img data-scroll data-scroll-speed='-0.2' className={webcss.image2} src='https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/6440121812d7d0053d768527_Big_SplashColor-p-1080.png' />
                            <img className={webcss.image1} src='https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/64400ef540315397c64f31eb_Big_CartoonMac%20(1).png' />
                        </div>
                    </div>
                    <p className={webcss.leadingp}>Welcome to Web Accuracy, your premier destination for cutting-edge website development and design services in Ranchi. Our skilled team of developers and designers is dedicated to turning your visions into stunning and functional online experiences.</p>
                </section>
                <section className={webcss.section2}>
                    <div className={webcss.imagesContainer}>
                        <div className={webcss.cont}>

                            <div className={webcss.imageContainer}>
                                <img data-scroll data-scroll-speed='-0.1' src='/1.jpg' />
                            </div>
                            <div className={webcss.caption}>
                                <h2>🚀 What We Offer</h2>
                                <p> At Web Accuracy, we bring your ideas to life through innovative website development that utilizes the latest JavaScript languages and incorporates the most up-to-date technologies. Our experienced professionals are well-versed in crafting websites that not only look captivating but also provide seamless user experiences.</p>
                            </div>
                        </div>
                        <div className={webcss.cont}>

                            <div className={webcss.imageContainer}>
                                <img data-scroll data-scroll-speed='-0.1' src='/2.jpg' />
                            </div>
                            <div className={webcss.caption}>
                                <h2>🌐 Custom Solutions</h2>
                                <p>We understand that every project is unique. That&apos;s why our team takes a tailored approach to each website development endeavor. From responsive design that adapts flawlessly to any device, to interactive elements that engage and captivate your audience - we&apos;ve got it all covered.</p>
                            </div>
                        </div>
                        <div className={webcss.cont}>

                            <div className={webcss.imageContainer}>
                                <img data-scroll data-scroll-speed='-0.1' src='/3.jpg' />
                            </div>
                            <div className={webcss.caption}>
                                <h2>⚙️ Latest Technologies</h2>
                                <p>Staying ahead in the digital landscape is crucial, and our developers are well-acquainted with the latest trends and technologies. From progressive web apps to dynamic single-page applications, we ensure your website is equipped with the features that modern users demand.</p>
                            </div>
                        </div>
                        <div className={webcss.cont}>

                            <div className={webcss.imageContainer}>
                                <img data-scroll data-scroll-speed='-0.1' src='/4.jpg' />
                            </div>
                            <div className={webcss.caption}>
                                <h2>🎨 Design Excellence</h2>
                                <p>A visually appealing website is a powerful tool to leave a lasting impression. Our skilled designers not only have an eye for aesthetics but also an understanding of user-centric design principles. The result? Websites that are not only beautiful but also user-friendly.</p>
                            </div>
                        </div>
                        <div className={webcss.cont}>

                            <div className={webcss.imageContainer}>
                                <img data-scroll data-scroll-speed='-0.1' src='/4.jpg' />
                            </div>
                            <div className={webcss.caption}>
                                <h2>📈 Your Success, Our Priority</h2>
                                <p>At Web Accuracy, we measure our success by the success of our clients. We work closely with you to understand your goals, preferences, and requirements, ensuring that the final product aligns perfectly with your vision.</p>
                            </div>
                        </div>
                        <div className={webcss.cont}></div>

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
                        <h2>Ready to elevate your online presence?  </h2>
                        <p>Partner with Web Accuracy and experience website development like never before.Contact us today to get started!</p>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}