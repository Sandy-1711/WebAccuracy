import Footer from '../components/Footer/Footer'
import contactcss from './contact.module.css'
export default function Contact() {
    return (<main className={contactcss.main}>
        <div className={contactcss.hero}>
            <div className={contactcss.text}>
                <h2>Nothing beats a 1:1 conversation with us</h2>
                <a href='#contactForm'><button className={contactcss.leftbutton}><div className={contactcss.buttonInside}>Contact Us <div className={contactcss.arrow}></div></div></button></a>
                <a href='#callus'><button className={contactcss.rightbutton}><div className={contactcss.buttonInside}>Give us a call <div className={contactcss.arrow}></div></div></button></a>
            </div>
            <div className={contactcss.image}>
                <img src='/1.jpg' />
            </div>
        </div>
        {/* <div className={contactcss.section1}>
            <h2>WHY CONTACT US</h2>
            <h1>Reaching out to us will</h1>
            <div className={contactcss.circles}>
                <div className={contactcss.circle}><h2>Get You Faster Answers To All of Your Questions</h2></div>
                <div className={contactcss.circle}><h2>Get a Personalized Demo For Your Website</h2></div>
                <div className={contactcss.circle}><h2>Get You a Custom Quotation!</h2></div>
            </div>
        </div> */}

        <div id='contactForm' className={contactcss.contactForm}>
            <h2>Contact Our Team</h2>
            <form>
                <div className={contactcss.forminputs}>
                    <input type='text' placeholder='First name*' required />
                    <input type='text' placeholder='Last name*' required />
                </div>
                <div className={contactcss.forminputs}>
                    <input type='email' placeholder='E-mail*' required />
                    <input type='number' placeholder='Phone number*' required />
                </div>
                <input type='text' placeholder='Company*' required />
                <textarea placeholder='Tell us more about your business, so we can get back with a personalized offer' required></textarea>
                <button className={contactcss.formbutton}>
                    <div className={contactcss.buttonInside}>
                        Submit
                        <div className={contactcss.arrow}></div>
                    </div>
                </button>
            </form>
        </div>
        <div id='callus' className={contactcss.section2}>
            <h2>Why Wait? Phone Us Directly?</h2>
            <a href='tel:+918539923343' style={{ textDecoration: 'none' }}><div className={contactcss.callCircle}>
                <h2>668 888 0000</h2>
            </div>
            </a>
        </div>
        <Footer customstyle={{backgroundColor:'#0E0E0E'}} />
    </main>)
}