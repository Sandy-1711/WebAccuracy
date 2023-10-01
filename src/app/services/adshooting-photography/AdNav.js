'use client'
import navcss from './navcss.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function AdNav() {
    useEffect(function () {

        if (window.location.pathname === '/services/adshooting-photography' && window.innerWidth > 1200) {

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

            <div className={navcss.logo}><Link href='/'><Image height={100} width={100} src='/logo.png' alt="logo" /></Link></div>


            <ul className={navcss.menu}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li className={navcss.servicestab}>
                    <Link href='/services'>Services</Link>
                    <div className={navcss.submenu}>
                        <ul>
                            <Link href="/services/app-dev">App Development</Link>
                            <Link href="/services/web-dev">Web Development</Link>
                        </ul>
                        <ul>

                            <a href="/services/ui-ux">UI/UX</a>
                            <Link href="/services/digital-marketing">Digital Marketing</Link>
                            <Link href="/services/adshooting-photography">Photography</Link>
                        </ul>
                    </div>
                </li>

                <li className={navcss.trendstab}>
                    <Link href='/trends'>Web 3.0 & trends</Link>
                    <div className={navcss.submenu}>

                        <ul>
                            <Link href='/trends/ai-ml'>AI/ML</Link>
                            <Link href='/trends/blockchain'>Blockchain</Link>
                        </ul>
                    </div>
                </li>
                <li className={navcss.threedtechtab}>
                    <Link href='/3dtech'>3D reality</Link>
                    <div className={navcss.submenu}>
                        <ul>
                            <Link href='/3dtech/ar'>AR</Link>
                            <Link href='/3dtech/vr'>VR</Link>
                            <Link href='/3dtech/mr'>MR</Link>
                            <Link href='/3dtech/dolby-atmos'>Dolby Atmos</Link>
                        </ul>
                    </div>
                </li>
                <li>
                    <a>Our Clients</a>
                </li>
                <li>
                    <a>Pricing</a>
                </li>
                {/* <li>
                <a>Get In Touch</a>
            </li> */}

            </ul>
            <button>Get In Touch</button>
        </div>
        <div id="menumobile" className={navcss.menumobile}>

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

                    <a>Services <i class="fa-solid fa-chevron-right"></i></a>

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
                    <a>Web 3.0 & trends <i class="fa-solid fa-chevron-right"></i></a>
                    <div className={navcss.submenu}>

                        <ul>
                            <li><a href='/trends/ai-ml'>AI/ML</a></li>
                            <li><a href='/trends/blockchain'>Blockchain</a></li>
                        </ul>
                    </div>
                </li>
                <li className={navcss.threedtechtab}>
                    <a>3D reality <i class="fa-solid fa-chevron-right"></i></a>
                    <div className={navcss.submenu}>
                        <ul>
                            <li><a href='/3dtech/ar'>AR</a></li>
                            <li><a href='/3dtech/vr'>VR</a></li>
                            <li><a href='/3dtech/mr'>MR</a></li>
                            <li><a href='/3dtech/dolby-atmos'>Dolby Atmos</a></li>
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
        </div>
    </nav>
    )
}