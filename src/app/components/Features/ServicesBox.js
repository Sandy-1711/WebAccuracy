import Image from 'next/image'
import featurecss from './featurecss.module.css'
export default function ServicesBox() {
    const data = [
        {
            id: 1,
            style: {
                backgroundImage: 'linear-gradient(90deg, #4a0e8f 0%, #b430a7 51%, #4a0e8f 100%)',
                backgroundSize: '200% auto'
            },
            imagesrc: '/web-development.png',
            name: 'Website Development',
            desc: 'Website + Hosting + email @ Just Rs. 7200 Get Your Firm On The Web With a Beautiful Website And Feel The Power in Online, Attract new Customers Who Need You.',
        },

        {
            id: 2,
            style: {
                backgroundImage: 'linear-gradient(90deg, #4453ac 0%, #03a9db 51%, #4453ac 100%)',
                backgroundSize: '200% auto',
            },
            imagesrc: '/graphic-designing.png',
            name: 'Graphic Designing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
        },
        {
            id: 3,
            style: {
                backgroundImage: 'linear-gradient(90deg, #0349a6 0%, #15c27b 51%, #0349a6 100%)',
                backgroundSize: '200% auto',
            },
            imagesrc: '/digital-marketing.png',
            name: 'Digital Marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui',
        },
        {
            id: 4,
            style:{
                backgroundImage: 'linear-gradient(90deg, #e41256 0%, #ffa337 51%, #e41256 100%)',
                backgroundSize:'200% auto',
            },
            imagesrc: '/seo-content-writing.png',
            name: 'SEO & Content Writing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .',
        },
        {
            id: 5,
            style:{
                backgroundImage: 'linear-gradient(90deg, #03a631 0%, #d6c10f 51%, #03a631 100%)',
                backgroundSize:'200% auto',
            },
            imagesrc: '/app-development.png',
            name: 'App Development',
            desc: 'Build Your Real Life Android App in not more than 10 days and get free app hosting on google play store. We Will Love To Work on Your Concept!',
        },
        {
            id: 6,
            style: {
                backgroundImage: 'linear-gradient(90deg, #4a0e8f 0%, #b430a7 51%, #4a0e8f 100%)',
                backgroundSize: '200% auto'
            },
            imagesrc: '/tripod.svg',
            name: 'Product Photography',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .',
        },
        {
            id: 7,
            style: {
                backgroundImage: 'linear-gradient(90deg, #4453ac 0%, #03a9db 51%, #4453ac 100%)',
                backgroundSize: '200% auto',
            },
            imagesrc: '/developer-support.png',
            name: 'Developer Support',
            desc: 'We Support your IT project seamlessly, Create your project and get developer support 24*7 . We will love to hear your developing concept .',
        },
        {
            id: 8,
            style: {
                backgroundImage: 'linear-gradient(90deg, #0349a6 0%, #15c27b 51%, #0349a6 100%)',
                backgroundSize: '200% auto',
            },
            imagesrc: '/tv-advertisement.png',
            name: 'AD Shooting & photography',
            desc: 'We Support your IT project seamlessly, Create your project and get developer support 24*7 . We will love to hear your developing concept .',
        },

    ]

    function createCard(element) {

        return (<div key={element.id} className={featurecss.servicesCard}>
            <div style={element.style} className={featurecss.servicesCardFront}>
                <Image loading='lazy' height={100} width={100} src={element.imagesrc} alt={element.name} />
                <p>{element.name}</p>
            </div>

            <div className={featurecss.servicesCardBack}><p>{element.desc}</p></div>
        </div>)
    }
    return <div id='serviceBox' className={featurecss.servicesBox}>
        {data.map(createCard)}

    </div>
}