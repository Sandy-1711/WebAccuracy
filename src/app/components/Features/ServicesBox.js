import Image from 'next/image'
import featurecss from './featurecss.module.css'
export default function ServicesBox() {
    const data = [
        {
            id: 1,
            imagesrc: '/web-development.png',
            name: 'Website Development',
            desc: 'Website + Hosting + email @ Just Rs. 7200 Get Your Firm On The Web With a Beautiful Website And Feel The Power in Online, Attract new Customers Who Need You.',
        },

        {
            id: 2,
            imagesrc: '/graphic-designing.png',
            name: 'Graphic Designing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
        },
        {
            id: 3,
            imagesrc: '/digital-marketing.png',
            name: 'Digital Marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui',
        },
        {
            id: 4,
            imagesrc: '/seo-content-writing.png',
            name: 'SEO & Content Writing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .',
        },
        {
            id: 5,
            imagesrc: '/app-development.png',
            name: 'App Development',
            desc: 'Build Your Real Life Android App in not more than 10 days and get free app hosting on google play store. We Will Love To Work on Your Concept!',
        },
        {
            id: 6,
            imagesrc: '/tv-advertisement.png',
            name: 'Product Photography',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .',
        },
        {
            id: 7,
            imagesrc: '/developer-support.png',
            name: 'Developer Support',
            desc: 'We Support your IT project seamlessly, Create your project and get developer support 24*7 . We will love to hear your developing concept .',
        },
        {
            id: 8,
            imagesrc: '/developer-support.png',
            name: 'AD Shooting & photography',
            desc: 'We Support your IT project seamlessly, Create your project and get developer support 24*7 . We will love to hear your developing concept .',
        },

    ]

    function createCard(element) {

        return (<div key={element.id} className={featurecss.servicesCard}>
            <div className={featurecss.servicesCardFront}>
                <Image loading='lazy' height={100} width={100} src={element.imagesrc} href={element.name} />
                <p>{element.name}</p>
            </div>

            <div className={featurecss.servicesCardBack}>{element.desc}</div>
        </div>)
    }
    return <div id='serviceBox' className={featurecss.servicesBox}>
        {data.map(createCard)}

    </div>
}