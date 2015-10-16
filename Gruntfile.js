// Ouvrir le terminal de commande : se placer dans le dossier et appuyer sur "Shift + clic droit" => ouvrir une fenêtre de commande

module.exports = function(grunt) {
  
  grunt.initConfig({

    babel: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                "dist/app/js/app.js": "app/js/app.js"
            }
        }
    },
      
    uglify: {
        options: {
            mangle: false
        },
        target: {
            files: {
                "dist/app/js/app.js": "dist/app/js/app.js"
            }
        }
    },

    watch: {
        compileBabel: {
            files: "app/js/app.js",
            tasks: ["compile"]
        },
        compileUglify: {
            files: ["app/js/*.js"],
            tasks: ["uglify"]
        }
    }

  });
  
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  
  grunt.registerTask("compile", ["babel"]);
  grunt.registerTask("goUgly", ["uglify"]);
  grunt.registerTask("goGrunt", ["watch"]);
  
};