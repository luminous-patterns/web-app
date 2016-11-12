'use strict';

const _require = require.main.require;

module.exports = 
  class EwaContinuousGrunt {

    /**
     * Loads Grunt task configurations
     *
     * @return     {Object}  Grunt config by task name
     */
    static loadTaskConfigs () {
      
      let tasksConfig;
      
      _require('./src/js/grunt/configs')(tasksConfig = {});
      
      return tasksConfig;

    }

    /**
     * Constructs the object.
     *
     * @param      {Object}  grunt   A Grunt instance
     */
    constructor (grunt) {
      
      this.tasksConfig = EwaContinuousGrunt.loadTaskConfigs();

      init(this, grunt);

    }

    /**
     * Loads Grunt tasks
     *
     * @param      {Object}  grunt   The Grunt instance
     * @return     {EwaContinuousGrunt}  ewaContinuousGrunt
     */
    loadGruntTasks (grunt) {
      require('load-grunt-tasks')(grunt);
      return this;
    }

    /**
     * Configures Grunt
     *
     * @param      {Object}  grunt   The Grunt instance to configure
     * @return     {EwaContinuousGrunt}  ewaContinuousGrunt
     */
    configureGrunt (grunt) {

      let pkg = grunt.file.readJSON('package.json');
      let tasksConfig = this.tasksConfig;

      Object.assign(tasksConfig, {
        
        pkg: pkg,
        pkgName: '<%= pkg.name %>',

        buildTag: '-dev-' + grunt.template.today('yyyy-mm-dd'),
        buildDir: 'build',

        distDir: 'dist',
        srcDir: 'src',
        staticDir: '<%= srcDir %>/static',
        tmpDir: '.tmp',

        tmpBuildDir: '<%= tmpDir %>/build',

        outDir: '<%= buildDir %>',

      });

      grunt.initConfig(tasksConfig);

      return this;

    }

    /**
     * Bind Grunt tasks
     *
     * @param      {Object}  grunt   The Grunt instance to bind the tasks to
     * @return     {EwaContinuousGrunt}  ewaContinuousGrunt
     */
    bindGruntTasks (grunt) {
      _require('./src/js/grunt/tasks')(grunt);
      return this;
    }

  };

function init (ewaContinuousGrunt, grunt) {
  ewaContinuousGrunt
    .loadGruntTasks(grunt)
    .configureGrunt(grunt)
    .bindGruntTasks(grunt);
}
