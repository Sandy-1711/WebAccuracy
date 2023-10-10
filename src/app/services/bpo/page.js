'use client'
import Nav from "@/app/components/Nav/nav";
import bpocss from './bpo.module.css'
import LocoScroll from "../../../../hooks/LocoScroll";
import Footer from "@/app/components/Footer/Footer";
export default function Page() {
    LocoScroll(true);
    return (<>
        <Nav />
        <main data-scroll-container className={bpocss.main}>
            <section className={bpocss.section1}>
                <video autoPlay loop muted src="/bpo.mp4"></video>
                <text>
                    <h2>Welcome
                        to the premier destination for
                        Digital Marketing and Marketers in <span>Ranchi</span>!</h2>
                    {/* <p>Welcome to the best bpo service in all over Ranchi, at a price that is durt in your palmes.</p> */}
                    <button><span>Start Now</span></button>
                </text>
            </section>
            <div className={bpocss.something}>
                <h2>Hello World</h2>
            </div>
            <section className={bpocss.section2}>
                <div className={bpocss.sec2Wrapper}>

                    <div className={bpocss.sec2Inside}>

                        <div className={bpocss.left}>
                            <img src="/1.jpg" />
                        </div>
                        <div className={bpocss.right}>
                            <text>
                                <h2>BPO</h2>
                                <p>lorem ipsum uhiu dua gdadgasdga dgisdg fiafg gaufo gufsfsaud fusdfsdudfvdvfjsdvf sd gg   ugsdfusd g avfu duf vsad u fd uasdu fdsfsgf  bfdjf jhsbfurgu dhbfhvbsdu usdbuauu dsvurfy ufvsdvb dshbvds uvjhdvbuysgfyuesv hbvhdsvd v dsfhsidaiod vbdbsdhfiusd </p></text>
                        </div>
                    </div>
                    <div className={bpocss.sec2Inside}>

                        <div className={bpocss.left+' '+bpocss.second}>
                            <img src="/2.jpg" />
                        </div>
                        <div className={bpocss.right+' '+bpocss.rsecond}>
                            <text>
                                <h2>BPO</h2>
                                <p>lorem ipsum uhiu dua gdadgasdga dgisdg fiafg gaufo gufsfsaud fusdfsdudfvdvfjsdvf sd gg  ugsdfusd g avfu duf vsad u fd uasdu fdsfsgf  bfdjf jhsbfurgu dhbfhvbsdu usdbuauu dsvurfy ufvsdvb dshbvds uvjhdvbuysgfyuesv hbvhdsvd v dsfhsidaiod vbdbsdhfiusd </p></text>
                        </div>
                    </div>
                    <div className={bpocss.sec2Inside}>

                        <div className={bpocss.left}>
                            <img src="/3.jpg" />
                        </div>
                        <div className={bpocss.right}>
                            <text>
                                <h2>BPO</h2>
                                <p>lorem ipsum uhiu dua gdadgasdga dgisdg fiafg gaufo gufsfsaud fusdfsdudfvdvfjsdvf sd gg  ugsdfusd g avfu duf vsad u fd uasdu fdsfsgf  bfdjf jhsbfurgu dhbfhvbsdu usdbuauu dsvurfy ufvsdvb dshbvds uvjhdvbuysgfyuesv hbvhdsvd v dsfhsidaiod vbdbsdhfiusd </p></text>
                        </div>
                    </div>

                </div>
            </section>
            
        </main>
        <Footer/>
    </>)
}