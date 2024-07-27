const grid = document.querySelector(".container");

function drawGrid(noOfBoxesHeight, noOfBoxesWidth) {
    for (let i = 0; i < (noOfBoxesHeight * noOfBoxesWidth); i++) {
        const boxDimension = Math.floor(720 / noOfBoxesWidth);

        const square = document.createElement("div");
        
        square.style.backgroundColor = "rgb(243, 244, 246)";
        square.style.width = boxDimension + "px";
        square.style.height = boxDimension + "px";
        square.style.border = "2px solid"
        addHoverEffect(square);
        grid.appendChild(square);
    }
}

function addHoverEffect(square) {
    square.addEventListener("mouseenter", function () {
        const red = Math.floor((Math.random() * 256));
        const blue = Math.floor((Math.random() * 256));
        const green = Math.floor((Math.random() * 256));
        square.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    });
}

const gridSizeButton = document.querySelector(".gridSize");
gridSizeButton.addEventListener("click", function(){
    const noOfBoxesHeight = prompt("Enter height: ");
    const noOfBoxesWidth = prompt("Enter width: ");
    if((noOfBoxesHeight || noOfBoxesWidth) > 100){
        window.alert("Cannot be more than 100!");
        location.reload();
    }
    grid.innerHTML = "";
    drawGrid(noOfBoxesHeight, noOfBoxesWidth);
})


