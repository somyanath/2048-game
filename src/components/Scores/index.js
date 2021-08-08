import PropTypes from "prop-types";
import "./Scores.scss";

const Scores = ({ score, bestScore }) => {
  return (
    <div className="score-container">
      <div className="score-area">
        <div className="score-title">Score</div>
        <div className="score">{score}</div>
      </div>
      <div className="score-area">
        <div className="score-title">Best</div>
        <div className="score">{bestScore}</div>
      </div>
    </div>
  );
};

Scores.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default Scores;
