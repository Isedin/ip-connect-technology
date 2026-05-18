import { useRef } from "react";
import "./Gallery.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom top",
        },
      });

      tl.from(".gallery_title", {
        opacity: 0,
        y: -30,
        duration: 0.6,
      });

      tl.from(".gallery_text", {
        opacity: 0,
        y: -20,
        duration: 0.5,
      });

      tl.from(".gallery_box", {
        opacity: 0,
        scale: 0.96,
        y: 25,
        stagger: 0.12,
        duration: 0.45,
      });
    },
    { scope: container }
  );

  return (
    <section id="gallery" ref={container}>
      <div className="container">
        <h1 className="gallery_title">Galerie</h1>
        <p className="gallery_text">Unsere Leistungen im Überblick.</p>

        <div className="gallery_grid">
          <div className="gallery_box">Fiber</div>
          <div className="gallery_box">WiFi</div>
          <div className="gallery_box">Alarm</div>
          <div className="gallery_box">CCTV</div>
          <div className="gallery_box">Rack</div>
          <div className="gallery_box">Cabling</div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;