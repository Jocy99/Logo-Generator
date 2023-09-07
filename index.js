const fs = require('fs');
const inquirer = require('inquirer');
const svgTemplate = require('./assets/js/svg-template'); // SVG template content


// Prompt the user for perfered logo details
const questions = [
    {
      type: 'list',
      name: 'color',
      message: 'Select a color for your unique logo:',
      choices: ['red', 'green', 'blue', 'purple', 'orange' ],
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for your logo:',
      choices: ['circle', 'triangle', 'square' ],
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text you would like for your logo here:',
    },
    {
      type: 'input',
      name: 'fileName',
      message: 'Enter the filename for your SVG logo (without extension):',
      default: 'logo',
    },
  ];
  
  // Prompt user with questions and generate readme
inquirer
.prompt(questions)
  .then((answers) => {
    // Generate SVG content based on user input
    const svgContent = svgTemplate(answers.color, answers.shape, answers.text, answers.fileName);

    // Save SVG content to a .svg file
    const fileName = `${answers.fileName}.svg`;
    fs.writeFile(fileName, svgContent, (err) => {
      if (err) {
        console.error('Oops, error saving SVG:', err);
      } else {
        console.log(`Success!!! SVG logo saved as ${fileName}`);
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
