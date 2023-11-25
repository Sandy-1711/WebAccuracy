"use client";
import Image from "next/image";
import navcss from "./navcss.module.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import Link from "next/link";
import uiux from "../../services/ui-ux/uiux.module.css";
import MenuMobile from "../MobileMenu/MenuMobile";
import { useMediaQuery } from "react-responsive";
export default function Nav() {
  const isMobile=useMediaQuery({
    query:'(max-width:500px)'
  })
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");
  useEffect(
    function () {
      
      const path = window.location.pathname;

      if (path === "/services/app-dev") {
        setColor("transparent");
      } else if (path === "/services/ui-ux") {
        setColor("black");
      } else if (path === "/services/adshooting-photography") {
        // setColor('black');
        document.getElementById("nav").style.backgroundColor = "black";
        document.getElementById("nav").style.zIndex = "999";
      } else {
        setColor("#272839");
      }
      if (!isMobile) {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();
        tl.to("#nav", {
          position: "fixed",
          top: 0,
          y: 0,
          backgroundColor: `${color}`,
          scrollTrigger: {
            target: "#nav",
            scroller: "body",
            start: "100px top",
            end: "10px top",
            scrub: 0.5,
          },
        });
      }
    },
    [color]
  );

  return (
    <nav id="nav" className={navcss.navbar + " " + uiux.navbar}>
      <div className={navcss.navinner}>
        <div className={navcss.logo}>
          <a href="/">
            <Image height={100} width={100} src="/logo.png" alt="logo" />
          </a>
        </div>

        <ul className={navcss.menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li className={navcss.servicestab}>
            <a href="/services">Services</a>
            <div className={navcss.submenu}>
              <ul>
                <a href="/services/app-dev">App Development</a>
                <a href="/services/web-dev">Web Development</a>
                <a href="/services/bpo">BPO</a>
              </ul>
              <ul>
                <a href="/services/ui-ux">UI/UX</a>
                <a href="/services/digital-marketing">Digital Marketing</a>
                <a href="/services/adshooting-photography">Photography</a>
              </ul>
            </div>
          </li>

          <li className={navcss.trendstab}>
            <a href="/trends">Web 3.0 & trends</a>
            <div className={navcss.submenu}>
              <ul>
                <a href="/trends/ai-ml">AI/ML</a>
                <a href="/trends/blockchain">Blockchain</a>
              </ul>
            </div>
          </li>
          <li className={navcss.threedtechtab}>
            <a href="/3dtech">3D reality</a>
            <div className={navcss.submenu}>
              <ul>
                <a href="/3dtech/ar-vr-mr">AR/VR/MR</a>
                {/* <a href="/3dtech/immersive-audio">Immersive Audio</a> */}
                <a href="/3dtech/immersive">Immersive Audio</a>
              </ul>
            </div>
          </li>
          <li>
            <a href="/our-clients">Our Clients</a>
          </li>
          <li>
            <a href="/disclaimer">Disclaimer</a>
          </li>
          {/* <li>
                    <a>Get In Touch</a>
                </li> */}
        </ul>
        <Link id="get-in-touch-btn" href="/contact"><button className={navcss.button}>Get In Touch</button></Link>
      </div>
      <MenuMobile/>
    </nav>
  );
}
