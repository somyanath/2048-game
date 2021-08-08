import PropTypes from "prop-types";
import PlayArea from "../PlayArea/PlayArea";
import Scores from "../Scores/Scores";
import "./Board.scss";

const Board = ({ gridData, totalScore, bestScore, onClickNewGame }) => {
  return (
    <div className="board">
      <div className="row board-header">
        <h1 className="board-heading">2048</h1>
        <Scores score={totalScore} bestScore={bestScore} />
      </div>
      <div className="button" onClick={onClickNewGame}>
        New Game
      </div>
      <p>
        Join the numbers and get to the <b>2048 tile!</b>
      </p>
      <PlayArea data={gridData} />
    </div>
  );
};

Board.propTypes = {
  gridData: PropTypes.instanceOf(Array).isRequired,
  totalScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
  onClickNewGame: PropTypes.func.isRequired,
};

export default Board;
