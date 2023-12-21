import Image from 'next/image'
import herocss from './hero.module.css'

export default function Hero() {
    return (
        <div id='hero' className={herocss.heropage}>
            <div className={herocss.pattern1}></div>
            <div className={herocss.pattern2}></div>
            <div className={herocss.pattern3}></div>
            <div className={herocss.pattern4}>
                <img src='https://zimed.netlify.app/assets/images/shapes/banner-shapes-1-3.png' alt='pattern' />
            </div>
            <div className={herocss.pyramid1}>
                <img src='https://zimed.netlify.app/assets/images/shapes/banner-shapes-1-7.png' alt='pattern' />
            </div>
            <div className={herocss.pyramid2}>
                <img src='https://zimed.netlify.app/assets/images/shapes/banner-shapes-1-6.png' alt='pattern' />
            </div>
            <div className={herocss.heroInside}>
                <div className={herocss.mobile}>
                    <img src='https://zimed.netlify.app/assets/images/mocs/banner-moc-1-1.png' alt='pattern' />
                </div>
                <div></div>
                <div className={herocss.textBox}>
                    <h3>Connect With us to connect the world</h3>
                    <p>We are committed to providing our customers with exceptional service
                        while offering our employees the best training.</p>
                    <button>Start Now</button>
                </div>

            </div>
            {/* <div className={herocss.customshapedividerbottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill='#fff' d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div> */}
        </div>)
}