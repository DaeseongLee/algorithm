const temp = [
    [{ num: 1, isChecked: true }, { num: 3, isChecked: true }, { num: 15, isChecked: true }, { num: 23, isChecked: true }, { num: 31, isChecked: true }],
    [{ num: 5, isChecked: true }, { num: 11, isChecked: true }, { num: 27, isChecked: true }, { num: 35, isChecked: true }, { num: 45, isChecked: true }],
    [{ num: 7, isChecked: true }, { num: 13, isChecked: true }, { num: 24, isChecked: true }, { num: 37, isChecked: true }, { num: 47, isChecked: true }],
    [{ num: 8, isChecked: true }, { num: 21, isChecked: true }, { num: 30, isChecked: true }, { num: 33, isChecked: true }, { num: 41, isChecked: true }],
    [{ num: 9, isChecked: true }, { num: 19, isChecked: false }, { num: 32, isChecked: true }, {num: 24, isChecked: false}, {num:39, isChecked: true}],
]

const [leftRight, upDown, leftUpper, rightUpper] = checkBingo(temp, 2, 2);
console.log(leftRight, upDown, leftUpper, rightUpper)

function checkBingo(temp, x, y) {
    const leftRight = checkLeftRight(temp, x, y, 0);
    const upDown = checkUpDown(temp, x, y, 0);
    const leftUpper = checkLeftUpper(temp, x, y, 0);
    const rightUpper = checkRightUpper(temp, x, y, 0);
    return [leftRight, upDown, leftUpper, rightUpper];
}

function checkLeftRight(temp, x, y, cnt) {
    let start = y-1;
    //checkLeft
    while (true) {
        if (temp[x][start].isChecked === false) {
            return 0;
        }
        cnt++;

        if (start === 0) {
            break;
        }
        start--;
    }

    //checkRight
    start = y+1;
    while (true) {
           if (temp[x][start].isChecked === false) {
            return 0;
        }
        cnt++;
        
        //Bingo.const.BINGO_SIZE - 1
        if (start === 4) {
            break;
        }
        start++;
    }

    //Bingo.const.BINGO_SIZE - 1
    if (cnt === 4) {
        return 1
    }
    return 0
}

function checkUpDown(temp, x, y, cnt) {
    let start = x-1;
    //checkUp
    while (true) {
        if (temp[start][y].isChecked === false) {
            return 0;
        }
        cnt++;
        
        if (start === 0) {
            break;
        }
        start--;
    }

    //checkDown
    start = x+1;
    while (true) {
        if (temp[start][y].isChecked === false) {
            return 0;
        }
        cnt++;
        //Bingo.const.BINGO_SIZE - 1
        if (start === 4) {
            break;
        }
        start++;
    }

    //Bingo.const.BINGO_SIZE - 1
    if (cnt === 4) {
        return 1
    }
    return 0
}

function checkLeftUpper(temp, x, y, cnt) {
    let startX = x-1;
    let startY = y-1;
    //checkUp
    while (true) {
        if (temp[startX][startY].isChecked === false) {
            return 0;
        }
        cnt++;
        
        if (startX === 0 || startY === 0 ) {
            break;
        }
        startX--;
        startY--;
    }

    //checkDown
    startX = x+1;
    startY = y+1;
    while (true) {
        if (temp[startX][startY].isChecked === false) {
            return 0;
        }
        cnt++;
        //Bingo.const.BINGO_SIZE - 1
        if (startX === 4 || startY === 4) {
            break;
        }
        startX++;
        startY++;
    }
    //Bingo.const.BINGO_SIZE - 1
    if (cnt === 4) {
        return 1
    }
    return 0
}

function checkRightUpper(temp, x, y, cnt) {
   let startX = x-1;
    let startY = y+1;
    //checkUp
    while (true) {
        if (temp[startX][startY].isChecked === false) {
            return 0;
        }
        cnt++;
        
        if (startX === 0 || startY === 4 ) {
            break;
        }
        startX--;
        startY++;
    }

    //checkDown
    startX = x+1;
    startY = y-1;
    while (true) {
        if (temp[startX][startY].isChecked === false) {
            return 0;
        }
        cnt++;
        //Bingo.const.BINGO_SIZE - 1
        if (startX === 4 || startY === 0) {
            break;
        }
        startX++;
        startY--;
    }

    //Bingo.const.BINGO_SIZE - 1
    if (cnt === 4) {
        return 1
    }
    return 0
}

