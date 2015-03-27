var src = './src',
	dest = './build';

module.exports = {
	jsxCompile: {
		src: src + '/js/**/*.jsx',
		dest: dest + '/js'
	},
	less: {
		src: src + '/less/*.less',
		dest: dest + '/css'
	},
	jshint: {
		src: dest + '/**/*.js'
	},
	browserSync: {
		proxy: "localhost:3000",
		browser: "google chrome",
		port: 7000,
		baseDir: dest
	},
	images: {
		src: src + "/img/**/*",
		dest: dest + "/img"
	},
	browserify: {
		// A separate bundle will be generated for each
		// bundle config in the list below
		bundleConfigs: [{
			entries: src + '/js/libs/*.js',
			dest: dest + '/js',
			outputName: 'libs.js'
		}]
	},
	production: {
	    cssSrc: dest + '/css/*.css',
	    jsSrc: dest + '/js/*.js',
	    dest: dest
	}
}