'use client'
import Nav from "@/app/components/Nav/nav";
import bpocss from './bpo.module.css'
import LocoScroll from "../../../../hooks/LocoScroll";
import Footer from "@/app/components/Footer/Footer";
export default function Page() {
    const data = [
        {
            id: 0,
            imgsrc: '/1.jpg',
            textHeading: 'BPO',
            textContent: 'lorem ipsum uhiu dua gdadgasdga dgisdg fiafg gaufo gufsfsaud fusdfsdudfvdvfjsdvf sd gg   ugsdfusd g avfu duf vsad u fd uasdu fdsfsgf  bfdjf jhsbfurgu dhbfhvbsdu usdbuauu dsvurfy ufvsdvb dshbvds uvjhdvbuysgfyuesv hbvhdsvd v dsfhsidaiod vbdbsdhfiusd',
        },
        {
            id: 1,
            imgsrc: '/2.jpg',
            textHeading: 'BPO',
            textContent: 'lorem ipsum uhiu dua gdadgasdga dgisdg fiafg gaufo gufsfsaud fusdfsdudfvdvfjsdvf sd gg   ugsdfusd g avfu duf vsad u fd uasdu fdsfsgf  bfdjf jhsbfurgu dhbfhvbsdu usdbuauu dsvurfy ufvsdvb dshbvds uvjhdvbuysgfyuesv hbvhdsvd v dsfhsidaiod vbdbsdhfiusd',
        },
        {
            id: 2,
            imgsrc: '/3.jpg',
            textHeading: 'BPO',
            textContent: 'lorem ipsum uhiu dua gdadgasdga dgisdg fiafg gaufo gufsfsaud fusdfsdudfvdvfjsdvf sd gg   ugsdfusd g avfu duf vsad u fd uasdu fdsfsgf  bfdjf jhsbfurgu dhbfhvbsdu usdbuauu dsvurfy ufvsdvb dshbvds uvjhdvbuysgfyuesv hbvhdsvd v dsfhsidaiod vbdbsdhfiusd',
        },
        {
            id: 3,
            imgsrc: '/4.jpg',
            textHeading: 'BPO',
            textContent: 'lorem ipsum uhiu dua gdadgasdga dgisdg fiafg gaufo gufsfsaud fusdfsdudfvdvfjsdvf sd gg   ugsdfusd g avfu duf vsad u fd uasdu fdsfsgf  bfdjf jhsbfurgu dhbfhvbsdu usdbuauu dsvurfy ufvsdvb dshbvds uvjhdvbuysgfyuesv hbvhdsvd v dsfhsidaiod vbdbsdhfiusd',
        },
        {
            id: 4,
            imgsrc: '/5.jpg',
            textHeading: 'BPO',
            textContent: 'lorem ipsum uhiu dua gdadgasdga dgisdg fiafg gaufo gufsfsaud fusdfsdudfvdvfjsdvf sd gg   ugsdfusd g avfu duf vsad u fd uasdu fdsfsgf  bfdjf jhsbfurgu dhbfhvbsdu usdbuauu dsvurfy ufvsdvb dshbvds uvjhdvbuysgfyuesv hbvhdsvd v dsfhsidaiod vbdbsdhfiusd',
        },
        {
            id: 5,
            imgsrc: '/1.jpg',
            textHeading: 'BPO',
            textContent: 'lorem ipsum uhiu dua gdadgasdga dgisdg fiafg gaufo gufsfsaud fusdfsdudfvdvfjsdvf sd gg   ugsdfusd g avfu duf vsad u fd uasdu fdsfsgf  bfdjf jhsbfurgu dhbfhvbsdu usdbuauu dsvurfy ufvsdvb dshbvds uvjhdvbuysgfyuesv hbvhdsvd v dsfhsidaiod vbdbsdhfiusd',
        },
    ]
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
                    <button><span>Start Now</span></button>
                </text>
            </section>
            <div className={bpocss.something}>
                <h2>Hello World</h2>
            </div>
            <section className={bpocss.section2}>
                <div className={bpocss.sec2Wrapper}>

                    {data.map(function (item) {
                        return (

                            <div key={item.id} className={bpocss.sec2Inside}>


                                <div className={bpocss.left + ' ' + (item.id % 2 !== 0 && bpocss.second)}>
                                    <img src={item?.imgsrc} alt={item?.imgalt} />
                                </div>

                                <div className={bpocss.right + ' ' + (item.id % 2 !== 0 && bpocss.rsecond)}>
                                    <text>
                                        <h2>{item.textHeading}</h2>
                                        <p>{item.textContent}</p>
                                    </text>
                                </div>
                            </div>
                        )

                    })}

                </div>
            </section>

        </main>
          
        <Footer />
    </>)
}