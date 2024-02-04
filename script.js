const container = document.querySelector('#container');
const button = document.querySelector('button');

// Create grid based on user input
function createGrid (numberSquares) {
    for (i = 0; i < (numberSquares * numberSquares); i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.toggle('gridDiv');
        div.style.width = (100 / numberSquares) + "%";
        div.style.height = (100 / numberSquares) + "%";
    }

    // Colour in a block if user hovers on it
    const divs = document.querySelectorAll('.gridDiv');
    divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
    })
})
}

function getChoice () {
    let choice = prompt("Enter the no. squares you want per side in the grid (e.g. 8 will give you an 8x8 grid). 100 is the maximum!");
        // Only allow a choice of 100 or less
        while (choice > 100) {
            choice = prompt("Enter a number that is 100 or less");
        }
        return choice;
}

// Create initial grid
createGrid(16);

// Allow user to resize grid
button.addEventListener('click', () => {
    // Get user choice for size of grid
    choice = getChoice();

    // Remove current grid
    const divs = document.querySelectorAll('.gridDiv');
    divs.forEach((div) => {
        container.removeChild(div);
    })

    // Create new grid as per user choice
    createGrid(choice);
})