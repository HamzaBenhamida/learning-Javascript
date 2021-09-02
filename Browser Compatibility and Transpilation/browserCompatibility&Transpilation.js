/*
Introduction
ES5 — The old JavaScript version that is supported by all modern web browsers.
ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.
*/
var pasta = "Spaghetti"; // ES5 syntax
 
const meat = "Pancetta"; // ES6 syntax
 
let sauce = "Eggs and cheese"; // ES6 syntax
 
// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

/*
caniuse.com I
caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
*/

/*
caniuse.com II
We will use caniuse.com to find the percentage of browsers that support the entire ES5 library, 
then we will look at the percentage of browsers that support modules, a feature introduced in ES6.
*/
let esFivePercentageSupport = 99.71;
let esSixTemplateLiterals = 98.11;

/*
why ES6?
...
*/
var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = 'You can make carbonara with '+ pasta +', '+ meat +', and a sauce made with '+ sauce +'.';

/*
Transpilation With Babel
Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.

Using These command lines to transpile ES6 code to ES5:
-npm install babel-cli
-npm install babel-preset-env
-npm run build
*/

/*
npm init
npm init — A terminal command that creates a package.json file.
package.json — A file that contains information about a JavaScript project.
*/

/*
Install Node Packages
npm install — A command that installs Node packages.
babel-cli — A Node package that contains command line tools for Babel.
babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
*/

/*
.babelrc
.babelrc — A file that specifies the version of the JavaScript source code.
*/

//Inside .babelrc file in the root directory
{
	"presets": ["env"]
}

/*
Babel Source Lib
"build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
*/

// Inside the package.json file in the root directory
{
	"name": "learning-babel",
	"version": "1.0.0",
	"description": "Use babel to transpile Javascript ES66 to ES5",
	"main": "index.js",
	"scripts": {
	  "test": "echo \"Error: no test specified\" && exit 1"
	  "build": "babel src -d lib"
	},
	"author": "",
	"license": "ISC",
	"devDependencies": {
	  "babel-cli": "^6.26.0",
	  "babel-preset-env": "^1.7.0"
	}
      }

/*
Build
npm run build — A command that runs the build script and transpiles ES6+ code to ES5.

npm run build (to transpile code)
*/