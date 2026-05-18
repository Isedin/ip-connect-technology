import React, { useEffect, useRef } from "react";
import "./Achievement.css";
import { FaWifi } from "react-icons/fa";
import { FaUsersLine, FaNetworkWired } from "react-icons/fa6";
import ReactOdometer from "react-odometerjs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Achievement = () => {
  const [clients, setClients] = React.useState(0);
  const [systems, setSystems] = React.useState(0);
  const [years, setYears] = React.useState(0);
  const container = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setClients(100);
      setSystems(50);
      setYears(10);
    }, 800);

    return () => clearTimeout(id);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".stat_card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          clearProps: "transform",
        }
      );
    },
    { scope: container }
  );

  return (
    <section id="stats" className="stats section-pad-bottom">
      <div className="container">
        <div className="stats_container" ref={container}>
          <div className="stat_card">
            <div className="icon_container">
              <FaUsersLine />
            </div>
            <div className="details">
              <div className="count_row">
                <ReactOdometer value={clients} className="title" />
                <h1 className="g-text title">+</h1>
              </div>
              <small className="text_muted">Zufriedene Kunden</small>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_container">
              <FaNetworkWired />
            </div>
            <div className="details">
              <div className="count_row">
                <ReactOdometer value={systems} className="title" />
                <h1 className="g-text title">+</h1>
              </div>
              <small className="text_muted">Installierte Systeme</small>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_container">
              <FaWifi />
            </div>
            <div className="details">
              <div className="count_row">
                <ReactOdometer value={years} className="title" />
                <h1 className="g-text title">+</h1>
              </div>
              <small className="text_muted">Jahre Erfahrung</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;