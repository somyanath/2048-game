import React from 'react'
import './PlayItem.scss'

const PlayItem = ({ digit, textClass, areaClass }) => {
  return (
    <div className={`board-item${areaClass ? areaClass : ''}`}>
      <span className={`board-item-content${textClass ? textClass : ''}`}>{digit ? digit : ''}</span>
    </div>
  )
}

export default PlayItem
