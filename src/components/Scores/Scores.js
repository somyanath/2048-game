import React from 'react'
import './Scores.scss'

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
  )
}

export default Scores
