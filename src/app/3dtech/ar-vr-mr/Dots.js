'use client'
import { useEffect } from 'react'
import arvrmrcss from './ar-vr-mr.module.css'
export default function Dots() {
    useEffect(function () {
        // script.js
        const container = document.querySelector(`.${arvrmrcss.dots}`);
        const dots = document.querySelectorAll(`.${arvrmrcss.dot}`);

        container.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            dots.forEach((dot) => {
                const dotX = dot.getBoundingClientRect().left + dot.clientWidth / 2;
                const dotY = dot.getBoundingClientRect().top + dot.clientHeight / 2;

                const deltaX = mouseX - dotX;
                const deltaY = mouseY - dotY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                if (distance < 60) { // Adjust this value for attraction radius
                    const angle = Math.atan2(deltaY, deltaX);
                    const newX = dotX + Math.cos(angle) * 5; // Adjust the speed here
                    const newY = dotY + Math.sin(angle) * 5; // Adjust the speed here
                    dot.style.transform = `translate(${newX - dotX}px, ${newY - dotY}px)`;

                } else {
                    dot.style.transform = "translate(0, 0)";
                }
            });
        });

    })
    return (<div className={arvrmrcss.dots}>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>
        <div className={arvrmrcss.dot}><div className={arvrmrcss.dotinside}></div></div>

    </div>)
}