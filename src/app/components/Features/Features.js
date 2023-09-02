
import Image from 'next/image'
import featurecss from './featurecss.module.css'
import ServicesBox from './ServicesBox'
export default function Features() {

    return (<main className={featurecss.main}>
        <div className={featurecss.text}>
            <p>Services We Provide</p>
            <h1>WE DESIGN DIGITAL PRODUCTS THAT
                HELP GROW BUSINESSES.</h1>
        </div>
        <ServicesBox />
        
    </main>)
}