
const fs = require("fs");
const { Circle, Triangle, Square } = require("./shapes");
const inquirer = require("inquirer");


class CLI {
  run() {
    // TO DO using inquirier create prompts to help render your svg
    

    inquirer.prompt([
      {
        type: "maxlength-input",
        name: "text",
        message: "Enter our SVG name (max 3 characters)",
        maxLength: 3
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter color or hex code you want for your text"
      },
      {
        type: "list",
        name: "shapes",
        message: "What shape do you want to use ?",
        choices:["circle","square","triangle"]
      },
      {
        type: "input",
        name: "color",
        message:"Enter color or hex code you want to use for our shape"
      },

    ])  

    .then((response)=>{
      let svgLogo;
      let makeShape;

      switch (response.shapes){
       
       
        case "triangle":
          const triangle = new Triangle()
          triangle.setColor(response.color)
          triangle.setText(response.text)
          triangle.setTextColor(response.textColor)
          makeShape = triangle.render()
          svgLogo = `svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

          ${makeShape}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

          </svg>`

          fs.writeFile("shape.svg", svgLogo, (err) =>{
            err ? console.log(err) : console.log("Success!!!...SVG logo created");
          })


          case "square":
          const square = new Square()
          square.setColor(response.color)
          square.setText(response.text)
          square.setTextColor(response.textColor)
          makeShape = square.render()
          svgLogo = `svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

          ${makeShape}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

          </svg>`

          fs.writeFile("shape.svg", svgLogo, (err) =>{
            err ? console.log(err) : console.log("Success!!!...SVG logo created");
          })


          case "circle":
          const circle = new Circle()
          circle.setColor(response.color)
          circle.setText(response.text)
          circle.setTextColor(response.textColor)
          makeShape = circle.render()
          svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

          ${makeShape}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

          </svg>`

          fs.writeFile("logo.svg", svgLogo, (err) =>{
            err ? console.log(err) : console.log("Success!!!...SVG logo created");
          })
        }
      })
    };
  }

  // TO DO using your inquirer data use fs to write your svg file


module.exports = CLI;
