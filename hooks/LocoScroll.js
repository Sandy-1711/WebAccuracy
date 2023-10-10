'use client'
import { useEffect } from "react";
import './locomotive-scroll.css';

export default function LocoScroll(start) {
    useEffect(function () {
        if (!start) {
            return;
        }
        else {

            (async () => {

                const locoScroll = (await (import('locomotive-scroll'))).default;
                // if (window.innerWidth > 900) {

                const scroll = new locoScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true,
                    multiplier: 1,
                    smartphone: {
                        smooth: true,
                        // direction: 'vertical',
                        // gestureDirection: 'vertical'
                    },
                    mobile: {
                        breakpoint: 0,
                        smooth: true,
                        multiplier: 0.5,
                        class: "is-reveal",
                    },
                    lenisOptions: {
                        wrapper: window,
                        content: document.documentElement,
                        lerp: 0.1,
                        duration: 1.2,
                        orientation: "vertical",
                        gestureOrientation: "vertical",
                        smoothWheel: true,
                        smoothTouch: false,
                        wheelMultiplier: 0.8,
                        touchMultiplier: 0.8,
                        normalizeWheel: true,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // https://www.desmos.com/calculator/brs54l4xou
                    }
                    // resetNativeScroll: true,
                    // tablet: {
                    //     smooth: true,
                    //     direction: 'vertical',
                    //     gestureDirection: 'vertical',
                    //     breakpoint: 1024
                    // },
                    // class: 'is-reveal',

                });
                // }
            })()
        }
    }, [start])
}