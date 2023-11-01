'use client'
import { createElement, useEffect, useState } from 'react'
import audiocss from './immersive.module.css'
import Nav from '@/app/components/Nav/nav';
export default function Immersive() {
    const [start, setStart] = useState(false);
    useEffect(function () {
        var you = document.querySelector(`.${audiocss.you}`);
        var page = document.querySelector(`.${audiocss.page}`);
        if (start) {
            var audioCtx = new AudioContext();
            const panNode = audioCtx.createStereoPanner();
            var a = document.querySelector("#audio");
            const source1 = audioCtx.createMediaElementSource(a);
            audio.play();
            page.addEventListener('mousemove', function (e) {
                var x = e.clientX;
                var y = e.clientY;
                x = x - (window.innerWidth - page.clientWidth) / 2;
                y = y / window.innerHeight;
                x = x / page.clientWidth * 2 - 1;
                if (x > 1) {
                    x = 1;
                }
                if (x < -1) {
                    x = -1;
                }
                you.style.top = y * window.innerHeight + 'px';
                if (window.innerWidth < 480) {
                    you.style.left = (x + 1) / 2 * window.innerWidth + 'px';
                }
                else {
                    you.style.left = (x + 1) / 2 * 1200 + 'px';
                }
                // console.log("x: ", x, " y: ", y);

                y = y * 2 - 1;
                if (y < 0) {
                    y = 1 + y;
                }
                else {
                    y = 1 - y
                }
                var temp = x / 1.5;
                panNode.pan.setValueAtTime(temp, audioCtx.currentTime);


                source1.connect(panNode);
                panNode.connect(audioCtx.destination);
                var audio = document.querySelector('audio')
                // console.log(x, y);
                if (x < 0) {
                    x = 1 + x;
                    audio.volume = x < y ? x : y;
                }
                else {

                    audio.volume = (1 - x) < y ? (1 - x) : y;
                }
                audio.play();

            })
        }

    })
    useEffect(function () {
        var grid = document.querySelector(`.${audiocss.grid}`);
        for (let i = 0; i < 300; i++) {
            const line = document.createElement('line');
            grid.appendChild(line);
        }
    }, [])

    return <div className={audiocss.pageWrapper}>
        <div className={audiocss.overlay}>
            <div className={audiocss.overlaytext}>
                <p>To see the effect of immersive audio, wear your headphones.</p>
            </div>
            {!start && <button className={audiocss.button} onClick={function () {
                setStart(true)
                document.querySelector(`.${audiocss.overlay}`).style.display = "none";
            }}>Start</button>}
        </div>
        <Nav />
        <div className={audiocss.instructions}>
            {/* <p>For best experience,</p>
            <span>Please wear your headphones</span> */}
        </div>
        {/* <div className={audiocss.line1} /> */}
        {/* <div className={audiocss.line2} /> */}
        {/* <div className={audiocss.line3} /> */}
        {/* <div className={audiocss.line4} /> */}
        <div className={audiocss.grid}>

        </div>
        <div className={audiocss.page}>
            <div className={audiocss.heading}>
                <h2>Immersive Audio</h2>
            </div>

            <div className={audiocss.audios}>
                <audio controls id="audio">
                    <source src="/sound1.wav"></source>
                </audio>

            </div>
            <div className={audiocss.left + " " + audiocss.control}><span>Left</span></div>
            <div className={audiocss.top + " " + audiocss.control}><span>Back</span></div>
            <div className={audiocss.right + " " + audiocss.control}><span>Right</span></div>
            <div className={audiocss.bottom + " " + audiocss.control}><span>Front</span></div>
            <div className={audiocss.soundsource}><span>Audio</span></div>

            <div className={audiocss.you}>
                <span>You</span>
            </div>
        </div>
    </div>

}