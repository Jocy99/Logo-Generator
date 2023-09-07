const { Circle , Triangle, Square} = require('./shapes');

const svgTemplate = (color, shape, text) => {
    let shapeType;
    switch (shape) {
        case 'circle':
            shapeType = new Circle();
            shapeType.setColor(color);
            shapeType.setText(text);
            break;
        // repeat for square and triangle
        case 'triangle':
            shapeType = new Triangle();
            shapeType.setColor(color);
            shapeType.setText(text);
            break;
        case 'square':
            shapeType = new Square();
            shapeType.setColor(color);
            shapeType.setText(text);
            break;
    };

    return shapeType.render();
};

module.exports = svgTemplate;
