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
                const scroll = new locoScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true,
                    multiplier: 0.8,
                    
                    // class: 'is-reveal',

                });
            })()
        }
    }, [start])
}