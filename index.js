const container = document.querySelector(".container");
const dimensions = 16;
let boxSize = 20;


for (let i = 0; i < Math.pow(dimensions,2); i++) {
    const element = document.createElement('div');
    element.style.width = boxSize+"px"
    element.style.height = boxSize+"px"; 
    element.style.borderStyle = "solid";
    element.style.color = "grey";
    container.appendChild(element);
}

for (let i = 0; i < dimensions; i++) {
    
}
