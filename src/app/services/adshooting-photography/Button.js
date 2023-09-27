'use client'
import { useEffect, useLayoutEffect } from 'react'
import adcss from './adcss.module.css'
import gsap from 'gsap'
export default function Button(props) {
    useEffect(function () {





    })
    return (<div className={adcss.button}>
        <button
            onClick={function () {
                alert('clicked')
            }}
            onMouseEnter={function () {

                gsap.to(`.${adcss.mouseCursor}`, {
                    scale: 2,
                })
            }}
            onMouseOut={function () {
                gsap.to(`.${adcss.mouseCursor}`, {
                    scale: 1,
                })
            }}
        > <img src='/right-arrow.svg' /> {props.text} <img src='/right-arrow.svg' /></button>
    </div>)
}