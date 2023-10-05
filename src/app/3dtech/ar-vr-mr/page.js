import Nav from '@/app/components/Nav/nav'
import arvrmrcss from './ar-vr-mr.module.css'
import Image from 'next/image'
import Button from './Button'
import Button2 from './Button2'
export default function Page() {
    return <>
        <div className={arvrmrcss.background}></div>
        <main className={arvrmrcss.main}>
            {/* <Nav /> */}
            <section className={arvrmrcss.section1}>
                <div className={arvrmrcss.container1}>
                    <div className={arvrmrcss.text}>
                        <h1>Journey into the tech of tomorrow</h1>
                        <p>Step into the future with our cutting-edge technology solutions tailored for your business needs.</p>
                    </div>
                    <div className={arvrmrcss.buttonLeft}></div>
                    <div className={arvrmrcss.buttonRight}></div>
                </div>
            </section>
            <section className={arvrmrcss.section2}>
                <div className={arvrmrcss.container2}>
                    <div className={arvrmrcss.text}>
                        <h1>Crafting the future with our innovative tech solutions & services</h1>
                        <p>We're a team of technology enthusiasts committed to delivering exceptional digital solutions that align with your business goals.</p>
                        <div className={arvrmrcss.textButtons}>
                            <Button color="white" text="About us" />
                            <Button2 color="#B14125" text="Meet the team" />
                        </div>

                    </div>
                    <div className={arvrmrcss.cards}>
                        <div className={arvrmrcss.card}></div>
                        <div className={arvrmrcss.card}></div>
                        <div className={arvrmrcss.card}></div>
                        <div className={arvrmrcss.card}></div>
                    </div>
                </div>
            </section>
            <section className={arvrmrcss.section3}>
                <div className={arvrmrcss.container3}>
                    <div className={arvrmrcss.sec3back}>
                        <img src='/sec3orbs.webp' />
                    </div>
                    <div className={arvrmrcss.textBox}>
                        <h1>Discover innovative to help you grow</h1>
                        <Button text="Explore" color="white" />
                    </div>
                </div>
            </section>
            <section className={arvrmrcss.section4}>
                <div className={arvrmrcss.sec4Img}>
                    <img height={500} width={500} src='/sec4img.webp' />
                </div>
                {/* <h1>Dive into our</h1> */}
                {/* <h1>revolutionary</h1> */}
                {/* <h1>technology</h1> */}
            </section>
            <section className={arvrmrcss.section5}>
                <div className={arvrmrcss.sec5inner}>
                    <h1>Experience the new digital era with our comprehensive tech services & solutions</h1>
                </div>
                <div className={arvrmrcss.line}></div>
                <div className={arvrmrcss.sec5innerbottom}>
                    <img src='/1.jpg' />
                    <h1>Innovative & <br />expert team</h1>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
            <section className={arvrmrcss.section6}>
                <div className={arvrmrcss.container}>
                    <div className={arvrmrcss.containerimg}>
                        <img src='/vr-people.jpg' />
                    </div>
                </div>
                <div className={arvrmrcss.container}>
                    <div className={arvrmrcss.containerimg}>
                        <img src='/vr-girl.jpg' />
                    </div>
                </div>
            </section>

        </main>
    </>
}