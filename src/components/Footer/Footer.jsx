import "./Footer.css";
import Logo from "../Logo/Logo";
import { navTabs } from "../../data";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo />

            <p className="footer_text">
              Professionelle Lösungen für Glasfaser, WiFi,
              Kameraüberwachung, Alarmanlagen und moderne
              Netzwerkinfrastruktur.
            </p>
          </div>

          <div className="column">
            <div className="routes_name">Navigation</div>

            <div className="routes_container">
              {navTabs.map((route, i) => (
                <Link
                  to={route.id}
                  className="route_item"
                  key={i}
                  smooth
                  duration={500}
                >
                  <p className="name">{route.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="column">
            <div className="routes_name">Kontakt</div>

            <div className="routes_container">
              <p className="route_item">info@ip-connect.ch</p>
              <p className="route_item">+41 XX XXX XX XX</p>
              <p className="route_item">Schweiz</p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <h3>
            © {new Date().getFullYear()} IP-Connect Technology
          </h3>

          <p className="text_muted">
            Moderne Netzwerk- und Sicherheitslösungen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;