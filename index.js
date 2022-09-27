const container = document.querySelector(".container");
const dimensions = 16;
let boxSize = 40;
let gTCS = "";                  //grid-template-columns string


for (let i = 0; i < Math.pow(dimensions,2); i++) {//create grid with dimensions and box size, add border and color grey
    const element = document.createElement('div');
    element.style.width = boxSize+"px"
    element.style.height = boxSize+"px"; 
    element.style.borderStyle = "solid";
    element.style.color = "grey";
    element.style.boxSizing = "border-box";
    element.addEventListener('mouseover', function(){
        changeColor(element);
    })
    container.appendChild(element);
}

for (let i = 0; i < dimensions; i++) {//for loop with dimensions to add column css property the right amount of times
    gTCS += boxSize + "px ";
}

container.style.gridTemplateColumns = gTCS;


function changeColor(element){
element.style.backgroundColor = "red";
}