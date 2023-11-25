import Nav from '@/app/components/Nav/nav'
import Canvas from './(components)/Canvas'
import aimlcss from './aiml.module.css'
import Section2BannerSVG from './(components)/Section2BannerSVG'
import Canvas2 from './(components)/Canvas2'
import Section5SVG from './(components)/Section5SVG'
import { AnimationLoader } from 'three'
import Footer from '@/app/components/Footer/Footer'
export default function aiml() {
    var style={
        backgroundColor:'#2A2459'
    }
    return (

        <div className={aimlcss.page}>
            <section className={aimlcss.hero}>
                <div className={aimlcss.text}>
                    <h2>Artificial Intelligence (AI) Development</h2>
                    <button>Get Started!</button>
                </div>
                <div className={aimlcss.canvas}>
                    <Canvas />
                </div>
            </section>
            <section className={aimlcss.section2}>
                <div className={aimlcss.section2svg}>
                    <Section2BannerSVG />
                    <div className={aimlcss.text}>
                        <p>Explore our Artificial Intelligence (AI) Technologies</p>
                    </div>
                </div>
            </section>
            <section className={aimlcss.section3}>
                <div className={aimlcss.text}>
                    <h2>What We Do?</h2>
                    <p>From neural network to computer vision, our team has been at the forefront of artificial intelligence. Learn more about our services.</p>
                </div>
                <div className={aimlcss.sec3img}>
                    <img src='/BOXES.png' />
                </div>
            </section>
            <section className={aimlcss.section4}>
                <img src='/Sec4SVG.svg' />
                <div className={aimlcss.text}>
                    <h2>Deep Learning</h2>
                    <p>Learn more about deep learning development services</p>
                </div>
                <div className={aimlcss.canvas}>
                    <Canvas2 />
                </div>
                <div className={aimlcss.p}><p>Deep learning is a revolutionary approach to AI that uses deep neural networks to teach computers how to learn on their own. Without human input, deep learning software can sift through massive amounts of raw data and identify patterns, allowing for faster, more accurate problem solving in a variety of fields.</p></div>
                <div className={aimlcss.banner}>
                    <Section2BannerSVG />
                    <p>Explore our Artificial Intelligence (AI) Technologies</p>
                </div>
            </section>
            <section className={aimlcss.section5}>
                <div className={aimlcss.banner}>
                    <Section2BannerSVG />
                    <p>Explore our Artificial Intelligence (AI) Technologies</p>
                </div>
                <div className={aimlcss.text}>
                    <h2>Automation</h2>
                    <p>Learn more about our processes and AI approaches</p>
                </div>
                <div className={aimlcss.sec5SVG}>
                    <Section5SVG />
                </div>
                <p>Automation encompasses industrial robots, service robots, and automation systems. While many observers fear that automation will destroy jobs, ARK believes it will empower humans, increasing both productivity and wage growth.</p>
            </section>
            <section className={aimlcss.section6}>
                <Section2BannerSVG />
                <div className={aimlcss.sec6first}>

                    <div className={aimlcss.text}>
                        <h2>Robotic Process Automation (RPA)</h2>
                        <p>Learn more about our processes and AI approaches</p>
                    </div>
                    <div className={aimlcss.diagram}></div>
                    <p>RPA software automates routine back office functions by providing virtual employees who act like actual employees, learning tasks that are repetitive and don&apos;t require human judgment to perform. As the software learns how to handle each task, it can execute autonomously with no manual involvement necessary. RPA frees up staff to focus on core competencies, increasing productivity without raising costs.</p>
                </div>
                <Section2BannerSVG />
                <div className={aimlcss.sec6second}>

                    <img src='/logo.png' />
                    <div className={aimlcss.text}>
                        <h2>The Future of Artificial Intelligence (AI)</h2>
                        <p>Artificial Intelligence is the future technology, which aims to make our lives easy. AI responds to our commands, learns from them to make better decisions, and adapts according to the rules we provide it with. With constant advancements being made, artificial intelligence is poised to enter a golden age.  This technology is being used to build smart cities, autonomous vehicles, medical diagnostic tests, and expanding every day.</p>
                    </div>
                </div>
            </section>
            <Footer customstyle={style}/>
        </div>

    )
}