const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

function renderShape(answer) {
    const triangle = new Triangle();
    const circle = new Circle();
    const square = new Square();
    switch (answer.shape){
        case 'triangle':
            triangle.setColor(answer.shapeColor);
            return triangle.render();
        case 'circle':
            circle.setColor(answer.shapeColor);
            return circle.render();
            
        case 'square':
            square.setColor(answer.shapeColor);
            return square.render();    
    }
};
function renderText(response){
    switch(response.shape){
        case 'triangle':
            return `<text x="150" y="175" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`;
            
        case 'circle':
            return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`;
            
        case 'square':
            return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`; 
    }
}
function generateSVG(response){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${renderShape(response)}
  
    ${renderText(response)}
  
  </svg>`;
}

module.exports = generateSVG;