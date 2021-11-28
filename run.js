
const chokidar = require("chokidar");
const shell = require('shelljs');
const process = require("process");
require('dotenv').config();

const compileHtml = "node ./utils/render.js"
const compileSass = "node-sass src/scss -o dist/css --output-style compressed"

const build = () => {
  shell.exec('clear');
  console.log('Compiling...');
  setTimeout( () => {
    shell.exec('clear');
    shell.exec(compileSass);
    shell.exec("cp -r ./src/assets/* ./dist");
    shell.exec(compileHtml);
  }, 1000);
}

if(process.argv[2] === "dev"){
  console.log(" Development Compiler started... ");
  const watcher = chokidar.watch("./src", {
    ignored: [/(^|[\/\\])\../], // ignore dotfiles
    persistent: true
  })
  
  watcher.on("change", (path) => {
    console.log(path);
    build();
  });
}else if(process.argv[2] === "build"){ 
  build();
}else{
  console.log("npm start < option > ( dev | build) ");
}



