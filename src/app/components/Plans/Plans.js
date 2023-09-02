import Image from 'next/image'
import plancss from './plancss.module.css'
export default function Plans() {
    const data1 = [
        {
            imgsrc: '/web.png',
            plan: 'Business Startup',
            price: '7,200/-',
            features: [


                {
                    a: '1 Year Domain',
                },
                {
                    a: '1 Website',
                },
                {
                    a: 'Unlimited Disc Space',
                },
                {
                    a: 'Unlimited Bandwidth',
                },
                {
                    a: '1 Web Mail',
                },
                {
                    a: '1 Sub-domain',
                },
                {
                    a: 'Linux Hosting',
                },
                {
                    rup: true,
                    a: '600 / Year',
                },
                {
                    rup: true,
                    a: 'SEO',
                },

            ]
        },
        {
            imgsrc: '/cube (1).png',
            plan: 'Business Pro',
            price: '12,999/-',
            features: [


                {
                    a: '1 Year Domain',
                },
                {
                    a: '1 Website',
                },
                {
                    a: 'Unlimited Disc Space',
                },
                {
                    a: 'Unlimited Bandwidth',
                },
                {
                    a: '5 Web Mail',
                },
                {
                    a: '2 Sub-domain',
                },
                {
                    a: 'Powerful Linux Server',
                },
                {
                    rup: true,
                    a: '300 / Year',
                },
                {
                    rup: true,
                    a: 'SEO',
                },

            ]
        },
        {
            imgsrc: '/pyramid.png',
            plan: 'Go Premium',
            price: '23,999/-',
            features: [


                {
                    a: '2 Year Domain'
                },
                {
                    a: '1 Website',
                },
                {
                    a: 'Unlimited Disc Space',
                },
                {
                    a: 'Unlimited Bandwidth',
                },
                {
                    a: 'Unlimited Web Mail',
                },
                {
                    a: 'Unlimited Sub-domain',
                },
                {
                    a: 'Powerful Linux Server',
                },
                {
                    rup: true,
                    a: '0 / Year (Lifetime Service)',
                },
                {
                    rup: true,
                    a: 'SEO',
                },

            ]
        },

    ]
    const data2 = [
        {
            imgsrc: '/cube.png',
            plan: 'Business Startup',
            price: '14,999/-',
            features: [
                {
                    a: 'Hybrid Html5 App',
                },
                {
                    a: 'Play Store Hosting',

                },
                {
                    a: 'Unlimited Web Space',
                },
                {
                    a: 'Unlimited Bandwidth',
                },
                {
                    a: '1 Domain',
                },
                {
                    a: '2 Sub Domain',
                },
                {
                    a: 'Unlimited Mysqli',
                },
                {
                    rup: true,
                    a: '1500 / Year (Service)',
                },

            ]
        },
        {
            imgsrc: '/octahedron.png',
            plan: 'Business Pro',
            price: '27,999/-',
            features: [
                {
                    a: 'Hybrid Html5 + Native App',
                },
                {
                    a: 'Play Store Hosting',

                },
                {
                    a: 'Unlimited Web Space',
                },
                {
                    a: 'Unlimited Bandwidth',
                },
                {
                    a: '1 Domain + Website',
                },
                {
                    a: 'Unlimited Sub Domain',
                },
                {
                    a: 'Unlimited Mysqli',
                },
                {
                    rup: true,
                    a: '1,200 / Year (Service)',
                },

            ]
        },
        {
            imgsrc: '/octahedron (1).png',
            plan: 'Go Premium',
            price: '49,999/-',
            features: [
                {
                    a: 'Fully Native App',
                },
                {
                    a: 'Play Store Hosting',

                },
                {
                    a: 'Unlimited Web Space',
                },
                {
                    a: 'Unlimited Bandwidth',
                },
                {
                    a: '1 Domain + Website',
                },
                {
                    a: 'Unlimited Sub Domain',
                },
                {
                    a: 'Unlimited Mysqli',
                },
                {
                    rup: true,
                    a: '0 / Year (Lifetime Service)',
                },

            ]
        },
    ]

    return (<div className={plancss.planPage}>
        <div className={plancss.floatingobject1}>
            <img src={'https://zimed.netlify.app/assets/images/shapes/banner-shapes-1-6.png'} alt='object1' />
        </div>
        <div className={plancss.floatingobject2}>
            <img src={'https://zimed.netlify.app/assets/images/shapes/pricing-shape-2.png'} alt='object2' />
        </div>
        <div className={plancss.floatingobject3}>
            <img src='https://zimed.netlify.app/assets/images/shapes/pricing-shape-1.png' alt='object3' />
        </div>
        <div className={plancss.belowPlanPage}>


            <div className={plancss.outer}>
                <div className={plancss.inner}>
                    <h1>Create One Now</h1>
                    <p>Create a Website Now and Get Unlimited Hosting for Lifetime + 1 Year Domain @ Just Rs. 7200/-</p>
                </div>
                <div className={plancss.line}></div>
                <div className={plancss.buttondiv}>
                
                    <button>Start</button>
                </div>
            </div>
            <div className={plancss.planHeading}>
                <h1>WEBSITE PLANS FOR YOUR BUSINESS / CONCEPT</h1>
            </div>
            <div className={plancss.planCards}>
                {data1.map(function (el, index) {
                    return (<div key={index} className={plancss.planCard}>
                        <div className={plancss.planCardImage}>
                            <Image height={100} width={100} src={el.imgsrc} alt='plan' />
                            <h1>&#8377;  {el.price}</h1>
                            <p>{el.plan}</p>
                        </div>

                        <div className={plancss.features}>
                            {el.features.map(function (elel, index) {
                                if (elel.rup === true) {
                                    return <p key={index}>&#8377; {elel.a}</p>
                                }
                                return <p key={index}>{elel.a}</p>
                            })}
                        </div>
                        <div className={plancss.planButton}>
                            <button>BUILD NOW!</button>
                        </div>
                    </div>)
                })}

            </div>
            <div className={plancss.planCards}>
                {data2.map(function (el, index) {
                    return (<div key={index} className={plancss.planCard}>
                        <div className={plancss.planCardImage}>
                            <Image height={100} width={100} src={el.imgsrc} alt='plan' />
                            <h1>&#8377;  {el.price}</h1>
                            <p>{el.plan}</p>
                        </div>
                        <div className={plancss.features}>
                            {el.features.map(function (elel, index) {
                                if (elel.rup === true) {
                                    return <p key={index}>&#8377; {elel.a}</p>
                                }
                                return <p key={index}>{elel.a}</p>
                            })}
                        </div>
                        <div className={plancss.planButton}>
                            <button>BUILD NOW!</button>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </div>)
}