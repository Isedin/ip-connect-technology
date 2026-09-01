import { useEffect, useMemo, useRef, useState } from "react";
import "./Gallery.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  galleryCategories,
  glasfaserSubcategories,
} from "../../data/galleryData";

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 12;

const Gallery = () => {
  const container = useRef(null);

  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "10% bottom",
        },
      });

      timeline.from("#gallery .title, #gallery .sub_title", {
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.5,
      });

      timeline.from("#gallery .gallery_category_card", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
      });
    },
    { scope: container }
  );

  const categories = useMemo(
    () => galleryCategories.filter((category) => category.id !== "all"),
    []
  );

  const activeCategoryData = useMemo(() => {
    if (!activeCategory) return null;

    return galleryCategories.find(
      (category) => category.id === activeCategory
    );
  }, [activeCategory]);

  const filteredImages = useMemo(() => {
    if (!activeCategoryData) return [];

    if (
      activeCategory === "glasfaser" &&
      activeSubcategory !== "all"
    ) {
      const subcategory = glasfaserSubcategories.find(
        (item) => item.id === activeSubcategory
      );

      return subcategory?.images || [];
    }

    return activeCategoryData.images || [];
  }, [
    activeCategory,
    activeSubcategory,
    activeCategoryData,
  ]);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const hasMore = visibleCount < filteredImages.length;

  const changeCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubcategory("all");
    setVisibleCount(INITIAL_COUNT);
    setIdx(0);
  };

  const closeCategory = () => {
    setActiveCategory(null);
    setActiveSubcategory("all");
    setVisibleCount(INITIAL_COUNT);
    setIdx(0);
  };

  const changeSubcategory = (subcategoryId) => {
    setActiveSubcategory(subcategoryId);
    setVisibleCount(INITIAL_COUNT);
    setIdx(0);
  };

  const openAt = (index) => {
    setIdx(index);
    setOpen(true);
  };

  const next = () => {
    setIdx(
      (current) =>
        (current + 1) % filteredImages.length
    );
  };

  const prev = () => {
    setIdx(
      (current) =>
        (current - 1 + filteredImages.length) %
        filteredImages.length
    );
  };

  useEffect(() => {
    if (!open) return;
    if (!filteredImages.length) return;

    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (event.key === "ArrowRight") {
        setIdx(
          (current) =>
            (current + 1) % filteredImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setIdx(
          (current) =>
            (current - 1 + filteredImages.length) %
            filteredImages.length
        );
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, filteredImages.length]);

  useEffect(() => {
    if (!container.current) return;

    const cards =
      container.current.querySelectorAll(".gallery_item");

    if (!cards.length) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.35,
      }
    );
  }, [
    activeCategory,
    activeSubcategory,
    visibleCount,
  ]);

  return (
    <section id="gallery" ref={container}>
      <div className="container">
        <div className="gallery_header">
          <h1 className="title">
            <span className="g-text">
              Unsere Galerie
            </span>
          </h1>

          <h3 className="sub_title">
            Einblicke in Projekte und Ausführung
          </h3>
        </div>

        {!activeCategory ? (
          <div className="gallery_categories">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className="gallery_category_card"
                onClick={() =>
                  changeCategory(category.id)
                }
              >
                <div className="gallery_category_card_top">
                  <span className="category_name">
                    {category.title}
                  </span>

                  <span className="category_arrow">
                    →
                  </span>
                </div>

                <span className="category_count">
                  {category.images.length > 0
                    ? `${category.images.length} Bilder`
                    : "Projekte folgen"}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <>
            <div className="gallery_selected_header">
              <button
                type="button"
                className="gallery_back"
                onClick={closeCategory}
              >
                ← Alle Kategorien
              </button>

              <div>
                <h2>{activeCategoryData?.title}</h2>

                <p>
                  {filteredImages.length}{" "}
                  {filteredImages.length === 1
                    ? "Bild"
                    : "Bilder"}
                </p>
              </div>
            </div>

            {activeCategory === "glasfaser" && (
              <div className="subcategory_filters">
                {glasfaserSubcategories.map(
                  (subcategory) => (
                    <button
                      key={subcategory.id}
                      type="button"
                      className={`subcategory_btn ${
                        activeSubcategory ===
                        subcategory.id
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        changeSubcategory(
                          subcategory.id
                        )
                      }
                    >
                      {subcategory.title}
                    </button>
                  )
                )}
              </div>
            )}

            {filteredImages.length > 0 ? (
              <>
                <div className="gallery_grid">
                  {visibleImages.map(
                    (image, index) => (
                      <button
                        type="button"
                        className="gallery_item"
                        key={image.path}
                        onClick={() =>
                          openAt(index)
                        }
                        aria-label={`Bild ${
                          index + 1
                        } öffnen`}
                      >
                        <img
                          src={image.src}
                          alt={`${
                            activeCategoryData.title
                          } Projekt ${
                            index + 1
                          }`}
                          loading="lazy"
                        />

                        <div className="gallery_item_overlay">
                          <span>
                            Vergrößern
                          </span>
                        </div>
                      </button>
                    )
                  )}
                </div>

                <div className="gallery_footer">
                  <p className="gallery_count">
                    {Math.min(
                      visibleCount,
                      filteredImages.length
                    )}{" "}
                    von {filteredImages.length} Bildern
                  </p>

                  {hasMore && (
                    <button
                      type="button"
                      className="btn btn_primary load_more"
                      onClick={() =>
                        setVisibleCount(
                          (current) =>
                            current +
                            LOAD_MORE_COUNT
                        )
                      }
                    >
                      Mehr anzeigen
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="empty_gallery">
                <h3>Projekte folgen</h3>

                <p>
                  Für diese Kategorie werden
                  demnächst weitere Referenzen
                  veröffentlicht.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {open && filteredImages[idx] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="overlay"
            onClick={() => setOpen(false)}
          />

          <figure className="lightbox_inner">
            <img
              src={filteredImages[idx].src}
              alt={`${
                activeCategoryData.title
              } Projekt ${idx + 1}`}
            />

            <figcaption>
              {activeCategoryData.title} ·{" "}
              {idx + 1} / {filteredImages.length}
            </figcaption>

            <button
              type="button"
              className="lb_btn lb_close"
              onClick={() => setOpen(false)}
              aria-label="Schließen"
            >
              ×
            </button>

            {filteredImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="lb_btn lb_prev"
                  onClick={prev}
                  aria-label="Vorheriges Bild"
                >
                  ‹
                </button>

                <button
                  type="button"
                  className="lb_btn lb_next"
                  onClick={next}
                  aria-label="Nächstes Bild"
                >
                  ›
                </button>
              </>
            )}
          </figure>
        </div>
      )}
    </section>
  );
};

export default Gallery;