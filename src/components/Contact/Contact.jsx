import { useRef } from "react";
import "./Contact.css";
import { contacts } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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

      tl.from(".contact_title", {
        opacity: 0,
        y: -30,
        duration: 0.6,
      });

      tl.from(".contact_card", {
        opacity: 0,
        x: 40,
        stagger: 0.15,
        duration: 0.5,
      });
    },
    { scope: container }
  );

  return (
    <section id="contact" ref={container}>
      <div className="container">
        <h1 className="contact_title">Kontakt</h1>

        <div className="contact_list">
          {contacts.map((c, i) => (
            <div key={i} className="contact_card">
              <div className="contact_icon">{c.icon}</div>
              <h3>{c.name}</h3>
              <p>{c.value}</p>
              <a href={c.href}>{c.buttonTitle}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;