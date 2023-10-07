'use client'
import Nav from '@/app/components/Nav/nav'
import arvrmrcss from './ar-vr-mr.module.css'
import Image from 'next/image'
import Button from './Button'
import Button2 from './Button2'
import LocoScroll from '../../../../hooks/LocoScroll'
import { useEffect } from 'react'
import Dots from './Dots'
import gsap, { ScrollTrigger } from 'gsap/all'
export default function Page() {
    useEffect(function () {
        (function () {
            // Init
            var container = document.getElementById("container"),
                inner = document.getElementById("backimg");

            // Mouse
            var mouse = {
                _x: 0,
                _y: 0,
                x: 0,
                y: 0,
                updatePosition: function (event) {
                    var e = event || window.event;
                    this.x = e.clientX - this._x;
                    this.y = (e.clientY - this._y) * -1;
                },
                setOrigin: function (e) {
                    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
                },
                show: function () {
                    return "(" + this.x + ", " + this.y + ")";
                }
            };

            // Track the mouse position relative to the center of the container.
            mouse.setOrigin(container);

            //-----------------------------------------

            var counter = 0;
            var updateRate = 10;
            var isTimeToUpdate = function () {
                return counter++ % updateRate === 0;
            };

            //-----------------------------------------

            var onMouseEnterHandler = function (event) {
                update(event);
            };

            var onMouseLeaveHandler = function () {
                inner.style = "";
            };

            var onMouseMoveHandler = function (event) {
                if (isTimeToUpdate()) {
                    update(event);
                }
            };

            //-----------------------------------------

            var update = function (event) {
                mouse.updatePosition(event);
                updateTransformStyle(
                    (mouse.y / inner.offsetHeight / 2).toFixed(2),
                    (mouse.x / inner.offsetWidth / 2).toFixed(2)
                );
            };

            var updateTransformStyle = function (x, y) {
                var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
                inner.style.transform = style;
                inner.style.webkitTransform = style;
                inner.style.mozTransform = style;
                inner.style.msTransform = style;
                inner.style.oTransform = style;
            };

            //-----------------------------------------

            container.onmouseenter = onMouseEnterHandler;
            container.onmouseleave = onMouseLeaveHandler;
            container.onmousemove = onMouseMoveHandler;
        })();
        (function () {
            // Init
            var container = document.getElementById("container1"),
                inner = document.getElementById("backimg1");

            // Mouse
            var mouse = {
                _x: 0,
                _y: 0,
                x: 0,
                y: 0,
                updatePosition: function (event) {
                    var e = event || window.event;
                    this.x = e.clientX - this._x;
                    this.y = (e.clientY - this._y) * -1;
                },
                setOrigin: function (e) {
                    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
                },
                show: function () {
                    return "(" + this.x + ", " + this.y + ")";
                }
            };

            // Track the mouse position relative to the center of the container.
            mouse.setOrigin(container);

            //-----------------------------------------

            var counter = 0;
            var updateRate = 10;
            var isTimeToUpdate = function () {
                return counter++ % updateRate === 0;
            };

            //-----------------------------------------

            var onMouseEnterHandler = function (event) {
                update(event);
            };

            var onMouseLeaveHandler = function () {
                inner.style = "";
            };

            var onMouseMoveHandler = function (event) {
                if (isTimeToUpdate()) {
                    update(event);
                }
            };

            //-----------------------------------------

            var update = function (event) {
                mouse.updatePosition(event);
                updateTransformStyle(
                    (mouse.y / inner.offsetHeight / 2).toFixed(2),
                    (mouse.x / inner.offsetWidth / 2).toFixed(2)
                );
            };

            var updateTransformStyle = function (x, y) {
                var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
                inner.style.transform = style;
                inner.style.webkitTransform = style;
                inner.style.mozTransform = style;
                inner.style.msTransform = style;
                inner.style.oTransform = style;
            };

            //-----------------------------------------

            container.onmouseenter = onMouseEnterHandler;
            container.onmouseleave = onMouseLeaveHandler;
            container.onmousemove = onMouseMoveHandler;
        })();

    })
    useEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(`.${arvrmrcss.cards}`, {
            y: '-78%',
            scrollTrigger: {
                trigger: `.${arvrmrcss.section2}`,
                scroller: 'body',
                pin: true,
                scrub: 1,
                start: 'top 0%',
                end: 'bottom 0%',
            }
        })

        gsap.from('#h11', {
            x: 1000,
            scrollTrigger: {
                trigger: `.${arvrmrcss.section4}`,
                scroller: 'body',
                start: '0% 80%',
                end: 'bottom 80%',
                scrub: 1,
                // pin:true,
            }
        })
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(`#h12`, {
            x: -1000,
            scrollTrigger: {
                trigger: `.${arvrmrcss.section4}`,
                scroller: 'body',
                start: '0% 80%',
                end: 'bottom 80%',
                scrub: 1,
                // pin:true,
            }
        })
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(`#h13`, {
            x: 1000,
            scrollTrigger: {
                trigger: `.${arvrmrcss.section4}`,
                scroller: 'body',
                start: '0% 80%',
                end: 'bottom 80%',
                scrub: 1,
                // pin:true,
            }
        })
    })
    LocoScroll(true);
    return <>
        <div className={arvrmrcss.background}></div>
        <main data-scroll-container className={arvrmrcss.main}>
            {/* <Nav /> */}
            <section id='container' className={arvrmrcss.section1}>
                <div className={arvrmrcss.container1 + ' ' + arvrmrcss.container}>
                    <img id='backimg' src='/vr-people.jpg' />
                    <div className={arvrmrcss.text}>
                        <h1>Journey into the tech of tomorrow</h1>
                        <p>Step into the future with our cutting-edge technology solutions tailored for your business needs.</p>
                    </div>
                    <div className={arvrmrcss.buttonLeft}></div>
                    <div className={arvrmrcss.buttonRight}></div>
                </div>
            </section>
            <section className={arvrmrcss.section2}>
                <div className={arvrmrcss.container2}>
                    <div className={arvrmrcss.text}>
                        <h1>Crafting the future with our innovative tech solutions & services</h1>
                        <p>We're a team of technology enthusiasts committed to delivering exceptional digital solutions that align with your business goals.</p>
                        <div className={arvrmrcss.textButtons}>
                            <Button color="white" text="About us" />
                            <Button2 color="#B14125" text="Meet the team" />
                        </div>

                    </div>
                    <Dots />
                    <div className={arvrmrcss.cards}>
                        <div className={arvrmrcss.card}></div>
                        <div className={arvrmrcss.card}></div>
                        <div className={arvrmrcss.card}></div>
                        <div className={arvrmrcss.card}></div>
                    </div>
                </div>
            </section>
            <section className={arvrmrcss.section3}>
                <div id='container1' className={arvrmrcss.container3 + ' ' + arvrmrcss.container}>
                    <img id='backimg1' src='/sec3orbs.webp' />
                    <div className={arvrmrcss.textBox}>
                        <h1>Discover innovative to help you grow</h1>
                        <Button text="Explore" color="white" />
                    </div>
                </div>
            </section>
            <section className={arvrmrcss.section4}>
                <div className={arvrmrcss.sec4Img}>
                    <img height={500} width={500} src='/sec4img.webp' />
                </div>
                <h1 id='h11' className={arvrmrcss.h11}>Dive into our</h1>
                <h1 id='h12' className={arvrmrcss.h12}>revolutionary</h1>
                <h1 id='h13' className={arvrmrcss.h13}>technology</h1>
            </section>
            <section className={arvrmrcss.section5}>
                <div className={arvrmrcss.sec5inner}>
                    <h1>Experience the new digital era with our comprehensive tech services & solutions</h1>
                </div>
                <div className={arvrmrcss.line}></div>
                <div className={arvrmrcss.sec5innerbottom}>
                    <img src='/1.jpg' />
                    <h1>Innovative & <br />expert team</h1>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
            <section className={arvrmrcss.section6}>
                <div className={arvrmrcss.container}>
                    <div className={arvrmrcss.containerimg}>
                        <img src='/vr-people.jpg' />
                    </div>
                </div>
                <div className={arvrmrcss.container}>
                    <div className={arvrmrcss.containerimg}>
                        <img src='/vr-girl.jpg' />
                    </div>
                </div>
            </section>

        </main>
    </>
}