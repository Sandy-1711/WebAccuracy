'use client'
import { useEffect, useState } from 'react'
import ourclientscss from './ourclients.module.css'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive';
export default function ClientsPage() {
    const [angle, setAngle] = useState(0);
    const isMobile = useMediaQuery({
        query: '(max-width<480px)'
    })
    // var angle = 0;
    return (
        <div className={ourclientscss.clientsPage}>
            <div className={ourclientscss.nav}></div>
            <div className={ourclientscss.overlay}></div>
            <div className={ourclientscss.clientsBox}>
                <div className={ourclientscss.imageBox} style={{ "--i": 1 }}>
                    <img src='/1.jpg' alt='client1' />
                </div>
                <div className={ourclientscss.imageBox} style={{ "--i": 2 }}>
                    <img src='/2.jpg' alt='client2' />
                </div>
                <div className={ourclientscss.imageBox} style={{ "--i": 3 }}>
                    <img src='/3.jpg' alt='client3' />
                </div>
                <div className={ourclientscss.imageBox} style={{ "--i": 4 }}>
                    <img src='/1.jpg' alt='client1' />
                </div>
                <div className={ourclientscss.imageBox} style={{ "--i": 5 }}>
                    <img src='/2.jpg' alt='client2' />
                </div>
                <div className={ourclientscss.imageBox} style={{ "--i": 6 }}>
                    <img src='/1.jpg' alt='client3' />
                </div>
                <div className={ourclientscss.imageBox} style={{ "--i": 7 }}>
                    <img src='/3.jpg' alt='client3' />
                </div>
                <div className={ourclientscss.imageBox} style={{ "--i": 8 }}>
                    <img src='/2.jpg' alt='client3' />
                </div>
                <div className={ourclientscss.imageBox} style={{ "--i": 9 }}>
                    <img src='/1.jpg' alt='client3' />
                </div>
            </div>
            <div className={ourclientscss.heading}><h1>Our Clients</h1></div>
            <div className={ourclientscss.btns}>
                <div className={ourclientscss.btn + ' ' + ourclientscss.prev}
                    onClick={function () {
                        var box = document.querySelector(`.${ourclientscss.clientsBox}`);
                        if (!isMobile) {
                            box.style = `transform:perspective(1000px) rotateY(${angle - 40}deg)`;

                        }
                        else {
                            box.style = `transform:perspective(500px) rotateY(${angle - 40}deg)`;

                        }
                        // angle -= 40;
                        setAngle(angle - 40);
                    }}></div>
                <div onClick={function () {
                    var box = document.querySelector(`.${ourclientscss.clientsBox}`);
                    // box.style = `transform:perspective(1000px) rotateY(${angle + 40}deg)`;
                    // angle += 40;
                    if (!isMobile) {
                        box.style = `transform:perspective(1000px) rotateY(${angle + 40}deg)`;

                    }
                    else {
                        box.style = `transform:perspective(500px) rotateY(${angle + 40}deg)`;

                    }
                    setAngle(angle + 40)
                }} className={ourclientscss.btn + ' ' + ourclientscss.next}></div>
            </div>
        </div>)
}