var path= require('path'),
	webpack= require('webpack');

var src= './src',
	dest= './build';

module.exports= {
	dest: dest,
	webpack: {
		src: src+'/js/**',
		entry: [
			src+'/js/index.js'
		],
		webpack: {
			module: {
				loaders: [
					{
						test: /sylvester/,
						loader: 'exports?Vector,Matrix,Line,Plane,$V,$M,$L,$P'
					},
					{
						test: /\.js?$/,
						exclude: /(node_modules|bower_components)/,
						loader: 'babel',
						query: {
							'blacklist': ['strict']
						}
					}
				]
			},
			resolve: {
				root: [path.join(__dirname, "../bower_components")]
			},
			plugins: [
				new webpack.ResolverPlugin(
					new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
				)
			]
		},
		dest: dest+'/js'
	},
	copy: {
		src: src+'/www/**',
		dest: dest
	},
	sass: {
		src: src+'/sass/',
		sass: {
			style: 'expanded'
		},
		dest: dest+'/css'
	}
}
