const fs = require("fs");
const shell = require('shelljs');
const mappingHtmlChildrens = require('./map');
const { Index } = require("../src/index");
const staticFolderPath = './src/static';

// converting template to html
function renderContent(html) {
  // console.log("compiled successfully...");
  createFolder("./dist");
  createFolder("./dist/css");
  shell.exec("cp -r ./src/assets/* ./dist")
//   shell.exec("cp -r ./src/assets ./dist")
  fs.writeFileSync("./dist/index.html", minify(html));
}

// Create folder
const createFolder = (path) => {
  try {
    fs.mkdirSync(path);
    console.log('Folder', path, 'created');
  } catch (err) {
    // console.log("folder exists");
  }
};

// minify
function minify(html) {
  /*
    -------------------
    Removes Extra spaces
    -------------------*/
  const removedSpace = html.replace(/\s+/g, " ");

  /*
    ------------
    Add Elements
    ------------*/

  const minified = removedSpace.replace(/> <+/g, "><");
  return minified;
}

const mapping = (path, childrens) => {
    const staticTemplate = fs.readFileSync(path, 'utf-8');
    const mappingHTML = staticTemplate.replace('<!-- mapping::children -->', childrens);
    return mappingHTML;
}

var crudeTemplate = Index();
const mappedTemplate = mappingHtmlChildrens(staticFolderPath, crudeTemplate);
const refinedTemplate = minify(mappedTemplate);
renderContent(refinedTemplate);
