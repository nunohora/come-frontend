var src = './src',
	dest = './build';

module.exports = {
	clean: {
		src: dest
	},
	test: {
		src: src + '/__tests__',
		jestConfig: {
			unmockedModulePathPatterns: [
				"/node_modules/"
			],
			moduleFileExtensions: [
				"js",
				"jsx"
			],
			testPathIgnorePatterns: [
				'setup.js',
				'preprocessor.js'
			],
			setupEnvScriptFile: 'setup.js',
			scriptPreprocessor: 'preprocessor.js'
		}
	},
	jsxCompile: {
		src: [src + '/js/**/*.jsx', src + '/js/**/*.js'],
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