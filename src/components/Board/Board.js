import React, { useEffect, useState } from 'react'
import { addNumbers, isObjEqual } from '../../utils/helpers';
import PlayArea from '../PlayArea/PlayArea';
import './Board.scss'

const Board = () => {

  const LEFT_ARROW_CODE = 37;
  const UP_ARROW_CODE = 38;
  const RIGHT_ARROW_CODE = 39;
  const DOWN_ARROW_CODE = 40;
  const WIDTH = 4;

  const [gridData, setGridData] = useState(
    [
      0, 0, 0, 0, 
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ]
  );
  const [isGameOver, setGameOver] = useState(false);

  // add number to the matrix
  const insertNumber = (newData) => {
    let tempGrid = [...newData];

    let randNumber = Math.floor(Math.random() * gridData.length);
    if(tempGrid[randNumber] === 0) {
      tempGrid[randNumber] = Math.random() > 0.1 ? 2 : 4;
      return tempGrid;
    } else {
      return insertNumber([...tempGrid]);
    }
  }

  // starting the game by placing two numbers "2" or "4" at random place in the matrix
  const startGame = () => {
    let newData = [...gridData];
    newData = insertNumber(newData);
    newData = insertNumber(newData);
    setGridData(newData);
  }

  // Move Right function
  const moveRight = (tempGrid) => {
    for (let index = 0; index < 16; index++) {
      if(index % 4 === 0) {
        let firstItem = tempGrid[index];
        let secondItem = tempGrid[index+1];
        let thirdItem = tempGrid[index+2];
        let fourthtItem = tempGrid[index+3];

        let row = [firstItem, secondItem, thirdItem, fourthtItem];

        let actualNumbersInRow = row.filter(num => num);
        let missingNumbersLength = 4 - actualNumbersInRow.length;
        let zeroes = Array(missingNumbersLength).fill(0);
        let newRow = [...zeroes,...actualNumbersInRow];

        tempGrid[index] = newRow[0];
        tempGrid[index+1] = newRow[1];
        tempGrid[index+2] = newRow[2];
        tempGrid[index+3] = newRow[3];
      }
    }
    return tempGrid;
  }

  // Move left function
  const moveLeft = (tempGrid) => {
    for (let index = 0; index < 16; index++) {
      if(index % 4 === 0) {
        let firstItem = tempGrid[index];
        let secondItem = tempGrid[index + 1];
        let thirdItem = tempGrid[index + 2];
        let fourthtItem = tempGrid[index + 3];

        let row = [firstItem, secondItem, thirdItem, fourthtItem];

        let actualNumbersInRow = row.filter(num => num);
        let missingNumbersLength = 4 - actualNumbersInRow.length;
        let zeroes = Array(missingNumbersLength).fill(0);
        let newRow = [...actualNumbersInRow,...zeroes];

        tempGrid[index] = newRow[0];
        tempGrid[index+1] = newRow[1];
        tempGrid[index+2] = newRow[2];
        tempGrid[index+3] = newRow[3];
      }
    }
    return tempGrid;
  }

  // Move down function
  const moveDown = (tempGrid) => {
    for (let index = 0; index < 4; index++) {
      let firstItem = tempGrid[index];
      let secondItem = tempGrid[index + WIDTH];
      let thirdItem = tempGrid[index + (WIDTH * 2)];
      let fourthtItem = tempGrid[index + (WIDTH * 3)];

      let column = [firstItem, secondItem, thirdItem, fourthtItem];

      let actualNumbersInColumn = column.filter(num => num);
      let missingNumbersLength = 4 - actualNumbersInColumn.length;
      let zeroes = Array(missingNumbersLength).fill(0);
      let newColumn = [...zeroes,...actualNumbersInColumn];

      tempGrid[index] = newColumn[0];
      tempGrid[index + WIDTH] = newColumn[1];
      tempGrid[index + (WIDTH * 2)] = newColumn[2];
      tempGrid[index + (WIDTH * 3)] = newColumn[3];
    }
    return tempGrid;
  }

  // Move up function
  const moveUp = (tempGrid) => {
    for (let index = 0; index < 4; index++) {
      let firstItem = tempGrid[index];
      let secondItem = tempGrid[index + WIDTH];
      let thirdItem = tempGrid[index + (WIDTH * 2)];
      let fourthtItem = tempGrid[index + (WIDTH * 3)];

      let column = [firstItem, secondItem, thirdItem, fourthtItem];

      let actualNumbersInColumn = column.filter(num => num);
      let missingNumbersLength = 4 - actualNumbersInColumn.length;
      let zeroes = Array(missingNumbersLength).fill(0);
      let newColumn = [...actualNumbersInColumn,...zeroes];

      tempGrid[index] = newColumn[0];
      tempGrid[index + WIDTH] = newColumn[1];
      tempGrid[index + (WIDTH * 2)] = newColumn[2];
      tempGrid[index + (WIDTH * 3)] = newColumn[3];
    }
    return tempGrid;
  }

  // const move = (newGrid, length, nextIndex, firstAddedNumbers) => {
  //   let tempGrid = [...newGrid];
  //   for (let index = 0; index < length; index++) {
  //     let firstItem = tempGrid[index];
  //     let secondItem = tempGrid[index + nextIndex];
  //     let thirdItem = tempGrid[index + (nextIndex * 2)];
  //     let fourthtItem = tempGrid[index + (nextIndex * 3)];

  //     let column = [firstItem, secondItem, thirdItem, fourthtItem];

  //     let actualNumbersInColumn = column.filter(num => num);
  //     let missingNumbersLength = 4 - actualNumbersInColumn.length;
  //     let zeroes = Array(missingNumbersLength).fill(0);

  //     let newColumn = [];
  //     if(firstAddedNumbers) {
  //       newColumn = [...actualNumbersInColumn,...zeroes];
  //     } else {
  //       newColumn = [...zeroes,...actualNumbersInColumn];
  //     }

  //     tempGrid[index] = newColumn[0];
  //     tempGrid[index + nextIndex] = newColumn[1];
  //     tempGrid[index + (nextIndex * 2)] = newColumn[2];
  //     tempGrid[index + (nextIndex * 3)] = newColumn[3];
  //   }
  //   return tempGrid;
  // }

  // Function to add row numbers after moving
  const addRowNumbers = (tempGrid, movement) => {
    let newGrid = [];
    if(movement === 'left') {
      newGrid = addNumbers(tempGrid, 0, 15, 1, true, 'left');
    } else if(movement === 'right') {
      newGrid = addNumbers(tempGrid, 15, 0, 1, true, 'right');
    }

    return newGrid;
  }

  // Function to add column numbers after moving
  const addColumnNumbers = (tempGrid, movement) => {
    let newGrid = [];
    if(movement === 'up') {
      newGrid = addNumbers(tempGrid, 0, 12, WIDTH, false, 'up');
    } else if(movement === 'down') {
      newGrid = addNumbers(tempGrid, 15, 3, WIDTH, false, 'down');
    }

    return newGrid;
  }

  // Function to calculate score
  const calculateScore = () => {
    let score = 0;


  }

  // Function to take care of keyboard key press
  const handleKeyPress = (event) => {
    if(isGameOver) {
      return;
    }
    switch(event.keyCode) {
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
    let gameOver = checkGameOver();
    if(gameOver) {
      setGameOver(true);
    }
  }

  const keyRight = (pseudoRun) => {
    return keyPress(moveRight, addRowNumbers, 'right', pseudoRun);
  }

  const keyLeft = (pseudoRun) => {
    return keyPress(moveLeft, addRowNumbers, 'left', pseudoRun);
  }

  const keyDown = (pseudoRun) => {
    return keyPress(moveDown, addColumnNumbers, 'down', pseudoRun);
  }

  const keyUp = (pseudoRun) => {
    return keyPress(moveUp, addColumnNumbers, 'up', pseudoRun);
  }

  const keyPress = (moveCbFn, addCbFn, movement, pseudoRun) => {
    let gridDataCopy = [...gridData];
    let tempGrid = moveCbFn([...gridData]);
    tempGrid = addCbFn(tempGrid, movement);
    tempGrid = moveCbFn(tempGrid);
    if(!isObjEqual(gridDataCopy, tempGrid)) {
      tempGrid = insertNumber([...tempGrid]);
    }
    if(!pseudoRun) {
      setGridData(tempGrid);
    } else {
      return tempGrid;
    }
  }

  // Check game over function
  const checkGameOver = () => {
    let tempGrid = [...gridData];
    let gameOver = false;

    if(isObjEqual(tempGrid, keyUp(true)) && isObjEqual(tempGrid, keyDown(true)) && 
    isObjEqual(tempGrid, keyRight(true)) && isObjEqual(tempGrid, keyLeft(true))) {
      gameOver = true;
    }

    return gameOver;
  }

  // Reset game or start new game
  const restartGame = () => {
    let newGrid = [
      0, 0, 0, 0, 
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ];

    newGrid = insertNumber([...newGrid]);
    newGrid = insertNumber([...newGrid]);
    setGridData(newGrid);
  }

  useEffect(() => {
    startGame();
  },[]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return function() {
      document.removeEventListener('keydown',handleKeyPress);
    }
  })

  return (
    <div className="board">
      <h1 className="board-heading">2048</h1>
      <p>Join the numbers and get to the <b>2048 tile!</b></p>
      <PlayArea data={gridData} />
    </div>
  )
}

export default Board
