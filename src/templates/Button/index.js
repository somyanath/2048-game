import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ label = "", clickHandler }) => {
  return (
    <div className="button" onClick={clickHandler}>
      {label}
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
