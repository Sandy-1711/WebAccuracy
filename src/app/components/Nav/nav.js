"use client";
import Image from "next/image";
import navcss from "./navcss.module.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import Link from "next/link";
import uiux from "../../services/ui-ux/uiux.module.css";
export default function Nav() {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");
  useEffect(
    function () {
      // window.addEventListener('mousemove', function (e) {
      //     const mousePosition = e.clientX / window.innerWidth * 100;
      //     console.log(mousePosition);
      //     if (mousePosition > 55) {
      //         document.getElementById("menubar").style.display = "block";
      //         document.getElementById("menuclose").style.display = "none";
      //         document.getElementById("menumobile").style.transform = "translate(-50dvw)"
      //     }
      // })
    //   console.log(window.location.pathname);
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
      if (window.innerWidth > 900) {
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
            <a href="/">Home</a>
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
                <a href="/3dtech/immersive-audio">Immersive Audio</a>
              </ul>
            </div>
          </li>
          <li>
            <a href="/">Our Clients</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          {/* <li>
                    <a>Get In Touch</a>
                </li> */}
        </ul>
        <button>Get In Touch</button>
      </div>
      <div id="menumobile" className={navcss.menumobile}>
        <div className={navcss.logomobile}>
          <Image
            height={100}
            width={100}
            src="https://zimed.netlify.app/assets/images/logo-1-1.png"
            alt="logo"
          />
        </div>
        <div className={navcss.menuicon}>
          <img
            className={navcss.menubar}
            id="menubar"
            onClick={function () {
              document.getElementById("menuclose").style.display = "block";
              document.getElementById("menubar").style.display = "none";
              document.getElementById("menumobile").style.transform =
                "translate(0)";
            }}
            src="/menu.svg"
            alt="menu"
          />
        </div>
        <div className={navcss.menuicon}>
          <img
            id="menuclose"
            className={navcss.menuclose}
            onClick={function () {
              document.getElementById("menubar").style.display = "block";
              document.getElementById("menuclose").style.display = "none";
              document.getElementById("menumobile").style.transform =
                "translate(-50dvw)";
            }}
            src="/close.svg"
            alt="close"
          />
        </div>

        <ul className={navcss.menulist}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li className={navcss.servicestab}>
            <span>
              Services
              {/* <i class="fa-solid fa-chevron-right"></i> */}
            </span>

            <div className={navcss.submenu}>
              <ul>
                <li>
                  <a href="/services/app-dev">App Development</a>
                </li>
                <li>
                  <a href="/services/web-dev">Web Development</a>
                </li>
                <li>
                  <a href="/services/ui-ux">UI/UX Design</a>
                </li>
                <a href="/services/bpo">BPO</a>
                <li>
                  <a href="/services/digital-marketing">Digital Marketing</a>
                </li>
                <li>
                  <a href="/services/adshooting-photography">Ad/Photography</a>
                </li>
              </ul>
            </div>
          </li>

          <li className={navcss.trendstab}>
            <span>Web 3.0 & trends </span>
            <div className={navcss.submenu}>
              <ul>
                <li>
                  <a href="/trends/ai-ml">AI/ML</a>
                </li>
                <li>
                  <a href="/trends/blockchain">Blockchain</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={navcss.threedtechtab}>
            <span>3D reality</span>
            <div className={navcss.submenu}>
              <ul>
                <li>
                  <a href="/3dtech/ar-vr-mr">AR/VR/MR</a>
                </li>
                <li>
                  <a href="/3dtech/immersive-audio">Immersive Audio</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/">Our Clients</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
