"use client";

import { useLayoutEffect } from "react";
import adcss from "./adcss.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "./Button";
import Footer from "@/app/components/Footer/Footer";
import LocoScroll from "../../../../hooks/LocoScroll";
import Image from "next/image";
export default function Adshootingpage() {
  LocoScroll(true);

  useLayoutEffect(function () {
    // window.addEventListener('mousemove', function (e) {
    //     let x = e.clientX + 10;
    //     let y = e.clientY + 10;
    //     gsap.to(`.${adcss.mouseCursor}`, {
    //         x: x,
    //         y: y,
    //     })
    // })
    // document.getElementById('body').style.overflowY = "hidden"
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline();
    gsap.from(`.${adcss.sec1Text} p span`, {
      delay: 0.2,
      opacity: 0,
      duration: "1",
      stagger: "0.05",
    });
    if (window !== "undefined" && window.innerWidth > 768) {
      gsap.from(`.${adcss.sec1Image}`, {
        transform: "scale(0.8)",
        scrollTrigger: {
          scroller: "body",
          trigger: `.${adcss.sec1Image}`,
          start: "top 75%",
          end: "top 25%",
          scrub: true,
        },
      });
      gsap.to(`.${adcss.sec7ImageBox}`, {
        scale: 0.7,
        y: 100,
        scrollTrigger: {
          scroller: "body",
          trigger: `.${adcss.section7}`,
          start: "top top",
          end: "top -50%",
          // markers: true,
          pin: true,
          scrub: 2,
        },
      });
    }

    if (window !== 'undefined' && window.innerWidth > 1200) {
      gsap.to(`.${adcss.fixbutton}`, {
        opacity: 0,
        scrollTrigger: {
          scroller: "body",
          trigger: `.${adcss.sec1Image}`,
          start: "top 75%",
          end: "top 50%",
          scrub: true,
        },
      });
    }
    gsap.to(`.${adcss.sec7ImageBox} h2`, {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: `.${adcss.section7}`,
        start: "top top",
        end: "top -10%",
        // markers: true,
        // pin: true,
        scrub: 2,
      },
    });
  });
  return (
    <main className={adcss.main}>
      {/* <div className={adcss.mouseCursor}></div> */}
      <section className={adcss.section1}>
        <div data-scroll data-scroll-speed="-1" className={adcss.sec1Text}>
          <p>
            <span>W</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
            <span> </span>
            <span>t</span>
            <span>o</span>
            <span> </span>
            <span>O</span>
            <span>u</span>
            <span>r</span>
            <span> </span>
            <span>A</span>
            <span>d</span>
            <span> </span>
            <span>S</span>
            <span>h</span>
            <span>o</span>
            <span>o</span>
            <span>t</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span> </span>
            <span>and</span>
            <span> </span>
            <span>P</span>
            <span>h</span>
            <span>o</span>
            <span>t</span>
            <span>o</span>
            <span>g</span>
            <span>r</span>
            <span>a</span>
            <span>p</span>
            <span>h</span>
            <span>y</span>
            <span> </span>
            <span>S</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
            <span> </span>
            <span>i</span>
            <span>n</span>
            <span> </span>
            <span>R</span>
            <span>a</span>
            <span>n</span>
            <span>c</span>
            <span>h</span>
            <span>i</span>
            <span>!</span>
          </p>
          {/* <button>CREATIVE SERVICES &rarr;</button> */}
        </div>
        <Button className={adcss.fixbutton} text="Creative services" />
        <div className={adcss.sec1Image}>
          <Image height={5000} width={5000} src="/4.jpg" alt="ad shooting in Ranchi, Ranchi ad campaign, professional ad photography, creative ad visuals, photography in Ranchi, Ranchi photographers, professional photoshoots, memorable photography, creative photo sessions" />
        </div>
      </section>
      <section className={adcss.section2}>
        <div className={adcss.sec2Text}>
          <h2>
            Let&apos;s create amazing <br /> video content
          </h2>
          <p>
            Are you looking for top-notch ad shooting and photography services in Ranchi? Look no further! Our team of skilled professionals is here to capture your vision and bring it to life through captivating visuals. Whether you&apos;re in need of stunning ad campaigns or memorable photography, we&apos;ve got you covered.
          </p>
          <Button text="Watch our reel " />
        </div>
      </section>
      <section id="section3" className={adcss.section3}>
        {/* <div className={adcss.secOuter}> */}

        <div className={adcss.secInner}>
          <div className={adcss.sec3InLeft}>
            <p>
              <span>E</span>
              <span>X</span>
              <span>P</span>
              <span>E</span>
              <span>R</span>
              <span>I</span>
              <span>E</span>
              <span>N</span>
              <span>C</span>
              <span>E</span>
              <span>D</span>
              <span> </span>
              <span>T</span>
              <span>E</span>
              <span>A</span>
              <span>M</span>
            </p>

            <p>
              Our team consists of experienced photographers and videographers who are well-versed in the art of visual storytelling. With a keen eye for detail, we capture every moment with precision.
            </p>
          </div>
          <div className={adcss.sec3InRight}>
            <Image
              height={1000}
              width={1000}
              src="https://i0.wp.com/co-dastudios.com/wp-content/uploads/2022/12/Video-2048x2048.jpg"
              alt="ad shooting in Ranchi, Ranchi ad campaign, professional ad photography, creative ad visuals, photography in Ranchi, Ranchi photographers, professional photoshoots, memorable photography, creative photo sessions"
            />
          </div>
        </div>

        {/* </div> */}
      </section>
      <section id="section4" className={adcss.section4}>
        <div className={adcss.secInner}>
          <div className={adcss.sec3InLeft}>
            <p>
              <span>C</span>
              <span>R</span>
              <span>E</span>
              <span>A</span>
              <span>T</span>
              <span>I</span>
              <span>V</span>
              <span>E</span>
              <span> </span>
              <span>A</span>
              <span>P</span>
              <span>P</span>
              <span>R</span>
              <span>O</span>
              <span>A</span>
              <span>C</span>
              <span>H</span>
            </p>

            <p>
              We take a creative approach to every project, ensuring that each ad or photograph is unique and tailored to your specific needs. Our innovative ideas bring out the best in your brand.
            </p>
          </div>
          <div className={adcss.sec3InRight}>
            <Image
              height={1000}
              width={1000}
              src="https://i0.wp.com/co-dastudios.com/wp-content/uploads/2022/12/Video-2048x2048.jpg"
              alt="ad shooting in Ranchi, Ranchi ad campaign, professional ad photography, creative ad visuals, photography in Ranchi, Ranchi photographers, professional photoshoots, memorable photography, creative photo sessions"
            />
          </div>
        </div>
      </section>
      <section id="section5" className={adcss.section5}>
        <div className={adcss.secInner}>
          <div className={adcss.sec3InLeft}>
            <p>
              <span>T</span>
              <span>I</span>
              <span>M</span>
              <span>E</span>
              <span>L</span>
              <span>Y</span>
              <span> </span>
              <span>D</span>
              <span>E</span>
              <span>L</span>
              <span>I</span>
              <span>V</span>
              <span>E</span>
              <span>R</span>
              <span>Y</span>
            </p>

            <p>
              We value your time, and we are committed to delivering our work on schedule without compromising on quality.
            </p>
          </div>
          <div className={adcss.sec3InRight}>
            <Image
              height={1000}
              width={1000}
              src="https://i0.wp.com/co-dastudios.com/wp-content/uploads/2022/12/Video-2048x2048.jpg"
              alt="ad shooting in Ranchi, Ranchi ad campaign, professional ad photography, creative ad visuals, photography in Ranchi, Ranchi photographers, professional photoshoots, memorable photography, creative photo sessions"
            />
          </div>
        </div>
      </section>
      <section className={adcss.section6}>
        <div className={adcss.sec6Inner}>
          <div className={adcss.sec6Text}>
            <h2>Why Choose Us?</h2>
            <p>
              Our gear, combined with our skills, guarantees professional results.
              We understand that every project is different. That&apos;s why we offer customizable packages that fit your requirements and budget perfectly. We use the latest photography and videography equipment to ensure high-quality output.
            </p>
          </div>
          <div className={adcss.imagesbox}>
            <div className={adcss.imagebox}>
              <div className={adcss.imageboxtext}>
                <h2>Animation</h2>
                <p>Seamlessly looping content</p>
              </div>
              <Image height={1000} width={1000} src="/2.jpg" alt="ad shooting in Ranchi, Ranchi ad campaign, professional ad photography, creative ad visuals, photography in Ranchi, Ranchi photographers, professional photoshoots, memorable photography, creative photo sessions" />
            </div>
            <div className={adcss.imagebox}>
              <div className={adcss.imageboxtext}>
                <h2>Animation</h2>
                <p>Seamlessly looping content</p>
              </div>
              <Image height={1000} width={1000} src="/3.jpg" alt="ad shooting in Ranchi, Ranchi ad campaign, professional ad photography, creative ad visuals, photography in Ranchi, Ranchi photographers, professional photoshoots, memorable photography, creative photo sessions" />
            </div>
            <div className={adcss.imagebox}>
              <div className={adcss.imageboxtext}>
                <h2>Animation</h2>
                <p>Seamlessly looping content</p>
              </div>
              <Image height={1000} width={1000} src="/4.jpg" alt="ad shooting in Ranchi, Ranchi ad campaign, professional ad photography, creative ad visuals, photography in Ranchi, Ranchi photographers, professional photoshoots, memorable photography, creative photo sessions" />
            </div>
          </div>
        </div>
      </section>
      <section className={adcss.section7}>
        <h2>Contact Us</h2>
        <div className={adcss.sec7ImageBox}>
          <Image
            height={1000}
            width={1000}
            src="https://i0.wp.com/co-dastudios.com/wp-content/uploads/2023/01/Studios-SubHeader-copy-22-2.jpg"
            alt="ad shooting in Ranchi, Ranchi ad campaign, professional ad photography, creative ad visuals, photography in Ranchi, Ranchi photographers, professional photoshoots, memorable photography, creative photo sessions"
          />
          <h2>Have a project in mind?</h2>
        </div>
      </section>
      <section className={adcss.footer}>
        <Footer />
      </section>
    </main>
  );
}
