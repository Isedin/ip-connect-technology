import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} IP-Connect Technology</p>
      </div>
    </footer>
  );
};

export default Footer;