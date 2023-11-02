import Nav from '@/app/components/Nav/nav'
import blockcss from './blockchain.module.css'
import Footer from '@/app/components/Footer/Footer'
import Image from 'next/image'
export default function Blockchain() {
    var style={
        backgroundColor:'transparent',
    }
    return (<>
        <Nav />
        <main className={blockcss.main}>
            <div className={blockcss.sec1}>

                <text>
                    <h1>
                        Explore the
                        <br />
                        <span>Blockchain</span>
                        <br />
                        Solutions
                    </h1>
                </text>
                <div className={blockcss.middleText}>
                    <p>Welcome to Ranchi&apos;s Leading Web 3.0 and Blockchain Experts: Discover cutting-edge solutions at the forefront of technology with our team of skilled designers and developers in Ranchi.
                    </p>
                    <button>Let&apos;s Connect</button>
                </div>
                <div className={blockcss.gradContainer}>
                    <div className={blockcss.grad} />
                </div>
                <div className={blockcss.bitcoin}>
                    <Image height={1000} width={1000} src='/bitcoin.png' alt='bitcoin' />
                </div>
            </div>
            <div className={blockcss.yellowgradient}/>
            <div className={blockcss.yellowgradient1}/>
            <div className={blockcss.bluegradient1}/>
            <div className={blockcss.bluegradient2}/>
            <div className={blockcss.bluegradient2}/>
            <div className={blockcss.pinkgradient2}/>
            <div className={blockcss.cardContainer}>

                <div className={blockcss.card}>
                    <div className={blockcss.cardInner}>
                        <img src='/logo.png' />
                        <h2>Web 3.0 Revolution</h2>
                        <p> Embrace the future of the internet with our Web 3.0 services. We create immersive and interactive websites that redefine user experiences, leveraging the latest advancements in AI, IoT, and more.</p>
                    </div>
                    <div className={blockcss.line}></div>
                    <div className={blockcss.cardInner}>
                        <img src='/logo.png' />
                        <h2>Blockchain Innovation</h2>
                        <p>Unlock the potential of decentralized systems with our expert Blockchain developers. We build secure and transparent applications that harness the power of blockchain technology for various industries.</p>
                    </div>
                    <div className={blockcss.line}></div>
                    <div className={blockcss.cardInner}>
                        <img src='/logo.png' />
                        <h2>Tailored Solutions</h2>
                        <p> Our team understands that every project is unique. We craft customized strategies to meet your specific goals, ensuring that your Web 3.0 and blockchain solutions are perfectly aligned with your vision.</p>
                    </div>

                </div>
            </div>

            <div className={blockcss.cardContainer}>

                <div className={blockcss.card2}>
                    <div className={blockcss.card2Image}>
                        <Image height={500} width={500} src='/bitcoin.png' alt='bitcoin' />
                    </div>
                    <div className={blockcss.card2Text}>
                        <h2>Seamless Integration</h2>
                        <p>
                            Whether you&apos;re looking to integrate blockchain into your existing systems or create a brand-new Web 3.0 platform, our developers have the expertise to seamlessly integrate these technologies for optimal performance.
                        </p>
                        <button>Learn More <span>&rarr;</span></button>
                    </div>
                </div>
            </div>
            <div className={blockcss.footer}>
                <Footer customstyle={style} />
            </div>
        </main>
    </>
    )
}