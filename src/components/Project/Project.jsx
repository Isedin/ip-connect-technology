import React, { useRef } from "react";
import "./Project.css";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Slider = SlickSlider.default || SlickSlider;

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.4,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });

      timeline.from("#project .title", { opacity: 0, y: -50 });
      timeline.from("#project .sub_title", { opacity: 0, y: -50 });
      timeline.fromTo(
        "#project .slick-slide",
        { x: 100, opacity: 0 },
        { opacity: 1, stagger: 0.25, x: 0 }
      );
    },
    { scope: container }
  );

  const settings = {
    infinite: true,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <section id="project" ref={container}>
      <div className="project_top">
        <h1 className="title">
          <span className="g-text">Unsere Projekte</span>
        </h1>
        <h3 className="sub_title">
          Moderne Netzwerk-, Glasfaser- und Sicherheitslösungen
        </h3>
      </div>

      <Slider {...settings} className="projects_container">
        {projects.map((project, index) => (
          <div className="project_card" key={index}>
            <div className="image_container">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="box">
              <h1 className="name">{project.title}</h1>
            </div>

            <div className="details">
              <h3 className="name">{project.title}</h3>
              <p className="text_muted_description">{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Project;