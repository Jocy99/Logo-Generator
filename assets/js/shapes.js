class Shape {
    constructor() {
        this.color = '';
        // this.text = '';
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
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="50" y="50" fill="white">${this.text}</text>
        </svg>
        `;
    
    };
};
class Square extends Shape {
    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="0" y="0" width="100" height="100" fill="${this.color}" />
        <text x="50" y="50" fill="white">${this.text}</text>
        </svg>
        `;
    };
};
class Triangle extends Shape {
    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <polygon points="0, 200, 150, 0 150, 200" fill="${this.color}" />
        <text x="75" y="140" fill="white">${this.text}</text>
        </svg>`;
    };
};

// add square and triangle
module.exports = {Circle, Square, Triangle};