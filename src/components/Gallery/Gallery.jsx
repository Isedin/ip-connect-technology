import React, { useRef, useState, useEffect } from "react";
import "./Gallery.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FiberGallery,
  WifiGallery,
  SecurityGallery,
  WorldConnection,
} from "../../assets";


const IMAGES = [
  {
    type: "image",
    src: FiberGallery,
    title: "Glasfaser Installation",
  },
  {
    type: "image",
    src: WifiGallery,
    title: "WiFi Netzwerke",
  },
  {
    type: "image",
    src: SecurityGallery,
    title: "Kameraüberwachung",
  },
  {
    type: "video",
    src: WorldConnection,
    title: "Netzwerktechnik Video",
    poster: FiberGallery,
  },
];

const Gallery = () => {
  const container = useRef(null);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);


  useGSAP(
    () => {
      gsap.from(
        "#gallery .title, #gallery .sub_title, #gallery .gallery_launch",
        {
          y: 16,
          opacity: 0,
          stagger: 0.12,
          duration: 0.45,
        }
      );
    },
    { scope: container }
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIdx((p) => (p + 1) % IMAGES.length);
      if (e.key === "ArrowLeft")
        setIdx((p) => (p - 1 + IMAGES.length) % IMAGES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const openAt = (i = 0) => {
    setIdx(i);
    setOpen(true);
  };
  const next = () => setIdx((p) => (p + 1) % IMAGES.length);
  const prev = () => setIdx((p) => (p - 1 + IMAGES.length) % IMAGES.length);

  return (
    <section id="gallery" ref={container}>
      <div className="container">
        <h1 className="title">
          <span className="g-text">Unsere Galerie</span>
        </h1>
        <h3 className="sub_title">Einblicke in Projekte und Ausführung</h3>

        <div className="gallery_launch">
          <button className="btn btn_primary" onClick={() => openAt(0)}>
            Galerie öffnen
          </button>
          {/* <p className="text_muted hint">
            Vollbildansicht mit Navigation (ESC, ← →)
          </p> */}

          <div
            className="thumb_strip"
            aria-label="Vorschau Galerie (scrollbar)"
          >
            {IMAGES.map((item, i) => (
              <button
                key={i}
                className={`thumb_mini ${idx === i && open ? "is_active" : ""}`}
                onClick={() => openAt(i)}
                title={item.title}
                data-type={item.type}
              >
                <img
                  src={item.type === "video" ? item.poster : item.src}
                  alt={item.title}
                  loading="lazy"
                />
              </button>
            ))}

          </div>
        </div>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <div className="overlay" onClick={() => setOpen(false)} />
          <figure className="lightbox_inner">
            {IMAGES[idx].type === "image" ? (
              <img src={IMAGES[idx].src} alt={IMAGES[idx].title} />
            ) : (
              <video
                key={idx}
                src={IMAGES[idx].src}
                controls
                autoPlay
                muted
                playsInline
                loop
                poster={IMAGES[idx].poster}
                />
  
            )}
            <figcaption>{IMAGES[idx].title}</figcaption>

            <button
              className="lb_btn lb_close"
              onClick={() => setOpen(false)}
              aria-label="Schließen"
            >
              ×
            </button>
            <button
              className="lb_btn lb_prev"
              onClick={prev}
              aria-label="Vorheriges Bild"
            >
              ‹
            </button>
            <button
              className="lb_btn lb_next"
              onClick={next}
              aria-label="Nächstes Bild"
            >
              ›
            </button>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Gallery;
