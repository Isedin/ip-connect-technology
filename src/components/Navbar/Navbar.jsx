import { useRef } from "react";
import "./Navbar.css";
import { navTabs } from "../../data";
import { Link } from "react-scroll";
import Logo from "../Logo/Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.from(".navbar_logo", {
        opacity: 0,
        x: -40,
        duration: 0.5,
      });

      tl.from(".navbar_link", {
        opacity: 0,
        y: -20,
        stagger: 0.08,
        duration: 0.35,
      });
    },
    { scope: container }
  );

  return (
    <nav className="navbar" ref={container}>
      <div className="navbar_logo">
        <Logo />
      </div>

      <div className="nav_tabs">
        {navTabs.map((tab, i) => (
          <Link
            key={i}
            to={tab.id}
            smooth={true}
            duration={500}
            className="navbar_link"
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;