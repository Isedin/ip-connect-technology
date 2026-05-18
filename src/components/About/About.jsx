import { useRef } from "react";
import "./About.css";
import {
  AboutMain,
  Glasfaser,
  AboutWifi,
  CcTv,
} from "../../assets";
import { FaWifi, FaNetworkWired } from "react-icons/fa";
import { HiOutlineShieldCheck, HiOutlineBolt } from "react-icons/hi2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });

      timeline.from(".company_photo", { opacity: 0, x: -50 });
      timeline.from(".title", { opacity: 0, y: -50 });
      timeline.from(".sub_title", { opacity: 0, y: -50 });
      timeline.from(".box", { opacity: 0, x: 50, stagger: 0.25 });
      timeline.from(".description", { opacity: 0, y: 50 });
      timeline.from(".group", { opacity: 0, y: 50 });
      timeline.from(".buttons_container", { opacity: 0, y: 50 });
    },
    { scope: container }
  );

  return (
    <section id="about" ref={container}>
      <div className="container">
        <div className="column company_photo">
          <img src={AboutMain} alt="IP-Connect Technology" />
        </div>

        <div className="column">
          <h1 className="title">
            <span className="g-text">Über Uns</span>
          </h1>

          <h3 className="sub_title">
            Moderne Netzwerklösungen für zuverlässige, sichere und stabile
            Kommunikation.
          </h3>

          <div className="company_media_container">
            <div className="box">
              <img src={Glasfaser} alt="Glasfaser" />
            </div>
            <div className="box">
              <img src={AboutWifi} alt="WiFi" />
            </div>
            <div className="box">
                  <img src={CcTv} alt="Sicherheitssysteme" />
            </div>
          </div>

          <p className="text_muted description">
            IP-Connect Technology ist spezialisiert auf professionelle Lösungen
            in den Bereichen Glasfaser, WiFi, Alarmsysteme,
            Kameraüberwachung und Netzwerkkabel. Wir unterstützen Privat- und
            Geschäftskunden mit moderner Technik, sauberer Installation und
            zuverlässiger Umsetzung – von der Planung bis zur fertigen
            Inbetriebnahme.
          </p>

          <div className="group">
            <div className="row">
              <div className="icon_container">
                <HiOutlineBolt />
              </div>
              <div className="details">
                <p className="text_muted">Glasfaser</p>
                <h3>Schnelle und stabile Verbindungen</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaWifi />
              </div>
              <div className="details">
                <p className="text_muted">WiFi</p>
                <h3>Leistungsstarke drahtlose Netzwerke</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <HiOutlineShieldCheck />
              </div>
              <div className="details">
                <p className="text_muted">Sicherheit</p>
                <h3>Alarm- und Kameraüberwachung</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaNetworkWired />
              </div>
              <div className="details">
                <p className="text_muted">Netzwerk</p>
                <h3>Strukturierte Verkabelung</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;