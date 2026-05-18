import { useRef } from "react";
import "./Header.css";
import Achievement from "../Achievement/Achievement";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AboutMain, WorldNetworking, WorldConnection } from "../../assets";

const Header = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ delay: 0.8 });

      timeline.fromTo(
        ".hero_media",
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
      );

      timeline.from(".title", {
        opacity: 0,
        y: -30,
        duration: 0.7,
      });

      timeline.from(".description", {
        opacity: 0,
        y: -25,
        duration: 0.7,
      });

      timeline.from(".hero_badges .badge", {
        opacity: 0,
        y: 16,
        stagger: 0.12,
        duration: 0.45,
      });
    },
    { scope: container }
  );

  return (
    <>
      <div className="hero-bg" aria-hidden>
        <video
          className="hero_media"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={AboutMain}
        >
          <source src={WorldConnection} type="video/mp4" />
        </video>

        <img className="hero_fallback" src={AboutMain} alt="" />

        <div className="hero_overlay" />
      </div>

      <header id="header" ref={container}>
        <div className="container section-pad-top">
          <div className="row">
            <div className="column">
              <h1 className="title">
                <span className="g-text">
                  Zuverlässige Netzwerk- und Sicherheitslösungen
                </span>
              </h1>

              <p className="text_muted description">
                IP-Connect Technology bietet professionelle Lösungen in den
                Bereichen Glasfaser, WiFi, Alarmsysteme, Kameraüberwachung und
                Netzwerkkabel – zuverlässig, modern und auf Ihre Anforderungen
                abgestimmt.
              </p>

              <div className="hero_badges">
                <span className="badge">Glasfaser</span>
                <span className="badge">WiFi</span>
                <span className="badge">Alarmsysteme</span>
                <span className="badge">Kameraüberwachung</span>
                <span className="badge">Netzwerkkabel</span>
              </div>
            </div>

            <div className="column">
              <div className="image_container">
                <img src={WorldNetworking} alt="IP-Connect Technology" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Achievement />
    </>
  );
};

export default Header;