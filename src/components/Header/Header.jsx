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
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        }
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

      /*
       * Naslov se pojavi s desne strane,
       * jednom prođe preko gornjeg dijela videa
       * i potpuno nestane lijevo.
       */
      timeline.fromTo(
        ".hero_moving_title span",
        {
          x: "110vw",
          opacity: 0,
        },
        {
          keyframes: [
            {
              x: "75vw",
              opacity: 1,
              duration: 1.2,
              ease: "power1.out",
            },
            {
              x: "10vw",
              opacity: 1,
              duration: 5.5,
              ease: "none",
            },
            {
              x: "-110%",
              opacity: 0,
              duration: 2,
              ease: "power1.in",
            },
          ],
        },
        "<0.3"
      );
    },
    { scope: container }
  );

  return (
    <>
      <div className="hero-bg" ref={container} aria-hidden>
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

        <div className="hero_moving_title">
          <span>Vernetzt. Sicher. Zuverlässig.</span>
        </div>

        <div className="hero_overlay" />
      </div>

      <section className="networking_banner">
        <img
          src={WorldNetworking}
          alt="IP-Connect Technology Netzwerk- und Sicherheitslösungen"
        />
      </section>

      <Achievement />
    </>
  );
};

export default Header;