var src = './src',
	dest = './build';

module.exports = {
	jsxCompile: {
		src: src + '/js/**/*.jsx',
		dest: dest + '/js'
	},
	less: {
		src: [
			src + '/less/font-awesome/font-awesome.less',
			src + '/less/bootstrap/bootstrap.less',
			src + '/less/*.less'
		],
		dest: dest + '/css'
	},
	jshint: {
		src: src + '/js/**/*'
	},
	browserSync: {
		proxy: "localhost:3000",
		browser: "google chrome",
		port: 7000
	},
	images: {
		src: src + "/img/**/*",
		dest: dest + "/img"
	},
	browserify: {
		entries: src + '/js/routes.jsx',
		dest: dest + '/js',
		outputName: 'main.js',
		paths: [src + '/js'],
		extensions: ['.jsx'],
		debug: true
	},
	concatCss: {
		bundleName: 'style.css'
	},
	production: {
	    cssSrc: dest + '/css/*.css',
	    jsSrc: dest + '/js/*.js',
	    dest: dest
	},
	fonts: {
		src: src + '/fonts/**.*',
		dest: dest + '/fonts'
	}
}