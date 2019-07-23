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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar env = \"development\";\nvar common = {\n  PORT: process.env.PORT || 8080,\n  DIST_DIR: __dirname,\n  API_URL: 'http://127.0.0.1:8080',\n  STATIC_SERVE: true,\n  CORS_ENABLED: true\n};\n\nvar development = _objectSpread({}, common);\n\nvar production = _objectSpread({}, common);\n\nvar config = {\n  development: development,\n  production: production\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config[env]);\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var plain_text_data_to_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! plain-text-data-to-json */ \"plain-text-data-to-json\");\n/* harmony import */ var plain_text_data_to_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(plain_text_data_to_json__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nvar jsonParser = body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json();\nvar json = {}; // API\n// GET test txt file\n\nrouter.get('/get', function (req, res) {\n  if (fs__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, './test.txt'))) {\n    console.log('Found test file');\n    var file = plain_text_data_to_json__WEBPACK_IMPORTED_MODULE_3___default()(fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, './test.txt'), 'utf8'));\n    return res.json(file);\n  }\n\n  console.log('Not found test file');\n  return res.sendStatus(400);\n}); // POST test txt file\n\nrouter.post('/post', jsonParser, function (req, res) {\n  var data = req.body.data;\n  var post = ''; // eslint-disable-next-line no-return-assign\n\n  Object.entries(data).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    return post = \"\".concat(post).concat(key, \": \").concat(value, \"\\n\");\n  });\n  fs__WEBPACK_IMPORTED_MODULE_2___default.a.writeFileSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, './test.txt'), post);\n  return res.sendStatus(200);\n}); // POST test json\n\nrouter.post('/test', jsonParser, function (req, res) {\n  json = req.body.data;\n  return res.status(200);\n}); // GET test json\n// eslint-disable-next-line arrow-body-style\n\nrouter.get('/json', function (req, res) {\n  return res.json(json);\n}); // Others\n\nrouter.use(function (req, res) {\n  res.status(404);\n  res.send('Page not found!!!');\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _webpack_webpack_dev_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webpack/webpack.dev.config */ \"./webpack/webpack.dev.config.js\");\n/* harmony import */ var _webpack_webpack_dev_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_webpack_webpack_dev_config__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/index */ \"./src/server/routes/index.js\");\n\n\n\n\n // eslint-disable-line import/no-extraneous-dependencies\n\n // eslint-disable-line import/no-extraneous-dependencies\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].DIST_DIR, 'html/app.html');\nvar compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(_webpack_webpack_dev_config__WEBPACK_IMPORTED_MODULE_6___default.a);\n\nif (_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].CORS_ENABLED) {\n  app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\n}\n\nif (_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].STATIC_SERVE) {\n  app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"](_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].DIST_DIR));\n}\n\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler, {\n  publicPath: _webpack_webpack_dev_config__WEBPACK_IMPORTED_MODULE_6___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler));\napp.get('/', function (req, res, next) {\n  compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n    if (err) {\n      return next(err);\n    }\n\n    res.set('content-type', 'text/html');\n    res.send(result);\n    return res.end();\n  });\n});\napp.use(_routes_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.listen(_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].PORT, function () {\n  console.log(\"App listening to \".concat(_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack/webpack.common.config.js":
/*!******************************************!*\
  !*** ./webpack/webpack.common.config.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar HTMLWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar CopyPlugin = __webpack_require__(/*! copy-webpack-plugin */ \"copy-webpack-plugin\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar htmlDir = '../src/html'; // Generating multiple HTML templates config\n\nfunction generateHtmlPlugins(dir) {\n  var files = fs.readdirSync(path.resolve(__dirname, dir));\n  var plugin = [];\n  files.forEach(function (item) {\n    var parts = item.split('.');\n    var name = parts[0];\n    plugin.push(name);\n  });\n  return plugin;\n}\n\nvar templates = generateHtmlPlugins(htmlDir);\nmodule.exports = {\n  output: {\n    path: path.join(__dirname, '../build'),\n    publicPath: '/'\n  },\n  node: {\n    fs: 'empty'\n  },\n  module: {\n    rules: [// Transpiles ES6-8 into ES5\n    {\n      test: /\\.js$/,\n      loader: 'babel-loader',\n      exclude: function exclude(file) {\n        return /node_modules/.test(file) && !/\\.vue\\.js/.test(file);\n      }\n    }, {\n      // images and fonts\n      test: /\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\\?.*)?$/,\n      use: {\n        loader: 'file-loader',\n        options: {\n          name: '[path][name].[ext]',\n          context: 'src'\n        }\n      }\n    }]\n  },\n  plugins: [].concat(_toConsumableArray(templates.map(function (template) {\n    if (template === 'legacy') {\n      return new HTMLWebpackPlugin({\n        filename: \"html/\".concat(template, \".html\"),\n        inject: false,\n        // no link css\n        template: path.resolve(__dirname, \"../src/html/\".concat(template, \".html\"))\n      });\n    }\n\n    return new HTMLWebpackPlugin({\n      filename: \"html/\".concat(template, \".html\"),\n      xhtml: true,\n      // selfclosed tag to link css\n      template: path.resolve(__dirname, \"../src/html/\".concat(template, \".html\"))\n    });\n  })), [new CopyPlugin([{\n    from: 'src/test.txt',\n    to: 'test.txt'\n  }])])\n};\n\n//# sourceURL=webpack:///./webpack/webpack.common.config.js?");

/***/ }),

