import Image from 'next/image'
import aboutcss from './about.module.css'
import Nav from '../components/Nav/nav'
import Footer from '../components/Footer/Footer'
import Link from 'next/link'
import Video from './components/Video'
import Cursor from './components/Cursor'
import Contact from '../components/Contact/Contact'
export default function AboutPage() {
    return (<div className={aboutcss.aboutPage}>
        <Nav />
        <div className={aboutcss.hero}>
            {/* <Cursor /> */}
            <Image height={1000} width={1000} src={'/logo.png'} alt='logo' />
            {/* <h1>Web Accuracy</h1> */}
            {/* <p>We at web accuracy h iadfuga fafidfgi iuy gfafiaf adfadv</p>
            <p>dg fia wfo iafvaiyfs</p>
            <p>iudfofogasygfoa fdsgfa ugfsad fusdvevfu avbjh vyudg idsjshdvudgfp iaf fyd</p> */}
            <Video />
        </div>
        <div className={aboutcss.container}>
            <div className={aboutcss.image}>

                <Image height={1000} width={1000} src={'/about-web-dev.png'} alt='website development' />
            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>Website development</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href='/services/web-dev'>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={aboutcss.container + ' ' + aboutcss.container2}>
            <div className={aboutcss.image}>

                <Image height={1000} width={1000} src={'https://framerusercontent.com/images/U6c3zcltFBM0PDsAkL1YFpZSSM.png'} alt='app development' />
                <Image height={1000} width={1000} src={'https://framerusercontent.com/images/5lToVG0ayJSToMZALDqmRSO8bhM.png'} alt='app development' />
                <Image height={1000} width={1000} src={'https://framerusercontent.com/images/N4DS9jet0Rb2X5oK6rbPG8l3g.png'} alt='app development' />
            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>App development</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href={'/services/app-dev'}>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={aboutcss.container + ' ' + aboutcss.container3}>
            <div className={aboutcss.image}>

                <Image height={1000} width={1000} src={'/about-ui-ux.png'} alt='website development' />
            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>UI/UX development</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href={'/services/ui-ux'}>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={aboutcss.container + ' ' + aboutcss.container2 + ' ' + aboutcss.container4}>
            <div className={aboutcss.image}>

                <Image height={1000} width={1000} src={'/about-bpo.png'} alt='bpo development' />

            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>BPO</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href={'/services/app-dev'}>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={aboutcss.container + ' ' + aboutcss.container5}>
            <div className={aboutcss.image}>

                <Image height={1000} width={1000} src={'/about-digital-marketing.png'} alt='digital  marketing' />

            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>Digital Marketing</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href={'/services/digital-marketing'}>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={aboutcss.container + ' ' + aboutcss.container2 + ' ' + aboutcss.container6}>
            <div className={aboutcss.image}>

                <Image height={1000} width={1000} src={'https://i0.wp.com/co-dastudios.com/wp-content/uploads/2022/12/Video-2048x2048.jpg'} alt='bpo development' />

            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>Ad shooting and photography</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href={'/services/adshooting-photography'}>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={aboutcss.container + ' ' + aboutcss.container7}>
            <div className={aboutcss.image}>
                <Image height={1000} width={1000} src={'/bitcoin.png'} alt='blockchain' />
            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>Blockchain</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href={'/trends/blockchain'}>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={aboutcss.container + ' ' + aboutcss.container2 + ' ' + aboutcss.container8}>
            <div className={aboutcss.image}>
                <Image height={1000} width={1000} src={'/about-ai-ml.png'} alt='blockchain' />
            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>AI/ML</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href={'/trends/ai-ml'}>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={aboutcss.container + ' ' + aboutcss.container9}>
            <div className={aboutcss.image}>
                <Image height={1000} width={1000} src={'/about-arvrmr.jpeg'} alt='blockchain' />
            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>AR/VR/MR</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href={'/3dtech/ar-vr-mr'}>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={aboutcss.container + ' ' + aboutcss.container2 + ' ' + aboutcss.container10}>
            <div className={aboutcss.image}>
                <Image height={1000} width={1000} src={'/about-immersive-audio.jpg'} alt='immersive audio' />
            </div>
            <div className={aboutcss.text}>
                <div className={aboutcss.textWrapper}>

                    <h2>Immersive Audio</h2>
                    <p>lorem isufhai fugf uasdfgofhau sfgf yasdgfufyadgfuoa sguydvsfusadakydgfyud suyf ads dgds sdvjhdfljds s fsdh dsfsdvfj sdfhgds fgsdf iuhfs hfsdf idfgd sifsd gfisdf sdiusdhfi sdhfihsf isdfh uisdbhiuf sdi</p>
                    <Link href={'/3dtech/immersive-audio'}>
                        <button>Let&apos;s Go</button>
                    </Link>
                </div>
            </div>
        </div>
        <Contact/>
        <Footer />
    </div>)
}