'use client'
import navcss from './navcss.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MenuMobile from '@/app/components/MobileMenu/MenuMobile';
import { useMediaQuery } from 'react-responsive';
export default function AdNav() {
    const path = usePathname();
    const isLaptop = useMediaQuery({
        query: '(max-width:1200px)'
    })
    useEffect(function () {
        console.log(path);

        if (path === '/services/adshooting-photography' && !isLaptop) {

            window.addEventListener('scroll', function (e) {
                // print "false" if direction is down and "true" if up
                // console.log(this.oldScroll > this.scrollY);
                var scrollingUp = this.oldScroll > this.scrollY;
                var nav = document.getElementById('nav');
                if (nav) {

                    if (!scrollingUp) {
                        nav.style.top = '-12vh';
                    }
                    if (scrollingUp) {
                        nav.style.position = 'fixed';
                        nav.style.top = '0';

                    }
                }
                this.oldScroll = this.scrollY;
            })
        }

    }, [])
    return (<nav id="nav" className={navcss.navbar}>
        <div className={navcss.navinner}>

            <div className={navcss.logo}><a href='/'><Image height={100} width={100} src='/logo.png' alt="logo" /></a></div>


            <ul className={navcss.menu}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li className={navcss.servicestab}>
                    <a>Services</a>
                    <div className={navcss.submenu}>
                        <ul>
                            <a href="/services/app-dev">App Development</a>
                            <a href="/services/web-dev">Web Development</a>
                            <a href='/services/bpo'>BPO</a>
                        </ul>
                        <ul>

                            <a href="/services/ui-ux">UI/UX</a>
                            <a href="/services/digital-marketing">Digital Marketing</a>
                            <a href="/services/adshooting-photography">Photography</a>
                        </ul>
                    </div>
                </li>

                <li className={navcss.trendstab}>
                    <a>Web 3.0 & trends</a>
                    <div className={navcss.submenu}>

                        <ul>
                            <a href='/trends/ai-ml'>AI/ML</a>
                            <a href='/trends/blockchain'>Blockchain</a>
                        </ul>
                    </div>
                </li>
                <li className={navcss.threedtechtab}>
                    <a>3D reality</a>
                    <div className={navcss.submenu}>
                        <ul>
                            <a href='/3dtech/ar-vr-mr'>AR/VR/MR</a>
                            <a href='/3dtech/immersive-audio'>Immersive Audio</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href='/our-clients'>Our Clients</a>
                </li>
                <li>
                    <a href='/disclaimer'>Disclaimer</a>
                </li>

                {/* <li>
                <a>Get In Touch</a>
            </li> */}

            </ul>
            <Link id='get-in-touch-btn' href='/contact'><button className={navcss.button}>Get In Touch</button></Link>
        </div>
        {/* <div id="menumobile" className={navcss.menumobile}>

            <div className={navcss.logomobile}><Image height={100} width={100} src='https://zimed.netlify.app/assets/images/logo-1-1.png' alt="logo" /></div>
            <div className={navcss.menuicon}>

                <img className={navcss.menubar} id="menubar" onClick={function () {
                    document.getElementById("menuclose").style.display = "block";
                    document.getElementById("menubar").style.display = "none";
                    document.getElementById("menumobile").style.transform = "translate(0)"
                }} src="/menu.svg" alt="menu" />
            </div>
            <div className={navcss.menuicon}>

                <img id="menuclose" className={navcss.menuclose}
                    onClick={function () {
                        document.getElementById("menubar").style.display = "block";
                        document.getElementById("menuclose").style.display = "none";
                        document.getElementById("menumobile").style.transform = "translate(-50dvw)"

                    }} src="/close.svg" alt="close" />
            </div>

            <ul className={navcss.menulist}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li className={navcss.servicestab}>

                    <span>Services</span>

                    <div className={navcss.submenu}>
                        <ul>
                            <li><a href='/services/app-dev'>App Development</a></li>
                            <li><a href='/services/web-dev'>Web Development</a></li>
                            <li><a href='/services/ui-ux'>UI/UX Design</a></li>
                            <li><a href='/services/digital-marketing'>Digital Marketing</a></li>
                            <li><a href='/services/adshooting-photography'>Ad/Photography</a></li>
                        </ul>
                    </div>
                </li>

                <li className={navcss.trendstab}>
                    <span>Web 3.0 & trends</span>
                    <div className={navcss.submenu}>
                        <ul>
                            <li><a href='/trends/ai-ml'>AI/ML</a></li>
                            <li><a href='/trends/blockchain'>Blockchain</a></li>
                        </ul>
                    </div>
                </li>
                <li className={navcss.threedtechtab}>
                    <span>3D reality</span>
                    <div className={navcss.submenu}>
                        <ul>
                            <li><a href='/3dtech/ar-vr-mr'>AR/VR/MR</a></li>
                            <li><a href='/3dtech/immersive-audio'>Immersive Audio</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href='/our-clients'>Our Clients</a>
                </li>
                <li>
                    <a href='/disclaimer'>Disclaimer</a>
                </li>
               

            </ul>
        </div> */}
        <MenuMobile />
    </nav>
    )
}