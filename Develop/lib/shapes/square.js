class Square {
    constructor(){
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="50" y="10" width="200" height="200" fill="${this.color}" />`
    }
}


module.exports = Square;