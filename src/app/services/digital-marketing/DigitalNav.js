'use client'
import navcss from './navcss.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import MenuMobile from '@/app/components/MobileMenu/MenuMobile';
import { useMediaQuery } from 'react-responsive';
export default function DigitalNav() {
    const isLaptop=useMediaQuery({
        query:'(max-width:1200px)'
    })
    useEffect(function () {

        if (window.location.pathname === '/services/digital-marketing' && !isLaptop) {


            window.addEventListener('scroll', function (e) {
                // print "false" if direction is down and "true" if up
                // console.log(this.oldScroll > this.scrollY);
                // console.log(document.getElementById('nav').children[0].childNodes[1].childNodes);
                const nav = document.getElementById('nav');
                const button = document.getElementById('button');
                if (scrollY > window.innerHeight) {
                    nav.style.backgroundColor = 'white';
                    nav.children[0].childNodes[1].childNodes.forEach(function (li) {
                        li.children[0].style.color = 'black';
                        // console.log(li.children[0]);
                    });
                    document.getElementById('logo').style.filter = 'invert(1)';
                    button.style.borderColor = "black";
                    button.style.color = "black";
                    button.addEventListener('mouseout', function () {
                        button.style.color = "black";
                        button.style.backgroundColor = "transparent";
                    })
                    button.addEventListener('mouseover', function () {
                        button.style.backgroundColor = "black";
                        button.style.color = "white";
                    })

                }
                else {
                    nav.style.backgroundColor = 'transparent';
                    nav.children[0].childNodes[1].childNodes.forEach(function (li) {
                        li.children[0].style.color = 'white';
                        // console.log(li.children[0]);
                    });
                    document.getElementById('logo').style.filter = 'invert(0)';

                    button.style.borderColor = "white";
                    button.style.color = "white";
                    button.addEventListener('mouseout', function () {
                        button.style.color = "white";
                        button.style.backgroundColor = "transparent";
                    })
                    button.addEventListener('mouseover', function () {
                        button.style.color = "black";
                        button.style.backgroundColor = "white";
                    })
                }
                var scrollingUp = this.oldScroll > this.scrollY;
                if (nav && !isLaptop) {

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

            <div className={navcss.logo}><a href='/'><Image id='logo' height={100} width={100} src='/logo.png' alt="logo" /></a></div>


            <ul className={navcss.menu}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li className={navcss.servicestab}>
                    <a href='/services'>Services</a>
                    <div className={navcss.submenu}>
                        <ul>
                            <a href="/services/app-dev">App Development</a>
                            <a href="/services/web-dev">Web Development</a>
                        </ul>
                        <ul>
                            <a href="/services/ui-ux">UI/UX</a>
                            <a href="/services/digital-marketing">Digital Marketing</a>
                            <a href="/services/adshooting-photography">Photography</a>

                        </ul>
                    </div>
                </li>

                <li className={navcss.trendstab}>
                    <a href='/trends'>Web 3.0 & trends</a>
                    <div className={navcss.submenu}>

                        <ul>
                            <a href='/trends/ai-ml'>AI/ML</a>
                            <a href='/trends/blockchain'>Blockchain</a>
                        </ul>
                    </div>
                </li>
                <li className={navcss.threedtechtab}>
                    <a href='/3dtech'>3D reality</a>
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
                {/* <li>
                <a>Get In Touch</a>
            </li> */}

            </ul>
            <a href='/contact'> <button id='button'>Get In Touch</button></a>
        </div>
        {/* <div id="menumobile" className={navcss.menumobile}>

            <div className={navcss.logomobile}><Image height={100} width={100} src='/logo.png' alt="logo" /></div>
            <div className={navcss.menuicon}>

                <img className={navcss.menubar} id="menubar" onClick={function () {
                    document.getElementById("menuclose").style.display = "block";
                    document.getElementById("menubar").style.display = "none";
                    document.getElementById("menumobile").style.transform = "translate(-1px)"
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
                            <li><a href='/3dtech/ar-vr-mr'>AR/VR/MR</a></li>
                            <li><a href='/3dtech/immersive-audio'>Immersive Audio</a></li>
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
        </div> */}
        <MenuMobile />
    </nav>
    )
}