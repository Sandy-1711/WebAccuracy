"use client";
import { useLayoutEffect } from "react";
import arvrmrcss from "../ar-vr-mr.module.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
export default function Cards() {
  useLayoutEffect(function () {
    gsap.registerPlugin(ScrollTrigger);
    if (window !=='undefined' && window.innerWidth >= 768) {
      gsap.to(`.${arvrmrcss.cards}`, {
        y: "-78%",
        scrollTrigger: {
          trigger: `.${arvrmrcss.section2}`,
          scroller: "body",
          pin: true,
          scrub: 1,
          start: "top 0%",
          end: "bottom 0%",
        },
      });
    }
  });
  return (
    <div className={arvrmrcss.cards}>
      <div className={arvrmrcss.card}>
        <img src="/logo.png" alt="logo" />
        <h2>Innovative approach</h2>
        <p>
          We approach each project with a fresh perspective, ensuring solutions
          that are tailored to your specific objectives.
        </p>
      </div>
      <div className={arvrmrcss.card}>
        <img src="/logo.png" alt="logo" />
        <h2>Skilled team members</h2>
        <p>
          Our team with deep knowledge and expertise in emerging technologies,
          ready to tackle any challenge.
        </p>
      </div>
      <div className={arvrmrcss.card}>
        <img src="/logo.png" alt="logo" />
        <h2>Client-centric services</h2>
        <p>
          We place our clients at the center of everything we do, striving to
          exceed expectations and customer service.
        </p>
      </div>
      <div className={arvrmrcss.card + " " + arvrmrcss.lastcard}>
        <img src="/logo.png" alt="logo" />
        <h2>Cutting-Edge technologies</h2>
        <p>
          We leverage the latest technology to provide solutions that not only
          meet current business needs but also cater to future growth and
          changes.
        </p>
      </div>
    </div>
  );
}
