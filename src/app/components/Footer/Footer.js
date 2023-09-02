import footercss from './footer.module.css'
export default function Footer() {
    const data1 = [
        {
            title: 'Sales Chat',
        },
        {
            title: 'About',
        },
        {
            title: 'Services provided by web accuracy',
        },
        {
            title: 'Contact Us',
        },
        {
            title: 'Our Clients',
        },
    ]
    const data2 = [
        {
            title: "Terms & Conditions",
        },
        {
            title: "Developer Support",
        },
        {
            title: 'Project Making',
        },

    ]
    const data3 = [
        {
            title: "Sales & Marketing",
        },
        {
            title: "Earn With Us",
        },


    ]
    return (<div className={footercss.footerPage}>
        <div className={footercss.linksContainer}>
            <div className={footercss.links}>
                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className={footercss.links}>
                <ul>

                    {data1.map(function (el) {
                        return <li><span>&#10148; </span><a>{el.title}</a></li>
                    })}
                </ul>
            </div>
            <div className={footercss.links}>
                <ul>
                    {data2.map(function (el) {
                        return <li><span>&#10148; </span><a>{el.title}</a></li>
                    })}
                </ul>
            </div>
            <div className={footercss.links}>
                <ul>
                    {data3.map(function (el) {
                        return <li><span>&#10148; </span><a>{el.title}</a></li>
                    })}
                </ul>
            </div>
        </div>
        <div className={footercss.copyright}>
        <p>© 2023: Webaccuracy | Designed by: <span><a>Web Accuracy</a></span> | Powered by: <span><a>Web Accuracy Web Development Group</a></span></p>
        </div>
    </div>)
}