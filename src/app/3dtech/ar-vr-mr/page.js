"use client";
import Nav from "@/app/components/Nav/nav";
import arvrmrcss from "./ar-vr-mr.module.css";
import Image from "next/image";
import Button from "./ar-vr-mr-components/Button";
import Button2 from "./ar-vr-mr-components/Button2";
import LocoScroll from "../../../../hooks/LocoScroll";
import { useEffect, useLayoutEffect } from "react";
import Dots from "./ar-vr-mr-components/Dots";
import gsap, { ScrollTrigger } from "gsap/all";
import Footer from "@/app/components/Footer/Footer";
import Cards from "./ar-vr-mr-components/Cards";
import { useMediaQuery } from "react-responsive";
export default function Page() {
  const isTablet = useMediaQuery({
    query: '(max-width:768px)'
  })
  useEffect(function () {
    const containers = document.querySelectorAll(`.${arvrmrcss.container}`);

    containers.forEach((container) => {
      const backimg = container.children[0];
      console.log(backimg);
      container.addEventListener("mousemove", (e) => {
        const containerRect = container.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;
        const centerY = containerRect.top + containerRect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const maxRotateX = 0.2; // Adjust the maximum X-axis rotation
        const maxRotateY = 0.2; // Adjust the maximum Y-axis rotation

        const rotateX = (mouseY / centerY) * maxRotateX;
        const rotateY = -(mouseX / centerX) * maxRotateY;

        backimg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      container.addEventListener("mouseleave", () => {
        container.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      });
    });
  });
  useLayoutEffect(function () {
    gsap.registerPlugin(ScrollTrigger);

    if (window !== 'undefined' && !isTablet) {
      gsap.from("#h11", {
        x: 1000,
        scrollTrigger: {
          trigger: `.${arvrmrcss.section4}`,
          scroller: "body",
          start: "top 80%",
          end: "top 0%",
          scrub: 1,
          markers: false,
          // pin:true,
        },
      });

      gsap.from(`#h12`, {
        x: -1000,
        scrollTrigger: {
          trigger: `.${arvrmrcss.section4}`,
          scroller: "body",
          start: "top 80%",
          end: "top 0%",
          scrub: 1,
          // pin:true,
          markers: false,
        },
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(`#h13`, {
        x: 1000,
        scrollTrigger: {
          trigger: `.${arvrmrcss.section4}`,
          scroller: "body",
          start: "top 80%",
          end: "top -50%",
          scrub: 1,
          markers: false,

          // pin:true,
        },
      });
    } else {
      gsap.from("#h11", {
        x: 200,
        scrollTrigger: {
          trigger: `.${arvrmrcss.section4}`,
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false,
          // pin:true,
        },
      });

      gsap.from('#h12', {
        x: -200,
        scrollTrigger: {
          trigger: `.${arvrmrcss.section4}`,
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          // pin:true,
          markers: false,
        },
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('#h13', {
        x: 200,
        scrollTrigger: {
          trigger: `.${arvrmrcss.section4}`,
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false,

          // pin:true,
        },
      });
    }
  });
  LocoScroll(true);
  return (
    <>
      <Nav />
      <div className={arvrmrcss.background}></div>
      <main data-scroll-container className={arvrmrcss.main}>
        <section id="container" className={arvrmrcss.section1}>
          <div className={arvrmrcss.container1 + " " + arvrmrcss.container}>
            <img id="backimg" src="/vr-people.jpg" />
            <div className={arvrmrcss.text}>
              <h1>AR VR MR Services in Ranchi</h1>
              <p>
                Web Accuracy provides cutting-edge technology solutions tailored for your business needs.

              </p>
            </div>
            <div className={arvrmrcss.buttonLeft}>
              <button>
                <div>About</div>
              </button>
              <button>
                <div>Services</div>
              </button>
            </div>
            {/* <div className={arvrmrcss.buttonRight}></div> */}
          </div>
        </section>
        <section className={arvrmrcss.section2}>
          <div className={arvrmrcss.container2}>
            <div className={arvrmrcss.container2wrapper}>
              <div className={arvrmrcss.text}>
                <h1>
                  Crafting the future with our innovative tech solutions &
                  services
                </h1>
                <p>
                  Augmented Reality involves overlaying digital information onto the real world using devices like smartphones, tablets, or AR glasses. AR enhances the user&apos;s perception of reality by adding digital elements such as images, videos, or 3D models to their view. It allows users to interact with virtual objects in a real environment.
                </p>
                <div className={arvrmrcss.textButtons}>
                  <Button color="white" text="About us" />
                  <Button2 color="#B14125" text="Meet the team" />
                </div>
              </div>
              <Dots />
              <Cards />
            </div>
          </div>
        </section>
        <section className={arvrmrcss.section3}>
          <div className={arvrmrcss.container3 + " " + arvrmrcss.container}>
            <img src="/sec3orbs.webp" />
            <div className={arvrmrcss.textBox}>
              <h1>Discover innovative to help you grow</h1>
              <Button text="Explore" color="white" />
            </div>
          </div>
        </section>
        <section className={arvrmrcss.section4}>
          <div className={arvrmrcss.sec4Img}>
            <img height={500} width={500} src="/sec4img.webp" />
          </div>
          <h1 id="h11" className={arvrmrcss.h11}>
            Dive into our
          </h1>
          <h1 id="h12" className={arvrmrcss.h12}>
            revolutionary
          </h1>
          <h1 id="h13" className={arvrmrcss.h13}>
            technology
          </h1>
        </section>
        <section className={arvrmrcss.section5}>
          <div className={arvrmrcss.sec5inner}>
            <h1>
              Experience the new digital era with our comprehensive tech
              services & solutions
            </h1>
          </div>
          <div className={arvrmrcss.line}></div>
          <div className={arvrmrcss.sec5innerbottom}>
            <div className={arvrmrcss.sec5innerbottomleft}>
              <img src="/1.jpg" />
              <h1>
                Innovative & <br />
                expert team
              </h1>
            </div>
            <div className={arvrmrcss.sec5innerbottomright}>
              <div>
                <p>Customized solutions</p>
                <p>Proven expertise</p>
              </div>
              <div>
                <p>Fast delivery</p>
                <p>Scalable products</p>
              </div>
              <div>
                <p>Secure systems</p>
                <p>Continuous innovation</p>
              </div>
            </div>
          </div>
        </section>
        <section className={arvrmrcss.section6}>
          <div className={arvrmrcss.container6}>
            <div
              data-scroll
              data-scroll-speed="-0.05"
              className={arvrmrcss.containerimg}
            >
              <img src="/vr-people.jpg" />
            </div>
          </div>
          <div className={arvrmrcss.container6}>
            <div
              data-scroll
              data-scroll-speed="-0.05"
              className={arvrmrcss.containerimg}
            >
              <img src="/vr-girl.jpg" />
            </div>
          </div>
        </section>
         
        <Footer />
      </main>
    </>
  );
}
