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
    "owl-carousel":       "libs/owl.carousel",
    "bootstrap":          "libs/bootstrap",
    "underscore":         "libs/underscore.min",
    "routes":             "../../build/js/routes",
    "utils":              "../../src/js/utils",
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
      deps: ['jquery-ui'],
      exports: 'jQuery'
    }
  }
});

require(['routes'], function (routes, scripts) {});