/***/ "./webpack/webpack.dev.config.js":
/*!***************************************!*\
  !*** ./webpack/webpack.dev.config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar merge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\n\nvar StyleLintPlugin = __webpack_require__(/*! stylelint-webpack-plugin */ \"stylelint-webpack-plugin\");\n\nvar common = __webpack_require__(/*! ./webpack.common.config.js */ \"./webpack/webpack.common.config.js\");\n\nmodule.exports = merge(common, {\n  entry: {\n    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']\n  },\n  output: {\n    filename: 'js/app.js'\n  },\n  mode: 'development',\n  // process.env.NODE_ENV\n  target: 'web',\n  devtool: '#source-map',\n  module: {\n    rules: [// Single File Components\n    {\n      enforce: 'pre',\n      test: /\\.(js|vue)$/,\n      loader: 'eslint-loader',\n      exclude: /node_modules/\n    }, {\n      enforce: 'pre',\n      test: /\\.js$/,\n      loader: 'eslint-loader',\n      exclude: /node_modules/,\n      options: {\n        emitWarning: true,\n        failOnError: false,\n        failOnWarning: false\n      }\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins\n      test: /\\.html$/,\n      use: [{\n        loader: 'html-loader'\n      }]\n    }, {\n      // styles on css и scss, autoprefix\n      test: /\\.s?css$/i,\n      use: ['style-loader', {\n        loader: 'css-loader',\n        options: {\n          importLoaders: 1\n        }\n      }, {\n        loader: 'sass-loader',\n        options: {\n          data: '@import \"./src/styles/_stylebase.scss\";'\n        }\n      }, 'postcss-loader']\n    }]\n  },\n  plugins: [// HotReload\n  new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), // Stylelint\n  new StyleLintPlugin({\n    configFile: '.stylelintrc',\n    context: 'src/styles',\n    files: ['**/*.css', '**/*.scss'],\n    failOnError: false,\n    syntax: 'scss'\n  })]\n});\n\n//# sourceURL=webpack:///./webpack/webpack.dev.config.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "copy-webpack-plugin":
/*!**************************************!*\
  !*** external "copy-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"copy-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22copy-webpack-plugin%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "plain-text-data-to-json":
/*!******************************************!*\
  !*** external "plain-text-data-to-json" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"plain-text-data-to-json\");\n\n//# sourceURL=webpack:///external_%22plain-text-data-to-json%22?");

/***/ }),

/***/ "stylelint-webpack-plugin":
/*!*******************************************!*\
  !*** external "stylelint-webpack-plugin" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stylelint-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22stylelint-webpack-plugin%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-merge\");\n\n//# sourceURL=webpack:///external_%22webpack-merge%22?");

/***/ })

/******/ });