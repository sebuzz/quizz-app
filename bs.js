const path = require("path")
const browserSync = require("browser-sync")

browserSync({
	open: false,
	cors: true,
	port: 3000,
	ghostMode: {
		clicks: false,
		forms: false,
		scroll: true
	},
	server: {
		index: 'index.html',
		baseDir: path.resolve(__dirname, 'public'),
	},
	files: [,
		'public/{**/*,*}.{css,html,js}',
	]
});
