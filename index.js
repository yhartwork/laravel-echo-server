var server = require('./dist/index')
require('dotenv').config();

server.run({
	"authHost": process.env.AUTH_HOST,
	"authEndpoint": "/broadcasting/auth",
	"clients": [
		{
			"appId": process.env.CLIENT_APP_ID,
			"key": process.env.CLIENT_KEY
		}
	],
	"database": "redis",
	"databaseConfig": {
		"redis": {},
		"sqlite": {
			"databasePath": "/database/laravel-echo-server.sqlite"
		}
	},
	"devMode": process.env.DEV_MODE == 'true' ? true : false,
	"host": null,
	"port": "6001",
	"protocol": "http",
	"socketio": {},
	"secureOptions": 67108864,
	"sslCertPath": "",
	"sslKeyPath": "",
	"sslCertChainPath": "",
	"sslPassphrase": "",
	"subscribers": {
		"http": true,
		"redis": true
	},
	"apiOriginAllow": {
		"allowCors": true,
		"allowOrigin": process.env.ORIGIN_HOST,
		"allowMethods": "GET, POST",
		"allowHeaders": "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization, X-CSRF-TOKEN, X-Socket-Id"
	}
});
