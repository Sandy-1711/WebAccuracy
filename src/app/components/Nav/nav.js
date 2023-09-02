"use client"
import Image from "next/image"
import navcss from './navcss.module.css'
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"

export default function Nav() {

    useEffect(function () {
        if (window.innerWidth > 900) {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline();
            tl.to('#nav', {
                position: 'fixed',
                top: 0,
                y: 0,
                backgroundColor: '#272839',
                scrollTrigger: {
                    target: '#nav',
                    scroller: 'body',
                    start: '100px top',
                    end: '10px top',
                    scrub: 0.5,
                }
            })
        }
    }, [])

    return <nav id="nav" className={navcss.navbar}>

        <div className={navcss.logo}><Image height={100} width={100} src='https://zimed.netlify.app/assets/images/logo-1-1.png' /></div>
        <div className={navcss.menuicon}>

            <img className={navcss.menubar} id="menubar" onClick={function () {
                document.getElementById("menuclose").style.display = "block";
                document.getElementById("menubar").style.display = "none";
                document.getElementById("nav").style.transform = "translate(0)"
            }} src="/menu.svg" />
        </div>
        <div className={navcss.menuicon}>

            <img className={navcss.menuclose}
                onClick={function () {
                    document.getElementById("menubar").style.display = "block";
                    document.getElementById("menuclose").style.display = "none";
                    document.getElementById("nav").style.transform = "translate(-40dvw)"

                }} id="menuclose" src="/close.svg" />
        </div>

        <ul className={navcss.menu}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li className={navcss.servicestab}>
                <a href="/services">Services</a>
                <div className={navcss.submenu}>
                    <ul>
                        <li><a href='/services#app-dev'>App Development</a></li>
                        <li><a href='/services#web-dev'>Web Development</a></li>
                        <li><a href='/services#ui-ux'>UI/UX Design</a></li>
                        <li><a href='/services#digital-marketing'>Digital Marketing</a></li>
                        <li><a href='/services#adshooting-photography'>Ad shooting/Photography</a></li>
                    </ul>
                </div>
            </li>

            <li className={navcss.trendstab}>
                <a href="/trends">Web 3.0 & trends</a>
                <div className={navcss.submenu}>

                    <ul>
                        <li><a href='/trends#iot'>IOT</a></li>
                        <li><a href='/trends#ai/ml'>AI/ML</a></li>
                        <li><a href='/trends#blockchain'>Blockchain</a></li>
                    </ul>
                </div>
            </li>
            <li className={navcss.threedtechtab}>
                <a href="/3dtech">3D reality</a>
                <div className={navcss.submenu}>
                    <ul>
                        <li><a href='/3dtech#ar'>AR</a></li>
                        <li><a href='/3dtech#vr'>VR</a></li>
                        <li><a href='/3dtech#mr'>MR</a></li>
                        <li><a href='/3dtech#dolbyatmos'>Dolby Atmos</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a>Our Clients</a>
            </li>
            <li>
                <a>Pricing</a>
            </li>
            <li>
                <a>Get In Touch</a>
            </li>

        </ul>
        <button>Start Now</button>

    </nav>
}