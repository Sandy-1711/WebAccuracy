"use client";
import Nav from "@/app/components/Nav/nav";
import audiocss from "./audiocss.module.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
export default function ImmersiveAudioPage() {
    const [start, setStart] = useState(false);
    useEffect(function () {
        var audio1 = document.querySelector(`.${audiocss.middle}`);
        var audio2 = document.querySelector(`.${audiocss.left}`);
        var audio3 = document.querySelector(`.${audiocss.right}`);
        var a = document.querySelector("#audio1");

        if (start) {

            var audioCtx = new AudioContext();
            const panNode = audioCtx.createStereoPanner();
            const source1 = audioCtx.createMediaElementSource(a);

            audio2.addEventListener('click', function () {
                audio1.classList.remove(`${audiocss.active}`)
                audio2.classList.add(`${audiocss.active}`)
                audio3.classList.remove(`${audiocss.active}`)
                panNode.pan.setValueAtTime(-1, audioCtx.currentTime);
                source1.connect(panNode);
                panNode.connect(audioCtx.destination);
                a.volume = 1;
                a.play();

            })
            audio3.addEventListener('click', function () {

                audio1.classList.remove(`${audiocss.active}`)
                audio2.classList.remove(`${audiocss.active}`)
                audio3.classList.add(`${audiocss.active}`)
                panNode.pan.setValueAtTime(1, audioCtx.currentTime);
                source1.connect(panNode);
                panNode.connect(audioCtx.destination);
                a.volume = 1;
                a.play();

            })
            audio1.addEventListener('click', function () {

                audio1.classList.add(`${audiocss.active}`)
                audio2.classList.remove(`${audiocss.active}`)
                audio3.classList.remove(`${audiocss.active}`)
                panNode.pan.setValueAtTime(0, audioCtx.currentTime);
                source1.connect(panNode);
                panNode.connect(audioCtx.destination);
                a.volume = 0.2;
                a.play();
            })

        }
    }, [start])

    // useEffect(function () {
    //     var page = document.querySelector(`.${audiocss.page}`)
    //     var a = document.querySelector("#audio1");

    //     if (start) {
    //         var audioCtx = new AudioContext();
    //         const panNode = audioCtx.createStereoPanner();
    //         const source1 = audioCtx.createMediaElementSource(a);
    //         page.addEventListener('mousemove', function (e) {
    //             // console.log(e.clientX);
    //             var x = e.clientX - (window.innerWidth - page.clientWidth) / 2;
    //             var xshift = x / page.clientWidth;
    //             xshift = xshift * 2 - 1;
    //             var y=e.clientY;

    //             // console.log(xshift);
    //             panNode.pan.setValueAtTime(xshift, audioCtx.currentTime);
    //             source1.connect(panNode);
    //             panNode.connect(audioCtx.destination);
    //             var audio = document.querySelector('audio')
    //             audio.play();

    //         })
    //     }
    // })

    return (
        <div className={audiocss.pageWrapper}>
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
                    <p>To start click on any sphere</p>
                </div>

                <div className={audiocss.audios}>
                    <audio controls id="audio1">
                        <source src="/sound1.wav"></source>
                    </audio>
                    <audio controls id="audio2">
                        <source src="/sound2.wav"></source>
                    </audio>
                    <audio controls id="audio3">
                        <source src="/sound3.wav"></source>
                    </audio>
                </div>
                {/* <div className={audiocss.info}>
                    <p>
                        
                        Click/Tap on the spheres to experience the magic of immersive audio
                    </p>
                </div> */}
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
