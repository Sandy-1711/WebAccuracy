import Nav from '@/app/components/Nav/nav'
import blockcss from './blockchain.module.css'
import Footer from '@/app/components/Footer/Footer'
import Image from 'next/image'
export default function Blockchain() {
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
                    <p>Leverage the efficiency and scalability of blockchain to optimize your business operations. From supply chain management to identify verification, our blockchain solutions can revolutionize the way you do business, saving time and reducing costs.</p>
                    <button>Let&apos;s Connect</button>
                </div>
                <div className={blockcss.gradContainer}>
                    <div className={blockcss.grad} />
                </div>
                <div className={blockcss.bitcoin}>
                    <Image height={1000} width={1000} src='/bitcoin.png' alt='bitcoin'/>
                </div>
            </div>
            <div className={blockcss.cardContainer}>

                <div className={blockcss.card}>
                    <div className={blockcss.cardInner}>
                        <img src='/logo.png' />
                        <h2>Trading Platform</h2>
                        <p>Seamlessly integrate blockchain solutions into your existing infrastructure, leveraging the benefits of decentralization and enhanced data security.</p>
                    </div>
                    <div className={blockcss.line}></div>
                    <div className={blockcss.cardInner}>
                        <img src='/logo.png' />
                        <h2>Trading Platform</h2>
                        <p>Seamlessly integrate blockchain solutions into your existing infrastructure, leveraging the benefits of decentralization and enhanced data security.</p>
                    </div>
                    <div className={blockcss.line}></div>
                    <div className={blockcss.cardInner}>
                        <img src='/logo.png' />
                        <h2>Trading Platform</h2>
                        <p>Seamlessly integrate blockchain solutions into your existing infrastructure, leveraging the benefits of decentralization and enhanced data security.</p>
                    </div>
                </div>
            </div>

            <div className={blockcss.cardContainer}>

                <div className={blockcss.card2}>
                    <div className={blockcss.card2Image}>
                        <Image height={500} width={500} src='/bitcoin.png' alt='bitcoin'/>
                    </div>
                    <div className={blockcss.card2Text}>
                        <h2>Scale To Millions Of Validators With Minimal Hardware</h2>
                        <p>
                            Stake or lock up, your AVAX to help process transacctions and further secure the Platform providing security guarantees well above the 51 Standar. You Probably have the hardware required to join the platform.
                        </p>
                        <button>Learn More <span>&rarr;</span></button>
                    </div>
                </div>
            </div>
            <div className={blockcss.footer}>
                <Footer />
            </div>
        </main>
    </>
    )
}