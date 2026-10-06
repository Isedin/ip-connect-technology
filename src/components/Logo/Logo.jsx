import "./Logo.css";
import logo from "../../assets/ip-connect-logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="IP-Connect Technology" />
    </div>
  );
};

export default Logo;