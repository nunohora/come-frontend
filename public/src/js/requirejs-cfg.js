require.config({
  deps: ['underscore', 'jquery'],
  baseUrl: 'src/js/',
  paths: {
    "react":              "libs/react-with-addons",
    "react-router":       "libs/react-router",
    "react-router-shim":  "libs/react-router-shim",
    "text":               "libs/text",
    "jquery":             "libs/jquery-1.11.0.min",
    "jquery-ui":          "libs/jquery-ui-1.10.4.custom.min",
    "jquery-magnific":    "libs/jquery.magnific-popup.min",
    "owl-carousel":       "libs/owl.carousel",
    "bootstrap":          "libs/bootstrap",
    "underscore":         "libs/underscore.min",
    "scripts":            "./scripts",
    "routes":             "../../build/js/routes",
    "views":              "../../build/js/views"
  },

  shim : {
    'react-router-shim': {
      deps: ['react'],
      exports: 'React'
    },
    'react-router': {
      deps:    ['react-router-shim'],
      exports: 'ReactRouter'
    },
    'routes': {
      deps: ['react-router']
    },
    'jquery': {
      deps: ['jquery-ui', 'jquery-magnific'],
      exports: 'jQuery'
    }
  }
});

require(['routes', 'scripts'], function (routes, scripts) {});