'use client'
import { useEffect, useLayoutEffect } from 'react'
import aboutcss from '../about.module.css'
import gsap from 'gsap'
export default function Cursor({isPlaying,...props}) {
    useLayoutEffect(function(){
        var hero=document.querySelector(`.${aboutcss.hero}`);
        hero.addEventListener('mousemove',function(e){
            var mouseX=e.clientX;
            var mouseY=e.clientY;
            console.log(mouseX,mouseY);
            gsap.to(`.${aboutcss.cursor}`,{
                x:mouseX+50,
                y:mouseY+50,
            })
        })
        
    })
    return <div className={aboutcss.cursor}>
        <span>{isPlaying===true?'STOP':'PLAY'}</span>
    </div>
}