// Base class for shapes
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render(){
    return '<circle cx="150" cy="100" r="80" fill="$(green)" />'
  }
}
//  TO DO create a method that renders a circle for your svg


class Triangle extends Shape {
  render(){
    return '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />'
  }
}
 //  TO DO create a method that renders a triangle for your svg


class Square extends Shape {
  render(){
    return '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />'
  }
}
 //  TO DO create a method that renders a square for your svg 

module.exports = { Circle, Triangle, Square };
