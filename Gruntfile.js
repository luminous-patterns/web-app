'use strict';

const EwaContinuousGrunt = require('./src/js/grunt/EwaContinuousGrunt');

module.exports = function (grunt) {
  new EwaContinuousGrunt(grunt);
};
