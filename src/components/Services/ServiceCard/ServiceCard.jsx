import "./ServiceCard.css";
import PropTypes from "prop-types";

const ServiceCard = ({ name, icon, description }) => {
  return (
    <div className="service_card">
      <div className="icon_container">{icon}</div>
      <h3 className="name">{name}</h3>
      <p className="text_muted description">{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;