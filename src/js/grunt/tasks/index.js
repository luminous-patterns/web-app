'use strict';

const fs = require('fs');
const path = require('path');
const thisFile = path.parse(__filename);

module.exports = registerGruntTasks;

function registerGruntTasks (grunt) {

  let files = fs.readdirSync(__dirname);
  
  files.forEach(file => {
    
    let fileIsNotJs = !/\.js$/.test(file);
    if (fileIsNotJs) {
      return;
    }

    let fileIsThisFile = thisFile.base === file;
    if (fileIsThisFile) {
      return;
    }

    require(['.', file].join('/'))(grunt);

  });

}
