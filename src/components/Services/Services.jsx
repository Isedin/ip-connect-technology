import { useRef } from "react";
import "./Services.css";
import { services } from "../../data";
import ServiceCard from "./ServiceCard/ServiceCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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

      timeline.from(".title", { opacity: 0, y: -50 });
      timeline.from(".sub_title", { opacity: 0, y: -50 });
      timeline.fromTo(
        ".service_card",
        { y: 100, opacity: 0 },
        { opacity: 1, stagger: 0.25, y: 0 }
      );
    },
    { scope: container }
  );

  return (
    <section id="services" ref={container}>
      <div className="container">
        <div className="services_top">
          <h1 className="title">
            <span className="g-text">Unsere Dienstleistungen</span>
          </h1>
          <h3 className="sub_title">
            Professionelle Lösungen für moderne Kommunikation, Sicherheit und
            stabile Netzwerkinfrastruktur
          </h3>
        </div>

        <div className="services_container">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;