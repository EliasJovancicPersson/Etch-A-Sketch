const container = document.querySelector(".container");
const sizeBtn = document.querySelector('#btnContainer .sizeBtn');
const clearBtn = document.querySelector('#btnContainer .clearBtn');
let dimensions = 16;
let boxSize = 40;
let gTCS = "";                  //grid-template-columns string

CreateGrid();

function CreateGrid(){
    gTCS = "";
    
    for (let i = 0; i < Math.pow(dimensions,2); i++) {//create grid with dimensions and box size, add border and color grey
        const element = document.createElement('div');
        element.style.width = "auto"
        element.style.height = "auto"; 
        element.style.borderStyle = "solid";
        element.style.color = "grey";
        element.style.boxSizing = "border-box";
        element.style.borderWidth = dimensions/(dimensions - 12) + "px";
        element.setAttribute('class','gridElement')
        element.addEventListener('mouseover', function(){
            changeColor(element);
        })
        container.appendChild(element);
    }

    for (let i = 0; i < dimensions; i++) {//for loop with dimensions to add column css property the right amount of times
        gTCS += "auto ";
    }

    container.style.gridTemplateColumns = gTCS;
}

function RemoveGrid(){
    let gridElements = document.querySelectorAll('.gridElement');
    gridElements.forEach(element => {
        element.remove();
    });
}

function changeColor(element){
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

sizeBtn.addEventListener('click',function(){        //prompt for changing size, create grid and remove grid
    dimensions = window.prompt("Enter new size of grid");
    if(dimensions > 100 || dimensions < 1){
        alert("Error max number is 100, min is 1");
    }
    else{
        RemoveGrid();
        CreateGrid();
    }

})

clearBtn.addEventListener('click', function() {
    let gridElements = document.querySelectorAll('.gridElement');
    gridElements.forEach(element => {
        element.style.backgroundColor = "white";
    });
})