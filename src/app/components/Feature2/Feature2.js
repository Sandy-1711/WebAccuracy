'use client'
import { useEffect } from 'react'
import featurecss from './feature2.module.css'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
export default function Feature2() {

    useEffect(function(){
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(`.${featurecss.phonePhoto}`,{
            opacity:0,
            x:-100,
            duration:1,
            scrollTrigger:{
                trigger:`.${featurecss.page}`,
                scroller:'body',
                start:'top 20%',
                end:'top 20%',
                
                scrub:1,
            }
        })
        gsap.from(`.${featurecss.text}`,{
            opacity:0,
            x:100,
            duration:1,
            scrollTrigger:{
                trigger:`.${featurecss.page}`,
                scroller:'body',
                start:'top 20%',
                end:'top 20%',
                scrub:1,
            }
        })
    },[])
    return <div className={featurecss.page}>
        <div className={featurecss.pattern1}><img src='https://zimed.netlify.app/assets/images/shapes/cta-1-shape-3.png' alt='shape' /></div>
        <div className={featurecss.pattern2}>
            <img src='https://zimed.netlify.app/assets/images/shapes/cta-1-shape-1.png' alt='pattern' />
        </div>
        <div className={featurecss.phonePhoto}>
            <img src='https://zimed.netlify.app/assets/images/mocs/cta-moc-1-1.png' alt='phonephoto' />
        </div>
        <div className={featurecss.text}>
            <p>Checkout App Features</p>
            <h1>Control Everything From One Application</h1>
            <div className={featurecss.features}>
                <div className={featurecss.feature}>
                    <div className={featurecss.circleicon}>
                        <div className={featurecss.line}></div>
                    </div>
                    <div className={featurecss.featureText}>

                        <p>Feature Here</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
                <div className={featurecss.feature}>
                    <div className={featurecss.circleicon}>
                        <div className={featurecss.line1}></div>
                    </div>
                    <div className={featurecss.featureText}>
                        <p>Feature Here</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
                <div className={featurecss.button}>
                    <button >Show More</button>
                </div>
            </div>

        </div>
    </div>
}