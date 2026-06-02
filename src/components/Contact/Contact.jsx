import { useRef, useState } from "react";
import "./Contact.css";
import { contacts } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);

  

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Send failed");
      }

      setStatus({
        type: "success",
        msg: "Ihre Nachricht wurde erfolgreich gesendet.",
      });

      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        msg: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setLoading(false);
    }
  };

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.3,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });

      timeline.fromTo(
        ".contact_form",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 }
      );

      timeline.fromTo(
        ".option",
        { x: 100, opacity: 0 },
        { opacity: 1, stagger: 0.2, x: 0 }
      );
    },
    { scope: container }
  );

  return (
    <section id="contact" ref={container}>
      <div className="container">
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_form_top">
            <h1 className="title">
              <span className="g-text">
                Kontaktieren Sie IP-Connect Technology
              </span>
            </h1>

            <p className="text_muted">
              Professionelle Lösungen für Glasfaser, WiFi,
              Kameraüberwachung, Alarmsysteme und moderne
              Netzwerkinfrastruktur.
            </p>
          </div>

          <div className="contact_form_middle">
            <div className="row">
              <input
                type="text"
                placeholder="Vorname"
                name="firstname"
                className="control"
                value={form.firstname}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Nachname"
                name="lastname"
                className="control"
                value={form.lastname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <input
                type="email"
                placeholder="E-Mail Adresse"
                name="email"
                className="control"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                placeholder="Telefonnummer"
                name="phone"
                className="control"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Ihre Nachricht"
              className="control"
              value={form.message}
              onChange={handleChange}
              required
            />

            {status.msg && (
              <div className={`contact_status ${status.type}`}>
                {status.msg}
              </div>
            )}

            <div className="contact_form_bottom">
              <button className="btn btn_primary" type="submit" disabled={loading}>
                {loading ? "Senden..." : "Nachricht senden"}
              </button>
            </div>
          </div>
        </form>

        <div className="contact_options">
          {contacts.map((contact, index) => (
            <div className="option" key={index}>
              <div className="icon_container">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              </div>

              <h3 className="name">{contact.name}</h3>

              <h4 className="text_muted">{contact.value}</h4>

              <div>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn_primary"
                >
                  {contact.buttonTitle}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;