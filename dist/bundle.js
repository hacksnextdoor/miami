/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = global.Promise;

/* harmony default export */ __webpack_exports__["a"] = ((config, callback) => {
  const url = config.db.url;
  __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(url, (err) => {
    if (err) callback(err);
  });
  callback(__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a);
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = global.Promise;

const message = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  room: String,
  text: String,
  user: {
    _id: String,
    name: String,
    avatar: String,
  },
  createdAt: { type: Date, default: Date.now },
  _id: String,
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Message', message));

// { room: '5942feb6ae61ac00277c7c04',
//   message: {
//     text: 'Yo',
//     user: {
//       _id: '590e7747f019a32200085f01',
//       first_name: 'Peyt',
//       last_name: 'Dewar',
//       email: 'psdewar2@live.com',
//       facebookId: '10208534812913920',
//       __v: 0,
//       date_created: '2017-05-07T01:24:23.736Z'
//     },
//     createdAt: '2017-06-16T19:07:44.244Z',
//     _id: '65a5d36c-4b88-4731-926f-d3cd39bcb925'
//   }
// }


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"db": {
		"url": "mongodb://admin:hacks@ds019946.mlab.com:19946/ryde-board"
	}
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Database__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Message__ = __webpack_require__(2);







const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.Server(app);
const io = new __WEBPACK_IMPORTED_MODULE_2_socket_io___default.a(server);
const port = process.env.PORT || 3000;


// Start connection with service
io.on('connection', (socket) => {
  /*
   * events
   * subscribe, send, unsubscribe
   */

  socket.on('subscribe', (channel) => {
    socket.join(channel);
  });

  socket.on('send', (data) => {
    io.emit('send', data);

    // Saving messages to mongo
    const newMessage = new __WEBPACK_IMPORTED_MODULE_5__Message__["a" /* default */](data);
    newMessage.save((err, message) => {
      if (err) return console.log(err);
      return console.log(`saved! ${message}`);
    });
  });

  socket.on('unsubscribe', (channel) => {
    socket.leave(channel);
  });
});

app.get('/', (req, res) => {
  res.sendfile('./public/index.html');
});

app.get('/channels', (req, res) => {
  const mQuery = req.query;
  console.log(mQuery);
  __WEBPACK_IMPORTED_MODULE_5__Message__["a" /* default */].find(mQuery)
    .sort('+createdAt')
    .exec((err, messages) => {
      messages.reverse();
      if (err) return res.json({ err: 'Problem querying messages' }); // handleError() method should go here based upon message
      return res.json(messages);
    });
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Database__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__config_json___default.a, () => {
  server.listen(port, () => {
    console.log(`[INFO] Listening on *: + ${port}`);
  });
});


/***/ })
/******/ ]);