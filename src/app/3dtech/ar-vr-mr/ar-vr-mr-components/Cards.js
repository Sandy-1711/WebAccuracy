"use client";
import { useLayoutEffect } from "react";
import arvrmrcss from "../ar-vr-mr.module.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
export default function Cards() {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)"
  })
  useLayoutEffect(function () {
    gsap.registerPlugin(ScrollTrigger);
    if (window !== 'undefined' && !isTablet) {
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
        <h2>Retail and E-commerce</h2>
        <p>
          AR can enable customers to virtually try on clothing, accessories, or furniture before making a purchase.
        </p>
      </div>
      <div className={arvrmrcss.card}>
        <img src="/logo.png" alt="logo" />
        <h2>Education</h2>
        <p>
          AR can make learning interactive by providing additional information or visual aids when scanning textbooks or educational materials.
        </p>
      </div>
      <div className={arvrmrcss.card}>
        <img src="/logo.png" alt="logo" />
        <h2>Real Estate</h2>
        <p>
          AR can be used to visualize properties by superimposing virtual furniture or designs onto physical spaces.
        </p>
      </div>
      <div className={arvrmrcss.card + " " + arvrmrcss.lastcard}>
        <img src="/logo.png" alt="logo" />
        <h2>Gaming</h2>
        <p>
          AR gaming apps like Pokémon GO use the real world as a playground for virtual elements and interactions.
        </p>
      </div>

    </div>
  );
}
