const container = document.querySelector('.container');
const cell = document.getElementsByClassName("cell")
const resetButton = document.querySelector("#reset")
const colorButton = document.querySelector("#color-choice")
let gridCount = 50;
let penColor = "black"

//Create 16 divs w/ class of "gridSquare"
function divGrid(gridNumber) {
    let _gridArea = gridCount * gridCount;
    for (let i = 1; i <= _gridArea; i++) {
        let _gridItem = document.createElement('div');
        _gridItem.classList.add('cell');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', _gridItem);
    }
    for (i = 0; i < _gridArea; i++) {
        cell[i].addEventListener('mouseenter', function (event) {
            event.target.style.backgroundColor = penColor;
        })
    }
}

divGrid(gridCount);

//reset grid backgrounds to white
resetButton.addEventListener("click", function () {
    for (i=0; i < (gridCount * gridCount); i++) {
        cell[i].style.backgroundColor = "white";
    }
    penColor = "black";
}, false)

function userColorSelection(event) {
    penColor = event.target.value;
}

colorButton.addEventListener('change', userColorSelection, false);
colorButton.addEventListener('input', userColorSelection, false);
