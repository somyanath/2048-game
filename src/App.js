/* eslint-disable prefer-destructuring */
import "./App.scss";
import { useEffect, useState } from "react";
import { isObjEqual } from "./utils/helpers";
import useLocalStorage from "./hooks/useLocalStorage";
import Board from "./components/Board";
import ExtraFunctions from "./components/ExtraFunctions";
import MessagePortal from "./components/Message";

function App() {
  const LEFT_ARROW_CODE = 37;
  const UP_ARROW_CODE = 38;
  const RIGHT_ARROW_CODE = 39;
  const DOWN_ARROW_CODE = 40;
  const WIDTH = 4;

  const INIT_DATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const [gridData, setGridData] = useLocalStorage("gridData", INIT_DATA);
  const [newGame, setNewGame] = useLocalStorage("newGame", true);
  const [totalScore, setTotalScore] = useLocalStorage("score", 0);
  const [bestScore, setBestScore] = useLocalStorage("best", 0);
  const [scoreLog, setScoreLog] = useLocalStorage("scoreLog", []);
  const [isWon, setIsWon] = useLocalStorage("isWon", false);
  const [movesLog, setMovesLog] = useLocalStorage("movesLog", []);
  const [undoMoves, setUndoMoves] = useLocalStorage("undoMoves", []);
  const [replayStatus, setReplayStatus] = useLocalStorage(
    "replayStatus",
    false
  );
  const [status, setStatus] = useState({
    visible: false,
    message: "",
  });

  // add number to the matrix
  const insertNumber = (newData) => {
    const tempGrid = [...newData];

    const randNumber = Math.floor(Math.random() * gridData.length);
    if (tempGrid[randNumber] === 0) {
      tempGrid[randNumber] = Math.random() > 0.1 ? 2 : 4;
      return tempGrid;
    }
    return insertNumber([...tempGrid]);
  };

  // starting the game by placing two numbers "2" or "4" at random place in the matrix
  const startGame = () => {
    let newData = [...gridData];
    newData = insertNumber(newData);
    newData = insertNumber(newData);
    setGridData(newData);
    setNewGame(false);
  };

  // The logic for moving the numbers in a row/column in the specified direction
  const move = (newGrid, index, nextIndex, firstAddedNumbers) => {
    const tempGrid = [...newGrid];

    const list = [
      tempGrid[index],
      tempGrid[index + nextIndex],
      tempGrid[index + nextIndex * 2],
      tempGrid[index + nextIndex * 3],
    ];

    const actualNumbersinList = list.filter((num) => num);
    const missingNumbersLength = 4 - actualNumbersinList.length;
    const zeroes = Array(missingNumbersLength).fill(0);

    let newList = [];
    if (firstAddedNumbers) {
      newList = [...actualNumbersinList, ...zeroes];
    } else {
      newList = [...zeroes, ...actualNumbersinList];
    }

    [
      tempGrid[index],
      tempGrid[index + nextIndex],
      tempGrid[index + nextIndex * 2],
      tempGrid[index + nextIndex * 3],
    ] = newList;

    return tempGrid;
  };

  // Abstracted function for move
  const abstractedMove = (
    newGrid,
    length,
    nextIndex,
    firstAddedNumbers,
    movement
  ) => {
    let tempGrid = [...newGrid];
    for (let index = 0; index < length; index++) {
      if (movement === "horizontal" && index % 4 === 0) {
        tempGrid = move(tempGrid, index, nextIndex, firstAddedNumbers);
      } else if (movement === "vertical") {
        tempGrid = move(tempGrid, index, nextIndex, firstAddedNumbers);
      }
    }
    return tempGrid;
  };

  // Move Right function
  const moveRight = (tempGrid) => {
    const newGrid = [...tempGrid];
    const result = abstractedMove(newGrid, 16, 1, false, "horizontal");

    return result;
  };

  // Move left function
  const moveLeft = (tempGrid) => {
    const newGrid = [...tempGrid];
    const result = abstractedMove(newGrid, 16, 1, true, "horizontal");

    return result;
  };

  // Move down function
  const moveDown = (tempGrid) => {
    const newGrid = [...tempGrid];
    const result = abstractedMove(newGrid, 4, WIDTH, false, "vertical");

    return result;
  };

  // Move up function
  const moveUp = (tempGrid) => {
    const newGrid = [...tempGrid];
    const result = abstractedMove(newGrid, 4, WIDTH, true, "vertical");

    return result;
  };

  // function to add numbers and replace the values in the paricular index
  const addReplace = (newGrid, index, nextIndex, addition) => {
    const tempGrid = [...newGrid];
    let total = 0;
    if (addition) {
      total = tempGrid[index] + tempGrid[index + nextIndex];
      tempGrid[index + nextIndex] = 0;
    } else {
      total = tempGrid[index] + tempGrid[index - nextIndex];
      tempGrid[index - nextIndex] = 0;
    }
    tempGrid[index] = total;
    return tempGrid;
  };

  // Abstracted Function to add numbers after moving
  const addNumbers = (
    newGrid,
    startIndex,
    endIndex,
    nextIndex,
    extraCheck = false,
    movement,
    pseudoRun
  ) => {
    let tempGrid = [...newGrid];
    let moveTotal = 0;
    if (movement === "left" || movement === "up") {
      for (let index = startIndex; index < endIndex; index++) {
        if (
          tempGrid[index] !== 0 &&
          tempGrid[index] === tempGrid[index + nextIndex] &&
          (extraCheck ? !((index + nextIndex) % 4 === 0) : true)
        ) {
          tempGrid = addReplace(tempGrid, index, nextIndex, true);
          moveTotal += tempGrid[index];
        }
      }
    } else if (movement === "right" || movement === "down") {
      for (let index = startIndex; index > endIndex; index--) {
        if (
          tempGrid[index] !== 0 &&
          tempGrid[index] === tempGrid[index - nextIndex] &&
          (extraCheck ? !(index % 4 === 0) : true)
        ) {
          tempGrid = addReplace(tempGrid, index, nextIndex, false);
          moveTotal += tempGrid[index];
        }
      }
    }
    if (moveTotal && !isObjEqual(tempGrid, newGrid) && !pseudoRun) {
      setTotalScore((prevTotal) => prevTotal + moveTotal);
    }
    return tempGrid;
  };

  // Function to add row numbers after moving
  const addRowNumbers = (tempGrid, movement, pseudoRun) => {
    let newGrid = [];
    if (movement === "left") {
      newGrid = addNumbers(tempGrid, 0, 15, 1, true, "left", pseudoRun);
    } else if (movement === "right") {
      newGrid = addNumbers(tempGrid, 15, 0, 1, true, "right", pseudoRun);
    }

    return newGrid;
  };

  // Function to add column numbers after moving
  const addColumnNumbers = (tempGrid, movement, pseudoRun) => {
    let newGrid = [];
    if (movement === "up") {
      newGrid = addNumbers(tempGrid, 0, 12, WIDTH, false, "up", pseudoRun);
    } else if (movement === "down") {
      newGrid = addNumbers(tempGrid, 15, 3, WIDTH, false, "down", pseudoRun);
    }

    return newGrid;
  };

  // Abstracted function for all keypress functions
  const keyPress = (moveCbFn, addCbFn, movement, pseudoRun) => {
    if (isWon) {
      setStatus({ visible: true, message: "Congrats!! You Won" });
      return;
    }

    if (replayStatus) {
      return;
    }

    const oldGrid = [...gridData];
    let tempGrid = moveCbFn([...gridData]);
    tempGrid = addCbFn(tempGrid, movement, pseudoRun);
    tempGrid = moveCbFn(tempGrid);

    // Now we are checking for change in array,
    //   if yes: we'll update the move history ,then we'll check if array has 2048 or not,
    //     if yes: we update won status and the pop up message
    //     if no: we insert new "2" or "4" number into the grid
    //   if no: we check for game over
    if (!isObjEqual(oldGrid, tempGrid)) {
      setMovesLog([...movesLog, oldGrid]);
      if (tempGrid.includes(2048)) {
        setIsWon(true);
        setStatus({ visible: true, message: "congratulations" });
      } else {
        tempGrid = insertNumber([...tempGrid]);
      }

      // Here after every move we are resetting our undoMove array, as this is what is checked for redoing moves
      if (undoMoves.length) {
        setUndoMoves([]);
      }
    }
    // eslint-disable-next-line no-use-before-define
    if (!tempGrid.includes(0) && !pseudoRun && checkGameOver(tempGrid)) {
      setStatus({ visible: true, message: "Game Over!" });
    }

    // Here we are checking if this is a fake key press or not
    //   if yes: just return the array and not change any state data
    //   if no: update the state data
    if (!pseudoRun) {
      setGridData(tempGrid);
    } else {
      // eslint-disable-next-line consistent-return
      return tempGrid;
    }
  };

  const keyRight = (pseudoRun) => {
    return keyPress(moveRight, addRowNumbers, "right", pseudoRun);
  };

  const keyLeft = (pseudoRun) => {
    return keyPress(moveLeft, addRowNumbers, "left", pseudoRun);
  };

  const keyDown = (pseudoRun) => {
    return keyPress(moveDown, addColumnNumbers, "down", pseudoRun);
  };

  const keyUp = (pseudoRun) => {
    return keyPress(moveUp, addColumnNumbers, "up", pseudoRun);
  };

  // Check game over function
  const checkGameOver = (newGrid) => {
    const tempGrid = [...newGrid];
    if (!isObjEqual(tempGrid, keyUp(true))) {
      return false;
    }
    if (!isObjEqual(tempGrid, keyDown(true))) {
      return false;
    }
    if (!isObjEqual(tempGrid, keyRight(true))) {
      return false;
    }
    if (!isObjEqual(tempGrid, keyLeft(true))) {
      return false;
    }
    return true;
  };

  // Function to take care of keyboard key press
  const handleKeyPress = (event) => {
    switch (event.keyCode) {
      case RIGHT_ARROW_CODE:
        keyRight(false);
        break;

      case LEFT_ARROW_CODE:
        keyLeft(false);
        break;

      case DOWN_ARROW_CODE:
        keyDown(false);
        break;

      case UP_ARROW_CODE:
        keyUp(false);
        break;

      default:
        break;
    }
  };

  // Reset game or start new game
  const onClickNewGame = () => {
    setScoreLog([...scoreLog, totalScore]);
    setMovesLog([]);
    setUndoMoves([]);
    setIsWon(false);
    setNewGame(true);
    setTotalScore(0);
    setGridData(INIT_DATA);
  };

  // Function on click of Undo button
  const onClickUndo = () => {
    const history = [...movesLog];
    const lastMove = history.pop();
    setMovesLog(history);
    setUndoMoves([...undoMoves, gridData]);
    setGridData(lastMove);
  };

  // Function on click of Redo button
  const onClickRedo = () => {
    const history = [...movesLog];
    const tempUndoMoves = [...undoMoves];
    const nextMove = tempUndoMoves.pop();
    history.push(gridData);
    setMovesLog(history);
    setUndoMoves(tempUndoMoves);
    setGridData(nextMove);
  };

  // Function on click of Replay button
  const onClickReplay = () => {
    setReplayStatus(true);
    const history = [...movesLog];
    history.push(gridData);
    for (let i = 0; i < history.length; i++) {
      setTimeout(() => {
        setGridData(history[i]);
        if (i === history.length - 1) {
          setReplayStatus(false);
        }
      }, i * 2000);
    }
  };

  // Function on click of OK button
  const onClickOk = () => {
    setStatus({ ...status, visible: false });
  };

  // Function on click of Try button
  const onClickTry = () => {
    setStatus({ ...status, visible: false });
    onClickNewGame();
  };

  useEffect(() => {
    if (newGame) {
      startGame();
    }
  }, [newGame]);

  useEffect(() => {
    setBestScore(Math.max(...scoreLog, totalScore));
  }, [totalScore]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="App">
      <Board
        gridData={gridData}
        totalScore={totalScore}
        bestScore={bestScore}
        onClickNewGame={onClickNewGame}
      />
      <div className="extra-functions-container">
        <ExtraFunctions
          onClickUndo={onClickUndo}
          onClickReplay={onClickReplay}
          onClickRedo={onClickRedo}
          undoDisabled={!movesLog.length || replayStatus || isWon}
          replayDisabled={!movesLog.length || replayStatus}
          redoDisabled={!undoMoves.length || replayStatus}
        />
      </div>
      {status.visible && (
        <MessagePortal
          message={status.message}
          buttons={[
            {
              label: "OK",
              clickHandler: onClickOk,
            },
            {
              label: `${isWon ? "NEW GAME" : "TRY AGAIN"}`,
              clickHandler: onClickTry,
            },
          ]}
        />
      )}
    </div>
  );
}

export default App;
