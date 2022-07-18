const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.set-grid');
let gridCell;

function initialGrid () {
    setGridCss(50);
    for (let i = 0; i < 2500; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        gridContainer.appendChild(gridItem);
    }
}

function generateGrid (number) {
    let totalGridCells = number * number;
    emptyGrid();
    setGridCss(number);
    for (let i = 0; i < totalGridCells; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        gridContainer.appendChild(gridItem);
    }
}

function emptyGrid () {
    while(gridContainer.firstChild){ 
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function makeGrid () {
    let gridSize = parseInt(prompt('How many rows/columns?'));

    if (gridSize > 100 || gridSize < 2 || gridSize === NaN) {
        alert('Please enter a number between 2 and 100!');
    } else {
        generateGrid(gridSize);
        gridCell = Array.from(document.querySelectorAll('.grid'));
        gridCell.forEach(cell => cell.addEventListener('mouseenter', changeCellColour));
    }
}

function setGridCss (size) {
    let styles = `
    grid-template-columns: repeat(${size}, ${size}fr);
    grid-template-rows: repeat(${size}, ${size}fr);
    `;
    gridContainer.style.cssText = styles;
}

function changeCellColour () {
    this.classList.add('touched');
}

function makeEventListeners () {
    resetButton.addEventListener('click', makeGrid);
    gridCell.forEach(cell => cell.addEventListener('mouseenter', changeCellColour));
}

initialGrid();
gridCell = Array.from(document.querySelectorAll('.grid'));

makeEventListeners();