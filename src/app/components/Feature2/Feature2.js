import featurecss from './feature2.module.css'
export default function Feature2() {
    return <div className={featurecss.page}>
        <div className={featurecss.pattern1}><img src='https://zimed.netlify.app/assets/images/shapes/cta-1-shape-3.png' /></div>
        <div className={featurecss.pattern2}>
            <img src='https://zimed.netlify.app/assets/images/shapes/cta-1-shape-1.png' />
        </div>
        <div className={featurecss.phonePhoto}>
            <img src='https://zimed.netlify.app/assets/images/mocs/cta-moc-1-1.png' />
        </div>
        <div className={featurecss.text}>
            <p>Checkout App Features</p>
            <h1>Control Everything From One Application</h1>
            <div className={featurecss.features}>
                <div className={featurecss.feature}>
                    <div className={featurecss.circleicon}>
                        <div className={featurecss.line}></div>
                    </div>
                    <div className={featurecss.featureText}>

                        <p>Feature Here</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
                <div className={featurecss.feature}>
                    <div className={featurecss.circleicon}>
                    <div className={featurecss.line1}></div>
                    </div>
                    <div className={featurecss.featureText}>

                        <p>Feature Here</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
                <div className={featurecss.button}>

                    <button >Show More</button>
                </div>
            </div>

        </div>
    </div>
}