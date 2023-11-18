import contactcss from './contact.module.css'
export default function Contact({ page, ...props }) {
    return <div className={contactcss.contactSection} style={{ color: page === 'blockchain' && 'white' }}>
        <h2>Contact Us</h2>
        <div className={contactcss.container} >

            <a href='/contact'><p>webaccuracy@gmail.com</p></a>
            <div className={contactcss.divider}>
                {/* <div cclassName={contactcss.line}></div> */}
                <span>Or</span>
                {/* <div className={contactcss.line}></div> */}
            </div>
            <a href='/contact/#callus'><p>666 888 0000</p></a>
        </div>
    </div>
}