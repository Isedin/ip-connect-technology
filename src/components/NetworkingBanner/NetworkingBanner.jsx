import "./NetworkingBanner.css";
import { WorldNetworking } from "../../assets";

const NetworkingBanner = () => {
  return (
    <section
      className="networking_banner"
      aria-label="IP-Connect Leistungen"
    >
      <img
        src={WorldNetworking}
        alt="IP-Connect Technology Netzwerk- und Sicherheitslösungen"
      />
    </section>
  );
};

export default NetworkingBanner;