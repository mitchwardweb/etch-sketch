const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.set-grid');

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

function getGridSize () {
    let gridSize = parseInt(prompt('How many rows/columns?'));
    generateGrid(gridSize);
}

function setGridCss (size) {
    let styles = `
    grid-template-columns: repeat(${size}, ${size}fr);
    grid-template-rows: repeat(${size}, ${size}fr);
    `;
    gridContainer.style.cssText = styles;
}

resetButton.addEventListener('click', getGridSize);