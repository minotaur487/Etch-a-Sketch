function paint(e) {
    if(this.classList.contains('paintedSlot'))
        return;
    this.classList.toggle('paintedSlot');
}

function clear() {
    const gridNodeList = document.querySelectorAll('.grid');
    gridNodeList.forEach(slot => slot.remove());
}

function createGrid(rows, columns) {
    let numOfSlots = rows * columns;
    for (let i=0; i<numOfSlots; i++)
    {
        let slot = document.createElement('div');
        slot.classList.toggle('grid');
        container.appendChild(slot);
    }

    // Attach event listeners for painting
    const grid = document.querySelectorAll('.grid');
    grid.forEach(slot => slot.addEventListener('mouseover', paint));
}

function clearAndConstructNewGrid() {
    clear();
    let dimensions = window.prompt('Input the number of squares per each side for a new grid. Total must be less than 100. Separate the numbers by a space (Row Column)', '16 16');
    dimensions = dimensions.split(' ');
    createGrid(parseInt(dimensions[0]), parseInt(dimensions[1]));
}

const body = document.querySelector('body');
const container = document.querySelector('#container');

// Initialize grid
createGrid(16, 16);

// Painting implementation
const button = document.querySelector('button')
button.addEventListener('click', clearAndConstructNewGrid)