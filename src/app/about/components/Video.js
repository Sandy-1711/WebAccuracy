'use client'
import { useEffect, useState } from 'react'
import aboutcss from '../about.module.css'
import Cursor from './Cursor';
export default function Video() {
    const [isPlaying, setPlaying] = useState(false);
    useEffect(function () {
        const video = document.querySelector('#aboutvideo video')
        video.addEventListener('click', function () {
            // video.play();
            if (isPlaying) {
                setPlaying(!isPlaying);
                video.pause();
            }
            else {

                setPlaying(!isPlaying);
                video.play();
            }

        })
    })
    return (
        <>
            <div className={aboutcss.mobvideo}>
                <video autoPlay muted src='/bpo.mp4'></video>
            </div>
            <div id='aboutvideo' className={aboutcss.video}>
                <video muted src='/bpo.mp4'></video>
            </div>
            <Cursor isPlaying={isPlaying} />
        </>
    )
}