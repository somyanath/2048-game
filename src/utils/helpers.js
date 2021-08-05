export function isObjEqual(preObj, obj) {
  return JSON.stringify(preObj) === JSON.stringify(obj);
}

// Function to add column numbers after moving
export function addNumbers(newGrid, startIndex, endIndex, nextIndex, extraCheck = false, movement) {
  let tempGrid = [...newGrid];
  if(movement === 'left' || movement === 'up') {
    for (let index = startIndex; index < endIndex; index++) {
      if(tempGrid[index] !== 0 && tempGrid[index] === tempGrid[index + nextIndex] && (extraCheck ? !((index + nextIndex) % 4 === 0) : true)) {
        // let total = tempGrid[index] + tempGrid[index + nextIndex];
        // tempGrid[index] = total;
        // tempGrid[index + nextIndex] = 0;
        tempGrid = addReplace(tempGrid, index, nextIndex, true);
      }
    }
  } else if(movement === 'right' || movement === 'down') {
    for (let index = startIndex; index > endIndex; index--) {
      if(tempGrid[index] !== 0 && tempGrid[index] === tempGrid[index - nextIndex] && (extraCheck ? !((index) % 4 === 0) : true)) {
        // let total = tempGrid[index] + tempGrid[index + nextIndex];
        // tempGrid[index] = total;
        // tempGrid[index + nextIndex] = 0;
        tempGrid = addReplace(tempGrid, index, nextIndex, false);
      }
    }
  }
  return tempGrid;
}

// function to add numbers and replace the values in the paricular index
function addReplace(newGrid, index, nextIndex, addition) {
  let tempGrid = [...newGrid];
  let total = 0;

  if(addition) {
    total = tempGrid[index] + tempGrid[index + nextIndex];
    tempGrid[index + nextIndex] = 0;
  } else {
    total = tempGrid[index] + tempGrid[index - nextIndex];
    tempGrid[index - nextIndex] = 0;
  }
  tempGrid[index] = total;

  return tempGrid;
}

export const getBoxColor = (num) => {
  switch(num) {
    case 2:
      return "#EEE4DA";
    case 4:
      return "#EDE0C8";
    case 8:
      return "#F2B279";
    case 16:
      return "#F39563";
    case 32:
      return "#F07C5F";
    case 64:
      return "#EF5D39";
    case 128:
      return "#EDD072";
    case 256:
      return "#EAC95D";
    case 512:
      return "#ECD767";
    case 1024:
      return "#F2DB60";
    case 2048:
      return "#FFE553";
    default:
      return "#CDC2B4";
  }
}