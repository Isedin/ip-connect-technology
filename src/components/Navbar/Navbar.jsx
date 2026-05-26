import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { navTabs } from "../../data";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../Logo/Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NAV_OFFSET = -64;

const Navbar = () => {
  const container = useRef(null);

  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 145) {
      return setVisible(true);
    }

    setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        ".navbar",
        { y: -120 },
        {
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, [visible]);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.from(".logo", {
        opacity: 0,
        x: -80,
        delay: 0.5,
      });

      timeline.from(".tab", {
        opacity: 0,
        stagger: 0.08,
      });

      timeline.from(".buttons", {
        opacity: 0,
        x: 80,
      });
    },
    { scope: container }
  );

  return (
    <>
      <div className="navbar-spacer" />

      <nav className="navbar" ref={container}>
        {open ? (
          <div
            className="sidebar_overlay"
            onClick={() => setOpen(false)}
          />
        ) : null}

        <Logo />

        <div className={`box nav_tabs ${open ? "open" : ""}`}>
          <div
            className="icon_container cancel_btn"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </div>

          {navTabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.id}
              className="tab"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
              offset={NAV_OFFSET}
              onClick={() => setOpen(false)}
            >
              <p>{tab.name}</p>
            </Link>
          ))}
        </div>

        <div className="box buttons">
          <Link
            to="contact"
            className="btn contact_btn"
            smooth={true}
            duration={500}
            offset={NAV_OFFSET}
          >
            Kontakt
          </Link>

          <div
            className="icon_container menu_btn"
            onClick={() => setOpen(true)}
          >
            <RiMenu3Fill />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;