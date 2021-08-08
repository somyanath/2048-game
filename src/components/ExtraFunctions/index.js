import PropTypes from "prop-types";
import { ReactComponent as Undo } from "../../assets/svg/undo.svg";
import { ReactComponent as Replay } from "../../assets/svg/play.svg";
import { ReactComponent as Redo } from "../../assets/svg/redo.svg";
import "./ExtraFunctions.scss";

const ExtraFunctions = ({
  onClickUndo,
  onClickReplay,
  onClickRedo,
  undoDisabled,
  replayDisabled,
  redoDisabled,
}) => {
  return (
    <div className="row">
      <div className={`feature-container ${undoDisabled ? "disabled" : ""}`}>
        <Undo
          className={`feature ${undoDisabled ? "disabled" : ""}`}
          onClick={!undoDisabled ? onClickUndo : null}
        />
        Undo
      </div>
      <div className={`feature-container ${replayDisabled ? "disabled" : ""}`}>
        <Replay
          className={`feature ${replayDisabled ? "disabled" : ""}`}
          onClick={!replayDisabled ? onClickReplay : null}
        />
        Replay
      </div>
      <div className={`feature-container ${redoDisabled ? "disabled" : ""}`}>
        <Redo
          className={`feature ${redoDisabled ? "disabled" : ""}`}
          onClick={!redoDisabled ? onClickRedo : null}
        />
        Redo
      </div>
    </div>
  );
};

ExtraFunctions.propTypes = {
  onClickUndo: PropTypes.func.isRequired,
  onClickReplay: PropTypes.func.isRequired,
  onClickRedo: PropTypes.func.isRequired,
  undoDisabled: PropTypes.bool.isRequired,
  replayDisabled: PropTypes.bool.isRequired,
  redoDisabled: PropTypes.bool.isRequired,
};

export default ExtraFunctions;
