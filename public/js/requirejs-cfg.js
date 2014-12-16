require.config({
  deps: ['star-rating'],
  baseUrl: 'js/',
  paths: {
    "react": "libs/react-with-addons",
    "react-router": "libs/react-router",
    "react-router-shim": "react-router-shim",
    "JSXTransformer": "libs/JSXTransformer",
    "jsx": "libs/requirejs-jsx-plugin",
    "text": "libs/text",
    "jquery": "libs/jquery-1.11.0.min",
    "jquery-ui": "libs/jquery-ui-1.10.4.custom.min",
    "jquery-magnific": "libs/jquery.magnific-popup.min",
    "owl-carousel": "libs/owl.carousel",
    "bootstrap": "libs/bootstrap",
    "star-rating": "libs/star-rating.min",
    "scripts": "./scripts",
    "routes": "./routes",
    "views": "./views"
  },

  shim : {
    'react-router-shim': {
      exports: 'React'
    },
    'react-router': {
      deps:    ['react-router-shim'],
      exports: 'ReactRouter'
    },
    'routes': {
      deps: ['react', 'jquery']
    },
    'jquery': {
      deps: ['jquery-ui', 'jquery-magnific'],
      exports: 'jQuery'
    },
    'star-rating': {
      deps: ['jquery', 'bootstrap']
    }
  },

  jsx: {
    fileExtension: ".jsx"
  }  
});

require(['jsx!routes', 'scripts'], function (routes, scripts) {});