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
                if (window.innerWidth > 900) {

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
                            multiplier: 15,
                            class: "is-reveal",
                        },
                        // resetNativeScroll: true,
                        // tablet: {
                        //     smooth: true,
                        //     direction: 'vertical',
                        //     gestureDirection: 'vertical',
                        //     breakpoint: 1024
                        // },
                        // class: 'is-reveal',

                    });
                }
            })()
        }
    }, [start])
}