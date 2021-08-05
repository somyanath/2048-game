import React from 'react'
import PlayItem from '../PlayItem/PlayItem'
import './PlayArea.scss'

const PlayArea = ({ data }) => {
  return (
    <div className="board-play-area">
      {
        !!data && data.map((digit, index) => {
          return (
            <PlayItem digit={digit} key={`digit_${index}`} textClass={digit === 2 || digit === 4 ? ' text-dark' : ' text-light'} areaClass={digit ? ` area-${digit}` : ' area'} />
          )
        })
      }
    </div>
  )
}

export default PlayArea
