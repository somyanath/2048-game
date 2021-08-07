import React from 'react'
import { ReactComponent as Undo } from '../../assets/svg/undo.svg';
// import { ReactComponent as Replay } from '../../assets/svg/play.svg';
import { ReactComponent as Replay } from '../../assets/svg/play-2.svg';
import { ReactComponent as Redo } from '../../assets/svg/redo.svg';
import './ExtraFunctions.scss';

const ExtraFunctions = ({
  onClickUndo,
  onClickReplay,
  onClickRedo,
  undoDisabled,
  replayDisabled,
  redoDisabled
}) => {
  return (
    <div className="row">
      <div className={`button-container ${undoDisabled ? 'disabled' : ''}`}>
        <Undo
          className={`button ${undoDisabled ? 'disabled' : ''}`}
          onClick={ !undoDisabled ? onClickUndo : null }
        />
        Undo
      </div>
      <div className={`button-container ${replayDisabled ? 'disabled' : ''}`}>
        <Replay
          className={`button ${replayDisabled ? 'disabled' : ''}`}
          onClick={ !replayDisabled ? onClickReplay : null }
        />
        Replay
      </div>
      <div className={`button-container ${redoDisabled ? 'disabled' : ''}`}>
        <Redo
          className={`button ${redoDisabled ? 'disabled' : ''}`}
          onClick={ !redoDisabled ? onClickRedo : null }
        />
        Redo
      </div>
    </div>
  )
}

export default ExtraFunctions