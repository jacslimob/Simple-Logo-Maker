const Triangle = require('./triangle')
const Circle = require('./circle');
const Square = require('./square')

describe('Triangle and color', () => {
    it('Should return triangle string with blue as the color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})
});

describe('Circle and color', () => {
    it('Should return circle string with gold as the color', () => {
        const shape = new Circle();
        shape.setColor("gold");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="gold" />');
})
});

describe('Square and color', () => {
    it('Should return square string with purple as the color', () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<rect x="50" y="10" width="200" height="200" fill="purple" />');
})
});