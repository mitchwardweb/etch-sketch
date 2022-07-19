const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.set-grid');
const clearGridButton = document.querySelector('.clear-grid');
const drawButton = document.querySelector('.draw');
const eraserButton = document.querySelector('.erase');
let gridCell;
let modeState = 'draw';

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
        makeEventListeners();
    }
}

function setGridCss (size) {
    let styles = `
    grid-template-columns: repeat(${size}, ${size}fr);
    grid-template-rows: repeat(${size}, ${size}fr);
    `;
    gridContainer.style.cssText = styles;
}

function changeCellColour (e) {
    if (e.buttons == 1 || e.buttons == 3) {
        if(modeState === 'draw'){
            this.classList.add('touched');
        } else if (modeState === 'eraser') {
            this.classList.remove('touched');
        }
    }
}

function clearGrid (){
    gridCell.forEach(cell => cell.classList.remove('touched'));
}

function modeSelector (e){
    modeState = e.target.innerText.toLowerCase();
    if (modeState === 'draw'){
        drawButton.classList.add('active');
        eraserButton.classList.remove('active');
    } else if (modeState === 'eraser') {
        eraserButton.classList.add('active');
        drawButton.classList.remove('active');
    }
    console.log(modeState);
}

function makeEventListeners () {
    gridCell = Array.from(document.querySelectorAll('.grid'));
    resetButton.addEventListener('click', makeGrid);
    gridCell.forEach(cell => cell.addEventListener('mousedown', changeCellColour));
    gridCell.forEach(cell => cell.addEventListener('mouseenter', changeCellColour));
    clearGridButton.addEventListener('click', clearGrid);
    drawButton.addEventListener('click', modeSelector);
    eraserButton.addEventListener('click', modeSelector);
}

initialGrid();
makeEventListeners();