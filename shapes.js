class Shape {
    constructor() {
        this.color = '';
        this.text = '';
    };
  
    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text;
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill=${this.color} />`;
    };
};
class Square extends Shape {
    render() {
        return `square svg syntax here with color ${color}`;
    };
};
class Triangle extends Shape {
    render() {
        return `triangle svg syntax here with color ${color}`;
    };
};

// add square and triangle
module.exports = { Circle };
module.exports = { Triangle };
module.exports = { Square };