import "./Logo.css";
import logo from "../../assets/ip-connect-logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <h1>
        IP-Connect <span>TECHNOLOGY</span>
      </h1>
    </div>
  );
};

export default Logo;