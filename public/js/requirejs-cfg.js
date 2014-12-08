require.config({
  baseUrl: 'js/',
  deps: ['react'],
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
    "boostrap": "libs/bootstrap",
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
    }
  },

  jsx: {
    fileExtension: ".jsx"
  }  
});

require(['jsx!routes', 'scripts'], function (routes, scripts) {});