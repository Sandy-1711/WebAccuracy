'use client'
import { useState, useEffect, useLayoutEffect } from 'react';
import adcss from '../adcss.module.css'
import gsap from 'gsap';

export default function Photographers() {
    // const [show, setShow] = useState(false);
    useLayoutEffect(function () {
        var cards = document.querySelectorAll(`.${adcss.card}`)
        cards.forEach(function (card) {
            card.addEventListener('mousemove', function (e, index) {
                var x = e.offsetX + 50;
                var y = e.offsetY + 50;
                console.log(e.offsetX);
                // console.log(y);
                var cursor = card.childNodes[0];
                gsap.to(cursor, {
                    scale: 1,
                    x: x,
                    y: y,
                })
            })
            card.addEventListener('mouseleave', function (e) {
                // var x = e.offsetX+50;
                // var y = e.offsetY+50;
                // console.log(e.offsetX);
                // console.log(y);
                var cursor = card.childNodes[0];
                gsap.to(cursor, {
                    scale: 0,
                })
            })
        })
    })
    useEffect(function () {
        document.addEventListener('keydown', function (e) {
            console.log(e.code);
            if (e.code === 'Escape') {
                gal.forEach(function (it) {
                    it.style.scale = 0;
                })
                card.forEach(function (i) {
                    i.childNodes[0].style.scale = 1;
                })
            }
        })
        const gal = document.querySelectorAll(`.${adcss.cardGallery}`)
        const card = document.querySelectorAll(`.${adcss.card}`)
        card.forEach(function (item, index) {
            item.addEventListener('click', function () {

                gal[index].style.scale = 1;
                item.childNodes[0].style.scale = 0;
                // setShow(true);
            })
        })
        const cross = document.querySelectorAll(`.${adcss.cardGalleryCross}`)
        cross.forEach(function (item) {
            item.addEventListener('click', function () {
                gal.forEach(function (it) {
                    it.style.scale = 0;
                })
                card.forEach(function (i) {
                    i.childNodes[0].style.scale = 1;
                })
                // gal[0].style.scale=0;
            })
        })
    })
    return (
        <section className={adcss.photographers}>
            <div>
                <h1>Our Photographers</h1>
            </div>
            <div className={adcss.cards}>
                <div className={adcss.cardGallery}>
                    <div>
                        <img src="/Photographer1.jpg" />
                        <img src="/Photographer1.jpg" />
                        <img src="/Photographer1.jpg" />
                    </div>
                    <span className={adcss.cardGalleryCross}>
                        <img src="/close.svg" />
                    </span>
                    <div className={adcss.cardGalleryText}>
                        <h2>Name</h2>
                        <p>
                            afhgiufyguyagfyeiuyf
                            <br />
                            ifugauygf yago
                            <br />
                            ughiuogaiu guygf
                            <br />
                        </p>
                        <h2>
                            Works
                        </h2>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Kg_Hq-oY1HY?si=BGYRRh1_es9AV1xA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7IdyNfHR9vw?si=ItkqkO7Qt-f3lSrj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vyAMAhLW99A?si=v2SqYvU5MSOfaSF5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    </div>
                </div>
                <div className={adcss.cardGallery}>
                    <div>
                        <img src="/Photographer2.jpg" />
                        <img src="/Photographer2.jpg" />
                        <img src="/Photographer2.jpg" />
                    </div>
                    <span className={adcss.cardGalleryCross}>
                        <img src="/close.svg" />
                    </span>
                    <div className={adcss.cardGalleryText}>
                        <h2>Name</h2>
                        <p>afhgiufyguyagfyeiuyf yufuiiyfya ugfiuguy auy
                            <br />
                            ifugauygf yago
                            <br />
                            ughiuogaiu guygf
                            <br />
                        </p>
                        <h2>
                            Works
                        </h2>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Kg_Hq-oY1HY?si=BGYRRh1_es9AV1xA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7IdyNfHR9vw?si=ItkqkO7Qt-f3lSrj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vyAMAhLW99A?si=v2SqYvU5MSOfaSF5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                    </div>
                </div>
                <div className={adcss.cardGallery}>
                    <div>
                        <img src="/Photographer3.jpg" />
                        <img src="/Photographer3.jpg" />
                        <img src="/Photographer3.jpg" />
                    </div>
                    <span className={adcss.cardGalleryCross}>
                        <img src="/close.svg" />
                    </span>
                    <div className={adcss.cardGalleryText}>
                        <h2>Name</h2>
                        <p>afhgiufyguyagfyeiuyf yufuiiyfya ugfiuguy auy
                            <br />
                            ifugauygf yago
                            <br />
                            ughiuogaiu guygf
                            <br />
                        </p>
                        <h2>
                            Works
                        </h2>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Kg_Hq-oY1HY?si=BGYRRh1_es9AV1xA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7IdyNfHR9vw?si=ItkqkO7Qt-f3lSrj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vyAMAhLW99A?si=v2SqYvU5MSOfaSF5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                    </div>
                </div>
                <div className={adcss.card}>
                    <div className={adcss.cursor}><span>Expand</span></div>
                    <img src="/Photographer1.jpg" />
                </div>
                <div className={adcss.card + ' ' + adcss.card2}>
                    <div className={adcss.cursor}><span>Expand</span></div>

                    <img src="/Photographer2.jpg" />

                </div>
                <div className={adcss.card}>
                    <div className={adcss.cursor}><span>Expand</span></div>

                    <img src="/Photographer3.jpg" />

                </div>



            </div>
        </section>
    )
}