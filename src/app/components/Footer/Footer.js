"use client";
import Image from "next/image";
import footercss from "./footer.module.css";
import uiux from "../../services/ui-ux/uiux.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function Footer({customstyle}) {
  const data1 = [
    {
      title: "About",
    },
    {
      title: "Sales Chat",
    },
    {
      title: "Our Clients",
    },
    {
      title: "Contact Us",
    },
    {
      title: "Services provided by web accuracy",
    },
  ];
  const data2 = [
    {
      title: "Earn With Us",
    },
    {
      title: "Project Making",
    },
    {
      title: "Sales & Marketing",
    },
    {
      title: "Developer Support",
    },
    {
      title: "Terms & Conditions",
    },
  ];
  const [style, setStyle] = useState({});
  const [style1, setStyle1] = useState({});
  var path = usePathname();
  // console.log(path);
  useEffect(function () {
    if (path === "/services/ui-ux") {
      document.getElementById(`footerPage`).style.backgroundColor = "black";
    }
    // if (path === '/services/digital-marketing') {
    //     document.getElementById('footerPage').style.position = "fixed";
    //     document.getElementById('footerPage').style.zIndex = "-2";
    //     document.getElementById('footerPage').style.bottom = "0";

    // }
    if (
      path === "/services/app-dev" ||
      path === "/services/adshooting-photography" ||
      path === "/services/digital-marketing"
    ) {
      document.getElementById(`footerPage`).style.backgroundColor =
        "transparent";
      document.getElementById("py1").style.display = "none";
      document.getElementById("py2").style.display = "none";
      document.getElementById("circleAtBottom").style.display = "none";
      document.getElementById("copy").style.color = "black";
      setStyle({ color: "black" });
      setStyle1({ filter: "invert(1)" });
    }
    if (
      path === "/services/adshooting-photography" ||
      path === "/services/digital-marketing"
    ) {
      document.getElementById(`footerPage`).style.backgroundColor =
        "rgb(225,225,225)";
    }
  }, []);
  return (
    <div id="footerPage" style={customstyle} className={footercss.footerPage}>
      <div className={footercss.linksContainer}>
        <div className={footercss.lefttext}>
          <div className={footercss.imageBox}>
            <Image
              height={100}
              width={110}
              style={style1}
              src="/logo.png"
              alt="logo"
            />
          </div>
          <p style={style}>
            lorem iu ia ougf hah hvi igav gha i <br />
            yguy fty dty ytdt gvagi vigaigvagi havgavigv agh
            <br /> ghav ghavhghghga hgagh
          </p>
          <a style={style} href="/">
            webaccuracy@gmail.com
          </a>
          <br />
          <a style={style} href="/">
            666 888 0000
          </a>
        </div>
        {/* <div className={footercss.links}>
                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div> */}
        <div className={footercss.links}>
          <h2 style={style}>Features</h2>
          <div className={footercss.lists}>
            <ul>
              {data1.map(function (el, index) {
                return (
                  <li style={style} className="footerli" key={index}>
                    <span>&#10148; </span>
                    <a href="/">{el.title}</a>
                  </li>
                );
              })}
            </ul>
            <ul>
              {data2.map(function (el, index) {
                return (
                  <li style={style} className="footerli" key={index}>
                    <span>&#10148; </span>
                    <a href="/">{el.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <div className={footercss.links}>
                
            </div> */}
        {/* <div className={footercss.links}>
                <ul>
                    {data3.map(function (el, index) {
                        return <li key={index}><span>&#10148; </span><a>{el.title}</a></li>
                    })}
                </ul>
            </div> */}
      </div>
      <hr className={footercss.line} />
      <div className={footercss.footerbottom}>
        <div className={footercss.social}>
          <div className={footercss.socialImageContainer}>
            <Image
              width={100}
              height={22}
              src="/facebook-app-symbol.svg"
              alt="facebook"
            />
          </div>
          <div className={footercss.socialImageContainer}>
            <Image height={22} width={100} src="/twitter.svg" alt="twitter" />
          </div>
          <div className={footercss.socialImageContainer}>
            <Image
              height={22}
              width={100}
              src="/instagram.svg"
              alt="instagram"
            />
          </div>
        </div>
        <div id="copy" className={footercss.copyright}>
          © 2023: Webaccuracy | Designed by:{" "}
          <span>
            <a href="/">Web Accuracy</a>
          </span>{" "}
          | Powered by:{" "}
          <span>
            <a href="/">Web Accuracy Web Development Group</a>
          </span>
        </div>
      </div>
      <div id="py1" className={footercss.py1}>
        <Image
          height={100}
          width={100}
          src="https://zimed.netlify.app/assets/images/shapes/footer-shape-1.png"
          alt="py1"
        />
      </div>
      <div id="py2" className={footercss.py2}>
        <Image
          height={200}
          width={200}
          src="https://zimed.netlify.app/assets/images/shapes/footer-shape-2.png"
          alt="py2"
        />
      </div>
      <div id="circleAtBottom" className={footercss.circleAtBottom}>
        <Image
          height={500}
          width={500}
          src="https://zimed.netlify.app/assets/images/shapes/footer-shape-3.png"
          alt="circleatbottom"
        />
      </div>
    </div>
  );
}
