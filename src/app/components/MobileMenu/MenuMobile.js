import Image from 'next/image';
import navcss from '../Nav/navcss.module.css'

const MenuMobile = () => {
    return (

        <div id="menumobile" className={navcss.menumobile}>
            <div className={navcss.logomobile}>
                <Image
                    height={100}
                    width={100}
                    src="/logo.png"
                    alt="logo"
                />
            </div>
            <div className={navcss.menuicon}>
                <img
                    className={navcss.menubar}
                    id="menubar"
                    onClick={function () {
                        document.getElementById("menuclose").style.display = "block";
                        document.getElementById("menubar").style.display = "none";
                        document.getElementById("menumobile").style.transform =
                            "translate(0)";
                    }}
                    src="/menu.svg"
                    alt="menu"
                />
            </div>
            <div className={navcss.menuicon}>
                <img
                    id="menuclose"
                    className={navcss.menuclose}
                    onClick={function () {
                        document.getElementById("menubar").style.display = "block";
                        document.getElementById("menuclose").style.display = "none";
                        document.getElementById("menumobile").style.transform =
                            "translate(-50dvw)";
                    }}
                    src="/close.svg"
                    alt="close"
                />
            </div>

            <ul className={navcss.menulist}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li className={navcss.servicestab}>
                    <span>
                        Services
                    </span>

                    <div className={navcss.submenu}>
                        <ul>
                            <li>
                                <a href="/services/app-dev">App Development</a>
                            </li>
                            <li>
                                <a href="/services/web-dev">Web Development</a>
                            </li>
                            <li>
                                <a href="/services/ui-ux">UI/UX Design</a>
                            </li>
                            <li>
                                <a href="/services/bpo">BPO</a>
                            </li>
                            <li>
                                <a href="/services/digital-marketing">Digital Marketing</a>
                            </li>
                            <li>
                                <a href="/services/adshooting-photography">Ad/Photography</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className={navcss.trendstab}>
                    <span>Web 3.0 & trends </span>
                    <div className={navcss.submenu}>
                        <ul>
                            <li>
                                <a href="/trends/ai-ml">AI/ML</a>
                            </li>
                            <li>
                                <a href="/trends/blockchain">Blockchain</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={navcss.threedtechtab}>
                    <span>3D reality</span>
                    <div className={navcss.submenu}>
                        <ul>
                            <li>
                                <a href="/3dtech/ar-vr-mr">AR/VR/MR</a>
                            </li>
                            <li>
                                <a href="/3dtech/immersive">Immersive Audio</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="/our-clients">Our Clients</a>
                </li>
                <li>
                    <a href="/disclaimer">Disclaimer</a>
                </li>
            </ul>
        </div>)
}

export default MenuMobile