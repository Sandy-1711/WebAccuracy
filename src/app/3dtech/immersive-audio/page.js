"use client";
import Nav from "@/app/components/Nav/nav";
import audiocss from "./audiocss.module.css";
import { useEffect } from "react";
import gsap from "gsap";
export default function dolbyatmos() {
  useEffect(function () {
    var control = document.querySelectorAll(`.${audiocss.control}`);
    control.forEach(function (item) {
      item.addEventListener("click", function () {
        item.classList.toggle(`${audiocss.active}`);
        console.log(item);
      });
    });
    const tl=gsap.timeline();
    // tl.from(`.${audiocss.instructions}`,{
    //     opacity:0,
    //     scale:0,
    //     duration:1,
    //     delay:1,
    // })
    // tl.to(`.${audiocss.instructions}`,{
    //     opacity:0,
    //     scale:0,
    //     duration:1,
    //     delay:1,
    // })
  });
  return (
    <div className={audiocss.pageWrapper}>
      <Nav />
      <div className={audiocss.instructions}>
        <p>For best experience,</p>
        <span>Please wear your headphones</span>
      </div>
      <div className={audiocss.line1} />
      <div className={audiocss.line2} />
      <div className={audiocss.line3} />
      <div className={audiocss.line4} />
      <div className={audiocss.page}>
        <div className={audiocss.heading}>
          <h2>Immersive Audio</h2>
        </div>
        <div className={audiocss.info}>
          <p>
            Click/Tap on the spheres to experience the magic of immersive audio
          </p>
        </div>
        <div className={audiocss.left + " " + audiocss.control}></div>
        <div className={audiocss.middle + " " + audiocss.control}></div>
        <div className={audiocss.right + " " + audiocss.control}></div>
        <div className={audiocss.you}>
          <span>You</span>
        </div>
      </div>
    </div>
  );
}
