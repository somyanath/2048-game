import React from 'react'
import PlayArea from '../PlayArea/PlayArea';
import Scores from '../Scores/Scores';
import './Board.scss';

const Board = ({ gridData, totalScore, bestScore, onClickNewGame }) => {

  return (
    <div className="board">
      <div className="row justify-space-between align-items-center">
        <h1 className="board-heading">2048</h1>
        <Scores score={totalScore} bestScore={bestScore} />
      </div>
      <div className="button" onClick={onClickNewGame}>New Game</div>
      <p>Join the numbers and get to the <b>2048 tile!</b></p>
      <PlayArea data={gridData} />
    </div>
  )
}

export default Board
