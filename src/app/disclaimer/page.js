import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/nav";
import disclaimercss from './disclaimer.module.css'
export default function Disclaimer() {
    return (<>
        <Nav />
        <div className={disclaimercss.nav}></div>
        <div className={disclaimercss.main}>
            <div className={disclaimercss.content}>

            <h1>Disclaimer</h1>
            <p>The information contained on this website is for general information purposes only. The information is provided by Web Accuracy. and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                <br />
                In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.We do not provide payment gateways of our own, We also provide websites based on CMS I.e editable and customizable later, We are not liable for Any Scams fraud lent happening through handover sites.
                <br />
                Through this website, you are able to link to other websites which are not under the control of Web Accuracy OPC Private Limited. If we find later any misuse of the provided website we will take the website down and no refund will be provided. We may also take legal action.We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                <br/>
                Every effort is made to keep the website up and running smoothly. However, Web Accuracy. takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.Even if the work was committed on cash/NEFT/Online Payments/UPI or Cheque.</p>
            </div>
    </div>
    <Contact/> 
    <Footer/>
     </>)
}