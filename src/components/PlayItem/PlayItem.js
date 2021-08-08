import PropTypes from "prop-types";
import "./PlayItem.scss";

const PlayItem = ({ digit, textClass, areaClass }) => {
  return (
    <div className={`board-item${areaClass || ""}`}>
      <span className={`board-item-content${textClass || ""}`}>
        {digit || ""}
      </span>
    </div>
  );
};

PlayItem.propTypes = {
  digit: PropTypes.number.isRequired,
  textClass: PropTypes.string.isRequired,
  areaClass: PropTypes.string.isRequired,
};

export default PlayItem;
