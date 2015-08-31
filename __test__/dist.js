/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var JSData = __webpack_require__(1)
	var RethinkdbAdapter = __webpack_require__(2)
	var pd = console.log.bind(console)

	var store = new JSData.DS()
	//store.defaults.debug = true
	store.registerAdapter("rethinkdb", new RethinkdbAdapter({
	  db: "test",
	  host: "localhost",
	  port: 8015,
	  path: "/",
	  wsProtocols: ["binary"],
	  secure: false
	}), {default: true})
	var User = store.defineResource({name: "users"})
	var cb1 = function(result) {
	  pd("result", result)
	  //pd(User.filter({where: {tags: {'contains': "a"}}}))
	}
	var cb2 = function(err) {
	  pd("error", err)
	}

	//User.find(1).then(cb1, cb2)
	User.findAll().then(cb1, cb2)
	//User.findAll({where: {name: {'notContains': "G"}}}).then(cb1, cb2)
	//User.create({a: 1}).then(cb1, cb2) // "users.inject: "attrs" must be an object or an array!"


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * js-data
	 * @version 2.2.2 - Homepage <http://www.js-data.io/>
	 * @author Jason Dobry <jason.dobry@gmail.com>
	 * @copyright (c) 2014-2015 Jason Dobry 
	 * @license MIT <https://github.com/js-data/js-data/blob/master/LICENSE>
	 * 
	 * @overview Robust framework-agnostic data store.
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["JSData"] = factory();
		else
			root["JSData"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var _datastoreIndex = __webpack_require__(1);

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		/**
		 * The library export.
		 *   - window.JSData
		 *   - require('js-data')
		 *   - define(['js-data', function (JSData) { ... }]);
		 *   - import JSData from 'js-data'
		 */
		module.exports = {
		  DS: _datastoreIndex['default'],
		  DSUtils: _utils['default'],
		  DSErrors: _errors['default'],
		  createStore: function createStore(options) {
		    return new _datastoreIndex['default'](options);
		  },
		  version: {
		    full: '2.2.2',
		    major: parseInt('2', 10),
		    minor: parseInt('2', 10),
		    patch: parseInt('2', 10),
		    alpha: true ? 'false' : false,
		    beta: true ? 'false' : false
		  }
		};

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		/* jshint eqeqeq:false */

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		var _sync_methodsIndex = __webpack_require__(4);

		var _async_methodsIndex = __webpack_require__(5);

		function lifecycleNoopCb(resource, attrs, cb) {
		  cb(null, attrs);
		}

		function lifecycleNoop(resource, attrs) {
		  return attrs;
		}

		function compare(_x, _x2, _x3, _x4) {
		  var _again = true;

		  _function: while (_again) {
		    var orderBy = _x,
		        index = _x2,
		        a = _x3,
		        b = _x4;
		    def = cA = cB = undefined;
		    _again = false;

		    var def = orderBy[index];
		    var cA = _utils['default'].get(a, def[0]),
		        cB = _utils['default'].get(b, def[0]);
		    if (_utils['default']._s(cA)) {
		      cA = _utils['default'].upperCase(cA);
		    }
		    if (_utils['default']._s(cB)) {
		      cB = _utils['default'].upperCase(cB);
		    }
		    if (def[1] === 'DESC') {
		      if (cB < cA) {
		        return -1;
		      } else if (cB > cA) {
		        return 1;
		      } else {
		        if (index < orderBy.length - 1) {
		          _x = orderBy;
		          _x2 = index + 1;
		          _x3 = a;
		          _x4 = b;
		          _again = true;
		          continue _function;
		        } else {
		          return 0;
		        }
		      }
		    } else {
		      if (cA < cB) {
		        return -1;
		      } else if (cA > cB) {
		        return 1;
		      } else {
		        if (index < orderBy.length - 1) {
		          _x = orderBy;
		          _x2 = index + 1;
		          _x3 = a;
		          _x4 = b;
		          _again = true;
		          continue _function;
		        } else {
		          return 0;
		        }
		      }
		    }
		  }
		}

		var Defaults = (function () {
		  function Defaults() {
		    _classCallCheck(this, Defaults);
		  }

		  _createClass(Defaults, [{
		    key: 'errorFn',
		    value: function errorFn(a, b) {
		      if (this.error && typeof this.error === 'function') {
		        try {
		          if (typeof a === 'string') {
		            throw new Error(a);
		          } else {
		            throw a;
		          }
		        } catch (err) {
		          a = err;
		        }
		        this.error(this.name || null, a || null, b || null);
		      }
		    }
		  }]);

		  return Defaults;
		})();

		var defaultsPrototype = Defaults.prototype;

		defaultsPrototype.actions = {};
		defaultsPrototype.afterCreate = lifecycleNoopCb;
		defaultsPrototype.afterCreateCollection = lifecycleNoop;
		defaultsPrototype.afterCreateInstance = lifecycleNoop;
		defaultsPrototype.afterDestroy = lifecycleNoopCb;
		defaultsPrototype.afterEject = lifecycleNoop;
		defaultsPrototype.afterInject = lifecycleNoop;
		defaultsPrototype.afterReap = lifecycleNoop;
		defaultsPrototype.afterUpdate = lifecycleNoopCb;
		defaultsPrototype.afterValidate = lifecycleNoopCb;
		defaultsPrototype.allowSimpleWhere = true;
		defaultsPrototype.basePath = '';
		defaultsPrototype.beforeCreate = lifecycleNoopCb;
		defaultsPrototype.beforeCreateCollection = lifecycleNoop;
		defaultsPrototype.beforeCreateInstance = lifecycleNoop;
		defaultsPrototype.beforeDestroy = lifecycleNoopCb;
		defaultsPrototype.beforeEject = lifecycleNoop;
		defaultsPrototype.beforeInject = lifecycleNoop;
		defaultsPrototype.beforeReap = lifecycleNoop;
		defaultsPrototype.beforeUpdate = lifecycleNoopCb;
		defaultsPrototype.beforeValidate = lifecycleNoopCb;
		defaultsPrototype.bypassCache = false;
		defaultsPrototype.cacheResponse = !!_utils['default'].w;
		defaultsPrototype.clearEmptyQueries = true;
		defaultsPrototype.computed = {};
		defaultsPrototype.defaultAdapter = 'http';
		defaultsPrototype.debug = false;
		defaultsPrototype.defaultValues = {};
		defaultsPrototype.eagerEject = false;
		// TODO: Implement eagerInject in DS#create
		defaultsPrototype.eagerInject = false;
		defaultsPrototype.endpoint = '';
		defaultsPrototype.error = console ? function (a, b, c) {
		  return console[typeof console.error === 'function' ? 'error' : 'log'](a, b, c);
		} : false;
		defaultsPrototype.fallbackAdapters = ['http'];
		defaultsPrototype.findStrictCache = false;
		defaultsPrototype.idAttribute = 'id';
		defaultsPrototype.ignoredChanges = [/\$/];
		defaultsPrototype.instanceEvents = !!_utils['default'].w;
		defaultsPrototype.keepChangeHistory = false;
		defaultsPrototype.linkRelations = true;
		defaultsPrototype.log = console ? function (a, b, c, d, e) {
		  return console[typeof console.info === 'function' ? 'info' : 'log'](a, b, c, d, e);
		} : false;

		defaultsPrototype.logFn = function (a, b, c, d) {
		  var _this = this;
		  if (_this.debug && _this.log && typeof _this.log === 'function') {
		    _this.log(_this.name || null, a || null, b || null, c || null, d || null);
		  }
		};

		defaultsPrototype.maxAge = false;
		defaultsPrototype.methods = {};
		defaultsPrototype.notify = !!_utils['default'].w;
		defaultsPrototype.omit = [];
		defaultsPrototype.onConflict = 'merge';
		defaultsPrototype.reapAction = !!_utils['default'].w ? 'inject' : 'none';
		defaultsPrototype.reapInterval = !!_utils['default'].w ? 30000 : false;
		defaultsPrototype.relationsEnumerable = false;
		defaultsPrototype.resetHistoryOnInject = true;
		defaultsPrototype.returnMeta = false;
		defaultsPrototype.strategy = 'single';
		defaultsPrototype.upsert = !!_utils['default'].w;
		defaultsPrototype.useClass = true;
		defaultsPrototype.useFilter = false;
		defaultsPrototype.validate = lifecycleNoopCb;
		defaultsPrototype.defaultFilter = function (collection, resourceName, params, options) {
		  var filtered = collection;
		  var where = null;
		  var reserved = {
		    skip: '',
		    offset: '',
		    where: '',
		    limit: '',
		    orderBy: '',
		    sort: ''
		  };

		  params = params || {};
		  options = options || {};

		  if (_utils['default']._o(params.where)) {
		    where = params.where;
		  } else {
		    where = {};
		  }

		  if (options.allowSimpleWhere) {
		    _utils['default'].forOwn(params, function (value, key) {
		      if (!(key in reserved) && !(key in where)) {
		        where[key] = {
		          '==': value
		        };
		      }
		    });
		  }

		  if (_utils['default'].isEmpty(where)) {
		    where = null;
		  }

		  if (where) {
		    filtered = _utils['default'].filter(filtered, function (attrs) {
		      var first = true;
		      var keep = true;
		      _utils['default'].forOwn(where, function (clause, field) {
		        if (!_utils['default']._o(clause)) {
		          clause = {
		            '==': clause
		          };
		        }
		        _utils['default'].forOwn(clause, function (term, op) {
		          var expr = undefined;
		          var isOr = op[0] === '|';
		          var val = _utils['default'].get(attrs, field);
		          op = isOr ? op.substr(1) : op;
		          if (op === '==') {
		            expr = val == term;
		          } else if (op === '===') {
		            expr = val === term;
		          } else if (op === '!=') {
		            expr = val != term;
		          } else if (op === '!==') {
		            expr = val !== term;
		          } else if (op === '>') {
		            expr = val > term;
		          } else if (op === '>=') {
		            expr = val >= term;
		          } else if (op === '<') {
		            expr = val < term;
		          } else if (op === '<=') {
		            expr = val <= term;
		          } else if (op === 'isectEmpty') {
		            expr = !_utils['default'].intersection(val || [], term || []).length;
		          } else if (op === 'isectNotEmpty') {
		            expr = _utils['default'].intersection(val || [], term || []).length;
		          } else if (op === 'in') {
		            if (_utils['default']._s(term)) {
		              expr = term.indexOf(val) !== -1;
		            } else {
		              expr = _utils['default'].contains(term, val);
		            }
		          } else if (op === 'notIn') {
		            if (_utils['default']._s(term)) {
		              expr = term.indexOf(val) === -1;
		            } else {
		              expr = !_utils['default'].contains(term, val);
		            }
		          } else if (op === 'contains') {
		            if (_utils['default']._s(val)) {
		              expr = val.indexOf(term) !== -1;
		            } else {
		              expr = _utils['default'].contains(val, term);
		            }
		          } else if (op === 'notContains') {
		            if (_utils['default']._s(val)) {
		              expr = val.indexOf(term) === -1;
		            } else {
		              expr = !_utils['default'].contains(val, term);
		            }
		          }
		          if (expr !== undefined) {
		            keep = first ? expr : isOr ? keep || expr : keep && expr;
		          }
		          first = false;
		        });
		      });
		      return keep;
		    });
		  }

		  var orderBy = null;

		  if (_utils['default']._s(params.orderBy)) {
		    orderBy = [[params.orderBy, 'ASC']];
		  } else if (_utils['default']._a(params.orderBy)) {
		    orderBy = params.orderBy;
		  }

		  if (!orderBy && _utils['default']._s(params.sort)) {
		    orderBy = [[params.sort, 'ASC']];
		  } else if (!orderBy && _utils['default']._a(params.sort)) {
		    orderBy = params.sort;
		  }

		  // Apply 'orderBy'
		  if (orderBy) {
		    (function () {
		      var index = 0;
		      _utils['default'].forEach(orderBy, function (def, i) {
		        if (_utils['default']._s(def)) {
		          orderBy[i] = [def, 'ASC'];
		        } else if (!_utils['default']._a(def)) {
		          throw new _errors['default'].IA('DS.filter("' + resourceName + '"[, params][, options]): ' + _utils['default'].toJson(def) + ': Must be a string or an array!', {
		            params: {
		              'orderBy[i]': {
		                actual: typeof def,
		                expected: 'string|array'
		              }
		            }
		          });
		        }
		      });
		      filtered = _utils['default'].sort(filtered, function (a, b) {
		        return compare(orderBy, index, a, b);
		      });
		    })();
		  }

		  var limit = _utils['default']._n(params.limit) ? params.limit : null;
		  var skip = null;

		  if (_utils['default']._n(params.skip)) {
		    skip = params.skip;
		  } else if (_utils['default']._n(params.offset)) {
		    skip = params.offset;
		  }

		  // Apply 'limit' and 'skip'
		  if (limit && skip) {
		    filtered = _utils['default'].slice(filtered, skip, Math.min(filtered.length, skip + limit));
		  } else if (_utils['default']._n(limit)) {
		    filtered = _utils['default'].slice(filtered, 0, Math.min(filtered.length, limit));
		  } else if (_utils['default']._n(skip)) {
		    if (skip < filtered.length) {
		      filtered = _utils['default'].slice(filtered, skip);
		    } else {
		      filtered = [];
		    }
		  }

		  if (filtered === collection) {
		    return filtered.slice();
		  } else {
		    return filtered;
		  }
		};

		var DS = (function () {
		  function DS(options) {
		    _classCallCheck(this, DS);

		    var _this = this;
		    options = options || {};

		    _this.store = {};
		    // alias store, shaves 0.1 kb off the minified build
		    _this.s = _this.store;
		    _this.definitions = {};
		    // alias definitions, shaves 0.3 kb off the minified build
		    _this.defs = _this.definitions;
		    _this.adapters = {};
		    _this.defaults = new Defaults();
		    _this.observe = _utils['default'].observe;
		    _utils['default'].forOwn(options, function (v, k) {
		      if (k === 'omit') {
		        _this.defaults.omit = v.concat(Defaults.prototype.omit);
		      } else {
		        _this.defaults[k] = v;
		      }
		    });
		    _this.defaults.logFn('new data store created', _this.defaults);

		    var P = _utils['default'].Promise;

		    if (P && !P.prototype.spread) {
		      P.prototype.spread = function (cb) {
		        return this.then(function (arr) {
		          return cb.apply(this, arr);
		        });
		      };
		    }

		    _utils['default'].Events(_this);
		  }

		  _createClass(DS, [{
		    key: 'getAdapterName',
		    value: function getAdapterName(options) {
		      var errorIfNotExist = false;
		      options = options || {};
		      this.defaults.logFn('getAdapterName', options);
		      if (_utils['default']._s(options)) {
		        errorIfNotExist = true;
		        options = {
		          adapter: options
		        };
		      }
		      if (this.adapters[options.adapter]) {
		        return options.adapter;
		      } else if (errorIfNotExist) {
		        throw new Error(options.adapter + ' is not a registered adapter!');
		      } else {
		        return options.defaultAdapter;
		      }
		    }
		  }, {
		    key: 'getAdapter',
		    value: function getAdapter(options) {
		      options = options || {};
		      this.defaults.logFn('getAdapter', options);
		      return this.adapters[this.getAdapterName(options)];
		    }
		  }, {
		    key: 'registerAdapter',
		    value: function registerAdapter(name, Adapter, options) {
		      var _this = this;
		      options = options || {};
		      _this.defaults.logFn('registerAdapter', name, Adapter, options);
		      if (_utils['default'].isFunction(Adapter)) {
		        _this.adapters[name] = new Adapter(options);
		      } else {
		        _this.adapters[name] = Adapter;
		      }
		      if (options['default']) {
		        _this.defaults.defaultAdapter = name;
		      }
		      _this.defaults.logFn('default adapter is ' + _this.defaults.defaultAdapter);
		    }
		  }, {
		    key: 'is',
		    value: function is(resourceName, instance) {
		      var definition = this.defs[resourceName];
		      if (!definition) {
		        throw new _errors['default'].NER(resourceName);
		      }
		      return instance instanceof definition[definition['class']];
		    }
		  }, {
		    key: 'clear',
		    value: function clear() {
		      var _this2 = this;

		      var ejected = {};
		      _utils['default'].forOwn(this.definitions, function (definition) {
		        var name = definition.name;
		        ejected[name] = definition.ejectAll();
		        _this2.store[name].completedQueries = {};
		        _this2.store[name].queryData = {};
		      });
		      return ejected;
		    }
		  }]);

		  return DS;
		})();

		var dsPrototype = DS.prototype;

		dsPrototype.getAdapterName.shorthand = false;
		dsPrototype.getAdapter.shorthand = false;
		dsPrototype.registerAdapter.shorthand = false;
		dsPrototype.errors = _errors['default'];
		dsPrototype.utils = _utils['default'];

		function addMethods(target, obj) {
		  _utils['default'].forOwn(obj, function (v, k) {
		    target[k] = v;
		    target[k].before = function (fn) {
		      var orig = target[k];
		      target[k] = function () {
		        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		          args[_key] = arguments[_key];
		        }

		        return orig.apply(this, fn.apply(this, args) || args);
		      };
		    };
		  });
		}

		addMethods(dsPrototype, _sync_methodsIndex['default']);
		addMethods(dsPrototype, _async_methodsIndex['default']);

		exports['default'] = DS;

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		/* jshint eqeqeq:false */

		/**
		 * Mix of ES6 and CommonJS module imports because the interop of Babel + Webpack + ES6 modules + CommonJS isn't very good.
		 */

		var _errors = __webpack_require__(3);

		var BinaryHeap = __webpack_require__(7);
		var forEach = __webpack_require__(8);
		var slice = __webpack_require__(9);
		var forOwn = __webpack_require__(13);
		var contains = __webpack_require__(10);
		var deepMixIn = __webpack_require__(14);
		var pascalCase = __webpack_require__(19);
		var remove = __webpack_require__(11);
		var pick = __webpack_require__(15);
		var _keys = __webpack_require__(16);
		var sort = __webpack_require__(12);
		var upperCase = __webpack_require__(20);
		var get = __webpack_require__(17);
		var set = __webpack_require__(18);
		var observe = __webpack_require__(6);
		var w = undefined;
		var objectProto = Object.prototype;
		var toString = objectProto.toString;
		var P = undefined;

		/**
		 * Attempt to detect the global Promise constructor.
		 * JSData will still work without one, as long you do something like this:
		 *
		 * var JSData = require('js-data');
		 * JSData.DSUtils.Promise = MyPromiseLib;
		 */
		try {
		  P = Promise;
		} catch (err) {
		  console.error('js-data requires a global Promise constructor!');
		}

		var isArray = Array.isArray || function isArray(value) {
		  return toString.call(value) == '[object Array]' || false;
		};

		var isRegExp = function isRegExp(value) {
		  return toString.call(value) == '[object RegExp]' || false;
		};

		// adapted from lodash.isString
		var isString = function isString(value) {
		  return typeof value == 'string' || value && typeof value == 'object' && toString.call(value) == '[object String]' || false;
		};

		var isObject = function isObject(value) {
		  return toString.call(value) == '[object Object]' || false;
		};

		// adapted from lodash.isDate
		var isDate = function isDate(value) {
		  return value && typeof value == 'object' && toString.call(value) == '[object Date]' || false;
		};

		// adapted from lodash.isNumber
		var isNumber = function isNumber(value) {
		  var type = typeof value;
		  return type == 'number' || value && type == 'object' && toString.call(value) == '[object Number]' || false;
		};

		// adapted from lodash.isFunction
		var isFunction = function isFunction(value) {
		  return typeof value == 'function' || value && toString.call(value) === '[object Function]' || false;
		};

		// shorthand argument checking functions, using these shaves 1.18 kb off of the minified build
		var isStringOrNumber = function isStringOrNumber(value) {
		  return isString(value) || isNumber(value);
		};
		var isStringOrNumberErr = function isStringOrNumberErr(field) {
		  return new _errors['default'].IA('"' + field + '" must be a string or a number!');
		};
		var isObjectErr = function isObjectErr(field) {
		  return new _errors['default'].IA('"' + field + '" must be an object!');
		};
		var isArrayErr = function isArrayErr(field) {
		  return new _errors['default'].IA('"' + field + '" must be an array!');
		};

		// adapted from mout.isEmpty
		var isEmpty = function isEmpty(val) {
		  if (val == null) {
		    // jshint ignore:line
		    // typeof null == 'object' so we check it first
		    return true;
		  } else if (typeof val === 'string' || isArray(val)) {
		    return !val.length;
		  } else if (typeof val === 'object') {
		    var result = true;
		    forOwn(val, function () {
		      result = false;
		      return false; // break loop
		    });
		    return result;
		  } else {
		    return true;
		  }
		};

		// Find the intersection between two arrays
		var intersection = function intersection(array1, array2) {
		  if (!array1 || !array2) {
		    return [];
		  }
		  var result = [];
		  var item = undefined;
		  for (var i = 0, _length = array1.length; i < _length; i++) {
		    item = array1[i];
		    if (contains(result, item)) {
		      continue;
		    }
		    if (contains(array2, item)) {
		      result.push(item);
		    }
		  }
		  return result;
		};

		var filter = function filter(array, cb, thisObj) {
		  var results = [];
		  forEach(array, function (value, key, arr) {
		    if (cb(value, key, arr)) {
		      results.push(value);
		    }
		  }, thisObj);
		  return results;
		};

		/**
		 * Attempt to detect whether we are in the browser.
		 */
		try {
		  w = window;
		  w = {};
		} catch (e) {
		  w = null;
		}

		/**
		 * Event mixin. Usage:
		 *
		 * function handler() { ... }
		 * Events(myObject);
		 * myObject.on('foo', handler);
		 * myObject.emit('foo', 'some', 'data');
		 * myObject.off('foo', handler);
		 */
		function Events(target) {
		  var events = {};
		  target = target || this;
		  target.on = function (type, func, ctx) {
		    events[type] = events[type] || [];
		    events[type].push({
		      f: func,
		      c: ctx
		    });
		  };
		  target.off = function (type, func) {
		    var listeners = events[type];
		    if (!listeners) {
		      events = {};
		    } else if (func) {
		      for (var i = 0; i < listeners.length; i++) {
		        if (listeners[i].f === func) {
		          listeners.splice(i, 1);
		          break;
		        }
		      }
		    } else {
		      listeners.splice(0, listeners.length);
		    }
		  };
		  target.emit = function () {
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    var listeners = events[args.shift()] || [];
		    if (listeners) {
		      for (var i = 0; i < listeners.length; i++) {
		        listeners[i].f.apply(listeners[i].c, args);
		      }
		    }
		  };
		}

		/**
		 * Lifecycle hooks that should support promises.
		 */
		var toPromisify = ['beforeValidate', 'validate', 'afterValidate', 'beforeCreate', 'afterCreate', 'beforeUpdate', 'afterUpdate', 'beforeDestroy', 'afterDestroy'];

		/**
		 * Return whether "prop" is in the blacklist.
		 */
		var isBlacklisted = observe.isBlacklisted;

		// adapted from angular.copy
		var copy = function copy(source, destination, stackSource, stackDest, blacklist) {
		  if (!destination) {
		    destination = source;
		    if (source) {
		      if (isArray(source)) {
		        destination = copy(source, [], stackSource, stackDest, blacklist);
		      } else if (isDate(source)) {
		        destination = new Date(source.getTime());
		      } else if (isRegExp(source)) {
		        destination = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
		        destination.lastIndex = source.lastIndex;
		      } else if (isObject(source)) {
		        destination = copy(source, Object.create(Object.getPrototypeOf(source)), stackSource, stackDest, blacklist);
		      }
		    }
		  } else {
		    if (source === destination) {
		      throw new Error('Cannot copy! Source and destination are identical.');
		    }

		    stackSource = stackSource || [];
		    stackDest = stackDest || [];

		    if (isObject(source)) {
		      var index = stackSource.indexOf(source);
		      if (index !== -1) {
		        return stackDest[index];
		      }

		      stackSource.push(source);
		      stackDest.push(destination);
		    }

		    var result = undefined;
		    if (isArray(source)) {
		      var i = undefined;
		      destination.length = 0;
		      for (i = 0; i < source.length; i++) {
		        result = copy(source[i], null, stackSource, stackDest, blacklist);
		        if (isObject(source[i])) {
		          stackSource.push(source[i]);
		          stackDest.push(result);
		        }
		        destination.push(result);
		      }
		    } else {
		      if (isArray(destination)) {
		        destination.length = 0;
		      } else {
		        forEach(destination, function (value, key) {
		          delete destination[key];
		        });
		      }
		      for (var key in source) {
		        if (source.hasOwnProperty(key)) {
		          if (isBlacklisted(key, blacklist)) {
		            continue;
		          }
		          result = copy(source[key], null, stackSource, stackDest, blacklist);
		          if (isObject(source[key])) {
		            stackSource.push(source[key]);
		            stackDest.push(result);
		          }
		          destination[key] = result;
		        }
		      }
		    }
		  }
		  return destination;
		};

		// adapted from angular.equals
		var equals = function equals(_x, _x2) {
		  var _again = true;

		  _function: while (_again) {
		    var o1 = _x,
		        o2 = _x2;
		    t1 = t2 = length = key = keySet = undefined;
		    _again = false;

		    if (o1 === o2) {
		      return true;
		    }
		    if (o1 === null || o2 === null) {
		      return false;
		    }
		    if (o1 !== o1 && o2 !== o2) {
		      return true;
		    } // NaN === NaN
		    var t1 = typeof o1,
		        t2 = typeof o2,
		        length,
		        key,
		        keySet;
		    if (t1 == t2) {
		      if (t1 == 'object') {
		        if (isArray(o1)) {
		          if (!isArray(o2)) {
		            return false;
		          }
		          if ((length = o1.length) == o2.length) {
		            // jshint ignore:line
		            for (key = 0; key < length; key++) {
		              if (!equals(o1[key], o2[key])) {
		                return false;
		              }
		            }
		            return true;
		          }
		        } else if (isDate(o1)) {
		          if (!isDate(o2)) {
		            return false;
		          }
		          _x = o1.getTime();
		          _x2 = o2.getTime();
		          _again = true;
		          continue _function;
		        } else if (isRegExp(o1) && isRegExp(o2)) {
		          return o1.toString() == o2.toString();
		        } else {
		          if (isArray(o2)) {
		            return false;
		          }
		          keySet = {};
		          for (key in o1) {
		            if (key.charAt(0) === '$' || isFunction(o1[key])) {
		              continue;
		            }
		            if (!equals(o1[key], o2[key])) {
		              return false;
		            }
		            keySet[key] = true;
		          }
		          for (key in o2) {
		            if (!keySet.hasOwnProperty(key) && key.charAt(0) !== '$' && o2[key] !== undefined && !isFunction(o2[key])) {
		              return false;
		            }
		          }
		          return true;
		        }
		      }
		    }
		    return false;
		  }
		};

		/**
		 * Given either an instance or the primary key of an instance, return the primary key.
		 */
		var resolveId = function resolveId(definition, idOrInstance) {
		  if (isString(idOrInstance) || isNumber(idOrInstance)) {
		    return idOrInstance;
		  } else if (idOrInstance && definition) {
		    return idOrInstance[definition.idAttribute] || idOrInstance;
		  } else {
		    return idOrInstance;
		  }
		};

		/**
		 * Given either an instance or the primary key of an instance, return the instance.
		 */
		var resolveItem = function resolveItem(resource, idOrInstance) {
		  if (resource && (isString(idOrInstance) || isNumber(idOrInstance))) {
		    return resource.index[idOrInstance] || idOrInstance;
		  } else {
		    return idOrInstance;
		  }
		};

		var isValidString = function isValidString(val) {
		  return val != null && val !== ''; // jshint ignore:line
		};

		var join = function join(items, separator) {
		  separator = separator || '';
		  return filter(items, isValidString).join(separator);
		};

		var makePath = function makePath() {
		  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		    args[_key2] = arguments[_key2];
		  }

		  var result = join(args, '/');
		  return result.replace(/([^:\/]|^)\/{2,}/g, '$1/');
		};

		exports['default'] = {
		  Promise: P,
		  /**
		   * Method to wrap an "options" object so that it will inherit from
		   * some parent object, such as a resource definition.
		   */
		  _: function _(parent, options) {
		    var _this = this;
		    options = options || {};
		    if (options && options.constructor === parent.constructor) {
		      return options;
		    } else if (!isObject(options)) {
		      throw new _errors['default'].IA('"options" must be an object!');
		    }
		    forEach(toPromisify, function (name) {
		      if (typeof options[name] === 'function' && options[name].toString().indexOf('for (var _len = arg') === -1) {
		        options[name] = _this.promisify(options[name]);
		      }
		    });
		    // Dynamic constructor function
		    var O = function Options(attrs) {
		      var self = this;
		      forOwn(attrs, function (value, key) {
		        self[key] = value;
		      });
		    };
		    // Inherit from some parent object
		    O.prototype = parent;
		    // Give us a way to get the original options back.
		    O.prototype.orig = function () {
		      var orig = {};
		      forOwn(this, function (value, key) {
		        orig[key] = value;
		      });
		      return orig;
		    };
		    return new O(options);
		  },
		  _n: isNumber,
		  _s: isString,
		  _sn: isStringOrNumber,
		  _snErr: isStringOrNumberErr,
		  _o: isObject,
		  _oErr: isObjectErr,
		  _a: isArray,
		  _aErr: isArrayErr,
		  compute: function compute(fn, field) {
		    var _this = this;
		    var args = [];
		    forEach(fn.deps, function (dep) {
		      args.push(get(_this, dep));
		    });
		    // compute property
		    set(_this, field, fn[fn.length - 1].apply(_this, args));
		  },
		  contains: contains,
		  copy: copy,
		  deepMixIn: deepMixIn,
		  diffObjectFromOldObject: observe.diffObjectFromOldObject,
		  BinaryHeap: BinaryHeap,
		  equals: equals,
		  Events: Events,
		  filter: filter,
		  fillIn: function fillIn(target, obj) {
		    forOwn(obj, function (v, k) {
		      if (!(k in target)) {
		        target[k] = v;
		      }
		    });
		    return target;
		  },
		  forEach: forEach,
		  forOwn: forOwn,
		  fromJson: function fromJson(json) {
		    return isString(json) ? JSON.parse(json) : json;
		  },
		  get: get,
		  intersection: intersection,
		  isArray: isArray,
		  isBlacklisted: isBlacklisted,
		  isEmpty: isEmpty,
		  isFunction: isFunction,
		  isObject: isObject,
		  isNumber: isNumber,
		  isString: isString,
		  keys: _keys,
		  makePath: makePath,
		  observe: observe,
		  omit: function omit(obj, bl) {
		    var toRemove = [];
		    forOwn(obj, function (v, k) {
		      if (isBlacklisted(k, bl)) {
		        toRemove.push(k);
		      }
		    });
		    forEach(toRemove, function (k) {
		      delete obj[k];
		    });
		    return obj;
		  },
		  pascalCase: pascalCase,
		  pick: pick,
		  // Turn the given node-style callback function into one that can return a promise.
		  promisify: function promisify(fn, target) {
		    var _this = this;
		    if (!fn) {
		      return;
		    } else if (typeof fn !== 'function') {
		      throw new Error('Can only promisify functions!');
		    }
		    return function () {
		      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		        args[_key3] = arguments[_key3];
		      }

		      return new _this.Promise(function (resolve, reject) {

		        args.push(function (err, result) {
		          if (err) {
		            reject(err);
		          } else {
		            resolve(result);
		          }
		        });

		        try {
		          var promise = fn.apply(target || this, args);
		          if (promise && promise.then) {
		            promise.then(resolve, reject);
		          }
		        } catch (err) {
		          reject(err);
		        }
		      });
		    };
		  },
		  remove: remove,
		  set: set,
		  slice: slice,
		  sort: sort,
		  toJson: JSON.stringify,
		  updateTimestamp: function updateTimestamp(timestamp) {
		    var newTimestamp = typeof Date.now === 'function' ? Date.now() : new Date().getTime();
		    if (timestamp && newTimestamp <= timestamp) {
		      return timestamp + 1;
		    } else {
		      return newTimestamp;
		    }
		  },
		  upperCase: upperCase,
		  // Return a copy of "object" with cycles removed.
		  removeCircular: function removeCircular(object) {
		    return (function rmCirc(value, ctx) {
		      var i = undefined;
		      var nu = undefined;

		      if (typeof value === 'object' && value !== null && !(value instanceof Boolean) && !(value instanceof Date) && !(value instanceof Number) && !(value instanceof RegExp) && !(value instanceof String)) {

		        // check if current object points back to itself
		        var cur = ctx.cur;
		        var parent = ctx.ctx;
		        while (parent) {
		          if (parent.cur === cur) {
		            return undefined;
		          }
		          parent = parent.ctx;
		        }

		        if (isArray(value)) {
		          nu = [];
		          for (i = 0; i < value.length; i += 1) {
		            nu[i] = rmCirc(value[i], { ctx: ctx, cur: value[i] });
		          }
		        } else {
		          nu = {};
		          forOwn(value, function (v, k) {
		            nu[k] = rmCirc(value[k], { ctx: ctx, cur: value[k] });
		          });
		        }
		        return nu;
		      }
		      return value;
		    })(object, { ctx: null, cur: object });
		  },
		  resolveItem: resolveItem,
		  resolveId: resolveId,
		  respond: function respond(response, meta, options) {
		    if (options.returnMeta === 'array') {
		      return [response, meta];
		    } else if (options.returnMeta === 'object') {
		      return { response: response, meta: meta };
		    } else {
		      return response;
		    }
		  },
		  w: w,
		  // This is where the magic of relations happens.
		  applyRelationGettersToTarget: function applyRelationGettersToTarget(store, definition, target) {
		    this.forEach(definition.relationList, function (def) {
		      var relationName = def.relation;
		      var localField = def.localField;
		      var localKey = def.localKey;
		      var foreignKey = def.foreignKey;
		      var localKeys = def.localKeys;
		      var enumerable = typeof def.enumerable === 'boolean' ? def.enumerable : !!definition.relationsEnumerable;
		      if (typeof def.link === 'boolean' ? def.link : !!definition.linkRelations) {
		        delete target[localField];
		        var prop = {
		          enumerable: enumerable,
		          set: function set() {}
		        };
		        if (def.type === 'belongsTo') {
		          prop.get = function () {
		            return get(this, localKey) ? definition.getResource(relationName).get(get(this, localKey)) : undefined;
		          };
		        } else if (def.type === 'hasMany') {
		          prop.get = function () {
		            var params = {};
		            if (foreignKey) {
		              params[foreignKey] = this[definition.idAttribute];
		              return definition.getResource(relationName).defaultFilter.call(store, store.s[relationName].collection, relationName, params, { allowSimpleWhere: true });
		            } else if (localKeys) {
		              var keys = get(this, localKeys) || [];
		              return definition.getResource(relationName).getAll(isArray(keys) ? keys : _keys(keys));
		            }
		            return undefined;
		          };
		        } else if (def.type === 'hasOne') {
		          if (localKey) {
		            prop.get = function () {
		              return get(this, localKey) ? definition.getResource(relationName).get(get(this, localKey)) : undefined;
		            };
		          } else {
		            prop.get = function () {
		              var params = {};
		              params[foreignKey] = this[definition.idAttribute];
		              var items = params[foreignKey] ? definition.getResource(relationName).defaultFilter.call(store, store.s[relationName].collection, relationName, params, { allowSimpleWhere: true }) : [];
		              if (items.length) {
		                return items[0];
		              }
		              return undefined;
		            };
		          }
		        }
		        if (def.get) {
		          (function () {
		            var orig = prop.get;
		            prop.get = function () {
		              var _this2 = this;

		              return def.get(definition, def, this, function () {
		                for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		                  args[_key4] = arguments[_key4];
		                }

		                return orig.apply(_this2, args);
		              });
		            };
		          })();
		        }
		        Object.defineProperty(target, def.localField, prop);
		      }
		    });
		  }
		};

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

		/**
		 * Thrown during a method call when an argument passed into the method is invalid.
		 */

		var IllegalArgumentError = (function (_Error) {
		  function IllegalArgumentError(message) {
		    _classCallCheck(this, IllegalArgumentError);

		    _get(Object.getPrototypeOf(IllegalArgumentError.prototype), 'constructor', this).call(this);
		    if (typeof Error.captureStackTrace === 'function') {
		      Error.captureStackTrace(this, this.constructor);
		    }
		    this.type = this.constructor.name;
		    this.message = message;
		  }

		  _inherits(IllegalArgumentError, _Error);

		  return IllegalArgumentError;
		})(Error);

		/**
		 * Thrown when an invariant is violated or unrecoverable error is encountered during execution.
		 */

		var RuntimeError = (function (_Error2) {
		  function RuntimeError(message) {
		    _classCallCheck(this, RuntimeError);

		    _get(Object.getPrototypeOf(RuntimeError.prototype), 'constructor', this).call(this);
		    if (typeof Error.captureStackTrace === 'function') {
		      Error.captureStackTrace(this, this.constructor);
		    }
		    this.type = this.constructor.name;
		    this.message = message;
		  }

		  _inherits(RuntimeError, _Error2);

		  return RuntimeError;
		})(Error);

		/**
		 * Thrown when attempting to access or work with a non-existent resource.
		 */

		var NonexistentResourceError = (function (_Error3) {
		  function NonexistentResourceError(resourceName) {
		    _classCallCheck(this, NonexistentResourceError);

		    _get(Object.getPrototypeOf(NonexistentResourceError.prototype), 'constructor', this).call(this);
		    if (typeof Error.captureStackTrace === 'function') {
		      Error.captureStackTrace(this, this.constructor);
		    }
		    this.type = this.constructor.name;
		    this.message = resourceName + ' is not a registered resource!';
		  }

		  _inherits(NonexistentResourceError, _Error3);

		  return NonexistentResourceError;
		})(Error);

		exports['default'] = {
		  IllegalArgumentError: IllegalArgumentError,
		  IA: IllegalArgumentError,
		  RuntimeError: RuntimeError,
		  R: RuntimeError,
		  NonexistentResourceError: NonexistentResourceError,
		  NER: NonexistentResourceError
		};

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		var NER = _errors['default'].NER;
		var IA = _errors['default'].IA;
		var R = _errors['default'].R;

		var fakeId = 'DS_' + new Date().getTime();

		function diffIsEmpty(diff) {
		  return !(_utils['default'].isEmpty(diff.added) && _utils['default'].isEmpty(diff.removed) && _utils['default'].isEmpty(diff.changed));
		}

		function check(fnName, resourceName, id, options) {
		  var _this = this;
		  var definition = _this.defs[resourceName];
		  options = options || {};

		  id = _utils['default'].resolveId(definition, id);
		  if (!definition) {
		    throw new NER(resourceName);
		  } else if (!_utils['default']._sn(id)) {
		    throw _utils['default']._snErr('id');
		  }
		  id = id === fakeId ? undefined : id;

		  options = _utils['default']._(definition, options);

		  options.logFn(fnName, id, options);

		  return { _this: _this, definition: definition, _resourceName: resourceName, _id: id, _options: options };
		}

		exports['default'] = {

		  // Return the changes for the given item, if any.
		  //
		  // @param resourceName The name of the type of resource of the item whose changes are to be returned.
		  // @param id The primary key of the item whose changes are to be returned.
		  // @param options Optional configuration.
		  // @param options.ignoredChanges Array of strings or regular expressions of fields, the changes of which are to be ignored.
		  // @returns The changes of the given item, if any.
		  changes: function changes(resourceName, id, options) {
		    var _check$call = check.call(this, 'changes', resourceName, id, options);

		    var _this = _check$call._this;
		    var definition = _check$call.definition;
		    var _resourceName = _check$call._resourceName;
		    var _id = _check$call._id;
		    var _options = _check$call._options;

		    var item = definition.get(_id);
		    if (item) {
		      var _ret = (function () {
		        if (_utils['default'].w) {
		          // force observation handler to be fired for item if there are changes and `Object.observe` is not available
		          _this.s[_resourceName].observers[_id].deliver();
		        }

		        var ignoredChanges = _options.ignoredChanges || [];
		        // add linked relations to list of ignored changes
		        _utils['default'].forEach(definition.relationFields, function (field) {
		          if (!_utils['default'].contains(ignoredChanges, field)) {
		            ignoredChanges.push(field);
		          }
		        });
		        // calculate changes
		        var diff = _utils['default'].diffObjectFromOldObject(item, _this.s[_resourceName].previousAttributes[_id], _utils['default'].equals, ignoredChanges);
		        // remove functions from diff
		        _utils['default'].forOwn(diff, function (changeset, name) {
		          var toKeep = [];
		          _utils['default'].forOwn(changeset, function (value, field) {
		            if (!_utils['default'].isFunction(value)) {
		              toKeep.push(field);
		            }
		          });
		          diff[name] = _utils['default'].pick(diff[name], toKeep);
		        });
		        // definitely ignore changes to linked relations
		        _utils['default'].forEach(definition.relationFields, function (field) {
		          delete diff.added[field];
		          delete diff.removed[field];
		          delete diff.changed[field];
		        });
		        return {
		          v: diff
		        };
		      })();

		      if (typeof _ret === 'object') return _ret.v;
		    }
		  },

		  // Return the change history of the given item, if any.
		  //
		  // @param resourceName The name of the type of resource of the item whose change history is to be returned.
		  // @param id The primary key of the item whose change history is to be returned.
		  // @returns The change history of the given item, if any.
		  changeHistory: function changeHistory(resourceName, id) {
		    var _check$call2 = check.call(this, 'changeHistory', resourceName, id || fakeId);

		    var _this = _check$call2._this;
		    var definition = _check$call2.definition;
		    var _resourceName = _check$call2._resourceName;
		    var _id = _check$call2._id;

		    var resource = _this.s[_resourceName];

		    if (!definition.keepChangeHistory) {
		      definition.errorFn('changeHistory is disabled for this resource!');
		    } else {
		      if (_resourceName) {
		        var item = definition.get(_id);
		        if (item) {
		          return resource.changeHistories[_id];
		        }
		      } else {
		        return resource.changeHistory;
		      }
		    }
		  },

		  // Re-compute the computed properties of the given item.
		  //
		  // @param resourceName The name of the type of resource of the item whose computed properties are to be re-computed.
		  // @param instance The instance whose computed properties are to be re-computed.
		  // @returns The item whose computed properties were re-computed.
		  compute: function compute(resourceName, instance) {
		    var _this = this;
		    var definition = _this.defs[resourceName];

		    instance = _utils['default'].resolveItem(_this.s[resourceName], instance);
		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (!instance) {
		      throw new R('Item not in the store!');
		    } else if (!_utils['default']._o(instance) && !_utils['default']._sn(instance)) {
		      throw new IA('"instance" must be an object, string or number!');
		    }

		    definition.logFn('compute', instance);

		    // re-compute all computed properties
		    _utils['default'].forOwn(definition.computed, function (fn, field) {
		      _utils['default'].compute.call(instance, fn, field);
		    });
		    return instance;
		  },

		  // Factory function to create an instance of the specified Resource.
		  //
		  // @param resourceName The name of the type of resource of which to create an instance.
		  // @param attrs Hash of properties with which to initialize the instance.
		  // @param options Optional configuration.
		  // @param options.defaults Default values with which to initialize the instance.
		  // @returns The new instance.
		  createInstance: function createInstance(resourceName, attrs, options) {
		    var definition = this.defs[resourceName];
		    var item = undefined;

		    attrs = attrs || {};

		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (attrs && !_utils['default'].isObject(attrs)) {
		      throw new IA('"attrs" must be an object!');
		    }

		    options = _utils['default']._(definition, options);
		    options.logFn('createInstance', attrs, options);

		    // lifecycle
		    options.beforeCreateInstance(options, attrs);

		    // grab instance constructor function from Resource definition
		    var Constructor = definition[definition['class']];

		    // create instance
		    item = new Constructor();

		    // add default values
		    if (options.defaultValues) {
		      _utils['default'].deepMixIn(item, options.defaultValues);
		    }
		    _utils['default'].deepMixIn(item, attrs);

		    // compute computed properties
		    if (definition.computed) {
		      definition.compute(item);
		    }
		    // lifecycle
		    options.afterCreateInstance(options, item);
		    return item;
		  },

		  // Create a new collection of the specified Resource.
		  //
		  // @param resourceName The name of the type of resource of which to create a collection
		  // @param arr Possibly empty array of data from which to create the collection.
		  // @param params The criteria by which to filter items. Will be passed to `DS#findAll` if `fetch` is called. See http://www.js-data.io/docs/query-syntax
		  // @param options Optional configuration.
		  // @param options.notify Whether to call the beforeCreateCollection and afterCreateCollection lifecycle hooks..
		  // @returns The new collection.
		  createCollection: function createCollection(resourceName, arr, params, options) {
		    var _this = this;
		    var definition = _this.defs[resourceName];

		    arr = arr || [];
		    params = params || {};

		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (arr && !_utils['default'].isArray(arr)) {
		      throw new IA('"arr" must be an array!');
		    }

		    options = _utils['default']._(definition, options);

		    options.logFn('createCollection', arr, options);

		    // lifecycle
		    options.beforeCreateCollection(options, arr);

		    // define the API for this collection
		    Object.defineProperties(arr, {
		      //  Call DS#findAll with the params of this collection, filling the collection with the results.
		      fetch: {
		        value: function value(params, options) {
		          var __this = this;
		          __this.params = params || __this.params;
		          return definition.findAll(__this.params, options).then(function (data) {
		            if (data === __this) {
		              return __this;
		            }
		            data.unshift(__this.length);
		            data.unshift(0);
		            __this.splice.apply(__this, data);
		            data.shift();
		            data.shift();
		            if (data.$$injected) {
		              _this.s[resourceName].queryData[_utils['default'].toJson(__this.params)] = __this;
		              __this.$$injected = true;
		            }
		            return __this;
		          });
		        }
		      },
		      // params for this collection. See http://www.js-data.io/docs/query-syntax
		      params: {
		        value: params,
		        writable: true
		      },
		      // name of the resource type of this collection
		      resourceName: {
		        value: resourceName
		      }
		    });

		    // lifecycle
		    options.afterCreateCollection(options, arr);
		    return arr;
		  },
		  defineResource: __webpack_require__(27),
		  digest: function digest() {
		    this.observe.Platform.performMicrotaskCheckpoint();
		  },
		  eject: __webpack_require__(28),
		  ejectAll: __webpack_require__(29),
		  filter: __webpack_require__(30),

		  // Return the item with the given primary key if its in the store.
		  //
		  // @param resourceName The name of the type of resource of the item to retrieve.
		  // @param id The primary key of the item to retrieve.
		  // @returns The item with the given primary key if it's in the store.
		  ///
		  get: function get(resourceName, id) {
		    var _check$call3 = check.call(this, 'get', resourceName, id);

		    var _this = _check$call3._this;
		    var _resourceName = _check$call3._resourceName;
		    var _id = _check$call3._id;

		    // return the item if it exists
		    return _this.s[_resourceName].index[_id];
		  },

		  // Return the items in the store that have the given primary keys.
		  //
		  // @param resourceName The name of the type of resource of the items to retrieve.
		  // @param ids The primary keys of the items to retrieve.
		  // @returns The items with the given primary keys if they're in the store.
		  getAll: function getAll(resourceName, ids) {
		    var _this = this;
		    var definition = _this.defs[resourceName];
		    var resource = _this.s[resourceName];
		    var collection = [];

		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (ids && !_utils['default']._a(ids)) {
		      throw _utils['default']._aErr('ids');
		    }

		    definition.logFn('getAll', ids);

		    if (_utils['default']._a(ids)) {
		      // return just the items with the given primary keys
		      var _length = ids.length;
		      for (var i = 0; i < _length; i++) {
		        if (resource.index[ids[i]]) {
		          collection.push(resource.index[ids[i]]);
		        }
		      }
		    } else {
		      // most efficient of retrieving ALL items from the store
		      collection = resource.collection.slice();
		    }

		    return collection;
		  },

		  // Return the whether the item with the given primary key has any changes.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns Whether the item with the given primary key has any changes.
		  hasChanges: function hasChanges(resourceName, id) {
		    var _check$call4 = check.call(this, 'hasChanges', resourceName, id);

		    var definition = _check$call4.definition;
		    var _id = _check$call4._id;

		    return definition.get(_id) ? diffIsEmpty(definition.changes(_id)) : false;
		  },
		  inject: __webpack_require__(31),

		  // Return the timestamp from the last time the item with the given primary key was changed.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns Timestamp from the last time the item was changed.
		  lastModified: function lastModified(resourceName, id) {
		    var _check$call5 = check.call(this, 'lastModified', resourceName, id || fakeId);

		    var _this = _check$call5._this;
		    var _resourceName = _check$call5._resourceName;
		    var _id = _check$call5._id;

		    var resource = _this.s[_resourceName];

		    if (_id) {
		      if (!(_id in resource.modified)) {
		        resource.modified[_id] = 0;
		      }
		      return resource.modified[_id];
		    }
		    return resource.collectionModified;
		  },

		  // Return the timestamp from the last time the item with the given primary key was saved via an adapter.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns Timestamp from the last time the item was saved.
		  lastSaved: function lastSaved(resourceName, id) {
		    var _check$call6 = check.call(this, 'lastSaved', resourceName, id || fakeId);

		    var _this = _check$call6._this;
		    var _resourceName = _check$call6._resourceName;
		    var _id = _check$call6._id;

		    var resource = _this.s[_resourceName];

		    if (!(_id in resource.saved)) {
		      resource.saved[_id] = 0;
		    }
		    return resource.saved[_id];
		  },

		  // Return the previous attributes of the item with the given primary key before it was changed.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns The previous attributes of the item
		  previous: function previous(resourceName, id) {
		    var _check$call7 = check.call(this, 'previous', resourceName, id);

		    var _this = _check$call7._this;
		    var _resourceName = _check$call7._resourceName;
		    var _id = _check$call7._id;

		    var resource = _this.s[_resourceName];

		    // return resource from cache
		    return resource.previousAttributes[_id] ? _utils['default'].copy(resource.previousAttributes[_id]) : undefined;
		  },

		  // Revert all attributes of the item with the given primary key to their previous values.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns The reverted item
		  revert: function revert(resourceName, id) {
		    var _check$call8 = check.call(this, 'revert', resourceName, id);

		    var _this = _check$call8._this;
		    var definition = _check$call8.definition;
		    var _resourceName = _check$call8._resourceName;
		    var _id = _check$call8._id;

		    return definition.inject(_this.previous(_resourceName, _id));
		  }
		};

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		exports['default'] = {
		  create: __webpack_require__(32),
		  destroy: __webpack_require__(33),
		  destroyAll: __webpack_require__(34),
		  find: __webpack_require__(35),
		  findAll: __webpack_require__(36),
		  loadRelations: __webpack_require__(37),
		  reap: __webpack_require__(38),
		  refresh: function refresh(resourceName, id, options) {
		    var _this = this;
		    var DSUtils = _this.utils;

		    return new DSUtils.Promise(function (resolve, reject) {
		      var definition = _this.defs[resourceName];
		      id = DSUtils.resolveId(_this.defs[resourceName], id);
		      if (!definition) {
		        reject(new _this.errors.NER(resourceName));
		      } else if (!DSUtils._sn(id)) {
		        reject(DSUtils._snErr('id'));
		      } else {
		        options = DSUtils._(definition, options);
		        options.bypassCache = true;
		        options.logFn('refresh', id, options);
		        resolve(_this.get(resourceName, id));
		      }
		    }).then(function (item) {
		      return item ? _this.find(resourceName, id, options) : item;
		    });
		  },
		  refreshAll: function refreshAll(resourceName, params, options) {
		    var _this = this;
		    var DSUtils = _this.utils;
		    var definition = _this.defs[resourceName];
		    params = params || {};

		    return new DSUtils.Promise(function (resolve, reject) {
		      if (!definition) {
		        reject(new _this.errors.NER(resourceName));
		      } else if (!DSUtils._o(params)) {
		        reject(DSUtils._oErr('params'));
		      } else {
		        options = DSUtils._(definition, options);
		        options.bypassCache = true;
		        options.logFn('refreshAll', params, options);
		        resolve(_this.filter(resourceName, params, options));
		      }
		    }).then(function (existing) {
		      options.bypassCache = true;
		      return _this.findAll(resourceName, params, options).then(function (found) {
		        DSUtils.forEach(existing, function (item) {
		          if (found.indexOf(item) === -1) {
		            definition.eject(item);
		          }
		        });
		        return found;
		      });
		    });
		  },
		  save: __webpack_require__(39),
		  update: __webpack_require__(40),
		  updateAll: __webpack_require__(41)
		};

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
		 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		 * Code distributed by Google as part of the polymer project is also
		 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		 */

		// Modifications
		// Copyright 2014-2015 Jason Dobry
		//
		// Summary of modifications:
		// Fixed use of "delete" keyword for IE8 compatibility
		// Exposed diffObjectFromOldObject on the exported object
		// Added the "equals" argument to diffObjectFromOldObject to be used to check equality
		// Added a way in diffObjectFromOldObject to ignore changes to certain properties
		// Removed all code related to:
		// - ArrayObserver
		// - ArraySplice
		// - PathObserver
		// - CompoundObserver
		// - Path
		// - ObserverTransform

		(function(global) {
		  var testingExposeCycleCount = global.testingExposeCycleCount;

		  // Detect and do basic sanity checking on Object/Array.observe.
		  function detectObjectObserve() {
		    if (typeof Object.observe !== 'function' ||
		        typeof Array.observe !== 'function') {
		      return false;
		    }

		    var records = [];

		    function callback(recs) {
		      records = recs;
		    }

		    var test = {};
		    var arr = [];
		    Object.observe(test, callback);
		    Array.observe(arr, callback);
		    test.id = 1;
		    test.id = 2;
		    delete test.id;
		    arr.push(1, 2);
		    arr.length = 0;

		    Object.deliverChangeRecords(callback);
		    if (records.length !== 5)
		      return false;

		    if (records[0].type != 'add' ||
		        records[1].type != 'update' ||
		        records[2].type != 'delete' ||
		        records[3].type != 'splice' ||
		        records[4].type != 'splice') {
		      return false;
		    }

		    Object.unobserve(test, callback);
		    Array.unobserve(arr, callback);

		    return true;
		  }

		  var hasObserve = detectObjectObserve();

		  var createObject = ('__proto__' in {}) ?
		    function(obj) { return obj; } :
		    function(obj) {
		      var proto = obj.__proto__;
		      if (!proto)
		        return obj;
		      var newObject = Object.create(proto);
		      Object.getOwnPropertyNames(obj).forEach(function(name) {
		        Object.defineProperty(newObject, name,
		                             Object.getOwnPropertyDescriptor(obj, name));
		      });
		      return newObject;
		    };

		  var MAX_DIRTY_CHECK_CYCLES = 1000;

		  function dirtyCheck(observer) {
		    var cycles = 0;
		    while (cycles < MAX_DIRTY_CHECK_CYCLES && observer.check_()) {
		      cycles++;
		    }
		    if (testingExposeCycleCount)
		      global.dirtyCheckCycleCount = cycles;

		    return cycles > 0;
		  }

		  function objectIsEmpty(object) {
		    for (var prop in object)
		      return false;
		    return true;
		  }

		  function diffIsEmpty(diff) {
		    return objectIsEmpty(diff.added) &&
		           objectIsEmpty(diff.removed) &&
		           objectIsEmpty(diff.changed);
		  }

		  function isBlacklisted(prop, bl) {
		    if (!bl || !bl.length) {
		      return false;
		    }
		    var matches;
		    for (var i = 0; i < bl.length; i++) {
		      if ((Object.prototype.toString.call(bl[i]) === '[object RegExp]' && bl[i].test(prop)) || bl[i] === prop) {
		        return matches = prop;
		      }
		    }
		    return !!matches;
		  }

		  function diffObjectFromOldObject(object, oldObject, equals, bl) {
		    var added = {};
		    var removed = {};
		    var changed = {};

		    for (var prop in oldObject) {
		      var newValue = object[prop];

		      if (isBlacklisted(prop, bl))
		        continue;

		      if (newValue !== undefined && (equals ? equals(newValue, oldObject[prop]) : newValue === oldObject[prop]))
		        continue;

		      if (!(prop in object)) {
		        removed[prop] = undefined;
		        continue;
		      }

		      if (equals ? !equals(newValue, oldObject[prop]) : newValue !== oldObject[prop])
		        changed[prop] = newValue;
		    }

		    for (var prop in object) {
		      if (prop in oldObject)
		        continue;

		      if (isBlacklisted(prop, bl))
		        continue;

		      added[prop] = object[prop];
		    }

		    if (Array.isArray(object) && object.length !== oldObject.length)
		      changed.length = object.length;

		    return {
		      added: added,
		      removed: removed,
		      changed: changed
		    };
		  }

		  var eomTasks = [];
		  function runEOMTasks() {
		    if (!eomTasks.length)
		      return false;

		    for (var i = 0; i < eomTasks.length; i++) {
		      eomTasks[i]();
		    }
		    eomTasks.length = 0;
		    return true;
		  }

		  var runEOM = hasObserve ? (function(){
		    return function(fn) {
		      return Promise.resolve().then(fn);
		    }
		  })() :
		  (function() {
		    return function(fn) {
		      eomTasks.push(fn);
		    };
		  })();

		  var observedObjectCache = [];

		  function newObservedObject() {
		    var observer;
		    var object;
		    var discardRecords = false;
		    var first = true;

		    function callback(records) {
		      if (observer && observer.state_ === OPENED && !discardRecords)
		        observer.check_(records);
		    }

		    return {
		      open: function(obs) {
		        if (observer)
		          throw Error('ObservedObject in use');

		        if (!first)
		          Object.deliverChangeRecords(callback);

		        observer = obs;
		        first = false;
		      },
		      observe: function(obj, arrayObserve) {
		        object = obj;
		        if (arrayObserve)
		          Array.observe(object, callback);
		        else
		          Object.observe(object, callback);
		      },
		      deliver: function(discard) {
		        discardRecords = discard;
		        Object.deliverChangeRecords(callback);
		        discardRecords = false;
		      },
		      close: function() {
		        observer = undefined;
		        Object.unobserve(object, callback);
		        observedObjectCache.push(this);
		      }
		    };
		  }

		  function getObservedObject(observer, object, arrayObserve) {
		    var dir = observedObjectCache.pop() || newObservedObject();
		    dir.open(observer);
		    dir.observe(object, arrayObserve);
		    return dir;
		  }

		  var UNOPENED = 0;
		  var OPENED = 1;
		  var CLOSED = 2;

		  var nextObserverId = 1;

		  function Observer() {
		    this.state_ = UNOPENED;
		    this.callback_ = undefined;
		    this.target_ = undefined; // TODO(rafaelw): Should be WeakRef
		    this.directObserver_ = undefined;
		    this.value_ = undefined;
		    this.id_ = nextObserverId++;
		  }

		  Observer.prototype = {
		    open: function(callback, target) {
		      if (this.state_ != UNOPENED)
		        throw Error('Observer has already been opened.');

		      addToAll(this);
		      this.callback_ = callback;
		      this.target_ = target;
		      this.connect_();
		      this.state_ = OPENED;
		      return this.value_;
		    },

		    close: function() {
		      if (this.state_ != OPENED)
		        return;

		      removeFromAll(this);
		      this.disconnect_();
		      this.value_ = undefined;
		      this.callback_ = undefined;
		      this.target_ = undefined;
		      this.state_ = CLOSED;
		    },

		    deliver: function() {
		      if (this.state_ != OPENED)
		        return;

		      dirtyCheck(this);
		    },

		    report_: function(changes) {
		      try {
		        this.callback_.apply(this.target_, changes);
		      } catch (ex) {
		        Observer._errorThrownDuringCallback = true;
		        console.error('Exception caught during observer callback: ' +
		                       (ex.stack || ex));
		      }
		    },

		    discardChanges: function() {
		      this.check_(undefined, true);
		      return this.value_;
		    }
		  }

		  var collectObservers = !hasObserve;
		  var allObservers;
		  Observer._allObserversCount = 0;

		  if (collectObservers) {
		    allObservers = [];
		  }

		  function addToAll(observer) {
		    Observer._allObserversCount++;
		    if (!collectObservers)
		      return;

		    allObservers.push(observer);
		  }

		  function removeFromAll(observer) {
		    Observer._allObserversCount--;
		  }

		  var runningMicrotaskCheckpoint = false;

		  global.Platform = global.Platform || {};

		  global.Platform.performMicrotaskCheckpoint = function() {
		    if (runningMicrotaskCheckpoint)
		      return;

		    if (!collectObservers)
		      return;

		    runningMicrotaskCheckpoint = true;

		    var cycles = 0;
		    var anyChanged, toCheck;

		    do {
		      cycles++;
		      toCheck = allObservers;
		      allObservers = [];
		      anyChanged = false;

		      for (var i = 0; i < toCheck.length; i++) {
		        var observer = toCheck[i];
		        if (observer.state_ != OPENED)
		          continue;

		        if (observer.check_())
		          anyChanged = true;

		        allObservers.push(observer);
		      }
		      if (runEOMTasks())
		        anyChanged = true;
		    } while (cycles < MAX_DIRTY_CHECK_CYCLES && anyChanged);

		    if (testingExposeCycleCount)
		      global.dirtyCheckCycleCount = cycles;

		    runningMicrotaskCheckpoint = false;
		  };

		  if (collectObservers) {
		    global.Platform.clearObservers = function() {
		      allObservers = [];
		    };
		  }

		  function ObjectObserver(object) {
		    Observer.call(this);
		    this.value_ = object;
		    this.oldObject_ = undefined;
		  }

		  ObjectObserver.prototype = createObject({
		    __proto__: Observer.prototype,

		    arrayObserve: false,

		    connect_: function(callback, target) {
		      if (hasObserve) {
		        this.directObserver_ = getObservedObject(this, this.value_,
		                                                 this.arrayObserve);
		      } else {
		        this.oldObject_ = this.copyObject(this.value_);
		      }

		    },

		    copyObject: function(object) {
		      var copy = Array.isArray(object) ? [] : {};
		      for (var prop in object) {
		        copy[prop] = object[prop];
		      };
		      if (Array.isArray(object))
		        copy.length = object.length;
		      return copy;
		    },

		    check_: function(changeRecords, skipChanges) {
		      var diff;
		      var oldValues;
		      if (hasObserve) {
		        if (!changeRecords)
		          return false;

		        oldValues = {};
		        diff = diffObjectFromChangeRecords(this.value_, changeRecords,
		                                           oldValues);
		      } else {
		        oldValues = this.oldObject_;
		        diff = diffObjectFromOldObject(this.value_, this.oldObject_);
		      }

		      if (diffIsEmpty(diff))
		        return false;

		      if (!hasObserve)
		        this.oldObject_ = this.copyObject(this.value_);

		      this.report_([
		        diff.added || {},
		        diff.removed || {},
		        diff.changed || {},
		        function(property) {
		          return oldValues[property];
		        }
		      ]);

		      return true;
		    },

		    disconnect_: function() {
		      if (hasObserve) {
		        this.directObserver_.close();
		        this.directObserver_ = undefined;
		      } else {
		        this.oldObject_ = undefined;
		      }
		    },

		    deliver: function() {
		      if (this.state_ != OPENED)
		        return;

		      if (hasObserve)
		        this.directObserver_.deliver(false);
		      else
		        dirtyCheck(this);
		    },

		    discardChanges: function() {
		      if (this.directObserver_)
		        this.directObserver_.deliver(true);
		      else
		        this.oldObject_ = this.copyObject(this.value_);

		      return this.value_;
		    }
		  });

		  var observerSentinel = {};

		  var expectedRecordTypes = {
		    add: true,
		    update: true,
		    'delete': true
		  };

		  function diffObjectFromChangeRecords(object, changeRecords, oldValues) {
		    var added = {};
		    var removed = {};

		    for (var i = 0; i < changeRecords.length; i++) {
		      var record = changeRecords[i];
		      if (!expectedRecordTypes[record.type]) {
		        console.error('Unknown changeRecord type: ' + record.type);
		        console.error(record);
		        continue;
		      }

		      if (!(record.name in oldValues))
		        oldValues[record.name] = record.oldValue;

		      if (record.type == 'update')
		        continue;

		      if (record.type == 'add') {
		        if (record.name in removed)
		          delete removed[record.name];
		        else
		          added[record.name] = true;

		        continue;
		      }

		      // type = 'delete'
		      if (record.name in added) {
		        delete added[record.name];
		        delete oldValues[record.name];
		      } else {
		        removed[record.name] = true;
		      }
		    }

		    for (var prop in added)
		      added[prop] = object[prop];

		    for (var prop in removed)
		      removed[prop] = undefined;

		    var changed = {};
		    for (var prop in oldValues) {
		      if (prop in added || prop in removed)
		        continue;

		      var newValue = object[prop];
		      if (oldValues[prop] !== newValue)
		        changed[prop] = newValue;
		    }

		    return {
		      added: added,
		      removed: removed,
		      changed: changed
		    };
		  }

		  // Export the observe-js object for **Node.js**, with backwards-compatibility
		  // for the old `require()` API. Also ensure `exports` is not a DOM Element.
		  // If we're in the browser, export as a global object.

		  global.Observer = Observer;
		  global.isBlacklisted = isBlacklisted;
		  global.Observer.runEOM_ = runEOM;
		  global.Observer.observerSentinel_ = observerSentinel; // for testing.
		  global.Observer.hasObjectObserve = hasObserve;
		  global.diffObjectFromOldObject = diffObjectFromOldObject;
		  global.ObjectObserver = ObjectObserver;

		})(exports);


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		/*!
		 * yabh
		 * @version 1.0.1 - Homepage <http://jmdobry.github.io/yabh/>
		 * @author Jason Dobry <jason.dobry@gmail.com>
		 * @copyright (c) 2015 Jason Dobry 
		 * @license MIT <https://github.com/jmdobry/yabh/blob/master/LICENSE>
		 * 
		 * @overview Yet another Binary Heap.
		 */
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory();
			else if(typeof define === 'function' && define.amd)
				define("yabh", factory);
			else if(typeof exports === 'object')
				exports["BinaryHeap"] = factory();
			else
				root["BinaryHeap"] = factory();
		})(this, function() {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};

		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {

		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};

		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;

		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {

			var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			Object.defineProperty(exports, '__esModule', {
			  value: true
			});
			/**
			 * @method bubbleUp
			 * @param {array} heap The heap.
			 * @param {function} weightFunc The weight function.
			 * @param {number} n The index of the element to bubble up.
			 */
			function bubbleUp(heap, weightFunc, n) {
			  var element = heap[n];
			  var weight = weightFunc(element);
			  // When at 0, an element can not go up any further.
			  while (n > 0) {
			    // Compute the parent element's index, and fetch it.
			    var parentN = Math.floor((n + 1) / 2) - 1;
			    var _parent = heap[parentN];
			    // If the parent has a lesser weight, things are in order and we
			    // are done.
			    if (weight >= weightFunc(_parent)) {
			      break;
			    } else {
			      heap[parentN] = element;
			      heap[n] = _parent;
			      n = parentN;
			    }
			  }
			}

			/**
			 * @method bubbleDown
			 * @param {array} heap The heap.
			 * @param {function} weightFunc The weight function.
			 * @param {number} n The index of the element to sink down.
			 */
			var bubbleDown = function bubbleDown(heap, weightFunc, n) {
			  var length = heap.length;
			  var node = heap[n];
			  var nodeWeight = weightFunc(node);

			  while (true) {
			    var child2N = (n + 1) * 2,
			        child1N = child2N - 1;
			    var swap = null;
			    if (child1N < length) {
			      var child1 = heap[child1N],
			          child1Weight = weightFunc(child1);
			      // If the score is less than our node's, we need to swap.
			      if (child1Weight < nodeWeight) {
			        swap = child1N;
			      }
			    }
			    // Do the same checks for the other child.
			    if (child2N < length) {
			      var child2 = heap[child2N],
			          child2Weight = weightFunc(child2);
			      if (child2Weight < (swap === null ? nodeWeight : weightFunc(heap[child1N]))) {
			        swap = child2N;
			      }
			    }

			    if (swap === null) {
			      break;
			    } else {
			      heap[n] = heap[swap];
			      heap[swap] = node;
			      n = swap;
			    }
			  }
			};

			var BinaryHeap = (function () {
			  function BinaryHeap(weightFunc, compareFunc) {
			    _classCallCheck(this, BinaryHeap);

			    if (!weightFunc) {
			      weightFunc = function (x) {
			        return x;
			      };
			    }
			    if (!compareFunc) {
			      compareFunc = function (x, y) {
			        return x === y;
			      };
			    }
			    if (typeof weightFunc !== 'function') {
			      throw new Error('BinaryHeap([weightFunc][, compareFunc]): "weightFunc" must be a function!');
			    }
			    if (typeof compareFunc !== 'function') {
			      throw new Error('BinaryHeap([weightFunc][, compareFunc]): "compareFunc" must be a function!');
			    }
			    this.weightFunc = weightFunc;
			    this.compareFunc = compareFunc;
			    this.heap = [];
			  }

			  _createClass(BinaryHeap, [{
			    key: 'push',
			    value: function push(node) {
			      this.heap.push(node);
			      bubbleUp(this.heap, this.weightFunc, this.heap.length - 1);
			    }
			  }, {
			    key: 'peek',
			    value: function peek() {
			      return this.heap[0];
			    }
			  }, {
			    key: 'pop',
			    value: function pop() {
			      var front = this.heap[0];
			      var end = this.heap.pop();
			      if (this.heap.length > 0) {
			        this.heap[0] = end;
			        bubbleDown(this.heap, this.weightFunc, 0);
			      }
			      return front;
			    }
			  }, {
			    key: 'remove',
			    value: function remove(node) {
			      var length = this.heap.length;
			      for (var i = 0; i < length; i++) {
			        if (this.compareFunc(this.heap[i], node)) {
			          var removed = this.heap[i];
			          var end = this.heap.pop();
			          if (i !== length - 1) {
			            this.heap[i] = end;
			            bubbleUp(this.heap, this.weightFunc, i);
			            bubbleDown(this.heap, this.weightFunc, i);
			          }
			          return removed;
			        }
			      }
			      return null;
			    }
			  }, {
			    key: 'removeAll',
			    value: function removeAll() {
			      this.heap = [];
			    }
			  }, {
			    key: 'size',
			    value: function size() {
			      return this.heap.length;
			    }
			  }]);

			  return BinaryHeap;
			})();

			exports['default'] = BinaryHeap;
			module.exports = exports['default'];

		/***/ }
		/******/ ])
		});
		;

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Array forEach
		     */
		    function forEach(arr, callback, thisObj) {
		        if (arr == null) {
		            return;
		        }
		        var i = -1,
		            len = arr.length;
		        while (++i < len) {
		            // we iterate over sparse items since there is no way to make it
		            // work properly on IE 7-8. see #64
		            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
		                break;
		            }
		        }
		    }

		    module.exports = forEach;




	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Create slice of source array or array-like object
		     */
		    function slice(arr, start, end){
		        var len = arr.length;

		        if (start == null) {
		            start = 0;
		        } else if (start < 0) {
		            start = Math.max(len + start, 0);
		        } else {
		            start = Math.min(start, len);
		        }

		        if (end == null) {
		            end = len;
		        } else if (end < 0) {
		            end = Math.max(len + end, 0);
		        } else {
		            end = Math.min(end, len);
		        }

		        var result = [];
		        while (start < end) {
		            result.push(arr[start++]);
		        }

		        return result;
		    }

		    module.exports = slice;




	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		var indexOf = __webpack_require__(21);

		    /**
		     * If array contains values.
		     */
		    function contains(arr, val) {
		        return indexOf(arr, val) !== -1;
		    }
		    module.exports = contains;



	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		var indexOf = __webpack_require__(21);

		    /**
		     * Remove a single item from the array.
		     * (it won't remove duplicates, just a single item)
		     */
		    function remove(arr, item){
		        var idx = indexOf(arr, item);
		        if (idx !== -1) arr.splice(idx, 1);
		    }

		    module.exports = remove;



	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Merge sort (http://en.wikipedia.org/wiki/Merge_sort)
		     */
		    function mergeSort(arr, compareFn) {
		        if (arr == null) {
		            return [];
		        } else if (arr.length < 2) {
		            return arr;
		        }

		        if (compareFn == null) {
		            compareFn = defaultCompare;
		        }

		        var mid, left, right;

		        mid   = ~~(arr.length / 2);
		        left  = mergeSort( arr.slice(0, mid), compareFn );
		        right = mergeSort( arr.slice(mid, arr.length), compareFn );

		        return merge(left, right, compareFn);
		    }

		    function defaultCompare(a, b) {
		        return a < b ? -1 : (a > b? 1 : 0);
		    }

		    function merge(left, right, compareFn) {
		        var result = [];

		        while (left.length && right.length) {
		            if (compareFn(left[0], right[0]) <= 0) {
		                // if 0 it should preserve same order (stable)
		                result.push(left.shift());
		            } else {
		                result.push(right.shift());
		            }
		        }

		        if (left.length) {
		            result.push.apply(result, left);
		        }

		        if (right.length) {
		            result.push.apply(result, right);
		        }

		        return result;
		    }

		    module.exports = mergeSort;




	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		var hasOwn = __webpack_require__(22);
		var forIn = __webpack_require__(23);

		    /**
		     * Similar to Array/forEach but works over object properties and fixes Don't
		     * Enum bug on IE.
		     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
		     */
		    function forOwn(obj, fn, thisObj){
		        forIn(obj, function(val, key){
		            if (hasOwn(obj, key)) {
		                return fn.call(thisObj, obj[key], key, obj);
		            }
		        });
		    }

		    module.exports = forOwn;




	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		var forOwn = __webpack_require__(13);
		var isPlainObject = __webpack_require__(24);

		    /**
		     * Mixes objects into the target object, recursively mixing existing child
		     * objects.
		     */
		    function deepMixIn(target, objects) {
		        var i = 0,
		            n = arguments.length,
		            obj;

		        while(++i < n){
		            obj = arguments[i];
		            if (obj) {
		                forOwn(obj, copyProp, target);
		            }
		        }

		        return target;
		    }

		    function copyProp(val, key) {
		        var existing = this[key];
		        if (isPlainObject(val) && isPlainObject(existing)) {
		            deepMixIn(existing, val);
		        } else {
		            this[key] = val;
		        }
		    }

		    module.exports = deepMixIn;




	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		var slice = __webpack_require__(9);

		    /**
		     * Return a copy of the object, filtered to only have values for the whitelisted keys.
		     */
		    function pick(obj, var_keys){
		        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
		            out = {},
		            i = 0, key;
		        while (key = keys[i++]) {
		            out[key] = obj[key];
		        }
		        return out;
		    }

		    module.exports = pick;




	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		var forOwn = __webpack_require__(13);

		    /**
		     * Get object keys
		     */
		     var keys = Object.keys || function (obj) {
		            var keys = [];
		            forOwn(obj, function(val, key){
		                keys.push(key);
		            });
		            return keys;
		        };

		    module.exports = keys;




	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var isPrimitive = __webpack_require__(25);

		    /**
		     * get "nested" object property
		     */
		    function get(obj, prop){
		        var parts = prop.split('.'),
		            last = parts.pop();

		        while (prop = parts.shift()) {
		            obj = obj[prop];
		            if (obj == null) return;
		        }

		        return obj[last];
		    }

		    module.exports = get;




	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var namespace = __webpack_require__(26);

		    /**
		     * set "nested" object property
		     */
		    function set(obj, prop, val){
		        var parts = (/^(.+)\.(.+)$/).exec(prop);
		        if (parts){
		            namespace(obj, parts[1])[parts[2]] = val;
		        } else {
		            obj[prop] = val;
		        }
		    }

		    module.exports = set;




	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		var camelCase = __webpack_require__(43);
		var upperCase = __webpack_require__(20);
		    /**
		     * camelCase + UPPERCASE first char
		     */
		    function pascalCase(str){
		        str = toString(str);
		        return camelCase(str).replace(/^[a-z]/, upperCase);
		    }

		    module.exports = pascalCase;



	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		    /**
		     * "Safer" String.toUpperCase()
		     */
		    function upperCase(str){
		        str = toString(str);
		        return str.toUpperCase();
		    }
		    module.exports = upperCase;



	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Array.indexOf
		     */
		    function indexOf(arr, item, fromIndex) {
		        fromIndex = fromIndex || 0;
		        if (arr == null) {
		            return -1;
		        }

		        var len = arr.length,
		            i = fromIndex < 0 ? len + fromIndex : fromIndex;
		        while (i < len) {
		            // we iterate over sparse items since there is no way to make it
		            // work properly on IE 7-8. see #64
		            if (arr[i] === item) {
		                return i;
		            }

		            i++;
		        }

		        return -1;
		    }

		    module.exports = indexOf;



	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Safer Object.hasOwnProperty
		     */
		     function hasOwn(obj, prop){
		         return Object.prototype.hasOwnProperty.call(obj, prop);
		     }

		     module.exports = hasOwn;




	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		var hasOwn = __webpack_require__(22);

		    var _hasDontEnumBug,
		        _dontEnums;

		    function checkDontEnum(){
		        _dontEnums = [
		                'toString',
		                'toLocaleString',
		                'valueOf',
		                'hasOwnProperty',
		                'isPrototypeOf',
		                'propertyIsEnumerable',
		                'constructor'
		            ];

		        _hasDontEnumBug = true;

		        for (var key in {'toString': null}) {
		            _hasDontEnumBug = false;
		        }
		    }

		    /**
		     * Similar to Array/forEach but works over object properties and fixes Don't
		     * Enum bug on IE.
		     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
		     */
		    function forIn(obj, fn, thisObj){
		        var key, i = 0;
		        // no need to check if argument is a real object that way we can use
		        // it for arrays, functions, date, etc.

		        //post-pone check till needed
		        if (_hasDontEnumBug == null) checkDontEnum();

		        for (key in obj) {
		            if (exec(fn, obj, key, thisObj) === false) {
		                break;
		            }
		        }


		        if (_hasDontEnumBug) {
		            var ctor = obj.constructor,
		                isProto = !!ctor && obj === ctor.prototype;

		            while (key = _dontEnums[i++]) {
		                // For constructor, if it is a prototype object the constructor
		                // is always non-enumerable unless defined otherwise (and
		                // enumerated above).  For non-prototype objects, it will have
		                // to be defined on this object, since it cannot be defined on
		                // any prototype objects.
		                //
		                // For other [[DontEnum]] properties, check if the value is
		                // different than Object prototype value.
		                if (
		                    (key !== 'constructor' ||
		                        (!isProto && hasOwn(obj, key))) &&
		                    obj[key] !== Object.prototype[key]
		                ) {
		                    if (exec(fn, obj, key, thisObj) === false) {
		                        break;
		                    }
		                }
		            }
		        }
		    }

		    function exec(fn, obj, key, thisObj){
		        return fn.call(thisObj, obj[key], key, obj);
		    }

		    module.exports = forIn;




	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Checks if the value is created by the `Object` constructor.
		     */
		    function isPlainObject(value) {
		        return (!!value && typeof value === 'object' &&
		            value.constructor === Object);
		    }

		    module.exports = isPlainObject;




	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Checks if the object is a primitive
		     */
		    function isPrimitive(value) {
		        // Using switch fallthrough because it's simple to read and is
		        // generally fast: http://jsperf.com/testing-value-is-primitive/5
		        switch (typeof value) {
		            case "string":
		            case "number":
		            case "boolean":
		                return true;
		        }

		        return value == null;
		    }

		    module.exports = isPrimitive;




	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		var forEach = __webpack_require__(8);

		    /**
		     * Create nested object if non-existent
		     */
		    function namespace(obj, path){
		        if (!path) return obj;
		        forEach(path.split('.'), function(key){
		            if (!obj[key]) {
		                obj[key] = {};
		            }
		            obj = obj[key];
		        });
		        return obj;
		    }

		    module.exports = namespace;




	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		/*jshint evil:true, loopfunc:true*/

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		/**
		 * These are DS methods that will be proxied by instances. e.g.
		 *
		 * var store = new JSData.DS();
		 * var User = store.defineResource('user');
		 * var user = User.createInstance({ id: 1 });
		 *
		 * store.update(resourceName, id, attrs[, options]) // DS method
		 * User.update(id, attrs[, options]) // DS method proxied on a Resource
		 * user.DSUpdate(attrs[, options]) // DS method proxied on an Instance
		 */
		var instanceMethods = ['compute', 'eject', 'refresh', 'save', 'update', 'destroy', 'loadRelations', 'changeHistory', 'changes', 'hasChanges', 'lastModified', 'lastSaved', 'previous', 'revert'];

		module.exports = function defineResource(definition) {
		  var _this = this;
		  var definitions = _this.defs;

		  /**
		   * This allows the name-only definition shorthand.
		   * store.defineResource('user') is the same as store.defineResource({ name: 'user'})
		   */
		  if (_utils['default']._s(definition)) {
		    definition = {
		      name: definition.replace(/\s/gi, '')
		    };
		  }
		  if (!_utils['default']._o(definition)) {
		    throw _utils['default']._oErr('definition');
		  } else if (!_utils['default']._s(definition.name)) {
		    throw new _errors['default'].IA('"name" must be a string!');
		  } else if (definitions[definition.name]) {
		    throw new _errors['default'].R(definition.name + ' is already registered!');
		  }

		  /**
		   * Dynamic Resource constructor function.
		   *
		   * A Resource inherits from the defaults of the data store that created it.
		   */
		  function Resource(options) {
		    this.defaultValues = {};
		    this.methods = {};
		    this.computed = {};
		    _utils['default'].deepMixIn(this, options);
		    var parent = _this.defaults;
		    if (definition['extends'] && definitions[definition['extends']]) {
		      parent = definitions[definition['extends']];
		    }
		    _utils['default'].fillIn(this.defaultValues, parent.defaultValues);
		    _utils['default'].fillIn(this.methods, parent.methods);
		    _utils['default'].fillIn(this.computed, parent.computed);
		    this.endpoint = 'endpoint' in options ? options.endpoint : this.name;
		  }

		  try {
		    var def;

		    var _class;

		    var _ret = (function () {
		      // Resources can inherit from another resource instead of inheriting directly from the data store defaults.
		      if (definition['extends'] && definitions[definition['extends']]) {
		        // Inherit from another resource
		        Resource.prototype = definitions[definition['extends']];
		      } else {
		        // Inherit from global defaults
		        Resource.prototype = _this.defaults;
		      }
		      definitions[definition.name] = new Resource(definition);

		      def = definitions[definition.name];

		      def.getResource = function (resourceName) {
		        return _this.defs[resourceName];
		      };

		      def.logFn('Preparing resource.');

		      if (!_utils['default']._s(def.idAttribute)) {
		        throw new _errors['default'].IA('"idAttribute" must be a string!');
		      }

		      // Setup nested parent configuration
		      if (def.relations) {
		        def.relationList = [];
		        def.relationFields = [];
		        _utils['default'].forOwn(def.relations, function (relatedModels, type) {
		          _utils['default'].forOwn(relatedModels, function (defs, relationName) {
		            if (!_utils['default']._a(defs)) {
		              relatedModels[relationName] = [defs];
		            }
		            _utils['default'].forEach(relatedModels[relationName], function (d) {
		              d.type = type;
		              d.relation = relationName;
		              d.name = def.name;
		              def.relationList.push(d);
		              if (d.localField) {
		                def.relationFields.push(d.localField);
		              }
		            });
		          });
		        });
		        if (def.relations.belongsTo) {
		          _utils['default'].forOwn(def.relations.belongsTo, function (relatedModel, modelName) {
		            _utils['default'].forEach(relatedModel, function (relation) {
		              if (relation.parent) {
		                def.parent = modelName;
		                def.parentKey = relation.localKey;
		                def.parentField = relation.localField;
		              }
		            });
		          });
		        }
		        if (typeof Object.freeze === 'function') {
		          Object.freeze(def.relations);
		          Object.freeze(def.relationList);
		        }
		      }

		      // Create the wrapper class for the new resource
		      _class = def['class'] = _utils['default'].pascalCase(def.name);

		      try {
		        if (typeof def.useClass === 'function') {
		          eval('function ' + _class + '() { def.useClass.call(this); }');
		          def[_class] = eval(_class);
		          def[_class].prototype = (function (proto) {
		            function Ctor() {}

		            Ctor.prototype = proto;
		            return new Ctor();
		          })(def.useClass.prototype);
		        } else {
		          eval('function ' + _class + '() {}');
		          def[_class] = eval(_class);
		        }
		      } catch (e) {
		        def[_class] = function () {};
		      }

		      // Apply developer-defined instance methods
		      _utils['default'].forOwn(def.methods, function (fn, m) {
		        def[_class].prototype[m] = fn;
		      });

		      /**
		       * var user = User.createInstance({ id: 1 });
		       * user.set('foo', 'bar');
		       */
		      def[_class].prototype.set = function (key, value) {
		        var _this2 = this;

		        _utils['default'].set(this, key, value);
		        def.compute(this);
		        if (def.instanceEvents) {
		          setTimeout(function () {
		            _this2.emit('DS.change', def, _this2);
		          }, 0);
		        }
		        def.handleChange(this);
		        return this;
		      };

		      /**
		       * var user = User.createInstance({ id: 1 });
		       * user.get('id'); // 1
		       */
		      def[_class].prototype.get = function (key) {
		        return _utils['default'].get(this, key);
		      };

		      if (def.instanceEvents) {
		        _utils['default'].Events(def[_class].prototype);
		      }

		      // Setup the relation links
		      _utils['default'].applyRelationGettersToTarget(_this, def, def[_class].prototype);

		      var parentOmit = null;
		      if (!def.hasOwnProperty('omit')) {
		        parentOmit = def.omit;
		        def.omit = [];
		      } else {
		        parentOmit = _this.defaults.omit;
		      }
		      def.omit = def.omit.concat(parentOmit || []);

		      // Prepare for computed properties
		      _utils['default'].forOwn(def.computed, function (fn, field) {
		        if (_utils['default'].isFunction(fn)) {
		          def.computed[field] = [fn];
		          fn = def.computed[field];
		        }
		        if (def.methods && field in def.methods) {
		          def.errorFn('Computed property "' + field + '" conflicts with previously defined prototype method!');
		        }
		        def.omit.push(field);
		        var deps;
		        if (fn.length === 1) {
		          var match = fn[0].toString().match(/function.*?\(([\s\S]*?)\)/);
		          deps = match[1].split(',');
		          def.computed[field] = deps.concat(fn);
		          fn = def.computed[field];
		          if (deps.length) {
		            def.errorFn('Use the computed property array syntax for compatibility with minified code!');
		          }
		        }
		        deps = fn.slice(0, fn.length - 1);
		        _utils['default'].forEach(deps, function (val, index) {
		          deps[index] = val.trim();
		        });
		        fn.deps = _utils['default'].filter(deps, function (dep) {
		          return !!dep;
		        });
		      });

		      // add instance proxies of DS methods
		      _utils['default'].forEach(instanceMethods, function (name) {
		        def[_class].prototype['DS' + _utils['default'].pascalCase(name)] = function () {
		          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		            args[_key] = arguments[_key];
		          }

		          args.unshift(this[def.idAttribute] || this);
		          args.unshift(def.name);
		          return _this[name].apply(_this, args);
		        };
		      });

		      // manually add instance proxy for DS#create
		      def[_class].prototype.DSCreate = function () {
		        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		          args[_key2] = arguments[_key2];
		        }

		        args.unshift(this);
		        args.unshift(def.name);
		        return _this.create.apply(_this, args);
		      };

		      // Initialize store data for the new resource
		      _this.s[def.name] = {
		        collection: [],
		        expiresHeap: new _utils['default'].BinaryHeap(function (x) {
		          return x.expires;
		        }, function (x, y) {
		          return x.item === y;
		        }),
		        completedQueries: {},
		        queryData: {},
		        pendingQueries: {},
		        index: {},
		        modified: {},
		        saved: {},
		        previousAttributes: {},
		        observers: {},
		        changeHistories: {},
		        changeHistory: [],
		        collectionModified: 0
		      };

		      var resource = _this.s[def.name];

		      // start the reaping
		      if (def.reapInterval) {
		        setInterval(function () {
		          return def.reap();
		        }, def.reapInterval);
		      }

		      // proxy DS methods with shorthand ones
		      var fns = ['registerAdapter', 'getAdapterName', 'getAdapter', 'is', '!clear'];
		      for (var key in _this) {
		        if (typeof _this[key] === 'function') {
		          fns.push(key);
		        }
		      }

		      /**
		       * Create the Resource shorthands that proxy DS methods. e.g.
		       *
		       * var store = new JSData.DS();
		       * var User = store.defineResource('user');
		       *
		       * store.update(resourceName, id, attrs[, options]) // DS method
		       * User.update(id, attrs[, options]) // DS method proxied on a Resource
		       */
		      _utils['default'].forEach(fns, function (key) {
		        var k = key;
		        if (k[0] === '!') {
		          return;
		        }
		        if (_this[k].shorthand !== false) {
		          def[k] = function () {
		            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		              args[_key3] = arguments[_key3];
		            }

		            args.unshift(def.name);
		            return _this[k].apply(_this, args);
		          };
		          def[k].before = function (fn) {
		            var orig = def[k];
		            def[k] = function () {
		              for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		                args[_key4] = arguments[_key4];
		              }

		              return orig.apply(def, fn.apply(def, args) || args);
		            };
		          };
		        } else {
		          def[k] = function () {
		            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
		              args[_key5] = arguments[_key5];
		            }

		            return _this[k].apply(_this, args);
		          };
		        }
		      });

		      def.beforeValidate = _utils['default'].promisify(def.beforeValidate);
		      def.validate = _utils['default'].promisify(def.validate);
		      def.afterValidate = _utils['default'].promisify(def.afterValidate);
		      def.beforeCreate = _utils['default'].promisify(def.beforeCreate);
		      def.afterCreate = _utils['default'].promisify(def.afterCreate);
		      def.beforeUpdate = _utils['default'].promisify(def.beforeUpdate);
		      def.afterUpdate = _utils['default'].promisify(def.afterUpdate);
		      def.beforeDestroy = _utils['default'].promisify(def.beforeDestroy);
		      def.afterDestroy = _utils['default'].promisify(def.afterDestroy);

		      var defaultAdapter = undefined;
		      if (def.hasOwnProperty('defaultAdapter')) {
		        defaultAdapter = def.defaultAdapter;
		      }

		      // setup "actions"
		      _utils['default'].forOwn(def.actions, function (action, name) {
		        if (def[name] && !def.actions[name]) {
		          throw new Error('Cannot override existing method "' + name + '"!');
		        }
		        action.request = action.request || function (config) {
		          return config;
		        };
		        action.response = action.response || function (response) {
		          return response;
		        };
		        action.responseError = action.responseError || function (err) {
		          return _utils['default'].Promise.reject(err);
		        };
		        def[name] = function (id, options) {
		          if (_utils['default']._o(id)) {
		            options = id;
		          }
		          options = options || {};
		          var adapter = def.getAdapter(action.adapter || defaultAdapter || 'http');
		          var config = _utils['default'].deepMixIn({}, action);
		          if (!options.hasOwnProperty('endpoint') && config.endpoint) {
		            options.endpoint = config.endpoint;
		          }
		          if (typeof options.getEndpoint === 'function') {
		            config.url = options.getEndpoint(def, options);
		          } else {
		            var args = [options.basePath || adapter.defaults.basePath || def.basePath, adapter.getEndpoint(def, _utils['default']._sn(id) ? id : null, options)];
		            if (_utils['default']._sn(id)) {
		              args.push(id);
		            }
		            args.push(action.pathname || name);
		            config.url = _utils['default'].makePath.apply(null, args);
		          }
		          config.method = config.method || 'GET';
		          _utils['default'].deepMixIn(config, options);
		          return new _utils['default'].Promise(function (r) {
		            return r(config);
		          }).then(options.request || action.request).then(function (config) {
		            return adapter.HTTP(config);
		          }).then(options.response || action.response, options.responseError || action.responseError);
		        };
		      });

		      // mix in events
		      _utils['default'].Events(def);

		      def.handleChange = function (data) {
		        resource.collectionModified = _utils['default'].updateTimestamp(resource.collectionModified);
		        if (def.notify) {
		          setTimeout(function () {
		            def.emit('DS.change', def, data);
		          }, 0);
		        }
		      };

		      def.logFn('Done preparing resource.');

		      return {
		        v: def
		      };
		    })();

		    if (typeof _ret === 'object') return _ret.v;
		  } catch (err) {
		    _this.defaults.errorFn(err);
		    delete definitions[definition.name];
		    delete _this.s[definition.name];
		    throw err;
		  }
		};

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Eject an item from the store, if it is currently in the store.
		 *
		 * @param resourceName The name of the resource type of the item eject.
		 * @param id The primary key of the item to eject.
		 * @param options Optional configuration.
		 * @param options.notify Whether to emit the "DS.beforeEject" and "DS.afterEject" events
		 * @param options.clearEmptyQueries Whether to remove cached findAll queries that become empty as a result of this method call.
		 * @returns The ejected item if one was ejected.
		 */
		module.exports = function eject(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var item = undefined;
		  var found = false;

		  id = DSUtils.resolveId(definition, id);

		  if (!definition) {
		    throw new _this.errors.NER(resourceName);
		  } else if (!DSUtils._sn(id)) {
		    throw DSUtils._snErr('id');
		  }

		  options = DSUtils._(definition, options);

		  options.logFn('eject', id, options);

		  // find the item to eject
		  for (var i = 0; i < resource.collection.length; i++) {
		    if (resource.collection[i][definition.idAttribute] == id) {
		      // jshint ignore:line
		      item = resource.collection[i];
		      // remove its expiration timestamp
		      resource.expiresHeap.remove(item);
		      found = true;
		      break;
		    }
		  }
		  if (found) {
		    var _ret = (function () {
		      // lifecycle
		      definition.beforeEject(options, item);
		      if (options.notify) {
		        definition.emit('DS.beforeEject', definition, item);
		      }

		      // find the item in any ($$injected) cached queries
		      var toRemove = [];
		      DSUtils.forOwn(resource.queryData, function (items, queryHash) {
		        if (items.$$injected) {
		          DSUtils.remove(items, item);
		        }
		        // optionally remove any empty queries
		        if (!items.length && options.clearEmptyQueries) {
		          toRemove.push(queryHash);
		        }
		      });

		      // clean up
		      DSUtils.forEach(resource.changeHistories[id], function (changeRecord) {
		        DSUtils.remove(resource.changeHistory, changeRecord);
		      });
		      DSUtils.forEach(toRemove, function (queryHash) {
		        delete resource.completedQueries[queryHash];
		        delete resource.queryData[queryHash];
		      });
		      if (DSUtils.w) {
		        // stop observation
		        resource.observers[id].close();
		      }
		      delete resource.observers[id];
		      delete resource.index[id];
		      delete resource.previousAttributes[id];
		      delete resource.completedQueries[id];
		      delete resource.pendingQueries[id];
		      delete resource.changeHistories[id];
		      delete resource.modified[id];
		      delete resource.saved[id];

		      // remove it from the store
		      resource.collection.splice(i, 1);
		      // collection has been modified
		      definition.handleChange(item);

		      // lifecycle
		      definition.afterEject(options, item);
		      if (options.notify) {
		        definition.emit('DS.afterEject', definition, item);
		      }

		      return {
		        v: item
		      };
		    })();

		    if (typeof _ret === 'object') return _ret.v;
		  }
		};

	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Eject a collection of items from the store, if any items currently in the store match the given criteria.
		 *
		 * @param resourceName The name of the resource type of the items eject.
		 * @param params The criteria by which to match items to eject. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @returns The collection of items that were ejected, if any.
		 */
		module.exports = function ejectAll(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  params = params || {};

		  if (!definition) {
		    throw new _this.errors.NER(resourceName);
		  } else if (!DSUtils._o(params)) {
		    throw DSUtils._oErr('params');
		  }

		  definition.logFn('ejectAll', params, options);

		  var resource = _this.s[resourceName];
		  var queryHash = DSUtils.toJson(params);

		  // get items that match the criteria
		  var items = definition.filter(params);

		  if (DSUtils.isEmpty(params)) {
		    // remove all completed queries if ejecting all items
		    resource.completedQueries = {};
		  } else {
		    // remove matching completed query, if any
		    delete resource.completedQueries[queryHash];
		  }
		  // prepare to remove matching items
		  DSUtils.forEach(items, function (item) {
		    if (item && item[definition.idAttribute]) {
		      definition.eject(item[definition.idAttribute], options);
		    }
		  });
		  // collection has been modified
		  definition.handleChange(items);
		  return items;
		};

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Return the subset of items currently in the store that match the given criteria.
		 *
		 * The actual filtering is delegated to DS#defaults.defaultFilter, which can be overridden by developers.
		 *
		 * @param resourceName The name of the resource type of the items to filter.
		 * @param params The criteria by which to filter items. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @returns Matching items.
		 */
		module.exports = function filter(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];

		  if (!definition) {
		    throw new _this.errors.NER(resourceName);
		  } else if (params && !DSUtils._o(params)) {
		    throw DSUtils._oErr('params');
		  }

		  // Protect against null
		  params = params || {};
		  options = DSUtils._(definition, options);
		  options.logFn('filter', params, options);

		  // delegate filtering to DS#defaults.defaultFilter, which can be overridden by developers.
		  return definition.defaultFilter.call(_this, _this.s[resourceName].collection, resourceName, params, options);
		};

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		/**
		 * This is a beast of a file, but it's where a significant portion of the magic happens.
		 *
		 * DS#inject makes up the core of how data gets into the store.
		 */

		/**
		 * This factory function produces an observer handler function tailor-made for the current item being injected.
		 *
		 * The observer handler is what allows computed properties and change tracking to function.
		 *
		 * @param definition Resource definition produced by DS#defineResource
		 * @param resource Resource data as internally stored by the data store
		 * @returns {Function} Observer handler function
		 * @private
		 */
		function makeObserverHandler(definition, resource) {
		  var DS = this;

		  // using "var" avoids a JSHint error
		  var name = definition.name;

		  /**
		   * This will be called by observe-js when a new change record is available for the observed object
		   *
		   * @param added Change record for added properties
		   * @param removed Change record for removed properties
		   * @param changed Change record for changed properties
		   * @param oldValueFn Function that can be used to get the previous value of a changed property
		   * @param firstTime Whether this is the first time this function is being called for the given item. Will only be true once.
		   */
		  return function _react(added, removed, changed, oldValueFn, firstTime) {
		    var target = this;
		    var item = undefined;

		    // Get the previous primary key of the observed item, in-case some knucklehead changed it
		    var innerId = oldValueFn && oldValueFn(definition.idAttribute) ? oldValueFn(definition.idAttribute) : target[definition.idAttribute];

		    // Ignore changes to relation links
		    _utils['default'].forEach(definition.relationFields, function (field) {
		      delete added[field];
		      delete removed[field];
		      delete changed[field];
		    });

		    // Detect whether there are actually any changes
		    if (!_utils['default'].isEmpty(added) || !_utils['default'].isEmpty(removed) || !_utils['default'].isEmpty(changed) || firstTime) {
		      item = DS.get(name, innerId);

		      // update item and collection "modified" timestamps
		      resource.modified[innerId] = _utils['default'].updateTimestamp(resource.modified[innerId]);

		      if (item && definition.instanceEvents) {
		        setTimeout(function () {
		          item.emit('DS.change', definition, item);
		        }, 0);
		      }

		      definition.handleChange(item);

		      // Save a change record for the item
		      if (definition.keepChangeHistory) {
		        var changeRecord = {
		          resourceName: name,
		          target: item,
		          added: added,
		          removed: removed,
		          changed: changed,
		          timestamp: resource.modified[innerId]
		        };
		        resource.changeHistories[innerId].push(changeRecord);
		        resource.changeHistory.push(changeRecord);
		      }
		    }

		    // Recompute computed properties if any computed properties depend on changed properties
		    if (definition.computed) {
		      item = item || DS.get(name, innerId);
		      _utils['default'].forOwn(definition.computed, function (fn, field) {
		        var compute = false;
		        // check if required fields changed
		        _utils['default'].forEach(fn.deps, function (dep) {
		          if (dep in added || dep in removed || dep in changed || !(field in item)) {
		            compute = true;
		          }
		        });
		        compute = compute || !fn.deps.length;
		        if (compute) {
		          _utils['default'].compute.call(item, fn, field);
		        }
		      });
		    }

		    if (definition.idAttribute in changed) {
		      definition.errorFn('Doh! You just changed the primary key of an object! Your data for the "' + name + '" resource is now in an undefined (probably broken) state.');
		    }
		  };
		}

		/**
		 * A recursive function for injecting data into the store.
		 *
		 * @param definition Resource definition produced by DS#defineResource
		 * @param resource Resource data as internally stored by the data store
		 * @param attrs The data to be injected. Will be an object or an array of objects.
		 * @param options Optional configuration.
		 * @returns The injected data
		 * @private
		 */
		function _inject(definition, resource, attrs, options) {
		  var _this = this;
		  var injected = undefined;

		  if (_utils['default']._a(attrs)) {
		    // have an array of objects, go ahead and inject each one individually and return the resulting array
		    injected = [];
		    for (var i = 0; i < attrs.length; i++) {
		      injected.push(_inject.call(_this, definition, resource, attrs[i], options));
		    }
		  } else {
		    // create the observer handler for the data to be injected
		    var _react = makeObserverHandler.call(_this, definition, resource);

		    // check if "idAttribute" is a computed property
		    var c = definition.computed;
		    var idA = definition.idAttribute;
		    // compute the primary key if necessary
		    if (c && c[idA]) {
		      (function () {
		        var args = [];
		        _utils['default'].forEach(c[idA].deps, function (dep) {
		          args.push(attrs[dep]);
		        });
		        attrs[idA] = c[idA][c[idA].length - 1].apply(attrs, args);
		      })();
		    }

		    if (!(idA in attrs)) {
		      // we cannot inject any object into the store that does not have a primary key!
		      var error = new _errors['default'].R(definition.name + '.inject: "attrs" must contain the property specified by "idAttribute"!');
		      options.errorFn(error);
		      throw error;
		    } else {
		      try {
		        (function () {
		          // when injecting object that contain their nested relations, this code
		          // will recursively inject them into their proper places in the data store.
		          // Magic!
		          _utils['default'].forEach(definition.relationList, function (def) {
		            var relationName = def.relation;
		            var relationDef = _this.defs[relationName];
		            var toInject = attrs[def.localField];
		            if (toInject) {
		              if (!relationDef) {
		                throw new _errors['default'].R(definition.name + ' relation is defined but the resource is not!');
		              }
		              // handle injecting hasMany relations
		              if (_utils['default']._a(toInject)) {
		                (function () {
		                  var items = [];
		                  _utils['default'].forEach(toInject, function (toInjectItem) {
		                    if (toInjectItem !== _this.s[relationName].index[toInjectItem[relationDef.idAttribute]]) {
		                      try {
		                        var injectedItem = relationDef.inject(toInjectItem, options.orig());
		                        if (def.foreignKey) {
		                          _utils['default'].set(injectedItem, def.foreignKey, attrs[definition.idAttribute]);
		                        }
		                        items.push(injectedItem);
		                      } catch (err) {
		                        options.errorFn(err, 'Failed to inject ' + def.type + ' relation: "' + relationName + '"!');
		                      }
		                    }
		                  });
		                })();
		              } else {
		                // handle injecting belongsTo and hasOne relations
		                if (toInject !== _this.s[relationName].index[toInject[relationDef.idAttribute]]) {
		                  try {
		                    var _injected = relationDef.inject(attrs[def.localField], options.orig());
		                    if (def.foreignKey) {
		                      _utils['default'].set(_injected, def.foreignKey, attrs[definition.idAttribute]);
		                    }
		                  } catch (err) {
		                    options.errorFn(err, 'Failed to inject ' + def.type + ' relation: "' + relationName + '"!');
		                  }
		                }
		              }
		            }
		          });

		          // primary key of item being injected
		          var id = attrs[idA];
		          // item being injected
		          var item = definition.get(id);
		          // 0 if the item is new, otherwise the previous last modified timestamp of the item
		          var initialLastModified = item ? resource.modified[id] : 0;

		          // item is new
		          if (!item) {
		            if (attrs instanceof definition[definition['class']]) {
		              item = attrs;
		            } else {
		              item = new definition[definition['class']]();
		            }
		            // remove relation properties from the item, since those relations have been injected by now
		            _utils['default'].forEach(definition.relationList, function (def) {
		              delete attrs[def.localField];
		            });
		            // copy remaining properties to the injected item
		            _utils['default'].deepMixIn(item, attrs);

		            // add item to collection
		            resource.collection.push(item);
		            resource.changeHistories[id] = [];

		            // If we're in the browser, start observation
		            if (_utils['default'].w) {
		              resource.observers[id] = new _this.observe.ObjectObserver(item);
		              resource.observers[id].open(_react, item);
		            }

		            // index item
		            resource.index[id] = item;
		            // fire observation handler for the first time
		            _react.call(item, {}, {}, {}, null, true);
		            // save "previous" attributes of the injected item, for change diffs later
		            resource.previousAttributes[id] = _utils['default'].copy(item, null, null, null, definition.relationFields);
		          } else {
		            // item is being re-injected
		            // new properties take precedence
		            if (options.onConflict === 'merge') {
		              _utils['default'].deepMixIn(item, attrs);
		            } else if (options.onConflict === 'replace') {
		              _utils['default'].forOwn(item, function (v, k) {
		                if (k !== definition.idAttribute) {
		                  if (!attrs.hasOwnProperty(k)) {
		                    delete item[k];
		                  }
		                }
		              });
		              _utils['default'].forOwn(attrs, function (v, k) {
		                if (k !== definition.idAttribute) {
		                  item[k] = v;
		                }
		              });
		            }

		            if (definition.resetHistoryOnInject) {
		              // clear change history for item
		              resource.previousAttributes[id] = _utils['default'].copy(item, null, null, null, definition.relationFields);
		              if (resource.changeHistories[id].length) {
		                _utils['default'].forEach(resource.changeHistories[id], function (changeRecord) {
		                  _utils['default'].remove(resource.changeHistory, changeRecord);
		                });
		                resource.changeHistories[id].splice(0, resource.changeHistories[id].length);
		              }
		            }
		            if (_utils['default'].w) {
		              // force observation callback to be fired if there are any changes to the item and `Object.observe` is not available
		              resource.observers[id].deliver();
		            }
		          }
		          // update modified timestamp of item
		          resource.modified[id] = initialLastModified && resource.modified[id] === initialLastModified ? _utils['default'].updateTimestamp(resource.modified[id]) : resource.modified[id];

		          // reset expiry tracking for item
		          resource.expiresHeap.remove(item);
		          var timestamp = new Date().getTime();
		          resource.expiresHeap.push({
		            item: item,
		            timestamp: timestamp,
		            expires: definition.maxAge ? timestamp + definition.maxAge : Number.MAX_VALUE
		          });

		          // final injected item
		          injected = item;
		        })();
		      } catch (err) {
		        options.errorFn(err, attrs);
		      }
		    }
		  }
		  return injected;
		}

		/**
		 * Inject the given object or array of objects into the data store.
		 *
		 * @param resourceName The name of the type of resource of the data to be injected.
		 * @param attrs Object or array of objects. Objects must contain a primary key.
		 * @param options Optional configuration.
		 * @param options.notify Whether to emit the "DS.beforeInject" and "DS.afterInject" events.
		 * @returns The injected data.
		 */
		module.exports = function inject(resourceName, attrs, options) {
		  var _this = this;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var injected = undefined;

		  if (!definition) {
		    throw new _errors['default'].NER(resourceName);
		  } else if (!_utils['default']._o(attrs) && !_utils['default']._a(attrs)) {
		    throw new _errors['default'].IA(resourceName + '.inject: "attrs" must be an object or an array!');
		  }

		  options = _utils['default']._(definition, options);
		  options.logFn('inject', attrs, options);

		  // lifecycle
		  options.beforeInject(options, attrs);
		  if (options.notify) {
		    definition.emit('DS.beforeInject', definition, attrs);
		  }

		  // start the recursive injection of data
		  injected = _inject.call(_this, definition, resource, attrs, options);

		  // collection was modified
		  definition.handleChange(injected);

		  // lifecycle
		  options.afterInject(options, injected);
		  if (options.notify) {
		    definition.emit('DS.afterInject', definition, injected);
		  }

		  return injected;
		};

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Using an adapter, create a new item.
		 *
		 * Generally a primary key will NOT be provided in the properties hash,
		 * because the adapter's persistence layer should be generating one.
		 *
		 * @param resourceName The name of the type of resource of the new item.
		 * @param attrs Hash of properties with which to create the new item.
		 * @param options Optional configuration.
		 * @param options.cacheResponse Whether the newly created item as returned by the adapter should be injected into the data store.
		 * @param options.upsert If the properties hash contains a primary key, attempt to call DS#update instead.
		 * @param options.notify Whether to emit the "DS.beforeCreate" and "DS.afterCreate" events.
		 * @param options.beforeValidate Lifecycle hook.
		 * @param options.validate Lifecycle hook.
		 * @param options.afterValidate Lifecycle hook.
		 * @param options.beforeCreate Lifecycle hook.
		 * @param options.afterCreate Lifecycle hook.
		 */
		module.exports = function create(resourceName, attrs, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var adapter = undefined;

		  options = options || {};
		  attrs = attrs || {};

		  var rejectionError = undefined;
		  if (!definition) {
		    rejectionError = new _this.errors.NER(resourceName);
		  } else if (!DSUtils._o(attrs)) {
		    rejectionError = DSUtils._oErr('attrs');
		  } else {
		    options = DSUtils._(definition, options);
		    if (options.upsert && DSUtils._sn(attrs[definition.idAttribute])) {
		      return _this.update(resourceName, attrs[definition.idAttribute], attrs, options);
		    }
		    options.logFn('create', attrs, options);
		  }

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (rejectionError) {
		      reject(rejectionError);
		    } else {
		      resolve(attrs);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeCreate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeCreate', definition, attrs);
		    }
		    adapter = _this.getAdapterName(options);
		    return _this.adapters[adapter].create(definition, DSUtils.omit(attrs, options.omit), options);
		  }).then(function (attrs) {
		    return options.afterCreate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.afterCreate', definition, attrs);
		    }
		    if (options.cacheResponse) {
		      // injected created intem into the store
		      var created = _this.inject(definition.name, attrs, options.orig());
		      var id = created[definition.idAttribute];
		      // mark item's `find` query as completed, so a subsequent `find` call for this item will resolve immediately
		      var resource = _this.s[resourceName];
		      resource.completedQueries[id] = new Date().getTime();
		      resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		      return created;
		    } else {
		      // just return an un-injected instance
		      return _this.createInstance(resourceName, attrs, options);
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  });
		};

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Using an adapter, destroy an item.
		 *
		 * @param resourceName The name of the type of resource of the item to destroy.
		 * @param id The primary key of the item to destroy.
		 * @param options Optional configuration.
		 * @param options.eagerEject Whether to eject the item from the store before the adapter operation completes, re-injecting if the adapter operation fails.
		 * @param options.notify Whether to emit the "DS.beforeDestroy" and "DS.afterDestroy" events.
		 * @param options.beforeDestroy Lifecycle hook.
		 * @param options.afterDestroy Lifecycle hook.
		 * @returns The primary key of the destroyed item.
		 */
		module.exports = function destroy(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var item = undefined;
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    id = DSUtils.resolveId(definition, id);
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else {
		      // check if the item is in the store
		      item = definition.get(id) || { id: id };
		      options = DSUtils._(definition, options);
		      options.logFn('destroy', id, options);
		      resolve(item);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeDestroy.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeDestroy', definition, attrs);
		    }
		    // don't wait for the adapter, remove the item from the store
		    if (options.eagerEject) {
		      definition.eject(id);
		    }
		    adapter = definition.getAdapter(options);
		    return adapter.destroy(definition, id, options);
		  }).then(function () {
		    return options.afterDestroy.call(item, options, item);
		  }).then(function (item) {
		    if (options.notify) {
		      definition.emit('DS.afterDestroy', definition, item);
		    }
		    // make sure the item is removed from the store
		    definition.eject(id);
		    return DSUtils.respond(id, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    // rollback by re-injecting the item into the store
		    if (options && options.eagerEject && item) {
		      definition.inject(item, { notify: false });
		    }
		    return DSUtils.Promise.reject(err);
		  });
		};

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Using an adapter, destroy an item.
		 *
		 * @param resourceName The name of the type of resource of the item to destroy.
		 * @param params The criteria by which to filter items to destroy. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @param options.eagerEject Whether to eject the items from the store before the adapter operation completes, re-injecting if the adapter operation fails.
		 * @param options.notify Whether to emit the "DS.beforeDestroy" and "DS.afterDestroy" events.
		 * @param options.beforeDestroy Lifecycle hook.
		 * @param options.afterDestroy Lifecycle hook.
		 * @returns The ejected items, if any.
		 */
		module.exports = function destroyAll(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var ejected = undefined,
		      toEject = undefined,
		      adapter = undefined;

		  params = params || {};

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._o(params)) {
		      reject(DSUtils._oErr('attrs'));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('destroyAll', params, options);
		      resolve();
		    }
		  }).then(function () {
		    // find items that are to be ejected from the store
		    toEject = definition.defaultFilter.call(_this, resourceName, params);
		    return options.beforeDestroy(options, toEject);
		  }).then(function () {
		    if (options.notify) {
		      definition.emit('DS.beforeDestroy', definition, toEject);
		    }
		    // don't wait for the adapter, remove the items from the store
		    if (options.eagerEject) {
		      ejected = definition.ejectAll(params);
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].destroyAll(definition, params, options);
		  }).then(function () {
		    return options.afterDestroy(options, toEject);
		  }).then(function () {
		    if (options.notify) {
		      definition.emit('DS.afterDestroy', definition, toEject);
		    }
		    // make sure items are removed from the store
		    return ejected || definition.ejectAll(params);
		  }).then(function (items) {
		    return DSUtils.respond(items, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    // rollback by re-injecting the items into the store
		    if (options && options.eagerEject && ejected) {
		      definition.inject(ejected, { notify: false });
		    }
		    return DSUtils.Promise.reject(err);
		  });
		};

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		/* jshint -W082 */

		/**
		 * Using an adapter, retrieve a single item.
		 *
		 * @param resourceName The of the type of resource of the item to retrieve.
		 * @param id The primary key of the item to retrieve.
		 * @param options Optional configuration.
		 * @param options.bypassCache Whether to ignore any cached item and force the retrieval through the adapter.
		 * @param options.cacheResponse Whether to inject the found item into the data store.
		 * @param options.strictCache Whether to only consider items to be "cached" if they were injected into the store as the result of `find` or `findAll`.
		 * @param options.strategy The retrieval strategy to use.
		 * @param options.findStrategy The retrieval strategy to use. Overrides "strategy".
		 * @param options.fallbackAdapters Array of names of adapters to use if using "fallback" strategy.
		 * @param options.findFallbackAdapters Array of names of adapters to use if using "fallback" strategy. Overrides "fallbackAdapters".
		 * @returns The item.
		 */
		module.exports = function find(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('find', id, options);

		      if (options.params) {
		        options.params = DSUtils.copy(options.params);
		      }

		      if (options.bypassCache || !options.cacheResponse) {
		        delete resource.completedQueries[id];
		      }
		      if ((!options.findStrictCache || id in resource.completedQueries) && definition.get(id) && !options.bypassCache) {
		        // resolve immediately with the cached item
		        resolve(definition.get(id));
		      } else {
		        // we're going to delegate to the adapter next
		        delete resource.completedQueries[id];
		        resolve();
		      }
		    }
		  }).then(function (item) {
		    if (!item) {
		      if (!(id in resource.pendingQueries)) {
		        var promise = undefined;
		        var strategy = options.findStrategy || options.strategy;

		        // try subsequent adapters if the preceeding one fails
		        if (strategy === 'fallback') {
		          (function () {
		            var makeFallbackCall = function makeFallbackCall(index) {
		              adapter = definition.getAdapterName((options.findFallbackAdapters || options.fallbackAdapters)[index]);
		              return _this.adapters[adapter].find(definition, id, options)['catch'](function (err) {
		                index++;
		                if (index < options.fallbackAdapters.length) {
		                  return makeFallbackCall(index);
		                } else {
		                  return DSUtils.Promise.reject(err);
		                }
		              });
		            };

		            promise = makeFallbackCall(0);
		          })();
		        } else {
		          adapter = definition.getAdapterName(options);
		          // just make a single attempt
		          promise = _this.adapters[adapter].find(definition, id, options);
		        }

		        resource.pendingQueries[id] = promise.then(function (data) {
		          // Query is no longer pending
		          delete resource.pendingQueries[id];
		          if (options.cacheResponse) {
		            // inject the item into the data store
		            var injected = definition.inject(data, options.orig());
		            // mark the item as "cached"
		            resource.completedQueries[id] = new Date().getTime();
		            resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		            return injected;
		          } else {
		            // just return an un-injected instance
		            return definition.createInstance(data, options.orig());
		          }
		        });
		      }
		      return resource.pendingQueries[id];
		    } else {
		      // resolve immediately with the item
		      return item;
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    if (resource) {
		      delete resource.pendingQueries[id];
		    }
		    return DSUtils.Promise.reject(err);
		  });
		};

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		/* jshint -W082 */
		function processResults(data, resourceName, queryHash, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var idAttribute = _this.defs[resourceName].idAttribute;
		  var date = new Date().getTime();

		  data = data || [];

		  // Query is no longer pending
		  delete resource.pendingQueries[queryHash];
		  resource.completedQueries[queryHash] = date;

		  // Merge the new values into the cache
		  var injected = definition.inject(data, options.orig());

		  // Make sure each object is added to completedQueries
		  if (DSUtils._a(injected)) {
		    DSUtils.forEach(injected, function (item) {
		      if (item) {
		        var id = item[idAttribute];
		        if (id) {
		          resource.completedQueries[id] = date;
		          resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		        }
		      }
		    });
		  } else {
		    options.errorFn('response is expected to be an array!');
		    resource.completedQueries[injected[idAttribute]] = date;
		  }

		  return injected;
		}

		/**
		 * Using an adapter, retrieve a collection of items.
		 *
		 * @param resourceName The name of the type of resource of the items to retrieve.
		 * @param params The criteria by which to filter items to retrieve. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @param options.bypassCache Whether to ignore any cached query for these items and force the retrieval through the adapter.
		 * @param options.cacheResponse Whether to inject the found items into the data store.
		 * @returns The items.
		 */
		module.exports = function findAll(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var queryHash = undefined,
		      adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    params = params || {};

		    if (!_this.defs[resourceName]) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._o(params)) {
		      reject(DSUtils._oErr('params'));
		    } else {
		      options = DSUtils._(definition, options);
		      queryHash = DSUtils.toJson(params);
		      options.logFn('findAll', params, options);

		      if (options.params) {
		        options.params = DSUtils.copy(options.params);
		      }

		      // force a new request
		      if (options.bypassCache || !options.cacheResponse) {
		        delete resource.completedQueries[queryHash];
		        delete resource.queryData[queryHash];
		      }
		      if (queryHash in resource.completedQueries) {
		        if (options.useFilter) {
		          if (options.localKeys) {
		            resolve(definition.getAll(options.localKeys, options.orig()));
		          } else {
		            // resolve immediately by filtering data from the data store
		            resolve(definition.filter(params, options.orig()));
		          }
		        } else {
		          // resolve immediately by returning the cached array from the previously made query
		          resolve(resource.queryData[queryHash]);
		        }
		      } else {
		        resolve();
		      }
		    }
		  }).then(function (items) {
		    if (!(queryHash in resource.completedQueries)) {
		      if (!(queryHash in resource.pendingQueries)) {
		        var promise = undefined;
		        var strategy = options.findAllStrategy || options.strategy;

		        // try subsequent adapters if the preceeding one fails
		        if (strategy === 'fallback') {
		          (function () {
		            var makeFallbackCall = function makeFallbackCall(index) {
		              adapter = definition.getAdapterName((options.findAllFallbackAdapters || options.fallbackAdapters)[index]);
		              return _this.adapters[adapter].findAll(definition, params, options)['catch'](function (err) {
		                index++;
		                if (index < options.fallbackAdapters.length) {
		                  return makeFallbackCall(index);
		                } else {
		                  return DSUtils.Promise.reject(err);
		                }
		              });
		            };

		            promise = makeFallbackCall(0);
		          })();
		        } else {
		          adapter = definition.getAdapterName(options);
		          // just make a single attempt
		          promise = _this.adapters[adapter].findAll(definition, params, options);
		        }

		        resource.pendingQueries[queryHash] = promise.then(function (data) {
		          // Query is no longer pending
		          delete resource.pendingQueries[queryHash];
		          if (options.cacheResponse) {
		            // inject the items into the data store
		            resource.queryData[queryHash] = processResults.call(_this, data, resourceName, queryHash, options);
		            resource.queryData[queryHash].$$injected = true;
		            return resource.queryData[queryHash];
		          } else {
		            DSUtils.forEach(data, function (item, i) {
		              data[i] = definition.createInstance(item, options.orig());
		            });
		            return data;
		          }
		        });
		      }

		      return resource.pendingQueries[queryHash];
		    } else {
		      // resolve immediately with the items
		      return items;
		    }
		  }).then(function (items) {
		    return DSUtils.respond(items, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    if (resource) {
		      delete resource.pendingQueries[queryHash];
		    }
		    return DSUtils.Promise.reject(err);
		  });
		};

	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		/**
		 * Load the specified relations for the given instance.
		 *
		 * @param resourceName The name of the type of resource of the instance for which to load relations.
		 * @param instance The instance or the primary key of the instance.
		 * @param relations An array of the relations to load.
		 * @param options Optional configuration.
		 * @returns The instance, now with its relations loaded.
		 */
		module.exports = function loadRelations(resourceName, instance, relations, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.defs[resourceName];

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (DSUtils._sn(instance)) {
		      instance = definition.get(instance);
		    }

		    if (DSUtils._s(relations)) {
		      relations = [relations];
		    }

		    relations = relations || [];

		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else if (!DSUtils._o(instance)) {
		      reject(new DSErrors.IA('"instance(id)" must be a string, number or object!'));
		    } else if (!DSUtils._a(relations)) {
		      reject(new DSErrors.IA('"relations" must be a string or an array!'));
		    } else {
		      (function () {
		        var _options = DSUtils._(definition, options);
		        _options.logFn('loadRelations', instance, relations, _options);

		        var tasks = [];

		        DSUtils.forEach(definition.relationList, function (def) {
		          var relationName = def.relation;
		          var relationDef = definition.getResource(relationName);
		          var __options = DSUtils._(relationDef, options);

		          // relations can be loaded based on resource name or field name
		          if (!relations.length || DSUtils.contains(relations, relationName) || DSUtils.contains(relations, def.localField)) {
		            var task = undefined;
		            var params = {};
		            if (__options.allowSimpleWhere) {
		              params[def.foreignKey] = instance[definition.idAttribute];
		            } else {
		              params.where = {};
		              params.where[def.foreignKey] = {
		                '==': instance[definition.idAttribute]
		              };
		            }

		            if (def.type === 'hasMany') {
		              var orig = __options.orig();
		              if (def.localKeys) {
		                delete params[def.foreignKey];
		                var keys = DSUtils.get(instance, def.localKeys) || [];
		                keys = DSUtils._a(keys) ? keys : DSUtils.keys(keys);
		                params.where = _defineProperty({}, relationDef.idAttribute, {
		                  'in': keys
		                });
		                orig.localKeys = keys;
		              }
		              task = relationDef.findAll(params, orig);
		            } else if (def.type === 'hasOne') {
		              if (def.localKey && DSUtils.get(instance, def.localKey)) {
		                task = relationDef.find(DSUtils.get(instance, def.localKey), __options.orig());
		              } else if (def.foreignKey) {
		                task = relationDef.findAll(params, __options.orig()).then(function (hasOnes) {
		                  return hasOnes.length ? hasOnes[0] : null;
		                });
		              }
		            } else if (DSUtils.get(instance, def.localKey)) {
		              task = relationDef.find(DSUtils.get(instance, def.localKey), __options.orig());
		            }

		            if (task) {
		              tasks.push(task);
		            }
		          }
		        });

		        resolve(tasks);
		      })();
		    }
		  }).then(function (tasks) {
		    return DSUtils.Promise.all(tasks);
		  }).then(function () {
		    return instance;
		  });
		};

	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Find expired items of the specified resource type and perform the configured action.
		 *
		 * @param resourceName The name of the type of resource of the items to reap.
		 * @param options Optional configuration.
		 * @returns The reaped items.
		 */
		module.exports = function reap(resourceName, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];

		  return new DSUtils.Promise(function (resolve, reject) {

		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else {
		      options = DSUtils._(definition, options);
		      if (!options.hasOwnProperty('notify')) {
		        options.notify = false;
		      }
		      options.logFn('reap', options);
		      var items = [];
		      var now = new Date().getTime();
		      var expiredItem = undefined;

		      // find the expired items
		      while ((expiredItem = resource.expiresHeap.peek()) && expiredItem.expires < now) {
		        items.push(expiredItem.item);
		        delete expiredItem.item;
		        resource.expiresHeap.pop();
		      }
		      resolve(items);
		    }
		  }).then(function (items) {
		    // only hit lifecycle if there are items
		    if (items.length) {
		      definition.beforeReap(options, items);
		      if (options.notify) {
		        definition.emit('DS.beforeReap', definition, items);
		      }
		    }

		    if (options.reapAction === 'inject') {
		      (function () {
		        var timestamp = new Date().getTime();
		        DSUtils.forEach(items, function (item) {
		          resource.expiresHeap.push({
		            item: item,
		            timestamp: timestamp,
		            expires: definition.maxAge ? timestamp + definition.maxAge : Number.MAX_VALUE
		          });
		        });
		      })();
		    } else if (options.reapAction === 'eject') {
		      DSUtils.forEach(items, function (item) {
		        definition.eject(item[definition.idAttribute]);
		      });
		    } else if (options.reapAction === 'refresh') {
		      var _ret2 = (function () {
		        var tasks = [];
		        DSUtils.forEach(items, function (item) {
		          tasks.push(definition.refresh(item[definition.idAttribute]));
		        });
		        return {
		          v: DSUtils.Promise.all(tasks)
		        };
		      })();

		      if (typeof _ret2 === 'object') return _ret2.v;
		    }
		    return items;
		  }).then(function (items) {
		    // only hit lifecycle if there are items
		    if (items.length) {
		      definition.afterReap(options, items);
		      if (options.notify) {
		        definition.emit('DS.afterReap', definition, items);
		      }
		    }
		    return items;
		  });
		};

	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Save a single item in its present state.
		 *
		 * @param resourceName The name of the type of resource of the item.
		 * @param id The primary key of the item.
		 * @param options Optional congifuration.
		 * @returns The item, now saved.
		 */
		module.exports = function save(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var item = undefined,
		      noChanges = undefined,
		      adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    id = DSUtils.resolveId(definition, id);
		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else if (!definition.get(id)) {
		      reject(new DSErrors.R('id "' + id + '" not found in cache!'));
		    } else {
		      item = definition.get(id);
		      options = DSUtils._(definition, options);
		      options.logFn('save', id, options);
		      resolve(item);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeUpdate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeUpdate', definition, attrs);
		    }
		    // only send changed properties to the adapter
		    if (options.changesOnly) {

		      if (DSUtils.w) {
		        resource.observers[id].deliver();
		      }
		      var toKeep = [];
		      var changes = definition.changes(id);

		      for (var key in changes.added) {
		        toKeep.push(key);
		      }
		      for (key in changes.changed) {
		        toKeep.push(key);
		      }
		      changes = DSUtils.pick(attrs, toKeep);
		      // no changes? no save
		      if (DSUtils.isEmpty(changes)) {
		        // no changes, return
		        options.logFn('save - no changes', id, options);
		        noChanges = true;
		        return attrs;
		      } else {
		        attrs = changes;
		      }
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].update(definition, id, DSUtils.omit(attrs, options.omit), options);
		  }).then(function (data) {
		    return options.afterUpdate.call(data, options, data);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.afterUpdate', definition, attrs);
		    }
		    if (noChanges) {
		      // no changes, just return
		      return attrs;
		    } else if (options.cacheResponse) {
		      // inject the reponse into the store, updating the item
		      var injected = definition.inject(attrs, options.orig());
		      var _id = injected[definition.idAttribute];
		      // mark the item as "saved"
		      resource.saved[_id] = DSUtils.updateTimestamp(resource.saved[_id]);
		      if (!definition.resetHistoryOnInject) {
		        resource.previousAttributes[_id] = DSUtils.copy(injected, null, null, null, definition.relationFields);
		      }
		      return injected;
		    } else {
		      // just return an instance
		      return definition.createInstance(attrs, options.orig());
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  });
		};

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Update a single item using the supplied properties hash.
		 *
		 * @param resourceName The name of the type of resource of the item to update.
		 * @param id The primary key of the item to update.
		 * @param attrs The attributes with which to update the item.
		 * @param options Optional configuration.
		 * @returns The item, now updated.
		 */
		module.exports = function update(resourceName, id, attrs, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.defs[resourceName];
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    id = DSUtils.resolveId(definition, id);
		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('update', id, attrs, options);
		      resolve(attrs);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeUpdate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeUpdate', definition, attrs);
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].update(definition, id, DSUtils.omit(attrs, options.omit), options);
		  }).then(function (data) {
		    return options.afterUpdate.call(data, options, data);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.afterUpdate', definition, attrs);
		    }
		    if (options.cacheResponse) {
		      // inject the updated item into the store
		      var injected = definition.inject(attrs, options.orig());
		      var resource = _this.s[resourceName];
		      var _id = injected[definition.idAttribute];
		      // mark the item as "saved"
		      resource.saved[_id] = DSUtils.updateTimestamp(resource.saved[_id]);
		      if (!definition.resetHistoryOnInject) {
		        resource.previousAttributes[_id] = DSUtils.copy(injected, null, null, null, definition.relationFields);
		      }
		      return injected;
		    } else {
		      // just return an instance
		      return definition.createInstance(attrs, options.orig());
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  });
		};

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Update a collection of items using the supplied properties hash.
		 *
		 * @param resourceName The name of the type of resource of the items to update.
		 * @param attrs  The attributes with which to update the item.
		 * @param params The criteria by which to select items to update. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @returns The updated items.
		 */
		module.exports = function updateAll(resourceName, attrs, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.defs[resourceName];
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('updateAll', attrs, params, options);
		      resolve(attrs);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeUpdate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeUpdate', definition, attrs);
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].updateAll(definition, DSUtils.omit(attrs, options.omit), params, options);
		  }).then(function (data) {
		    return options.afterUpdate.call(data, options, data);
		  }).then(function (data) {
		    if (options.notify) {
		      definition.emit('DS.afterUpdate', definition, attrs);
		    }
		    var origOptions = options.orig();
		    if (options.cacheResponse) {
		      var _ret = (function () {
		        // inject the updated items into the store
		        var injected = definition.inject(data, origOptions);
		        var resource = _this.s[resourceName];
		        // mark the items as "saved"
		        DSUtils.forEach(injected, function (i) {
		          var id = i[definition.idAttribute];
		          resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		          if (!definition.resetHistoryOnInject) {
		            resource.previousAttributes[id] = DSUtils.copy(i, null, null, null, definition.relationFields);
		          }
		        });
		        return {
		          v: injected
		        };
		      })();

		      if (typeof _ret === 'object') return _ret.v;
		    } else {
		      var _ret2 = (function () {
		        // just return instances
		        var instances = [];
		        DSUtils.forEach(data, function (item) {
		          instances.push(definition.createInstance(item, origOptions));
		        });
		        return {
		          v: instances
		        };
		      })();

		      if (typeof _ret2 === 'object') return _ret2.v;
		    }
		  }).then(function (items) {
		    return DSUtils.respond(items, { adapter: adapter }, options);
		  });
		};

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Typecast a value to a String, using an empty string value for null or
		     * undefined.
		     */
		    function toString(val){
		        return val == null ? '' : val.toString();
		    }

		    module.exports = toString;




	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		var replaceAccents = __webpack_require__(44);
		var removeNonWord = __webpack_require__(45);
		var upperCase = __webpack_require__(20);
		var lowerCase = __webpack_require__(46);
		    /**
		    * Convert string to camelCase text.
		    */
		    function camelCase(str){
		        str = toString(str);
		        str = replaceAccents(str);
		        str = removeNonWord(str)
		            .replace(/[\-_]/g, ' ') //convert all hyphens and underscores to spaces
		            .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
		            .replace(/\s+/g, '') //remove spaces
		            .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
		        return str;
		    }
		    module.exports = camelCase;



	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		    /**
		    * Replaces all accented chars with regular ones
		    */
		    function replaceAccents(str){
		        str = toString(str);

		        // verifies if the String has accents and replace them
		        if (str.search(/[\xC0-\xFF]/g) > -1) {
		            str = str
		                    .replace(/[\xC0-\xC5]/g, "A")
		                    .replace(/[\xC6]/g, "AE")
		                    .replace(/[\xC7]/g, "C")
		                    .replace(/[\xC8-\xCB]/g, "E")
		                    .replace(/[\xCC-\xCF]/g, "I")
		                    .replace(/[\xD0]/g, "D")
		                    .replace(/[\xD1]/g, "N")
		                    .replace(/[\xD2-\xD6\xD8]/g, "O")
		                    .replace(/[\xD9-\xDC]/g, "U")
		                    .replace(/[\xDD]/g, "Y")
		                    .replace(/[\xDE]/g, "P")
		                    .replace(/[\xE0-\xE5]/g, "a")
		                    .replace(/[\xE6]/g, "ae")
		                    .replace(/[\xE7]/g, "c")
		                    .replace(/[\xE8-\xEB]/g, "e")
		                    .replace(/[\xEC-\xEF]/g, "i")
		                    .replace(/[\xF1]/g, "n")
		                    .replace(/[\xF2-\xF6\xF8]/g, "o")
		                    .replace(/[\xF9-\xFC]/g, "u")
		                    .replace(/[\xFE]/g, "p")
		                    .replace(/[\xFD\xFF]/g, "y");
		        }
		        return str;
		    }
		    module.exports = replaceAccents;



	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		    // This pattern is generated by the _build/pattern-removeNonWord.js script
		    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

		    /**
		     * Remove non-word chars.
		     */
		    function removeNonWord(str){
		        str = toString(str);
		        return str.replace(PATTERN, '');
		    }

		    module.exports = removeNonWord;



	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		    /**
		     * "Safer" String.toLowerCase()
		     */
		    function lowerCase(str){
		        str = toString(str);
		        return str.toLowerCase();
		    }

		    module.exports = lowerCase;



	/***/ }
	/******/ ])
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		var rethinkdb = __webpack_require__(1);
		var JSData = __webpack_require__(29);
		var DSUtils = JSData.DSUtils;
		var upperCase = DSUtils.upperCase;
		var contains = DSUtils.contains;
		var forOwn = DSUtils.forOwn;
		var isEmpty = DSUtils.isEmpty;
		var keys = DSUtils.keys;
		var deepMixIn = DSUtils.deepMixIn;
		var forEach = DSUtils.forEach;
		var isObject = DSUtils.isObject;
		var isArray = DSUtils.isArray;
		var isString = DSUtils.isString;
		var removeCircular = DSUtils.removeCircular;
		var omit = DSUtils.omit;

		var underscore = __webpack_require__(30);

		var Defaults = function Defaults() {
		  _classCallCheck(this, Defaults);
		};

		Defaults.prototype.host = 'localhost';
		Defaults.prototype.port = 28015;
		Defaults.prototype.authKey = '';
		Defaults.prototype.db = 'test';
		Defaults.prototype.min = 10;
		Defaults.prototype.max = 50;
		Defaults.prototype.bufferSize = 10;

		var reserved = ['orderBy', 'sort', 'limit', 'offset', 'skip', 'where'];

		var DSRethinkDBAdapter = (function () {
		  function DSRethinkDBAdapter(options) {
		    _classCallCheck(this, DSRethinkDBAdapter);

		    options = options || {};
		    this.defaults = new Defaults();
		    deepMixIn(this.defaults, options);
		    rethinkdb.configureTcpPolyfill(this.defaults);
		    this.r = rethinkdb.rethinkdbdash(this.defaults);
		    this.databases = {};
		    this.tables = {};
		    this.indices = {};
		  }

		  _createClass(DSRethinkDBAdapter, [{
		    key: 'selectTable',
		    value: function selectTable(resourceConfig, options) {
		      return this.r.db(options.db || this.defaults.db).table(resourceConfig.table || underscore(resourceConfig.name));
		    }
		  }, {
		    key: 'filterSequence',
		    value: function filterSequence(sequence, params) {
		      var r = this.r;
		      params = params || {};
		      params.where = params.where || {};
		      params.orderBy = params.orderBy || params.sort;
		      params.skip = params.skip || params.offset;

		      forEach(keys(params), function (k) {
		        var v = params[k];
		        if (!contains(reserved, k)) {
		          if (isObject(v)) {
		            params.where[k] = v;
		          } else {
		            params.where[k] = {
		              '==': v
		            };
		          }
		          delete params[k];
		        }
		      });

		      var query = sequence;

		      if (!isEmpty(params.where)) {
		        query = query.filter(function (row) {
		          var subQuery = undefined;
		          forOwn(params.where, function (criteria, field) {
		            if (!isObject(criteria)) {
		              params.where[field] = {
		                '==': criteria
		              };
		            }
		            forOwn(criteria, function (v, op) {
		              if (op === '==' || op === '===') {
		                subQuery = subQuery ? subQuery.and(row(field)['default'](null).eq(v)) : row(field)['default'](null).eq(v);
		              } else if (op === '!=' || op === '!==') {
		                subQuery = subQuery ? subQuery.and(row(field)['default'](null).ne(v)) : row(field)['default'](null).ne(v);
		              } else if (op === '>') {
		                subQuery = subQuery ? subQuery.and(row(field)['default'](null).gt(v)) : row(field)['default'](null).gt(v);
		              } else if (op === '>=') {
		                subQuery = subQuery ? subQuery.and(row(field)['default'](null).ge(v)) : row(field)['default'](null).ge(v);
		              } else if (op === '<') {
		                subQuery = subQuery ? subQuery.and(row(field)['default'](null).lt(v)) : row(field)['default'](null).lt(v);
		              } else if (op === '<=') {
		                subQuery = subQuery ? subQuery.and(row(field)['default'](null).le(v)) : row(field)['default'](null).le(v);
		              } else if (op === 'isectEmpty') {
		                subQuery = subQuery ? subQuery.and(row(field)['default']([]).setIntersection(r.expr(v)['default']([])).count().eq(0)) : row(field)['default']([]).setIntersection(r.expr(v)['default']([])).count().eq(0);
		              } else if (op === 'isectNotEmpty') {
		                subQuery = subQuery ? subQuery.and(row(field)['default']([]).setIntersection(r.expr(v)['default']([])).count().ne(0)) : row(field)['default']([]).setIntersection(r.expr(v)['default']([])).count().ne(0);
		              } else if (op === 'in') {
		                subQuery = subQuery ? subQuery.and(r.expr(v)['default'](r.expr([])).contains(row(field)['default'](null))) : r.expr(v)['default'](r.expr([])).contains(row(field)['default'](null));
		              } else if (op === 'notIn') {
		                subQuery = subQuery ? subQuery.and(r.expr(v)['default'](r.expr([])).contains(row(field)['default'](null)).not()) : r.expr(v)['default'](r.expr([])).contains(row(field)['default'](null)).not();
		              } else if (op === '|==' || op === '|===') {
		                subQuery = subQuery ? subQuery.or(row(field)['default'](null).eq(v)) : row(field)['default'](null).eq(v);
		              } else if (op === '|!=' || op === '|!==') {
		                subQuery = subQuery ? subQuery.or(row(field)['default'](null).ne(v)) : row(field)['default'](null).ne(v);
		              } else if (op === '|>') {
		                subQuery = subQuery ? subQuery.or(row(field)['default'](null).gt(v)) : row(field)['default'](null).gt(v);
		              } else if (op === '|>=') {
		                subQuery = subQuery ? subQuery.or(row(field)['default'](null).ge(v)) : row(field)['default'](null).ge(v);
		              } else if (op === '|<') {
		                subQuery = subQuery ? subQuery.or(row(field)['default'](null).lt(v)) : row(field)['default'](null).lt(v);
		              } else if (op === '|<=') {
		                subQuery = subQuery ? subQuery.or(row(field)['default'](null).le(v)) : row(field)['default'](null).le(v);
		              } else if (op === '|isectEmpty') {
		                subQuery = subQuery ? subQuery.or(row(field)['default']([]).setIntersection(r.expr(v)['default']([])).count().eq(0)) : row(field)['default']([]).setIntersection(r.expr(v)['default']([])).count().eq(0);
		              } else if (op === '|isectNotEmpty') {
		                subQuery = subQuery ? subQuery.or(row(field)['default']([]).setIntersection(r.expr(v)['default']([])).count().ne(0)) : row(field)['default']([]).setIntersection(r.expr(v)['default']([])).count().ne(0);
		              } else if (op === '|in') {
		                subQuery = subQuery ? subQuery.or(r.expr(v)['default'](r.expr([])).contains(row(field)['default'](null))) : r.expr(v)['default'](r.expr([])).contains(row(field)['default'](null));
		              } else if (op === '|notIn') {
		                subQuery = subQuery ? subQuery.or(r.expr(v)['default'](r.expr([])).contains(row(field)['default'](null)).not()) : r.expr(v)['default'](r.expr([])).contains(row(field)['default'](null)).not();
		              }
		            });
		          });
		          return subQuery;
		        });
		      }

		      if (params.orderBy) {
		        if (isString(params.orderBy)) {
		          params.orderBy = [[params.orderBy, 'asc']];
		        }
		        for (var i = 0; i < params.orderBy.length; i++) {
		          if (isString(params.orderBy[i])) {
		            params.orderBy[i] = [params.orderBy[i], 'asc'];
		          }
		          query = upperCase(params.orderBy[i][1]) === 'DESC' ? query.orderBy(r.desc(params.orderBy[i][0])) : query.orderBy(params.orderBy[i][0]);
		        }
		      }

		      if (params.skip) {
		        query = query.skip(params.skip);
		      }

		      if (params.limit) {
		        query = query.limit(params.limit);
		      }

		      return query;
		    }
		  }, {
		    key: 'waitForDb',
		    value: function waitForDb(options) {
		      options = options || {};
		      var db = options.db || this.defaults.db;
		      if (!this.databases[db]) {
		        this.databases[db] = this.r.branch(this.r.dbList().contains(db), true, this.r.dbCreate(db)).run();
		      }
		      return this.databases[db];
		    }
		  }, {
		    key: 'waitForTable',
		    value: function waitForTable(table, options) {
		      var _this = this;

		      options = options || {};
		      var db = options.db || this.defaults.db;
		      return this.waitForDb(options).then(function () {
		        _this.tables[db] = _this.tables[db] || {};
		        if (!_this.tables[db][table]) {
		          _this.tables[db][table] = _this.r.branch(_this.r.db(db).tableList().contains(table), true, _this.r.db(db).tableCreate(table)).run();
		        }
		        return _this.tables[db][table];
		      });
		    }
		  }, {
		    key: 'waitForIndex',
		    value: function waitForIndex(table, index, options) {
		      var _this2 = this;

		      options = options || {};
		      var db = options.db || this.defaults.db;
		      return this.waitForDb(options).then(function () {
		        return _this2.waitForTable(table, options);
		      }).then(function () {
		        _this2.indices[db] = _this2.indices[db] || {};
		        _this2.indices[db][table] = _this2.indices[db][table] || {};
		        if (!_this2.tables[db][table][index]) {
		          _this2.tables[db][table][index] = _this2.r.branch(_this2.r.db(db).table(table).indexList().contains(index), true, _this2.r.db(db).table(table).indexCreate(index)).run().then(function () {
		            return _this2.r.db(db).table(table).indexWait(index).run();
		          });
		        }
		        return _this2.tables[db][table][index];
		      });
		    }
		  }, {
		    key: 'find',
		    value: function find(resourceConfig, id, options) {
		      var _this3 = this;

		      var newModels = {};
		      var models = {};
		      var merge = {};
		      options = options || {};
		      var table = resourceConfig.table || underscore(resourceConfig.name);
		      var tasks = [this.waitForTable(table, options)];
		      forEach(resourceConfig.relationList, function (def) {
		        var relationName = def.relation;
		        var relationDef = resourceConfig.getResource(relationName);
		        if (!relationDef) {
		          throw new JSData.DSErrors.NER(relationName);
		        } else if (!options['with'] || !contains(options['with'], relationName)) {
		          return;
		        }
		        if (def.foreignKey) {
		          tasks.push(_this3.waitForIndex(relationDef.table || underscore(relationDef.name), def.foreignKey, options));
		        } else if (def.localKey) {
		          tasks.push(_this3.waitForIndex(resourceConfig.table || underscore(resourceConfig.name), def.localKey, options));
		        }
		      });
		      return DSUtils.Promise.all(tasks).then(function () {
		        return _this3.r['do'](_this3.r.table(table).get(id), function (doc) {
		          forEach(resourceConfig.relationList, function (def) {
		            var relationName = def.relation;
		            models[relationName] = resourceConfig.getResource(relationName);
		            if (!options['with'] || !contains(options['with'], relationName)) {
		              return;
		            }
		            if (!models[relationName]) {
		              throw new JSData.DSErrors.NER(relationName);
		            }
		            var localKey = def.localKey;
		            var localField = def.localField;
		            var foreignKey = def.foreignKey;
		            if (def.type === 'belongsTo') {
		              merge[localField] = _this3.r.table(models[relationName].table || underscore(models[relationName].name)).get(doc(localKey)['default'](''));
		              newModels[localField] = {
		                modelName: relationName,
		                relation: 'belongsTo'
		              };
		            } else if (def.type === 'hasMany') {
		              merge[localField] = _this3.r.table(models[relationName].table || underscore(models[relationName].name)).getAll(id, { index: foreignKey }).coerceTo('ARRAY');

		              newModels[localField] = {
		                modelName: relationName,
		                relation: 'hasMany'
		              };
		            } else if (def.type === 'hasOne') {
		              merge[localField] = _this3.r.table(models[relationName].table || underscore(models[relationName].name));

		              if (localKey) {
		                merge[localField] = merge[localField].get(localKey);
		              } else {
		                merge[localField] = merge[localField].getAll(id, { index: foreignKey }).coerceTo('ARRAY');
		              }

		              newModels[localField] = {
		                modelName: relationName,
		                relation: 'hasOne'
		              };
		            }
		          });

		          if (!isEmpty(merge)) {
		            return doc.merge(merge);
		          }
		          return doc;
		        }).run();
		      }).then(function (item) {
		        if (!item) {
		          return DSUtils.Promise.reject(new Error('Not Found!'));
		        } else {
		          forOwn(item, function (localValue, localKey) {
		            if (localKey in newModels) {
		              if (isObject(localValue)) {
		                item[localKey] = item[localKey];
		              } else if (isArray(localValue)) {
		                if (newModels[localKey].relation === 'hasOne' && localValue.length) {
		                  item[localKey] = localValue[0];
		                } else {
		                  item[localKey] = localValue;
		                }
		              }
		            }
		          });
		          return item;
		        }
		      });
		    }
		  }, {
		    key: 'findAll',
		    value: function findAll(resourceConfig, params, options) {
		      var _this4 = this;

		      options = options || {};
		      var table = resourceConfig.table || underscore(resourceConfig.name);
		      var tasks = [this.waitForTable(table, options)];
		      var models = {};
		      var merge = {};
		      var newModels = {};
		      forEach(resourceConfig.relationList, function (def) {
		        var relationName = def.relation;
		        var relationDef = resourceConfig.getResource(relationName);
		        if (!relationDef) {
		          throw new JSData.DSErrors.NER(relationName);
		        } else if (!options['with'] || !contains(options['with'], relationName)) {
		          return;
		        }
		        if (def.foreignKey) {
		          tasks.push(_this4.waitForIndex(relationDef.table || underscore(relationDef.name), def.foreignKey, options));
		        } else if (def.localKey) {
		          tasks.push(_this4.waitForIndex(resourceConfig.table || underscore(resourceConfig.name), def.localKey, options));
		        }
		      });
		      return DSUtils.Promise.all(tasks).then(function () {
		        var query = _this4.filterSequence(_this4.selectTable(resourceConfig, options), params);
		        if (options['with'] && options['with'].length) {
		          query = query.map(function (doc) {
		            var id = doc(resourceConfig.idAttribute);
		            forEach(resourceConfig.relationList, function (def) {
		              var relationName = def.relation;
		              models[relationName] = resourceConfig.getResource(relationName);
		              if (!options['with'] || !contains(options['with'], relationName)) {
		                return;
		              }
		              if (!models[relationName]) {
		                throw new JSData.DSErrors.NER(relationName);
		              }
		              var localKey = def.localKey;
		              var localField = def.localField;
		              var foreignKey = def.foreignKey;
		              if (def.type === 'belongsTo') {
		                merge[localField] = _this4.r.table(models[relationName].table || underscore(models[relationName].name)).get(doc(localKey)['default'](''));
		                newModels[localField] = {
		                  modelName: relationName,
		                  relation: 'belongsTo'
		                };
		              } else if (def.type === 'hasMany') {
		                merge[localField] = _this4.r.table(models[relationName].table || underscore(models[relationName].name)).getAll(id, { index: foreignKey }).coerceTo('ARRAY');

		                newModels[localField] = {
		                  modelName: relationName,
		                  relation: 'hasMany'
		                };
		              } else if (def.type === 'hasOne') {
		                merge[localField] = _this4.r.table(models[relationName].table || underscore(models[relationName].name));

		                if (localKey) {
		                  merge[localField] = merge[localField].get(localKey);
		                } else {
		                  merge[localField] = merge[localField].getAll(id, { index: foreignKey }).coerceTo('ARRAY');
		                }

		                newModels[localField] = {
		                  modelName: relationName,
		                  relation: 'hasOne'
		                };
		              }
		            });

		            if (!isEmpty(merge)) {
		              return doc.merge(merge);
		            }
		            return doc;
		          });
		        }
		        return query.run();
		      });
		    }
		  }, {
		    key: 'create',
		    value: function create(resourceConfig, attrs, options) {
		      var _this5 = this;

		      attrs = removeCircular(omit(attrs, resourceConfig.relationFields || []));
		      options = options || {};
		      return this.waitForTable(resourceConfig.table || underscore(resourceConfig.name), options).then(function () {
		        return _this5.r.db(options.db || _this5.defaults.db).table(resourceConfig.table || underscore(resourceConfig.name)).insert(attrs, { returnChanges: true }).run();
		      }).then(function (cursor) {
		        return cursor.changes[0].new_val;
		      });
		    }
		  }, {
		    key: 'update',
		    value: function update(resourceConfig, id, attrs, options) {
		      var _this6 = this;

		      attrs = removeCircular(omit(attrs, resourceConfig.relationFields || []));
		      options = options || {};
		      return this.waitForTable(resourceConfig.table || underscore(resourceConfig.name), options).then(function () {
		        return _this6.r.db(options.db || _this6.defaults.db).table(resourceConfig.table || underscore(resourceConfig.name)).get(id).update(attrs, { returnChanges: true }).run();
		      }).then(function (cursor) {
		        if (cursor.changes && cursor.changes.length && cursor.changes[0].new_val) {
		          return cursor.changes[0].new_val;
		        } else {
		          return _this6.selectTable(resourceConfig, options).get(id).run();
		        }
		      });
		    }
		  }, {
		    key: 'updateAll',
		    value: function updateAll(resourceConfig, attrs, params, options) {
		      var _this7 = this;

		      attrs = removeCircular(omit(attrs, resourceConfig.relationFields || []));
		      options = options || {};
		      params = params || {};
		      return this.waitForTable(resourceConfig.table || underscore(resourceConfig.name), options).then(function () {
		        return _this7.filterSequence(_this7.selectTable(resourceConfig, options), params).update(attrs, { returnChanges: true }).run();
		      }).then(function (cursor) {
		        if (cursor && cursor.changes && cursor.changes.length) {
		          var _ret = (function () {
		            var items = [];
		            cursor.changes.forEach(function (change) {
		              return items.push(change.new_val);
		            });
		            return {
		              v: items
		            };
		          })();

		          if (typeof _ret === 'object') return _ret.v;
		        } else {
		          return _this7.filterSequence(_this7.selectTable(resourceConfig, options), params).run();
		        }
		      });
		    }
		  }, {
		    key: 'destroy',
		    value: function destroy(resourceConfig, id, options) {
		      var _this8 = this;

		      options = options || {};
		      return this.waitForTable(resourceConfig.table || underscore(resourceConfig.name), options).then(function () {
		        return _this8.r.db(options.db || _this8.defaults.db).table(resourceConfig.table || underscore(resourceConfig.name)).get(id)['delete']().run();
		      }).then(function () {
		        return undefined;
		      });
		    }
		  }, {
		    key: 'destroyAll',
		    value: function destroyAll(resourceConfig, params, options) {
		      var _this9 = this;

		      options = options || {};
		      params = params || {};
		      return this.waitForTable(resourceConfig.table || underscore(resourceConfig.name), options).then(function () {
		        return _this9.filterSequence(_this9.selectTable(resourceConfig, options), params)['delete']().run();
		      }).then(function () {
		        return undefined;
		      });
		    }
		  }]);

		  return DSRethinkDBAdapter;
		})();

		module.exports = DSRethinkDBAdapter;

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process, global, setImmediate, Buffer) {(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(8), __webpack_require__(9), __webpack_require__(12));
			else if(typeof define === 'function' && define.amd)
				define(["events", "util", "stream"], factory);
			else if(typeof exports === 'object')
				exports["RethinkdbWebsocketClient"] = factory(require("events"), require("util"), require("stream"));
			else
				root["RethinkdbWebsocketClient"] = factory(root["events"], root["util"], root["stream"]);
		})(this, function(__WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_54__) {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};

		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {

		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};

		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;

		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {

			module.exports = __webpack_require__(1);


		/***/ },
		/* 1 */
		/***/ function(module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, '__esModule', {
			  value: true
			});

			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

			var _rethinkdbdash = __webpack_require__(2);

			var _rethinkdbdash2 = _interopRequireDefault(_rethinkdbdash);

			var _TcpPolyfill = __webpack_require__(43);

			exports.configureTcpPolyfill = _TcpPolyfill.configureTcpPolyfill;
			exports.rethinkdbdash = _rethinkdbdash2['default'];

		/***/ },
		/* 2 */
		/***/ function(module, exports, __webpack_require__) {

			var Promise = __webpack_require__(3);

			var helper = __webpack_require__(41);
			var Connection = __webpack_require__(48);
			var Term = __webpack_require__(56);
			var Error = __webpack_require__(49);
			var PoolMaster = __webpack_require__(59);
			var termTypes = __webpack_require__(42).Term.TermType;

			function r(options) {
			  var self = this;
			  var _r = function(x) {
			    return new Term(_r).expr(x);
			  }
			  helper.changeProto(_r, self);

			  Term.prototype._setNestingLevel(r.prototype.nestingLevel);
			  Term.prototype._setArrayLimit(r.prototype.arrayLimit);

			  _r.row = new Term(_r).row();

			  _r.monday = new Term(_r).monday();
			  _r.tuesday = new Term(_r).tuesday();
			  _r.wednesday = new Term(_r).wednesday();
			  _r.thursday = new Term(_r).thursday();
			  _r.friday = new Term(_r).friday();
			  _r.saturday = new Term(_r).saturday();
			  _r.sunday =  new Term(_r).sunday();

			  _r.january = new Term(_r).january();
			  _r.february = new Term(_r).february();
			  _r.march = new Term(_r).march();
			  _r.april = new Term(_r).april();
			  _r.may = new Term(_r).may();
			  _r.june = new Term(_r).june();
			  _r.july = new Term(_r).july();
			  _r.august = new Term(_r).august();
			  _r.september = new Term(_r).september();
			  _r.october = new Term(_r).october();
			  _r.november = new Term(_r).november();
			  _r.december = new Term(_r).december();
			  _r.minval = new Term(_r).minval();
			  _r.maxval = new Term(_r).maxval();

			  _r.nextVarId = 1;
			  _r._Term = Term;
			  return _r;
			};
			r.prototype._host = 'localhost';
			r.prototype._port = 28015;
			r.prototype._authKey = '';
			r.prototype._timeoutConnect = 20;

			r.prototype._nestingLevel = 100;
			r.prototype._arrayLimit = 100000;
			r.prototype._db = 'test';
			r.prototype._useOutdated = false;
			r.prototype._timeFormat = 'native';
			r.prototype._profile = false;


			r.prototype.setNestingLevel = function(nestingLevel) {
			  if (typeof nestingLevel !== 'number') throw new Error.ReqlDriverError('The first argument of `setNestingLevel` must be a number.')
			  this.nestingLevel = nestingLevel;
			}
			r.prototype.setArrayLimit = function(arrayLimit) {
			  if (typeof arrayLimit !== 'number') throw new Error.ReqlDriverError('The first argument of `setArrayLimit` must be a number.')
			  this.arrayLimit = arrayLimit;
			}

			r.prototype.connect = function(options, callback) {
			  if (typeof options === 'function') {
			    callback = options;
			    options = {};
			  }
			  var self = this;

			  var p = new Promise(function(resolve, reject) {
			    new Connection(self, options, resolve, reject);
			  }).nodeify(callback);
			  return p;
			};

			r.prototype.createPools = function(options) {
			  this._poolMaster = new PoolMaster(this, options);
			  return this;
			}

			r.prototype.getPoolMaster = function() {
			  return this._poolMaster;
			}
			r.prototype.getPool = function(i) {
			  if (i === undefined) {
			    if (this.getPoolMaster().getPools().length === 1) {
			      return this.getPoolMaster().getPools()[0];
			    }
			    else {
			      throw new Error('You have multiple pools. Use `getPool(index)` or `getPools()`');
			    }
			  }
			  else {
			    return this.getPoolMaster().getPools()[i];
			  }
			}

			r.prototype.expr = function(expression, nestingLevel) {
			  if (Term.prototype._fastArityRange(arguments.length, 1, 2) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arityRange(_args, 1, 2, 'expr', this);
			  }
			  var _nestingLevel = nestingLevel || this.nestingLevel;
			  return new Term(this).expr(expression, _nestingLevel);
			};
			r.prototype.db = function(db) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.db', this);
			  }
			  return new Term(this).db(db);
			};
			r.prototype.table = function(table, options) {
			  if (Term.prototype._fastArityRange(arguments.length, 1, 2) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arityRange(_args, 1, 2, 'table', this);
			  }
			  return new Term(this).table(table, options);
			};
			r.prototype.js = function(jsString) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.js', this);
			  }
			  return new Term(this).js(jsString);
			};
			r.prototype.tableCreate = function(table, options) {
			  if (Term.prototype._fastArityRange(arguments.length, 1, 2) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arityRange(_args, 1, 2, 'r.tableCreate', this);
			  }
			  return new Term(this).tableCreate(table, options);
			};
			r.prototype.tableDrop = function(db) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.tableDrop', this);
			  }
			  return new Term(this).tableDrop(db);
			};
			r.prototype.tableList = function() {
			  if (Term.prototype._fastArity(arguments.length, 0) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 0, 'r.tableList', this);
			  }
			  return new Term(this).tableList();
			};
			r.prototype.dbCreate = function(db) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'dbCreate', this);
			  }
			  return new Term(this).dbCreate(db);
			};
			r.prototype.dbDrop = function(db) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'dbDrop', this);
			  }
			  return new Term(this).dbDrop(db);
			};
			r.prototype.dbList = function() {
			  if (Term.prototype._fastArity(arguments.length, 0) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 0, 'dbList', this);
			  }
			  return new Term(this).dbList();
			};
			r.prototype.literal = function(obj) {
			  if (Term.prototype._fastArityRange(arguments.length, 0, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arityRange(_args, 1, 2, 'r.literal', this);
			  }
			  if (obj === undefined) {
			    return new Term(this).literal();
			  }
			  else {
			    return new Term(this).literal(obj);
			  }
			};
			r.prototype.desc = function(field) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.desc', this);
			  }
			  return new Term(this).desc(field);
			};
			r.prototype.asc = function(field) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.asc', this);
			  }
			  return new Term(this).asc(field);
			};
			r.prototype.add = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.add', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.add.apply(term, _args.slice(1));
			};
			r.prototype.sub = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.sub', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.sub.apply(term, _args.slice(1));
			};
			r.prototype.div = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.div', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.div.apply(term, _args.slice(1));
			};
			r.prototype.mul = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.mul', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.mul.apply(term, _args.slice(1));
			};
			r.prototype.mod = function(a, b) {
			  if (Term.prototype._fastArity(arguments.length, 2) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 2, 'r.mod', this);
			  }

			  return new Term(this).expr(a).mod(b);
			};
			r.prototype.and = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.and', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.and.apply(term, _args.slice(1));
			};
			r.prototype.or = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.or', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.or.apply(term, _args.slice(1));
			};
			r.prototype.eq = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.eq', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.eq.apply(term, _args.slice(1));
			};
			r.prototype.ne = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.ne', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.ne.apply(term, _args.slice(1));
			};
			r.prototype.gt = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.gt', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.gt.apply(term, _args.slice(1));
			};
			r.prototype.ge = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.ge', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.ge.apply(term, _args.slice(1));
			};
			r.prototype.lt = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.lt', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.lt.apply(term, _args.slice(1));
			};
			r.prototype.le = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.le', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.le.apply(term, _args.slice(1));
			};
			r.prototype.not = function(bool) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.not', this);
			  }
			  return new Term(this).expr(bool).not();
			}


			r.prototype.now = function() {
			  if (Term.prototype._fastArity(arguments.length, 0) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 0, 'now', this);
			  }
			  return new Term(this).now();
			}
			r.prototype.time = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  var term = new Term(this);
			  return term.time.apply(term, _args);
			}
			r.prototype.epochTime = function(epochTime) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.epochTime', this);
			  }
			  return new Term(this).epochTime(epochTime);
			}
			r.prototype.ISO8601 = function(isoTime, options) {
			  if (Term.prototype._fastArityRange(arguments.length, 1, 2) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arityRange(_args, 1, 2, 'r.ISO8601', this);
			  }
			  return new Term(this).ISO8601(isoTime, options);
			}
			r.prototype.branch = function(predicate, trueBranch, falseBranch) {
			  if (Term.prototype._fastArity(arguments.length, 3) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 3, 'r.branch', this);
			  }
			  return new Term(this).branch(predicate, trueBranch, falseBranch);
			}
			r.prototype.error = function(errorStr) {
			  if (Term.prototype._fastArityRange(arguments.length, 0, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arityRange(_args, 0, 1, 'r.error', this);
			  }
			  var term = new Term(this);
			  term._query.push(termTypes.ERROR);
			  if (errorStr !== undefined) {
			    term._query.push([new Term(this).expr(errorStr)._query]);
			  }
			  return term;

			}
			r.prototype.json = function(json) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.json', this);
			  }
			  return new Term(this).json(json);
			}

			r.prototype.object = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  var term = new Term(this);
			  return term.object.apply(term, _args);
			}
			r.prototype.args = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  var term = new Term(this);
			  return term.args.apply(term, _args);
			}
			r.prototype.random = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  var term = new Term(this);
			  return term.random.apply(term, _args);
			}
			r.prototype.http = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  var term = new Term(this);
			  return term.http.apply(term, _args);
			}
			r.prototype.do = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.do', this);

			  var term = new Term(this).expr(_args[0]);
			  return term.do.apply(term, _args.slice(1));
			}
			r.prototype.binary = function(bin) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.binary', this);
			  }
			  var term = new Term(this);
			  return term.binary(bin);
			}
			r.prototype.uuid = function() {
			  if (Term.prototype._fastArity(arguments.length, 0) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 0, 'uuid', this);
			  }
			  return new Term(this).uuid();
			}

			r.prototype.line = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 2, Infinity, 'r.line', this);

			  var term = new Term(this);
			  return term.line.apply(term, _args);
			}
			r.prototype.point = function(longitude, latitude) {
			  if (Term.prototype._fastArity(arguments.length, 2) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 2, 'r.point', this);
			  }
			  return new Term(this).point(longitude, latitude);
			}
			r.prototype.polygon = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 3, Infinity, 'r.polygon', this);

			  var term = new Term(this);
			  return term.polygon.apply(term, _args);
			}
			r.prototype.circle = function(center, radius, options) {
			  if (Term.prototype._fastArityRange(arguments.length, 2, 3) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arityRange(_args, 2, 3, 'r.circle', this);
			  }
			  var term = new Term(this);
			  if (options !== undefined) {
			    return term.circle(center, radius, options);
			  }
			  else {
			    return term.circle(center, radius);
			  }
			}
			r.prototype.geojson = function(value) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.geojson', this);
			  }
			  var term = new Term(this);
			  return term.geojson(value);
			}
			r.prototype.range = function(start, end) {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 1, 2, 'r.range', this);

			  var term = new Term(this);
			  if (end !== undefined) {
			    return term.range(start, end);
			  }
			  else {
			    return term.range(start);
			  }
			}
			r.prototype.wait = function() {
			  if (Term.prototype._fastArity(arguments.length, 0) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 0, 'r.wait', this);
			  }
			  var term = new Term(this);
			  return term.wait();
			}
			r.prototype.reconfigure = function(config) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.reconfigure', this);
			  }
			  var term = new Term(this);
			  return term.reconfigure(config);
			}
			r.prototype.rebalance = function(config) {
			  if (Term.prototype._fastArity(arguments.length, 0) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 0, 'r.rebalance', this);
			  }
			  var term = new Term(this);
			  return term.rebalance();
			}
			r.prototype.map = function() {
			  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			  Term.prototype._arityRange(_args, 1, Infinity, 'r.map', this);

			  var term = new Term(this);
			  return term.map.apply(term, _args);
			};
			r.prototype.typeOf = function(value) {
			  if (Term.prototype._fastArity(arguments.length, 1) === false) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    Term.prototype._arity(_args, 1, 'r.typeOf', this);
			  }
			  var term = new Term(this);
			  return term.expr(value).typeOf();
			}


			r.prototype.Error = Error;


			function main(options) {
			  var _r = new r();

			  if (!helper.isPlainObject(options)) options = {};
			  if (options.pool !== false) _r.createPools(options);
			  _r._options = {};
			  if (options.cursor === true) _r._options.cursor = true;
			  if (options.stream === true) _r._options.stream = true;
			  return _r;
			}
			module.exports = main;


		/***/ },
		/* 3 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			var old;
			if (typeof Promise !== "undefined") old = Promise;
			function noConflict() {
			    try { if (Promise === bluebird) Promise = old; }
			    catch (e) {}
			    return bluebird;
			}
			var bluebird = __webpack_require__(4)();
			bluebird.noConflict = noConflict;
			module.exports = bluebird;


		/***/ },
		/* 4 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function() {
			var makeSelfResolutionError = function () {
			    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/LhFpo0\u000a");
			};
			var reflect = function() {
			    return new Promise.PromiseInspection(this._target());
			};
			var apiRejection = function(msg) {
			    return Promise.reject(new TypeError(msg));
			};

			var util = __webpack_require__(5);

			var getDomain;
			if (util.isNode) {
			    getDomain = function() {
			        var ret = process.domain;
			        if (ret === undefined) ret = null;
			        return ret;
			    };
			} else {
			    getDomain = function() {
			        return null;
			    };
			}
			util.notEnumerableProp(Promise, "_getDomain", getDomain);

			var async = __webpack_require__(7);
			var errors = __webpack_require__(10);
			var TypeError = Promise.TypeError = errors.TypeError;
			Promise.RangeError = errors.RangeError;
			Promise.CancellationError = errors.CancellationError;
			Promise.TimeoutError = errors.TimeoutError;
			Promise.OperationalError = errors.OperationalError;
			Promise.RejectionError = errors.OperationalError;
			Promise.AggregateError = errors.AggregateError;
			var INTERNAL = function(){};
			var APPLY = {};
			var NEXT_FILTER = {e: null};
			var tryConvertToPromise = __webpack_require__(11)(Promise, INTERNAL);
			var PromiseArray =
			    __webpack_require__(12)(Promise, INTERNAL,
			                                    tryConvertToPromise, apiRejection);
			var CapturedTrace = __webpack_require__(13)();
			var isDebugging = __webpack_require__(14)(Promise, CapturedTrace);
			 /*jshint unused:false*/
			var createContext =
			    __webpack_require__(15)(Promise, CapturedTrace, isDebugging);
			var CatchFilter = __webpack_require__(16)(NEXT_FILTER);
			var PromiseResolver = __webpack_require__(17);
			var nodebackForPromise = PromiseResolver._nodebackForPromise;
			var errorObj = util.errorObj;
			var tryCatch = util.tryCatch;
			function Promise(resolver) {
			    if (typeof resolver !== "function") {
			        throw new TypeError("the promise constructor requires a resolver function\u000a\u000a    See http://goo.gl/EC22Yn\u000a");
			    }
			    if (this.constructor !== Promise) {
			        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/KsIlge\u000a");
			    }
			    this._bitField = 0;
			    this._fulfillmentHandler0 = undefined;
			    this._rejectionHandler0 = undefined;
			    this._progressHandler0 = undefined;
			    this._promise0 = undefined;
			    this._receiver0 = undefined;
			    this._settledValue = undefined;
			    if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
			}

			Promise.prototype.toString = function () {
			    return "[object Promise]";
			};

			Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
			    var len = arguments.length;
			    if (len > 1) {
			        var catchInstances = new Array(len - 1),
			            j = 0, i;
			        for (i = 0; i < len - 1; ++i) {
			            var item = arguments[i];
			            if (typeof item === "function") {
			                catchInstances[j++] = item;
			            } else {
			                return Promise.reject(
			                    new TypeError("Catch filter must inherit from Error or be a simple predicate function\u000a\u000a    See http://goo.gl/o84o68\u000a"));
			            }
			        }
			        catchInstances.length = j;
			        fn = arguments[i];
			        var catchFilter = new CatchFilter(catchInstances, fn, this);
			        return this._then(undefined, catchFilter.doFilter, undefined,
			            catchFilter, undefined);
			    }
			    return this._then(undefined, fn, undefined, undefined, undefined);
			};

			Promise.prototype.reflect = function () {
			    return this._then(reflect, reflect, undefined, this, undefined);
			};

			Promise.prototype.then = function (didFulfill, didReject, didProgress) {
			    if (isDebugging() && arguments.length > 0 &&
			        typeof didFulfill !== "function" &&
			        typeof didReject !== "function") {
			        var msg = ".then() only accepts functions but was passed: " +
			                util.classString(didFulfill);
			        if (arguments.length > 1) {
			            msg += ", " + util.classString(didReject);
			        }
			        this._warn(msg);
			    }
			    return this._then(didFulfill, didReject, didProgress,
			        undefined, undefined);
			};

			Promise.prototype.done = function (didFulfill, didReject, didProgress) {
			    var promise = this._then(didFulfill, didReject, didProgress,
			        undefined, undefined);
			    promise._setIsFinal();
			};

			Promise.prototype.spread = function (didFulfill, didReject) {
			    return this.all()._then(didFulfill, didReject, undefined, APPLY, undefined);
			};

			Promise.prototype.isCancellable = function () {
			    return !this.isResolved() &&
			        this._cancellable();
			};

			Promise.prototype.toJSON = function () {
			    var ret = {
			        isFulfilled: false,
			        isRejected: false,
			        fulfillmentValue: undefined,
			        rejectionReason: undefined
			    };
			    if (this.isFulfilled()) {
			        ret.fulfillmentValue = this.value();
			        ret.isFulfilled = true;
			    } else if (this.isRejected()) {
			        ret.rejectionReason = this.reason();
			        ret.isRejected = true;
			    }
			    return ret;
			};

			Promise.prototype.all = function () {
			    return new PromiseArray(this).promise();
			};

			Promise.prototype.error = function (fn) {
			    return this.caught(util.originatesFromRejection, fn);
			};

			Promise.is = function (val) {
			    return val instanceof Promise;
			};

			Promise.fromNode = function(fn) {
			    var ret = new Promise(INTERNAL);
			    var result = tryCatch(fn)(nodebackForPromise(ret));
			    if (result === errorObj) {
			        ret._rejectCallback(result.e, true, true);
			    }
			    return ret;
			};

			Promise.all = function (promises) {
			    return new PromiseArray(promises).promise();
			};

			Promise.defer = Promise.pending = function () {
			    var promise = new Promise(INTERNAL);
			    return new PromiseResolver(promise);
			};

			Promise.cast = function (obj) {
			    var ret = tryConvertToPromise(obj);
			    if (!(ret instanceof Promise)) {
			        var val = ret;
			        ret = new Promise(INTERNAL);
			        ret._fulfillUnchecked(val);
			    }
			    return ret;
			};

			Promise.resolve = Promise.fulfilled = Promise.cast;

			Promise.reject = Promise.rejected = function (reason) {
			    var ret = new Promise(INTERNAL);
			    ret._captureStackTrace();
			    ret._rejectCallback(reason, true);
			    return ret;
			};

			Promise.setScheduler = function(fn) {
			    if (typeof fn !== "function") throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
			    var prev = async._schedule;
			    async._schedule = fn;
			    return prev;
			};

			Promise.prototype._then = function (
			    didFulfill,
			    didReject,
			    didProgress,
			    receiver,
			    internalData
			) {
			    var haveInternalData = internalData !== undefined;
			    var ret = haveInternalData ? internalData : new Promise(INTERNAL);

			    if (!haveInternalData) {
			        ret._propagateFrom(this, 4 | 1);
			        ret._captureStackTrace();
			    }

			    var target = this._target();
			    if (target !== this) {
			        if (receiver === undefined) receiver = this._boundTo;
			        if (!haveInternalData) ret._setIsMigrated();
			    }

			    var callbackIndex = target._addCallbacks(didFulfill,
			                                             didReject,
			                                             didProgress,
			                                             ret,
			                                             receiver,
			                                             getDomain());

			    if (target._isResolved() && !target._isSettlePromisesQueued()) {
			        async.invoke(
			            target._settlePromiseAtPostResolution, target, callbackIndex);
			    }

			    return ret;
			};

			Promise.prototype._settlePromiseAtPostResolution = function (index) {
			    if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
			    this._settlePromiseAt(index);
			};

			Promise.prototype._length = function () {
			    return this._bitField & 131071;
			};

			Promise.prototype._isFollowingOrFulfilledOrRejected = function () {
			    return (this._bitField & 939524096) > 0;
			};

			Promise.prototype._isFollowing = function () {
			    return (this._bitField & 536870912) === 536870912;
			};

			Promise.prototype._setLength = function (len) {
			    this._bitField = (this._bitField & -131072) |
			        (len & 131071);
			};

			Promise.prototype._setFulfilled = function () {
			    this._bitField = this._bitField | 268435456;
			};

			Promise.prototype._setRejected = function () {
			    this._bitField = this._bitField | 134217728;
			};

			Promise.prototype._setFollowing = function () {
			    this._bitField = this._bitField | 536870912;
			};

			Promise.prototype._setIsFinal = function () {
			    this._bitField = this._bitField | 33554432;
			};

			Promise.prototype._isFinal = function () {
			    return (this._bitField & 33554432) > 0;
			};

			Promise.prototype._cancellable = function () {
			    return (this._bitField & 67108864) > 0;
			};

			Promise.prototype._setCancellable = function () {
			    this._bitField = this._bitField | 67108864;
			};

			Promise.prototype._unsetCancellable = function () {
			    this._bitField = this._bitField & (~67108864);
			};

			Promise.prototype._setIsMigrated = function () {
			    this._bitField = this._bitField | 4194304;
			};

			Promise.prototype._unsetIsMigrated = function () {
			    this._bitField = this._bitField & (~4194304);
			};

			Promise.prototype._isMigrated = function () {
			    return (this._bitField & 4194304) > 0;
			};

			Promise.prototype._receiverAt = function (index) {
			    var ret = index === 0
			        ? this._receiver0
			        : this[
			            index * 5 - 5 + 4];
			    if (ret === undefined && this._isBound()) {
			        return this._boundValue();
			    }
			    return ret;
			};

			Promise.prototype._promiseAt = function (index) {
			    return index === 0
			        ? this._promise0
			        : this[index * 5 - 5 + 3];
			};

			Promise.prototype._fulfillmentHandlerAt = function (index) {
			    return index === 0
			        ? this._fulfillmentHandler0
			        : this[index * 5 - 5 + 0];
			};

			Promise.prototype._rejectionHandlerAt = function (index) {
			    return index === 0
			        ? this._rejectionHandler0
			        : this[index * 5 - 5 + 1];
			};

			Promise.prototype._boundValue = function() {
			    var ret = this._boundTo;
			    if (ret !== undefined) {
			        if (ret instanceof Promise) {
			            if (ret.isFulfilled()) {
			                return ret.value();
			            } else {
			                return undefined;
			            }
			        }
			    }
			    return ret;
			};

			Promise.prototype._migrateCallbacks = function (follower, index) {
			    var fulfill = follower._fulfillmentHandlerAt(index);
			    var reject = follower._rejectionHandlerAt(index);
			    var progress = follower._progressHandlerAt(index);
			    var promise = follower._promiseAt(index);
			    var receiver = follower._receiverAt(index);
			    if (promise instanceof Promise) promise._setIsMigrated();
			    this._addCallbacks(fulfill, reject, progress, promise, receiver, null);
			};

			Promise.prototype._addCallbacks = function (
			    fulfill,
			    reject,
			    progress,
			    promise,
			    receiver,
			    domain
			) {
			    var index = this._length();

			    if (index >= 131071 - 5) {
			        index = 0;
			        this._setLength(0);
			    }

			    if (index === 0) {
			        this._promise0 = promise;
			        if (receiver !== undefined) this._receiver0 = receiver;
			        if (typeof fulfill === "function" && !this._isCarryingStackTrace()) {
			            this._fulfillmentHandler0 =
			                domain === null ? fulfill : domain.bind(fulfill);
			        }
			        if (typeof reject === "function") {
			            this._rejectionHandler0 =
			                domain === null ? reject : domain.bind(reject);
			        }
			        if (typeof progress === "function") {
			            this._progressHandler0 =
			                domain === null ? progress : domain.bind(progress);
			        }
			    } else {
			        var base = index * 5 - 5;
			        this[base + 3] = promise;
			        this[base + 4] = receiver;
			        if (typeof fulfill === "function") {
			            this[base + 0] =
			                domain === null ? fulfill : domain.bind(fulfill);
			        }
			        if (typeof reject === "function") {
			            this[base + 1] =
			                domain === null ? reject : domain.bind(reject);
			        }
			        if (typeof progress === "function") {
			            this[base + 2] =
			                domain === null ? progress : domain.bind(progress);
			        }
			    }
			    this._setLength(index + 1);
			    return index;
			};

			Promise.prototype._setProxyHandlers = function (receiver, promiseSlotValue) {
			    var index = this._length();

			    if (index >= 131071 - 5) {
			        index = 0;
			        this._setLength(0);
			    }
			    if (index === 0) {
			        this._promise0 = promiseSlotValue;
			        this._receiver0 = receiver;
			    } else {
			        var base = index * 5 - 5;
			        this[base + 3] = promiseSlotValue;
			        this[base + 4] = receiver;
			    }
			    this._setLength(index + 1);
			};

			Promise.prototype._proxyPromiseArray = function (promiseArray, index) {
			    this._setProxyHandlers(promiseArray, index);
			};

			Promise.prototype._resolveCallback = function(value, shouldBind) {
			    if (this._isFollowingOrFulfilledOrRejected()) return;
			    if (value === this)
			        return this._rejectCallback(makeSelfResolutionError(), false, true);
			    var maybePromise = tryConvertToPromise(value, this);
			    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

			    var propagationFlags = 1 | (shouldBind ? 4 : 0);
			    this._propagateFrom(maybePromise, propagationFlags);
			    var promise = maybePromise._target();
			    if (promise._isPending()) {
			        var len = this._length();
			        for (var i = 0; i < len; ++i) {
			            promise._migrateCallbacks(this, i);
			        }
			        this._setFollowing();
			        this._setLength(0);
			        this._setFollowee(promise);
			    } else if (promise._isFulfilled()) {
			        this._fulfillUnchecked(promise._value());
			    } else {
			        this._rejectUnchecked(promise._reason(),
			            promise._getCarriedStackTrace());
			    }
			};

			Promise.prototype._rejectCallback =
			function(reason, synchronous, shouldNotMarkOriginatingFromRejection) {
			    if (!shouldNotMarkOriginatingFromRejection) {
			        util.markAsOriginatingFromRejection(reason);
			    }
			    var trace = util.ensureErrorObject(reason);
			    var hasStack = trace === reason;
			    this._attachExtraTrace(trace, synchronous ? hasStack : false);
			    this._reject(reason, hasStack ? undefined : trace);
			};

			Promise.prototype._resolveFromResolver = function (resolver) {
			    var promise = this;
			    this._captureStackTrace();
			    this._pushContext();
			    var synchronous = true;
			    var r = tryCatch(resolver)(function(value) {
			        if (promise === null) return;
			        promise._resolveCallback(value);
			        promise = null;
			    }, function (reason) {
			        if (promise === null) return;
			        promise._rejectCallback(reason, synchronous);
			        promise = null;
			    });
			    synchronous = false;
			    this._popContext();

			    if (r !== undefined && r === errorObj && promise !== null) {
			        promise._rejectCallback(r.e, true, true);
			        promise = null;
			    }
			};

			Promise.prototype._settlePromiseFromHandler = function (
			    handler, receiver, value, promise
			) {
			    if (promise._isRejected()) return;
			    promise._pushContext();
			    var x;
			    if (receiver === APPLY && !this._isRejected()) {
			        x = tryCatch(handler).apply(this._boundValue(), value);
			    } else {
			        x = tryCatch(handler).call(receiver, value);
			    }
			    promise._popContext();

			    if (x === errorObj || x === promise || x === NEXT_FILTER) {
			        var err = x === promise ? makeSelfResolutionError() : x.e;
			        promise._rejectCallback(err, false, true);
			    } else {
			        promise._resolveCallback(x);
			    }
			};

			Promise.prototype._target = function() {
			    var ret = this;
			    while (ret._isFollowing()) ret = ret._followee();
			    return ret;
			};

			Promise.prototype._followee = function() {
			    return this._rejectionHandler0;
			};

			Promise.prototype._setFollowee = function(promise) {
			    this._rejectionHandler0 = promise;
			};

			Promise.prototype._cleanValues = function () {
			    if (this._cancellable()) {
			        this._cancellationParent = undefined;
			    }
			};

			Promise.prototype._propagateFrom = function (parent, flags) {
			    if ((flags & 1) > 0 && parent._cancellable()) {
			        this._setCancellable();
			        this._cancellationParent = parent;
			    }
			    if ((flags & 4) > 0 && parent._isBound()) {
			        this._setBoundTo(parent._boundTo);
			    }
			};

			Promise.prototype._fulfill = function (value) {
			    if (this._isFollowingOrFulfilledOrRejected()) return;
			    this._fulfillUnchecked(value);
			};

			Promise.prototype._reject = function (reason, carriedStackTrace) {
			    if (this._isFollowingOrFulfilledOrRejected()) return;
			    this._rejectUnchecked(reason, carriedStackTrace);
			};

			Promise.prototype._settlePromiseAt = function (index) {
			    var promise = this._promiseAt(index);
			    var isPromise = promise instanceof Promise;

			    if (isPromise && promise._isMigrated()) {
			        promise._unsetIsMigrated();
			        return async.invoke(this._settlePromiseAt, this, index);
			    }
			    var handler = this._isFulfilled()
			        ? this._fulfillmentHandlerAt(index)
			        : this._rejectionHandlerAt(index);

			    var carriedStackTrace =
			        this._isCarryingStackTrace() ? this._getCarriedStackTrace() : undefined;
			    var value = this._settledValue;
			    var receiver = this._receiverAt(index);
			    this._clearCallbackDataAtIndex(index);

			    if (typeof handler === "function") {
			        if (!isPromise) {
			            handler.call(receiver, value, promise);
			        } else {
			            this._settlePromiseFromHandler(handler, receiver, value, promise);
			        }
			    } else if (receiver instanceof PromiseArray) {
			        if (!receiver._isResolved()) {
			            if (this._isFulfilled()) {
			                receiver._promiseFulfilled(value, promise);
			            }
			            else {
			                receiver._promiseRejected(value, promise);
			            }
			        }
			    } else if (isPromise) {
			        if (this._isFulfilled()) {
			            promise._fulfill(value);
			        } else {
			            promise._reject(value, carriedStackTrace);
			        }
			    }

			    if (index >= 4 && (index & 31) === 4)
			        async.invokeLater(this._setLength, this, 0);
			};

			Promise.prototype._clearCallbackDataAtIndex = function(index) {
			    if (index === 0) {
			        if (!this._isCarryingStackTrace()) {
			            this._fulfillmentHandler0 = undefined;
			        }
			        this._rejectionHandler0 =
			        this._progressHandler0 =
			        this._receiver0 =
			        this._promise0 = undefined;
			    } else {
			        var base = index * 5 - 5;
			        this[base + 3] =
			        this[base + 4] =
			        this[base + 0] =
			        this[base + 1] =
			        this[base + 2] = undefined;
			    }
			};

			Promise.prototype._isSettlePromisesQueued = function () {
			    return (this._bitField &
			            -1073741824) === -1073741824;
			};

			Promise.prototype._setSettlePromisesQueued = function () {
			    this._bitField = this._bitField | -1073741824;
			};

			Promise.prototype._unsetSettlePromisesQueued = function () {
			    this._bitField = this._bitField & (~-1073741824);
			};

			Promise.prototype._queueSettlePromises = function() {
			    async.settlePromises(this);
			    this._setSettlePromisesQueued();
			};

			Promise.prototype._fulfillUnchecked = function (value) {
			    if (value === this) {
			        var err = makeSelfResolutionError();
			        this._attachExtraTrace(err);
			        return this._rejectUnchecked(err, undefined);
			    }
			    this._setFulfilled();
			    this._settledValue = value;
			    this._cleanValues();

			    if (this._length() > 0) {
			        this._queueSettlePromises();
			    }
			};

			Promise.prototype._rejectUncheckedCheckError = function (reason) {
			    var trace = util.ensureErrorObject(reason);
			    this._rejectUnchecked(reason, trace === reason ? undefined : trace);
			};

			Promise.prototype._rejectUnchecked = function (reason, trace) {
			    if (reason === this) {
			        var err = makeSelfResolutionError();
			        this._attachExtraTrace(err);
			        return this._rejectUnchecked(err);
			    }
			    this._setRejected();
			    this._settledValue = reason;
			    this._cleanValues();

			    if (this._isFinal()) {
			        async.throwLater(function(e) {
			            if ("stack" in e) {
			                async.invokeFirst(
			                    CapturedTrace.unhandledRejection, undefined, e);
			            }
			            throw e;
			        }, trace === undefined ? reason : trace);
			        return;
			    }

			    if (trace !== undefined && trace !== reason) {
			        this._setCarriedStackTrace(trace);
			    }

			    if (this._length() > 0) {
			        this._queueSettlePromises();
			    } else {
			        this._ensurePossibleRejectionHandled();
			    }
			};

			Promise.prototype._settlePromises = function () {
			    this._unsetSettlePromisesQueued();
			    var len = this._length();
			    for (var i = 0; i < len; i++) {
			        this._settlePromiseAt(i);
			    }
			};

			util.notEnumerableProp(Promise,
			                       "_makeSelfResolutionError",
			                       makeSelfResolutionError);

			__webpack_require__(18)(Promise, PromiseArray);
			__webpack_require__(19)(Promise, INTERNAL, tryConvertToPromise, apiRejection);
			__webpack_require__(20)(Promise, INTERNAL, tryConvertToPromise);
			__webpack_require__(21)(Promise, NEXT_FILTER, tryConvertToPromise);
			__webpack_require__(22)(Promise);
			__webpack_require__(23)(Promise);
			__webpack_require__(24)(Promise, PromiseArray, tryConvertToPromise, INTERNAL);
			Promise.Promise = Promise;
			__webpack_require__(25)(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL);
			__webpack_require__(26)(Promise);
			__webpack_require__(27)(Promise, apiRejection, tryConvertToPromise, createContext);
			__webpack_require__(28)(Promise, apiRejection, INTERNAL, tryConvertToPromise);
			__webpack_require__(29)(Promise);
			__webpack_require__(30)(Promise);
			__webpack_require__(31)(Promise, PromiseArray, tryConvertToPromise, apiRejection);
			__webpack_require__(32)(Promise, INTERNAL, tryConvertToPromise, apiRejection);
			__webpack_require__(33)(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL);
			__webpack_require__(34)(Promise, PromiseArray);
			__webpack_require__(35)(Promise, PromiseArray, apiRejection);
			__webpack_require__(36)(Promise, INTERNAL);
			__webpack_require__(37)(Promise);
			__webpack_require__(38)(Promise, INTERNAL);
			__webpack_require__(39)(Promise, INTERNAL);
			__webpack_require__(40)(Promise, INTERNAL);
			                                                         
			    util.toFastProperties(Promise);                                          
			    util.toFastProperties(Promise.prototype);                                
			    function fillTypes(value) {                                              
			        var p = new Promise(INTERNAL);                                       
			        p._fulfillmentHandler0 = value;                                      
			        p._rejectionHandler0 = value;                                        
			        p._progressHandler0 = value;                                         
			        p._promise0 = value;                                                 
			        p._receiver0 = value;                                                
			        p._settledValue = value;                                             
			    }                                                                        
			    // Complete slack tracking, opt out of field-type tracking and           
			    // stabilize map                                                         
			    fillTypes({a: 1});                                                       
			    fillTypes({b: 2});                                                       
			    fillTypes({c: 3});                                                       
			    fillTypes(1);                                                            
			    fillTypes(function(){});                                                 
			    fillTypes(undefined);                                                    
			    fillTypes(false);                                                        
			    fillTypes(new Promise(INTERNAL));                                        
			    CapturedTrace.setBounds(async.firstLineError, util.lastLineError);       
			    return Promise;                                                          

			};


		/***/ },
		/* 5 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			var es5 = __webpack_require__(6);
			var canEvaluate = typeof navigator == "undefined";
			var haveGetters = (function(){
			    try {
			        var o = {};
			        es5.defineProperty(o, "f", {
			            get: function () {
			                return 3;
			            }
			        });
			        return o.f === 3;
			    }
			    catch (e) {
			        return false;
			    }

			})();

			var errorObj = {e: {}};
			var tryCatchTarget;
			function tryCatcher() {
			    try {
			        var target = tryCatchTarget;
			        tryCatchTarget = null;
			        return target.apply(this, arguments);
			    } catch (e) {
			        errorObj.e = e;
			        return errorObj;
			    }
			}
			function tryCatch(fn) {
			    tryCatchTarget = fn;
			    return tryCatcher;
			}

			var inherits = function(Child, Parent) {
			    var hasProp = {}.hasOwnProperty;

			    function T() {
			        this.constructor = Child;
			        this.constructor$ = Parent;
			        for (var propertyName in Parent.prototype) {
			            if (hasProp.call(Parent.prototype, propertyName) &&
			                propertyName.charAt(propertyName.length-1) !== "$"
			           ) {
			                this[propertyName + "$"] = Parent.prototype[propertyName];
			            }
			        }
			    }
			    T.prototype = Parent.prototype;
			    Child.prototype = new T();
			    return Child.prototype;
			};


			function isPrimitive(val) {
			    return val == null || val === true || val === false ||
			        typeof val === "string" || typeof val === "number";

			}

			function isObject(value) {
			    return !isPrimitive(value);
			}

			function maybeWrapAsError(maybeError) {
			    if (!isPrimitive(maybeError)) return maybeError;

			    return new Error(safeToString(maybeError));
			}

			function withAppended(target, appendee) {
			    var len = target.length;
			    var ret = new Array(len + 1);
			    var i;
			    for (i = 0; i < len; ++i) {
			        ret[i] = target[i];
			    }
			    ret[i] = appendee;
			    return ret;
			}

			function getDataPropertyOrDefault(obj, key, defaultValue) {
			    if (es5.isES5) {
			        var desc = Object.getOwnPropertyDescriptor(obj, key);

			        if (desc != null) {
			            return desc.get == null && desc.set == null
			                    ? desc.value
			                    : defaultValue;
			        }
			    } else {
			        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
			    }
			}

			function notEnumerableProp(obj, name, value) {
			    if (isPrimitive(obj)) return obj;
			    var descriptor = {
			        value: value,
			        configurable: true,
			        enumerable: false,
			        writable: true
			    };
			    es5.defineProperty(obj, name, descriptor);
			    return obj;
			}

			function thrower(r) {
			    throw r;
			}

			var inheritedDataKeys = (function() {
			    var excludedPrototypes = [
			        Array.prototype,
			        Object.prototype,
			        Function.prototype
			    ];

			    var isExcludedProto = function(val) {
			        for (var i = 0; i < excludedPrototypes.length; ++i) {
			            if (excludedPrototypes[i] === val) {
			                return true;
			            }
			        }
			        return false;
			    };

			    if (es5.isES5) {
			        var getKeys = Object.getOwnPropertyNames;
			        return function(obj) {
			            var ret = [];
			            var visitedKeys = Object.create(null);
			            while (obj != null && !isExcludedProto(obj)) {
			                var keys;
			                try {
			                    keys = getKeys(obj);
			                } catch (e) {
			                    return ret;
			                }
			                for (var i = 0; i < keys.length; ++i) {
			                    var key = keys[i];
			                    if (visitedKeys[key]) continue;
			                    visitedKeys[key] = true;
			                    var desc = Object.getOwnPropertyDescriptor(obj, key);
			                    if (desc != null && desc.get == null && desc.set == null) {
			                        ret.push(key);
			                    }
			                }
			                obj = es5.getPrototypeOf(obj);
			            }
			            return ret;
			        };
			    } else {
			        var hasProp = {}.hasOwnProperty;
			        return function(obj) {
			            if (isExcludedProto(obj)) return [];
			            var ret = [];

			            /*jshint forin:false */
			            enumeration: for (var key in obj) {
			                if (hasProp.call(obj, key)) {
			                    ret.push(key);
			                } else {
			                    for (var i = 0; i < excludedPrototypes.length; ++i) {
			                        if (hasProp.call(excludedPrototypes[i], key)) {
			                            continue enumeration;
			                        }
			                    }
			                    ret.push(key);
			                }
			            }
			            return ret;
			        };
			    }

			})();

			var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
			function isClass(fn) {
			    try {
			        if (typeof fn === "function") {
			            var keys = es5.names(fn.prototype);

			            var hasMethods = es5.isES5 && keys.length > 1;
			            var hasMethodsOtherThanConstructor = keys.length > 0 &&
			                !(keys.length === 1 && keys[0] === "constructor");
			            var hasThisAssignmentAndStaticMethods =
			                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

			            if (hasMethods || hasMethodsOtherThanConstructor ||
			                hasThisAssignmentAndStaticMethods) {
			                return true;
			            }
			        }
			        return false;
			    } catch (e) {
			        return false;
			    }
			}

			function toFastProperties(obj) {
			    /*jshint -W027,-W055,-W031*/
			    function f() {}
			    f.prototype = obj;
			    var l = 8;
			    while (l--) new f();
			    return obj;
			    eval(obj);
			}

			var rident = /^[a-z$_][a-z$_0-9]*$/i;
			function isIdentifier(str) {
			    return rident.test(str);
			}

			function filledRange(count, prefix, suffix) {
			    var ret = new Array(count);
			    for(var i = 0; i < count; ++i) {
			        ret[i] = prefix + i + suffix;
			    }
			    return ret;
			}

			function safeToString(obj) {
			    try {
			        return obj + "";
			    } catch (e) {
			        return "[no string representation]";
			    }
			}

			function markAsOriginatingFromRejection(e) {
			    try {
			        notEnumerableProp(e, "isOperational", true);
			    }
			    catch(ignore) {}
			}

			function originatesFromRejection(e) {
			    if (e == null) return false;
			    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
			        e["isOperational"] === true);
			}

			function canAttachTrace(obj) {
			    return obj instanceof Error && es5.propertyIsWritable(obj, "stack");
			}

			var ensureErrorObject = (function() {
			    if (!("stack" in new Error())) {
			        return function(value) {
			            if (canAttachTrace(value)) return value;
			            try {throw new Error(safeToString(value));}
			            catch(err) {return err;}
			        };
			    } else {
			        return function(value) {
			            if (canAttachTrace(value)) return value;
			            return new Error(safeToString(value));
			        };
			    }
			})();

			function classString(obj) {
			    return {}.toString.call(obj);
			}

			function copyDescriptors(from, to, filter) {
			    var keys = es5.names(from);
			    for (var i = 0; i < keys.length; ++i) {
			        var key = keys[i];
			        if (filter(key)) {
			            try {
			                es5.defineProperty(to, key, es5.getDescriptor(from, key));
			            } catch (ignore) {}
			        }
			    }
			}

			var ret = {
			    isClass: isClass,
			    isIdentifier: isIdentifier,
			    inheritedDataKeys: inheritedDataKeys,
			    getDataPropertyOrDefault: getDataPropertyOrDefault,
			    thrower: thrower,
			    isArray: es5.isArray,
			    haveGetters: haveGetters,
			    notEnumerableProp: notEnumerableProp,
			    isPrimitive: isPrimitive,
			    isObject: isObject,
			    canEvaluate: canEvaluate,
			    errorObj: errorObj,
			    tryCatch: tryCatch,
			    inherits: inherits,
			    withAppended: withAppended,
			    maybeWrapAsError: maybeWrapAsError,
			    toFastProperties: toFastProperties,
			    filledRange: filledRange,
			    toString: safeToString,
			    canAttachTrace: canAttachTrace,
			    ensureErrorObject: ensureErrorObject,
			    originatesFromRejection: originatesFromRejection,
			    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
			    classString: classString,
			    copyDescriptors: copyDescriptors,
			    hasDevTools: typeof chrome !== "undefined" && chrome &&
			                 typeof chrome.loadTimes === "function",
			    isNode: typeof process !== "undefined" &&
			        classString(process).toLowerCase() === "[object process]"
			};
			ret.isRecentNode = ret.isNode && (function() {
			    var version = process.versions.node.split(".").map(Number);
			    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
			})();

			if (ret.isNode) ret.toFastProperties(process);

			try {throw new Error(); } catch (e) {ret.lastLineError = e;}
			module.exports = ret;


		/***/ },
		/* 6 */
		/***/ function(module, exports) {

			var isES5 = (function(){
			    "use strict";
			    return this === undefined;
			})();

			if (isES5) {
			    module.exports = {
			        freeze: Object.freeze,
			        defineProperty: Object.defineProperty,
			        getDescriptor: Object.getOwnPropertyDescriptor,
			        keys: Object.keys,
			        names: Object.getOwnPropertyNames,
			        getPrototypeOf: Object.getPrototypeOf,
			        isArray: Array.isArray,
			        isES5: isES5,
			        propertyIsWritable: function(obj, prop) {
			            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
			            return !!(!descriptor || descriptor.writable || descriptor.set);
			        }
			    };
			} else {
			    var has = {}.hasOwnProperty;
			    var str = {}.toString;
			    var proto = {}.constructor.prototype;

			    var ObjectKeys = function (o) {
			        var ret = [];
			        for (var key in o) {
			            if (has.call(o, key)) {
			                ret.push(key);
			            }
			        }
			        return ret;
			    };

			    var ObjectGetDescriptor = function(o, key) {
			        return {value: o[key]};
			    };

			    var ObjectDefineProperty = function (o, key, desc) {
			        o[key] = desc.value;
			        return o;
			    };

			    var ObjectFreeze = function (obj) {
			        return obj;
			    };

			    var ObjectGetPrototypeOf = function (obj) {
			        try {
			            return Object(obj).constructor.prototype;
			        }
			        catch (e) {
			            return proto;
			        }
			    };

			    var ArrayIsArray = function (obj) {
			        try {
			            return str.call(obj) === "[object Array]";
			        }
			        catch(e) {
			            return false;
			        }
			    };

			    module.exports = {
			        isArray: ArrayIsArray,
			        keys: ObjectKeys,
			        names: ObjectKeys,
			        defineProperty: ObjectDefineProperty,
			        getDescriptor: ObjectGetDescriptor,
			        freeze: ObjectFreeze,
			        getPrototypeOf: ObjectGetPrototypeOf,
			        isES5: isES5,
			        propertyIsWritable: function() {
			            return true;
			        }
			    };
			}


		/***/ },
		/* 7 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			var firstLineError;
			try {throw new Error(); } catch (e) {firstLineError = e;}
			var schedule = __webpack_require__(8);
			var Queue = __webpack_require__(9);
			var util = __webpack_require__(5);

			function Async() {
			    this._isTickUsed = false;
			    this._lateQueue = new Queue(16);
			    this._normalQueue = new Queue(16);
			    this._trampolineEnabled = true;
			    var self = this;
			    this.drainQueues = function () {
			        self._drainQueues();
			    };
			    this._schedule =
			        schedule.isStatic ? schedule(this.drainQueues) : schedule;
			}

			Async.prototype.disableTrampolineIfNecessary = function() {
			    if (util.hasDevTools) {
			        this._trampolineEnabled = false;
			    }
			};

			Async.prototype.enableTrampoline = function() {
			    if (!this._trampolineEnabled) {
			        this._trampolineEnabled = true;
			        this._schedule = function(fn) {
			            setTimeout(fn, 0);
			        };
			    }
			};

			Async.prototype.haveItemsQueued = function () {
			    return this._normalQueue.length() > 0;
			};

			Async.prototype.throwLater = function(fn, arg) {
			    if (arguments.length === 1) {
			        arg = fn;
			        fn = function () { throw arg; };
			    }
			    if (typeof setTimeout !== "undefined") {
			        setTimeout(function() {
			            fn(arg);
			        }, 0);
			    } else try {
			        this._schedule(function() {
			            fn(arg);
			        });
			    } catch (e) {
			        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/m3OTXk\u000a");
			    }
			};

			function AsyncInvokeLater(fn, receiver, arg) {
			    this._lateQueue.push(fn, receiver, arg);
			    this._queueTick();
			}

			function AsyncInvoke(fn, receiver, arg) {
			    this._normalQueue.push(fn, receiver, arg);
			    this._queueTick();
			}

			function AsyncSettlePromises(promise) {
			    this._normalQueue._pushOne(promise);
			    this._queueTick();
			}

			if (!util.hasDevTools) {
			    Async.prototype.invokeLater = AsyncInvokeLater;
			    Async.prototype.invoke = AsyncInvoke;
			    Async.prototype.settlePromises = AsyncSettlePromises;
			} else {
			    if (schedule.isStatic) {
			        schedule = function(fn) { setTimeout(fn, 0); };
			    }
			    Async.prototype.invokeLater = function (fn, receiver, arg) {
			        if (this._trampolineEnabled) {
			            AsyncInvokeLater.call(this, fn, receiver, arg);
			        } else {
			            this._schedule(function() {
			                setTimeout(function() {
			                    fn.call(receiver, arg);
			                }, 100);
			            });
			        }
			    };

			    Async.prototype.invoke = function (fn, receiver, arg) {
			        if (this._trampolineEnabled) {
			            AsyncInvoke.call(this, fn, receiver, arg);
			        } else {
			            this._schedule(function() {
			                fn.call(receiver, arg);
			            });
			        }
			    };

			    Async.prototype.settlePromises = function(promise) {
			        if (this._trampolineEnabled) {
			            AsyncSettlePromises.call(this, promise);
			        } else {
			            this._schedule(function() {
			                promise._settlePromises();
			            });
			        }
			    };
			}

			Async.prototype.invokeFirst = function (fn, receiver, arg) {
			    this._normalQueue.unshift(fn, receiver, arg);
			    this._queueTick();
			};

			Async.prototype._drainQueue = function(queue) {
			    while (queue.length() > 0) {
			        var fn = queue.shift();
			        if (typeof fn !== "function") {
			            fn._settlePromises();
			            continue;
			        }
			        var receiver = queue.shift();
			        var arg = queue.shift();
			        fn.call(receiver, arg);
			    }
			};

			Async.prototype._drainQueues = function () {
			    this._drainQueue(this._normalQueue);
			    this._reset();
			    this._drainQueue(this._lateQueue);
			};

			Async.prototype._queueTick = function () {
			    if (!this._isTickUsed) {
			        this._isTickUsed = true;
			        this._schedule(this.drainQueues);
			    }
			};

			Async.prototype._reset = function () {
			    this._isTickUsed = false;
			};

			module.exports = new Async();
			module.exports.firstLineError = firstLineError;


		/***/ },
		/* 8 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			var schedule;
			var util = __webpack_require__(5);
			var noAsyncScheduler = function() {
			    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/m3OTXk\u000a");
			};
			if (util.isNode && typeof MutationObserver === "undefined") {
			    var GlobalSetImmediate = global.setImmediate;
			    var ProcessNextTick = process.nextTick;
			    schedule = util.isRecentNode
			                ? function(fn) { GlobalSetImmediate.call(global, fn); }
			                : function(fn) { ProcessNextTick.call(process, fn); };
			} else if ((typeof MutationObserver !== "undefined") &&
			          !(typeof window !== "undefined" &&
			            window.navigator &&
			            window.navigator.standalone)) {
			    schedule = function(fn) {
			        var div = document.createElement("div");
			        var observer = new MutationObserver(fn);
			        observer.observe(div, {attributes: true});
			        return function() { div.classList.toggle("foo"); };
			    };
			    schedule.isStatic = true;
			} else if (typeof setImmediate !== "undefined") {
			    schedule = function (fn) {
			        setImmediate(fn);
			    };
			} else if (typeof setTimeout !== "undefined") {
			    schedule = function (fn) {
			        setTimeout(fn, 0);
			    };
			} else {
			    schedule = noAsyncScheduler;
			}
			module.exports = schedule;


		/***/ },
		/* 9 */
		/***/ function(module, exports) {

			"use strict";
			function arrayMove(src, srcIndex, dst, dstIndex, len) {
			    for (var j = 0; j < len; ++j) {
			        dst[j + dstIndex] = src[j + srcIndex];
			        src[j + srcIndex] = void 0;
			    }
			}

			function Queue(capacity) {
			    this._capacity = capacity;
			    this._length = 0;
			    this._front = 0;
			}

			Queue.prototype._willBeOverCapacity = function (size) {
			    return this._capacity < size;
			};

			Queue.prototype._pushOne = function (arg) {
			    var length = this.length();
			    this._checkCapacity(length + 1);
			    var i = (this._front + length) & (this._capacity - 1);
			    this[i] = arg;
			    this._length = length + 1;
			};

			Queue.prototype._unshiftOne = function(value) {
			    var capacity = this._capacity;
			    this._checkCapacity(this.length() + 1);
			    var front = this._front;
			    var i = (((( front - 1 ) &
			                    ( capacity - 1) ) ^ capacity ) - capacity );
			    this[i] = value;
			    this._front = i;
			    this._length = this.length() + 1;
			};

			Queue.prototype.unshift = function(fn, receiver, arg) {
			    this._unshiftOne(arg);
			    this._unshiftOne(receiver);
			    this._unshiftOne(fn);
			};

			Queue.prototype.push = function (fn, receiver, arg) {
			    var length = this.length() + 3;
			    if (this._willBeOverCapacity(length)) {
			        this._pushOne(fn);
			        this._pushOne(receiver);
			        this._pushOne(arg);
			        return;
			    }
			    var j = this._front + length - 3;
			    this._checkCapacity(length);
			    var wrapMask = this._capacity - 1;
			    this[(j + 0) & wrapMask] = fn;
			    this[(j + 1) & wrapMask] = receiver;
			    this[(j + 2) & wrapMask] = arg;
			    this._length = length;
			};

			Queue.prototype.shift = function () {
			    var front = this._front,
			        ret = this[front];

			    this[front] = undefined;
			    this._front = (front + 1) & (this._capacity - 1);
			    this._length--;
			    return ret;
			};

			Queue.prototype.length = function () {
			    return this._length;
			};

			Queue.prototype._checkCapacity = function (size) {
			    if (this._capacity < size) {
			        this._resizeTo(this._capacity << 1);
			    }
			};

			Queue.prototype._resizeTo = function (capacity) {
			    var oldCapacity = this._capacity;
			    this._capacity = capacity;
			    var front = this._front;
			    var length = this._length;
			    var moveItemsCount = (front + length) & (oldCapacity - 1);
			    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
			};

			module.exports = Queue;


		/***/ },
		/* 10 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			var es5 = __webpack_require__(6);
			var Objectfreeze = es5.freeze;
			var util = __webpack_require__(5);
			var inherits = util.inherits;
			var notEnumerableProp = util.notEnumerableProp;

			function subError(nameProperty, defaultMessage) {
			    function SubError(message) {
			        if (!(this instanceof SubError)) return new SubError(message);
			        notEnumerableProp(this, "message",
			            typeof message === "string" ? message : defaultMessage);
			        notEnumerableProp(this, "name", nameProperty);
			        if (Error.captureStackTrace) {
			            Error.captureStackTrace(this, this.constructor);
			        } else {
			            Error.call(this);
			        }
			    }
			    inherits(SubError, Error);
			    return SubError;
			}

			var _TypeError, _RangeError;
			var Warning = subError("Warning", "warning");
			var CancellationError = subError("CancellationError", "cancellation error");
			var TimeoutError = subError("TimeoutError", "timeout error");
			var AggregateError = subError("AggregateError", "aggregate error");
			try {
			    _TypeError = TypeError;
			    _RangeError = RangeError;
			} catch(e) {
			    _TypeError = subError("TypeError", "type error");
			    _RangeError = subError("RangeError", "range error");
			}

			var methods = ("join pop push shift unshift slice filter forEach some " +
			    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

			for (var i = 0; i < methods.length; ++i) {
			    if (typeof Array.prototype[methods[i]] === "function") {
			        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
			    }
			}

			es5.defineProperty(AggregateError.prototype, "length", {
			    value: 0,
			    configurable: false,
			    writable: true,
			    enumerable: true
			});
			AggregateError.prototype["isOperational"] = true;
			var level = 0;
			AggregateError.prototype.toString = function() {
			    var indent = Array(level * 4 + 1).join(" ");
			    var ret = "\n" + indent + "AggregateError of:" + "\n";
			    level++;
			    indent = Array(level * 4 + 1).join(" ");
			    for (var i = 0; i < this.length; ++i) {
			        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
			        var lines = str.split("\n");
			        for (var j = 0; j < lines.length; ++j) {
			            lines[j] = indent + lines[j];
			        }
			        str = lines.join("\n");
			        ret += str + "\n";
			    }
			    level--;
			    return ret;
			};

			function OperationalError(message) {
			    if (!(this instanceof OperationalError))
			        return new OperationalError(message);
			    notEnumerableProp(this, "name", "OperationalError");
			    notEnumerableProp(this, "message", message);
			    this.cause = message;
			    this["isOperational"] = true;

			    if (message instanceof Error) {
			        notEnumerableProp(this, "message", message.message);
			        notEnumerableProp(this, "stack", message.stack);
			    } else if (Error.captureStackTrace) {
			        Error.captureStackTrace(this, this.constructor);
			    }

			}
			inherits(OperationalError, Error);

			var errorTypes = Error["__BluebirdErrorTypes__"];
			if (!errorTypes) {
			    errorTypes = Objectfreeze({
			        CancellationError: CancellationError,
			        TimeoutError: TimeoutError,
			        OperationalError: OperationalError,
			        RejectionError: OperationalError,
			        AggregateError: AggregateError
			    });
			    notEnumerableProp(Error, "__BluebirdErrorTypes__", errorTypes);
			}

			module.exports = {
			    Error: Error,
			    TypeError: _TypeError,
			    RangeError: _RangeError,
			    CancellationError: errorTypes.CancellationError,
			    OperationalError: errorTypes.OperationalError,
			    TimeoutError: errorTypes.TimeoutError,
			    AggregateError: errorTypes.AggregateError,
			    Warning: Warning
			};


		/***/ },
		/* 11 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise, INTERNAL) {
			var util = __webpack_require__(5);
			var errorObj = util.errorObj;
			var isObject = util.isObject;

			function tryConvertToPromise(obj, context) {
			    if (isObject(obj)) {
			        if (obj instanceof Promise) {
			            return obj;
			        }
			        else if (isAnyBluebirdPromise(obj)) {
			            var ret = new Promise(INTERNAL);
			            obj._then(
			                ret._fulfillUnchecked,
			                ret._rejectUncheckedCheckError,
			                ret._progressUnchecked,
			                ret,
			                null
			            );
			            return ret;
			        }
			        var then = util.tryCatch(getThen)(obj);
			        if (then === errorObj) {
			            if (context) context._pushContext();
			            var ret = Promise.reject(then.e);
			            if (context) context._popContext();
			            return ret;
			        } else if (typeof then === "function") {
			            return doThenable(obj, then, context);
			        }
			    }
			    return obj;
			}

			function getThen(obj) {
			    return obj.then;
			}

			var hasProp = {}.hasOwnProperty;
			function isAnyBluebirdPromise(obj) {
			    return hasProp.call(obj, "_promise0");
			}

			function doThenable(x, then, context) {
			    var promise = new Promise(INTERNAL);
			    var ret = promise;
			    if (context) context._pushContext();
			    promise._captureStackTrace();
			    if (context) context._popContext();
			    var synchronous = true;
			    var result = util.tryCatch(then).call(x,
			                                        resolveFromThenable,
			                                        rejectFromThenable,
			                                        progressFromThenable);
			    synchronous = false;
			    if (promise && result === errorObj) {
			        promise._rejectCallback(result.e, true, true);
			        promise = null;
			    }

			    function resolveFromThenable(value) {
			        if (!promise) return;
			        promise._resolveCallback(value);
			        promise = null;
			    }

			    function rejectFromThenable(reason) {
			        if (!promise) return;
			        promise._rejectCallback(reason, synchronous, true);
			        promise = null;
			    }

			    function progressFromThenable(value) {
			        if (!promise) return;
			        if (typeof promise._progress === "function") {
			            promise._progress(value);
			        }
			    }
			    return ret;
			}

			return tryConvertToPromise;
			};


		/***/ },
		/* 12 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise, INTERNAL, tryConvertToPromise,
			    apiRejection) {
			var util = __webpack_require__(5);
			var isArray = util.isArray;

			function toResolutionValue(val) {
			    switch(val) {
			    case -2: return [];
			    case -3: return {};
			    }
			}

			function PromiseArray(values) {
			    var promise = this._promise = new Promise(INTERNAL);
			    var parent;
			    if (values instanceof Promise) {
			        parent = values;
			        promise._propagateFrom(parent, 1 | 4);
			    }
			    this._values = values;
			    this._length = 0;
			    this._totalResolved = 0;
			    this._init(undefined, -2);
			}
			PromiseArray.prototype.length = function () {
			    return this._length;
			};

			PromiseArray.prototype.promise = function () {
			    return this._promise;
			};

			PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
			    var values = tryConvertToPromise(this._values, this._promise);
			    if (values instanceof Promise) {
			        values = values._target();
			        this._values = values;
			        if (values._isFulfilled()) {
			            values = values._value();
			            if (!isArray(values)) {
			                var err = new Promise.TypeError("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a");
			                this.__hardReject__(err);
			                return;
			            }
			        } else if (values._isPending()) {
			            values._then(
			                init,
			                this._reject,
			                undefined,
			                this,
			                resolveValueIfEmpty
			           );
			            return;
			        } else {
			            this._reject(values._reason());
			            return;
			        }
			    } else if (!isArray(values)) {
			        this._promise._reject(apiRejection("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a")._reason());
			        return;
			    }

			    if (values.length === 0) {
			        if (resolveValueIfEmpty === -5) {
			            this._resolveEmptyArray();
			        }
			        else {
			            this._resolve(toResolutionValue(resolveValueIfEmpty));
			        }
			        return;
			    }
			    var len = this.getActualLength(values.length);
			    this._length = len;
			    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
			    var promise = this._promise;
			    for (var i = 0; i < len; ++i) {
			        var isResolved = this._isResolved();
			        var maybePromise = tryConvertToPromise(values[i], promise);
			        if (maybePromise instanceof Promise) {
			            maybePromise = maybePromise._target();
			            if (isResolved) {
			                maybePromise._ignoreRejections();
			            } else if (maybePromise._isPending()) {
			                maybePromise._proxyPromiseArray(this, i);
			            } else if (maybePromise._isFulfilled()) {
			                this._promiseFulfilled(maybePromise._value(), i);
			            } else {
			                this._promiseRejected(maybePromise._reason(), i);
			            }
			        } else if (!isResolved) {
			            this._promiseFulfilled(maybePromise, i);
			        }
			    }
			};

			PromiseArray.prototype._isResolved = function () {
			    return this._values === null;
			};

			PromiseArray.prototype._resolve = function (value) {
			    this._values = null;
			    this._promise._fulfill(value);
			};

			PromiseArray.prototype.__hardReject__ =
			PromiseArray.prototype._reject = function (reason) {
			    this._values = null;
			    this._promise._rejectCallback(reason, false, true);
			};

			PromiseArray.prototype._promiseProgressed = function (progressValue, index) {
			    this._promise._progress({
			        index: index,
			        value: progressValue
			    });
			};


			PromiseArray.prototype._promiseFulfilled = function (value, index) {
			    this._values[index] = value;
			    var totalResolved = ++this._totalResolved;
			    if (totalResolved >= this._length) {
			        this._resolve(this._values);
			    }
			};

			PromiseArray.prototype._promiseRejected = function (reason, index) {
			    this._totalResolved++;
			    this._reject(reason);
			};

			PromiseArray.prototype.shouldCopyValues = function () {
			    return true;
			};

			PromiseArray.prototype.getActualLength = function (len) {
			    return len;
			};

			return PromiseArray;
			};


		/***/ },
		/* 13 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function() {
			var async = __webpack_require__(7);
			var util = __webpack_require__(5);
			var bluebirdFramePattern =
			    /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/;
			var stackFramePattern = null;
			var formatStack = null;
			var indentStackFrames = false;
			var warn;

			function CapturedTrace(parent) {
			    this._parent = parent;
			    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
			    captureStackTrace(this, CapturedTrace);
			    if (length > 32) this.uncycle();
			}
			util.inherits(CapturedTrace, Error);

			CapturedTrace.prototype.uncycle = function() {
			    var length = this._length;
			    if (length < 2) return;
			    var nodes = [];
			    var stackToIndex = {};

			    for (var i = 0, node = this; node !== undefined; ++i) {
			        nodes.push(node);
			        node = node._parent;
			    }
			    length = this._length = i;
			    for (var i = length - 1; i >= 0; --i) {
			        var stack = nodes[i].stack;
			        if (stackToIndex[stack] === undefined) {
			            stackToIndex[stack] = i;
			        }
			    }
			    for (var i = 0; i < length; ++i) {
			        var currentStack = nodes[i].stack;
			        var index = stackToIndex[currentStack];
			        if (index !== undefined && index !== i) {
			            if (index > 0) {
			                nodes[index - 1]._parent = undefined;
			                nodes[index - 1]._length = 1;
			            }
			            nodes[i]._parent = undefined;
			            nodes[i]._length = 1;
			            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

			            if (index < length - 1) {
			                cycleEdgeNode._parent = nodes[index + 1];
			                cycleEdgeNode._parent.uncycle();
			                cycleEdgeNode._length =
			                    cycleEdgeNode._parent._length + 1;
			            } else {
			                cycleEdgeNode._parent = undefined;
			                cycleEdgeNode._length = 1;
			            }
			            var currentChildLength = cycleEdgeNode._length + 1;
			            for (var j = i - 2; j >= 0; --j) {
			                nodes[j]._length = currentChildLength;
			                currentChildLength++;
			            }
			            return;
			        }
			    }
			};

			CapturedTrace.prototype.parent = function() {
			    return this._parent;
			};

			CapturedTrace.prototype.hasParent = function() {
			    return this._parent !== undefined;
			};

			CapturedTrace.prototype.attachExtraTrace = function(error) {
			    if (error.__stackCleaned__) return;
			    this.uncycle();
			    var parsed = CapturedTrace.parseStackAndMessage(error);
			    var message = parsed.message;
			    var stacks = [parsed.stack];

			    var trace = this;
			    while (trace !== undefined) {
			        stacks.push(cleanStack(trace.stack.split("\n")));
			        trace = trace._parent;
			    }
			    removeCommonRoots(stacks);
			    removeDuplicateOrEmptyJumps(stacks);
			    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
			    util.notEnumerableProp(error, "__stackCleaned__", true);
			};

			function reconstructStack(message, stacks) {
			    for (var i = 0; i < stacks.length - 1; ++i) {
			        stacks[i].push("From previous event:");
			        stacks[i] = stacks[i].join("\n");
			    }
			    if (i < stacks.length) {
			        stacks[i] = stacks[i].join("\n");
			    }
			    return message + "\n" + stacks.join("\n");
			}

			function removeDuplicateOrEmptyJumps(stacks) {
			    for (var i = 0; i < stacks.length; ++i) {
			        if (stacks[i].length === 0 ||
			            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
			            stacks.splice(i, 1);
			            i--;
			        }
			    }
			}

			function removeCommonRoots(stacks) {
			    var current = stacks[0];
			    for (var i = 1; i < stacks.length; ++i) {
			        var prev = stacks[i];
			        var currentLastIndex = current.length - 1;
			        var currentLastLine = current[currentLastIndex];
			        var commonRootMeetPoint = -1;

			        for (var j = prev.length - 1; j >= 0; --j) {
			            if (prev[j] === currentLastLine) {
			                commonRootMeetPoint = j;
			                break;
			            }
			        }

			        for (var j = commonRootMeetPoint; j >= 0; --j) {
			            var line = prev[j];
			            if (current[currentLastIndex] === line) {
			                current.pop();
			                currentLastIndex--;
			            } else {
			                break;
			            }
			        }
			        current = prev;
			    }
			}

			function cleanStack(stack) {
			    var ret = [];
			    for (var i = 0; i < stack.length; ++i) {
			        var line = stack[i];
			        var isTraceLine = stackFramePattern.test(line) ||
			            "    (No stack trace)" === line;
			        var isInternalFrame = isTraceLine && shouldIgnore(line);
			        if (isTraceLine && !isInternalFrame) {
			            if (indentStackFrames && line.charAt(0) !== " ") {
			                line = "    " + line;
			            }
			            ret.push(line);
			        }
			    }
			    return ret;
			}

			function stackFramesAsArray(error) {
			    var stack = error.stack.replace(/\s+$/g, "").split("\n");
			    for (var i = 0; i < stack.length; ++i) {
			        var line = stack[i];
			        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
			            break;
			        }
			    }
			    if (i > 0) {
			        stack = stack.slice(i);
			    }
			    return stack;
			}

			CapturedTrace.parseStackAndMessage = function(error) {
			    var stack = error.stack;
			    var message = error.toString();
			    stack = typeof stack === "string" && stack.length > 0
			                ? stackFramesAsArray(error) : ["    (No stack trace)"];
			    return {
			        message: message,
			        stack: cleanStack(stack)
			    };
			};

			CapturedTrace.formatAndLogError = function(error, title) {
			    if (typeof console !== "undefined") {
			        var message;
			        if (typeof error === "object" || typeof error === "function") {
			            var stack = error.stack;
			            message = title + formatStack(stack, error);
			        } else {
			            message = title + String(error);
			        }
			        if (typeof warn === "function") {
			            warn(message);
			        } else if (typeof console.log === "function" ||
			            typeof console.log === "object") {
			            console.log(message);
			        }
			    }
			};

			CapturedTrace.unhandledRejection = function (reason) {
			    CapturedTrace.formatAndLogError(reason, "^--- With additional stack trace: ");
			};

			CapturedTrace.isSupported = function () {
			    return typeof captureStackTrace === "function";
			};

			CapturedTrace.fireRejectionEvent =
			function(name, localHandler, reason, promise) {
			    var localEventFired = false;
			    try {
			        if (typeof localHandler === "function") {
			            localEventFired = true;
			            if (name === "rejectionHandled") {
			                localHandler(promise);
			            } else {
			                localHandler(reason, promise);
			            }
			        }
			    } catch (e) {
			        async.throwLater(e);
			    }

			    var globalEventFired = false;
			    try {
			        globalEventFired = fireGlobalEvent(name, reason, promise);
			    } catch (e) {
			        globalEventFired = true;
			        async.throwLater(e);
			    }

			    var domEventFired = false;
			    if (fireDomEvent) {
			        try {
			            domEventFired = fireDomEvent(name.toLowerCase(), {
			                reason: reason,
			                promise: promise
			            });
			        } catch (e) {
			            domEventFired = true;
			            async.throwLater(e);
			        }
			    }

			    if (!globalEventFired && !localEventFired && !domEventFired &&
			        name === "unhandledRejection") {
			        CapturedTrace.formatAndLogError(reason, "Unhandled rejection ");
			    }
			};

			function formatNonError(obj) {
			    var str;
			    if (typeof obj === "function") {
			        str = "[function " +
			            (obj.name || "anonymous") +
			            "]";
			    } else {
			        str = obj.toString();
			        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
			        if (ruselessToString.test(str)) {
			            try {
			                var newStr = JSON.stringify(obj);
			                str = newStr;
			            }
			            catch(e) {

			            }
			        }
			        if (str.length === 0) {
			            str = "(empty array)";
			        }
			    }
			    return ("(<" + snip(str) + ">, no stack trace)");
			}

			function snip(str) {
			    var maxChars = 41;
			    if (str.length < maxChars) {
			        return str;
			    }
			    return str.substr(0, maxChars - 3) + "...";
			}

			var shouldIgnore = function() { return false; };
			var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
			function parseLineInfo(line) {
			    var matches = line.match(parseLineInfoRegex);
			    if (matches) {
			        return {
			            fileName: matches[1],
			            line: parseInt(matches[2], 10)
			        };
			    }
			}
			CapturedTrace.setBounds = function(firstLineError, lastLineError) {
			    if (!CapturedTrace.isSupported()) return;
			    var firstStackLines = firstLineError.stack.split("\n");
			    var lastStackLines = lastLineError.stack.split("\n");
			    var firstIndex = -1;
			    var lastIndex = -1;
			    var firstFileName;
			    var lastFileName;
			    for (var i = 0; i < firstStackLines.length; ++i) {
			        var result = parseLineInfo(firstStackLines[i]);
			        if (result) {
			            firstFileName = result.fileName;
			            firstIndex = result.line;
			            break;
			        }
			    }
			    for (var i = 0; i < lastStackLines.length; ++i) {
			        var result = parseLineInfo(lastStackLines[i]);
			        if (result) {
			            lastFileName = result.fileName;
			            lastIndex = result.line;
			            break;
			        }
			    }
			    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
			        firstFileName !== lastFileName || firstIndex >= lastIndex) {
			        return;
			    }

			    shouldIgnore = function(line) {
			        if (bluebirdFramePattern.test(line)) return true;
			        var info = parseLineInfo(line);
			        if (info) {
			            if (info.fileName === firstFileName &&
			                (firstIndex <= info.line && info.line <= lastIndex)) {
			                return true;
			            }
			        }
			        return false;
			    };
			};

			var captureStackTrace = (function stackDetection() {
			    var v8stackFramePattern = /^\s*at\s*/;
			    var v8stackFormatter = function(stack, error) {
			        if (typeof stack === "string") return stack;

			        if (error.name !== undefined &&
			            error.message !== undefined) {
			            return error.toString();
			        }
			        return formatNonError(error);
			    };

			    if (typeof Error.stackTraceLimit === "number" &&
			        typeof Error.captureStackTrace === "function") {
			        Error.stackTraceLimit = Error.stackTraceLimit + 6;
			        stackFramePattern = v8stackFramePattern;
			        formatStack = v8stackFormatter;
			        var captureStackTrace = Error.captureStackTrace;

			        shouldIgnore = function(line) {
			            return bluebirdFramePattern.test(line);
			        };
			        return function(receiver, ignoreUntil) {
			            Error.stackTraceLimit = Error.stackTraceLimit + 6;
			            captureStackTrace(receiver, ignoreUntil);
			            Error.stackTraceLimit = Error.stackTraceLimit - 6;
			        };
			    }
			    var err = new Error();

			    if (typeof err.stack === "string" &&
			        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
			        stackFramePattern = /@/;
			        formatStack = v8stackFormatter;
			        indentStackFrames = true;
			        return function captureStackTrace(o) {
			            o.stack = new Error().stack;
			        };
			    }

			    var hasStackAfterThrow;
			    try { throw new Error(); }
			    catch(e) {
			        hasStackAfterThrow = ("stack" in e);
			    }
			    if (!("stack" in err) && hasStackAfterThrow &&
			        typeof Error.stackTraceLimit === "number") {
			        stackFramePattern = v8stackFramePattern;
			        formatStack = v8stackFormatter;
			        return function captureStackTrace(o) {
			            Error.stackTraceLimit = Error.stackTraceLimit + 6;
			            try { throw new Error(); }
			            catch(e) { o.stack = e.stack; }
			            Error.stackTraceLimit = Error.stackTraceLimit - 6;
			        };
			    }

			    formatStack = function(stack, error) {
			        if (typeof stack === "string") return stack;

			        if ((typeof error === "object" ||
			            typeof error === "function") &&
			            error.name !== undefined &&
			            error.message !== undefined) {
			            return error.toString();
			        }
			        return formatNonError(error);
			    };

			    return null;

			})([]);

			var fireDomEvent;
			var fireGlobalEvent = (function() {
			    if (util.isNode) {
			        return function(name, reason, promise) {
			            if (name === "rejectionHandled") {
			                return process.emit(name, promise);
			            } else {
			                return process.emit(name, reason, promise);
			            }
			        };
			    } else {
			        var customEventWorks = false;
			        var anyEventWorks = true;
			        try {
			            var ev = new self.CustomEvent("test");
			            customEventWorks = ev instanceof CustomEvent;
			        } catch (e) {}
			        if (!customEventWorks) {
			            try {
			                var event = document.createEvent("CustomEvent");
			                event.initCustomEvent("testingtheevent", false, true, {});
			                self.dispatchEvent(event);
			            } catch (e) {
			                anyEventWorks = false;
			            }
			        }
			        if (anyEventWorks) {
			            fireDomEvent = function(type, detail) {
			                var event;
			                if (customEventWorks) {
			                    event = new self.CustomEvent(type, {
			                        detail: detail,
			                        bubbles: false,
			                        cancelable: true
			                    });
			                } else if (self.dispatchEvent) {
			                    event = document.createEvent("CustomEvent");
			                    event.initCustomEvent(type, false, true, detail);
			                }

			                return event ? !self.dispatchEvent(event) : false;
			            };
			        }

			        var toWindowMethodNameMap = {};
			        toWindowMethodNameMap["unhandledRejection"] = ("on" +
			            "unhandledRejection").toLowerCase();
			        toWindowMethodNameMap["rejectionHandled"] = ("on" +
			            "rejectionHandled").toLowerCase();

			        return function(name, reason, promise) {
			            var methodName = toWindowMethodNameMap[name];
			            var method = self[methodName];
			            if (!method) return false;
			            if (name === "rejectionHandled") {
			                method.call(self, promise);
			            } else {
			                method.call(self, reason, promise);
			            }
			            return true;
			        };
			    }
			})();

			if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
			    warn = function (message) {
			        console.warn(message);
			    };
			    if (util.isNode && process.stderr.isTTY) {
			        warn = function(message) {
			            process.stderr.write("\u001b[31m" + message + "\u001b[39m\n");
			        };
			    } else if (!util.isNode && typeof (new Error().stack) === "string") {
			        warn = function(message) {
			            console.warn("%c" + message, "color: red");
			        };
			    }
			}

			return CapturedTrace;
			};


		/***/ },
		/* 14 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise, CapturedTrace) {
			var getDomain = Promise._getDomain;
			var async = __webpack_require__(7);
			var Warning = __webpack_require__(10).Warning;
			var util = __webpack_require__(5);
			var canAttachTrace = util.canAttachTrace;
			var unhandledRejectionHandled;
			var possiblyUnhandledRejection;
			var debugging = false || (util.isNode &&
			                    (!!process.env["BLUEBIRD_DEBUG"] ||
			                     process.env["NODE_ENV"] === "development"));

			if (debugging) {
			    async.disableTrampolineIfNecessary();
			}

			Promise.prototype._ignoreRejections = function() {
			    this._unsetRejectionIsUnhandled();
			    this._bitField = this._bitField | 16777216;
			};

			Promise.prototype._ensurePossibleRejectionHandled = function () {
			    if ((this._bitField & 16777216) !== 0) return;
			    this._setRejectionIsUnhandled();
			    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
			};

			Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
			    CapturedTrace.fireRejectionEvent("rejectionHandled",
			                                  unhandledRejectionHandled, undefined, this);
			};

			Promise.prototype._notifyUnhandledRejection = function () {
			    if (this._isRejectionUnhandled()) {
			        var reason = this._getCarriedStackTrace() || this._settledValue;
			        this._setUnhandledRejectionIsNotified();
			        CapturedTrace.fireRejectionEvent("unhandledRejection",
			                                      possiblyUnhandledRejection, reason, this);
			    }
			};

			Promise.prototype._setUnhandledRejectionIsNotified = function () {
			    this._bitField = this._bitField | 524288;
			};

			Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
			    this._bitField = this._bitField & (~524288);
			};

			Promise.prototype._isUnhandledRejectionNotified = function () {
			    return (this._bitField & 524288) > 0;
			};

			Promise.prototype._setRejectionIsUnhandled = function () {
			    this._bitField = this._bitField | 2097152;
			};

			Promise.prototype._unsetRejectionIsUnhandled = function () {
			    this._bitField = this._bitField & (~2097152);
			    if (this._isUnhandledRejectionNotified()) {
			        this._unsetUnhandledRejectionIsNotified();
			        this._notifyUnhandledRejectionIsHandled();
			    }
			};

			Promise.prototype._isRejectionUnhandled = function () {
			    return (this._bitField & 2097152) > 0;
			};

			Promise.prototype._setCarriedStackTrace = function (capturedTrace) {
			    this._bitField = this._bitField | 1048576;
			    this._fulfillmentHandler0 = capturedTrace;
			};

			Promise.prototype._isCarryingStackTrace = function () {
			    return (this._bitField & 1048576) > 0;
			};

			Promise.prototype._getCarriedStackTrace = function () {
			    return this._isCarryingStackTrace()
			        ? this._fulfillmentHandler0
			        : undefined;
			};

			Promise.prototype._captureStackTrace = function () {
			    if (debugging) {
			        this._trace = new CapturedTrace(this._peekContext());
			    }
			    return this;
			};

			Promise.prototype._attachExtraTrace = function (error, ignoreSelf) {
			    if (debugging && canAttachTrace(error)) {
			        var trace = this._trace;
			        if (trace !== undefined) {
			            if (ignoreSelf) trace = trace._parent;
			        }
			        if (trace !== undefined) {
			            trace.attachExtraTrace(error);
			        } else if (!error.__stackCleaned__) {
			            var parsed = CapturedTrace.parseStackAndMessage(error);
			            util.notEnumerableProp(error, "stack",
			                parsed.message + "\n" + parsed.stack.join("\n"));
			            util.notEnumerableProp(error, "__stackCleaned__", true);
			        }
			    }
			};

			Promise.prototype._warn = function(message) {
			    var warning = new Warning(message);
			    var ctx = this._peekContext();
			    if (ctx) {
			        ctx.attachExtraTrace(warning);
			    } else {
			        var parsed = CapturedTrace.parseStackAndMessage(warning);
			        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
			    }
			    CapturedTrace.formatAndLogError(warning, "");
			};

			Promise.onPossiblyUnhandledRejection = function (fn) {
			    var domain = getDomain();
			    possiblyUnhandledRejection =
			        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
			                                 : undefined;
			};

			Promise.onUnhandledRejectionHandled = function (fn) {
			    var domain = getDomain();
			    unhandledRejectionHandled =
			        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
			                                 : undefined;
			};

			Promise.longStackTraces = function () {
			    if (async.haveItemsQueued() &&
			        debugging === false
			   ) {
			        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/DT1qyG\u000a");
			    }
			    debugging = CapturedTrace.isSupported();
			    if (debugging) {
			        async.disableTrampolineIfNecessary();
			    }
			};

			Promise.hasLongStackTraces = function () {
			    return debugging && CapturedTrace.isSupported();
			};

			if (!CapturedTrace.isSupported()) {
			    Promise.longStackTraces = function(){};
			    debugging = false;
			}

			return function() {
			    return debugging;
			};
			};


		/***/ },
		/* 15 */
		/***/ function(module, exports) {

			"use strict";
			module.exports = function(Promise, CapturedTrace, isDebugging) {
			var contextStack = [];
			function Context() {
			    this._trace = new CapturedTrace(peekContext());
			}
			Context.prototype._pushContext = function () {
			    if (!isDebugging()) return;
			    if (this._trace !== undefined) {
			        contextStack.push(this._trace);
			    }
			};

			Context.prototype._popContext = function () {
			    if (!isDebugging()) return;
			    if (this._trace !== undefined) {
			        contextStack.pop();
			    }
			};

			function createContext() {
			    if (isDebugging()) return new Context();
			}

			function peekContext() {
			    var lastIndex = contextStack.length - 1;
			    if (lastIndex >= 0) {
			        return contextStack[lastIndex];
			    }
			    return undefined;
			}

			Promise.prototype._peekContext = peekContext;
			Promise.prototype._pushContext = Context.prototype._pushContext;
			Promise.prototype._popContext = Context.prototype._popContext;

			return createContext;
			};


		/***/ },
		/* 16 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(NEXT_FILTER) {
			var util = __webpack_require__(5);
			var errors = __webpack_require__(10);
			var tryCatch = util.tryCatch;
			var errorObj = util.errorObj;
			var keys = __webpack_require__(6).keys;
			var TypeError = errors.TypeError;

			function CatchFilter(instances, callback, promise) {
			    this._instances = instances;
			    this._callback = callback;
			    this._promise = promise;
			}

			function safePredicate(predicate, e) {
			    var safeObject = {};
			    var retfilter = tryCatch(predicate).call(safeObject, e);

			    if (retfilter === errorObj) return retfilter;

			    var safeKeys = keys(safeObject);
			    if (safeKeys.length) {
			        errorObj.e = new TypeError("Catch filter must inherit from Error or be a simple predicate function\u000a\u000a    See http://goo.gl/o84o68\u000a");
			        return errorObj;
			    }
			    return retfilter;
			}

			CatchFilter.prototype.doFilter = function (e) {
			    var cb = this._callback;
			    var promise = this._promise;
			    var boundTo = promise._boundValue();
			    for (var i = 0, len = this._instances.length; i < len; ++i) {
			        var item = this._instances[i];
			        var itemIsErrorType = item === Error ||
			            (item != null && item.prototype instanceof Error);

			        if (itemIsErrorType && e instanceof item) {
			            var ret = tryCatch(cb).call(boundTo, e);
			            if (ret === errorObj) {
			                NEXT_FILTER.e = ret.e;
			                return NEXT_FILTER;
			            }
			            return ret;
			        } else if (typeof item === "function" && !itemIsErrorType) {
			            var shouldHandle = safePredicate(item, e);
			            if (shouldHandle === errorObj) {
			                e = errorObj.e;
			                break;
			            } else if (shouldHandle) {
			                var ret = tryCatch(cb).call(boundTo, e);
			                if (ret === errorObj) {
			                    NEXT_FILTER.e = ret.e;
			                    return NEXT_FILTER;
			                }
			                return ret;
			            }
			        }
			    }
			    NEXT_FILTER.e = e;
			    return NEXT_FILTER;
			};

			return CatchFilter;
			};


		/***/ },
		/* 17 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			var util = __webpack_require__(5);
			var maybeWrapAsError = util.maybeWrapAsError;
			var errors = __webpack_require__(10);
			var TimeoutError = errors.TimeoutError;
			var OperationalError = errors.OperationalError;
			var haveGetters = util.haveGetters;
			var es5 = __webpack_require__(6);

			function isUntypedError(obj) {
			    return obj instanceof Error &&
			        es5.getPrototypeOf(obj) === Error.prototype;
			}

			var rErrorKey = /^(?:name|message|stack|cause)$/;
			function wrapAsOperationalError(obj) {
			    var ret;
			    if (isUntypedError(obj)) {
			        ret = new OperationalError(obj);
			        ret.name = obj.name;
			        ret.message = obj.message;
			        ret.stack = obj.stack;
			        var keys = es5.keys(obj);
			        for (var i = 0; i < keys.length; ++i) {
			            var key = keys[i];
			            if (!rErrorKey.test(key)) {
			                ret[key] = obj[key];
			            }
			        }
			        return ret;
			    }
			    util.markAsOriginatingFromRejection(obj);
			    return obj;
			}

			function nodebackForPromise(promise) {
			    return function(err, value) {
			        if (promise === null) return;

			        if (err) {
			            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
			            promise._attachExtraTrace(wrapped);
			            promise._reject(wrapped);
			        } else if (arguments.length > 2) {
			            var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
			            promise._fulfill(args);
			        } else {
			            promise._fulfill(value);
			        }

			        promise = null;
			    };
			}


			var PromiseResolver;
			if (!haveGetters) {
			    PromiseResolver = function (promise) {
			        this.promise = promise;
			        this.asCallback = nodebackForPromise(promise);
			        this.callback = this.asCallback;
			    };
			}
			else {
			    PromiseResolver = function (promise) {
			        this.promise = promise;
			    };
			}
			if (haveGetters) {
			    var prop = {
			        get: function() {
			            return nodebackForPromise(this.promise);
			        }
			    };
			    es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
			    es5.defineProperty(PromiseResolver.prototype, "callback", prop);
			}

			PromiseResolver._nodebackForPromise = nodebackForPromise;

			PromiseResolver.prototype.toString = function () {
			    return "[object PromiseResolver]";
			};

			PromiseResolver.prototype.resolve =
			PromiseResolver.prototype.fulfill = function (value) {
			    if (!(this instanceof PromiseResolver)) {
			        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
			    }
			    this.promise._resolveCallback(value);
			};

			PromiseResolver.prototype.reject = function (reason) {
			    if (!(this instanceof PromiseResolver)) {
			        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
			    }
			    this.promise._rejectCallback(reason);
			};

			PromiseResolver.prototype.progress = function (value) {
			    if (!(this instanceof PromiseResolver)) {
			        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
			    }
			    this.promise._progress(value);
			};

			PromiseResolver.prototype.cancel = function (err) {
			    this.promise.cancel(err);
			};

			PromiseResolver.prototype.timeout = function () {
			    this.reject(new TimeoutError("timeout"));
			};

			PromiseResolver.prototype.isResolved = function () {
			    return this.promise.isResolved();
			};

			PromiseResolver.prototype.toJSON = function () {
			    return this.promise.toJSON();
			};

			module.exports = PromiseResolver;


		/***/ },
		/* 18 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise, PromiseArray) {
			var util = __webpack_require__(5);
			var async = __webpack_require__(7);
			var tryCatch = util.tryCatch;
			var errorObj = util.errorObj;

			Promise.prototype.progressed = function (handler) {
			    return this._then(undefined, undefined, handler, undefined, undefined);
			};

			Promise.prototype._progress = function (progressValue) {
			    if (this._isFollowingOrFulfilledOrRejected()) return;
			    this._target()._progressUnchecked(progressValue);

			};

			Promise.prototype._progressHandlerAt = function (index) {
			    return index === 0
			        ? this._progressHandler0
			        : this[(index << 2) + index - 5 + 2];
			};

			Promise.prototype._doProgressWith = function (progression) {
			    var progressValue = progression.value;
			    var handler = progression.handler;
			    var promise = progression.promise;
			    var receiver = progression.receiver;

			    var ret = tryCatch(handler).call(receiver, progressValue);
			    if (ret === errorObj) {
			        if (ret.e != null &&
			            ret.e.name !== "StopProgressPropagation") {
			            var trace = util.canAttachTrace(ret.e)
			                ? ret.e : new Error(util.toString(ret.e));
			            promise._attachExtraTrace(trace);
			            promise._progress(ret.e);
			        }
			    } else if (ret instanceof Promise) {
			        ret._then(promise._progress, null, null, promise, undefined);
			    } else {
			        promise._progress(ret);
			    }
			};


			Promise.prototype._progressUnchecked = function (progressValue) {
			    var len = this._length();
			    var progress = this._progress;
			    for (var i = 0; i < len; i++) {
			        var handler = this._progressHandlerAt(i);
			        var promise = this._promiseAt(i);
			        if (!(promise instanceof Promise)) {
			            var receiver = this._receiverAt(i);
			            if (typeof handler === "function") {
			                handler.call(receiver, progressValue, promise);
			            } else if (receiver instanceof PromiseArray &&
			                       !receiver._isResolved()) {
			                receiver._promiseProgressed(progressValue, promise);
			            }
			            continue;
			        }

			        if (typeof handler === "function") {
			            async.invoke(this._doProgressWith, this, {
			                handler: handler,
			                promise: promise,
			                receiver: this._receiverAt(i),
			                value: progressValue
			            });
			        } else {
			            async.invoke(progress, promise, progressValue);
			        }
			    }
			};
			};


		/***/ },
		/* 19 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports =
			function(Promise, INTERNAL, tryConvertToPromise, apiRejection) {
			var util = __webpack_require__(5);
			var tryCatch = util.tryCatch;

			Promise.method = function (fn) {
			    if (typeof fn !== "function") {
			        throw new Promise.TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
			    }
			    return function () {
			        var ret = new Promise(INTERNAL);
			        ret._captureStackTrace();
			        ret._pushContext();
			        var value = tryCatch(fn).apply(this, arguments);
			        ret._popContext();
			        ret._resolveFromSyncValue(value);
			        return ret;
			    };
			};

			Promise.attempt = Promise["try"] = function (fn, args, ctx) {
			    if (typeof fn !== "function") {
			        return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
			    }
			    var ret = new Promise(INTERNAL);
			    ret._captureStackTrace();
			    ret._pushContext();
			    var value = util.isArray(args)
			        ? tryCatch(fn).apply(ctx, args)
			        : tryCatch(fn).call(ctx, args);
			    ret._popContext();
			    ret._resolveFromSyncValue(value);
			    return ret;
			};

			Promise.prototype._resolveFromSyncValue = function (value) {
			    if (value === util.errorObj) {
			        this._rejectCallback(value.e, false, true);
			    } else {
			        this._resolveCallback(value, true);
			    }
			};
			};


		/***/ },
		/* 20 */
		/***/ function(module, exports) {

			"use strict";
			module.exports = function(Promise, INTERNAL, tryConvertToPromise) {
			var rejectThis = function(_, e) {
			    this._reject(e);
			};

			var targetRejected = function(e, context) {
			    context.promiseRejectionQueued = true;
			    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
			};

			var bindingResolved = function(thisArg, context) {
			    if (this._isPending()) {
			        this._resolveCallback(context.target);
			    }
			};

			var bindingRejected = function(e, context) {
			    if (!context.promiseRejectionQueued) this._reject(e);
			};

			Promise.prototype.bind = function (thisArg) {
			    var maybePromise = tryConvertToPromise(thisArg);
			    var ret = new Promise(INTERNAL);
			    ret._propagateFrom(this, 1);
			    var target = this._target();

			    ret._setBoundTo(maybePromise);
			    if (maybePromise instanceof Promise) {
			        var context = {
			            promiseRejectionQueued: false,
			            promise: ret,
			            target: target,
			            bindingPromise: maybePromise
			        };
			        target._then(INTERNAL, targetRejected, ret._progress, ret, context);
			        maybePromise._then(
			            bindingResolved, bindingRejected, ret._progress, ret, context);
			    } else {
			        ret._resolveCallback(target);
			    }
			    return ret;
			};

			Promise.prototype._setBoundTo = function (obj) {
			    if (obj !== undefined) {
			        this._bitField = this._bitField | 131072;
			        this._boundTo = obj;
			    } else {
			        this._bitField = this._bitField & (~131072);
			    }
			};

			Promise.prototype._isBound = function () {
			    return (this._bitField & 131072) === 131072;
			};

			Promise.bind = function (thisArg, value) {
			    var maybePromise = tryConvertToPromise(thisArg);
			    var ret = new Promise(INTERNAL);

			    ret._setBoundTo(maybePromise);
			    if (maybePromise instanceof Promise) {
			        maybePromise._then(function() {
			            ret._resolveCallback(value);
			        }, ret._reject, ret._progress, ret, null);
			    } else {
			        ret._resolveCallback(value);
			    }
			    return ret;
			};
			};


		/***/ },
		/* 21 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise, NEXT_FILTER, tryConvertToPromise) {
			var util = __webpack_require__(5);
			var isPrimitive = util.isPrimitive;
			var thrower = util.thrower;

			function returnThis() {
			    return this;
			}
			function throwThis() {
			    throw this;
			}
			function return$(r) {
			    return function() {
			        return r;
			    };
			}
			function throw$(r) {
			    return function() {
			        throw r;
			    };
			}
			function promisedFinally(ret, reasonOrValue, isFulfilled) {
			    var then;
			    if (isPrimitive(reasonOrValue)) {
			        then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
			    } else {
			        then = isFulfilled ? returnThis : throwThis;
			    }
			    return ret._then(then, thrower, undefined, reasonOrValue, undefined);
			}

			function finallyHandler(reasonOrValue) {
			    var promise = this.promise;
			    var handler = this.handler;

			    var ret = promise._isBound()
			                    ? handler.call(promise._boundValue())
			                    : handler();

			    if (ret !== undefined) {
			        var maybePromise = tryConvertToPromise(ret, promise);
			        if (maybePromise instanceof Promise) {
			            maybePromise = maybePromise._target();
			            return promisedFinally(maybePromise, reasonOrValue,
			                                    promise.isFulfilled());
			        }
			    }

			    if (promise.isRejected()) {
			        NEXT_FILTER.e = reasonOrValue;
			        return NEXT_FILTER;
			    } else {
			        return reasonOrValue;
			    }
			}

			function tapHandler(value) {
			    var promise = this.promise;
			    var handler = this.handler;

			    var ret = promise._isBound()
			                    ? handler.call(promise._boundValue(), value)
			                    : handler(value);

			    if (ret !== undefined) {
			        var maybePromise = tryConvertToPromise(ret, promise);
			        if (maybePromise instanceof Promise) {
			            maybePromise = maybePromise._target();
			            return promisedFinally(maybePromise, value, true);
			        }
			    }
			    return value;
			}

			Promise.prototype._passThroughHandler = function (handler, isFinally) {
			    if (typeof handler !== "function") return this.then();

			    var promiseAndHandler = {
			        promise: this,
			        handler: handler
			    };

			    return this._then(
			            isFinally ? finallyHandler : tapHandler,
			            isFinally ? finallyHandler : undefined, undefined,
			            promiseAndHandler, undefined);
			};

			Promise.prototype.lastly =
			Promise.prototype["finally"] = function (handler) {
			    return this._passThroughHandler(handler, true);
			};

			Promise.prototype.tap = function (handler) {
			    return this._passThroughHandler(handler, false);
			};
			};


		/***/ },
		/* 22 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			var util = __webpack_require__(5);
			var isPrimitive = util.isPrimitive;

			module.exports = function(Promise) {
			var returner = function () {
			    return this;
			};
			var thrower = function () {
			    throw this;
			};
			var returnUndefined = function() {};
			var throwUndefined = function() {
			    throw undefined;
			};

			var wrapper = function (value, action) {
			    if (action === 1) {
			        return function () {
			            throw value;
			        };
			    } else if (action === 2) {
			        return function () {
			            return value;
			        };
			    }
			};


			Promise.prototype["return"] =
			Promise.prototype.thenReturn = function (value) {
			    if (value === undefined) return this.then(returnUndefined);

			    if (isPrimitive(value)) {
			        return this._then(
			            wrapper(value, 2),
			            undefined,
			            undefined,
			            undefined,
			            undefined
			       );
			    }
			    return this._then(returner, undefined, undefined, value, undefined);
			};

			Promise.prototype["throw"] =
			Promise.prototype.thenThrow = function (reason) {
			    if (reason === undefined) return this.then(throwUndefined);

			    if (isPrimitive(reason)) {
			        return this._then(
			            wrapper(reason, 1),
			            undefined,
			            undefined,
			            undefined,
			            undefined
			       );
			    }
			    return this._then(thrower, undefined, undefined, reason, undefined);
			};
			};


		/***/ },
		/* 23 */
		/***/ function(module, exports) {

			"use strict";
			module.exports = function(Promise) {
			function PromiseInspection(promise) {
			    if (promise !== undefined) {
			        promise = promise._target();
			        this._bitField = promise._bitField;
			        this._settledValue = promise._settledValue;
			    }
			    else {
			        this._bitField = 0;
			        this._settledValue = undefined;
			    }
			}

			PromiseInspection.prototype.value = function () {
			    if (!this.isFulfilled()) {
			        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/hc1DLj\u000a");
			    }
			    return this._settledValue;
			};

			PromiseInspection.prototype.error =
			PromiseInspection.prototype.reason = function () {
			    if (!this.isRejected()) {
			        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/hPuiwB\u000a");
			    }
			    return this._settledValue;
			};

			PromiseInspection.prototype.isFulfilled =
			Promise.prototype._isFulfilled = function () {
			    return (this._bitField & 268435456) > 0;
			};

			PromiseInspection.prototype.isRejected =
			Promise.prototype._isRejected = function () {
			    return (this._bitField & 134217728) > 0;
			};

			PromiseInspection.prototype.isPending =
			Promise.prototype._isPending = function () {
			    return (this._bitField & 402653184) === 0;
			};

			PromiseInspection.prototype.isResolved =
			Promise.prototype._isResolved = function () {
			    return (this._bitField & 402653184) > 0;
			};

			Promise.prototype.isPending = function() {
			    return this._target()._isPending();
			};

			Promise.prototype.isRejected = function() {
			    return this._target()._isRejected();
			};

			Promise.prototype.isFulfilled = function() {
			    return this._target()._isFulfilled();
			};

			Promise.prototype.isResolved = function() {
			    return this._target()._isResolved();
			};

			Promise.prototype._value = function() {
			    return this._settledValue;
			};

			Promise.prototype._reason = function() {
			    this._unsetRejectionIsUnhandled();
			    return this._settledValue;
			};

			Promise.prototype.value = function() {
			    var target = this._target();
			    if (!target.isFulfilled()) {
			        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/hc1DLj\u000a");
			    }
			    return target._settledValue;
			};

			Promise.prototype.reason = function() {
			    var target = this._target();
			    if (!target.isRejected()) {
			        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/hPuiwB\u000a");
			    }
			    target._unsetRejectionIsUnhandled();
			    return target._settledValue;
			};


			Promise.PromiseInspection = PromiseInspection;
			};


		/***/ },
		/* 24 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports =
			function(Promise, PromiseArray, tryConvertToPromise, INTERNAL) {
			var util = __webpack_require__(5);
			var canEvaluate = util.canEvaluate;
			var tryCatch = util.tryCatch;
			var errorObj = util.errorObj;
			var reject;

			if (true) {
			if (canEvaluate) {
			    var thenCallback = function(i) {
			        return new Function("value", "holder", "                             \n\
			            'use strict';                                                    \n\
			            holder.pIndex = value;                                           \n\
			            holder.checkFulfillment(this);                                   \n\
			            ".replace(/Index/g, i));
			    };

			    var caller = function(count) {
			        var values = [];
			        for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
			        return new Function("holder", "                                      \n\
			            'use strict';                                                    \n\
			            var callback = holder.fn;                                        \n\
			            return callback(values);                                         \n\
			            ".replace(/values/g, values.join(", ")));
			    };
			    var thenCallbacks = [];
			    var callers = [undefined];
			    for (var i = 1; i <= 5; ++i) {
			        thenCallbacks.push(thenCallback(i));
			        callers.push(caller(i));
			    }

			    var Holder = function(total, fn) {
			        this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
			        this.fn = fn;
			        this.total = total;
			        this.now = 0;
			    };

			    Holder.prototype.callers = callers;
			    Holder.prototype.checkFulfillment = function(promise) {
			        var now = this.now;
			        now++;
			        var total = this.total;
			        if (now >= total) {
			            var handler = this.callers[total];
			            promise._pushContext();
			            var ret = tryCatch(handler)(this);
			            promise._popContext();
			            if (ret === errorObj) {
			                promise._rejectCallback(ret.e, false, true);
			            } else {
			                promise._resolveCallback(ret);
			            }
			        } else {
			            this.now = now;
			        }
			    };

			    var reject = function (reason) {
			        this._reject(reason);
			    };
			}
			}

			Promise.join = function () {
			    var last = arguments.length - 1;
			    var fn;
			    if (last > 0 && typeof arguments[last] === "function") {
			        fn = arguments[last];
			        if (true) {
			            if (last < 6 && canEvaluate) {
			                var ret = new Promise(INTERNAL);
			                ret._captureStackTrace();
			                var holder = new Holder(last, fn);
			                var callbacks = thenCallbacks;
			                for (var i = 0; i < last; ++i) {
			                    var maybePromise = tryConvertToPromise(arguments[i], ret);
			                    if (maybePromise instanceof Promise) {
			                        maybePromise = maybePromise._target();
			                        if (maybePromise._isPending()) {
			                            maybePromise._then(callbacks[i], reject,
			                                               undefined, ret, holder);
			                        } else if (maybePromise._isFulfilled()) {
			                            callbacks[i].call(ret,
			                                              maybePromise._value(), holder);
			                        } else {
			                            ret._reject(maybePromise._reason());
			                        }
			                    } else {
			                        callbacks[i].call(ret, maybePromise, holder);
			                    }
			                }
			                return ret;
			            }
			        }
			    }
			    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
			    if (fn) args.pop();
			    var ret = new PromiseArray(args).promise();
			    return fn !== undefined ? ret.spread(fn) : ret;
			};

			};


		/***/ },
		/* 25 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise,
			                          PromiseArray,
			                          apiRejection,
			                          tryConvertToPromise,
			                          INTERNAL) {
			var getDomain = Promise._getDomain;
			var async = __webpack_require__(7);
			var util = __webpack_require__(5);
			var tryCatch = util.tryCatch;
			var errorObj = util.errorObj;
			var PENDING = {};
			var EMPTY_ARRAY = [];

			function MappingPromiseArray(promises, fn, limit, _filter) {
			    this.constructor$(promises);
			    this._promise._captureStackTrace();
			    var domain = getDomain();
			    this._callback = domain === null ? fn : domain.bind(fn);
			    this._preservedValues = _filter === INTERNAL
			        ? new Array(this.length())
			        : null;
			    this._limit = limit;
			    this._inFlight = 0;
			    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
			    async.invoke(init, this, undefined);
			}
			util.inherits(MappingPromiseArray, PromiseArray);
			function init() {this._init$(undefined, -2);}

			MappingPromiseArray.prototype._init = function () {};

			MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
			    var values = this._values;
			    var length = this.length();
			    var preservedValues = this._preservedValues;
			    var limit = this._limit;
			    if (values[index] === PENDING) {
			        values[index] = value;
			        if (limit >= 1) {
			            this._inFlight--;
			            this._drainQueue();
			            if (this._isResolved()) return;
			        }
			    } else {
			        if (limit >= 1 && this._inFlight >= limit) {
			            values[index] = value;
			            this._queue.push(index);
			            return;
			        }
			        if (preservedValues !== null) preservedValues[index] = value;

			        var callback = this._callback;
			        var receiver = this._promise._boundValue();
			        this._promise._pushContext();
			        var ret = tryCatch(callback).call(receiver, value, index, length);
			        this._promise._popContext();
			        if (ret === errorObj) return this._reject(ret.e);

			        var maybePromise = tryConvertToPromise(ret, this._promise);
			        if (maybePromise instanceof Promise) {
			            maybePromise = maybePromise._target();
			            if (maybePromise._isPending()) {
			                if (limit >= 1) this._inFlight++;
			                values[index] = PENDING;
			                return maybePromise._proxyPromiseArray(this, index);
			            } else if (maybePromise._isFulfilled()) {
			                ret = maybePromise._value();
			            } else {
			                return this._reject(maybePromise._reason());
			            }
			        }
			        values[index] = ret;
			    }
			    var totalResolved = ++this._totalResolved;
			    if (totalResolved >= length) {
			        if (preservedValues !== null) {
			            this._filter(values, preservedValues);
			        } else {
			            this._resolve(values);
			        }

			    }
			};

			MappingPromiseArray.prototype._drainQueue = function () {
			    var queue = this._queue;
			    var limit = this._limit;
			    var values = this._values;
			    while (queue.length > 0 && this._inFlight < limit) {
			        if (this._isResolved()) return;
			        var index = queue.pop();
			        this._promiseFulfilled(values[index], index);
			    }
			};

			MappingPromiseArray.prototype._filter = function (booleans, values) {
			    var len = values.length;
			    var ret = new Array(len);
			    var j = 0;
			    for (var i = 0; i < len; ++i) {
			        if (booleans[i]) ret[j++] = values[i];
			    }
			    ret.length = j;
			    this._resolve(ret);
			};

			MappingPromiseArray.prototype.preservedValues = function () {
			    return this._preservedValues;
			};

			function map(promises, fn, options, _filter) {
			    var limit = typeof options === "object" && options !== null
			        ? options.concurrency
			        : 0;
			    limit = typeof limit === "number" &&
			        isFinite(limit) && limit >= 1 ? limit : 0;
			    return new MappingPromiseArray(promises, fn, limit, _filter);
			}

			Promise.prototype.map = function (fn, options) {
			    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");

			    return map(this, fn, options, null).promise();
			};

			Promise.map = function (promises, fn, options, _filter) {
			    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
			    return map(promises, fn, options, _filter).promise();
			};


			};


		/***/ },
		/* 26 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise) {
			var errors = __webpack_require__(10);
			var async = __webpack_require__(7);
			var CancellationError = errors.CancellationError;

			Promise.prototype._cancel = function (reason) {
			    if (!this.isCancellable()) return this;
			    var parent;
			    var promiseToReject = this;
			    while ((parent = promiseToReject._cancellationParent) !== undefined &&
			        parent.isCancellable()) {
			        promiseToReject = parent;
			    }
			    this._unsetCancellable();
			    promiseToReject._target()._rejectCallback(reason, false, true);
			};

			Promise.prototype.cancel = function (reason) {
			    if (!this.isCancellable()) return this;
			    if (reason === undefined) reason = new CancellationError();
			    async.invokeLater(this._cancel, this, reason);
			    return this;
			};

			Promise.prototype.cancellable = function () {
			    if (this._cancellable()) return this;
			    async.enableTrampoline();
			    this._setCancellable();
			    this._cancellationParent = undefined;
			    return this;
			};

			Promise.prototype.uncancellable = function () {
			    var ret = this.then();
			    ret._unsetCancellable();
			    return ret;
			};

			Promise.prototype.fork = function (didFulfill, didReject, didProgress) {
			    var ret = this._then(didFulfill, didReject, didProgress,
			                         undefined, undefined);

			    ret._setCancellable();
			    ret._cancellationParent = undefined;
			    return ret;
			};
			};


		/***/ },
		/* 27 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function (Promise, apiRejection, tryConvertToPromise,
			    createContext) {
			    var TypeError = __webpack_require__(10).TypeError;
			    var inherits = __webpack_require__(5).inherits;
			    var PromiseInspection = Promise.PromiseInspection;

			    function inspectionMapper(inspections) {
			        var len = inspections.length;
			        for (var i = 0; i < len; ++i) {
			            var inspection = inspections[i];
			            if (inspection.isRejected()) {
			                return Promise.reject(inspection.error());
			            }
			            inspections[i] = inspection._settledValue;
			        }
			        return inspections;
			    }

			    function thrower(e) {
			        setTimeout(function(){throw e;}, 0);
			    }

			    function castPreservingDisposable(thenable) {
			        var maybePromise = tryConvertToPromise(thenable);
			        if (maybePromise !== thenable &&
			            typeof thenable._isDisposable === "function" &&
			            typeof thenable._getDisposer === "function" &&
			            thenable._isDisposable()) {
			            maybePromise._setDisposable(thenable._getDisposer());
			        }
			        return maybePromise;
			    }
			    function dispose(resources, inspection) {
			        var i = 0;
			        var len = resources.length;
			        var ret = Promise.defer();
			        function iterator() {
			            if (i >= len) return ret.resolve();
			            var maybePromise = castPreservingDisposable(resources[i++]);
			            if (maybePromise instanceof Promise &&
			                maybePromise._isDisposable()) {
			                try {
			                    maybePromise = tryConvertToPromise(
			                        maybePromise._getDisposer().tryDispose(inspection),
			                        resources.promise);
			                } catch (e) {
			                    return thrower(e);
			                }
			                if (maybePromise instanceof Promise) {
			                    return maybePromise._then(iterator, thrower,
			                                              null, null, null);
			                }
			            }
			            iterator();
			        }
			        iterator();
			        return ret.promise;
			    }

			    function disposerSuccess(value) {
			        var inspection = new PromiseInspection();
			        inspection._settledValue = value;
			        inspection._bitField = 268435456;
			        return dispose(this, inspection).thenReturn(value);
			    }

			    function disposerFail(reason) {
			        var inspection = new PromiseInspection();
			        inspection._settledValue = reason;
			        inspection._bitField = 134217728;
			        return dispose(this, inspection).thenThrow(reason);
			    }

			    function Disposer(data, promise, context) {
			        this._data = data;
			        this._promise = promise;
			        this._context = context;
			    }

			    Disposer.prototype.data = function () {
			        return this._data;
			    };

			    Disposer.prototype.promise = function () {
			        return this._promise;
			    };

			    Disposer.prototype.resource = function () {
			        if (this.promise().isFulfilled()) {
			            return this.promise().value();
			        }
			        return null;
			    };

			    Disposer.prototype.tryDispose = function(inspection) {
			        var resource = this.resource();
			        var context = this._context;
			        if (context !== undefined) context._pushContext();
			        var ret = resource !== null
			            ? this.doDispose(resource, inspection) : null;
			        if (context !== undefined) context._popContext();
			        this._promise._unsetDisposable();
			        this._data = null;
			        return ret;
			    };

			    Disposer.isDisposer = function (d) {
			        return (d != null &&
			                typeof d.resource === "function" &&
			                typeof d.tryDispose === "function");
			    };

			    function FunctionDisposer(fn, promise, context) {
			        this.constructor$(fn, promise, context);
			    }
			    inherits(FunctionDisposer, Disposer);

			    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
			        var fn = this.data();
			        return fn.call(resource, resource, inspection);
			    };

			    function maybeUnwrapDisposer(value) {
			        if (Disposer.isDisposer(value)) {
			            this.resources[this.index]._setDisposable(value);
			            return value.promise();
			        }
			        return value;
			    }

			    Promise.using = function () {
			        var len = arguments.length;
			        if (len < 2) return apiRejection(
			                        "you must pass at least 2 arguments to Promise.using");
			        var fn = arguments[len - 1];
			        if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
			        len--;
			        var resources = new Array(len);
			        for (var i = 0; i < len; ++i) {
			            var resource = arguments[i];
			            if (Disposer.isDisposer(resource)) {
			                var disposer = resource;
			                resource = resource.promise();
			                resource._setDisposable(disposer);
			            } else {
			                var maybePromise = tryConvertToPromise(resource);
			                if (maybePromise instanceof Promise) {
			                    resource =
			                        maybePromise._then(maybeUnwrapDisposer, null, null, {
			                            resources: resources,
			                            index: i
			                    }, undefined);
			                }
			            }
			            resources[i] = resource;
			        }

			        var promise = Promise.settle(resources)
			            .then(inspectionMapper)
			            .then(function(vals) {
			                promise._pushContext();
			                var ret;
			                try {
			                    ret = fn.apply(undefined, vals);
			                } finally {
			                    promise._popContext();
			                }
			                return ret;
			            })
			            ._then(
			                disposerSuccess, disposerFail, undefined, resources, undefined);
			        resources.promise = promise;
			        return promise;
			    };

			    Promise.prototype._setDisposable = function (disposer) {
			        this._bitField = this._bitField | 262144;
			        this._disposer = disposer;
			    };

			    Promise.prototype._isDisposable = function () {
			        return (this._bitField & 262144) > 0;
			    };

			    Promise.prototype._getDisposer = function () {
			        return this._disposer;
			    };

			    Promise.prototype._unsetDisposable = function () {
			        this._bitField = this._bitField & (~262144);
			        this._disposer = undefined;
			    };

			    Promise.prototype.disposer = function (fn) {
			        if (typeof fn === "function") {
			            return new FunctionDisposer(fn, this, createContext());
			        }
			        throw new TypeError();
			    };

			};


		/***/ },
		/* 28 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise,
			                          apiRejection,
			                          INTERNAL,
			                          tryConvertToPromise) {
			var errors = __webpack_require__(10);
			var TypeError = errors.TypeError;
			var util = __webpack_require__(5);
			var errorObj = util.errorObj;
			var tryCatch = util.tryCatch;
			var yieldHandlers = [];

			function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
			    for (var i = 0; i < yieldHandlers.length; ++i) {
			        traceParent._pushContext();
			        var result = tryCatch(yieldHandlers[i])(value);
			        traceParent._popContext();
			        if (result === errorObj) {
			            traceParent._pushContext();
			            var ret = Promise.reject(errorObj.e);
			            traceParent._popContext();
			            return ret;
			        }
			        var maybePromise = tryConvertToPromise(result, traceParent);
			        if (maybePromise instanceof Promise) return maybePromise;
			    }
			    return null;
			}

			function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
			    var promise = this._promise = new Promise(INTERNAL);
			    promise._captureStackTrace();
			    this._stack = stack;
			    this._generatorFunction = generatorFunction;
			    this._receiver = receiver;
			    this._generator = undefined;
			    this._yieldHandlers = typeof yieldHandler === "function"
			        ? [yieldHandler].concat(yieldHandlers)
			        : yieldHandlers;
			}

			PromiseSpawn.prototype.promise = function () {
			    return this._promise;
			};

			PromiseSpawn.prototype._run = function () {
			    this._generator = this._generatorFunction.call(this._receiver);
			    this._receiver =
			        this._generatorFunction = undefined;
			    this._next(undefined);
			};

			PromiseSpawn.prototype._continue = function (result) {
			    if (result === errorObj) {
			        return this._promise._rejectCallback(result.e, false, true);
			    }

			    var value = result.value;
			    if (result.done === true) {
			        this._promise._resolveCallback(value);
			    } else {
			        var maybePromise = tryConvertToPromise(value, this._promise);
			        if (!(maybePromise instanceof Promise)) {
			            maybePromise =
			                promiseFromYieldHandler(maybePromise,
			                                        this._yieldHandlers,
			                                        this._promise);
			            if (maybePromise === null) {
			                this._throw(
			                    new TypeError(
			                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/4Y4pDk\u000a\u000a".replace("%s", value) +
			                        "From coroutine:\u000a" +
			                        this._stack.split("\n").slice(1, -7).join("\n")
			                    )
			                );
			                return;
			            }
			        }
			        maybePromise._then(
			            this._next,
			            this._throw,
			            undefined,
			            this,
			            null
			       );
			    }
			};

			PromiseSpawn.prototype._throw = function (reason) {
			    this._promise._attachExtraTrace(reason);
			    this._promise._pushContext();
			    var result = tryCatch(this._generator["throw"])
			        .call(this._generator, reason);
			    this._promise._popContext();
			    this._continue(result);
			};

			PromiseSpawn.prototype._next = function (value) {
			    this._promise._pushContext();
			    var result = tryCatch(this._generator.next).call(this._generator, value);
			    this._promise._popContext();
			    this._continue(result);
			};

			Promise.coroutine = function (generatorFunction, options) {
			    if (typeof generatorFunction !== "function") {
			        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/6Vqhm0\u000a");
			    }
			    var yieldHandler = Object(options).yieldHandler;
			    var PromiseSpawn$ = PromiseSpawn;
			    var stack = new Error().stack;
			    return function () {
			        var generator = generatorFunction.apply(this, arguments);
			        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
			                                      stack);
			        spawn._generator = generator;
			        spawn._next(undefined);
			        return spawn.promise();
			    };
			};

			Promise.coroutine.addYieldHandler = function(fn) {
			    if (typeof fn !== "function") throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
			    yieldHandlers.push(fn);
			};

			Promise.spawn = function (generatorFunction) {
			    if (typeof generatorFunction !== "function") {
			        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/6Vqhm0\u000a");
			    }
			    var spawn = new PromiseSpawn(generatorFunction, this);
			    var ret = spawn.promise();
			    spawn._run(Promise.spawn);
			    return ret;
			};
			};


		/***/ },
		/* 29 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise) {
			var util = __webpack_require__(5);
			var async = __webpack_require__(7);
			var tryCatch = util.tryCatch;
			var errorObj = util.errorObj;

			function spreadAdapter(val, nodeback) {
			    var promise = this;
			    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
			    var ret =
			        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
			    if (ret === errorObj) {
			        async.throwLater(ret.e);
			    }
			}

			function successAdapter(val, nodeback) {
			    var promise = this;
			    var receiver = promise._boundValue();
			    var ret = val === undefined
			        ? tryCatch(nodeback).call(receiver, null)
			        : tryCatch(nodeback).call(receiver, null, val);
			    if (ret === errorObj) {
			        async.throwLater(ret.e);
			    }
			}
			function errorAdapter(reason, nodeback) {
			    var promise = this;
			    if (!reason) {
			        var target = promise._target();
			        var newReason = target._getCarriedStackTrace();
			        newReason.cause = reason;
			        reason = newReason;
			    }
			    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
			    if (ret === errorObj) {
			        async.throwLater(ret.e);
			    }
			}

			Promise.prototype.asCallback =
			Promise.prototype.nodeify = function (nodeback, options) {
			    if (typeof nodeback == "function") {
			        var adapter = successAdapter;
			        if (options !== undefined && Object(options).spread) {
			            adapter = spreadAdapter;
			        }
			        this._then(
			            adapter,
			            errorAdapter,
			            undefined,
			            this,
			            nodeback
			        );
			    }
			    return this;
			};
			};


		/***/ },
		/* 30 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			var cr = Object.create;
			if (cr) {
			    var callerCache = cr(null);
			    var getterCache = cr(null);
			    callerCache[" size"] = getterCache[" size"] = 0;
			}

			module.exports = function(Promise) {
			var util = __webpack_require__(5);
			var canEvaluate = util.canEvaluate;
			var isIdentifier = util.isIdentifier;

			var getMethodCaller;
			var getGetter;
			if (true) {
			var makeMethodCaller = function (methodName) {
			    return new Function("ensureMethod", "                                    \n\
			        return function(obj) {                                               \n\
			            'use strict'                                                     \n\
			            var len = this.length;                                           \n\
			            ensureMethod(obj, 'methodName');                                 \n\
			            switch(len) {                                                    \n\
			                case 1: return obj.methodName(this[0]);                      \n\
			                case 2: return obj.methodName(this[0], this[1]);             \n\
			                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
			                case 0: return obj.methodName();                             \n\
			                default:                                                     \n\
			                    return obj.methodName.apply(obj, this);                  \n\
			            }                                                                \n\
			        };                                                                   \n\
			        ".replace(/methodName/g, methodName))(ensureMethod);
			};

			var makeGetter = function (propertyName) {
			    return new Function("obj", "                                             \n\
			        'use strict';                                                        \n\
			        return obj.propertyName;                                             \n\
			        ".replace("propertyName", propertyName));
			};

			var getCompiled = function(name, compiler, cache) {
			    var ret = cache[name];
			    if (typeof ret !== "function") {
			        if (!isIdentifier(name)) {
			            return null;
			        }
			        ret = compiler(name);
			        cache[name] = ret;
			        cache[" size"]++;
			        if (cache[" size"] > 512) {
			            var keys = Object.keys(cache);
			            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
			            cache[" size"] = keys.length - 256;
			        }
			    }
			    return ret;
			};

			getMethodCaller = function(name) {
			    return getCompiled(name, makeMethodCaller, callerCache);
			};

			getGetter = function(name) {
			    return getCompiled(name, makeGetter, getterCache);
			};
			}

			function ensureMethod(obj, methodName) {
			    var fn;
			    if (obj != null) fn = obj[methodName];
			    if (typeof fn !== "function") {
			        var message = "Object " + util.classString(obj) + " has no method '" +
			            util.toString(methodName) + "'";
			        throw new Promise.TypeError(message);
			    }
			    return fn;
			}

			function caller(obj) {
			    var methodName = this.pop();
			    var fn = ensureMethod(obj, methodName);
			    return fn.apply(obj, this);
			}
			Promise.prototype.call = function (methodName) {
			    var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
			    if (true) {
			        if (canEvaluate) {
			            var maybeCaller = getMethodCaller(methodName);
			            if (maybeCaller !== null) {
			                return this._then(
			                    maybeCaller, undefined, undefined, args, undefined);
			            }
			        }
			    }
			    args.push(methodName);
			    return this._then(caller, undefined, undefined, args, undefined);
			};

			function namedGetter(obj) {
			    return obj[this];
			}
			function indexedGetter(obj) {
			    var index = +this;
			    if (index < 0) index = Math.max(0, index + obj.length);
			    return obj[index];
			}
			Promise.prototype.get = function (propertyName) {
			    var isIndex = (typeof propertyName === "number");
			    var getter;
			    if (!isIndex) {
			        if (canEvaluate) {
			            var maybeGetter = getGetter(propertyName);
			            getter = maybeGetter !== null ? maybeGetter : namedGetter;
			        } else {
			            getter = namedGetter;
			        }
			    } else {
			        getter = indexedGetter;
			    }
			    return this._then(getter, undefined, undefined, propertyName, undefined);
			};
			};


		/***/ },
		/* 31 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(
			    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
			var util = __webpack_require__(5);
			var isObject = util.isObject;
			var es5 = __webpack_require__(6);

			function PropertiesPromiseArray(obj) {
			    var keys = es5.keys(obj);
			    var len = keys.length;
			    var values = new Array(len * 2);
			    for (var i = 0; i < len; ++i) {
			        var key = keys[i];
			        values[i] = obj[key];
			        values[i + len] = key;
			    }
			    this.constructor$(values);
			}
			util.inherits(PropertiesPromiseArray, PromiseArray);

			PropertiesPromiseArray.prototype._init = function () {
			    this._init$(undefined, -3) ;
			};

			PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
			    this._values[index] = value;
			    var totalResolved = ++this._totalResolved;
			    if (totalResolved >= this._length) {
			        var val = {};
			        var keyOffset = this.length();
			        for (var i = 0, len = this.length(); i < len; ++i) {
			            val[this._values[i + keyOffset]] = this._values[i];
			        }
			        this._resolve(val);
			    }
			};

			PropertiesPromiseArray.prototype._promiseProgressed = function (value, index) {
			    this._promise._progress({
			        key: this._values[index + this.length()],
			        value: value
			    });
			};

			PropertiesPromiseArray.prototype.shouldCopyValues = function () {
			    return false;
			};

			PropertiesPromiseArray.prototype.getActualLength = function (len) {
			    return len >> 1;
			};

			function props(promises) {
			    var ret;
			    var castValue = tryConvertToPromise(promises);

			    if (!isObject(castValue)) {
			        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/OsFKC8\u000a");
			    } else if (castValue instanceof Promise) {
			        ret = castValue._then(
			            Promise.props, undefined, undefined, undefined, undefined);
			    } else {
			        ret = new PropertiesPromiseArray(castValue).promise();
			    }

			    if (castValue instanceof Promise) {
			        ret._propagateFrom(castValue, 4);
			    }
			    return ret;
			}

			Promise.prototype.props = function () {
			    return props(this);
			};

			Promise.props = function (promises) {
			    return props(promises);
			};
			};


		/***/ },
		/* 32 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(
			    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
			var isArray = __webpack_require__(5).isArray;

			var raceLater = function (promise) {
			    return promise.then(function(array) {
			        return race(array, promise);
			    });
			};

			function race(promises, parent) {
			    var maybePromise = tryConvertToPromise(promises);

			    if (maybePromise instanceof Promise) {
			        return raceLater(maybePromise);
			    } else if (!isArray(promises)) {
			        return apiRejection("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a");
			    }

			    var ret = new Promise(INTERNAL);
			    if (parent !== undefined) {
			        ret._propagateFrom(parent, 4 | 1);
			    }
			    var fulfill = ret._fulfill;
			    var reject = ret._reject;
			    for (var i = 0, len = promises.length; i < len; ++i) {
			        var val = promises[i];

			        if (val === undefined && !(i in promises)) {
			            continue;
			        }

			        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
			    }
			    return ret;
			}

			Promise.race = function (promises) {
			    return race(promises, undefined);
			};

			Promise.prototype.race = function () {
			    return race(this, undefined);
			};

			};


		/***/ },
		/* 33 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise,
			                          PromiseArray,
			                          apiRejection,
			                          tryConvertToPromise,
			                          INTERNAL) {
			var getDomain = Promise._getDomain;
			var async = __webpack_require__(7);
			var util = __webpack_require__(5);
			var tryCatch = util.tryCatch;
			var errorObj = util.errorObj;
			function ReductionPromiseArray(promises, fn, accum, _each) {
			    this.constructor$(promises);
			    this._promise._captureStackTrace();
			    this._preservedValues = _each === INTERNAL ? [] : null;
			    this._zerothIsAccum = (accum === undefined);
			    this._gotAccum = false;
			    this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
			    this._valuesPhase = undefined;
			    var maybePromise = tryConvertToPromise(accum, this._promise);
			    var rejected = false;
			    var isPromise = maybePromise instanceof Promise;
			    if (isPromise) {
			        maybePromise = maybePromise._target();
			        if (maybePromise._isPending()) {
			            maybePromise._proxyPromiseArray(this, -1);
			        } else if (maybePromise._isFulfilled()) {
			            accum = maybePromise._value();
			            this._gotAccum = true;
			        } else {
			            this._reject(maybePromise._reason());
			            rejected = true;
			        }
			    }
			    if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
			    var domain = getDomain();
			    this._callback = domain === null ? fn : domain.bind(fn);
			    this._accum = accum;
			    if (!rejected) async.invoke(init, this, undefined);
			}
			function init() {
			    this._init$(undefined, -5);
			}
			util.inherits(ReductionPromiseArray, PromiseArray);

			ReductionPromiseArray.prototype._init = function () {};

			ReductionPromiseArray.prototype._resolveEmptyArray = function () {
			    if (this._gotAccum || this._zerothIsAccum) {
			        this._resolve(this._preservedValues !== null
			                        ? [] : this._accum);
			    }
			};

			ReductionPromiseArray.prototype._promiseFulfilled = function (value, index) {
			    var values = this._values;
			    values[index] = value;
			    var length = this.length();
			    var preservedValues = this._preservedValues;
			    var isEach = preservedValues !== null;
			    var gotAccum = this._gotAccum;
			    var valuesPhase = this._valuesPhase;
			    var valuesPhaseIndex;
			    if (!valuesPhase) {
			        valuesPhase = this._valuesPhase = new Array(length);
			        for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
			            valuesPhase[valuesPhaseIndex] = 0;
			        }
			    }
			    valuesPhaseIndex = valuesPhase[index];

			    if (index === 0 && this._zerothIsAccum) {
			        this._accum = value;
			        this._gotAccum = gotAccum = true;
			        valuesPhase[index] = ((valuesPhaseIndex === 0)
			            ? 1 : 2);
			    } else if (index === -1) {
			        this._accum = value;
			        this._gotAccum = gotAccum = true;
			    } else {
			        if (valuesPhaseIndex === 0) {
			            valuesPhase[index] = 1;
			        } else {
			            valuesPhase[index] = 2;
			            this._accum = value;
			        }
			    }
			    if (!gotAccum) return;

			    var callback = this._callback;
			    var receiver = this._promise._boundValue();
			    var ret;

			    for (var i = this._reducingIndex; i < length; ++i) {
			        valuesPhaseIndex = valuesPhase[i];
			        if (valuesPhaseIndex === 2) {
			            this._reducingIndex = i + 1;
			            continue;
			        }
			        if (valuesPhaseIndex !== 1) return;
			        value = values[i];
			        this._promise._pushContext();
			        if (isEach) {
			            preservedValues.push(value);
			            ret = tryCatch(callback).call(receiver, value, i, length);
			        }
			        else {
			            ret = tryCatch(callback)
			                .call(receiver, this._accum, value, i, length);
			        }
			        this._promise._popContext();

			        if (ret === errorObj) return this._reject(ret.e);

			        var maybePromise = tryConvertToPromise(ret, this._promise);
			        if (maybePromise instanceof Promise) {
			            maybePromise = maybePromise._target();
			            if (maybePromise._isPending()) {
			                valuesPhase[i] = 4;
			                return maybePromise._proxyPromiseArray(this, i);
			            } else if (maybePromise._isFulfilled()) {
			                ret = maybePromise._value();
			            } else {
			                return this._reject(maybePromise._reason());
			            }
			        }

			        this._reducingIndex = i + 1;
			        this._accum = ret;
			    }

			    this._resolve(isEach ? preservedValues : this._accum);
			};

			function reduce(promises, fn, initialValue, _each) {
			    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
			    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
			    return array.promise();
			}

			Promise.prototype.reduce = function (fn, initialValue) {
			    return reduce(this, fn, initialValue, null);
			};

			Promise.reduce = function (promises, fn, initialValue, _each) {
			    return reduce(promises, fn, initialValue, _each);
			};
			};


		/***/ },
		/* 34 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports =
			    function(Promise, PromiseArray) {
			var PromiseInspection = Promise.PromiseInspection;
			var util = __webpack_require__(5);

			function SettledPromiseArray(values) {
			    this.constructor$(values);
			}
			util.inherits(SettledPromiseArray, PromiseArray);

			SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
			    this._values[index] = inspection;
			    var totalResolved = ++this._totalResolved;
			    if (totalResolved >= this._length) {
			        this._resolve(this._values);
			    }
			};

			SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
			    var ret = new PromiseInspection();
			    ret._bitField = 268435456;
			    ret._settledValue = value;
			    this._promiseResolved(index, ret);
			};
			SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
			    var ret = new PromiseInspection();
			    ret._bitField = 134217728;
			    ret._settledValue = reason;
			    this._promiseResolved(index, ret);
			};

			Promise.settle = function (promises) {
			    return new SettledPromiseArray(promises).promise();
			};

			Promise.prototype.settle = function () {
			    return new SettledPromiseArray(this).promise();
			};
			};


		/***/ },
		/* 35 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports =
			function(Promise, PromiseArray, apiRejection) {
			var util = __webpack_require__(5);
			var RangeError = __webpack_require__(10).RangeError;
			var AggregateError = __webpack_require__(10).AggregateError;
			var isArray = util.isArray;


			function SomePromiseArray(values) {
			    this.constructor$(values);
			    this._howMany = 0;
			    this._unwrap = false;
			    this._initialized = false;
			}
			util.inherits(SomePromiseArray, PromiseArray);

			SomePromiseArray.prototype._init = function () {
			    if (!this._initialized) {
			        return;
			    }
			    if (this._howMany === 0) {
			        this._resolve([]);
			        return;
			    }
			    this._init$(undefined, -5);
			    var isArrayResolved = isArray(this._values);
			    if (!this._isResolved() &&
			        isArrayResolved &&
			        this._howMany > this._canPossiblyFulfill()) {
			        this._reject(this._getRangeError(this.length()));
			    }
			};

			SomePromiseArray.prototype.init = function () {
			    this._initialized = true;
			    this._init();
			};

			SomePromiseArray.prototype.setUnwrap = function () {
			    this._unwrap = true;
			};

			SomePromiseArray.prototype.howMany = function () {
			    return this._howMany;
			};

			SomePromiseArray.prototype.setHowMany = function (count) {
			    this._howMany = count;
			};

			SomePromiseArray.prototype._promiseFulfilled = function (value) {
			    this._addFulfilled(value);
			    if (this._fulfilled() === this.howMany()) {
			        this._values.length = this.howMany();
			        if (this.howMany() === 1 && this._unwrap) {
			            this._resolve(this._values[0]);
			        } else {
			            this._resolve(this._values);
			        }
			    }

			};
			SomePromiseArray.prototype._promiseRejected = function (reason) {
			    this._addRejected(reason);
			    if (this.howMany() > this._canPossiblyFulfill()) {
			        var e = new AggregateError();
			        for (var i = this.length(); i < this._values.length; ++i) {
			            e.push(this._values[i]);
			        }
			        this._reject(e);
			    }
			};

			SomePromiseArray.prototype._fulfilled = function () {
			    return this._totalResolved;
			};

			SomePromiseArray.prototype._rejected = function () {
			    return this._values.length - this.length();
			};

			SomePromiseArray.prototype._addRejected = function (reason) {
			    this._values.push(reason);
			};

			SomePromiseArray.prototype._addFulfilled = function (value) {
			    this._values[this._totalResolved++] = value;
			};

			SomePromiseArray.prototype._canPossiblyFulfill = function () {
			    return this.length() - this._rejected();
			};

			SomePromiseArray.prototype._getRangeError = function (count) {
			    var message = "Input array must contain at least " +
			            this._howMany + " items but contains only " + count + " items";
			    return new RangeError(message);
			};

			SomePromiseArray.prototype._resolveEmptyArray = function () {
			    this._reject(this._getRangeError(0));
			};

			function some(promises, howMany) {
			    if ((howMany | 0) !== howMany || howMany < 0) {
			        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/1wAmHx\u000a");
			    }
			    var ret = new SomePromiseArray(promises);
			    var promise = ret.promise();
			    ret.setHowMany(howMany);
			    ret.init();
			    return promise;
			}

			Promise.some = function (promises, howMany) {
			    return some(promises, howMany);
			};

			Promise.prototype.some = function (howMany) {
			    return some(this, howMany);
			};

			Promise._SomePromiseArray = SomePromiseArray;
			};


		/***/ },
		/* 36 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise, INTERNAL) {
			var THIS = {};
			var util = __webpack_require__(5);
			var nodebackForPromise = __webpack_require__(17)
			    ._nodebackForPromise;
			var withAppended = util.withAppended;
			var maybeWrapAsError = util.maybeWrapAsError;
			var canEvaluate = util.canEvaluate;
			var TypeError = __webpack_require__(10).TypeError;
			var defaultSuffix = "Async";
			var defaultPromisified = {__isPromisified__: true};
			var noCopyProps = [
			    "arity",    "length",
			    "name",
			    "arguments",
			    "caller",
			    "callee",
			    "prototype",
			    "__isPromisified__"
			];
			var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

			var defaultFilter = function(name) {
			    return util.isIdentifier(name) &&
			        name.charAt(0) !== "_" &&
			        name !== "constructor";
			};

			function propsFilter(key) {
			    return !noCopyPropsPattern.test(key);
			}

			function isPromisified(fn) {
			    try {
			        return fn.__isPromisified__ === true;
			    }
			    catch (e) {
			        return false;
			    }
			}

			function hasPromisified(obj, key, suffix) {
			    var val = util.getDataPropertyOrDefault(obj, key + suffix,
			                                            defaultPromisified);
			    return val ? isPromisified(val) : false;
			}
			function checkValid(ret, suffix, suffixRegexp) {
			    for (var i = 0; i < ret.length; i += 2) {
			        var key = ret[i];
			        if (suffixRegexp.test(key)) {
			            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
			            for (var j = 0; j < ret.length; j += 2) {
			                if (ret[j] === keyWithoutAsyncSuffix) {
			                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/iWrZbw\u000a"
			                        .replace("%s", suffix));
			                }
			            }
			        }
			    }
			}

			function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
			    var keys = util.inheritedDataKeys(obj);
			    var ret = [];
			    for (var i = 0; i < keys.length; ++i) {
			        var key = keys[i];
			        var value = obj[key];
			        var passesDefaultFilter = filter === defaultFilter
			            ? true : defaultFilter(key, value, obj);
			        if (typeof value === "function" &&
			            !isPromisified(value) &&
			            !hasPromisified(obj, key, suffix) &&
			            filter(key, value, obj, passesDefaultFilter)) {
			            ret.push(key, value);
			        }
			    }
			    checkValid(ret, suffix, suffixRegexp);
			    return ret;
			}

			var escapeIdentRegex = function(str) {
			    return str.replace(/([$])/, "\\$");
			};

			var makeNodePromisifiedEval;
			if (true) {
			var switchCaseArgumentOrder = function(likelyArgumentCount) {
			    var ret = [likelyArgumentCount];
			    var min = Math.max(0, likelyArgumentCount - 1 - 3);
			    for(var i = likelyArgumentCount - 1; i >= min; --i) {
			        ret.push(i);
			    }
			    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
			        ret.push(i);
			    }
			    return ret;
			};

			var argumentSequence = function(argumentCount) {
			    return util.filledRange(argumentCount, "_arg", "");
			};

			var parameterDeclaration = function(parameterCount) {
			    return util.filledRange(
			        Math.max(parameterCount, 3), "_arg", "");
			};

			var parameterCount = function(fn) {
			    if (typeof fn.length === "number") {
			        return Math.max(Math.min(fn.length, 1023 + 1), 0);
			    }
			    return 0;
			};

			makeNodePromisifiedEval =
			function(callback, receiver, originalName, fn) {
			    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
			    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
			    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

			    function generateCallForArgumentCount(count) {
			        var args = argumentSequence(count).join(", ");
			        var comma = count > 0 ? ", " : "";
			        var ret;
			        if (shouldProxyThis) {
			            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
			        } else {
			            ret = receiver === undefined
			                ? "ret = callback({{args}}, nodeback); break;\n"
			                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
			        }
			        return ret.replace("{{args}}", args).replace(", ", comma);
			    }

			    function generateArgumentSwitchCase() {
			        var ret = "";
			        for (var i = 0; i < argumentOrder.length; ++i) {
			            ret += "case " + argumentOrder[i] +":" +
			                generateCallForArgumentCount(argumentOrder[i]);
			        }

			        ret += "                                                             \n\
			        default:                                                             \n\
			            var args = new Array(len + 1);                                   \n\
			            var i = 0;                                                       \n\
			            for (var i = 0; i < len; ++i) {                                  \n\
			               args[i] = arguments[i];                                       \n\
			            }                                                                \n\
			            args[i] = nodeback;                                              \n\
			            [CodeForCall]                                                    \n\
			            break;                                                           \n\
			        ".replace("[CodeForCall]", (shouldProxyThis
			                                ? "ret = callback.apply(this, args);\n"
			                                : "ret = callback.apply(receiver, args);\n"));
			        return ret;
			    }

			    var getFunctionCode = typeof callback === "string"
			                                ? ("this != null ? this['"+callback+"'] : fn")
			                                : "fn";

			    return new Function("Promise",
			                        "fn",
			                        "receiver",
			                        "withAppended",
			                        "maybeWrapAsError",
			                        "nodebackForPromise",
			                        "tryCatch",
			                        "errorObj",
			                        "notEnumerableProp",
			                        "INTERNAL","'use strict';                            \n\
			        var ret = function (Parameters) {                                    \n\
			            'use strict';                                                    \n\
			            var len = arguments.length;                                      \n\
			            var promise = new Promise(INTERNAL);                             \n\
			            promise._captureStackTrace();                                    \n\
			            var nodeback = nodebackForPromise(promise);                      \n\
			            var ret;                                                         \n\
			            var callback = tryCatch([GetFunctionCode]);                      \n\
			            switch(len) {                                                    \n\
			                [CodeForSwitchCase]                                          \n\
			            }                                                                \n\
			            if (ret === errorObj) {                                          \n\
			                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
			            }                                                                \n\
			            return promise;                                                  \n\
			        };                                                                   \n\
			        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
			        return ret;                                                          \n\
			        "
			        .replace("Parameters", parameterDeclaration(newParameterCount))
			        .replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
			        .replace("[GetFunctionCode]", getFunctionCode))(
			            Promise,
			            fn,
			            receiver,
			            withAppended,
			            maybeWrapAsError,
			            nodebackForPromise,
			            util.tryCatch,
			            util.errorObj,
			            util.notEnumerableProp,
			            INTERNAL
			        );
			};
			}

			function makeNodePromisifiedClosure(callback, receiver, _, fn) {
			    var defaultThis = (function() {return this;})();
			    var method = callback;
			    if (typeof method === "string") {
			        callback = fn;
			    }
			    function promisified() {
			        var _receiver = receiver;
			        if (receiver === THIS) _receiver = this;
			        var promise = new Promise(INTERNAL);
			        promise._captureStackTrace();
			        var cb = typeof method === "string" && this !== defaultThis
			            ? this[method] : callback;
			        var fn = nodebackForPromise(promise);
			        try {
			            cb.apply(_receiver, withAppended(arguments, fn));
			        } catch(e) {
			            promise._rejectCallback(maybeWrapAsError(e), true, true);
			        }
			        return promise;
			    }
			    util.notEnumerableProp(promisified, "__isPromisified__", true);
			    return promisified;
			}

			var makeNodePromisified = canEvaluate
			    ? makeNodePromisifiedEval
			    : makeNodePromisifiedClosure;

			function promisifyAll(obj, suffix, filter, promisifier) {
			    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
			    var methods =
			        promisifiableMethods(obj, suffix, suffixRegexp, filter);

			    for (var i = 0, len = methods.length; i < len; i+= 2) {
			        var key = methods[i];
			        var fn = methods[i+1];
			        var promisifiedKey = key + suffix;
			        obj[promisifiedKey] = promisifier === makeNodePromisified
			                ? makeNodePromisified(key, THIS, key, fn, suffix)
			                : promisifier(fn, function() {
			                    return makeNodePromisified(key, THIS, key, fn, suffix);
			                });
			    }
			    util.toFastProperties(obj);
			    return obj;
			}

			function promisify(callback, receiver) {
			    return makeNodePromisified(callback, receiver, undefined, callback);
			}

			Promise.promisify = function (fn, receiver) {
			    if (typeof fn !== "function") {
			        throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
			    }
			    if (isPromisified(fn)) {
			        return fn;
			    }
			    var ret = promisify(fn, arguments.length < 2 ? THIS : receiver);
			    util.copyDescriptors(fn, ret, propsFilter);
			    return ret;
			};

			Promise.promisifyAll = function (target, options) {
			    if (typeof target !== "function" && typeof target !== "object") {
			        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/9ITlV0\u000a");
			    }
			    options = Object(options);
			    var suffix = options.suffix;
			    if (typeof suffix !== "string") suffix = defaultSuffix;
			    var filter = options.filter;
			    if (typeof filter !== "function") filter = defaultFilter;
			    var promisifier = options.promisifier;
			    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

			    if (!util.isIdentifier(suffix)) {
			        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/8FZo5V\u000a");
			    }

			    var keys = util.inheritedDataKeys(target);
			    for (var i = 0; i < keys.length; ++i) {
			        var value = target[keys[i]];
			        if (keys[i] !== "constructor" &&
			            util.isClass(value)) {
			            promisifyAll(value.prototype, suffix, filter, promisifier);
			            promisifyAll(value, suffix, filter, promisifier);
			        }
			    }

			    return promisifyAll(target, suffix, filter, promisifier);
			};
			};



		/***/ },
		/* 37 */
		/***/ function(module, exports) {

			"use strict";
			module.exports = function(Promise) {
			var SomePromiseArray = Promise._SomePromiseArray;
			function any(promises) {
			    var ret = new SomePromiseArray(promises);
			    var promise = ret.promise();
			    ret.setHowMany(1);
			    ret.setUnwrap();
			    ret.init();
			    return promise;
			}

			Promise.any = function (promises) {
			    return any(promises);
			};

			Promise.prototype.any = function () {
			    return any(this);
			};

			};


		/***/ },
		/* 38 */
		/***/ function(module, exports) {

			"use strict";
			module.exports = function(Promise, INTERNAL) {
			var PromiseReduce = Promise.reduce;

			Promise.prototype.each = function (fn) {
			    return PromiseReduce(this, fn, null, INTERNAL);
			};

			Promise.each = function (promises, fn) {
			    return PromiseReduce(promises, fn, null, INTERNAL);
			};
			};


		/***/ },
		/* 39 */
		/***/ function(module, exports, __webpack_require__) {

			"use strict";
			module.exports = function(Promise, INTERNAL) {
			var util = __webpack_require__(5);
			var TimeoutError = Promise.TimeoutError;

			var afterTimeout = function (promise, message) {
			    if (!promise.isPending()) return;
			    if (typeof message !== "string") {
			        message = "operation timed out";
			    }
			    var err = new TimeoutError(message);
			    util.markAsOriginatingFromRejection(err);
			    promise._attachExtraTrace(err);
			    promise._cancel(err);
			};

			var afterValue = function(value) { return delay(+this).thenReturn(value); };
			var delay = Promise.delay = function (value, ms) {
			    if (ms === undefined) {
			        ms = value;
			        value = undefined;
			        var ret = new Promise(INTERNAL);
			        setTimeout(function() { ret._fulfill(); }, ms);
			        return ret;
			    }
			    ms = +ms;
			    return Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
			};

			Promise.prototype.delay = function (ms) {
			    return delay(this, ms);
			};

			function successClear(value) {
			    var handle = this;
			    if (handle instanceof Number) handle = +handle;
			    clearTimeout(handle);
			    return value;
			}

			function failureClear(reason) {
			    var handle = this;
			    if (handle instanceof Number) handle = +handle;
			    clearTimeout(handle);
			    throw reason;
			}

			Promise.prototype.timeout = function (ms, message) {
			    ms = +ms;
			    var ret = this.then().cancellable();
			    ret._cancellationParent = this;
			    var handle = setTimeout(function timeoutTimeout() {
			        afterTimeout(ret, message);
			    }, ms);
			    return ret._then(successClear, failureClear, undefined, handle, undefined);
			};

			};


		/***/ },
		/* 40 */
		/***/ function(module, exports) {

			"use strict";
			module.exports = function(Promise, INTERNAL) {
			var PromiseMap = Promise.map;

			Promise.prototype.filter = function (fn, options) {
			    return PromiseMap(this, fn, options, INTERNAL);
			};

			Promise.filter = function (promises, fn, options) {
			    return PromiseMap(promises, fn, options, INTERNAL);
			};
			};


		/***/ },
		/* 41 */
		/***/ function(module, exports, __webpack_require__) {

			var protodef = __webpack_require__(42);
			var termTypes = protodef.Term.TermType;
			var datumTypes = protodef.Datum.DatumType;
			var net = __webpack_require__(43);

			function isPlainObject(obj) {
			  return Object.prototype.toString.call(obj) === '[object Object]';
			}
			module.exports.isPlainObject = isPlainObject;

			function toArray(args) {
			  return Array.prototype.slice.call(args);
			}
			module.exports.toArray = toArray;

			function hasImplicit(arg) {
			  if (Array.isArray(arg)) {
			    if (arg[0] === termTypes.IMPLICIT_VAR) return true;

			    if (Array.isArray(arg[1])) {
			      for(var i=0; i<arg[1].length; i++) {
			        if (hasImplicit(arg[1][i])) return true;
			      }
			    }
			    if (isPlainObject(arg[2])) {
			      for(var key in arg[2]) {
			        if (hasImplicit(arg[2][key])) return true;
			      }
			    }
			  }
			  else if (isPlainObject(arg)) {
			    for(var key in arg) {
			      if (hasImplicit(arg[key])) return true;
			    }
			  }
			  return false;
			}
			module.exports.hasImplicit = hasImplicit;

			function loopKeys(obj, fn) {
			  var keys = Object.keys(obj);
			  var result;
			  var keysLength = keys.length;
			  for(var i=0; i<keysLength; i++) {
			    result = fn(obj, keys[i]);
			    if (result === false) return;
			  }
			}
			module.exports.loopKeys = loopKeys;

			function convertPseudoType(obj, options) {
			  if (Array.isArray(obj)) {
			    for(var i=0; i<obj.length; i++) {
			      obj[i] = convertPseudoType(obj[i], options);
			    }
			  }
			  else if (isPlainObject(obj)) {
			    if ((options.timeFormat != 'raw') && (obj.$reql_type$ === 'TIME')) {
			      obj = new Date(obj.epoch_time*1000);
			    }
			    else if ((options.binaryFormat != 'raw') && (obj.$reql_type$ === 'BINARY')) {
			      obj = new Buffer(obj.data, 'base64');
			    }
			    else if ((options.groupFormat != 'raw') && (obj.$reql_type$ === 'GROUPED_DATA')) {
			      var result = [];
			      for(var i=0; i<obj.data.length; i++) {
			        result.push({
			          group: obj.data[i][0],
			          reduction: obj.data[i][1],
			        })
			      }
			      obj = result;
			    }
			    else{
			      for(var key in obj) {
			        if (obj.hasOwnProperty(key)) {
			          obj[key] = convertPseudoType(obj[key], options);
			        }
			      }
			    }
			  }
			  return obj;
			}
			function makeAtom(response, options) {
			  options = options || {};
			  return convertPseudoType(response.r[0], options);
			}
			module.exports.makeAtom = makeAtom;

			function makeSequence(response, options) {
			  var result = [];
			  options = options || {};

			  return convertPseudoType(response.r, options);
			}

			module.exports.makeSequence = makeSequence;

			function changeProto(object, other) {
			  object.__proto__ = other.__proto__;
			}
			module.exports.changeProto = changeProto;

			// Try to extract the most global address
			// Note: Mutate the input
			function getCanonicalAddress(addresses) {
			  // We suppose that the addresses are all valid, and therefore use loose regex
			  for(var i=0; i<addresses.length; i++) {
			    var addresse = addresses[i];
			    if ((/^127(\.\d{1,3}){3}$/.test(addresse.host)) || (/0?:?0?:?0?:?0?:?0?:?0?:0?:1/.test(addresse.host))) {
			      addresse.value = 0;
			    }
			    else if ((net.isIPv6(addresse.host)) && (/^[fF]|[eE]80:.*\:.*\:/.test(addresse.host))) {
			      addresse.value = 1;
			    }
			    else if (/^169\.254\.\d{1,3}\.\d{1,3}$/.test(addresse.host)) {
			      addresse.value = 2;
			    }
			    else if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(addresse.host)) {
			      addresse.value = 3;
			    }
			    else if (/^172\.(1\d|2\d|30|31)\.\d{1,3}\.\d{1,3}$/.test(addresse.host)) {
			      addresse.value = 4;
			    }
			    else if (/^10(\.\d{1,3}){3}$/.test(addresse.host)) {
			      addresse.value = 5;
			    }
			    else if ((net.isIPv6(addresse.host)) && (/^[fF]|[cCdD].*\:.*\:/.test('addresse.host'))) {
			      addresse.value = 6;
			    }
			    else {
			      addresse.value = 7;
			    }
			  }
			  var result = addresses[0];
			  var max = addresses[0].value;
			  for(var i=0; i<addresses.length; i++) {
			    if (addresses[i].value > max) {
			      result = addresses[i];
			      max = addresses[i].value;
			    }
			  }
			  return result;
			}
			module.exports.getCanonicalAddress = getCanonicalAddress;


			module.exports.localhostAliases = {
			  'localhost': true,
			  '127.0.0.1': true,
			  '::1': true
			}

			module.exports.tryCatch = function tryCatch(toTry, handleError) {
			  try{
			  toTry()
			  }
			  catch(err) {
			  handleError(err)
			  }
			}


		/***/ },
		/* 42 */
		/***/ function(module, exports) {

			// DO NOT EDIT
			// Autogenerated by convert_protofile

			module.exports = {
				VersionDummy: {
					Version: {
						V0_1: 1063369270,
						V0_2: 1915781601,
						V0_3: 1601562686,
						V0_4: 1074539808
					},
					
					Protocol: {
						PROTOBUF: 656407617,
						JSON: 2120839367
					}
				},
				
				Query: {
					QueryType: {
						START: 1,
						CONTINUE: 2,
						STOP: 3,
						NOREPLY_WAIT: 4
					},
					
					AssocPair: {}
				},
				
				Frame: {
					FrameType: {
						POS: 1,
						OPT: 2
					}
				},
				
				Backtrace: {},
				
				Response: {
					ResponseType: {
						SUCCESS_ATOM: 1,
						SUCCESS_SEQUENCE: 2,
						SUCCESS_PARTIAL: 3,
						WAIT_COMPLETE: 4,
						CLIENT_ERROR: 16,
						COMPILE_ERROR: 17,
						RUNTIME_ERROR: 18
					},
					
					ResponseNote: {
						SEQUENCE_FEED: 1,
						ATOM_FEED: 2,
						ORDER_BY_LIMIT_FEED: 3,
						UNIONED_FEED: 4,
						INCLUDES_STATES: 5
					}
				},
				
				Datum: {
					DatumType: {
						R_NULL: 1,
						R_BOOL: 2,
						R_NUM: 3,
						R_STR: 4,
						R_ARRAY: 5,
						R_OBJECT: 6,
						R_JSON: 7
					},
					
					AssocPair: {}
				},
				
				Term: {
					TermType: {
						DATUM: 1,
						MAKE_ARRAY: 2,
						MAKE_OBJ: 3,
						VAR: 10,
						JAVASCRIPT: 11,
						UUID: 169,
						HTTP: 153,
						ERROR: 12,
						IMPLICIT_VAR: 13,
						DB: 14,
						TABLE: 15,
						GET: 16,
						GET_ALL: 78,
						EQ: 17,
						NE: 18,
						LT: 19,
						LE: 20,
						GT: 21,
						GE: 22,
						NOT: 23,
						ADD: 24,
						SUB: 25,
						MUL: 26,
						DIV: 27,
						MOD: 28,
						APPEND: 29,
						PREPEND: 80,
						DIFFERENCE: 95,
						SET_INSERT: 88,
						SET_INTERSECTION: 89,
						SET_UNION: 90,
						SET_DIFFERENCE: 91,
						SLICE: 30,
						SKIP: 70,
						LIMIT: 71,
						OFFSETS_OF: 87, // used to be INDEXES_OF
						CONTAINS: 93,
						GET_FIELD: 31,
						KEYS: 94,
						OBJECT: 143,
						HAS_FIELDS: 32,
						WITH_FIELDS: 96,
						PLUCK: 33,
						WITHOUT: 34,
						MERGE: 35,
						BETWEEN_DEPRECATED: 36,
						BETWEEN: 182,
						REDUCE: 37,
						MAP: 38,
						FILTER: 39,
						CONCAT_MAP: 40,
						ORDER_BY: 41,
						DISTINCT: 42,
						COUNT: 43,
						IS_EMPTY: 86,
						UNION: 44,
						NTH: 45,
						BRACKET: 170,
						INNER_JOIN: 48,
						OUTER_JOIN: 49,
						EQ_JOIN: 50,
						ZIP: 72,
						RANGE: 173,
						INSERT_AT: 82,
						DELETE_AT: 83,
						CHANGE_AT: 84,
						SPLICE_AT: 85,
						COERCE_TO: 51,
						TYPE_OF: 52,
						UPDATE: 53,
						DELETE: 54,
						REPLACE: 55,
						INSERT: 56,
						DB_CREATE: 57,
						DB_DROP: 58,
						DB_LIST: 59,
						TABLE_CREATE: 60,
						TABLE_DROP: 61,
						TABLE_LIST: 62,
						CONFIG: 174,
						STATUS: 175,
						WAIT: 177,
						RECONFIGURE: 176,
						REBALANCE: 179,
						SYNC: 138,
						INDEX_CREATE: 75,
						INDEX_DROP: 76,
						INDEX_LIST: 77,
						INDEX_STATUS: 139,
						INDEX_WAIT: 140,
						INDEX_RENAME: 156,
						FUNCALL: 64,
						BRANCH: 65,
						OR: 66,
						AND: 67,
						FOR_EACH: 68,
						FUNC: 69,
						ASC: 73,
						DESC: 74,
						INFO: 79,
						MATCH: 97,
						UPCASE: 141,
						DOWNCASE: 142,
						SAMPLE: 81,
						DEFAULT: 92,
						JSON: 98,
						TO_JSON_STRING: 172,
						ISO8601: 99,
						TO_ISO8601: 100,
						EPOCH_TIME: 101,
						TO_EPOCH_TIME: 102,
						NOW: 103,
						IN_TIMEZONE: 104,
						DURING: 105,
						DATE: 106,
						TIME_OF_DAY: 126,
						TIMEZONE: 127,
						YEAR: 128,
						MONTH: 129,
						DAY: 130,
						DAY_OF_WEEK: 131,
						DAY_OF_YEAR: 132,
						HOURS: 133,
						MINUTES: 134,
						SECONDS: 135,
						TIME: 136,
						MONDAY: 107,
						TUESDAY: 108,
						WEDNESDAY: 109,
						THURSDAY: 110,
						FRIDAY: 111,
						SATURDAY: 112,
						SUNDAY: 113,
						JANUARY: 114,
						FEBRUARY: 115,
						MARCH: 116,
						APRIL: 117,
						MAY: 118,
						JUNE: 119,
						JULY: 120,
						AUGUST: 121,
						SEPTEMBER: 122,
						OCTOBER: 123,
						NOVEMBER: 124,
						DECEMBER: 125,
						LITERAL: 137,
						GROUP: 144,
						SUM: 145,
						AVG: 146,
						MIN: 147,
						MAX: 148,
						SPLIT: 149,
						UNGROUP: 150,
						RANDOM: 151,
						CHANGES: 152,
						ARGS: 154,
						BINARY: 155,
						GEOJSON: 157,
						TO_GEOJSON: 158,
						POINT: 159,
						LINE: 160,
						POLYGON: 161,
						DISTANCE: 162,
						INTERSECTS: 163,
						INCLUDES: 164,
						CIRCLE: 165,
						GET_INTERSECTING: 166,
						FILL: 167,
						GET_NEAREST: 168,
						POLYGON_SUB: 171,
						MINVAL: 180,
						MAXVAL: 181
					},
					
					AssocPair: {}
				}
			}


		/***/ },
		/* 43 */
		/***/ function(module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, '__esModule', {
			  value: true
			});
			exports.configureTcpPolyfill = configureTcpPolyfill;
			exports.Socket = Socket;
			exports.connect = connect;

			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

			var _blobToBuffer = __webpack_require__(44);

			var _blobToBuffer2 = _interopRequireDefault(_blobToBuffer);

			var _eventemitter2 = __webpack_require__(47);

			var _eventemitter22 = _interopRequireDefault(_eventemitter2);

			var tcpPolyfillOptions = {
			  path: '/',
			  secure: false,
			  wsProtocols: undefined
			};

			var notImpl = function notImpl(name) {
			  return function () {
			    throw new Error('Not implemented in TcpPolyfill: ' + name);
			  };
			};

			function configureTcpPolyfill(options) {
			  tcpPolyfillOptions.path = options.path;
			  tcpPolyfillOptions.secure = options.secure;
			  tcpPolyfillOptions.wsProtocols = options.wsProtocols;
			}

			function Socket(options) {
			  var _this = this;

			  if (!(this instanceof Socket)) {
			    return new Socket(options);
			  }

			  var emitter = new _eventemitter22['default']({});
			  ['on', 'once', 'removeListener', 'emit', 'addListener', 'removeAllListeners', 'setMaxListeners', 'listeners'].forEach(function (method) {
			    _this[method] = emitter[method].bind(emitter);
			  });

			  var ws = null;

			  this.connect = function (port, host, connectListener) {
			    var protocol = tcpPolyfillOptions.secure ? 'wss' : 'ws';
			    var path = tcpPolyfillOptions.path;
			    var url = protocol + '://' + host + ':' + port + path;
			    ws = new WebSocket(url, tcpPolyfillOptions.wsProtocols);
			    if (connectListener) {
			      emitter.on('connect', connectListener);
			    }

			    ws.onopen = function (event) {
			      emitter.emit('connect');
			    };

			    ws.onclose = function (event) {
			      emitter.emit('end');
			      emitter.emit('close');
			    };

			    ws.onerror = function (event) {
			      emitter.emit('error', event);
			    };

			    ws.onmessage = function (event) {
			      var data = event.data;
			      if (typeof Blob !== 'undefined' && data instanceof Blob) {
			        (0, _blobToBuffer2['default'])(data, function (err, buffer) {
			          if (err) {
			            throw err;
			          }
			          emitter.emit('data', buffer);
			        });
			      } else {
			        emitter.emit('data', data);
			      }
			    };
			  };

			  this.end = function (data) {
			    if (data !== undefined) {
			      _this.write(data);
			    }
			    ws.close();
			  };

			  this.destroy = function () {
			    ws.close();
			  };

			  this.write = function (data) {
			    // Convert data (string or node.js Buffer) to ArrayBuffer for WebSocket
			    var arrayBuffer = new ArrayBuffer(data.length);
			    var view = new Uint8Array(arrayBuffer);
			    for (var i = 0; i < data.length; ++i) {
			      view[i] = data[i];
			    }
			    ws.send(arrayBuffer);
			  };

			  this.setNoDelay = function (noDelay) {};

			  var notImplMethods = ['setEncoding', 'pause', 'resume', 'setTimeout', 'setKeepAlive', 'address', 'unref', 'ref'];
			  notImplMethods.forEach(function (name) {
			    _this[name] = notImpl(name);
			  });
			}

			function connect() {
			  var opts = {};
			  if (arguments[0] && typeof arguments[0] === 'object') {
			    opts.port = arguments[0].port;
			    opts.host = arguments[0].host;
			    opts.connectListener = arguments[1];
			  } else if (Number(arguments[0]) > 0) {
			    opts.port = arguments[0];
			    opts.host = arguments[1];
			    opts.connectListener = arguments[2];
			  } else {
			    throw new Error('Unsupported arguments for net.connect');
			  }
			  var socket = new Socket();
			  socket.connect(opts.port, opts.host, opts.connectListener);
			  return socket;
			}

			var createConnection = connect;

			exports.createConnection = createConnection;
			var createServer = notImpl('createServer');

			exports.createServer = createServer;
			// This is wrong, but irrelevant for connecting via websocket
			var isIPv4 = function isIPv4(input) {
			  return true;
			};
			exports.isIPv4 = isIPv4;
			var isIPv6 = function isIPv6(input) {
			  return false;
			};
			exports.isIPv6 = isIPv6;
			var isIP = function isIP(input) {
			  return isIPv4(input) ? 4 : isIPv6(input) ? 6 : 0;
			};
			exports.isIP = isIP;

		/***/ },
		/* 44 */
		/***/ function(module, exports, __webpack_require__) {

			/* global Blob, FileReader */

			// arraybuffer -> buffer without copy
			var toBuffer = __webpack_require__(45)

			module.exports = function blobToBuffer (blob, cb) {
			  if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
			    throw new Error('first argument must be a Blob')
			  }
			  if (typeof cb !== 'function') {
			    throw new Error('second argument must be a function')
			  }

			  var reader = new FileReader()

			  function onLoadEnd (e) {
			    reader.removeEventListener('loadend', onLoadEnd, false)
			    if (e.error) cb(e.error)
			    else cb(null, toBuffer(reader.result))
			  }

			  reader.addEventListener('loadend', onLoadEnd, false)
			  reader.readAsArrayBuffer(blob)
			}


		/***/ },
		/* 45 */
		/***/ function(module, exports, __webpack_require__) {

			/**
			 * Convert a typed array to a Buffer without a copy
			 *
			 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
			 * License:  MIT
			 *
			 * `npm install typedarray-to-buffer`
			 */

			var isTypedArray = __webpack_require__(46).strict

			module.exports = function (arr) {
			  // If `Buffer` is the browser `buffer` module, and the browser supports typed arrays,
			  // then avoid a copy. Otherwise, create a `Buffer` with a copy.
			  var constructor = Buffer.TYPED_ARRAY_SUPPORT
			    ? Buffer._augment
			    : function (arr) { return new Buffer(arr) }

			  if (arr instanceof Uint8Array) {
			    return constructor(arr)
			  } else if (arr instanceof ArrayBuffer) {
			    return constructor(new Uint8Array(arr))
			  } else if (isTypedArray(arr)) {
			    // Use the typed array's underlying ArrayBuffer to back new Buffer. This respects
			    // the "view" on the ArrayBuffer, i.e. byteOffset and byteLength. No copy.
			    return constructor(new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength))
			  } else {
			    // Unsupported type, just pass it through to the `Buffer` constructor.
			    return new Buffer(arr)
			  }
			}


		/***/ },
		/* 46 */
		/***/ function(module, exports) {

			module.exports      = isTypedArray
			isTypedArray.strict = isStrictTypedArray
			isTypedArray.loose  = isLooseTypedArray

			var toString = Object.prototype.toString
			var names = {
			    '[object Int8Array]': true
			  , '[object Int16Array]': true
			  , '[object Int32Array]': true
			  , '[object Uint8Array]': true
			  , '[object Uint8ClampedArray]': true
			  , '[object Uint16Array]': true
			  , '[object Uint32Array]': true
			  , '[object Float32Array]': true
			  , '[object Float64Array]': true
			}

			function isTypedArray(arr) {
			  return (
			       isStrictTypedArray(arr)
			    || isLooseTypedArray(arr)
			  )
			}

			function isStrictTypedArray(arr) {
			  return (
			       arr instanceof Int8Array
			    || arr instanceof Int16Array
			    || arr instanceof Int32Array
			    || arr instanceof Uint8Array
			    || arr instanceof Uint8ClampedArray
			    || arr instanceof Uint16Array
			    || arr instanceof Uint32Array
			    || arr instanceof Float32Array
			    || arr instanceof Float64Array
			  )
			}

			function isLooseTypedArray(arr) {
			  return names[toString.call(arr)]
			}


		/***/ },
		/* 47 */
		/***/ function(module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_RESULT__;/*!
			 * EventEmitter2
			 * https://github.com/hij1nx/EventEmitter2
			 *
			 * Copyright (c) 2013 hij1nx
			 * Licensed under the MIT license.
			 */
			;!function(undefined) {

			  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
			    return Object.prototype.toString.call(obj) === "[object Array]";
			  };
			  var defaultMaxListeners = 10;

			  function init() {
			    this._events = {};
			    if (this._conf) {
			      configure.call(this, this._conf);
			    }
			  }

			  function configure(conf) {
			    if (conf) {

			      this._conf = conf;

			      conf.delimiter && (this.delimiter = conf.delimiter);
			      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
			      conf.wildcard && (this.wildcard = conf.wildcard);
			      conf.newListener && (this.newListener = conf.newListener);

			      if (this.wildcard) {
			        this.listenerTree = {};
			      }
			    }
			  }

			  function EventEmitter(conf) {
			    this._events = {};
			    this.newListener = false;
			    configure.call(this, conf);
			  }

			  //
			  // Attention, function return type now is array, always !
			  // It has zero elements if no any matches found and one or more
			  // elements (leafs) if there are matches
			  //
			  function searchListenerTree(handlers, type, tree, i) {
			    if (!tree) {
			      return [];
			    }
			    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
			        typeLength = type.length, currentType = type[i], nextType = type[i+1];
			    if (i === typeLength && tree._listeners) {
			      //
			      // If at the end of the event(s) list and the tree has listeners
			      // invoke those listeners.
			      //
			      if (typeof tree._listeners === 'function') {
			        handlers && handlers.push(tree._listeners);
			        return [tree];
			      } else {
			        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
			          handlers && handlers.push(tree._listeners[leaf]);
			        }
			        return [tree];
			      }
			    }

			    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
			      //
			      // If the event emitted is '*' at this part
			      // or there is a concrete match at this patch
			      //
			      if (currentType === '*') {
			        for (branch in tree) {
			          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
			            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
			          }
			        }
			        return listeners;
			      } else if(currentType === '**') {
			        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
			        if(endReached && tree._listeners) {
			          // The next element has a _listeners, add it to the handlers.
			          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
			        }

			        for (branch in tree) {
			          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
			            if(branch === '*' || branch === '**') {
			              if(tree[branch]._listeners && !endReached) {
			                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
			              }
			              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
			            } else if(branch === nextType) {
			              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
			            } else {
			              // No match on this one, shift into the tree but not in the type array.
			              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
			            }
			          }
			        }
			        return listeners;
			      }

			      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
			    }

			    xTree = tree['*'];
			    if (xTree) {
			      //
			      // If the listener tree will allow any match for this part,
			      // then recursively explore all branches of the tree
			      //
			      searchListenerTree(handlers, type, xTree, i+1);
			    }

			    xxTree = tree['**'];
			    if(xxTree) {
			      if(i < typeLength) {
			        if(xxTree._listeners) {
			          // If we have a listener on a '**', it will catch all, so add its handler.
			          searchListenerTree(handlers, type, xxTree, typeLength);
			        }

			        // Build arrays of matching next branches and others.
			        for(branch in xxTree) {
			          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
			            if(branch === nextType) {
			              // We know the next element will match, so jump twice.
			              searchListenerTree(handlers, type, xxTree[branch], i+2);
			            } else if(branch === currentType) {
			              // Current node matches, move into the tree.
			              searchListenerTree(handlers, type, xxTree[branch], i+1);
			            } else {
			              isolatedBranch = {};
			              isolatedBranch[branch] = xxTree[branch];
			              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
			            }
			          }
			        }
			      } else if(xxTree._listeners) {
			        // We have reached the end and still on a '**'
			        searchListenerTree(handlers, type, xxTree, typeLength);
			      } else if(xxTree['*'] && xxTree['*']._listeners) {
			        searchListenerTree(handlers, type, xxTree['*'], typeLength);
			      }
			    }

			    return listeners;
			  }

			  function growListenerTree(type, listener) {

			    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

			    //
			    // Looks for two consecutive '**', if so, don't add the event at all.
			    //
			    for(var i = 0, len = type.length; i+1 < len; i++) {
			      if(type[i] === '**' && type[i+1] === '**') {
			        return;
			      }
			    }

			    var tree = this.listenerTree;
			    var name = type.shift();

			    while (name) {

			      if (!tree[name]) {
			        tree[name] = {};
			      }

			      tree = tree[name];

			      if (type.length === 0) {

			        if (!tree._listeners) {
			          tree._listeners = listener;
			        }
			        else if(typeof tree._listeners === 'function') {
			          tree._listeners = [tree._listeners, listener];
			        }
			        else if (isArray(tree._listeners)) {

			          tree._listeners.push(listener);

			          if (!tree._listeners.warned) {

			            var m = defaultMaxListeners;

			            if (typeof this._events.maxListeners !== 'undefined') {
			              m = this._events.maxListeners;
			            }

			            if (m > 0 && tree._listeners.length > m) {

			              tree._listeners.warned = true;
			              console.error('(node) warning: possible EventEmitter memory ' +
			                            'leak detected. %d listeners added. ' +
			                            'Use emitter.setMaxListeners() to increase limit.',
			                            tree._listeners.length);
			              console.trace();
			            }
			          }
			        }
			        return true;
			      }
			      name = type.shift();
			    }
			    return true;
			  }

			  // By default EventEmitters will print a warning if more than
			  // 10 listeners are added to it. This is a useful default which
			  // helps finding memory leaks.
			  //
			  // Obviously not all Emitters should be limited to 10. This function allows
			  // that to be increased. Set to zero for unlimited.

			  EventEmitter.prototype.delimiter = '.';

			  EventEmitter.prototype.setMaxListeners = function(n) {
			    this._events || init.call(this);
			    this._events.maxListeners = n;
			    if (!this._conf) this._conf = {};
			    this._conf.maxListeners = n;
			  };

			  EventEmitter.prototype.event = '';

			  EventEmitter.prototype.once = function(event, fn) {
			    this.many(event, 1, fn);
			    return this;
			  };

			  EventEmitter.prototype.many = function(event, ttl, fn) {
			    var self = this;

			    if (typeof fn !== 'function') {
			      throw new Error('many only accepts instances of Function');
			    }

			    function listener() {
			      if (--ttl === 0) {
			        self.off(event, listener);
			      }
			      fn.apply(this, arguments);
			    }

			    listener._origin = fn;

			    this.on(event, listener);

			    return self;
			  };

			  EventEmitter.prototype.emit = function() {

			    this._events || init.call(this);

			    var type = arguments[0];

			    if (type === 'newListener' && !this.newListener) {
			      if (!this._events.newListener) { return false; }
			    }

			    // Loop through the *_all* functions and invoke them.
			    if (this._all) {
			      var l = arguments.length;
			      var args = new Array(l - 1);
			      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
			      for (i = 0, l = this._all.length; i < l; i++) {
			        this.event = type;
			        this._all[i].apply(this, args);
			      }
			    }

			    // If there is no 'error' event listener then throw.
			    if (type === 'error') {

			      if (!this._all &&
			        !this._events.error &&
			        !(this.wildcard && this.listenerTree.error)) {

			        if (arguments[1] instanceof Error) {
			          throw arguments[1]; // Unhandled 'error' event
			        } else {
			          throw new Error("Uncaught, unspecified 'error' event.");
			        }
			        return false;
			      }
			    }

			    var handler;

			    if(this.wildcard) {
			      handler = [];
			      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
			      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
			    }
			    else {
			      handler = this._events[type];
			    }

			    if (typeof handler === 'function') {
			      this.event = type;
			      if (arguments.length === 1) {
			        handler.call(this);
			      }
			      else if (arguments.length > 1)
			        switch (arguments.length) {
			          case 2:
			            handler.call(this, arguments[1]);
			            break;
			          case 3:
			            handler.call(this, arguments[1], arguments[2]);
			            break;
			          // slower
			          default:
			            var l = arguments.length;
			            var args = new Array(l - 1);
			            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
			            handler.apply(this, args);
			        }
			      return true;
			    }
			    else if (handler) {
			      var l = arguments.length;
			      var args = new Array(l - 1);
			      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];

			      var listeners = handler.slice();
			      for (var i = 0, l = listeners.length; i < l; i++) {
			        this.event = type;
			        listeners[i].apply(this, args);
			      }
			      return (listeners.length > 0) || !!this._all;
			    }
			    else {
			      return !!this._all;
			    }

			  };

			  EventEmitter.prototype.on = function(type, listener) {

			    if (typeof type === 'function') {
			      this.onAny(type);
			      return this;
			    }

			    if (typeof listener !== 'function') {
			      throw new Error('on only accepts instances of Function');
			    }
			    this._events || init.call(this);

			    // To avoid recursion in the case that type == "newListeners"! Before
			    // adding it to the listeners, first emit "newListeners".
			    this.emit('newListener', type, listener);

			    if(this.wildcard) {
			      growListenerTree.call(this, type, listener);
			      return this;
			    }

			    if (!this._events[type]) {
			      // Optimize the case of one listener. Don't need the extra array object.
			      this._events[type] = listener;
			    }
			    else if(typeof this._events[type] === 'function') {
			      // Adding the second element, need to change to array.
			      this._events[type] = [this._events[type], listener];
			    }
			    else if (isArray(this._events[type])) {
			      // If we've already got an array, just append.
			      this._events[type].push(listener);

			      // Check for listener leak
			      if (!this._events[type].warned) {

			        var m = defaultMaxListeners;

			        if (typeof this._events.maxListeners !== 'undefined') {
			          m = this._events.maxListeners;
			        }

			        if (m > 0 && this._events[type].length > m) {

			          this._events[type].warned = true;
			          console.error('(node) warning: possible EventEmitter memory ' +
			                        'leak detected. %d listeners added. ' +
			                        'Use emitter.setMaxListeners() to increase limit.',
			                        this._events[type].length);
			          console.trace();
			        }
			      }
			    }
			    return this;
			  };

			  EventEmitter.prototype.onAny = function(fn) {

			    if (typeof fn !== 'function') {
			      throw new Error('onAny only accepts instances of Function');
			    }

			    if(!this._all) {
			      this._all = [];
			    }

			    // Add the function to the event listener collection.
			    this._all.push(fn);
			    return this;
			  };

			  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

			  EventEmitter.prototype.off = function(type, listener) {
			    if (typeof listener !== 'function') {
			      throw new Error('removeListener only takes instances of Function');
			    }

			    var handlers,leafs=[];

			    if(this.wildcard) {
			      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
			      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
			    }
			    else {
			      // does not use listeners(), so no side effect of creating _events[type]
			      if (!this._events[type]) return this;
			      handlers = this._events[type];
			      leafs.push({_listeners:handlers});
			    }

			    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
			      var leaf = leafs[iLeaf];
			      handlers = leaf._listeners;
			      if (isArray(handlers)) {

			        var position = -1;

			        for (var i = 0, length = handlers.length; i < length; i++) {
			          if (handlers[i] === listener ||
			            (handlers[i].listener && handlers[i].listener === listener) ||
			            (handlers[i]._origin && handlers[i]._origin === listener)) {
			            position = i;
			            break;
			          }
			        }

			        if (position < 0) {
			          continue;
			        }

			        if(this.wildcard) {
			          leaf._listeners.splice(position, 1);
			        }
			        else {
			          this._events[type].splice(position, 1);
			        }

			        if (handlers.length === 0) {
			          if(this.wildcard) {
			            delete leaf._listeners;
			          }
			          else {
			            delete this._events[type];
			          }
			        }
			        return this;
			      }
			      else if (handlers === listener ||
			        (handlers.listener && handlers.listener === listener) ||
			        (handlers._origin && handlers._origin === listener)) {
			        if(this.wildcard) {
			          delete leaf._listeners;
			        }
			        else {
			          delete this._events[type];
			        }
			      }
			    }

			    return this;
			  };

			  EventEmitter.prototype.offAny = function(fn) {
			    var i = 0, l = 0, fns;
			    if (fn && this._all && this._all.length > 0) {
			      fns = this._all;
			      for(i = 0, l = fns.length; i < l; i++) {
			        if(fn === fns[i]) {
			          fns.splice(i, 1);
			          return this;
			        }
			      }
			    } else {
			      this._all = [];
			    }
			    return this;
			  };

			  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

			  EventEmitter.prototype.removeAllListeners = function(type) {
			    if (arguments.length === 0) {
			      !this._events || init.call(this);
			      return this;
			    }

			    if(this.wildcard) {
			      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
			      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

			      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
			        var leaf = leafs[iLeaf];
			        leaf._listeners = null;
			      }
			    }
			    else {
			      if (!this._events[type]) return this;
			      this._events[type] = null;
			    }
			    return this;
			  };

			  EventEmitter.prototype.listeners = function(type) {
			    if(this.wildcard) {
			      var handlers = [];
			      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
			      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
			      return handlers;
			    }

			    this._events || init.call(this);

			    if (!this._events[type]) this._events[type] = [];
			    if (!isArray(this._events[type])) {
			      this._events[type] = [this._events[type]];
			    }
			    return this._events[type];
			  };

			  EventEmitter.prototype.listenersAny = function() {

			    if(this._all) {
			      return this._all;
			    }
			    else {
			      return [];
			    }

			  };

			  if (true) {
			     // AMD. Register as an anonymous module.
			    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			      return EventEmitter;
			    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			  } else if (typeof exports === 'object') {
			    // CommonJS
			    exports.EventEmitter2 = EventEmitter;
			  }
			  else {
			    // Browser global.
			    window.EventEmitter2 = EventEmitter;
			  }
			}();


		/***/ },
		/* 48 */
		/***/ function(module, exports, __webpack_require__) {

			var net = __webpack_require__(43);
			var Promise = __webpack_require__(3);
			var events = __webpack_require__(50);
			var util = __webpack_require__(51);

			var helper = __webpack_require__(41);
			var Err = __webpack_require__(49);
			var Cursor = __webpack_require__(52);
			var ReadableStream = __webpack_require__(53);
			var Metadata = __webpack_require__(55);

			var protodef = __webpack_require__(42);
			var responseTypes = protodef.Response.ResponseType;

			function Connection(r, options, resolve, reject) {
			  var self = this;
			  this.r = r;

			  // Set default options - We have to save them in case the user tries to reconnect
			  if (!helper.isPlainObject(options)) options = {};
			  this.host = options.host || r._host;
			  this.port = options.port || r._port;
			  this.authKey = options.authKey || r._authKey;
			  this.timeoutConnect = options.timeout || r._timeoutConnect; // period in *seconds* for the connection to be opened

			  if (options.db) this.db = options.db; // Pass to each query
			  if (options.max_batch_rows) this.max_batch_rows = options.max_batch_rows; // For testing only

			  this.token = 1;
			  this.buffer = new Buffer(0);

			  this.metadata = {}

			  this.open = false; // true only if the user can write on the socket
			  this.timeout = null;

			  var family = 'IPv4';
			  if (net.isIPv6(self.host)) {
			    family = 'IPv6';
			  }
			  self.connection = net.connect({
			    host: self.host,
			    port: self.port,
			    family: family
			  });

			  self.timeoutOpen = setTimeout(function() {
			    self.connection.end(); // Send a FIN packet
			    reject(new Err.ReqlDriverError('Failed to connect to '+self.host+':'+self.port+' in less than '+self.timeoutConnect+'s'));
			  }, self.timeoutConnect*1000);

			  self.connection.on('end', function(error) {
			    // We emit end or close just once
			    self.connection.removeAllListeners();
			    self.emit('end');
			    // We got a FIN packet, so we'll just flush
			    self._flush();
			  });
			  self.connection.on('close', function(error) {
			    // We emit end or close just once
			    clearTimeout(self.timeoutOpen)
			    self.connection.removeAllListeners();
			    self.emit('closed');
			    // The connection is fully closed, flush (in case 'end' was not triggered)
			    self._flush();
			  });
			  self.connection.setNoDelay();
			  self.connection.once('error', function(error) {
			    reject(new Err.ReqlDriverError('Failed to connect to '+self.host+':'+self.port+'\nFull error:\n'+JSON.stringify(error, null, 2)));
			  });
			  self.connection.on('connect', function() {
			    self.connection.removeAllListeners('error');
			    self.connection.on('error', function(error) {
			      self.emit('error', error);
			    });

			    var initBuffer = new Buffer(4)
			    initBuffer.writeUInt32LE(protodef.VersionDummy.Version.V0_4, 0)

			    var authBuffer = new Buffer(self.authKey, 'ascii')
			    var lengthBuffer = new Buffer(4);
			    lengthBuffer.writeUInt32LE(authBuffer.length, 0)

			    var protocolBuffer = new Buffer(4)
			    protocolBuffer.writeUInt32LE(protodef.VersionDummy.Protocol.JSON, 0)
			    helper.tryCatch(function() {
			      self.connection.write(Buffer.concat([initBuffer, lengthBuffer, authBuffer, protocolBuffer]));
			    }, function(err) {
			      // The TCP connection is open, but the ReQL connection wasn't established.
			      // We can just abort the whole thing
			      // TODO dig in node's code to see if it can actually happen, errors are probably just emitted.
			      self.connection.emit('error', err);
			    });
			  });
			  self.connection.once('end', function() {
			    self.open = false;
			  });

			  self.connection.on('data', function(buffer) {
			    self.buffer = Buffer.concat([self.buffer, buffer]);

			    if (self.open == false) {
			      for(var i=0; i<self.buffer.length; i++) {
			        if (buffer[i] === 0) {
			          clearTimeout(self.timeoutOpen)
			          var connectionStatus = buffer.slice(0, i).toString();
			          if (connectionStatus === 'SUCCESS') {
			            self.open = true;
			            resolve(self);
			          }
			          else {
			            reject(new Err.ReqlDriverError('Server dropped connection with message: \''+connectionStatus+'\''));
			          }
			          self.buffer = buffer.slice(i+1);
			          break;
			        }
			      }
			      self.connection.removeAllListeners('error');
			      self.connection.on('error', function(e) {
			        self.open = false;
			      });
			    }
			    else {
			      while(self.buffer.length >= 12) {
			        var token = self.buffer.readUInt32LE(0) + 0x100000000 * self.buffer.readUInt32LE(4);
			        var responseLength = self.buffer.readUInt32LE(8);

			        if (self.buffer.length < 12+responseLength) break;

			        var responseBuffer = self.buffer.slice(12, 12+responseLength);
			        var response = JSON.parse(responseBuffer);

			        self._processResponse(response, token);

			        self.buffer = self.buffer.slice(12+responseLength);
			      }
			    }
			  });

			  self.connection.on('timeout', function(buffer) {
			    self.connection.open = false;
			    self.emit('timeout');
			  })
			  self.connection.toJSON = function() { // We want people to be able to jsonify a cursor
			    return '"A socket object cannot be converted to JSON due to circular references."'
			  }
			}

			util.inherits(Connection, events.EventEmitter);

			Connection.prototype._processResponse = function(response, token) {
			  //console.log('Connection.prototype._processResponse: '+token);
			  //console.log(JSON.stringify(response, null, 2));
			  var self = this;

			  var type = response.t;
			  var result;
			  var cursor;
			  var stream;
			  var currentResolve, currentReject;
			  var datum;
			  var options;

			  if (type === responseTypes.COMPILE_ERROR) {
			    self.emit('release');
			    if (typeof self.metadata[token].reject === 'function') {
			      self.metadata[token].reject(new Err.ReqlCompileError(helper.makeAtom(response), self.metadata[token].query, response));
			    }

			    delete self.metadata[token]
			  }
			  else if (type === responseTypes.CLIENT_ERROR) {
			    self.emit('release');

			    if (typeof self.metadata[token].reject === 'function') {
			      currentResolve = self.metadata[token].resolve;
			      currentReject = self.metadata[token].reject;
			      self.metadata[token].removeCallbacks();
			      currentReject(new Err.ReqlClientError(helper.makeAtom(response), self.metadata[token].query, response));
			      if (typeof self.metadata[token].endReject !== 'function') {
			        // No pending STOP query, we can delete
			        delete self.metadata[token]
			      }
			    }
			    else if (typeof self.metadata[token].endResolve === 'function') {
			      currentResolve = self.metadata[token].endResolve;
			      currentReject = self.metadata[token].endReject;
			      self.metadata[token].removeEndCallbacks();
			      currentReject(new Err.ReqlClientError(helper.makeAtom(response), self.metadata[token].query, response));
			      delete self.metadata[token]
			    }
			    else if (token === -1) { // This should not happen now since 1.13 took the token out of the query
			      var error = new Err.ReqlClientError(helper.makeAtom(response)+'\nClosing all outstanding queries...');
			      self.emit('error', error);
			      // We don't want a function to yield forever, so we just reject everything
			      helper.loopKeys(self.rejectMap, function(rejectMap, key) {
			        rejectMap[key](error);
			      });
			      self.close();
			      delete self.metadata[token]
			    }
			  }
			  else if (type === responseTypes.RUNTIME_ERROR) {
			    self.emit('release');
			    if (typeof self.metadata[token].reject === 'function') {
			    }

			    if (typeof self.metadata[token].reject === 'function') {
			      currentResolve = self.metadata[token].resolve;
			      currentReject = self.metadata[token].reject;
			      self.metadata[token].removeCallbacks();
			      currentReject(new Err.ReqlRuntimeError(helper.makeAtom(response), self.metadata[token].query, response));
			      if (typeof self.metadata[token].endReject !== 'function') {
			        // No pending STOP query, we can delete
			        delete self.metadata[token]
			      }
			    }
			    else if (typeof self.metadata[token].endResolve === 'function') {
			      currentResolve = self.metadata[token].endResolve;
			      currentReject = self.metadata[token].endReject;
			      self.metadata[token].removeEndCallbacks();
			      currentReject(new Err.ReqlRuntimeError(helper.makeAtom(response), self.metadata[token].query, response));
			      delete self.metadata[token]
			    }
			  }
			  else if (type === responseTypes.SUCCESS_ATOM) {
			    self.emit('release');
			    // self.metadata[token].resolve is always a function
			    datum = helper.makeAtom(response, self.metadata[token].options);

			    if ((Array.isArray(datum)) &&
			        ((self.metadata[token].options.cursor === true) || ((self.metadata[token].options.cursor === undefined) && (self.r._options.cursor === true)))) {
			      cursor = new Cursor(self, token, self.metadata[token].options, 'cursor');
			      if (self.metadata[token].options.profile === true) {
			        self.metadata[token].resolve({
			          profile: response.p,
			          result: cursor
			        });
			      }
			      else {
			        self.metadata[token].resolve(cursor);
			      }

			      cursor._push({done: true, response: { r: datum }});
			    }
			    else if ((Array.isArray(datum)) &&
			        ((self.metadata[token].options.stream === true || self.r._options.stream === true))) {
			      cursor = new Cursor(self, token, self.metadata[token].options, 'cursor');
			      stream = new ReadableStream({}, cursor);
			      if (self.metadata[token].options.profile === true) {
			        self.metadata[token].resolve({
			          profile: response.p,
			          result: stream 
			        });
			      }
			      else {
			        self.metadata[token].resolve(stream);
			      }

			      cursor._push({done: true, response: { r: datum }});

			    }
			    else {
			      if (self.metadata[token].options.profile === true) {
			        result = {
			          profile: response.p,
			          result: cursor || datum
			        }
			      }
			      else {
			        result = datum;
			      }
			      self.metadata[token].resolve(result);
			    }

			    delete self.metadata[token];
			  }
			  else if (type === responseTypes.SUCCESS_PARTIAL) {
			    // We save the current resolve function because we are going to call cursor._fetch before resuming the user's yield
			    currentResolve = self.metadata[token].resolve;
			    currentReject = self.metadata[token].reject;

			    // We need to delete before calling cursor._push
			    self.metadata[token].removeCallbacks();

			    if (!self.metadata[token].cursor) { //No cursor, let's create one
			      self.metadata[token].cursor = true;

			      var typeResult = 'Cursor';
			      var includesStates = false;;
			      if (Array.isArray(response.n)) {
			        for(var i=0; i<response.n.length; i++) {
			          if (response.n[i] === protodef.Response.ResponseNote.SEQUENCE_FEED) {
			            typeResult = 'Feed';
			          }
			          else if (response.n[i] === protodef.Response.ResponseNote.ATOM_FEED) {
			            typeResult = 'AtomFeed';
			          }
			          else if (response.n[i] === protodef.Response.ResponseNote.ORDER_BY_LIMIT_FEED) {
			            typeResult = 'OrderByLimitFeed';
			          }
			          else if (response.n[i] === protodef.Response.ResponseNote.UNIONED_FEED) {
			            typeResult = 'UnionedFeed';
			          }
			          else if (response.n[i] === protodef.Response.ResponseNote.INCLUDES_STATES) {
			            includesStates = true;
			          }
			          else {
			            currentReject(new Err.ReqlDriverError('Unknown ResponseNote '+response.n[i]+', the driver is probably out of date.'));
			            return;
			          }
			        }
			      }
			      cursor = new Cursor(self, token, self.metadata[token].options, typeResult);
			      if (includesStates === true) {
			        cursor.setIncludesStates();
			      }
			      if ((self.metadata[token].options.cursor === true) || ((self.metadata[token].options.cursor === undefined) && (self.r._options.cursor === true))) {
			        // Return a cursor
			        if (self.metadata[token].options.profile === true) {
			          currentResolve({
			            profile: response.p,
			            result: cursor
			          });
			        }
			        else {
			          currentResolve(cursor);
			        }
			      }
			      else if ((self.metadata[token].options.stream === true || self.r._options.stream === true)) {
			        stream = new ReadableStream({}, cursor);
			        if (self.metadata[token].options.profile === true) {
			          currentResolve({
			            profile: response.p,
			            result: stream 
			          });
			        }
			        else {
			          currentResolve(stream);
			        }
			      }
			      else if (typeResult !== 'Cursor') {
			        // Return a feed
			        if (self.metadata[token].options.profile === true) {
			          currentResolve({
			            profile: response.p,
			            result: cursor
			          });
			        }
			        else {
			          currentResolve(cursor);
			        }
			      }
			      else {
			        // When we get SUCCESS_SEQUENCE, we will delete self.metadata[token].options
			        // So we keep a reference of it here
			        options = self.metadata[token].options;

			        // Fetch everything and return an array
			        cursor.toArray().then(function(result) {
			          if (options.profile === true) {
			            currentResolve({
			              profile: response.p,
			              result: result
			            });
			          }
			          else {
			            currentResolve(result);
			          }
			        }).error(currentReject)
			      }
			      cursor._push({done: false, response: response});
			    }
			    else { // That was a continue query
			      currentResolve({done: false, response: response});
			    }
			  }
			  else if (type === responseTypes.SUCCESS_SEQUENCE) {
			    self.emit('release');

			    if (typeof self.metadata[token].resolve === 'function') {
			      currentResolve = self.metadata[token].resolve;
			      currentReject = self.metadata[token].reject;
			      self.metadata[token].removeCallbacks();
			    }
			    else if (typeof self.metadata[token].endResolve === 'function') {
			      currentResolve = self.metadata[token].endResolve;
			      currentReject = self.metadata[token].endReject;
			      self.metadata[token].removeEndCallbacks();
			    }

			    if (!self.metadata[token].cursor) { // No cursor, let's create one
			      cursor = new Cursor(self, token, self.metadata[token].options, 'Cursor');

			      if ((self.metadata[token].options.cursor === true) || ((self.metadata[token].options.cursor === undefined) && (self.r._options.cursor === true))) {
			        if (self.metadata[token].options.profile === true) {
			          currentResolve({
			            profile: response.p,
			            result: cursor
			          });
			        }
			        else {
			          currentResolve(cursor);
			        }

			        // We need to keep the options in the else statement, so we clean it inside the if/else blocks
			        delete self.metadata[token];
			      }
			      else if ((self.metadata[token].options.stream === true || self.r._options.stream === true)) {
			        stream = new ReadableStream({}, cursor);
			        if (self.metadata[token].options.profile === true) {
			          currentResolve({
			            profile: response.p,
			            result: stream
			          });
			        }
			        else {
			          currentResolve(stream);
			        }

			        // We need to keep the options in the else statement, so we clean it inside the if/else blocks
			        delete self.metadata[token];
			      }
			      else {
			        cursor.toArray().then(function(result) {
			          if (self.metadata[token].options.profile === true) {
			            currentResolve({
			              profile: response.p,
			              result: result
			            });
			          }
			          else {
			            currentResolve(result);
			          }
			          delete self.metadata[token];
			        }).error(currentReject)
			      }
			      cursor._push({done: true, response: response});
			    }
			    else { // That was a continue query
			      currentResolve({done: true, response: response});
			    }
			  }
			  else if (type === responseTypes.WAIT_COMPLETE) {
			    self.emit('release');
			    self.metadata[token].resolve();

			    delete self.metadata[token];
			  }
			}

			Connection.prototype.reconnect = function(options, callback) {
			  var self = this;

			  if (typeof options === 'function') {
			    callback = options;
			    options = {};
			  }

			  if (!helper.isPlainObject(options)) options = {};

			  if (options.noreplyWait === true) {
			    var p = new Promise(function(resolve, reject) {
			      self.close(options).then(function() {
			        self.r.connect({
			          host: self.host,
			          port: self.port,
			          authKey: self.authKey,
			          db: self.db
			        }).then(function(c) {
			          resolve(c);
			        }).error(function(e) {
			          reject(e);
			        });
			      }).error(function(e) {
			        reject(e)
			      })
			    }).nodeify(callback);
			  }
			  else {
			    return self.r.connect({
			      host: self.host,
			      port: self.port,
			      authKey: self.authKey,
			      db: self.db
			    }, callback);
			  }

			  return p;
			}

			Connection.prototype._send = function(query, token, resolve, reject, originalQuery, options, end) {
			  //console.log('Connection.prototype._send: '+token);
			  //console.log(JSON.stringify(query, null, 2));

			  var self = this;

			  var queryStr = JSON.stringify(query);
			  var querySize = Buffer.byteLength(queryStr);

			  var buffer = new Buffer(8+4+querySize);
			  buffer.writeUInt32LE(token & 0xFFFFFFFF, 0)
			  buffer.writeUInt32LE(Math.floor(token / 0xFFFFFFFF), 4)

			  buffer.writeUInt32LE(querySize, 8);

			  buffer.write(queryStr, 12);

			  // noreply instead of noReply because the otpions are translated for the server
			  if ((!helper.isPlainObject(options)) || (options.noreply != true)) {
			    if (!self.metadata[token]) {
			      self.metadata[token] = new Metadata(resolve, reject, originalQuery, options);
			    }
			    else if (end === true) {
			      self.metadata[token].setEnd(resolve, reject);
			    }
			    else {
			      self.metadata[token].setCallbacks(resolve, reject);
			    }
			  }
			  else {
			    if (typeof resolve === 'function') resolve();
			    this.emit('release');
			  }

			  // This will emit an error if the connection is closed
			  helper.tryCatch(function() {
			    self.connection.write(buffer);
			  }, function(err) {
			    self.metadata[token].reject(err);
			    delete self.metadata[token]
			  });

			};

			Connection.prototype._continue = function(token, resolve, reject) {
			  var query = [protodef.Query.QueryType.CONTINUE];
			  this._send(query, token, resolve, reject);
			}
			Connection.prototype._end = function(token, resolve, reject) {
			  var query = [protodef.Query.QueryType.STOP];
			  this._send(query, token, resolve, reject, undefined, undefined, true);
			}


			Connection.prototype.use = function(db) {
			  if (typeof db !== 'string') throw new Err.ReqlDriverError('First argument of `use` must be a string')
			  this.db = db;
			}

			Connection.prototype.close = function(options, callback) {
			  if (typeof options === 'function') {
			    callback = options;
			    options = {};
			  }
			  var self = this;

			  var p = new Promise(function(resolve, reject) {
			    if (!helper.isPlainObject(options)) options = {};
			    if (options.noreplyWait === true) {
			      self.noreplyWait().then(function(r) {
			        self.open = false;
			        self.connection.end()
			        resolve(r);
			      }).error(function(e) {
			        reject(e)
			      });
			    }
			    else{
			      self.open = false;
			      self.connection.end();
			      resolve();
			    }
			  }).nodeify(callback);
			  return p;
			};


			Connection.prototype.noReplyWait = function() {
			  throw new Err.ReqlDriverError('Did you mean to use `noreplyWait` instead of `noReplyWait`?')
			}
			Connection.prototype.noreplyWait = function(callback) {
			  var self = this;
			  var token = self.token++;

			  var p = new Promise(function(resolve, reject) {
			    var query = [protodef.Query.QueryType.NOREPLY_WAIT];

			    self._send(query, token, resolve, reject);
			  }).nodeify(callback);
			  return p;
			}
			Connection.prototype._isConnection = function() {
			  return true;
			}
			Connection.prototype._isOpen = function() {
			  return this.open;
			}

			Connection.prototype._flush = function() {
			  helper.loopKeys(this.metadata, function(metadata, key) {
			    if (typeof metadata[key].reject === 'function') {
			      metadata[key].reject(new Error('The connection was closed before the query could be completed.'))
			    }
			    if (typeof metadata[key].endReject === 'function') {
			      metadata[key].endReject(new Error('The connection was closed before the query could be completed.'))
			    }

			  });
			  this.metadata = {};
			}

			module.exports = Connection


		/***/ },
		/* 49 */
		/***/ function(module, exports, __webpack_require__) {

			var helper = __webpack_require__(41);
			var INDENT = 4;
			var LIMIT = 80;

			var protodef = __webpack_require__(42);
			var responseTypes = protodef.Response.ResponseType;
			var termTypes = protodef.Term.TermType;
			var datumTypes = protodef.Datum.DatumType;
			var frameTypes = protodef.Frame.FrameType;


			function ReqlDriverError(message, query, secondMessage) {
			  Error.captureStackTrace(this, ReqlDriverError);
			  this.message = message;
			  if ((Array.isArray(query) && (query.length > 0)) || (!Array.isArray(query) && query != null)) {
			    if ((this.message.length > 0) && (this.message[this.message.length-1] === '.')) {
			      this.message = this.message.slice(0, this.message.length-1);
			    }

			    this.message += ' after:\n';

			    var backtrace = generateBacktrace(query, 0, null, [], {indent: 0, extra: 0});

			    this.message += backtrace.str;
			  }
			  else {
			    if (this.message[this.message.length-1] !== '?') this.message += '.';
			  }
			  if (secondMessage) this.message += '\n'+secondMessage;
			};
			ReqlDriverError.prototype = new Error();
			ReqlDriverError.prototype.name = 'ReqlDriverError';

			module.exports.ReqlDriverError = ReqlDriverError;


			function ReqlServerError(message) {
			  Error.captureStackTrace(this, ReqlServerError);
			  this.message = message;
			};
			ReqlServerError.prototype = new Error();
			ReqlServerError.prototype.name = 'ReqlServerError';

			module.exports.ReqlServerError = ReqlServerError;


			function ReqlRuntimeError(message, query, frames) {
			  Error.captureStackTrace(this, ReqlRuntimeError);
			  this.message = message;

			  if ((query != null) && (frames)) {
			    if ((this.message.length > 0) && (this.message[this.message.length-1] === '.')) {
			      this.message = this.message.slice(0, this.message.length-1);
			    }
			    this.message += ' in:\n';

			    frames = frames.b;
			    if (frames) this.frames = frames.slice(0);
			    //this.frames = JSON.stringify(frames, null, 2);

			    var backtrace = generateBacktrace(query, 0, null, frames, {indent: 0, extra: 0});

			    var queryLines = backtrace.str.split('\n');
			    var carrotLines = backtrace.car.split('\n');

			    for(var i=0; i<queryLines.length; i++) {
			      this.message += queryLines[i]+'\n';
			      if (carrotLines[i].match(/\^/)) {
			        var pos = queryLines[i].match(/[^\s]/);
			        if ((pos) && (pos.index)) {
			          this.message += space(pos.index)+carrotLines[i].slice(pos.index)+'\n';
			        }
			        else {
			          this.message += carrotLines[i]+'\n';
			        }
			      }
			    }
			  }
			  //this.query = JSON.stringify(query, null, 2);
			};
			ReqlRuntimeError.prototype = new Error();
			ReqlRuntimeError.prototype.name = 'ReqlRuntimeError';

			module.exports.ReqlRuntimeError = ReqlRuntimeError;


			function ReqlCompileError(message, query, frames) {
			  Error.captureStackTrace(this, ReqlCompileError);
			  this.message = message;

			  if ((query != null) && (frames)) {
			    if ((this.message.length > 0) && (this.message[this.message.length-1] === '.')) {
			      this.message = this.message.slice(0, this.message.length-1);
			    }

			    this.message += ' in:\n';

			    frames = frames.b;
			    if (frames) this.frames = frames.slice(0);
			    //this.frames = JSON.stringify(frames, null, 2);

			    var backtrace = generateBacktrace(query, 0, null, frames, {indent: 0, extra: 0});

			    var queryLines = backtrace.str.split('\n');
			    var carrotLines = backtrace.car.split('\n');

			    for(var i=0; i<queryLines.length; i++) {
			      this.message += queryLines[i]+'\n';
			      if (carrotLines[i].match(/\^/)) {
			        var pos = queryLines[i].match(/[^\s]/);
			        if ((pos) && (pos.index)) {
			          this.message += space(pos.index)+carrotLines[i].slice(pos.index)+'\n';
			        }
			        else {
			          this.message += carrotLines[i]+'\n';
			        }
			      }
			    }
			  }
			};
			ReqlCompileError.prototype = new Error();
			ReqlCompileError.prototype.name = 'ReqlCompileError';

			module.exports.ReqlCompileError = ReqlCompileError;


			function ReqlClientError(message) {
			  Error.captureStackTrace(this, ReqlClientError);
			  this.message = message;
			};
			ReqlClientError.prototype = new Error();
			ReqlClientError.prototype.name = 'ReqlClientError';

			module.exports.ReqlClientError = ReqlClientError;



			var _constants = {
			  MONDAY: true,
			  TUESDAY: true,
			  WEDNESDAY: true,
			  THURSDAY: true,
			  FRIDAY: true,
			  SATURDAY: true,
			  SUNDAY: true,
			  JANUARY: true,
			  FEBRUARY: true,
			  MARCH: true,
			  APRIL: true,
			  MAY: true,
			  JUNE: true,
			  JULY: true,
			  AUGUST: true,
			  SEPTEMBER: true,
			  OCTOBER: true,
			  NOVEMBER: true,
			  DECEMBER: true,
			  MINVAL: true,
			  MAXVAL: true,
			}
			var constants = {};
			for(var key in _constants) {
			  constants[termTypes[key]] = true;
			}


			var _nonPrefix = {
			  DB: true,
			  DB_CREATE: true,
			  DB_LIST: true,
			  DB_DROP: true,
			  JS: true,
			  NOW: true,
			  TIME: true,
			  EPOCH_TIME: true,
			  ISO8601: true,
			  BRANCH: true,
			  JAVASCRIPT: true,
			  ERROR: true,
			  MAKE_ARRAY: true,
			  JSON: true,
			  ARGS: true,
			  HTTP: true,
			  RANDOM: true,
			  BINARY: true,
			  OBJECT: true,
			  CIRCLE: true,
			  GEOJSON: true,
			  POINT: true,
			  LINE: true,
			  POLYGON: true,
			  UUID: true,
			  DESC: true,
			  ASC: true,
			  RANGE: true,
			  LITERAL: 'true'
			}
			var nonPrefix = {};
			for(var key in _nonPrefix) {
			  nonPrefix[termTypes[key]] = true;
			}
			// Constants are also in nonPrefix
			for(var key in _constants) {
			  nonPrefix[termTypes[key]] = true;
			}


			var _typeToString = {
			  DB: 'db',
			  DB_CREATE: 'dbCreate',
			  DB_LIST: 'dbList',
			  DB_DROP: 'dbDrop',
			  TABLE_CREATE: 'tableCreate',
			  TABLE_LIST: 'tableList',
			  TABLE_DROP: 'tableDrop',
			  TABLE: 'table',
			  INDEX_CREATE: 'indexCreate',
			  INDEX_DROP: 'indexDrop',
			  INDEX_LIST: 'indexList',
			  INDEX_WAIT: 'indexWait',
			  INDEX_STATUS: 'indexStatus',
			  INSERT: 'insert',
			  UPDATE: 'update',
			  REPLACE: 'replace',
			  DELETE: 'delete',
			  SYNC: 'sync',
			  GET: 'get',
			  GET_ALL: 'getAll',
			  BETWEEN: 'between',
			  FILTER: 'filter',
			  INNER_JOIN: 'innerJoin',
			  OUTER_JOIN: 'outerJoin',
			  EQ_JOIN: 'eqJoin',
			  ZIP: 'zip',
			  MAP: 'map',
			  WITH_FIELDS: 'withFields',
			  CONCAT_MAP: 'concatMap',
			  ORDER_BY: 'orderBy',
			  DESC: 'desc',
			  ASC: 'asc',
			  SKIP: 'skip',
			  LIMIT: 'limit',
			  SLICE: 'slice',
			  NTH: 'nth',
			  OFFSETS_OF: 'offsetsOf',
			  IS_EMPTY: 'isEmpty',
			  UNION: 'union',
			  SAMPLE: 'sample',
			  REDUCE: 'reduce',
			  COUNT: 'count',
			  SUM: 'sum',
			  AVG: 'avg',
			  MIN: 'min',
			  MAX: 'max',
			  OBJECT: 'object',
			  DISTINCT: 'distinct',
			  GROUP: 'group',
			  UNGROUP: 'ungroup',
			  CONTAINS: 'contains',
			  IMPLICIT_VAR: 'row',
			  PLUCK: 'pluck',
			  WITHOUT: 'without',
			  MERGE: 'merge',
			  APPEND: 'append',
			  PREPEND: 'prepend',
			  DIFFERENCE: 'difference',
			  SET_INSERT: 'setInsert',
			  SET_UNION: 'setUnion',
			  SET_INTERSECTION: 'setIntersection',
			  SET_DIFFERENCE: 'setDifference',
			  HAS_FIELDS: 'hasFields',
			  INSERT_AT: 'insertAt',
			  SPLICE_AT: 'spliceAt',
			  DELETE_AT: 'deleteAt',
			  CHANGE_AT: 'changeAt',
			  KEYS: 'keys',
			  MATCH: 'match',
			  UPCASE: 'upcase',
			  DOWNCASE: 'downcase',
			  ADD: 'add',
			  SUB: 'sub',
			  MUL: 'mul',
			  DIV: 'div',
			  MOD: 'mod',
			  AND: 'and',
			  OR: 'or',
			  EQ: 'eq',
			  NE: 'ne',
			  GT: 'gt',
			  GE: 'ge',
			  LT: 'lt',
			  LE: 'le',
			  NOT: 'not',
			  NOW: 'now',
			  TIME: 'time',
			  EPOCH_TIME: 'epochTime',
			  ISO8601: 'ISO8601',
			  IN_TIMEZONE: 'inTimezone',
			  TIMEZONE: 'timezone',
			  DURING: 'during',
			  DATE: 'date',
			  TIME_OF_DAY: 'timeOfDay',
			  YEAR: 'year',
			  MONTH: 'month',
			  DAY: 'day',
			  DAY_OF_WEEK: 'dayOfWeek',
			  DAY_OF_YEAR: 'dayOfYear',
			  HOURS: 'hours',
			  MINUTES: 'minutes',
			  SECONDS: 'seconds',
			  TO_ISO8601: 'toISO8601',
			  TO_EPOCH_TIME: 'toEpochTime',
			  FUNCALL: 'do',
			  BRANCH: 'branch',
			  FOR_EACH: 'forEach',
			  ERROR: 'error',
			  DEFAULT: 'default',
			  JAVASCRIPT: 'js',
			  COERCE_TO: 'coerceTo',
			  TYPE_OF: 'typeOf',
			  INFO: 'info',
			  JSON: 'json',
			  ARGS: 'args',
			  HTTP: 'http',
			  RANDOM: 'random',
			  CHANGES: 'changes',
			  BINARY: 'binary',
			  INDEX_RENAME: 'indexRename',
			  CIRCLE: 'circle',
			  DISTANCE: 'distance',
			  FILL: 'fill',
			  GEOJSON: 'geojson',
			  TO_GEOJSON: 'toGeojson',
			  GET_INTERSECTING: 'getIntersecting',
			  GET_NEAREST: 'getNearest',
			  INCLUDES: 'includes',
			  INTERSECTS: 'intersects',
			  LINE: 'line',
			  POINT: 'point',
			  POLYGON: 'polygon',
			  POLYGON_SUB: 'polygonSub',
			  UUID: 'uuid',
			  RANGE: 'range',
			  TO_JSON_STRING: 'toJSON',
			  CONFIG: 'config',
			  STATUS: 'status',
			  WAIT: 'wait',
			  RECONFIGURE: 'reconfigure',
			  REBALANCE: 'rebalance',
			  SPLIT: 'split',
			  LITERAL: 'literal',
			  MONDAY: 'monday',
			  TUESDAY: 'tuesday',
			  WEDNESDAY: 'wednesday',
			  THURSDAY: 'thursday',
			  FRIDAY: 'friday',
			  SATURDAY: 'saturday',
			  SUNDAY: 'sunday',
			  JANUARY: 'january',
			  FEBRUARY: 'february',
			  MARCH: 'march',
			  APRIL: 'april',
			  MAY: 'may',
			  JUNE: 'june',
			  JULY: 'july',
			  AUGUST: 'august',
			  SEPTEMBER: 'september',
			  OCTOBER: 'october',
			  NOVEMBER: 'november',
			  DECEMBER: 'december' ,
			  MINVAL: 'minval',
			  MAXVAL: 'maxval',
			}
			var typeToString = {};
			for(var key in _typeToString) {
			  typeToString[termTypes[key]] = _typeToString[key];
			}

			var _noPrefixOptargs = {
			  ISO8601: true,
			}
			var noPrefixOptargs = {};
			for(var key in _noPrefixOptargs) {
			  noPrefixOptargs[termTypes[key]] = true;
			}

			var _specialType = {
			  DATUM: function(term, index, father, frames, options, optarg) {
			    optarg = optarg || false;

			    var underline = Array.isArray(frames) && (frames.length === 0);
			    var currentFrame, backtrace;
			    if (Array.isArray(frames)) currentFrame = frames.shift();

			    var result = {
			      str: '',
			      car: ''
			    }

			    if ((helper.isPlainObject(term)) && (term.$reql_type$ === 'BINARY')) {
			      carify(result, 'r.binary(<Buffer>)', underline);
			      return result;
			    }

			    if ((index === 0) && ((father == null) || (!nonPrefix[father[0]]))) carify(result, 'r.expr(', underline)

			    if (typeof term === 'string' ) {
			      carify(result, '"'+term+'"', underline);
			    }
			    else if (helper.isPlainObject(term)) {
			      var totalKeys = Object.keys(term).length;
			      if (totalKeys === 0) {
			        carify(result, '{}', underline);
			      }
			      else {
			        carify(result, '{\n', underline);
			        var countKeys = 0;
			        var extraToRemove = options.extra;
			        options.indent += INDENT+options.extra;
			        options.extra = 0;
			        for(var key in term) {
			          countKeys++;
			          //if (!((father) && (Array.isArray(father[2])) && (Object.keys(father[2]).length > 0))) options.extra = 0;

			          if (optarg) {
			            carify(result, space(options.indent)+camelCase(key)+': ', underline);
			          }
			          else {
			            carify(result, space(options.indent)+key+': ', underline);
			          }
			          if ((currentFrame != null) && (currentFrame === key)) {
			            backtrace = generateBacktrace(term[key], i, term, frames, options);
			          }
			          else {
			            backtrace = generateBacktrace(term[key], i, term, null, options);
			          }
			          result.str += backtrace.str;
			          result.car += backtrace.car;
			          
			          if (countKeys !== totalKeys) { 
			            carify(result, ',\n', underline);
			          }

			        }
			        options.indent -= INDENT+extraToRemove;
			        carify(result, '\n'+space(options.indent+extraToRemove)+'}', underline);
			      }
			    }
			    else if (Array.isArray(term)) {
			      carify(result, '[', underline);
			      for(var i=0; i<term.length; i++) {
			        if ((currentFrame != null) && (currentFrame === i)) {
			          backtrace = generateBacktrace(term[i], i, term, frames, options);
			        }
			        else {
			          backtrace = generateBacktrace(term[i], i, term, null, options);
			        }
			        result.str += backtrace.str;
			        result.car += backtrace.car;
			      }
			      carify(result, ']', underline);
			    }
			    else {
			      carify(result, ''+term, underline);
			    }

			    if ((index === 0) && ((father == null) || (!nonPrefix[father[0]]))) carify(result, ')', underline);

			    if (underline) result.car = result.str.replace(/./g, '^');

			    return result;
			  },
			  TABLE: function(term, index, father, frames, options) {
			    var result = {
			      str: '',
			      car: ''
			    }
			    var backtrace, underline, currentFrame;


			    if ((term.length === 1) || (term[1].length === 0) || (term[1][0][0] !== termTypes.DB)) {
			      var underline = Array.isArray(frames) && (frames.length === 0);
			      if (Array.isArray(frames)) currentFrame = frames.shift();

			      carify(result, 'r.'+typeToString[term[0]]+'(', underline);
			      if (Array.isArray(term[1])) {
			        for(var i=0; i<term[1].length; i++) {
			          if (i !==0) result.str += ', ';


			          if ((currentFrame != null) && (currentFrame === 1)) {
			            // +1 for index because it's like if there was a r.db(...) before .table(...)
			            backtrace = generateBacktrace(term[1][i], i+1, term, frames, options)
			          }
			          else {
			            backtrace = generateBacktrace(term[1][i], i+1, term, null, options)
			          }
			          result.str += backtrace.str;
			          result.car += backtrace.car
			        }
			      }

			      backtrace = makeOptargs(term, i, term, frames, options, currentFrame)
			      result.str += backtrace.str;
			      result.car += backtrace.car;

			      carify(result, ')', underline);

			      if (underline) result.car = result.str.replace(/./g, '^');
			    }
			    else {
			      backtrace = generateNormalBacktrace(term, index, father, frames, options);
			      result.str = backtrace.str;
			      result.car = backtrace.car;
			    }

			    return result;
			  },
			  GET_FIELD: function(term, index, father, frames, options) {
			    var result = {
			      str: '',
			      car: ''
			    }
			    var backtrace, underline, currentFrame;

			    var underline = Array.isArray(frames) && (frames.length === 0);
			    if (Array.isArray(frames)) currentFrame = frames.shift();

			    if ((currentFrame != null) && (currentFrame === 0)) {
			      backtrace = generateBacktrace(term[1][0], 0, term, frames, options)
			    }
			    else {
			      backtrace = generateBacktrace(term[1][0], 0, term, null, options)
			    }
			    result.str = backtrace.str;
			    result.car = backtrace.car;

			    carify(result, '(', underline);

			    if ((currentFrame != null) && (currentFrame === 1)) {
			      backtrace = generateBacktrace(term[1][1], 1, term, frames, options)
			    }
			    else {
			      backtrace = generateBacktrace(term[1][1], 1, term, null, options)
			    }
			    result.str += backtrace.str;
			    result.car += backtrace.car;

			    carify(result, ')', underline);

			    if (underline) result.car = result.str.replace(/./g, '^');

			    return result;
			  },
			  MAKE_ARRAY: function(term, index, father, frames, options) {
			    var result = {
			      str: '',
			      car: ''
			    };
			    var backtrace, underline, currentFrame;

			    var underline = Array.isArray(frames) && (frames.length === 0);
			    if (Array.isArray(frames)) currentFrame = frames.shift();

			    if ((index === 0) && ((father == null) || (!nonPrefix[father[0]]))) carify(result, 'r.expr(', underline)

			    if (!((options) && (options.noBracket))) {
			      carify(result, '[', underline);
			    }
			    for(var i=0; i<term[1].length; i++) {
			      if (i !== 0) {
			        carify(result, ', ', underline);
			      }

			      if ((currentFrame != null) && (currentFrame  === i)) {
			        backtrace = generateBacktrace(term[1][i], i, term, frames, options);
			      }
			      else {
			        backtrace = generateBacktrace(term[1][i], i, term, null, options);
			      }
			      result.str += backtrace.str;
			      result.car += backtrace.car;

			    }

			    if (!((options) && (options.noBracket))) {
			      carify(result, ']', underline);
			    }

			    if ((index === 0) && ((father == null) || (!nonPrefix[father[0]]))) {
			      carify(result, ')', underline);
			    }

			    if (underline) result.car = result.str.replace(/./g, '^');

			    return result;
			  },
			  FUNC: function(term, index, father, frames, options) {
			    var result = {
			      str: '',
			      car: ''
			    };
			    var backtrace, underline, currentFrame;

			    var underline = Array.isArray(frames) && (frames.length === 0);
			    if (Array.isArray(frames)) currentFrame = frames.shift();

			    if ((term[1][0][1].length === 1) && (helper.hasImplicit(term[1][1]))) {
			      if ((currentFrame != null) && (currentFrame === 1)) {
			        backtrace = generateBacktrace(term[1][1], 1, term, frames, options);
			      }
			      else {
			        backtrace = generateBacktrace(term[1][1], 1, term, null, options);
			      }
			      result.str = backtrace.str;
			      result.car = backtrace.car;
			    }
			    else {
			      carify(result, 'function(', underline);

			      for(var i=0; i<term[1][0][1].length; i++) {
			        if (i !== 0) {
			          carify(result, ', ', underline);
			        }
			        carify(result, 'var_'+term[1][0][1][i], underline);
			      }

			      options.indent += INDENT+options.extra;
			      var extraToRemove = options.extra;
			      options.extra = 0;
			      //if (!((Array.isArray(term[2])) && (term[2].length > 0))) options.extra = 0;

			      carify(result, ') {\n'+space(options.indent)+'return ', underline);

			      if ((currentFrame != null) && (currentFrame === 1)) {
			        backtrace = generateBacktrace(term[1][1], 1, term, frames, options);
			      }
			      else {
			        backtrace = generateBacktrace(term[1][1], 1, term, null, options);
			      }

			      result.str += backtrace.str;
			      result.car += backtrace.car;

			      options.indent -= INDENT+extraToRemove;
			      options.extra = extraToRemove;

			      carify(result, '\n'+space(options.indent+extraToRemove)+'}', underline);

			    }

			    if (underline) result.car = result.str.replace(/./g, '^');

			    return result;
			  },
			  VAR: function(term, index, father, frames, options) {
			    var result = {
			      str: '',
			      car: ''
			    }
			    var backtrace, underline, currentFrame;

			    var underline = Array.isArray(frames) && (frames.length === 0);
			    if (Array.isArray(frames)) currentFrame = frames.shift();

			    carify(result, 'var_'+term[1][0], underline);

			    if (underline) result.car = result.str.replace(/./g, '^');
			    return result;
			  },
			  FUNCALL: function(term, index, father, frames, options) {
			    // The syntax is args[1].do(args[0])
			    var result = {
			      str: '',
			      car: ''
			    };
			    var backtrace, underline, currentFrame;

			    var underline = Array.isArray(frames) && (frames.length === 0);
			    if (Array.isArray(frames)) currentFrame = frames.shift();

			    if (term[1].length === 2) {
			      if ((currentFrame != null) && (currentFrame === 1)) {
			        backtrace = generateBacktrace(term[1][1], 0, term, frames, options);
			      }
			      else {
			        backtrace = generateBacktrace(term[1][1], 0, term, null, options);
			      }
			      result.str = backtrace.str;
			      result.car = backtrace.car;

			      carify(result, '.do(', underline);
			    }
			    else {
			      carify(result, 'r.do(', underline);

			      for(var i=1; i<term[1].length; i++) {
			        if ((currentFrame != null) && (currentFrame === i)) {
			          backtrace = generateBacktrace(term[1][i], i, term, frames, options);
			        }
			        else {
			          backtrace = generateBacktrace(term[1][i], i, term, null, options);
			        }
			        result.str += backtrace.str;
			        result.car += backtrace.car;

			        if (i !== term[1].length) {
			          carify(result, ', ' , underline);
			        }
			      }
			    }

			    if ((currentFrame != null) && (currentFrame === 0)) {
			      backtrace = generateBacktrace(term[1][0], 0, term, frames, options);
			    }
			    else {
			      backtrace = generateBacktrace(term[1][0], 0, term, null, options);
			    }
			    result.str += backtrace.str;
			    result.car += backtrace.car;

			    carify(result, ')', underline);

			    if (underline) result.car = result.str.replace(/./g, '^');

			    return result;
			  },
			  IMPLICIT_VAR: function(term, index, father, frames, options) {
			    var result = {
			      str: '',
			      car: ''
			    }
			    var backtrace, underline, currentFrame;

			    var underline = Array.isArray(frames) && (frames.length === 0);
			    if (Array.isArray(frames)) currentFrame = frames.shift();

			    carify(result, 'r.row', underline);

			    if (underline) result.car = result.str.replace(/./g, '^');
			    return result;
			  },
			  WAIT: function(term, index, father, frames, options) {
			    var result = {
			      str: '',
			      car: ''
			    }
			    var backtrace, underline, currentFrame;

			    if (term.length === 1 || term[1].length === 0) {
			      backtrace = generateWithoutPrefixBacktrace(term, index, father, frames, options);
			      result.str = backtrace.str;
			      result.car = backtrace.car;
			    }
			    else {
			      backtrace = generateNormalBacktrace(term, index, father, frames, options);
			      result.str = backtrace.str;
			      result.car = backtrace.car;
			    }
			    return result;
			  },
			  MAP: function(term, index, father, frames, options) {
			    var result = {
			      str: '',
			      car: ''
			    }
			    var backtrace, underline, currentFrame;

			    if (term.length > 1 && term[1].length > 2) {
			      backtrace = generateWithoutPrefixBacktrace(term, index, father, frames, options);
			      result.str = backtrace.str;
			      result.car = backtrace.car;
			    }
			    else {
			      backtrace = generateNormalBacktrace(term, index, father, frames, options);
			      result.str = backtrace.str;
			      result.car = backtrace.car;
			    }
			    return result;
			  },
			}
			_specialType.TABLE_CREATE = _specialType.TABLE;
			_specialType.TABLE_DROP = _specialType.TABLE;
			_specialType.TABLE_LIST = _specialType.TABLE;
			_specialType.RECONFIGURE = _specialType.WAIT;
			_specialType.REBALANCE = _specialType.WAIT;
			_specialType.BRACKET = _specialType.GET_FIELD;

			var specialType = {};
			for(var key in _specialType) {
			  specialType[termTypes[key]] = _specialType[key];
			}


			function space(n) {
			  return new Array(n+1).join(' ');
			}
			function carify(result, str, underline) {
			  if (underline === true) {
			    result.str += str;
			    result.car += str.replace(/[^\n]/g, '^');
			  }
			  else {
			    result.str += str;
			    result.car += str.replace(/[^\n]/g, ' ');
			  }
			}
			function makeOptargs(term, index, father, frames, options, currentFrame) {
			  var result = {
			    str: '',
			    car: ''
			  }
			  var backtrace, currentFrame, underline;

			  if (helper.isPlainObject(term[2])) {
			    //if ((currentFrame != null) && (frames != null)) frames.unshift(currentFrame);

			    //underline = Array.isArray(frames) && (frames.length === 0);
			    var underline = false;
			    //if (Array.isArray(frames)) currentFrame = frames.shift();

			    // This works before there is no prefix term than can be called with no normal argument but with an optarg
			    if (Array.isArray(term[1]) && (term[1].length > 1)) {
			      carify(result, ', ' , underline);
			    }
			    else if (Array.isArray(term[1]) && (term[1].length > 0) && (noPrefixOptargs[term[0]])) {
			      carify(result, ', ' , underline);
			    }

			    backtrace = specialType[termTypes.DATUM](term[2], index, term[2], frames, options, true);

			    result.str += backtrace.str;
			    result.car += backtrace.car;

			    if (underline) result.car = result.str.replace(/./g, '^');
			  }

			  return result;
			}
			function generateNormalBacktrace(term, index, father, frames, options) {
			  var result = {
			    str: '',
			    car: ''
			  }
			  var backtrace, currentFrame, underline;

			  //if (term[1]) {
			    var underline = Array.isArray(frames) && (frames.length === 0);
			    if (Array.isArray(frames)) currentFrame = frames.shift();

			    if ((currentFrame != null) && (currentFrame === 0)) {
			      backtrace = generateBacktrace(term[1][0], 0, term, frames, options);
			    }
			    else {
			      backtrace = generateBacktrace(term[1][0], 0, term, null, options);
			    }
			    result.str = backtrace.str;
			    result.car = backtrace.car;

			    var lines = backtrace.str.split('\n');
			    var line = lines[lines.length-1];
			    var pos = line.match(/[^\s]/);
			    pos = (pos) ? pos.index : 0;

			    if (line.length-pos > LIMIT) {
			      if (options.extra === 0) options.extra += INDENT;
			      carify(result, '\n'+space(options.indent+options.extra) , underline);
			    }

			    carify(result, '.'+typeToString[term[0]]+'(' , underline);
			    options.indent += options.extra;
			    var extraToRemove = options.extra;
			    options.extra = 0;

			    for(var i=1; i<term[1].length; i++) {
			      if (i !== 1) {
			        carify(result, ', ' , underline);
			      }
			      if ((currentFrame != null) && (currentFrame === i)) {
			        backtrace = generateBacktrace(term[1][i], i, term, frames, options);
			      }
			      else {
			        backtrace = generateBacktrace(term[1][i], i, term, null, options);
			      }
			      result.str += backtrace.str;
			      result.car += backtrace.car;
			    }

			    backtrace = makeOptargs(term, i, term, frames, options, currentFrame)
			    result.str += backtrace.str;
			    result.car += backtrace.car;

			    options.indent -= extraToRemove;
			    options.extra = extraToRemove;

			    carify(result, ')' , underline);

			    if (underline) result.car = result.str.replace(/./g, '^');
			  /*
			  }
			  else {
			    throw new Error('The driver should never enter this condition. Please report the query to the developers -- End 1 --\n'+JSON.stringify(term, null, 2))
			  }
			  */


			  return result;
			}

			function generateWithoutPrefixBacktrace(term, index, father, frames, options) {
			  var result = {
			    str: '',
			    car: ''
			  }

			  var backtrace, currentFrame, underline;

			  var underline = Array.isArray(frames) && (frames.length === 0);
			  if (Array.isArray(frames)) currentFrame = frames.shift();

			  if (constants[term[0]]) {
			    carify(result, 'r.'+typeToString[term[0]], underline); 
			    return result;
			  }

			  carify(result, 'r.'+typeToString[term[0]]+'(', underline); 

			  if (Array.isArray(term[1])) {
			    for(var i=0; i<term[1].length; i++) {
			      if (i !== 0) carify(result, ', ', underline)

			      if ((currentFrame != null) && (currentFrame === i)) {
			        backtrace = generateBacktrace(term[1][i], i, term, frames, options)
			      }
			      else {
			        backtrace = generateBacktrace(term[1][i], i, term, null, options)
			      }
			      result.str += backtrace.str;
			      result.car += backtrace.car;
			    }
			  }

			  backtrace = makeOptargs(term, i, term, frames, options, currentFrame)
			  result.str += backtrace.str;
			  result.car += backtrace.car;

			  carify(result, ')', underline);

			  if (underline) result.car = result.str.replace(/./g, '^');

			  return result;
			}

			function generateBacktrace(term, index, father, frames, options) {
			  var result = {
			    str: '',
			    car: ''
			  }
			  var backtrace, currentFrame, underline;

			  // frames = null -> do not underline
			  // frames = [] -> underline

			  if (Array.isArray(term)) {
			    if (specialType[term[0]]) {
			      backtrace = specialType[term[0]](term, index, father, frames, options);
			      result.str = backtrace.str;
			      result.car = backtrace.car;
			    }
			    else if (nonPrefix[term[0]]) {
			      backtrace = generateWithoutPrefixBacktrace(term, index, father, frames, options);
			      result.str = backtrace.str;
			      result.car = backtrace.car;
			    }
			    else { // normal type -- this.<method>( this.args... )
			      backtrace = generateNormalBacktrace(term, index, father, frames, options);
			      result.str = backtrace.str;
			      result.car = backtrace.car;
			    }
			  }
			  else if (term !== undefined) {
			    backtrace = specialType[termTypes.DATUM](term, index, father, frames, options);

			    result.str = backtrace.str;
			    result.car = backtrace.car;
			  }
			  else {
			    //throw new Error('The driver should never enter this condition. Please report the query to the developers -- End 2')
			  }
			  return result;
			}

			function camelCase(str) {
			  return str.replace(/_(.)/g, function (m, char) { return char.toUpperCase() });
			}
			module.exports.generateBacktrace = generateBacktrace;



		/***/ },
		/* 50 */
		/***/ function(module, exports) {

			module.exports = __webpack_require__(8);

		/***/ },
		/* 51 */
		/***/ function(module, exports) {

			module.exports = __webpack_require__(9);

		/***/ },
		/* 52 */
		/***/ function(module, exports, __webpack_require__) {

			var Promise = __webpack_require__(3);
			var Err = __webpack_require__(49);
			var helper = __webpack_require__(41);
			var EventEmitter = __webpack_require__(50).EventEmitter;

			function Cursor(connection, token, options, type) {
			  this.connection = connection;
			  this.token = token;

			  this._index = 0; // Position in this._data[0]
			  this._data = []; // Array of non empty arrays
			  this._fetching = false; // Are we fetching data
			  this._canFetch = true; // Can we fetch more data?
			  this._pendingPromises = []; // Pending promises' resolve/reject
			  this.options = options || {};
			  this._closed = false;
			  this._type = type;
			  this._setIncludesStates = false;
			  if ((type === 'feed') || (type === 'atomFeed')) {
			    this.toArray = function() {
			      throw new Error('The `toArray` method is not available on feeds.')
			    }
			  }
			  this.each = this._each;
			  this.next = this._next;
			}

			Cursor.prototype.toString = function() {
			  return '[object '+this._type+']';
			}
			Cursor.prototype.setIncludesStates = function() {
			  this._setIncludesStates = true;
			}
			Cursor.prototype.includesStates = function() {
			  return this._setIncludesStates;
			}
			Cursor.prototype.getType = function() {
			  return this._type;
			}

			Cursor.prototype.toJSON = function() {
			  if (this._type === 'Cursor') {
			    throw new Err.ReqlDriverError('You cannot serialize a Cursor to JSON. Retrieve data from the cursor with `toArray` or `next`');
			  }
			  else {
			    throw new Err.ReqlDriverError('You cannot serialize a '+this._type+' to JSON. Retrieve data from the cursor with `each` or `next`');
			  }
			}

			Cursor.prototype._next = function(callback) {
			  var self = this;
			  var p = new Promise(function(resolve, reject) {
			    if (self._closed === true) {
			      reject(new Err.ReqlDriverError('You cannot called `next` on a closed '+this._type))
			    }
			    else if ((self._data.length === 0) && (self._canFetch === false)) {
			      reject(new Err.ReqlDriverError('No more rows in the '+self._type))
			    }
			    else {
			      if ((self._data.length > 0) && (self._data[0].length > self._index)) {
			        var result = self._data[0][self._index++];
			        if (result instanceof Error) {
			          reject(result);
			        }
			        else {
			          resolve(result);

			          // This could be possible if we get back batch with just one document?
			          if (self._data[0].length === self._index) {
			            self._index = 0;
			            self._data.shift();
			            if ((self._data.length === 1)
			              && (self._canFetch === true)
			              && (self._closed === false)
			              && (self._fetching === false)) {
			                self._fetch();
			            }
			          }
			        }
			      }
			      else {
			        self._pendingPromises.push({resolve: resolve, reject: reject});
			      }
			    }
			  }).nodeify(callback);
			  return p;
			}
			Cursor.prototype.hasNext = function() {
			  throw new Error('The `hasNext` command has been removed in 1.13, please use `next`.')
			}
			Cursor.prototype.toArray = function(callback) {
			  var self = this;
			  var p = new Promise(function(resolve, reject) {
			    var result = [];
			    var i =0;
			    self._each(function(err, data) {
			      if (err) {
			        reject(err);
			      }
			      else {
			        result.push(data);
			      }
			    }, function() {
			      resolve(result);
			    });
			  }).nodeify(callback);
			  return p;
			}

			Cursor.prototype._fetch = function() {
			  var self = this;
			  this._fetching = true;

			  var p = new Promise(function(resolve, reject) {
			    self.connection._continue(self.token, resolve, reject);
			  }).then(function(response) {
			    self._push(response);
			  }).error(function(error) {
			    self._fetching = false;
			    self._canFetch = false;
			    self._pushError(error);
			  })
			}

			Cursor.prototype._push = function(data) {
			  var couldfetch = this._canFetch;
			  if (data.done) this._done();
			  var response = data.response;
			  this._fetching = false;
			  // If the cursor was closed, we ignore all following response
			  if ((response.r.length > 0) && (couldfetch === true)) {
			    this._data.push(helper.makeSequence(response, this.options));
			  }
			  // this._fetching = false
			  if ((this._closed === false) && (this._canFetch) && (this._data.length <= 1)) this._fetch();
			  this._flush();
			}
			// Try to solve as many pending promises as possible
			Cursor.prototype._flush = function() {
			  while ((this._pendingPromises.length > 0) && ((this._data.length > 0) || ((this._fetching === false) && (this._canFetch === false)))) {
			    var fullfiller = this._pendingPromises.shift(); 
			    var resolve = fullfiller.resolve;
			    var reject = fullfiller.reject;

			    if (this._data.length > 0) {
			      var result = this._data[0][this._index++];
			      if (result instanceof Error) {
			        reject(result);
			      }
			      else {
			        resolve(result);
			      }

			      if (this._data[0].length === this._index) {
			        this._index = 0;
			        this._data.shift();
			        if ((this._data.length <= 1)
			          && (this._canFetch === true)
			          && (this._closed === false)
			          && (this._fetching === false)) {
			            this._fetch();
			        }
			      }
			    }
			    else {
			      reject(new Err.ReqlDriverError('No more rows in the '+this._type))
			    }
			  }
			}
			Cursor.prototype._pushError = function(error) {
			  this._data.push([error]);
			  this._flush();
			}

			Cursor.prototype._done = function() {
			  this._canFetch = false;
			}

			Cursor.prototype._set = function(ar) {
			  this._fetching = false;
			  this._canFetch = false;
			  if (ar.length > 0) {
			    this._data.push(ar);
			  }
			  this._flush();
			}

			Cursor.prototype.close = function(callback) {
			  var self = this;

			  self._closed = true;

			  var p = new Promise(function(resolve, reject) {
			    if ((self._canFetch === false) && (self._fetching === false)) {
			      resolve()
			    }
			    else { // since v0_4 (RethinkDB 2.0) we can (must) force a STOP request even if a CONTINUE query is pending
			      self.connection._end(self.token, resolve, reject);
			    }
			  }).nodeify(callback);
			  return p;
			}
			Cursor.prototype._each = function(callback, onFinish) {
			  if (this._closed === true) {
			    return callback(new Err.ReqlDriverError('You cannot retrieve data from a cursor that is closed'));
			  }
			  var self = this;

			  var reject = function(err) {
			    if (err.message === 'No more rows in the '+self._type+'.') {
			      if (typeof onFinish === 'function') {
			        onFinish();
			      }
			    }
			    else {
			      callback(err);
			    }
			  }
			  var resolve = function(data) {
			    var keepGoing = callback(null, data);
			    if (keepGoing === false) {
			      if (typeof onFinish === 'function') {
			        onFinish();
			      }
			    }
			    else {
			      if (self._closed === false) {
			        self._next().then(resolve).error(function(error) {
			          if ((error.message !== 'You cannot retrieve data from a cursor that is closed.') &&
			              (error.message.match(/You cannot called `next` on a closed/) === null)) {
			            reject(error);
			          }
			        });
			      }
			    }
			  }

			  self._next().then(resolve).error(function(error) {
			    // We can silence error when the cursor is closed as this 
			    if ((error.message !== 'You cannot retrieve data from a cursor that is closed.') &&
			        (error.message.match(/You cannot called `next` on a closed/) === null)) {
			      reject(error);
			    }

			  });
			}
			Cursor.prototype._makeEmitter = function() {
			  this.next = function() {
			    throw new Err.ReqlDriverError('You cannot called `next` once you have bound listeners on the '+this._type)
			  }
			  this.each = function() {
			    throw new Err.ReqlDriverError('You cannot called `each` once you have bound listeners on the '+this._type)
			  }
			  this.toArray = function() {
			    throw new Err.ReqlDriverError('You cannot called `toArray` once you have bound listeners on the '+this._type)
			  }
			  this._eventEmitter = new EventEmitter();
			}
			Cursor.prototype._eachCb = function(err, data) {
			  // We should silent things if the cursor/feed is closed
			  if (this._closed === false) {
			    if (err) {
			      this._eventEmitter.emit('error', err);
			    }
			    else {
			      this._eventEmitter.emit('data', data);
			    }
			  }
			}

			var methods = [
			  'addListener',
			  'on',
			  'once',
			  'removeListener',
			  'removeAllListeners',
			  'setMaxListeners',
			  'listeners',
			  'emit'
			];

			for(var i=0; i<methods.length; i++) {
			  (function(n) {
			    var method = methods[n];
			    Cursor.prototype[method] = function() {
			      var self = this;
			      if (self._eventEmitter == null) {
			        self._makeEmitter();
			        setImmediate(function() {
			          if ((self._type === 'feed') || (self._type === 'atomFeed')) {
			            self._each(self._eachCb.bind(self));
			          }
			          else {
			            self._each(self._eachCb.bind(self), function() {
			              self._eventEmitter.emit('end');
			            });
			          }
			        });
			      }
			      var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			      self._eventEmitter[method].apply(self._eventEmitter, _args);
			    };
			  })(i);
			}

			module.exports = Cursor;


		/***/ },
		/* 53 */
		/***/ function(module, exports, __webpack_require__) {

			var Readable = __webpack_require__(54).Readable;
			var Cursor = __webpack_require__(52);
			var util = __webpack_require__(51);

			// Experimental, but should work fine.
			function ReadableStream(options, cursor) {
			  if (cursor) this._cursor = cursor;
			  this._pending = 0; // How many time we called _read while no cursor was available
			  this._index = 0;
			  this._maxRecursion = 1000; // Hardcoded
			  this._highWaterMark = options.highWaterMark;

			  Readable.call(this, {
			    objectMode: true,
			    highWaterMark: this._highWaterMark
			  });
			};
			util.inherits(ReadableStream, Readable);


			ReadableStream.prototype._setCursor = function(cursor) {
			  if (cursor instanceof Cursor === false) {
			    this.emit('error', new Error('Cannot create a stream on a single value.'));
			    return this;
			  }
			  this._cursor = cursor;
			  this._fetchAndDecrement();
			}
			ReadableStream.prototype._read = function(size) {
			  this._count++;
			  if (this._cursor === undefined) {
			    this._pending++;
			    return;
			  }

			  this._recursion = 0;
			  this._fetch();
			}

			//TODO: Refactor with _fetch?
			ReadableStream.prototype._fetchAndDecrement = function() {
			  var self = this;
			  self._pending--;
			  if (self._pending < 0) {
			    return;
			  }

			  if (self._cursor._closed === true) {
			    self.push(null);
			  }
			  else {
			    self._cursor._next().then(function(data) {
			      // Silently drop null values for now
			      if (data === null) {
			        if (self._recursion++ === self._maxRecursion) {
			          //Avoid maximum call stack errors
			          process.nextTick(function() {
			            self._fetchAndDecrement();
			          });
			        }
			        else {
			          self._fetchAndDecrement();
			        }
			      }
			      else {
			        if (self.push(data) !== false) {
			          if (self._recursion++ === self._maxRecursion) {
			            process.nextTick(function() {
			              self._fetchAndDecrement();
			            });
			          }
			          else {
			            self._fetchAndDecrement();
			          }
			        }
			      }
			    }).error(function(error) {
			      if (error.message.match(/No more rows in the/)) {
			        self.push(null);
			      }
			      else if (error.message === 'You cannot retrieve data from a cursor that is closed.') {
			        // if the user call `close`, the cursor may reject pending requests. We just
			        // ignore them here.
			      }
			      else {
			        self.emit('error', error);
			      }
			    });
			  }
			}

			ReadableStream.prototype._fetch = function() {
			  var self = this;
			  if (self._cursor._closed === true) {
			    self.push(null);
			  }
			  else {
			    self._cursor._next().then(function(data) {
			      // Silently drop null values for now
			      if (data === null) {
			        if (self._recursion++ === self._maxRecursion) {
			          process.nextTick(function() {
			            self._fetch();
			          });
			        }
			        else {
			          self._fetch();
			        }
			      }
			      else {
			        if (self.push(data) !== false) {
			          if (self._recursion++ === self._maxRecursion) {
			            process.nextTick(function() {
			              self._fetch();
			            });
			          }
			          else {
			            self._fetch();
			          }
			        }
			      }
			    }).error(function(error) {
			      if (error.message.match(/No more rows in the/)) {
			        self.push(null);
			      }
			      else if (error.message === 'You cannot retrieve data from a cursor that is closed.') {
			        // if the user call `close`, the cursor may reject pending requests. We just
			        // ignore them here.
			      }
			      else {
			        self.emit('error', error);
			      }
			    });
			  }
			}


			ReadableStream.prototype.close = function() {
			  this.push(null);
			  return this._cursor.close();
			}

			module.exports = ReadableStream;


		/***/ },
		/* 54 */
		/***/ function(module, exports) {

			module.exports = __webpack_require__(12);

		/***/ },
		/* 55 */
		/***/ function(module, exports) {

			// Metadata we keep per query
			function Metadata(resolve, reject, query, options) {
			  this.resolve = resolve;
			  this.reject = reject;
			  this.query = query; // The query in case we have to build a backtrace
			  this.options = options;
			  this.cursor = false;
			}

			Metadata.prototype.setCursor = function() {
			  this.cursor = true;
			}

			Metadata.prototype.setEnd = function(resolve, reject) {
			  this.endResolve = resolve;
			  this.endReject = reject;
			}

			Metadata.prototype.setCallbacks = function(resolve, reject) {
			  this.resolve = resolve;
			  this.reject = reject;
			}
			Metadata.prototype.removeCallbacks = function() {
			  this.resolve = null;
			  this.reject = null;
			}
			Metadata.prototype.removeEndCallbacks = function() {
			  this.endResolve = null;
			  this.endReject = null;
			}

			module.exports = Metadata;


		/***/ },
		/* 56 */
		/***/ function(module, exports, __webpack_require__) {

			var Promise = __webpack_require__(3);
			var protodef = __webpack_require__(42);
			var termTypes = protodef.Term.TermType;

			var Error = __webpack_require__(49);
			var helper = __webpack_require__(41);
			var ReadableStream = __webpack_require__(53);
			var WritableStream = __webpack_require__(57);
			var TransformStream = __webpack_require__(58);

			function Term(r, error, value) {
			    var self = this;
			    var term = function(field) {
			        if (Term.prototype._fastArity(arguments.length, 1) === false) {
			            var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			            Term.prototype._arity(_args, 1, '(...)', self);
			        }
			        return term.bracket(field);
			    }
			    helper.changeProto(term, self);

			    if (value === undefined) {
			        term._query = [];
			    }
			    else {
			        term._query = value;
			    }
			    term._r = r; // Keep a reference to r for global settings
			    term._error = error || null; // We bubble up operational errors by keeping a reference here

			    return term;
			}

			// run([connection][, options][, callback])
			Term.prototype.run = function(connection, options, callback) {
			    var self = this;

			    if (self._error) {
			        return new Promise(function(resolve, reject) {
			            reject(self._error);
			        });
			    }

			    if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
			        if (typeof options === 'function') {
			            callback = options;
			            options = {};
			        }
			        else {
			            if (!helper.isPlainObject(options)) options = {};
			        }

			        if (connection._isOpen() !== true) {
			            return new Promise(function(resolve, reject) {
			                reject(new Error.ReqlDriverError('`run` was called with a closed connection', self._query));
			            });
			        }
			        var p = new Promise(function(resolve, reject) {
			            var token = connection.token++;

			            var query = [protodef.Query.QueryType.START];
			            query.push(self._query);

			            var _options = {};
			            var sendOptions = false;
			            if (connection.db != null) {
			                sendOptions = true;
			                _options.db = self._r.db(connection.db)._query;
			            }

			            //For testing only
			            if (connection.max_batch_rows) {
			                sendOptions = true;
			                _options.max_batch_rows = connection.max_batch_rows;
			            }
			            if (self._r.arrayLimit != null) {
			                sendOptions = true;
			                _options[self._translateArgs['arrayLimit']] = self._r.arrayLimit;
			            };


			            var keepGoing = true; // we need it just to avoir calling resolve/reject multiple times
			            helper.loopKeys(options, function(options, key) {
			                if (keepGoing === true) {
			                    if ((key === 'useOutdated') || (key === 'durability') || (key === 'db') ||
			                        (key === 'noreply') || (key === 'arrayLimit') || (key === 'profile')) {

			                        sendOptions = true;
			                        if (key === 'db') {
			                            _options[key] = self._r.db(options[key])._query;
			                        }
			                        else if (self._translateArgs.hasOwnProperty(key)) {
			                            _options[self._translateArgs[key]] = new Term(self._r).expr(options[key])._query;
			                        }
			                        else {
			                            _options[key] = new Term(self._r).expr(options[key])._query;
			                        }
			                    }
			                    else if ((key !== 'timeFormat') && (key !== 'groupFormat') &&
			                            (key !== 'binaryFormat') && (key !== 'cursor') &&
			                            (key !== 'readable') && (key !== 'writable') &&
			                            (key !== 'transform') && (key !== 'stream') &&
			                            (key !== 'highWaterMark')) {
			                        reject(new Error.ReqlDriverError('Unrecognized option `'+key+'` in `run`. Available options are useOutdated <bool>, durability <string>, noreply <bool>, timeFormat <string>, groupFormat: <string>, profile <bool>, binaryFormat <bool>, cursor <bool>, stream <bool>'));
			                        keepGoing = false;
			                    }
			                }
			            });

			            if (keepGoing === false) {
			                connection.emit('release');
			                return // The promise was rejected in the loopKeys
			            }

			            if (sendOptions === true) {
			                query.push(_options);
			            }
			            connection._send(query, token, resolve, reject, self._query, options);
			        }).nodeify(callback);
			    }
			    else {
			        var poolMaster = self._r.getPoolMaster(); // if self._r is defined, so is self._r.getPool()
			        if (!poolMaster) {
			            throw new Error.ReqlDriverError('`run` was called without a connection and no pool has been created', self._query);
			        }
			        else {
			            if (typeof connection === 'function') {
			                // run(callback);
			                callback = connection;
			                options = {};
			            }
			            else if (helper.isPlainObject(connection)) {
			                // run(options[, callback])
			                callback = options;
			                options = connection;
			            }
			            else {
			                options = {};
			            }


			            var p = new Promise(function(resolve, reject) {
			                poolMaster.getConnection().then(function(connection) {
			                    var token = connection.token++;
			                    var query = [protodef.Query.QueryType.START];
			                    query.push(self._query);

			                    var _options = {};
			                    var sendOptions = false;
			                    if (connection.db != null) {
			                        sendOptions = true;
			                        _options.db = self._r.db(connection.db)._query;
			                    }
			                    if (self._r.arrayLimit != null) {
			                        sendOptions = true;
			                        _options[self._translateArgs['arrayLimit']] = self._r.arrayLimit;
			                    };

			                    var keepGoing = true;
			                    helper.loopKeys(options, function(options, key) {
			                        if (keepGoing === true) {
			                            if ((key === 'useOutdated') || (key === 'durability') || (key === 'db') ||
			                               (key === 'noreply') || (key === 'arrayLimit') || (key === 'profile')) {

			                                sendOptions = true;
			                                if (key === 'db') {
			                                    _options[key] = self._r.db(options[key])._query;
			                                }
			                                else if (self._translateArgs.hasOwnProperty(key)) {
			                                    _options[self._translateArgs[key]] = new Term(self._r).expr(options[key])._query
			                                }
			                                else {
			                                    _options[key] = new Term(self._r).expr(options[key])._query
			                                }
			                            }
			                            else if ((key !== 'timeFormat') && (key !== 'groupFormat') &&
			                                    (key !== 'binaryFormat') && (key !== 'cursor') &&
			                                    (key !== 'readable') && (key !== 'writable') &&
			                                    (key !== 'transform') && (key !== 'stream') &&
			                                    (key !== 'highWaterMark')) {

			                                setTimeout( function() {
			                                    reject(new Error.ReqlDriverError('Unrecognized option `'+key+'` in `run`. Available options are useOutdated <bool>, durability <string>, noreply <bool>, timeFormat <string>, groupFormat: <string>, profile <bool>, binaryFormat <string>, cursor <bool>, stream <bool>'));
			                                }, 0);
			                                keepGoing = false;
			                                return false;
			                            }
			                        }
			                    });

			                    if (keepGoing === false) {
			                        connection.emit('release');
			                        return // The promise was rejected in the loopKeys
			                    }

			                    if (sendOptions === true) {
			                        query.push(_options);
			                    }
			                    connection._send(query, token, resolve, reject, self._query, options);
			                }).error(function(error) {
			                    reject(error);
			                });
			            }).nodeify(callback);
			        }
			    }

			    //if (options.noreply) return self; // Do not return a promise if the user ask for no reply.

			    return p;
			}

			Term.prototype.toStream = function(connection, options) {
			    if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
			        if (helper.isPlainObject(options) === false) {
			            options = {};
			        }
			        if (options.readable === true) {
			            return this._toReadableStream(connection, options);
			        }
			        else if (options.writable === true) {
			            return this._toWritableStream(connection, options);
			        }
			        else if (options.transform === true) {
			            return this._toTransformStream(connection, options);
			        }
			        else {
			            return this._toReadableStream(connection, options);
			        }
			    }
			    else {
			        options = connection;
			        if (helper.isPlainObject(options) === false) {
			            options = {};
			        }
			        if (options.readable === true) {
			            return this._toReadableStream(options);
			        }
			        else if (options.writable === true) {
			            return this._toWritableStream(options);
			        }
			        else if (options.transform === true) {
			            return this._toTransformStream(options);
			        }
			        else {
			            return this._toReadableStream(options);
			        }
			    }
			}

			Term.prototype._toReadableStream = function(connection, options) {
			    var stream;

			    var _options = {};
			    if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
			        //toStream make sure that options is an object
			        helper.loopKeys(options, function(obj, key) {
			            _options[key] = obj[key];
			        });
			        _options.cursor = true;
			        stream = new ReadableStream(_options);
			        this.run(connection, _options).then(function(cursor) {
			            stream._setCursor(cursor);
			        }).error(function(error) {
			            stream.emit('error', error);
			        });
			    }
			    else {
			        helper.loopKeys(connection, function(obj, key) {
			            _options[key] = obj[key];
			        });
			        _options.cursor = true;
			        stream = new ReadableStream(_options);
			        this.run(_options).then(function(cursor) {
			            stream._setCursor(cursor);
			        }).error(function(error) {
			            stream.emit('error', error);
			        });
			    }
			    return stream;
			}

			Term.prototype._toWritableStream = function(connection, options) {
			    if (this._query[0] !== termTypes.TABLE) {
			        throw new Error.ReqlDriverError('Cannot create a writable stream on something else than a table.');
			    }

			    if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
			        return new WritableStream(this, options, connection);
			    }
			    else {
			        return new WritableStream(this, connection);
			    }
			}
			Term.prototype._toTransformStream = function(connection, options) {
			    if (this._query[0] !== termTypes.TABLE) {
			        throw new Error.ReqlDriverError('Cannot create a writable stream on something else than a table.');
			    }

			    if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
			        return new TransformStream(this, options, connection);
			    }
			    else {
			        return new TransformStream(this, connection);
			    }
			}


			// Manipulating databases
			Term.prototype.dbCreate = function(db) {
			    // Check for arity is done in r.prototype.dbCreate
			    this._noPrefix(this, 'dbCreate');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DB_CREATE)
			    term._query.push([new Term(this._r).expr(db)._query])
			    return term;
			}
			Term.prototype.dbDrop = function(db) {
			    this._noPrefix(this, 'dbDrop');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DB_DROP)
			    term._query.push([new Term(this._r).expr(db)._query])
			    return term;
			}
			Term.prototype.dbList = function() {
			    this._noPrefix(this, 'dbList');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DB_LIST)
			    return term;
			}

			// Manipulating Tables
			Term.prototype.tableCreate = function(table, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 1, 2, 'tableCreate', self);
			    }


			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.TABLE_CREATE)

			    var args = [];
			    if (Array.isArray(self._query) && (self._query.length > 0)) {
			        args.push(self._query); // Push db
			    }
			    args.push(new Term(self._r).expr(table)._query)
			    term._query.push(args);

			    if (helper.isPlainObject(options)) {
			        // Check for non valid key
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'primaryKey')
			                    && (key !== 'durability')
			                    && (key !== 'shards')
			                    && (key !== 'replicas')
			                    && (key !== 'primaryReplicaTag')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `tableCreate`', self._query, 'Available options are primaryKey <string>, durability <string>, shards <number>, replicas <number/object>, primaryReplicaTag <object>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}

			Term.prototype.tableDrop = function(table) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'tableDrop', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TABLE_DROP)

			    var args = [];
			    if (Array.isArray(this._query) && (this._query.length > 0)) {
			        args.push(this._query); // push db
			    }
			    args.push(new Term(this._r).expr(table)._query)
			    term._query.push(args);
			    return term;
			}
			Term.prototype.tableList = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'tableList', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TABLE_LIST);

			    var args = [];
			    if (Array.isArray(this._query) && (this._query.length > 0)) {
			        args.push(this._query);
			    }
			    if (args.length > 0) {
			        term._query.push(args);
			    }
			    return term;
			}
			Term.prototype.indexList = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'indexList', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INDEX_LIST);
			    term._query.push([this._query]);
			    return term;
			}
			Term.prototype.indexCreate = function(name, fn, options) {
			    if (this._fastArityRange(arguments.length, 1, 3) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 1, 3, 'indexCreate', this);
			    }

			    if ((options == null) && (helper.isPlainObject(fn))) {
			        options = fn;
			        fn = undefined;
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INDEX_CREATE);
			    var args = [this._query];
			    args.push(new Term(this._r).expr(name)._query);
			    if (typeof fn !== 'undefined') args.push(new Term(this._r).expr(fn)._wrap()._query);
			    term._query.push(args);

			    if (helper.isPlainObject(options)) {
			        // There is no need to translate here
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'multi') && (key !== 'geo')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `indexCreate`', self._query, 'Available option is multi <bool> and geo <bool>');
			            }
			        });
			        term._query.push(new Term(this._r).expr(options)._query);
			    }
			    return term;
			}
			Term.prototype.indexDrop = function(name) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'indexDrop', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INDEX_DROP);
			    term._query.push([this._query, new Term(this._r).expr(name)._query]);
			    return term;
			}

			Term.prototype.indexStatus = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INDEX_STATUS);
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.indexWait = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INDEX_WAIT);
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.indexRename = function(oldName, newName, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 2, 3) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 2, 3, 'indexRename', self);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INDEX_RENAME);
			    var args = [this._query, new Term(this._r).expr(oldName)._query, new Term(this._r).expr(newName)._query];
			    term._query.push(args);

			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if (key !== 'overwrite') {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `indexRename`', self._query, 'Available options are overwrite <bool>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }


			    return term;
			}
			Term.prototype.changes = function(options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 0, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 0, 1, 'changes', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.CHANGES);
			    term._query.push([self._query]);
			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'squash') && (key !== 'includeStates')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `changes`', self._query, 'Available options are squash <bool>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}

			// Writing data
			Term.prototype.insert = function(documents, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 1, 2, 'insert', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.INSERT);
			    term._query.push([self._query, new Term(self._r).expr(documents)._query]);

			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'returnChanges') && (key !== 'durability') && (key !== 'conflict')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `insert`', self._query, 'Available options are returnChanges <bool>, durability <string>, conflict <string>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.update = function(newValue, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 1, 2, 'update', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.UPDATE);
			    term._query.push([self._query, new Term(self._r).expr(newValue)._wrap()._query]);

			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'returnChanges') && (key !== 'durability') && (key !== 'nonAtomic')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `update`', self._query, 'Available options are returnChanges <bool>, durability <string>, nonAtomic <bool>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.replace = function(newValue, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 1, 2, 'replace', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.REPLACE);
			    term._query.push([self._query, new Term(self._r).expr(newValue)._wrap()._query]);

			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'returnChanges') && (key !== 'durability') && (key !== 'nonAtomic')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `replace`', self._query, 'Available options are returnChanges <bool>, durability <string>, nonAtomic <bool>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.delete = function(options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 0, 1, 'delete', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.DELETE);
			    term._query.push([self._query]);

			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'returnChanges') && (key !== 'durability')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `delete`', self._query, 'Available options are returnChanges <bool>, durability <string>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.sync = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'sync', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SYNC)
			    term._query.push([this._query]);
			    return term;
			}

			// Selecting data
			Term.prototype.db = function(db) {
			    this._noPrefix(this, 'db');
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'db', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DB)
			    term._query.push([new Term(this._r).expr(db)._query])
			    return term;
			}
			Term.prototype.table = function(table, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 1, 2, 'table', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.TABLE)

			    var args = [];
			    if (Array.isArray(self._query) && (self._query.length > 0)) {
			        args.push(self._query);
			    }
			    args.push(new Term(self._r).expr(table)._query)
			    term._query.push(args);

			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if (key !== 'useOutdated') {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `table`', self._query, 'Available option is useOutdated <bool>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.get = function(primaryKey) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'get', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.GET);
			    term._query.push([this._query, new Term(this._r).expr(primaryKey)._query])
			    return term;
			}
			Term.prototype.getAll = function() {
			    // We explicitly _args here, so fastArityRange is not useful
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'getAll', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.GET_ALL);

			    var args = [];
			    args.push(this._query);
			    for(var i=0; i<_args.length-1; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    if ((_args.length > 1) && (helper.isPlainObject(_args[_args.length-1])) && (_args[_args.length-1].index !== undefined)) {
			        term._query.push(args);
			        term._query.push(new Term(this._r).expr(translateOptions(_args[_args.length-1]))._query);
			    }
			    else {
			        args.push(new Term(this._r).expr(_args[_args.length-1])._query)
			        term._query.push(args);
			    }
			    return term;
			}
			Term.prototype.between = function(start, end, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 2, 3) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 2, 3, 'between', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.BETWEEN);
			    term._query.push([self._query, new Term(self._r).expr(start)._query, new Term(self._r).expr(end)._query])

			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'index') && (key !== 'leftBound') && (key !== 'rightBound')){
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `between`', self._query, 'Available options are index <string>, leftBound <string>, rightBound <string>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.minval = function() {
			    var term = new Term(this._r);
			    term._query.push(termTypes.MINVAL);
			    return term;
			}
			Term.prototype.maxval = function() {
			    var term = new Term(this._r);
			    term._query.push(termTypes.MAXVAL);
			    return term;
			}

			Term.prototype.filter = function(filter, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 1, 2, 'filter', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.FILTER);
			    term._query.push([self._query, new Term(self._r).expr(filter)._wrap()._query])

			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if (key !== 'default') {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `filter`', self._query, 'Available option is filter');
			            }
			        })
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}

			// Joins
			Term.prototype.innerJoin = function(sequence, predicate) {
			    if (this._fastArity(arguments.length, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 2, 'innerJoin', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INNER_JOIN);
			    var args = [this._query];
			    args.push(new Term(this._r).expr(sequence)._query);
			    args.push(new Term(this._r).expr(predicate)._wrap()._query);
			    term._query.push(args)

			    return term;
			}
			Term.prototype.outerJoin = function(sequence, predicate) {
			    if (this._fastArity(arguments.length, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 2, 'outerJoin', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.OUTER_JOIN);
			    var args = [this._query];
			    args.push(new Term(this._r).expr(sequence)._query);
			    args.push(new Term(this._r).expr(predicate)._wrap()._query);
			    term._query.push(args)

			    return term;
			}
			Term.prototype.eqJoin = function(rightKey, sequence, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 2, 3) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 2, 3, 'eqJoin', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.EQ_JOIN);
			    var args = [self._query];
			    args.push(new Term(self._r).expr(rightKey)._wrap()._query);
			    args.push(new Term(self._r).expr(sequence)._query);
			    term._query.push(args)

			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if (key !== 'index') {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `eqJoin`', self._query, 'Available option is index <string>');
			            }
			        })
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.zip = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'zip', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.ZIP);
			    term._query.push([this._query]);
			    return term;
			}



			// Transformation
			Term.prototype.map = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'map', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MAP);
			    var args = [];
			    if (Array.isArray(this._query) && (this._query.length > 0)) {
			        args.push(this._query);
			    }
			    for(var i=0; i<_args.length-1; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    // Make sure that we don't push undefined if no argument is passed to map,
			    // in which case the server will handle the case and return an error.
			    if (_args.length> 0) {
			        args.push(new Term(this._r).expr(_args[_args.length-1])._wrap()._query)
			    }
			    term._query.push(args);

			    return term;
			}
			Term.prototype.withFields = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'withFields', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.WITH_FIELDS);
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);

			    return term;
			}
			Term.prototype.concatMap = function(transformation) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'concatMap', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.CONCAT_MAP);
			    var args = [this._query];
			    args.push(new Term(this._r).expr(transformation)._wrap()._query)
			    term._query.push(args);

			    return term;
			}
			Term.prototype.orderBy = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'orderBy', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.ORDER_BY);

			    var args = [this._query];
			    for(var i=0; i<_args.length-1; i++) {
			        if ((_args[i] instanceof Term) &&
			                ((_args[i]._query[0] === termTypes.DESC) || (_args[i]._query[0] === termTypes.ASC))) {
			            args.push(new Term(this._r).expr(_args[i])._query)
			        }
			        else {
			            args.push(new Term(this._r).expr(_args[i])._wrap()._query)
			        }
			    }
			    // We actually don't need to make the difference here, but...
			    if ((_args.length > 0) && (helper.isPlainObject(_args[_args.length-1])) && (_args[_args.length-1].index !== undefined)) {
			        term._query.push(args);
			        term._query.push(new Term(this._r).expr(translateOptions(_args[_args.length-1]))._query);
			    }
			    else {
			        if ((_args[_args.length-1] instanceof Term) &&
			            ((_args[_args.length-1]._query[0] === termTypes.DESC) || (_args[_args.length-1]._query[0] === termTypes.ASC))) {
			            args.push(new Term(this._r).expr(_args[_args.length-1])._query)
			        }
			        else {
			            args.push(new Term(this._r).expr(_args[_args.length-1])._wrap()._query)
			        }
			        term._query.push(args);
			    }
			    return term;

			}
			Term.prototype.desc = function(field) {
			    this._noPrefix(this, 'desc');
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'desc', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DESC)
			    term._query.push([new Term(this._r).expr(field)._wrap()._query])
			    return term;
			}
			Term.prototype.asc = function(field) {
			    this._noPrefix(this, 'asc');
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'asc', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.ASC)
			    term._query.push([new Term(this._r).expr(field)._wrap()._query])
			    return term;
			}
			Term.prototype.skip = function(value) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'skip', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SKIP)
			    term._query.push([this._query, new Term(this._r).expr(value)._query])
			    return term;
			}
			Term.prototype.limit = function(value) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'limit', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.LIMIT)
			    term._query.push([this._query, new Term(this._r).expr(value)._query])
			    return term;
			}
			Term.prototype.slice = function(start, end, options) {
			    if (this._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 1, 3, 'slice', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SLICE);

			    var args = [];
			    args.push(this._query);
			    args.push(new Term(this._r).expr(start)._query);

			    if ((end !== undefined) && (options !== undefined)) {
			        args.push(new Term(this._r).expr(end)._query);
			        term._query.push(args);
			        term._query.push(new Term(this._r).expr(translateOptions(options))._query);
			    }
			    else if ((end !== undefined) && (options === undefined)) {
			        if (helper.isPlainObject(end) === false) {
			            args.push(new Term(this._r).expr(end)._query);
			            term._query.push(args);
			        }
			        else {
			            term._query.push(args);
			            term._query.push(new Term(this._r).expr(translateOptions(end))._query);
			        }
			    }
			    else { // end and options are both undefined
			        term._query.push(args);
			    }
			    return term;
			}
			Term.prototype.nth = function(value) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'nth', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.NTH)
			    term._query.push([this._query, new Term(this._r).expr(value)._query])
			    return term;
			}
			Term.prototype.offsetsOf = function(predicate) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'indexesOf', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.OFFSETS_OF)
			    term._query.push([this._query, new Term(this._r).expr(predicate)._wrap()._query])
			    return term;
			}
			Term.prototype.indexesOf = Term.prototype.offsetsOf;

			Term.prototype.isEmpty = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'isEmpty', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.IS_EMPTY)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.union = function(other) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'union', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.UNION)
			    term._query.push([this._query, new Term(this._r).expr(other)._query])
			    return term;
			}
			Term.prototype.sample = function(size) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'sample', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SAMPLE)
			    term._query.push([this._query, new Term(this._r).expr(size)._query])
			    return term;
			}

			// Aggregations
			Term.prototype.reduce = function(func) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'reduce', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.REDUCE)
			    term._query.push([this._query, new Term(this._r).expr(func)._wrap()._query])
			    return term;
			}
			Term.prototype.count = function(filter) {
			    if (this._fastArityRange(arguments.length, 0, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 0, 1, 'count', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.COUNT);
			    var args = [];
			    args.push(this._query);
			    if (filter !== undefined) {
			        args.push(new Term(this._r).expr(filter)._wrap()._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.distinct = function(options) {
			    var self= this;
			    if (self._fastArityRange(arguments.length, 0, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 0, 1, 'distinct', self);
			    }

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.DISTINCT)
			    term._query.push([self._query])

			    if (helper.isPlainObject(options)) {
			        var keepGoing = true;
			        helper.loopKeys(options, function(obj, key) {
			            if ((keepGoing === true) && (key !== 'index')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `distinct`', self._query, 'Available option is index: <string>');
			                keepGoing = false;
			            }
			        });
			        if (keepGoing === true) {
			            term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			        }
			    }

			    return term;
			}
			Term.prototype.group = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    var self = this;
			    self._arityRange(_args, 1, Infinity, 'group', self);

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.GROUP);
			    var args = [self._query];
			    for(var i=0; i<_args.length-1; i++) {
			        args.push(new Term(self._r).expr(_args[i])._wrap()._query)
			    }
			    if (_args.length > 0) {
			        if (helper.isPlainObject(_args[_args.length-1])) {
			            helper.loopKeys(_args[_args.length-1], function(obj, key) {
			               if ((key !== 'index')
			                && (key !==  'multi')) {
			                    throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `group`', self._query, 'Available options are index: <string>, multi <boolean>');
			                }
			            });
			            term._query.push(args);
			            term._query.push(new Term(self._r).expr(translateOptions(_args[_args.length-1]))._query);
			        }
			        else {
			            args.push(new Term(self._r).expr(_args[_args.length-1])._wrap()._query)
			            term._query.push(args);
			        }
			    }
			    else {
			        term._query.push(args);
			    }

			    return term;
			}
			Term.prototype.split = function(separator, max) {
			    if (this._fastArityRange(arguments.length, 0, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 0, 2, 'split', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SPLIT)
			    var args = [this._query];
			    if (separator !== undefined) {
			        args.push(new Term(this._r).expr(separator)._query)
			        if (max !== undefined) {
			            args.push(new Term(this._r).expr(max)._query)
			        }
			    }
			    term._query.push(args);

			    return term;
			}

			Term.prototype.ungroup = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'ungroup', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.UNGROUP)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.contains = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'contains', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.CONTAINS)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._wrap()._query)
			    }
			    term._query.push(args)
			    return term;
			}
			Term.prototype.sum = function(field) {
			    if (this._fastArityRange(arguments.length, 0, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 0, 1, 'sum', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SUM);
			    var args = [this._query];
			    if (field !== undefined) {
			        args.push(new Term(this._r).expr(field)._wrap()._query)
			    }
			    term._query.push(args)
			    return term;
			}
			Term.prototype.avg = function(field) {
			    if (this._fastArityRange(arguments.length, 0, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 0, 1, 'avg', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.AVG)
			    var args = [this._query];
			    if (field !== undefined) {
			        args.push(new Term(this._r).expr(field)._wrap()._query)
			    }
			    term._query.push(args)
			    return term;
			}
			Term.prototype.min = function(field) {
			    if (this._fastArityRange(arguments.length, 0, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 0, 1, 'min', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MIN)
			    var args = [this._query];
			    if (field !== undefined) {
			        if (helper.isPlainObject(field)) {
			          term._query.push(args)
			          term._query.push(new Term(this._r).expr(translateOptions(field))._query);
			        }
			        else {
			          args.push(new Term(this._r).expr(field)._wrap()._query)
			          term._query.push(args)
			        }
			    }
			    else {
			      term._query.push(args)
			    }
			    return term;
			}
			Term.prototype.max = function(field) {
			    if (this._fastArityRange(arguments.length, 0, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 0, 1, 'max', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MAX)
			    var args = [this._query];
			    if (field !== undefined) {
			        if (helper.isPlainObject(field)) {
			          term._query.push(args)
			          term._query.push(new Term(this._r).expr(translateOptions(field))._query);
			        }
			        else {
			          args.push(new Term(this._r).expr(field)._wrap()._query)
			          term._query.push(args)
			        }
			    }
			    else {
			      term._query.push(args)
			    }
			    return term;
			}



			// Document manipulation
			Term.prototype.row = function() {
			    this._noPrefix(this, 'row');
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'r.row', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.IMPLICIT_VAR)
			    return term;
			}
			Term.prototype.pluck = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'pluck', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.PLUCK)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args)
			    return term;
			}
			Term.prototype.without = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'without', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.WITHOUT)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args)
			    return term;
			}
			Term.prototype.merge = function(arg) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'merge', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MERGE)
			    term._query.push([this._query, new Term(this._r).expr(arg)._wrap()._query])
			    return term;
			}
			Term.prototype.literal = function(obj) {
			    this._noPrefix(this, 'literal');
			    // The test for arity is performed in r.literal

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.LITERAL);
			    if (arguments.length > 0) {
			      term._query.push([new Term(this._r).expr(obj)._query])
			    }
			    return term;
			}
			Term.prototype.append = function(value) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'append', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.APPEND)
			    term._query.push([this._query, new Term(this._r).expr(value)._query])
			    return term;
			}
			Term.prototype.prepend = function(value) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'prepend', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.PREPEND)
			    term._query.push([this._query, new Term(this._r).expr(value)._query])
			    return term;
			}
			Term.prototype.difference = function(other) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'difference', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DIFFERENCE)
			    term._query.push([this._query, new Term(this._r).expr(other)._query])
			    return term;
			}
			Term.prototype.setInsert = function(other) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'setInsert', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SET_INSERT)
			    term._query.push([this._query, new Term(this._r).expr(other)._query])
			    return term;
			}
			Term.prototype.setUnion = function(other) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'setUnion', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SET_UNION)
			    term._query.push([this._query, new Term(this._r).expr(other)._query])
			    return term;
			}
			Term.prototype.setIntersection = function(other) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'setIntersection', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SET_INTERSECTION)
			    term._query.push([this._query, new Term(this._r).expr(other)._query])
			    return term;
			}
			Term.prototype.setDifference = function(other) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'setDifference', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SET_DIFFERENCE)
			    term._query.push([this._query, new Term(this._r).expr(other)._query])
			    return term;
			}
			Term.prototype.getField = function(field) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, '(...)', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.GET_FIELD)
			    term._query.push([this._query, new Term(this._r).expr(field)._query])
			    return term;
			}
			Term.prototype.bracket = function(field) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, '(...)', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.BRACKET)
			    term._query.push([this._query, new Term(this._r).expr(field)._query])
			    return term;
			}

			Term.prototype.hasFields = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'hasFields', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.HAS_FIELDS)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args)
			    return term;

			}
			Term.prototype.insertAt = function(index, value) {
			    if (this._fastArity(arguments.length, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 2, 'insertAt', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INSERT_AT)
			    term._query.push([this._query, new Term(this._r).expr(index)._query, new Term(this._r).expr(value)._query])
			    return term;
			}
			Term.prototype.spliceAt = function(index, array) {
			    if (this._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 1, 2, 'spliceAt', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SPLICE_AT)
			    term._query.push([this._query, new Term(this._r).expr(index)._query, new Term(this._r).expr(array)._query])
			    return term;
			}
			Term.prototype.deleteAt = function(start, end) {
			    if (this._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 1, 2, 'deleteAt', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DELETE_AT);
			    var args = [this._query, new Term(this._r).expr(start)._query];
			    if (end !== undefined) {
			        args.push(new Term(this._r).expr(end)._query)
			    }
			    term._query.push(args)
			    return term;
			}
			Term.prototype.changeAt = function(index, value) {
			    if (this._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 1, 2, 'changeAt', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.CHANGE_AT);
			    var args = [this._query];
			    args.push(new Term(this._r).expr(index)._query)
			    args.push(new Term(this._r).expr(value)._query)
			    term._query.push(args)
			    return term;
			}
			Term.prototype.keys = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'keys', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.KEYS)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.object = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._noPrefix(this, 'object');
			    this._arityRange(_args, 0, Infinity, 'object', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.OBJECT)
			    var args = [];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args)
			    return term;
			}



			// String
			Term.prototype.match = function(regex) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'match', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MATCH)
			    term._query.push([this._query, new Term(this._r).expr(regex)._query])
			    return term;
			}
			Term.prototype.upcase = function(regex) {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'upcase', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.UPCASE)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.downcase = function(regex) {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'upcase', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DOWNCASE)
			    term._query.push([this._query])
			    return term;
			}




			// Math and Logic
			Term.prototype.add = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'add', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.ADD)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.sub = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'sub', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SUB)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.mul = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'mul', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MUL)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.div = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'div', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DIV)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.mod = function(b) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'mod', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MOD)
			    term._query.push([this._query, new Term(this._r).expr(b)._query])
			    return term;
			}
			Term.prototype.and = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'and', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.AND)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.or = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'or', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.OR)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.eq = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'eq', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.EQ)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.ne = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'ne', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.NE)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.gt = function(other) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'gt', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.GT)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.ge = function(other) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'ge', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.GE)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.lt = function(other) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'lt', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.LT)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.le = function(other) {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'le', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.LE)
			    var args = [this._query];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.not = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'not', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.NOT)
			    term._query.push([this._query]);
			    return term;
			}
			Term.prototype.random = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    var self = this;
			    self._noPrefix(this, 'random');
			    self._arityRange(_args, 0, 3, 'random', self);

			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.RANDOM);

			    var args = [];
			    for(var i=0; i<_args.length-1; i++) {
			        args.push(new Term(self._r).expr(_args[i])._query)
			    }
			    if (_args.length > 0) {
			        if (helper.isPlainObject(_args[_args.length-1])) {
			            helper.loopKeys(_args[_args.length-1], function(obj, key) {
			                if (key !== 'float') {
			                    throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `random`', self._query, 'Available option is float: <boolean>');
			                }
			            });
			            term._query.push(args);
			            term._query.push(new Term(self._r).expr(translateOptions(_args[_args.length-1]))._query);
			        }
			        else {
			            args.push(new Term(self._r).expr(_args[_args.length-1])._query)
			            term._query.push(args);
			        }
			    }
			    else {
			        term._query.push(args);
			    }
			    return term;
			}


			// Dates and times
			Term.prototype.now = function() {
			    this._noPrefix(this, 'now');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.NOW)
			    return term;
			}
			Term.prototype.time = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._noPrefix(this, 'time');
			    // Special check for arity
			    var foundArgs = false;
			    for(var i=0; i<_args.length; i++) {
			        if ((_args[i] instanceof Term) && (_args[i]._query[0] === termTypes.ARGS)) {
			            foundArgs = true;
			            break;
			        }
			    }
			    if (foundArgs === false) {
			        if ((_args.length !== 4) && (_args.length !== 7)) {
			            throw new Error.ReqlDriverError('`r.time` called with '+_args.length+' argument'+((_args.length>1)?'s':''), null, '`r.time` takes 4 or 7 arguments');
			        }
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TIME)
			    var args = [];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.epochTime = function(epochTime) {
			    this._noPrefix(this, 'epochTime');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.EPOCH_TIME)
			    term._query.push([new Term(this._r).expr(epochTime)._query])
			    return term;
			}
			Term.prototype.ISO8601 = function(isoTime, options) {
			    this._noPrefix(this, 'ISO8601');
			    if (this._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 1, 2, 'ISO8601', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.ISO8601)
			    term._query.push([new Term(this._r).expr(isoTime)._query])
			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if (key !== 'defaultTimezone') {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `ISO8601`. Available options are primaryKey <string>, durability <string>, datancenter <string>');
			            }
			        });
			        term._query.push(new Term(this._r).expr(translateOptions(options))._query);
			    }

			    return term;

			    return new ISO8601(this._r, isoTime, options);
			}
			Term.prototype.inTimezone = function(timezone) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'inTimezone', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.IN_TIMEZONE)
			    term._query.push([this._query, new Term(this._r).expr(timezone)._query])
			    return term;
			}
			Term.prototype.timezone = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'timezone', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TIMEZONE)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.during = function(left, right, options) {
			    if (this._fastArityRange(arguments.length, 2, 3) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 2, 3, 'during', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DURING);
			    var args = [];
			    args.push(this._query);
			    args.push(new Term(this._r).expr(left)._query);
			    args.push(new Term(this._r).expr(right)._query);

			    term._query.push(args);
			    if (helper.isPlainObject(options)) {
			        term._query.push(new Term(this._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.date = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'date', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DATE)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.timeOfDay = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'timeOfDay', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TIME_OF_DAY)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.year = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'year', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.YEAR)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.month = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'month', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MONTH)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.day = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'day', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DAY)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.dayOfYear = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'dayOfYear', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DAY_OF_YEAR)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.dayOfWeek = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'dayOfWeek', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DAY_OF_WEEK)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.hours = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'hours', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.HOURS)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.minutes = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'minutes', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MINUTES)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.seconds = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'seconds', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SECONDS)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.toISO8601 = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'toISO8601', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TO_ISO8601)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.toEpochTime = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'toEpochTime', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TO_EPOCH_TIME)
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.monday = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MONDAY);
			    return term;
			}
			Term.prototype.tuesday = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TUESDAY);
			    return term;
			}
			Term.prototype.wednesday = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.WEDNESDAY);
			    return term;
			}
			Term.prototype.thursday = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.THURSDAY);
			    return term;
			}
			Term.prototype.friday = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.FRIDAY);
			    return term;
			}
			Term.prototype.saturday = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SATURDAY);
			    return term;
			}
			Term.prototype.sunday = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SUNDAY);
			    return term;
			}

			Term.prototype.january = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.JANUARY);
			    return term;
			}
			Term.prototype.february = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.FEBRUARY);
			    return term;
			}
			Term.prototype.march = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MARCH);
			    return term;
			}
			Term.prototype.april = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.APRIL);
			    return term;
			}
			Term.prototype.may = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.MAY);
			    return term;
			}
			Term.prototype.june = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.JUNE);
			    return term;
			}
			Term.prototype.july = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.JULY);
			    return term;
			}
			Term.prototype.august = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.AUGUST);
			    return term;
			}
			Term.prototype.september = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.SEPTEMBER);
			    return term;
			}
			Term.prototype.october = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.OCTOBER);
			    return term;
			}
			Term.prototype.november = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.NOVEMBER);
			    return term;
			}
			Term.prototype.december = function() {
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DECEMBER);
			    return term;
			}


			Term.prototype.args = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._noPrefix(this, 'args');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.ARGS);
			    var args = [];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.do = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    this._arityRange(_args, 1, Infinity, 'do', this);

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.FUNCALL);
			    var args = [new Term(this._r).expr(_args[_args.length-1])._wrap()._query];
			    args.push(this._query);
			    for(var i=0; i<_args.length-1; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args)
			    return term;
			}


			Term.prototype.branch = function(predicate, trueBranch, falseBranch) {
			    this._noPrefix(this, 'branch');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.BRANCH)
			    var args = [];
			    args.push(new Term(this._r).expr(predicate)._query)
			    args.push(new Term(this._r).expr(trueBranch)._query)
			    args.push(new Term(this._r).expr(falseBranch)._query)
			    term._query.push(args)
			    return term;
			}
			Term.prototype.forEach = function(func) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'forEach', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.FOR_EACH);
			    term._query.push([this._query, new Term(this._r).expr(func)._wrap()._query]);
			    return term;
			}
			Term.prototype.default = function(expression) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'default', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.DEFAULT);
			    term._query.push([this._query, new Term(this._r).expr(expression)._query]);
			    return term;
			}
			Term.prototype.expr = function(expression, nestingLevel) {
			    var self = this;
			    self._noPrefix(self, 'expr');
			    if (self._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 1, 2, 'expr', self);
			    }

			    // undefined will be caught in the last else
			    var ar, obj;

			    if (expression === undefined) throw new Error.ReqlDriverError('Cannot convert `undefined` with r.expr()');

			    var _nestingLevel = nestingLevel;
			    if (_nestingLevel == null) {
			      _nestingLevel = self._r.nestingLevel;
			    }
			    //if (nestingLevel == null) nestingLevel = self._r.nestingLevel;
			    if (_nestingLevel < 0) throw new Error.ReqlDriverError('Nesting depth limit exceeded.\nYou probably have a circular reference somewhere')

			    if (expression instanceof Term) {
			        return expression;
			    }
			    else if (expression instanceof Function) {
			        return new Func(self._r, expression);
			    }
			    else if (expression instanceof Date) {
			        return new Term(self._r).ISO8601(expression.toISOString())
			    }
			    else if (Array.isArray(expression)) {
			        var term = new Term(self._r, self._error);
			        term._query.push(termTypes.MAKE_ARRAY);

			        var args = [];
			        for(var i=0; i<expression.length; i++) {
			            args.push(new Term(self._r).expr(expression[i], _nestingLevel-1)._query)
			        }
			        term._query.push(args);
			        return term;
			    }
			    else if (expression instanceof Buffer) {
			        return self._r.binary(expression);
			    }
			    else if (helper.isPlainObject(expression)) {
			        var optArgs = {};
			        helper.loopKeys(expression, function(expression, key) {
			            if (expression[key] !== undefined) {
			                optArgs[key] = new Term(self._r).expr(expression[key], _nestingLevel-1)._query;
			            }
			        });
			        return new Term(self._r, null, optArgs);
			    }
			    else { // Primitive
			        if (expression === null) {
			            return new Term(self._r, null, expression);
			        }
			        else if (typeof expression === 'string') {
			            // RethinkDB doesn't support the null character.
			            if (/\00/.test(expression)) {
			                self._error = new Error.ReqlDriverError('The null character is currently not supported by RethinkDB');
			            }
			            return new Term(self._r, self._error, expression);
			        }
			        else if (typeof expression === 'number') {
			            if (expression !== expression) {
			                self._error = new Error.ReqlDriverError('Cannot convert `NaN` to JSON');
			            }
			            else if (!isFinite(expression)) {
			                self._error = new Error.ReqlDriverError('Cannot convert `Infinity` to JSON');
			            }
			            return new Term(self._r, self._error, expression);
			        }
			        else if (typeof expression === 'boolean') {
			            return new Term(self._r, self._error, expression);
			        }
			        else {
			            self._error = new Error.ReqlDriverError('Cannot convert `'+expression+'` to datum.')
			        }
			    }
			    return self;
			}

			Term.prototype.binary = function(bin) {
			    this._noPrefix(this, 'binary');
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'binary', this);
			    }

			    var term;
			    if (bin instanceof Buffer) {
			        // We could use BINARY, and coerce `bin` to an ASCII string, but that
			        // will break if there is a null char
			        term = new Term(this._r, null, {
			            $reql_type$: 'BINARY',
			            data: bin.toString('base64')
			        });
			    }
			    else {
			        term = new Term(this._r);
			        term._query.push(termTypes.BINARY)
			        term._query.push([new Term(this._r).expr(bin)._query]);
			    }
			    return term;
			}

			Term.prototype.js = function(arg) {
			    this._noPrefix(this, 'js');
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'js', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.JAVASCRIPT)
			    term._query.push([new Term(this._r).expr(arg)._query])
			    return term;
			}
			Term.prototype.coerceTo = function(type) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'coerceTo', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.COERCE_TO)
			    term._query.push([this._query, new Term(this._r).expr(type)._query])
			    return term;
			}
			Term.prototype.typeOf = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'typeOf', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TYPE_OF);
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.info = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'info', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INFO);
			    term._query.push([this._query])
			    return term;
			}
			Term.prototype.json = function(json) {
			    this._noPrefix(this, 'json');
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'info', this);
			    }
			    if ((/\\u0000/.test(json)) || (/\0/.test(json))) {
			        this._error = new Error.ReqlDriverError('The null character is currently not supported by RethinkDB');
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.JSON);

			    term._query.push([new Term(this._r).expr(json)._query])
			    return term;
			}
			Term.prototype.http = function(url, options) {
			    this._noPrefix(this, 'http');
			    if (this._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 1, 2, 'http', this);
			    }

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.HTTP);
			    term._query.push([new Term(this._r).expr(url)._query]);
			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'timeout')
			                && (key !==  'reattempts')
			                && (key !==  'redirects')
			                && (key !==  'verify')
			                && (key !==  'resultFormat')
			                && (key !==  'method')
			                && (key !==  'auth')
			                && (key !==  'params')
			                && (key !==  'header')
			                && (key !==  'data')
			                && (key !==  'page')
			                && (key !==  'pageLimit')
			                && (key !==  '')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `http`. Available options are reattemps <number>, redirects <number>, verify <boolean>, resultFormat: <string>, method: <string>, auth: <object>, params: <object>, header: <string>, data: <string>, page: <string/function>, pageLimit: <number>');
			            }
			        });

			        term._query.push(new Term(this._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.uuid = function() {
			    this._noPrefix(this, 'uuid');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.UUID)
			    return term;
			}


			Term.prototype.circle = function(center, radius, options) {
			    var self = this;

			    // Arity check is done by r.circle
			    self._noPrefix(self, 'circle');
			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.CIRCLE);
			    term._query.push([new Term(self._r).expr(center)._query, new Term(self._r).expr(radius)._query]);

			    if (helper.isPlainObject(options)) {
			    }

			    if (helper.isPlainObject(options)) {
			        // There is no need to translate here
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'numVertices') && (key !== 'geoSystem') && (key !== 'unit') && (key !== 'fill')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `circle`', self._query, 'Available options are numVertices <number>, geoSsystem <string>, unit <string> and fill <bool>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }

			    return term;
			}
			Term.prototype.distance = function(geometry, options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 1, 2, 'distance', self);
			    }
			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.DISTANCE);
			    term._query.push([self._query, new Term(self._r).expr(geometry)._query]);
			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'geoSystem') && (key !== 'unit')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `distance`', self._query, 'Available options are geoSystem <string>, unit <string>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}
			Term.prototype.fill = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'fill', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.FILL);
			    term._query.push([this._query])
			    return term;
			}

			Term.prototype.geojson = function(geometry) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'geojson', this);
			    }
			    this._noPrefix(this, 'geojson');
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.GEOJSON);
			    term._query.push([new Term(this._r).expr(geometry)._query]);
			    return term;
			}

			Term.prototype.toGeojson = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'toGeojson', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TO_GEOJSON);
			    term._query.push([this._query]);
			    return term;
			}

			Term.prototype.getIntersecting = function(geometry, options) {
			    if (this._fastArity(arguments.length, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 2, 'getIntersecting', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.GET_INTERSECTING);
			    term._query.push([this._query, new Term(this._r).expr(geometry)._query]);
			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if (key !== 'index') {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `distance`', self._query, 'Available options are index <string>');
			            }
			        });
			        term._query.push(new Term(this._r).expr(translateOptions(options))._query);
			    }
			    return term;
			}

			Term.prototype.getNearest = function(geometry, options) {
			    var self = this;
			    if (self._fastArity(arguments.length, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arity(_args, 2, 'getNearest', self);
			    }
			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.GET_NEAREST);
			    term._query.push([self._query, new Term(self._r).expr(geometry)._query]);
			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'index') && (key !== 'maxResults') && (key !== 'maxDist') && (key !== 'unit') && (key !== 'geoSystem')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `getNearest`', self._query, 'Available options are index <string>, maxResults <number>, maxDist <number>, unit <string>, geoSystem <string>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }
			    return term;

			}

			Term.prototype.includes = function(geometry) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'includes', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INCLUDES);
			    term._query.push([this._query, new Term(this._r).expr(geometry)._query]);
			    return term;
			}

			Term.prototype.intersects = function(geometry) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'intersects', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.INTERSECTS);
			    term._query.push([this._query, new Term(this._r).expr(geometry)._query]);
			    return term;
			}

			Term.prototype.line = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    // Arity check is done by r.line
			    this._noPrefix(this, 'line');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.LINE);

			    var args = [];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);
			    return term;
			}

			Term.prototype.point = function(longitude, latitude) {
			    // Arity check is done by r.point
			    this._noPrefix(this, 'point');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.POINT);
			    term._query.push([new Term(this._r).expr(longitude)._query, new Term(this._r).expr(latitude)._query]);
			    return term;
			}

			Term.prototype.polygon = function() {
			    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			    // Arity check is done by r.polygon
			    this._noPrefix(this, 'polygon');

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.POLYGON);

			    var args = [];
			    for(var i=0; i<_args.length; i++) {
			        args.push(new Term(this._r).expr(_args[i])._query)
			    }
			    term._query.push(args);

			    return term;
			}

			Term.prototype.polygonSub = function(geometry) {
			    if (this._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 1, 'polygonSub', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.POLYGON_SUB);
			    term._query.push([this._query, new Term(this._r).expr(geometry)._query]);
			    return term;
			}

			Term.prototype.range = function(start, end) {
			    this._noPrefix(this, 'range');
			    if (this._fastArityRange(arguments.length, 1, 2) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arityRange(_args, 1, 2, 'r.range', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.RANGE);
			    var args = [];
			    args.push(new Term(this._r).expr(start)._query);
			    if (end !== undefined) {
			      args.push(new Term(this._r).expr(end)._query);
			    }
			    term._query.push(args);
			    return term;
			}
			Term.prototype.toJsonString = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'toJSON', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.TO_JSON_STRING);
			    term._query.push([this._query]);
			    return term;
			}
			Term.prototype.toJSON = Term.prototype.toJsonString;

			Term.prototype.config = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'config', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.CONFIG);
			    term._query.push([this._query]);
			    return term;
			}

			Term.prototype.status = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'status', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.STATUS);
			    term._query.push([this._query]);
			    return term;
			}

			Term.prototype.wait = function(options) {
			    var self = this;
			    if (self._fastArityRange(arguments.length, 0, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arityRange(_args, 0, 1, 'wait', self);
			    }
			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.WAIT);
			    if (Array.isArray(self._query) && (self._query.length > 0)) {
			        term._query.push([self._query]);
			    }
			    if (helper.isPlainObject(options)) {
			        helper.loopKeys(options, function(obj, key) {
			            if ((key !== 'waitFor') && (key !== 'timeout')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `reconfigure`', self._query, 'Available options are waitFor: <string>, timeout: <number>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(options))._query);
			    }

			    return term;
			}

			Term.prototype.reconfigure = function(config) {
			    var self = this;
			    if (self._fastArity(arguments.length, 1) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        self._arity(_args, 1, 'reconfigure', self);
			    }
			    var term = new Term(self._r, self._error);
			    term._query.push(termTypes.RECONFIGURE);

			    if (Array.isArray(this._query) && (this._query.length > 0)) {
			        term._query.push([this._query]);
			    }
			    else{
			        term._query.push([]);
			    }
			    if (helper.isPlainObject(config)) {
			        helper.loopKeys(config, function(obj, key) {
			            if ((key !== 'shards') && (key !== 'replicas') &&
			                    (key !== 'dryRun') && (key !== 'primaryReplicaTag')) {
			                throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `reconfigure`', self._query, 'Available options are shards: <number>, replicas: <number>, primaryReplicaTag: <object>, dryRun <boolean>');
			            }
			        });
			        term._query.push(new Term(self._r).expr(translateOptions(config))._query);
			    }
			    else {
			        throw new Error.ReqlDriverError('First argument of `reconfigure` must be an object');
			    }
			    return term;
			}

			Term.prototype.rebalance = function() {
			    if (this._fastArity(arguments.length, 0) === false) {
			        var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
			        this._arity(_args, 0, 'rebalance', this);
			    }
			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.REBALANCE);
			    if (Array.isArray(this._query) && (this._query.length > 0)) {
			        term._query.push([this._query]);
			    }
			    return term;
			}


			Term.prototype.then = function(resolve, reject) {
			    return this.run().then(resolve, reject);
			}
			Term.prototype.error = function(reject) {
			    return this.run().error(reject);
			}
			Term.prototype.catch = function(reject) {
			    return this.run().catch(reject);
			}
			Term.prototype.finally = function(handler) {
			    return this.run().finally(handler);
			}


			Term.prototype.toString = function() {
			    return Error.generateBacktrace(this._query, 0, null, [], {indent: 0, extra: 0}).str;
			}

			Term.prototype._wrap = function() {
			    var self = this;
			    if (helper.hasImplicit(this._query)) {
			        if (this._query[0] === termTypes.ARGS) {
			            throw new Error.ReqlDriverError('Implicit variable `r.row` cannot be used inside `r.args`')
			        }
			        //Must pass at least one variable to the function or it won't accept r.row
			        return new Term(this._r).expr(function(doc) { return self; })
			    }
			    else {
			        return self;
			    }
			}
			Term.prototype._translateArgs = {
			    returnChanges: 'return_changes',
			    primaryKey: 'primary_key',
			    useOutdated: 'use_outdated',
			    nonAtomic: 'non_atomic',
			    leftBound: 'left_bound',
			    rightBound: 'right_bound',
			    defaultTimezone: 'default_timezone',
			    noReply: 'noreply',
			    resultFormat: 'result_format',
			    pageLimit: 'page_limit',
			    arrayLimit: 'array_limit',
			    numVertices: 'num_vertices',
			    geoSystem: 'geo_system',
			    maxResults: 'max_results',
			    maxDist: 'max_dist',
			    dryRun: 'dry_run',
			    waitFor: 'wait_for',
			    includeStates: 'include_states',
			    primaryReplicaTag: 'primary_replica_tag'
			}
			function translateOptions(options) {
			    var translatedOpt = {};
			    helper.loopKeys(options, function(options, key) {
			        var keyServer = Term.prototype._translateArgs[key] || key;
			        translatedOpt[keyServer] = options[key];
			    });
			    return translatedOpt;
			}
			Term.prototype._setNestingLevel = function(nestingLevel) {
			    Term.prototype._nestingLevel = nestingLevel;
			}
			Term.prototype._setArrayLimit = function(arrayLimit) {
			    Term.prototype._arrayLimit = arrayLimit;
			}


			Term.prototype._noPrefix = function(term, method) {
			    if ((!Array.isArray(term._query)) || (term._query.length > 0)) {
			        throw new Error.ReqlDriverError('`'+method+'` is not defined', term._query);
			    }
			}
			Term.prototype._arityRange = function(args, min, max, method, term) {
			    var foundArgs = false;
			    if (args.length < min) {
			        for(var i=0; i<args.length; i++) {
			            if ((args[i] instanceof Term) && (args[i]._query[0] === termTypes.ARGS)) {
			                foundArgs = true;
			                break;
			            }
			        }
			        if (foundArgs === false) {
			            throw new Error.ReqlDriverError('`'+method+'` takes at least '+min+' argument'+((min>1)?'s':'')+', '+args.length+' provided', term._query);
			        }
			    }
			    else if (args.length > max) {
			        for(var i=0; i<args.length; i++) {
			            if ((args[i] instanceof Term) && (args[i]._query[0] === termTypes.ARGS)) {
			                foundArgs = true;
			                break;
			            }
			        }
			        if (foundArgs === false) {
			            throw new Error.ReqlDriverError('`'+method+'` takes at most '+max+' argument'+((max>1)?'s':'')+', '+args.length+' provided', term._query);
			        }
			    }
			}
			Term.prototype._arity = function(args, num, method, term) {
			    var foundArgs = false;
			    for(var i=0; i<args.length; i++) {
			        if ((args[i] instanceof Term) && (args[i]._query[0] === termTypes.ARGS)) {
			            foundArgs = true;
			            break;
			        }
			    }
			    if (foundArgs === false) {
			        throw new Error.ReqlDriverError('`'+method+'` takes '+num+' argument'+((num>1)?'s':'')+', '+args.length+' provided', term._query);
			    }
			}
			// Cheap arity check. If it fails, return false, and then we are expected to call _arity/_arityRange
			Term.prototype._fastArity = function(len, num) {
			    return (len === num);
			}
			Term.prototype._fastArityRange = function(len, min, max) {
			    return ((len >= min) && (len <= max));
			}


			// Datums
			function Func(r, func) {
			    // We can retrieve the names of the arguments with
			    // func.toString().match(/\(([^\)]*)\)/)[1].split(/\s*,\s*/)

			    var term = new Term(this._r, this._error);
			    term._query.push(termTypes.FUNC);
			    var args = [];
			    var argVars = [];
			    var argNums = [];

			    for(var i=0; i<func.length; i++) {
			        argVars.push(new Var(r, r.nextVarId));
			        argNums.push(r.nextVarId);

			        if (r.nextVarId === 9007199254740992) { // That seems like overdoing it... but well maybe...
			            r.nextVarId = 0;
			        }
			        else {
			            r.nextVarId++;
			        }
			    }

			    var body = func.apply(func, argVars)
			    if (body === undefined) throw new Error.ReqlDriverError('Annonymous function returned `undefined`. Did you forget a `return`?', this._query);
			    body = new Term(r).expr(body);

			    args.push(new Term(r).expr(argNums)._query);
			    args.push(body._query);

			    term._query.push(args);

			    return term;
			}
			Func.prototype.nextVarId = 1;

			function Var(r, id) {
			    var term = new Term(r);
			    term._query.push(termTypes.VAR)
			    term._query.push([new Term(r).expr(id)._query])
			    return term;
			}

			module.exports = Term;


		/***/ },
		/* 57 */
		/***/ function(module, exports, __webpack_require__) {

			var Writable = __webpack_require__(54).Writable;
			var Cursor = __webpack_require__(52);
			var util = __webpack_require__(51);

			// Experimental, but should work fine.
			function WritableStream(table, options, connection) {
			  this._table = table;
			  this._options = options;
			  this._cache = [];
			  this._pendingCallback = null;
			  this._inserting = false;
			  this._delayed = false;
			  this._connection = connection;
			  this._highWaterMark = options.highWaterMark || 100;

			  this._insertOptions = {};
			  this._insertOptions.durability = options.durability || 'hard';
			  this._insertOptions.conflict = options.conflict || 'error';

			  // Internal option to run some tests
			  if (options.debug === true) {
			    this._sequence = [];
			  }

			  Writable.call(this, {
			    objectMode: true,
			    highWaterMark: this._highWaterMark
			  });
			  this._i = 0;
			};
			util.inherits(WritableStream, Writable);

			WritableStream.prototype._write = function(value, encoding, done) {
			  this._i++;
			  this._cache.push(value);
			  this._next(value, encoding, done);
			}

			// Everytime we want to insert but do not have a full buffer,
			// we recurse with setImmediate to give a chance to the input
			// stream to push a few more elements
			WritableStream.prototype._next = function(value, encoding, done) {
			  if ((this._writableState.lastBufferedRequest != null) && (this._writableState.lastBufferedRequest.chunk !== value)) {
			    // There's more data to buffer
			    if (this._cache.length < this._highWaterMark) {
			      this._delayed = false;
			      // Call done now, and more data will be put in the cache
			      done();
			    }
			    else {
			      if (this._inserting === false) {
			        if (this._delayed === true) {
			          this._delayed = false;
			          // We have to flush
			          this._insert();
			          // Fill the buffer while we are inserting data
			          done();
			        }
			        else {
			          var self = this;
			          this._delayed = true;
			          setImmediate(function() {
			            self._next(value, encoding, done);
			          })
			        }

			      }
			      else {
			        this._delayed = false;
			        // to call when we are dong inserting to keep buffering
			        this._pendingCallback = done;
			      }
			    }
			  }
			  else { // We just pushed the last element in the internal buffer
			    if (this._inserting === false) {
			      if (this._delayed === true) {
			        this._delayed = false;
			        // to call when we are dong inserting to maybe flag the end
			        // We cannot call done here as we may be inserting the last batch
			        this._pendingCallback = done;
			        this._insert();
			      }
			      else {
			        var self = this;
			        this._delayed = true;
			        setImmediate(function() {
			          self._next(value, encoding, done);
			        })
			      }
			    }
			    else {
			      this._delayed = false;
			      // We cannot call done here as we may be inserting the last batch
			      this._pendingCallback = done;
			    }
			  }
			}

			WritableStream.prototype._insert = function() {
			  var self = this;
			  self._inserting = true;

			  var cache = self._cache;
			  self._cache = [];

			  if (Array.isArray(self._sequence)) {
			    self._sequence.push(cache.length);
			  }

			  self._table.insert(cache, self._insertOptions).run(self._connection).then(function(result) {
			    self._inserting = false;
			    if (result.errors > 0) {
			      self._inserting = false;
			      self.emit('error', new Error('Failed to insert some documents:'+JSON.stringify(result, null, 2)));
			    }
			    if (typeof self._pendingCallback === 'function') {
			      var pendingCallback = self._pendingCallback;
			      self._pendingCallback = null;
			      pendingCallback();
			    }

			  }).error(function(error) {
			    self._inserting = false;
			    self.emit('error', error);
			  });
			}


			module.exports = WritableStream;


		/***/ },
		/* 58 */
		/***/ function(module, exports, __webpack_require__) {

			var Transform = __webpack_require__(54).Transform;
			var Cursor = __webpack_require__(52);
			var util = __webpack_require__(51);

			// Experimental, but should work fine.
			function TransformStream(table, options, connection) {
			  this._table = table;
			  this._options = options;
			  this._cache = [];
			  this._pendingCallback = null;
			  this._ended = false;
			  this._inserting = false;
			  this._delayed = false;
			  this._connection = connection;
			  this._highWaterMark = options.highWaterMark || 100;
			  this._insertOptions = {};
			  this._insertOptions.durability = options.durability || 'hard';
			  this._insertOptions.conflict = options.conflict || 'error';
			  this._insertOptions.returnChanges = options.returnChanges || true;

			  // Internal option to run some tests
			  if (options.debug === true) {
			    this._sequence = [];
			  }

			  Transform.call(this, {
			    objectMode: true,
			    highWaterMark: this._highWaterMark
			  });
			};
			util.inherits(TransformStream, Transform);

			TransformStream.prototype._transform = function(value, encoding, done) {
			  this._cache.push(value);
			  this._next(value, encoding, done);
			}

			// Everytime we want to insert but do not have a full buffer,
			// we recurse with setImmediate to give a chance to the input
			// stream to push a few more elements
			TransformStream.prototype._next = function(value, encoding, done) {
			  if ((this._writableState.lastBufferedRequest != null) && (this._writableState.lastBufferedRequest.chunk !== value)) {
			    // There's more data to buffer
			    if (this._cache.length < this._highWaterMark) {
			      this._delayed = false;
			      // Call done now, and more data will be put in the cache
			      done();
			    }
			    else {
			      if (this._inserting === false) {
			        if (this._delayed === true) {
			          // We have to flush
			          this._delayed = false;
			          this._insert();
			          // Fill the buffer while we are inserting data
			          done();
			        }
			        else {
			          var self = this;
			          this._delayed = true;
			          setImmediate(function() {
			            self._next(value, encoding, done);
			          })
			        }

			      }
			      else {
			        // to call when we are dong inserting to keep buffering
			        this._pendingCallback = done;
			      }
			    }
			  }
			  else { // We just pushed the last element in the internal buffer
			    if (this._inserting === false) {
			      if (this._delayed === true) {
			        this._delayed = false;
			        // to call when we are dong inserting to maybe flag the end
			        this._insert();
			        // We can call done now, because we have _flush to close the stream
			        done();
			      }
			      else {
			        var self = this;
			        this._delayed = true;
			        setImmediate(function() {
			          self._next(value, encoding, done);
			        })
			      }
			    }
			    else {
			      this._delayed = false;
			      // There is nothing left in the internal buffer
			      // But something is already inserting stuff.
			      if (this._cache.length < this._highWaterMark-1) {
			        // Call done, to attempt to buffer more
			        // This may trigger _flush
			        //this._pendingCallback = done;
			        done();
			      }
			      else {
			        this._pendingCallback = done;
			      }
			    }
			  }
			}

			TransformStream.prototype._insert = function() {
			  var self = this;
			  self._inserting = true;

			  var cache = self._cache;
			  self._cache = [];

			  if (Array.isArray(self._sequence)) {
			    self._sequence.push(cache.length);
			  }

			  var pendingCallback = self._pendingCallback;
			  self._pendingCallback = null;
			  if (typeof pendingCallback === 'function') {
			    pendingCallback();
			  }

			  self._table.insert(cache, self._insertOptions).run(self._connection).then(function(result) {
			    self._inserting = false;

			    if (result.errors > 0) {
			      self._inserting = false;
			      self.emit('error', new Error('Failed to insert some documents:'+JSON.stringify(result, null, 2)));
			    }
			    else {
			      if (self._insertOptions.returnChanges === true) {
			        for(var i=0; i<result.changes.length; i++) {
			          self.push(result.changes[i].new_val);
			        }
			      }
			    }

			    pendingCallback = self._pendingCallback
			    self._pendingCallback = null;
			    if (typeof pendingCallback === 'function') {
			      // Mean that we can buffer more
			      pendingCallback();
			    }
			    else if (self._ended !== true) {
			      if (((((self._writableState.lastBufferedRequest === null) ||
			          self._writableState.lastBufferedRequest.chunk === self._cache[self._cache.length-1])))
			        && (self._cache.length > 0)) {
			          self._insert();
			      }
			    }
			    else if (self._ended === true) {
			      if (self._cache.length > 0) {
			        self._insert();
			      }
			      else {
			        if (typeof self._flushCallback === 'function') {
			          self._flushCallback();
			        }
			        self.push(null);
			      }
			    }
			  }).error(function(error) {
			    self._inserting = false;
			    self.emit('error', error);
			  });
			}

			TransformStream.prototype._flush = function(done) {
			  this._ended = true;
			  if ((this._cache.length === 0) && (this._inserting === false)) {
			    done();
			  }
			  else { // this._inserting === true
			    if (this._inserting === false) {
			      this._flushCallback = done;
			      this._insert();
			    }
			    else {
			      this._flushCallback = done;
			    }
			  }
			}


			module.exports = TransformStream;


		/***/ },
		/* 59 */
		/***/ function(module, exports, __webpack_require__) {

			var util = __webpack_require__(51);
			var events = __webpack_require__(50);
			var Promise = __webpack_require__(3);
			var Dequeue = __webpack_require__(60);
			var Pool = __webpack_require__(61);
			var helper = __webpack_require__(41);
			var Err = __webpack_require__(49);
			var UNKNOWN_POOLS = 'unknownPools';
			function PoolMaster(r, options) {
			  var self = this;
			  var options = options || {};
			  var lineLength = options.buffer || 50;

			  self._r = r;
			  self._line = new Dequeue(lineLength);
			  self._pools = {};
			  self._pools[UNKNOWN_POOLS] = []; // pools for which we do not know the server'id
			  self._healthyPools = [];
			  self._init = false;
			  self._index = 0; // next pool to used
			  self._indexUnknown =  0 // next unknown pool to used
			  self._discovery = (typeof options.discovery === 'boolean') ? options.discovery: false; // Whether the pool master is in discovery mode or not
			  self._refresh = (typeof options.refresh === 'number') ? options.refresh: 1000*60*60; // Refresh rate for the list of servers
			  self._options = options;
			  self._options.buffer = options.buffer || 50;
			  self._options.max = options.max || 1000;
			  self._options.silent = options.silent || false;
			  self._draining = false;
			  self._numConnections = 0;
			  self._numAvailableConnections = 0;
			  self._hasPrintWarningLocalhost = false;

			  var pool;
			  if (Array.isArray(options.servers)) {
			    for(var i=0; i<options.servers.length; i++) {
			      // Create settings for this pool
			      var settings = {};
			      helper.loopKeys(options, function(options, key) {
			        if ((key === 'buffer') || (key === 'max')) {
			          settings[key] = Math.ceil(options[key]/options.servers.length);
			          settings[key] = Math.ceil(options[key]/options.servers.length);
			        }
			        else if (key !== 'servers') {
			          settings[key] = options[key];
			        }
			      });
			      helper.loopKeys(options.servers[i], function(options, key) {
			        settings[key] = options[key];
			      });
			      pool = new Pool(self._r, settings);
			      self._pools[UNKNOWN_POOLS].push(pool);
			      // A pool is considered healthy by default such that people can do
			      // var = require(...)(); query.run();
			      self._healthyPools.push(pool);
			    }
			  }
			  else {
			    pool = new Pool(self._r, options);
			    self._pools[UNKNOWN_POOLS].push(pool);
			    self._healthyPools.push(pool);
			  }

			  // Initialize all the pools - bind listeners
			  for(var i=0; i<self._pools[UNKNOWN_POOLS].length; i++) {
			    self.initPool(self._pools[UNKNOWN_POOLS][i]);
			  }

			  if ((self._discovery === true) && (self._healthyPools.length > 0)) {
			    self._timeout = setTimeout(function() { self.fetchServers() }, 0);
			    self._interval = setInterval(function() { self.fetchServers() }, self._refresh);
			  }
			}
			util.inherits(PoolMaster, events.EventEmitter);

			PoolMaster.prototype.getPools = function() {
			  var result = [];
			  helper.loopKeys(this._pools, function(pools, key) {
			    if (key === UNKNOWN_POOLS) {
			      for(var i=0;i<pools[key].length; i++) {
			        result.push(pools[key][i]);
			      }
			    }
			    else {
			      result.push(pools[key]);
			    }
			  });
			  return result;
			}

			// Return whether if at least one pool is healthy
			// Reject all promises in this._line
			PoolMaster.prototype._flushErrors = function() {
			  while(this._line.getLength() > 0) {
			    this._line.shift().reject(new Err.ReqlDriverError('None of the pools have an opened connection and failed to open a new one'));
			    this.emit('queueing', this._line.getLength())
			  }
			}

			PoolMaster.prototype.getConnection = function() {
			  var self = this;
			  // Find a pool with available connections
			  var result;
			  for(var i=0; i<self._healthyPools.length; i++) {
			    if (self._index >= self._healthyPools.length) {
			      self._index = 0;
			    }
			    if (self._healthyPools[self._index].getAvailableLength() > 0) {
			      result = self._healthyPools[self._index].getConnection();
			    }
			    self._index++;
			    if (self._index === self._healthyPools.length) {
			      self._index = 0;
			    }
			    if (result) {
			      return result;
			    }
			  }
			  if (self._healthyPools.length === 0) {
			    return new Promise(function(resolve, reject) {
			      reject(new Err.ReqlDriverError('None of the pools have an opened connection and failed to open a new one'));
			    });
			  }
			  else {
			    // All pool are busy, buffer the request
			    return new Promise(function(resolve, reject) {
			      self._line.push({
			        resolve: resolve,
			        reject: reject
			      });

			      self.emit('queueing', self._line.getLength())
			      // We could add a condition to be less greedy (for early start)
			      self._expandAll();
			    });

			  }
			}
			PoolMaster.prototype._expandAll = function() {
			  for(var i=0; i<this._healthyPools.length; i++) {
			    this._healthyPools[i]._expandBuffer();
			  }
			}

			//TODO Use changefeed when initial values are available. Things to keep in mind:
			//- increment buffer too
			//- implement feeds in the fake server
			PoolMaster.prototype.fetchServers = function() {
			  var self = this;
			  self._r.db('rethinkdb').table('server_status').run({cursor: false}).then(function(servers) {
			    var knownServer = {};
			    for(var i=0; i<servers.length; i++) {
			      var server = servers[i];
			      knownServer[server.id] = {count: 0, server: server};
			      if (servers[i].status === 'connected') {
			        if (self._pools[server.id] === undefined) {
			          var found = false;
			          for(var j=0; j<self._pools[UNKNOWN_POOLS].length; j++) {
			            if (found) break;
			            var pool = self._pools[UNKNOWN_POOLS][j]; 
			            // If a pool is created with localhost, it will probably match the first server even though it may not the the one
			            // So it gets an id
			            for(var k=0; k<server.network.canonical_addresses.length; k++) {
			              // Check for the same host (or if they are both localhost) and port
			              if (((server.network.canonical_addresses[k].host === pool.options.connection.host) ||
			                (helper.localhostAliases.hasOwnProperty(server.network.canonical_addresses[k].host) &&
			                helper.localhostAliases.hasOwnProperty(pool.options.connection.host))) &&
			                (server.network.reql_port === pool.options.connection.port)) {

			                self._pools[server.id] = self._pools[UNKNOWN_POOLS].splice(j, 1)[0];
			                // We may assign the wrong pool to this server if it's maching on localhost
			                if (helper.localhostAliases.hasOwnProperty(server.network.canonical_addresses[k].host)) {
			                  self._pools[server.id].options.connection.host = helper.getCanonicalAddress(server.network.canonical_addresses).host;
			                  if (!helper.getCanonicalAddress(self._pools[server.id].options.connection.host)) {
			                    self._pools[server.id].drainLocalhost();
			                  }
			                }
			                found = true;
			                break;
			              }
			            }
			          }
			          if (found === false) {
			            // We just found a new server, let's extract the canonical address and connect to it
			            var address = helper.getCanonicalAddress(server.network.canonical_addresses);
			            var settings = {};
			            helper.loopKeys(self._options, function(options, key) {
			              if (key !== 'servers') {
			                settings[key] = options[key];
			              }
			            });
			            settings.port = server.network.reql_port;
			            settings.host = address.host;
			            if (self._options.silent !== true) {
			              console.error('A new server was found. Creating a new pool with the options:');
			              console.error(JSON.stringify(settings));
			            }
			            self._pools[server.id] = new Pool(self._r, settings);
			            self.initPool(self._pools[server.id]);
			          }
			        }
			      }
			    } // Each server know has a pool

			    // Check if we need to remove pools
			    helper.loopKeys(self._pools, function(pools, key) {
			      if (key !== UNKNOWN_POOLS) {
			        if (knownServer.hasOwnProperty(key) === false) {
			          if (self._options.silent !== true) {
			            console.error('One pool is connected to a non existing server. Removing.');
			            console.error('Pool options:');
			            console.error(JSON.stringify(pools[key].options));
			          }
			          var pool = self._pools[key];
			          pool.drain().then(function() {
			            pool.removeAllListeners();
			          }).error(function(error) {
			            if (self._options.silent !== true) {
			              console.error('One of the removed pool could not be properly drained. The error returned was:');
			              console.error(error.message);
			              console.error(error.stack);
			            }
			          });
			          delete self._pools[key];
			        }
			        else {
			          knownServer[key]++;
			        }
			      }
			    });

			    for(var i=0;i<self._pools[UNKNOWN_POOLS].length; i++) {
			      var found = false;
			      helper.loopKeys(knownServer, function(knownServer, key) {
			        if (knownServer[key].count === 0) {
			          server = knownServer[key].server;
			          for(var k=0; k<server.network.canonical_addresses.length; k++) {
			            if (knownServer[server.id] === 0) {
			              if (((server.network.canonical_addresses[k].host === self._pools[UNKNOWN_POOLS][i].options.connection.host) ||
			                (helper.localhostAliases.hasOwnProperty(server.network.canonical_addresses[k].host) && (helper.localhostAliases.hasOwnProperty(self._pools[UNKNOWN_POOLS][i].options.connection.host)))) &&
			                (server.network.reql_port === self._pools[UNKNOWN_POOLS][i].options.connection.port)) {
			                found = true;
			                break;
			              }
			            }
			          }
			        }
			      })
			      if (found === false) {
			        if (self._options.silent !== true) {
			          console.error('One pool is connected to a non existing server. Removing.');
			          console.error('Pool options:');
			          console.error(JSON.stringify(self._pools[UNKNOWN_POOLS][i].options));
			        }
			        var pool = self._pools[UNKNOWN_POOLS].splice(i, 1)[0];
			        pool.drain().then(function() {
			          pool.removeAllListeners();
			        }).error(function(error) {
			          if (self._options.silent !== true) {
			            console.error('One of the removed pool could not be properly drained. The error returned was:');
			            console.error(error.message);
			            console.error(error.stack);
			          }
			        });
			      }
			    }

			  }).error(function(error) {
			    if (self._options.silent !== true) {
			      console.error('Failed to retrieve the servers. The error returned was:');
			      console.error(error.message);
			      console.error(error.stack);
			    }
			  })
			}
			PoolMaster.prototype.initPool = function(pool) {
			  var self = this;

			  pool.on('size-diff', function(diff) {
			    self._numConnections += diff;
			    self.emit('size', self._numConnections)
			  });
			  pool.on('available-size-diff', function(diff) {
			    self._numAvailableConnections += diff;
			    self.emit('available-size', self._numAvailableConnections)
			  });

			  pool.on('new-connection', function() {
			    if (self._line.getLength() > 0) {
			      var p = self._line.shift();
			      this.getConnection().then(p.resolve).error(p.reject);
			      self.emit('queueing', self._line.getLength())
			    }
			  });
			  pool.on('not-empty', function() {
			    if (self._draining === false) {
			      var found = false;
			      for(var i=0; i<self._healthyPools.length; i++) {
			        if (self._healthyPools[i] === this) {
			          self._healthyPools.length;
			          found = true;
			          break;
			        }
			      }
			      if (found === false) {
			        self._healthyPools.push(this);
			        self.resetBufferParameters();
			      }
			    }
			  });
			  pool.on('empty', function() {
			    if ((self._draining === false) && (self._discovery === true)) {
			      self.fetchServers();
			    }
			    // A pool that become empty is considered unhealthy
			    for(var i=0; i<self._healthyPools.length; i++) {
			      if (self._healthyPools[i] === this) {
			        self._healthyPools.splice(i, 1);
			        break;
			      }
			    }
			    if (self._healthyPools.length === 0) {
			      self._flushErrors();
			    }

			    self.resetBufferParameters();

			    if (self._healthyPools.length === 0) {
			      self._flushErrors();
			    }
			  });
			  pool.on('draining', function() {
			    if (self._healthyPools === 0) {
			      self._flushErrors();
			    }
			  });
			}

			PoolMaster.prototype.getNumConnections = function() {
			  var sum = 0;
			  for(var i=0; i<this._pools.length; i++) {
			    sum += this._pools[i].getLength();
			  }
			  return sum;
			}
			PoolMaster.prototype.getNumAvailableConnections = function() {
			  var sum = 0;
			  for(var i=0; i<this._pools.length; i++) {
			    sum += this._pools[i].getAvailableLength();
			  }
			  return sum;
			}

			// Reset buffer and max for each pool
			PoolMaster.prototype.resetBufferParameters = function() {
			  var max = Math.floor(this._options.max/this._healthyPools.length)
			  var buffer = Math.floor(this._options.buffer/this._healthyPools.length)
			  for(var i=0; i<this._healthyPools.length; i++) {
			    if (this._healthyPools[i].getLength() > max) {
			      this._healthyPools[i]._extraConnections = this._healthyPools[i].getLength()-max;
			    }
			    else {
			      this._healthyPools[i]._extraConnections = 0;
			    }
			    this._healthyPools[i].options.max = max
			    this._healthyPools[i].options.buffer = buffer;

			  }
			}

			PoolMaster.prototype.getLength = function() {
			  return this._numConnections;
			}
			PoolMaster.prototype.getAvailableLength = function() {
			  return this._numAvailableConnections;
			}

			PoolMaster.prototype.drain = function() {
			  this.emit('draining');
			  if (this._discovery === true) {
			    this._discovery = false;
			    clearInterval(this._interval);
			    clearTimeout(this._timeout);
			  }
			  this._draining = true;
			  var promises = [];
			  var pools = this.getPools();
			  for(var i=0; i<pools.length; i++) {
			    promises.push(pools[i].drain());
			  }
			  this._healthyPools = [];
			  var self = this;
			  return Promise.all(promises).then(function() {
			    for(var i=0; i<pools.length; i++) {
			      pools[i].removeAllListeners();
			    }
			  }).error(function(error) {
			    if (self._options.silent !== true) {
			      console.error('Failed to drain all the pools:');
			      console.error(error.message);
			      console.error(error.stack);
			    }
			  });
			}

			module.exports = PoolMaster;


		/***/ },
		/* 60 */
		/***/ function(module, exports) {

			// Implement a dequeue with a circular buffer
			// The buffer can expand but currently doesn't automatically shrink
			// as it is not a desired behavior. We may want to explicitly resize it though.
			function Dequeue(size) {
			  this.start = 0;
			  this.end = 0;

			  size = size || 50;
			  this.buffer = new Array(size);
			}
			Dequeue.prototype.get = function(index) {
			  if (this.start+index > this.buffer.length) {
			    return this.buffer[this.start+index-this.buffer.length]
			  }
			  else {
			    return this.buffer[this.start+index]
			  }
			}

			Dequeue.prototype.toArray = function(index) {
			  var result = [];
			  for(var i=0; i<this.getLength(); i++) {
			    result.push(this.get(i));
			  }
			  return result;
			}

			Dequeue.prototype.delete = function(index) {
			  var current, next;
			  if (this.start+index >= this.buffer.length) {
			    current = this.start+index-this.buffer.length;
			    next = this.start+index-this.buffer.length+1;
			  }
			  else {
			    current = this.start+index;
			    next = this.start+index+1;
			  }

			  for(var i=index; i<(this.buffer.length-index); i++) {
			    if (next === this.buffer.length) next = 0;
			    if (current === this.buffer.length) current = 0;

			    this.buffer[current] = this.buffer[next];
			    current++;
			    next++;
			  }

			  this.end--;
			  if (this.end < 0) this.end = this.buffer.length-1
			}

			Dequeue.prototype.push = function(element) {
			  // push on this.end and then increase this.end
			  // this.end should NEVER be equal to this.buffer.length
			  this.buffer[this.end] = element;
			  this.end++;
			  if (this.end === this.buffer.length) this.end = 0;

			  if (this.start === this.end) {
			    // Resize
			    var previousBuffer = this.buffer;

			    this.buffer = new Array(previousBuffer.length*2);

			    var i, k = 0;
			    for(i=this.start; i<previousBuffer.length; i++) {
			      this.buffer[k++] = previousBuffer[i];
			    }
			    for(i=0; i<this.start; i++) {
			      this.buffer[k++] = previousBuffer[i];
			    }
			    this.start = 0;
			    this.end = previousBuffer.length;
			  }
			}

			Dequeue.prototype.pop = function(element) {
			  //TODO: Decrease size when possible/needed? This may not be
			  //something we really need/want
			  // Return the element in this.end-1
			  if (this.getLength() > 0) {
			    var pos = this.end-1;
			    if (pos < 0) pos = this.buffer.length-1;
			    this.end = pos;
			    return this.buffer[pos];
			  }
			  else {
			    return undefined
			  }
			  var pos = this.end-1;
			  if (pos < 0) pos = this.buffer.length-1;

			  if (this.end !== this.start) {
			    this.end = pos;
			    return this.buffer[pos];
			  }
			  else {
			    return undefined
			  }
			}

			Dequeue.prototype.unshift = function(element) {
			  // push on this.start-1 and then decrease this.start.
			  // this.end should NEVER be equal to this.buffer.length

			  var pos = this.start-1;
			  if (pos < 0) pos = this.buffer.length-1;

			  this.buffer[pos] = element;
			  this.start = pos;

			  if (this.start === this.end) {
			    //Resize
			    var previousBuffer = this.buffer;

			    this.buffer = new Array(previousBuffer.length*2);

			    var i, k = 0;
			    for(i=this.start; i<previousBuffer.length; i++) {
			      this.buffer[k++] = previousBuffer[i];
			    }
			    for(i=0; i<this.start; i++) {
			      this.buffer[k++] = previousBuffer[i];
			    }
			    this.start = 0;
			    this.end = previousBuffer.length;
			  }
			}

			Dequeue.prototype.shift = function() {
			  // Return the element in this.start

			  if (this.getLength() > 0) {
			    var result = this.buffer[this.start];
			    this.start++;
			    if (this.start === this.buffer.length) this.start = 0;
			    return result;
			  }
			}

			Dequeue.prototype.getLength = function() {
			  if (this.start <= this.end) {
			    return this.end-this.start;
			  }
			  else {
			    return this.buffer.length-(this.start-this.end);
			  }
			}

			module.exports = Dequeue;


		/***/ },
		/* 61 */
		/***/ function(module, exports, __webpack_require__) {

			var Promise = __webpack_require__(3);
			var Dequeue = __webpack_require__(60);
			var helper = __webpack_require__(41);
			var Err = __webpack_require__(49);
			var events = __webpack_require__(50);
			var util = __webpack_require__(51);

			function Pool(r, options) {
			  this._r = r;

			  if (!helper.isPlainObject(options)) options = {};
			  this.options = {};
			  this.options.max = options.max || 1000; // 4000 is about the maximum the kernel can take
			  var buffer = (typeof options.buffer === 'number') ? options.buffer : 50;
			  this.options.buffer = (buffer < this.options.max) ? buffer : this.options.max;
			  this.options.timeoutError = options.timeoutError || 1000; // How long should we wait before recreating a connection that failed?
			  this.options.timeoutGb = options.timeoutGb || 60*60*1000; // Default timeout for TCP connection is 2 hours on Linux, we time out after one hour.
			  this.options.maxExponent = options.maxExponent || 6; // Maximum timeout is 2^maxExponent*timeoutError

			  this.options.silent = options.silent || false; // Maximum timeout is 2^maxExponent*timeoutError

			  this.options.connection = {
			    host: options.host || this._r._host,
			    port: options.port || this._r._port,
			    db: options.db || this._r._db,
			    timeout: options.timeout || this._r._timeoutConnect,
			    authKey: options.authKey || this._r._authKey,
			    cursor: options.cursor || false,
			    stream: options.stream || false
			  }

			  this._pool = new Dequeue(this.options.buffer+1);
			  this._draining = null;
			  this._localhostToDrain = 0; // number of connections to "localhost" to remove
			  this._connectionToReplace = 0; // number of connections to "localhost" to remove

			  this._numConnections = 0;
			  this._openingConnections = 0; // Number of connections being opened
			  this._consecutiveFails = 0;   // In slow growth, the number of consecutive failures to open a connection
			  this._slowGrowth = false;     // Opening one connection at a time
			  this._slowlyGrowing = false;  // The next connection to be returned is one opened in slowGrowth mode
			  this._extraConnections = 0; // Number of connections being opened

			  var self = this;
			  // So we can let the pool master bind listeners
			  setTimeout(function() {
			    for(var i=0; i<self.options.buffer; i++) {
			      if (self.getLength() < self.options.max) {
			        self.createConnection();
			      }
			    }
			  }, 0);
			  this.id = Math.floor(Math.random()*100000);
			}

			util.inherits(Pool, events.EventEmitter);
			/*
			 * Events:
			 *  - draining // when `drain` is called
			 *  - queueing(size of the queue) // the number of queries being beffered changed
			 *  - size(number of connections) // the size of the pool changed
			 *  - available-size(available size) // the number of AVAILABLE conncetions of the pool changed
			 */

			Pool.prototype.getConnection = function() {
			  var self = this;
			  var p = new Promise(function(resolve, reject) {
			    if (self._draining !== null) {
			      return reject(new Err.ReqlDriverError('The pool is being drained'));
			    }

			    var connection = self._pool.pop();
			    self.emit('available-size', self._pool.getLength());
			    self.emit('available-size-diff', -1);

			    if (connection) {
			      clearTimeout(connection.timeout);
			      resolve(connection);
			    }
			    else {
			      if ((self._numConnections === 0) && (self._slowGrowth === true)) {
			        // If the server is down we do not want to buffer the queries
			        return reject(new Err.ReqlDriverError('The pool does not have any opened connections and failed to open a new one'));
			      }
			    }

			    if (self._slowGrowth === false) {
			      self._expandBuffer();
			    }

			  });
			  return p;
			};

			Pool.prototype._decreaseNumConnections = function() {
			  this._numConnections--;
			  this.emit('size', this._numConnections)
			  this.emit('size-diff', -1)
			  if ((this._draining !== null) && (this._numConnections === 0)) {
			    this._draining.resolve();
			  }
			  if (this._numConnections === 0) {
			    this.emit('empty');
			  }
			}
			Pool.prototype._increaseNumConnections = function() {
			  this._numConnections++;
			  this.emit('size', this._numConnections)
			  this.emit('size-diff', 1)
			  if (this._numConnections === 1) {
			    this.emit('not-empty');
			  }

			}


			Pool.prototype.putConnection = function(connection) {
			  var self = this;
			  if ((self._localhostToDrain > 0) && (helper.localhostAliases.hasOwnProperty(connection.host))) {
			    self._localhostToDrain--;
			    connection.close();
			    clearTimeout(connection.timeout);
			    self.createConnection();
			  }
			  else if (self._draining !== null) {
			    connection.close();
			    clearTimeout(connection.timeout);
			    if (self.getLength() === 0) {
			      self._draining.resolve();
			    }
			  }
			  else if (self._extraConnections > 0) {
			    self._extraConnections--;
			    connection.close().error(function(error) {
			      if (self.options.silent !== true) {
			        console.error('Fail to properly close a connection. The error returned was:')
			        console.error(error.message);
			        console.error(error.stack);
			      }
			    });
			    clearTimeout(connection.timeout);
			  }
			  else {
			    self._pool.push(connection);
			    self.emit('available-size', self._pool.getLength());
			    self.emit('available-size-diff', 1);
			    self.emit('new-connection', connection);

			    clearTimeout(connection.timeout);
			    var timeoutCb = function() {
			      if (self._pool.get(0) === connection) {
			        if (self._pool.getLength() > self.options.buffer) {
			          self._pool.shift().close();
			          self.emit('available-size', self._pool.getLength());
			          self.emit('available-size-diff', -1);
			        }
			        else {
			          connection.timeout = setTimeout(timeoutCb, self.options.timeoutGb);
			        }
			      }
			      else {
			        // This should technically never happens
			        connection.timeout = setTimeout(timeoutCb, self.options.timeoutGb);
			      }
			    }
			    connection.timeout = setTimeout(timeoutCb, self.options.timeoutGb);
			  }
			};

			Pool.prototype.createConnection = function() {
			  var self = this;
			  self._increaseNumConnections();
			  self._openingConnections++;

			  self.emit('creating-connection', self);

			  return self._r.connect(self.options.connection).then(function(connection) {
			    self.emit('created-connection', self);

			    self._openingConnections--;

			    if ((self._slowlyGrowing === false) && (self._slowGrowth === true) && (self._openingConnections === 0)) {
			      self._consecutiveFails++;
			      self._slowlyGrowing = true;
			      setTimeout(function() {
			        self.createConnection();
			        //self._expandBuffer();
			      }, (1<<Math.min(self.options.maxExponent, self._consecutiveFails))*self.options.timeoutError);
			    }
			    // Need another flag
			    else if ((self._slowlyGrowing === true) && (self._slowGrowth === true) && (self._consecutiveFails > 0)) {
			      if (self.options.silent !== true) console.error('Exiting slow growth mode');
			      self._consecutiveFails = 0;
			      self._slowGrowth = false;
			      self._slowlyGrowing = false;
			      self._aggressivelyExpandBuffer();
			    }



			    connection.on('error', function(e) {
			      // We are going to close connection, but we don't want another process to use it before
			      // So we remove it from the pool now (if it's inside)
			      for(var i=0; i<self.getAvailableLength(); i++) {
			        if (self._pool.get(i) === this) {
			          self._pool.delete(i);
			          self.emit('available-size', self._pool.getLength());
			          self.emit('available-size-diff', -1);
			          break;
			        }
			      }
			      // We want to make sure that it's not going to try to reconnect
			      clearTimeout(connection.timeout);

			      // Not sure what happened here, so let's be safe and close this connection.
			      connection.close().then(function() {
			        self._expandBuffer();
			      }).error(function(e) {
			        // We failed to close this connection, but we removed it from the pool... so err, let's just ignore that.
			        self._expandBuffer();
			      });
			      clearTimeout(connection.timeout);
			    });
			    connection.on('end', function(e) {
			      // The connection was closed by the server, let's clean...
			      for(var i=0; i<self.getAvailableLength(); i++) {
			        if (self._pool.get(i) === this) {
			          self._pool.delete(i);
			          self.emit('available-size', self._pool.getLength());
			          self.emit('available-size-diff', -1);
			          break;
			        }
			      }

			      clearTimeout(connection.timeout);
			      self._decreaseNumConnections();
			      self._expandBuffer();
			    });
			    connection.on('timeout', function() {
			      for(var i=0; i<self.getAvailableLength(); i++) {
			        if (self._pool.get(i) === this) {
			          self._pool.delete(i);
			          self.emit('available-size', self._pool.getLength());
			          self.emit('available-size-diff', -1);
			          break;
			        }
			      }

			      clearTimeout(connection.timeout);
			      self._decreaseNumConnections();
			      self._expandBuffer();
			    });
			    connection.on('release', function() {
			      if (this._isOpen()) self.putConnection(this);
			    });
			    self.putConnection(connection);
			  }).error(function(error) {
			    // We failed to create a connection, we are now going to create connections one by one
			    self._openingConnections--;
			    self._decreaseNumConnections();

			    self._slowGrowth = true;
			    if (self._slowlyGrowing === false) {
			      if (self.options.silent !== true) console.error('Entering slow growth mode');
			    }
			    self._slowlyGrowing = true;

			    // Log an error
			    if (self.options.silent !== true) {
			      console.error('Fail to create a new connection for the connection pool The error returned was:')
			      console.error(error.message);
			      console.error(error.stack);
			    }

			    if (self._openingConnections === 0) {
			      self._consecutiveFails++;
			      self.timeoutReconnect = setTimeout(function() {
			        //self._expandBuffer();
			        self.createConnection();
			      }, (1<<Math.min(self.options.maxExponent, self._consecutiveFails))*self.options.timeoutError);
			    }
			  })
			};

			Pool.prototype._aggressivelyExpandBuffer = function() {
			  for(var i=0; i<this.options.buffer; i++) {
			    this._expandBuffer();
			  }
			}
			Pool.prototype._expandBuffer = function() {
			  if ((this._draining === null) &&
			      (this._pool.getLength() < this.options.buffer+this._localhostToDrain) &&
			      (this._numConnections < this.options.max+this._localhostToDrain)) {
			    this.createConnection();
			  }
			}

			Pool.prototype.getLength = function() {
			  return this._numConnections;
			}
			Pool.prototype.getAvailableLength = function() {
			  return this._pool.getLength();
			}

			Pool.prototype.setOptions = function(options) {
			  if (helper.isPlainObject(options)) {
			    for(var key in options) {
			      this.options[key] = options[key];
			    }
			  }
			  return this.options;
			}
			Pool.prototype.drainLocalhost = function() {
			  var self = this;
			  // All the connections are to localhost, let's create new ones (not to localhost)
			  self._connectionToReplace = self._numConnections;
			  ;
			  for(var i=0, numConnections=self._numConnections; i<numConnections; i++) {
			    self.createConnection().finally(function() {
			      self._localhostToDrain++;
			      self._connectionToReplace--;
			      if ((self._connectionToReplace === 0) && (self._localhostToDrain > 0)) {
			        var len = self._pool.getLength();
			        for(var j=0; j<len; j++) {
			          if (self._localhostToDrain === 0) {
			            break;
			          }
			          var _connection = self._pool.shift();
			          if (helper.localhostAliases.hasOwnProperty(_connection.host)) {
			            self._localhostToDrain--;
			            _connection.close();
			            clearTimeout(_connection.timeout);
			          }
			          else {
			            self._pool.push(_connection);
			          }
			        }
			      }

			    });
			  }
			}

			Pool.prototype.drain = function() {
			  var self = this;
			  self.emit('draining');
			  var p = new Promise(function(resolve, reject) {
			    var connection = self._pool.pop();
			    self.emit('available-size', self._pool.getLength());
			    self.emit('available-size-diff', -1);
			    while(connection) {
			      connection.close();
			      clearTimeout(connection.timeout);
			      connection = self._pool.pop();
			    }
			    if (self.timeoutReconnect !== undefined) {
			      clearTimeout(self.timeoutReconnect);
			      self.timeoutReconnect = null;
			    }
			    if (self.getLength() === 0) {
			      resolve();
			    }
			    else {
			      self._draining = {
			        resolve: resolve,
			        reject: reject
			      }
			    }
			  });
			  return p;
			}

			module.exports = Pool;


		/***/ }
		/******/ ])
		});
		;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }()), __webpack_require__(3).setImmediate, __webpack_require__(4).Buffer))

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		// shim for using process in browser

		var process = module.exports = {};
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}

		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = setTimeout(cleanUpNextTick);
		    draining = true;

		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            currentQueue[queueIndex].run();
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    clearTimeout(timeout);
		}

		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        setTimeout(drainQueue, 0);
		    }
		};

		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;

		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};

		// TODO(shtylman)
		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(2).nextTick;
		var apply = Function.prototype.apply;
		var slice = Array.prototype.slice;
		var immediateIds = {};
		var nextImmediateId = 0;

		// DOM APIs, for completeness

		exports.setTimeout = function() {
		  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
		};
		exports.setInterval = function() {
		  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
		};
		exports.clearTimeout =
		exports.clearInterval = function(timeout) { timeout.close(); };

		function Timeout(id, clearFn) {
		  this._id = id;
		  this._clearFn = clearFn;
		}
		Timeout.prototype.unref = Timeout.prototype.ref = function() {};
		Timeout.prototype.close = function() {
		  this._clearFn.call(window, this._id);
		};

		// Does not start the time, just sets up the members needed.
		exports.enroll = function(item, msecs) {
		  clearTimeout(item._idleTimeoutId);
		  item._idleTimeout = msecs;
		};

		exports.unenroll = function(item) {
		  clearTimeout(item._idleTimeoutId);
		  item._idleTimeout = -1;
		};

		exports._unrefActive = exports.active = function(item) {
		  clearTimeout(item._idleTimeoutId);

		  var msecs = item._idleTimeout;
		  if (msecs >= 0) {
		    item._idleTimeoutId = setTimeout(function onTimeout() {
		      if (item._onTimeout)
		        item._onTimeout();
		    }, msecs);
		  }
		};

		// That's not how node.js implements it but the exposed api is the same.
		exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
		  var id = nextImmediateId++;
		  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

		  immediateIds[id] = true;

		  nextTick(function onNextTick() {
		    if (immediateIds[id]) {
		      // fn.call() is faster so we optimize for the common use-case
		      // @see http://jsperf.com/call-apply-segu
		      if (args) {
		        fn.apply(null, args);
		      } else {
		        fn.call(null);
		      }
		      // Prevent ids from leaking
		      exports.clearImmediate(id);
		    }
		  });

		  return id;
		};

		exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
		  delete immediateIds[id];
		};
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate, __webpack_require__(3).clearImmediate))

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
		 * @license  MIT
		 */

		var base64 = __webpack_require__(5)
		var ieee754 = __webpack_require__(6)
		var isArray = __webpack_require__(7)

		exports.Buffer = Buffer
		exports.SlowBuffer = SlowBuffer
		exports.INSPECT_MAX_BYTES = 50
		Buffer.poolSize = 8192 // not used by this implementation

		var rootParent = {}

		/**
		 * If `Buffer.TYPED_ARRAY_SUPPORT`:
		 *   === true    Use Uint8Array implementation (fastest)
		 *   === false   Use Object implementation (most compatible, even IE6)
		 *
		 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
		 * Opera 11.6+, iOS 4.2+.
		 *
		 * Note:
		 *
		 * - Implementation must support adding new properties to `Uint8Array` instances.
		 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
		 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
		 *
		 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
		 *
		 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
		 *    incorrect length in some situations.
		 *
		 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
		 * get the Object implementation, which is slower but will work correctly.
		 */
		Buffer.TYPED_ARRAY_SUPPORT = (function () {
		  function Foo () {}
		  try {
		    var buf = new ArrayBuffer(0)
		    var arr = new Uint8Array(buf)
		    arr.foo = function () { return 42 }
		    arr.constructor = Foo
		    return arr.foo() === 42 && // typed array instances can be augmented
		        arr.constructor === Foo && // constructor can be set
		        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
		        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
		  } catch (e) {
		    return false
		  }
		})()

		function kMaxLength () {
		  return Buffer.TYPED_ARRAY_SUPPORT
		    ? 0x7fffffff
		    : 0x3fffffff
		}

		/**
		 * Class: Buffer
		 * =============
		 *
		 * The Buffer constructor returns instances of `Uint8Array` that are augmented
		 * with function properties for all the node `Buffer` API functions. We use
		 * `Uint8Array` so that square bracket notation works as expected -- it returns
		 * a single octet.
		 *
		 * By augmenting the instances, we can avoid modifying the `Uint8Array`
		 * prototype.
		 */
		function Buffer (arg) {
		  if (!(this instanceof Buffer)) {
		    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
		    if (arguments.length > 1) return new Buffer(arg, arguments[1])
		    return new Buffer(arg)
		  }

		  this.length = 0
		  this.parent = undefined

		  // Common case.
		  if (typeof arg === 'number') {
		    return fromNumber(this, arg)
		  }

		  // Slightly less common case.
		  if (typeof arg === 'string') {
		    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
		  }

		  // Unusual.
		  return fromObject(this, arg)
		}

		function fromNumber (that, length) {
		  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
		  if (!Buffer.TYPED_ARRAY_SUPPORT) {
		    for (var i = 0; i < length; i++) {
		      that[i] = 0
		    }
		  }
		  return that
		}

		function fromString (that, string, encoding) {
		  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

		  // Assumption: byteLength() return value is always < kMaxLength.
		  var length = byteLength(string, encoding) | 0
		  that = allocate(that, length)

		  that.write(string, encoding)
		  return that
		}

		function fromObject (that, object) {
		  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

		  if (isArray(object)) return fromArray(that, object)

		  if (object == null) {
		    throw new TypeError('must start with number, buffer, array or string')
		  }

		  if (typeof ArrayBuffer !== 'undefined' && object.buffer instanceof ArrayBuffer) {
		    return fromTypedArray(that, object)
		  }

		  if (object.length) return fromArrayLike(that, object)

		  return fromJsonObject(that, object)
		}

		function fromBuffer (that, buffer) {
		  var length = checked(buffer.length) | 0
		  that = allocate(that, length)
		  buffer.copy(that, 0, 0, length)
		  return that
		}

		function fromArray (that, array) {
		  var length = checked(array.length) | 0
		  that = allocate(that, length)
		  for (var i = 0; i < length; i += 1) {
		    that[i] = array[i] & 255
		  }
		  return that
		}

		// Duplicate of fromArray() to keep fromArray() monomorphic.
		function fromTypedArray (that, array) {
		  var length = checked(array.length) | 0
		  that = allocate(that, length)
		  // Truncating the elements is probably not what people expect from typed
		  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
		  // of the old Buffer constructor.
		  for (var i = 0; i < length; i += 1) {
		    that[i] = array[i] & 255
		  }
		  return that
		}

		function fromArrayLike (that, array) {
		  var length = checked(array.length) | 0
		  that = allocate(that, length)
		  for (var i = 0; i < length; i += 1) {
		    that[i] = array[i] & 255
		  }
		  return that
		}

		// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
		// Returns a zero-length buffer for inputs that don't conform to the spec.
		function fromJsonObject (that, object) {
		  var array
		  var length = 0

		  if (object.type === 'Buffer' && isArray(object.data)) {
		    array = object.data
		    length = checked(array.length) | 0
		  }
		  that = allocate(that, length)

		  for (var i = 0; i < length; i += 1) {
		    that[i] = array[i] & 255
		  }
		  return that
		}

		function allocate (that, length) {
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    // Return an augmented `Uint8Array` instance, for best performance
		    that = Buffer._augment(new Uint8Array(length))
		  } else {
		    // Fallback: Return an object instance of the Buffer class
		    that.length = length
		    that._isBuffer = true
		  }

		  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
		  if (fromPool) that.parent = rootParent

		  return that
		}

		function checked (length) {
		  // Note: cannot use `length < kMaxLength` here because that fails when
		  // length is NaN (which is otherwise coerced to zero.)
		  if (length >= kMaxLength()) {
		    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
		                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
		  }
		  return length | 0
		}

		function SlowBuffer (subject, encoding) {
		  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

		  var buf = new Buffer(subject, encoding)
		  delete buf.parent
		  return buf
		}

		Buffer.isBuffer = function isBuffer (b) {
		  return !!(b != null && b._isBuffer)
		}

		Buffer.compare = function compare (a, b) {
		  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		    throw new TypeError('Arguments must be Buffers')
		  }

		  if (a === b) return 0

		  var x = a.length
		  var y = b.length

		  var i = 0
		  var len = Math.min(x, y)
		  while (i < len) {
		    if (a[i] !== b[i]) break

		    ++i
		  }

		  if (i !== len) {
		    x = a[i]
		    y = b[i]
		  }

		  if (x < y) return -1
		  if (y < x) return 1
		  return 0
		}

		Buffer.isEncoding = function isEncoding (encoding) {
		  switch (String(encoding).toLowerCase()) {
		    case 'hex':
		    case 'utf8':
		    case 'utf-8':
		    case 'ascii':
		    case 'binary':
		    case 'base64':
		    case 'raw':
		    case 'ucs2':
		    case 'ucs-2':
		    case 'utf16le':
		    case 'utf-16le':
		      return true
		    default:
		      return false
		  }
		}

		Buffer.concat = function concat (list, length) {
		  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

		  if (list.length === 0) {
		    return new Buffer(0)
		  } else if (list.length === 1) {
		    return list[0]
		  }

		  var i
		  if (length === undefined) {
		    length = 0
		    for (i = 0; i < list.length; i++) {
		      length += list[i].length
		    }
		  }

		  var buf = new Buffer(length)
		  var pos = 0
		  for (i = 0; i < list.length; i++) {
		    var item = list[i]
		    item.copy(buf, pos)
		    pos += item.length
		  }
		  return buf
		}

		function byteLength (string, encoding) {
		  if (typeof string !== 'string') string = '' + string

		  var len = string.length
		  if (len === 0) return 0

		  // Use a for loop to avoid recursion
		  var loweredCase = false
		  for (;;) {
		    switch (encoding) {
		      case 'ascii':
		      case 'binary':
		      // Deprecated
		      case 'raw':
		      case 'raws':
		        return len
		      case 'utf8':
		      case 'utf-8':
		        return utf8ToBytes(string).length
		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return len * 2
		      case 'hex':
		        return len >>> 1
		      case 'base64':
		        return base64ToBytes(string).length
		      default:
		        if (loweredCase) return utf8ToBytes(string).length // assume utf8
		        encoding = ('' + encoding).toLowerCase()
		        loweredCase = true
		    }
		  }
		}
		Buffer.byteLength = byteLength

		// pre-set for values that may exist in the future
		Buffer.prototype.length = undefined
		Buffer.prototype.parent = undefined

		function slowToString (encoding, start, end) {
		  var loweredCase = false

		  start = start | 0
		  end = end === undefined || end === Infinity ? this.length : end | 0

		  if (!encoding) encoding = 'utf8'
		  if (start < 0) start = 0
		  if (end > this.length) end = this.length
		  if (end <= start) return ''

		  while (true) {
		    switch (encoding) {
		      case 'hex':
		        return hexSlice(this, start, end)

		      case 'utf8':
		      case 'utf-8':
		        return utf8Slice(this, start, end)

		      case 'ascii':
		        return asciiSlice(this, start, end)

		      case 'binary':
		        return binarySlice(this, start, end)

		      case 'base64':
		        return base64Slice(this, start, end)

		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return utf16leSlice(this, start, end)

		      default:
		        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
		        encoding = (encoding + '').toLowerCase()
		        loweredCase = true
		    }
		  }
		}

		Buffer.prototype.toString = function toString () {
		  var length = this.length | 0
		  if (length === 0) return ''
		  if (arguments.length === 0) return utf8Slice(this, 0, length)
		  return slowToString.apply(this, arguments)
		}

		Buffer.prototype.equals = function equals (b) {
		  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
		  if (this === b) return true
		  return Buffer.compare(this, b) === 0
		}

		Buffer.prototype.inspect = function inspect () {
		  var str = ''
		  var max = exports.INSPECT_MAX_BYTES
		  if (this.length > 0) {
		    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
		    if (this.length > max) str += ' ... '
		  }
		  return '<Buffer ' + str + '>'
		}

		Buffer.prototype.compare = function compare (b) {
		  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
		  if (this === b) return 0
		  return Buffer.compare(this, b)
		}

		Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
		  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
		  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
		  byteOffset >>= 0

		  if (this.length === 0) return -1
		  if (byteOffset >= this.length) return -1

		  // Negative offsets start from the end of the buffer
		  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

		  if (typeof val === 'string') {
		    if (val.length === 0) return -1 // special case: looking for empty string always fails
		    return String.prototype.indexOf.call(this, val, byteOffset)
		  }
		  if (Buffer.isBuffer(val)) {
		    return arrayIndexOf(this, val, byteOffset)
		  }
		  if (typeof val === 'number') {
		    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
		      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
		    }
		    return arrayIndexOf(this, [ val ], byteOffset)
		  }

		  function arrayIndexOf (arr, val, byteOffset) {
		    var foundIndex = -1
		    for (var i = 0; byteOffset + i < arr.length; i++) {
		      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
		        if (foundIndex === -1) foundIndex = i
		        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
		      } else {
		        foundIndex = -1
		      }
		    }
		    return -1
		  }

		  throw new TypeError('val must be string, number or Buffer')
		}

		// `get` will be removed in Node 0.13+
		Buffer.prototype.get = function get (offset) {
		  console.log('.get() is deprecated. Access using array indexes instead.')
		  return this.readUInt8(offset)
		}

		// `set` will be removed in Node 0.13+
		Buffer.prototype.set = function set (v, offset) {
		  console.log('.set() is deprecated. Access using array indexes instead.')
		  return this.writeUInt8(v, offset)
		}

		function hexWrite (buf, string, offset, length) {
		  offset = Number(offset) || 0
		  var remaining = buf.length - offset
		  if (!length) {
		    length = remaining
		  } else {
		    length = Number(length)
		    if (length > remaining) {
		      length = remaining
		    }
		  }

		  // must be an even number of digits
		  var strLen = string.length
		  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

		  if (length > strLen / 2) {
		    length = strLen / 2
		  }
		  for (var i = 0; i < length; i++) {
		    var parsed = parseInt(string.substr(i * 2, 2), 16)
		    if (isNaN(parsed)) throw new Error('Invalid hex string')
		    buf[offset + i] = parsed
		  }
		  return i
		}

		function utf8Write (buf, string, offset, length) {
		  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
		}

		function asciiWrite (buf, string, offset, length) {
		  return blitBuffer(asciiToBytes(string), buf, offset, length)
		}

		function binaryWrite (buf, string, offset, length) {
		  return asciiWrite(buf, string, offset, length)
		}

		function base64Write (buf, string, offset, length) {
		  return blitBuffer(base64ToBytes(string), buf, offset, length)
		}

		function ucs2Write (buf, string, offset, length) {
		  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
		}

		Buffer.prototype.write = function write (string, offset, length, encoding) {
		  // Buffer#write(string)
		  if (offset === undefined) {
		    encoding = 'utf8'
		    length = this.length
		    offset = 0
		  // Buffer#write(string, encoding)
		  } else if (length === undefined && typeof offset === 'string') {
		    encoding = offset
		    length = this.length
		    offset = 0
		  // Buffer#write(string, offset[, length][, encoding])
		  } else if (isFinite(offset)) {
		    offset = offset | 0
		    if (isFinite(length)) {
		      length = length | 0
		      if (encoding === undefined) encoding = 'utf8'
		    } else {
		      encoding = length
		      length = undefined
		    }
		  // legacy write(string, encoding, offset, length) - remove in v0.13
		  } else {
		    var swap = encoding
		    encoding = offset
		    offset = length | 0
		    length = swap
		  }

		  var remaining = this.length - offset
		  if (length === undefined || length > remaining) length = remaining

		  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
		    throw new RangeError('attempt to write outside buffer bounds')
		  }

		  if (!encoding) encoding = 'utf8'

		  var loweredCase = false
		  for (;;) {
		    switch (encoding) {
		      case 'hex':
		        return hexWrite(this, string, offset, length)

		      case 'utf8':
		      case 'utf-8':
		        return utf8Write(this, string, offset, length)

		      case 'ascii':
		        return asciiWrite(this, string, offset, length)

		      case 'binary':
		        return binaryWrite(this, string, offset, length)

		      case 'base64':
		        // Warning: maxLength not taken into account in base64Write
		        return base64Write(this, string, offset, length)

		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return ucs2Write(this, string, offset, length)

		      default:
		        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
		        encoding = ('' + encoding).toLowerCase()
		        loweredCase = true
		    }
		  }
		}

		Buffer.prototype.toJSON = function toJSON () {
		  return {
		    type: 'Buffer',
		    data: Array.prototype.slice.call(this._arr || this, 0)
		  }
		}

		function base64Slice (buf, start, end) {
		  if (start === 0 && end === buf.length) {
		    return base64.fromByteArray(buf)
		  } else {
		    return base64.fromByteArray(buf.slice(start, end))
		  }
		}

		function utf8Slice (buf, start, end) {
		  var res = ''
		  var tmp = ''
		  end = Math.min(buf.length, end)

		  for (var i = start; i < end; i++) {
		    if (buf[i] <= 0x7F) {
		      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
		      tmp = ''
		    } else {
		      tmp += '%' + buf[i].toString(16)
		    }
		  }

		  return res + decodeUtf8Char(tmp)
		}

		function asciiSlice (buf, start, end) {
		  var ret = ''
		  end = Math.min(buf.length, end)

		  for (var i = start; i < end; i++) {
		    ret += String.fromCharCode(buf[i] & 0x7F)
		  }
		  return ret
		}

		function binarySlice (buf, start, end) {
		  var ret = ''
		  end = Math.min(buf.length, end)

		  for (var i = start; i < end; i++) {
		    ret += String.fromCharCode(buf[i])
		  }
		  return ret
		}

		function hexSlice (buf, start, end) {
		  var len = buf.length

		  if (!start || start < 0) start = 0
		  if (!end || end < 0 || end > len) end = len

		  var out = ''
		  for (var i = start; i < end; i++) {
		    out += toHex(buf[i])
		  }
		  return out
		}

		function utf16leSlice (buf, start, end) {
		  var bytes = buf.slice(start, end)
		  var res = ''
		  for (var i = 0; i < bytes.length; i += 2) {
		    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
		  }
		  return res
		}

		Buffer.prototype.slice = function slice (start, end) {
		  var len = this.length
		  start = ~~start
		  end = end === undefined ? len : ~~end

		  if (start < 0) {
		    start += len
		    if (start < 0) start = 0
		  } else if (start > len) {
		    start = len
		  }

		  if (end < 0) {
		    end += len
		    if (end < 0) end = 0
		  } else if (end > len) {
		    end = len
		  }

		  if (end < start) end = start

		  var newBuf
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    newBuf = Buffer._augment(this.subarray(start, end))
		  } else {
		    var sliceLen = end - start
		    newBuf = new Buffer(sliceLen, undefined)
		    for (var i = 0; i < sliceLen; i++) {
		      newBuf[i] = this[i + start]
		    }
		  }

		  if (newBuf.length) newBuf.parent = this.parent || this

		  return newBuf
		}

		/*
		 * Need to make sure that buffer isn't trying to write out of bounds.
		 */
		function checkOffset (offset, ext, length) {
		  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
		  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
		}

		Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkOffset(offset, byteLength, this.length)

		  var val = this[offset]
		  var mul = 1
		  var i = 0
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul
		  }

		  return val
		}

		Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) {
		    checkOffset(offset, byteLength, this.length)
		  }

		  var val = this[offset + --byteLength]
		  var mul = 1
		  while (byteLength > 0 && (mul *= 0x100)) {
		    val += this[offset + --byteLength] * mul
		  }

		  return val
		}

		Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 1, this.length)
		  return this[offset]
		}

		Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  return this[offset] | (this[offset + 1] << 8)
		}

		Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  return (this[offset] << 8) | this[offset + 1]
		}

		Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)

		  return ((this[offset]) |
		      (this[offset + 1] << 8) |
		      (this[offset + 2] << 16)) +
		      (this[offset + 3] * 0x1000000)
		}

		Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)

		  return (this[offset] * 0x1000000) +
		    ((this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    this[offset + 3])
		}

		Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkOffset(offset, byteLength, this.length)

		  var val = this[offset]
		  var mul = 1
		  var i = 0
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul
		  }
		  mul *= 0x80

		  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

		  return val
		}

		Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkOffset(offset, byteLength, this.length)

		  var i = byteLength
		  var mul = 1
		  var val = this[offset + --i]
		  while (i > 0 && (mul *= 0x100)) {
		    val += this[offset + --i] * mul
		  }
		  mul *= 0x80

		  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

		  return val
		}

		Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 1, this.length)
		  if (!(this[offset] & 0x80)) return (this[offset])
		  return ((0xff - this[offset] + 1) * -1)
		}

		Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  var val = this[offset] | (this[offset + 1] << 8)
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		}

		Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  var val = this[offset + 1] | (this[offset] << 8)
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		}

		Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)

		  return (this[offset]) |
		    (this[offset + 1] << 8) |
		    (this[offset + 2] << 16) |
		    (this[offset + 3] << 24)
		}

		Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)

		  return (this[offset] << 24) |
		    (this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    (this[offset + 3])
		}

		Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		  return ieee754.read(this, offset, true, 23, 4)
		}

		Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		  return ieee754.read(this, offset, false, 23, 4)
		}

		Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 8, this.length)
		  return ieee754.read(this, offset, true, 52, 8)
		}

		Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 8, this.length)
		  return ieee754.read(this, offset, false, 52, 8)
		}

		function checkInt (buf, value, offset, ext, max, min) {
		  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
		  if (value > max || value < min) throw new RangeError('value is out of bounds')
		  if (offset + ext > buf.length) throw new RangeError('index out of range')
		}

		Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

		  var mul = 1
		  var i = 0
		  this[offset] = value & 0xFF
		  while (++i < byteLength && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF
		  }

		  return offset + byteLength
		}

		Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

		  var i = byteLength - 1
		  var mul = 1
		  this[offset + i] = value & 0xFF
		  while (--i >= 0 && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF
		  }

		  return offset + byteLength
		}

		Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
		  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
		  this[offset] = value
		  return offset + 1
		}

		function objectWriteUInt16 (buf, value, offset, littleEndian) {
		  if (value < 0) value = 0xffff + value + 1
		  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
		    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
		      (littleEndian ? i : 1 - i) * 8
		  }
		}

		Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = value
		    this[offset + 1] = (value >>> 8)
		  } else {
		    objectWriteUInt16(this, value, offset, true)
		  }
		  return offset + 2
		}

		Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 8)
		    this[offset + 1] = value
		  } else {
		    objectWriteUInt16(this, value, offset, false)
		  }
		  return offset + 2
		}

		function objectWriteUInt32 (buf, value, offset, littleEndian) {
		  if (value < 0) value = 0xffffffff + value + 1
		  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
		    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
		  }
		}

		Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset + 3] = (value >>> 24)
		    this[offset + 2] = (value >>> 16)
		    this[offset + 1] = (value >>> 8)
		    this[offset] = value
		  } else {
		    objectWriteUInt32(this, value, offset, true)
		  }
		  return offset + 4
		}

		Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 24)
		    this[offset + 1] = (value >>> 16)
		    this[offset + 2] = (value >>> 8)
		    this[offset + 3] = value
		  } else {
		    objectWriteUInt32(this, value, offset, false)
		  }
		  return offset + 4
		}

		Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) {
		    var limit = Math.pow(2, 8 * byteLength - 1)

		    checkInt(this, value, offset, byteLength, limit - 1, -limit)
		  }

		  var i = 0
		  var mul = 1
		  var sub = value < 0 ? 1 : 0
		  this[offset] = value & 0xFF
		  while (++i < byteLength && (mul *= 0x100)) {
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
		  }

		  return offset + byteLength
		}

		Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) {
		    var limit = Math.pow(2, 8 * byteLength - 1)

		    checkInt(this, value, offset, byteLength, limit - 1, -limit)
		  }

		  var i = byteLength - 1
		  var mul = 1
		  var sub = value < 0 ? 1 : 0
		  this[offset + i] = value & 0xFF
		  while (--i >= 0 && (mul *= 0x100)) {
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
		  }

		  return offset + byteLength
		}

		Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
		  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
		  if (value < 0) value = 0xff + value + 1
		  this[offset] = value
		  return offset + 1
		}

		Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = value
		    this[offset + 1] = (value >>> 8)
		  } else {
		    objectWriteUInt16(this, value, offset, true)
		  }
		  return offset + 2
		}

		Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 8)
		    this[offset + 1] = value
		  } else {
		    objectWriteUInt16(this, value, offset, false)
		  }
		  return offset + 2
		}

		Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = value
		    this[offset + 1] = (value >>> 8)
		    this[offset + 2] = (value >>> 16)
		    this[offset + 3] = (value >>> 24)
		  } else {
		    objectWriteUInt32(this, value, offset, true)
		  }
		  return offset + 4
		}

		Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
		  if (value < 0) value = 0xffffffff + value + 1
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 24)
		    this[offset + 1] = (value >>> 16)
		    this[offset + 2] = (value >>> 8)
		    this[offset + 3] = value
		  } else {
		    objectWriteUInt32(this, value, offset, false)
		  }
		  return offset + 4
		}

		function checkIEEE754 (buf, value, offset, ext, max, min) {
		  if (value > max || value < min) throw new RangeError('value is out of bounds')
		  if (offset + ext > buf.length) throw new RangeError('index out of range')
		  if (offset < 0) throw new RangeError('index out of range')
		}

		function writeFloat (buf, value, offset, littleEndian, noAssert) {
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
		  }
		  ieee754.write(buf, value, offset, littleEndian, 23, 4)
		  return offset + 4
		}

		Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, true, noAssert)
		}

		Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, false, noAssert)
		}

		function writeDouble (buf, value, offset, littleEndian, noAssert) {
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
		  }
		  ieee754.write(buf, value, offset, littleEndian, 52, 8)
		  return offset + 8
		}

		Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, true, noAssert)
		}

		Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, false, noAssert)
		}

		// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
		Buffer.prototype.copy = function copy (target, targetStart, start, end) {
		  if (!start) start = 0
		  if (!end && end !== 0) end = this.length
		  if (targetStart >= target.length) targetStart = target.length
		  if (!targetStart) targetStart = 0
		  if (end > 0 && end < start) end = start

		  // Copy 0 bytes; we're done
		  if (end === start) return 0
		  if (target.length === 0 || this.length === 0) return 0

		  // Fatal error conditions
		  if (targetStart < 0) {
		    throw new RangeError('targetStart out of bounds')
		  }
		  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
		  if (end < 0) throw new RangeError('sourceEnd out of bounds')

		  // Are we oob?
		  if (end > this.length) end = this.length
		  if (target.length - targetStart < end - start) {
		    end = target.length - targetStart + start
		  }

		  var len = end - start

		  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
		    for (var i = 0; i < len; i++) {
		      target[i + targetStart] = this[i + start]
		    }
		  } else {
		    target._set(this.subarray(start, start + len), targetStart)
		  }

		  return len
		}

		// fill(value, start=0, end=buffer.length)
		Buffer.prototype.fill = function fill (value, start, end) {
		  if (!value) value = 0
		  if (!start) start = 0
		  if (!end) end = this.length

		  if (end < start) throw new RangeError('end < start')

		  // Fill 0 bytes; we're done
		  if (end === start) return
		  if (this.length === 0) return

		  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
		  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

		  var i
		  if (typeof value === 'number') {
		    for (i = start; i < end; i++) {
		      this[i] = value
		    }
		  } else {
		    var bytes = utf8ToBytes(value.toString())
		    var len = bytes.length
		    for (i = start; i < end; i++) {
		      this[i] = bytes[i % len]
		    }
		  }

		  return this
		}

		/**
		 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
		 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
		 */
		Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
		  if (typeof Uint8Array !== 'undefined') {
		    if (Buffer.TYPED_ARRAY_SUPPORT) {
		      return (new Buffer(this)).buffer
		    } else {
		      var buf = new Uint8Array(this.length)
		      for (var i = 0, len = buf.length; i < len; i += 1) {
		        buf[i] = this[i]
		      }
		      return buf.buffer
		    }
		  } else {
		    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
		  }
		}

		// HELPER FUNCTIONS
		// ================

		var BP = Buffer.prototype

		/**
		 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
		 */
		Buffer._augment = function _augment (arr) {
		  arr.constructor = Buffer
		  arr._isBuffer = true

		  // save reference to original Uint8Array set method before overwriting
		  arr._set = arr.set

		  // deprecated, will be removed in node 0.13+
		  arr.get = BP.get
		  arr.set = BP.set

		  arr.write = BP.write
		  arr.toString = BP.toString
		  arr.toLocaleString = BP.toString
		  arr.toJSON = BP.toJSON
		  arr.equals = BP.equals
		  arr.compare = BP.compare
		  arr.indexOf = BP.indexOf
		  arr.copy = BP.copy
		  arr.slice = BP.slice
		  arr.readUIntLE = BP.readUIntLE
		  arr.readUIntBE = BP.readUIntBE
		  arr.readUInt8 = BP.readUInt8
		  arr.readUInt16LE = BP.readUInt16LE
		  arr.readUInt16BE = BP.readUInt16BE
		  arr.readUInt32LE = BP.readUInt32LE
		  arr.readUInt32BE = BP.readUInt32BE
		  arr.readIntLE = BP.readIntLE
		  arr.readIntBE = BP.readIntBE
		  arr.readInt8 = BP.readInt8
		  arr.readInt16LE = BP.readInt16LE
		  arr.readInt16BE = BP.readInt16BE
		  arr.readInt32LE = BP.readInt32LE
		  arr.readInt32BE = BP.readInt32BE
		  arr.readFloatLE = BP.readFloatLE
		  arr.readFloatBE = BP.readFloatBE
		  arr.readDoubleLE = BP.readDoubleLE
		  arr.readDoubleBE = BP.readDoubleBE
		  arr.writeUInt8 = BP.writeUInt8
		  arr.writeUIntLE = BP.writeUIntLE
		  arr.writeUIntBE = BP.writeUIntBE
		  arr.writeUInt16LE = BP.writeUInt16LE
		  arr.writeUInt16BE = BP.writeUInt16BE
		  arr.writeUInt32LE = BP.writeUInt32LE
		  arr.writeUInt32BE = BP.writeUInt32BE
		  arr.writeIntLE = BP.writeIntLE
		  arr.writeIntBE = BP.writeIntBE
		  arr.writeInt8 = BP.writeInt8
		  arr.writeInt16LE = BP.writeInt16LE
		  arr.writeInt16BE = BP.writeInt16BE
		  arr.writeInt32LE = BP.writeInt32LE
		  arr.writeInt32BE = BP.writeInt32BE
		  arr.writeFloatLE = BP.writeFloatLE
		  arr.writeFloatBE = BP.writeFloatBE
		  arr.writeDoubleLE = BP.writeDoubleLE
		  arr.writeDoubleBE = BP.writeDoubleBE
		  arr.fill = BP.fill
		  arr.inspect = BP.inspect
		  arr.toArrayBuffer = BP.toArrayBuffer

		  return arr
		}

		var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g

		function base64clean (str) {
		  // Node strips out invalid characters like \n and \t from the string, base64-js does not
		  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
		  // Node converts strings with length < 2 to ''
		  if (str.length < 2) return ''
		  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
		  while (str.length % 4 !== 0) {
		    str = str + '='
		  }
		  return str
		}

		function stringtrim (str) {
		  if (str.trim) return str.trim()
		  return str.replace(/^\s+|\s+$/g, '')
		}

		function toHex (n) {
		  if (n < 16) return '0' + n.toString(16)
		  return n.toString(16)
		}

		function utf8ToBytes (string, units) {
		  units = units || Infinity
		  var codePoint
		  var length = string.length
		  var leadSurrogate = null
		  var bytes = []
		  var i = 0

		  for (; i < length; i++) {
		    codePoint = string.charCodeAt(i)

		    // is surrogate component
		    if (codePoint > 0xD7FF && codePoint < 0xE000) {
		      // last char was a lead
		      if (leadSurrogate) {
		        // 2 leads in a row
		        if (codePoint < 0xDC00) {
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		          leadSurrogate = codePoint
		          continue
		        } else {
		          // valid surrogate pair
		          codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
		          leadSurrogate = null
		        }
		      } else {
		        // no lead yet

		        if (codePoint > 0xDBFF) {
		          // unexpected trail
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		          continue
		        } else if (i + 1 === length) {
		          // unpaired lead
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		          continue
		        } else {
		          // valid lead
		          leadSurrogate = codePoint
		          continue
		        }
		      }
		    } else if (leadSurrogate) {
		      // valid bmp char, but last char was a lead
		      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		      leadSurrogate = null
		    }

		    // encode utf8
		    if (codePoint < 0x80) {
		      if ((units -= 1) < 0) break
		      bytes.push(codePoint)
		    } else if (codePoint < 0x800) {
		      if ((units -= 2) < 0) break
		      bytes.push(
		        codePoint >> 0x6 | 0xC0,
		        codePoint & 0x3F | 0x80
		      )
		    } else if (codePoint < 0x10000) {
		      if ((units -= 3) < 0) break
		      bytes.push(
		        codePoint >> 0xC | 0xE0,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      )
		    } else if (codePoint < 0x200000) {
		      if ((units -= 4) < 0) break
		      bytes.push(
		        codePoint >> 0x12 | 0xF0,
		        codePoint >> 0xC & 0x3F | 0x80,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      )
		    } else {
		      throw new Error('Invalid code point')
		    }
		  }

		  return bytes
		}

		function asciiToBytes (str) {
		  var byteArray = []
		  for (var i = 0; i < str.length; i++) {
		    // Node's code seems to be doing this and not & 0x7F..
		    byteArray.push(str.charCodeAt(i) & 0xFF)
		  }
		  return byteArray
		}

		function utf16leToBytes (str, units) {
		  var c, hi, lo
		  var byteArray = []
		  for (var i = 0; i < str.length; i++) {
		    if ((units -= 2) < 0) break

		    c = str.charCodeAt(i)
		    hi = c >> 8
		    lo = c % 256
		    byteArray.push(lo)
		    byteArray.push(hi)
		  }

		  return byteArray
		}

		function base64ToBytes (str) {
		  return base64.toByteArray(base64clean(str))
		}

		function blitBuffer (src, dst, offset, length) {
		  for (var i = 0; i < length; i++) {
		    if ((i + offset >= dst.length) || (i >= src.length)) break
		    dst[i + offset] = src[i]
		  }
		  return i
		}

		function decodeUtf8Char (str) {
		  try {
		    return decodeURIComponent(str)
		  } catch (err) {
		    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
		  }
		}

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

		;(function (exports) {
			'use strict';

		  var Arr = (typeof Uint8Array !== 'undefined')
		    ? Uint8Array
		    : Array

			var PLUS   = '+'.charCodeAt(0)
			var SLASH  = '/'.charCodeAt(0)
			var NUMBER = '0'.charCodeAt(0)
			var LOWER  = 'a'.charCodeAt(0)
			var UPPER  = 'A'.charCodeAt(0)
			var PLUS_URL_SAFE = '-'.charCodeAt(0)
			var SLASH_URL_SAFE = '_'.charCodeAt(0)

			function decode (elt) {
				var code = elt.charCodeAt(0)
				if (code === PLUS ||
				    code === PLUS_URL_SAFE)
					return 62 // '+'
				if (code === SLASH ||
				    code === SLASH_URL_SAFE)
					return 63 // '/'
				if (code < NUMBER)
					return -1 //no match
				if (code < NUMBER + 10)
					return code - NUMBER + 26 + 26
				if (code < UPPER + 26)
					return code - UPPER
				if (code < LOWER + 26)
					return code - LOWER + 26
			}

			function b64ToByteArray (b64) {
				var i, j, l, tmp, placeHolders, arr

				if (b64.length % 4 > 0) {
					throw new Error('Invalid string. Length must be a multiple of 4')
				}

				// the number of equal signs (place holders)
				// if there are two placeholders, than the two characters before it
				// represent one byte
				// if there is only one, then the three characters before it represent 2 bytes
				// this is just a cheap hack to not do indexOf twice
				var len = b64.length
				placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

				// base64 is 4/3 + up to two characters of the original data
				arr = new Arr(b64.length * 3 / 4 - placeHolders)

				// if there are placeholders, only get up to the last complete 4 chars
				l = placeHolders > 0 ? b64.length - 4 : b64.length

				var L = 0

				function push (v) {
					arr[L++] = v
				}

				for (i = 0, j = 0; i < l; i += 4, j += 3) {
					tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
					push((tmp & 0xFF0000) >> 16)
					push((tmp & 0xFF00) >> 8)
					push(tmp & 0xFF)
				}

				if (placeHolders === 2) {
					tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
					push(tmp & 0xFF)
				} else if (placeHolders === 1) {
					tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
					push((tmp >> 8) & 0xFF)
					push(tmp & 0xFF)
				}

				return arr
			}

			function uint8ToBase64 (uint8) {
				var i,
					extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
					output = "",
					temp, length

				function encode (num) {
					return lookup.charAt(num)
				}

				function tripletToBase64 (num) {
					return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
				}

				// go through the array every three bytes, we'll deal with trailing stuff later
				for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
					temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
					output += tripletToBase64(temp)
				}

				// pad the end with zeros, but make sure to not forget the extra bytes
				switch (extraBytes) {
					case 1:
						temp = uint8[uint8.length - 1]
						output += encode(temp >> 2)
						output += encode((temp << 4) & 0x3F)
						output += '=='
						break
					case 2:
						temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
						output += encode(temp >> 10)
						output += encode((temp >> 4) & 0x3F)
						output += encode((temp << 2) & 0x3F)
						output += '='
						break
				}

				return output
			}

			exports.toByteArray = b64ToByteArray
			exports.fromByteArray = uint8ToBase64
		}(false ? (this.base64js = {}) : exports))


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		exports.read = function (buffer, offset, isLE, mLen, nBytes) {
		  var e, m
		  var eLen = nBytes * 8 - mLen - 1
		  var eMax = (1 << eLen) - 1
		  var eBias = eMax >> 1
		  var nBits = -7
		  var i = isLE ? (nBytes - 1) : 0
		  var d = isLE ? -1 : 1
		  var s = buffer[offset + i]

		  i += d

		  e = s & ((1 << (-nBits)) - 1)
		  s >>= (-nBits)
		  nBits += eLen
		  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

		  m = e & ((1 << (-nBits)) - 1)
		  e >>= (-nBits)
		  nBits += mLen
		  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

		  if (e === 0) {
		    e = 1 - eBias
		  } else if (e === eMax) {
		    return m ? NaN : ((s ? -1 : 1) * Infinity)
		  } else {
		    m = m + Math.pow(2, mLen)
		    e = e - eBias
		  }
		  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
		}

		exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
		  var e, m, c
		  var eLen = nBytes * 8 - mLen - 1
		  var eMax = (1 << eLen) - 1
		  var eBias = eMax >> 1
		  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
		  var i = isLE ? 0 : (nBytes - 1)
		  var d = isLE ? 1 : -1
		  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

		  value = Math.abs(value)

		  if (isNaN(value) || value === Infinity) {
		    m = isNaN(value) ? 1 : 0
		    e = eMax
		  } else {
		    e = Math.floor(Math.log(value) / Math.LN2)
		    if (value * (c = Math.pow(2, -e)) < 1) {
		      e--
		      c *= 2
		    }
		    if (e + eBias >= 1) {
		      value += rt / c
		    } else {
		      value += rt * Math.pow(2, 1 - eBias)
		    }
		    if (value * c >= 2) {
		      e++
		      c /= 2
		    }

		    if (e + eBias >= eMax) {
		      m = 0
		      e = eMax
		    } else if (e + eBias >= 1) {
		      m = (value * c - 1) * Math.pow(2, mLen)
		      e = e + eBias
		    } else {
		      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
		      e = 0
		    }
		  }

		  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

		  e = (e << mLen) | m
		  eLen += mLen
		  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

		  buffer[offset + i - d] |= s * 128
		}


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		
		/**
		 * isArray
		 */

		var isArray = Array.isArray;

		/**
		 * toString
		 */

		var str = Object.prototype.toString;

		/**
		 * Whether or not the given `val`
		 * is an array.
		 *
		 * example:
		 *
		 *        isArray([]);
		 *        // > true
		 *        isArray(arguments);
		 *        // > false
		 *        isArray('');
		 *        // > false
		 *
		 * @param {mixed} val
		 * @return {bool}
		 */

		module.exports = isArray || function (val) {
		  return !! val && '[object Array]' == str.call(val);
		};


	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		function EventEmitter() {
		  this._events = this._events || {};
		  this._maxListeners = this._maxListeners || undefined;
		}
		module.exports = EventEmitter;

		// Backwards-compat with node 0.10.x
		EventEmitter.EventEmitter = EventEmitter;

		EventEmitter.prototype._events = undefined;
		EventEmitter.prototype._maxListeners = undefined;

		// By default EventEmitters will print a warning if more than 10 listeners are
		// added to it. This is a useful default which helps finding memory leaks.
		EventEmitter.defaultMaxListeners = 10;

		// Obviously not all Emitters should be limited to 10. This function allows
		// that to be increased. Set to zero for unlimited.
		EventEmitter.prototype.setMaxListeners = function(n) {
		  if (!isNumber(n) || n < 0 || isNaN(n))
		    throw TypeError('n must be a positive number');
		  this._maxListeners = n;
		  return this;
		};

		EventEmitter.prototype.emit = function(type) {
		  var er, handler, len, args, i, listeners;

		  if (!this._events)
		    this._events = {};

		  // If there is no 'error' event listener then throw.
		  if (type === 'error') {
		    if (!this._events.error ||
		        (isObject(this._events.error) && !this._events.error.length)) {
		      er = arguments[1];
		      if (er instanceof Error) {
		        throw er; // Unhandled 'error' event
		      }
		      throw TypeError('Uncaught, unspecified "error" event.');
		    }
		  }

		  handler = this._events[type];

		  if (isUndefined(handler))
		    return false;

		  if (isFunction(handler)) {
		    switch (arguments.length) {
		      // fast cases
		      case 1:
		        handler.call(this);
		        break;
		      case 2:
		        handler.call(this, arguments[1]);
		        break;
		      case 3:
		        handler.call(this, arguments[1], arguments[2]);
		        break;
		      // slower
		      default:
		        len = arguments.length;
		        args = new Array(len - 1);
		        for (i = 1; i < len; i++)
		          args[i - 1] = arguments[i];
		        handler.apply(this, args);
		    }
		  } else if (isObject(handler)) {
		    len = arguments.length;
		    args = new Array(len - 1);
		    for (i = 1; i < len; i++)
		      args[i - 1] = arguments[i];

		    listeners = handler.slice();
		    len = listeners.length;
		    for (i = 0; i < len; i++)
		      listeners[i].apply(this, args);
		  }

		  return true;
		};

		EventEmitter.prototype.addListener = function(type, listener) {
		  var m;

		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');

		  if (!this._events)
		    this._events = {};

		  // To avoid recursion in the case that type === "newListener"! Before
		  // adding it to the listeners, first emit "newListener".
		  if (this._events.newListener)
		    this.emit('newListener', type,
		              isFunction(listener.listener) ?
		              listener.listener : listener);

		  if (!this._events[type])
		    // Optimize the case of one listener. Don't need the extra array object.
		    this._events[type] = listener;
		  else if (isObject(this._events[type]))
		    // If we've already got an array, just append.
		    this._events[type].push(listener);
		  else
		    // Adding the second element, need to change to array.
		    this._events[type] = [this._events[type], listener];

		  // Check for listener leak
		  if (isObject(this._events[type]) && !this._events[type].warned) {
		    var m;
		    if (!isUndefined(this._maxListeners)) {
		      m = this._maxListeners;
		    } else {
		      m = EventEmitter.defaultMaxListeners;
		    }

		    if (m && m > 0 && this._events[type].length > m) {
		      this._events[type].warned = true;
		      console.error('(node) warning: possible EventEmitter memory ' +
		                    'leak detected. %d listeners added. ' +
		                    'Use emitter.setMaxListeners() to increase limit.',
		                    this._events[type].length);
		      if (typeof console.trace === 'function') {
		        // not supported in IE 10
		        console.trace();
		      }
		    }
		  }

		  return this;
		};

		EventEmitter.prototype.on = EventEmitter.prototype.addListener;

		EventEmitter.prototype.once = function(type, listener) {
		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');

		  var fired = false;

		  function g() {
		    this.removeListener(type, g);

		    if (!fired) {
		      fired = true;
		      listener.apply(this, arguments);
		    }
		  }

		  g.listener = listener;
		  this.on(type, g);

		  return this;
		};

		// emits a 'removeListener' event iff the listener was removed
		EventEmitter.prototype.removeListener = function(type, listener) {
		  var list, position, length, i;

		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');

		  if (!this._events || !this._events[type])
		    return this;

		  list = this._events[type];
		  length = list.length;
		  position = -1;

		  if (list === listener ||
		      (isFunction(list.listener) && list.listener === listener)) {
		    delete this._events[type];
		    if (this._events.removeListener)
		      this.emit('removeListener', type, listener);

		  } else if (isObject(list)) {
		    for (i = length; i-- > 0;) {
		      if (list[i] === listener ||
		          (list[i].listener && list[i].listener === listener)) {
		        position = i;
		        break;
		      }
		    }

		    if (position < 0)
		      return this;

		    if (list.length === 1) {
		      list.length = 0;
		      delete this._events[type];
		    } else {
		      list.splice(position, 1);
		    }

		    if (this._events.removeListener)
		      this.emit('removeListener', type, listener);
		  }

		  return this;
		};

		EventEmitter.prototype.removeAllListeners = function(type) {
		  var key, listeners;

		  if (!this._events)
		    return this;

		  // not listening for removeListener, no need to emit
		  if (!this._events.removeListener) {
		    if (arguments.length === 0)
		      this._events = {};
		    else if (this._events[type])
		      delete this._events[type];
		    return this;
		  }

		  // emit removeListener for all listeners on all events
		  if (arguments.length === 0) {
		    for (key in this._events) {
		      if (key === 'removeListener') continue;
		      this.removeAllListeners(key);
		    }
		    this.removeAllListeners('removeListener');
		    this._events = {};
		    return this;
		  }

		  listeners = this._events[type];

		  if (isFunction(listeners)) {
		    this.removeListener(type, listeners);
		  } else {
		    // LIFO order
		    while (listeners.length)
		      this.removeListener(type, listeners[listeners.length - 1]);
		  }
		  delete this._events[type];

		  return this;
		};

		EventEmitter.prototype.listeners = function(type) {
		  var ret;
		  if (!this._events || !this._events[type])
		    ret = [];
		  else if (isFunction(this._events[type]))
		    ret = [this._events[type]];
		  else
		    ret = this._events[type].slice();
		  return ret;
		};

		EventEmitter.listenerCount = function(emitter, type) {
		  var ret;
		  if (!emitter._events || !emitter._events[type])
		    ret = 0;
		  else if (isFunction(emitter._events[type]))
		    ret = 1;
		  else
		    ret = emitter._events[type].length;
		  return ret;
		};

		function isFunction(arg) {
		  return typeof arg === 'function';
		}

		function isNumber(arg) {
		  return typeof arg === 'number';
		}

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}

		function isUndefined(arg) {
		  return arg === void 0;
		}


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		var formatRegExp = /%[sdj%]/g;
		exports.format = function(f) {
		  if (!isString(f)) {
		    var objects = [];
		    for (var i = 0; i < arguments.length; i++) {
		      objects.push(inspect(arguments[i]));
		    }
		    return objects.join(' ');
		  }

		  var i = 1;
		  var args = arguments;
		  var len = args.length;
		  var str = String(f).replace(formatRegExp, function(x) {
		    if (x === '%%') return '%';
		    if (i >= len) return x;
		    switch (x) {
		      case '%s': return String(args[i++]);
		      case '%d': return Number(args[i++]);
		      case '%j':
		        try {
		          return JSON.stringify(args[i++]);
		        } catch (_) {
		          return '[Circular]';
		        }
		      default:
		        return x;
		    }
		  });
		  for (var x = args[i]; i < len; x = args[++i]) {
		    if (isNull(x) || !isObject(x)) {
		      str += ' ' + x;
		    } else {
		      str += ' ' + inspect(x);
		    }
		  }
		  return str;
		};


		// Mark that a method should not be used.
		// Returns a modified function which warns once by default.
		// If --no-deprecation is set, then it is a no-op.
		exports.deprecate = function(fn, msg) {
		  // Allow for deprecating things in the process of starting up.
		  if (isUndefined(global.process)) {
		    return function() {
		      return exports.deprecate(fn, msg).apply(this, arguments);
		    };
		  }

		  if (process.noDeprecation === true) {
		    return fn;
		  }

		  var warned = false;
		  function deprecated() {
		    if (!warned) {
		      if (process.throwDeprecation) {
		        throw new Error(msg);
		      } else if (process.traceDeprecation) {
		        console.trace(msg);
		      } else {
		        console.error(msg);
		      }
		      warned = true;
		    }
		    return fn.apply(this, arguments);
		  }

		  return deprecated;
		};


		var debugs = {};
		var debugEnviron;
		exports.debuglog = function(set) {
		  if (isUndefined(debugEnviron))
		    debugEnviron = process.env.NODE_DEBUG || '';
		  set = set.toUpperCase();
		  if (!debugs[set]) {
		    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
		      var pid = process.pid;
		      debugs[set] = function() {
		        var msg = exports.format.apply(exports, arguments);
		        console.error('%s %d: %s', set, pid, msg);
		      };
		    } else {
		      debugs[set] = function() {};
		    }
		  }
		  return debugs[set];
		};


		/**
		 * Echos the value of a value. Trys to print the value out
		 * in the best way possible given the different types.
		 *
		 * @param {Object} obj The object to print out.
		 * @param {Object} opts Optional options object that alters the output.
		 */
		/* legacy: obj, showHidden, depth, colors*/
		function inspect(obj, opts) {
		  // default options
		  var ctx = {
		    seen: [],
		    stylize: stylizeNoColor
		  };
		  // legacy...
		  if (arguments.length >= 3) ctx.depth = arguments[2];
		  if (arguments.length >= 4) ctx.colors = arguments[3];
		  if (isBoolean(opts)) {
		    // legacy...
		    ctx.showHidden = opts;
		  } else if (opts) {
		    // got an "options" object
		    exports._extend(ctx, opts);
		  }
		  // set default options
		  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
		  if (isUndefined(ctx.depth)) ctx.depth = 2;
		  if (isUndefined(ctx.colors)) ctx.colors = false;
		  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
		  if (ctx.colors) ctx.stylize = stylizeWithColor;
		  return formatValue(ctx, obj, ctx.depth);
		}
		exports.inspect = inspect;


		// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
		inspect.colors = {
		  'bold' : [1, 22],
		  'italic' : [3, 23],
		  'underline' : [4, 24],
		  'inverse' : [7, 27],
		  'white' : [37, 39],
		  'grey' : [90, 39],
		  'black' : [30, 39],
		  'blue' : [34, 39],
		  'cyan' : [36, 39],
		  'green' : [32, 39],
		  'magenta' : [35, 39],
		  'red' : [31, 39],
		  'yellow' : [33, 39]
		};

		// Don't use 'blue' not visible on cmd.exe
		inspect.styles = {
		  'special': 'cyan',
		  'number': 'yellow',
		  'boolean': 'yellow',
		  'undefined': 'grey',
		  'null': 'bold',
		  'string': 'green',
		  'date': 'magenta',
		  // "name": intentionally not styling
		  'regexp': 'red'
		};


		function stylizeWithColor(str, styleType) {
		  var style = inspect.styles[styleType];

		  if (style) {
		    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
		           '\u001b[' + inspect.colors[style][1] + 'm';
		  } else {
		    return str;
		  }
		}


		function stylizeNoColor(str, styleType) {
		  return str;
		}


		function arrayToHash(array) {
		  var hash = {};

		  array.forEach(function(val, idx) {
		    hash[val] = true;
		  });

		  return hash;
		}


		function formatValue(ctx, value, recurseTimes) {
		  // Provide a hook for user-specified inspect functions.
		  // Check that value is an object with an inspect function on it
		  if (ctx.customInspect &&
		      value &&
		      isFunction(value.inspect) &&
		      // Filter out the util module, it's inspect function is special
		      value.inspect !== exports.inspect &&
		      // Also filter out any prototype objects using the circular check.
		      !(value.constructor && value.constructor.prototype === value)) {
		    var ret = value.inspect(recurseTimes, ctx);
		    if (!isString(ret)) {
		      ret = formatValue(ctx, ret, recurseTimes);
		    }
		    return ret;
		  }

		  // Primitive types cannot have properties
		  var primitive = formatPrimitive(ctx, value);
		  if (primitive) {
		    return primitive;
		  }

		  // Look up the keys of the object.
		  var keys = Object.keys(value);
		  var visibleKeys = arrayToHash(keys);

		  if (ctx.showHidden) {
		    keys = Object.getOwnPropertyNames(value);
		  }

		  // IE doesn't make error fields non-enumerable
		  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
		  if (isError(value)
		      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
		    return formatError(value);
		  }

		  // Some type of object without properties can be shortcutted.
		  if (keys.length === 0) {
		    if (isFunction(value)) {
		      var name = value.name ? ': ' + value.name : '';
		      return ctx.stylize('[Function' + name + ']', 'special');
		    }
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    }
		    if (isDate(value)) {
		      return ctx.stylize(Date.prototype.toString.call(value), 'date');
		    }
		    if (isError(value)) {
		      return formatError(value);
		    }
		  }

		  var base = '', array = false, braces = ['{', '}'];

		  // Make Array say that they are Array
		  if (isArray(value)) {
		    array = true;
		    braces = ['[', ']'];
		  }

		  // Make functions say that they are functions
		  if (isFunction(value)) {
		    var n = value.name ? ': ' + value.name : '';
		    base = ' [Function' + n + ']';
		  }

		  // Make RegExps say that they are RegExps
		  if (isRegExp(value)) {
		    base = ' ' + RegExp.prototype.toString.call(value);
		  }

		  // Make dates with properties first say the date
		  if (isDate(value)) {
		    base = ' ' + Date.prototype.toUTCString.call(value);
		  }

		  // Make error with message first say the error
		  if (isError(value)) {
		    base = ' ' + formatError(value);
		  }

		  if (keys.length === 0 && (!array || value.length == 0)) {
		    return braces[0] + base + braces[1];
		  }

		  if (recurseTimes < 0) {
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    } else {
		      return ctx.stylize('[Object]', 'special');
		    }
		  }

		  ctx.seen.push(value);

		  var output;
		  if (array) {
		    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
		  } else {
		    output = keys.map(function(key) {
		      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
		    });
		  }

		  ctx.seen.pop();

		  return reduceToSingleString(output, base, braces);
		}


		function formatPrimitive(ctx, value) {
		  if (isUndefined(value))
		    return ctx.stylize('undefined', 'undefined');
		  if (isString(value)) {
		    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
		                                             .replace(/'/g, "\\'")
		                                             .replace(/\\"/g, '"') + '\'';
		    return ctx.stylize(simple, 'string');
		  }
		  if (isNumber(value))
		    return ctx.stylize('' + value, 'number');
		  if (isBoolean(value))
		    return ctx.stylize('' + value, 'boolean');
		  // For some reason typeof null is "object", so special case here.
		  if (isNull(value))
		    return ctx.stylize('null', 'null');
		}


		function formatError(value) {
		  return '[' + Error.prototype.toString.call(value) + ']';
		}


		function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
		  var output = [];
		  for (var i = 0, l = value.length; i < l; ++i) {
		    if (hasOwnProperty(value, String(i))) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          String(i), true));
		    } else {
		      output.push('');
		    }
		  }
		  keys.forEach(function(key) {
		    if (!key.match(/^\d+$/)) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          key, true));
		    }
		  });
		  return output;
		}


		function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
		  var name, str, desc;
		  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
		  if (desc.get) {
		    if (desc.set) {
		      str = ctx.stylize('[Getter/Setter]', 'special');
		    } else {
		      str = ctx.stylize('[Getter]', 'special');
		    }
		  } else {
		    if (desc.set) {
		      str = ctx.stylize('[Setter]', 'special');
		    }
		  }
		  if (!hasOwnProperty(visibleKeys, key)) {
		    name = '[' + key + ']';
		  }
		  if (!str) {
		    if (ctx.seen.indexOf(desc.value) < 0) {
		      if (isNull(recurseTimes)) {
		        str = formatValue(ctx, desc.value, null);
		      } else {
		        str = formatValue(ctx, desc.value, recurseTimes - 1);
		      }
		      if (str.indexOf('\n') > -1) {
		        if (array) {
		          str = str.split('\n').map(function(line) {
		            return '  ' + line;
		          }).join('\n').substr(2);
		        } else {
		          str = '\n' + str.split('\n').map(function(line) {
		            return '   ' + line;
		          }).join('\n');
		        }
		      }
		    } else {
		      str = ctx.stylize('[Circular]', 'special');
		    }
		  }
		  if (isUndefined(name)) {
		    if (array && key.match(/^\d+$/)) {
		      return str;
		    }
		    name = JSON.stringify('' + key);
		    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
		      name = name.substr(1, name.length - 2);
		      name = ctx.stylize(name, 'name');
		    } else {
		      name = name.replace(/'/g, "\\'")
		                 .replace(/\\"/g, '"')
		                 .replace(/(^"|"$)/g, "'");
		      name = ctx.stylize(name, 'string');
		    }
		  }

		  return name + ': ' + str;
		}


		function reduceToSingleString(output, base, braces) {
		  var numLinesEst = 0;
		  var length = output.reduce(function(prev, cur) {
		    numLinesEst++;
		    if (cur.indexOf('\n') >= 0) numLinesEst++;
		    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
		  }, 0);

		  if (length > 60) {
		    return braces[0] +
		           (base === '' ? '' : base + '\n ') +
		           ' ' +
		           output.join(',\n  ') +
		           ' ' +
		           braces[1];
		  }

		  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
		}


		// NOTE: These type checking functions intentionally don't use `instanceof`
		// because it is fragile and can be easily faked with `Object.create()`.
		function isArray(ar) {
		  return Array.isArray(ar);
		}
		exports.isArray = isArray;

		function isBoolean(arg) {
		  return typeof arg === 'boolean';
		}
		exports.isBoolean = isBoolean;

		function isNull(arg) {
		  return arg === null;
		}
		exports.isNull = isNull;

		function isNullOrUndefined(arg) {
		  return arg == null;
		}
		exports.isNullOrUndefined = isNullOrUndefined;

		function isNumber(arg) {
		  return typeof arg === 'number';
		}
		exports.isNumber = isNumber;

		function isString(arg) {
		  return typeof arg === 'string';
		}
		exports.isString = isString;

		function isSymbol(arg) {
		  return typeof arg === 'symbol';
		}
		exports.isSymbol = isSymbol;

		function isUndefined(arg) {
		  return arg === void 0;
		}
		exports.isUndefined = isUndefined;

		function isRegExp(re) {
		  return isObject(re) && objectToString(re) === '[object RegExp]';
		}
		exports.isRegExp = isRegExp;

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}
		exports.isObject = isObject;

		function isDate(d) {
		  return isObject(d) && objectToString(d) === '[object Date]';
		}
		exports.isDate = isDate;

		function isError(e) {
		  return isObject(e) &&
		      (objectToString(e) === '[object Error]' || e instanceof Error);
		}
		exports.isError = isError;

		function isFunction(arg) {
		  return typeof arg === 'function';
		}
		exports.isFunction = isFunction;

		function isPrimitive(arg) {
		  return arg === null ||
		         typeof arg === 'boolean' ||
		         typeof arg === 'number' ||
		         typeof arg === 'string' ||
		         typeof arg === 'symbol' ||  // ES6 symbol
		         typeof arg === 'undefined';
		}
		exports.isPrimitive = isPrimitive;

		exports.isBuffer = __webpack_require__(10);

		function objectToString(o) {
		  return Object.prototype.toString.call(o);
		}


		function pad(n) {
		  return n < 10 ? '0' + n.toString(10) : n.toString(10);
		}


		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
		              'Oct', 'Nov', 'Dec'];

		// 26 Feb 16:19:34
		function timestamp() {
		  var d = new Date();
		  var time = [pad(d.getHours()),
		              pad(d.getMinutes()),
		              pad(d.getSeconds())].join(':');
		  return [d.getDate(), months[d.getMonth()], time].join(' ');
		}


		// log is just a thin wrapper to console.log that prepends a timestamp
		exports.log = function() {
		  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
		};


		/**
		 * Inherit the prototype methods from one constructor into another.
		 *
		 * The Function.prototype.inherits from lang.js rewritten as a standalone
		 * function (not on Function.prototype). NOTE: If this file is to be loaded
		 * during bootstrapping this function needs to be rewritten using some native
		 * functions as prototype setup using normal JavaScript does not work as
		 * expected during bootstrapping (see mirror.js in r114903).
		 *
		 * @param {function} ctor Constructor function which needs to inherit the
		 *     prototype.
		 * @param {function} superCtor Constructor function to inherit prototype from.
		 */
		exports.inherits = __webpack_require__(11);

		exports._extend = function(origin, add) {
		  // Don't do anything if add isn't an object
		  if (!add || !isObject(add)) return origin;

		  var keys = Object.keys(add);
		  var i = keys.length;
		  while (i--) {
		    origin[keys[i]] = add[keys[i]];
		  }
		  return origin;
		};

		function hasOwnProperty(obj, prop) {
		  return Object.prototype.hasOwnProperty.call(obj, prop);
		}

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		module.exports = function isBuffer(arg) {
		  return arg && typeof arg === 'object'
		    && typeof arg.copy === 'function'
		    && typeof arg.fill === 'function'
		    && typeof arg.readUInt8 === 'function';
		}

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		if (typeof Object.create === 'function') {
		  // implementation from standard node.js 'util' module
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    ctor.prototype = Object.create(superCtor.prototype, {
		      constructor: {
		        value: ctor,
		        enumerable: false,
		        writable: true,
		        configurable: true
		      }
		    });
		  };
		} else {
		  // old school shim for old browsers
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    var TempCtor = function () {}
		    TempCtor.prototype = superCtor.prototype
		    ctor.prototype = new TempCtor()
		    ctor.prototype.constructor = ctor
		  }
		}


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		module.exports = Stream;

		var EE = __webpack_require__(8).EventEmitter;
		var inherits = __webpack_require__(13);

		inherits(Stream, EE);
		Stream.Readable = __webpack_require__(14);
		Stream.Writable = __webpack_require__(25);
		Stream.Duplex = __webpack_require__(26);
		Stream.Transform = __webpack_require__(27);
		Stream.PassThrough = __webpack_require__(28);

		// Backwards-compat with node 0.4.x
		Stream.Stream = Stream;



		// old-style streams.  Note that the pipe method (the only relevant
		// part of this class) is overridden in the Readable class.

		function Stream() {
		  EE.call(this);
		}

		Stream.prototype.pipe = function(dest, options) {
		  var source = this;

		  function ondata(chunk) {
		    if (dest.writable) {
		      if (false === dest.write(chunk) && source.pause) {
		        source.pause();
		      }
		    }
		  }

		  source.on('data', ondata);

		  function ondrain() {
		    if (source.readable && source.resume) {
		      source.resume();
		    }
		  }

		  dest.on('drain', ondrain);

		  // If the 'end' option is not supplied, dest.end() will be called when
		  // source gets the 'end' or 'close' events.  Only dest.end() once.
		  if (!dest._isStdio && (!options || options.end !== false)) {
		    source.on('end', onend);
		    source.on('close', onclose);
		  }

		  var didOnEnd = false;
		  function onend() {
		    if (didOnEnd) return;
		    didOnEnd = true;

		    dest.end();
		  }


		  function onclose() {
		    if (didOnEnd) return;
		    didOnEnd = true;

		    if (typeof dest.destroy === 'function') dest.destroy();
		  }

		  // don't leave dangling pipes when there are errors.
		  function onerror(er) {
		    cleanup();
		    if (EE.listenerCount(this, 'error') === 0) {
		      throw er; // Unhandled stream error in pipe.
		    }
		  }

		  source.on('error', onerror);
		  dest.on('error', onerror);

		  // remove all the event listeners that were added.
		  function cleanup() {
		    source.removeListener('data', ondata);
		    dest.removeListener('drain', ondrain);

		    source.removeListener('end', onend);
		    source.removeListener('close', onclose);

		    source.removeListener('error', onerror);
		    dest.removeListener('error', onerror);

		    source.removeListener('end', cleanup);
		    source.removeListener('close', cleanup);

		    dest.removeListener('close', cleanup);
		  }

		  source.on('end', cleanup);
		  source.on('close', cleanup);

		  dest.on('close', cleanup);

		  dest.emit('pipe', source);

		  // Allow for unix-like usage: A.pipe(B).pipe(C)
		  return dest;
		};


	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		if (typeof Object.create === 'function') {
		  // implementation from standard node.js 'util' module
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    ctor.prototype = Object.create(superCtor.prototype, {
		      constructor: {
		        value: ctor,
		        enumerable: false,
		        writable: true,
		        configurable: true
		      }
		    });
		  };
		} else {
		  // old school shim for old browsers
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    var TempCtor = function () {}
		    TempCtor.prototype = superCtor.prototype
		    ctor.prototype = new TempCtor()
		    ctor.prototype.constructor = ctor
		  }
		}


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(18);
		exports.Stream = __webpack_require__(12);
		exports.Readable = exports;
		exports.Writable = __webpack_require__(22);
		exports.Duplex = __webpack_require__(15);
		exports.Transform = __webpack_require__(23);
		exports.PassThrough = __webpack_require__(24);


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		// a duplex stream is just a stream that is both readable and writable.
		// Since JS doesn't have multiple prototypal inheritance, this class
		// prototypally inherits from Readable, and then parasitically from
		// Writable.

		module.exports = Duplex;

		/*<replacement>*/
		var objectKeys = Object.keys || function (obj) {
		  var keys = [];
		  for (var key in obj) keys.push(key);
		  return keys;
		}
		/*</replacement>*/


		/*<replacement>*/
		var util = __webpack_require__(16);
		util.inherits = __webpack_require__(17);
		/*</replacement>*/

		var Readable = __webpack_require__(18);
		var Writable = __webpack_require__(22);

		util.inherits(Duplex, Readable);

		forEach(objectKeys(Writable.prototype), function(method) {
		  if (!Duplex.prototype[method])
		    Duplex.prototype[method] = Writable.prototype[method];
		});

		function Duplex(options) {
		  if (!(this instanceof Duplex))
		    return new Duplex(options);

		  Readable.call(this, options);
		  Writable.call(this, options);

		  if (options && options.readable === false)
		    this.readable = false;

		  if (options && options.writable === false)
		    this.writable = false;

		  this.allowHalfOpen = true;
		  if (options && options.allowHalfOpen === false)
		    this.allowHalfOpen = false;

		  this.once('end', onend);
		}

		// the no-half-open enforcer
		function onend() {
		  // if we allow half-open state, or if the writable side ended,
		  // then we're ok.
		  if (this.allowHalfOpen || this._writableState.ended)
		    return;

		  // no more data can be written.
		  // But allow more writes to happen in this tick.
		  process.nextTick(this.end.bind(this));
		}

		function forEach (xs, f) {
		  for (var i = 0, l = xs.length; i < l; i++) {
		    f(xs[i], i);
		  }
		}

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		// NOTE: These type checking functions intentionally don't use `instanceof`
		// because it is fragile and can be easily faked with `Object.create()`.
		function isArray(ar) {
		  return Array.isArray(ar);
		}
		exports.isArray = isArray;

		function isBoolean(arg) {
		  return typeof arg === 'boolean';
		}
		exports.isBoolean = isBoolean;

		function isNull(arg) {
		  return arg === null;
		}
		exports.isNull = isNull;

		function isNullOrUndefined(arg) {
		  return arg == null;
		}
		exports.isNullOrUndefined = isNullOrUndefined;

		function isNumber(arg) {
		  return typeof arg === 'number';
		}
		exports.isNumber = isNumber;

		function isString(arg) {
		  return typeof arg === 'string';
		}
		exports.isString = isString;

		function isSymbol(arg) {
		  return typeof arg === 'symbol';
		}
		exports.isSymbol = isSymbol;

		function isUndefined(arg) {
		  return arg === void 0;
		}
		exports.isUndefined = isUndefined;

		function isRegExp(re) {
		  return isObject(re) && objectToString(re) === '[object RegExp]';
		}
		exports.isRegExp = isRegExp;

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}
		exports.isObject = isObject;

		function isDate(d) {
		  return isObject(d) && objectToString(d) === '[object Date]';
		}
		exports.isDate = isDate;

		function isError(e) {
		  return isObject(e) &&
		      (objectToString(e) === '[object Error]' || e instanceof Error);
		}
		exports.isError = isError;

		function isFunction(arg) {
		  return typeof arg === 'function';
		}
		exports.isFunction = isFunction;

		function isPrimitive(arg) {
		  return arg === null ||
		         typeof arg === 'boolean' ||
		         typeof arg === 'number' ||
		         typeof arg === 'string' ||
		         typeof arg === 'symbol' ||  // ES6 symbol
		         typeof arg === 'undefined';
		}
		exports.isPrimitive = isPrimitive;

		function isBuffer(arg) {
		  return Buffer.isBuffer(arg);
		}
		exports.isBuffer = isBuffer;

		function objectToString(o) {
		  return Object.prototype.toString.call(o);
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		if (typeof Object.create === 'function') {
		  // implementation from standard node.js 'util' module
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    ctor.prototype = Object.create(superCtor.prototype, {
		      constructor: {
		        value: ctor,
		        enumerable: false,
		        writable: true,
		        configurable: true
		      }
		    });
		  };
		} else {
		  // old school shim for old browsers
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    var TempCtor = function () {}
		    TempCtor.prototype = superCtor.prototype
		    ctor.prototype = new TempCtor()
		    ctor.prototype.constructor = ctor
		  }
		}


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		module.exports = Readable;

		/*<replacement>*/
		var isArray = __webpack_require__(19);
		/*</replacement>*/


		/*<replacement>*/
		var Buffer = __webpack_require__(4).Buffer;
		/*</replacement>*/

		Readable.ReadableState = ReadableState;

		var EE = __webpack_require__(8).EventEmitter;

		/*<replacement>*/
		if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
		  return emitter.listeners(type).length;
		};
		/*</replacement>*/

		var Stream = __webpack_require__(12);

		/*<replacement>*/
		var util = __webpack_require__(16);
		util.inherits = __webpack_require__(17);
		/*</replacement>*/

		var StringDecoder;


		/*<replacement>*/
		var debug = __webpack_require__(20);
		if (debug && debug.debuglog) {
		  debug = debug.debuglog('stream');
		} else {
		  debug = function () {};
		}
		/*</replacement>*/


		util.inherits(Readable, Stream);

		function ReadableState(options, stream) {
		  var Duplex = __webpack_require__(15);

		  options = options || {};

		  // the point at which it stops calling _read() to fill the buffer
		  // Note: 0 is a valid value, means "don't call _read preemptively ever"
		  var hwm = options.highWaterMark;
		  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
		  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

		  // cast to ints.
		  this.highWaterMark = ~~this.highWaterMark;

		  this.buffer = [];
		  this.length = 0;
		  this.pipes = null;
		  this.pipesCount = 0;
		  this.flowing = null;
		  this.ended = false;
		  this.endEmitted = false;
		  this.reading = false;

		  // a flag to be able to tell if the onwrite cb is called immediately,
		  // or on a later tick.  We set this to true at first, because any
		  // actions that shouldn't happen until "later" should generally also
		  // not happen before the first write call.
		  this.sync = true;

		  // whenever we return null, then we set a flag to say
		  // that we're awaiting a 'readable' event emission.
		  this.needReadable = false;
		  this.emittedReadable = false;
		  this.readableListening = false;


		  // object stream flag. Used to make read(n) ignore n and to
		  // make all the buffer merging and length checks go away
		  this.objectMode = !!options.objectMode;

		  if (stream instanceof Duplex)
		    this.objectMode = this.objectMode || !!options.readableObjectMode;

		  // Crypto is kind of old and crusty.  Historically, its default string
		  // encoding is 'binary' so we have to make this configurable.
		  // Everything else in the universe uses 'utf8', though.
		  this.defaultEncoding = options.defaultEncoding || 'utf8';

		  // when piping, we only care about 'readable' events that happen
		  // after read()ing all the bytes and not getting any pushback.
		  this.ranOut = false;

		  // the number of writers that are awaiting a drain event in .pipe()s
		  this.awaitDrain = 0;

		  // if true, a maybeReadMore has been scheduled
		  this.readingMore = false;

		  this.decoder = null;
		  this.encoding = null;
		  if (options.encoding) {
		    if (!StringDecoder)
		      StringDecoder = __webpack_require__(21).StringDecoder;
		    this.decoder = new StringDecoder(options.encoding);
		    this.encoding = options.encoding;
		  }
		}

		function Readable(options) {
		  var Duplex = __webpack_require__(15);

		  if (!(this instanceof Readable))
		    return new Readable(options);

		  this._readableState = new ReadableState(options, this);

		  // legacy
		  this.readable = true;

		  Stream.call(this);
		}

		// Manually shove something into the read() buffer.
		// This returns true if the highWaterMark has not been hit yet,
		// similar to how Writable.write() returns true if you should
		// write() some more.
		Readable.prototype.push = function(chunk, encoding) {
		  var state = this._readableState;

		  if (util.isString(chunk) && !state.objectMode) {
		    encoding = encoding || state.defaultEncoding;
		    if (encoding !== state.encoding) {
		      chunk = new Buffer(chunk, encoding);
		      encoding = '';
		    }
		  }

		  return readableAddChunk(this, state, chunk, encoding, false);
		};

		// Unshift should *always* be something directly out of read()
		Readable.prototype.unshift = function(chunk) {
		  var state = this._readableState;
		  return readableAddChunk(this, state, chunk, '', true);
		};

		function readableAddChunk(stream, state, chunk, encoding, addToFront) {
		  var er = chunkInvalid(state, chunk);
		  if (er) {
		    stream.emit('error', er);
		  } else if (util.isNullOrUndefined(chunk)) {
		    state.reading = false;
		    if (!state.ended)
		      onEofChunk(stream, state);
		  } else if (state.objectMode || chunk && chunk.length > 0) {
		    if (state.ended && !addToFront) {
		      var e = new Error('stream.push() after EOF');
		      stream.emit('error', e);
		    } else if (state.endEmitted && addToFront) {
		      var e = new Error('stream.unshift() after end event');
		      stream.emit('error', e);
		    } else {
		      if (state.decoder && !addToFront && !encoding)
		        chunk = state.decoder.write(chunk);

		      if (!addToFront)
		        state.reading = false;

		      // if we want the data now, just emit it.
		      if (state.flowing && state.length === 0 && !state.sync) {
		        stream.emit('data', chunk);
		        stream.read(0);
		      } else {
		        // update the buffer info.
		        state.length += state.objectMode ? 1 : chunk.length;
		        if (addToFront)
		          state.buffer.unshift(chunk);
		        else
		          state.buffer.push(chunk);

		        if (state.needReadable)
		          emitReadable(stream);
		      }

		      maybeReadMore(stream, state);
		    }
		  } else if (!addToFront) {
		    state.reading = false;
		  }

		  return needMoreData(state);
		}



		// if it's past the high water mark, we can push in some more.
		// Also, if we have no data yet, we can stand some
		// more bytes.  This is to work around cases where hwm=0,
		// such as the repl.  Also, if the push() triggered a
		// readable event, and the user called read(largeNumber) such that
		// needReadable was set, then we ought to push more, so that another
		// 'readable' event will be triggered.
		function needMoreData(state) {
		  return !state.ended &&
		         (state.needReadable ||
		          state.length < state.highWaterMark ||
		          state.length === 0);
		}

		// backwards compatibility.
		Readable.prototype.setEncoding = function(enc) {
		  if (!StringDecoder)
		    StringDecoder = __webpack_require__(21).StringDecoder;
		  this._readableState.decoder = new StringDecoder(enc);
		  this._readableState.encoding = enc;
		  return this;
		};

		// Don't raise the hwm > 128MB
		var MAX_HWM = 0x800000;
		function roundUpToNextPowerOf2(n) {
		  if (n >= MAX_HWM) {
		    n = MAX_HWM;
		  } else {
		    // Get the next highest power of 2
		    n--;
		    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
		    n++;
		  }
		  return n;
		}

		function howMuchToRead(n, state) {
		  if (state.length === 0 && state.ended)
		    return 0;

		  if (state.objectMode)
		    return n === 0 ? 0 : 1;

		  if (isNaN(n) || util.isNull(n)) {
		    // only flow one buffer at a time
		    if (state.flowing && state.buffer.length)
		      return state.buffer[0].length;
		    else
		      return state.length;
		  }

		  if (n <= 0)
		    return 0;

		  // If we're asking for more than the target buffer level,
		  // then raise the water mark.  Bump up to the next highest
		  // power of 2, to prevent increasing it excessively in tiny
		  // amounts.
		  if (n > state.highWaterMark)
		    state.highWaterMark = roundUpToNextPowerOf2(n);

		  // don't have that much.  return null, unless we've ended.
		  if (n > state.length) {
		    if (!state.ended) {
		      state.needReadable = true;
		      return 0;
		    } else
		      return state.length;
		  }

		  return n;
		}

		// you can override either this method, or the async _read(n) below.
		Readable.prototype.read = function(n) {
		  debug('read', n);
		  var state = this._readableState;
		  var nOrig = n;

		  if (!util.isNumber(n) || n > 0)
		    state.emittedReadable = false;

		  // if we're doing read(0) to trigger a readable event, but we
		  // already have a bunch of data in the buffer, then just trigger
		  // the 'readable' event and move on.
		  if (n === 0 &&
		      state.needReadable &&
		      (state.length >= state.highWaterMark || state.ended)) {
		    debug('read: emitReadable', state.length, state.ended);
		    if (state.length === 0 && state.ended)
		      endReadable(this);
		    else
		      emitReadable(this);
		    return null;
		  }

		  n = howMuchToRead(n, state);

		  // if we've ended, and we're now clear, then finish it up.
		  if (n === 0 && state.ended) {
		    if (state.length === 0)
		      endReadable(this);
		    return null;
		  }

		  // All the actual chunk generation logic needs to be
		  // *below* the call to _read.  The reason is that in certain
		  // synthetic stream cases, such as passthrough streams, _read
		  // may be a completely synchronous operation which may change
		  // the state of the read buffer, providing enough data when
		  // before there was *not* enough.
		  //
		  // So, the steps are:
		  // 1. Figure out what the state of things will be after we do
		  // a read from the buffer.
		  //
		  // 2. If that resulting state will trigger a _read, then call _read.
		  // Note that this may be asynchronous, or synchronous.  Yes, it is
		  // deeply ugly to write APIs this way, but that still doesn't mean
		  // that the Readable class should behave improperly, as streams are
		  // designed to be sync/async agnostic.
		  // Take note if the _read call is sync or async (ie, if the read call
		  // has returned yet), so that we know whether or not it's safe to emit
		  // 'readable' etc.
		  //
		  // 3. Actually pull the requested chunks out of the buffer and return.

		  // if we need a readable event, then we need to do some reading.
		  var doRead = state.needReadable;
		  debug('need readable', doRead);

		  // if we currently have less than the highWaterMark, then also read some
		  if (state.length === 0 || state.length - n < state.highWaterMark) {
		    doRead = true;
		    debug('length less than watermark', doRead);
		  }

		  // however, if we've ended, then there's no point, and if we're already
		  // reading, then it's unnecessary.
		  if (state.ended || state.reading) {
		    doRead = false;
		    debug('reading or ended', doRead);
		  }

		  if (doRead) {
		    debug('do read');
		    state.reading = true;
		    state.sync = true;
		    // if the length is currently zero, then we *need* a readable event.
		    if (state.length === 0)
		      state.needReadable = true;
		    // call internal read method
		    this._read(state.highWaterMark);
		    state.sync = false;
		  }

		  // If _read pushed data synchronously, then `reading` will be false,
		  // and we need to re-evaluate how much data we can return to the user.
		  if (doRead && !state.reading)
		    n = howMuchToRead(nOrig, state);

		  var ret;
		  if (n > 0)
		    ret = fromList(n, state);
		  else
		    ret = null;

		  if (util.isNull(ret)) {
		    state.needReadable = true;
		    n = 0;
		  }

		  state.length -= n;

		  // If we have nothing in the buffer, then we want to know
		  // as soon as we *do* get something into the buffer.
		  if (state.length === 0 && !state.ended)
		    state.needReadable = true;

		  // If we tried to read() past the EOF, then emit end on the next tick.
		  if (nOrig !== n && state.ended && state.length === 0)
		    endReadable(this);

		  if (!util.isNull(ret))
		    this.emit('data', ret);

		  return ret;
		};

		function chunkInvalid(state, chunk) {
		  var er = null;
		  if (!util.isBuffer(chunk) &&
		      !util.isString(chunk) &&
		      !util.isNullOrUndefined(chunk) &&
		      !state.objectMode) {
		    er = new TypeError('Invalid non-string/buffer chunk');
		  }
		  return er;
		}


		function onEofChunk(stream, state) {
		  if (state.decoder && !state.ended) {
		    var chunk = state.decoder.end();
		    if (chunk && chunk.length) {
		      state.buffer.push(chunk);
		      state.length += state.objectMode ? 1 : chunk.length;
		    }
		  }
		  state.ended = true;

		  // emit 'readable' now to make sure it gets picked up.
		  emitReadable(stream);
		}

		// Don't emit readable right away in sync mode, because this can trigger
		// another read() call => stack overflow.  This way, it might trigger
		// a nextTick recursion warning, but that's not so bad.
		function emitReadable(stream) {
		  var state = stream._readableState;
		  state.needReadable = false;
		  if (!state.emittedReadable) {
		    debug('emitReadable', state.flowing);
		    state.emittedReadable = true;
		    if (state.sync)
		      process.nextTick(function() {
		        emitReadable_(stream);
		      });
		    else
		      emitReadable_(stream);
		  }
		}

		function emitReadable_(stream) {
		  debug('emit readable');
		  stream.emit('readable');
		  flow(stream);
		}


		// at this point, the user has presumably seen the 'readable' event,
		// and called read() to consume some data.  that may have triggered
		// in turn another _read(n) call, in which case reading = true if
		// it's in progress.
		// However, if we're not ended, or reading, and the length < hwm,
		// then go ahead and try to read some more preemptively.
		function maybeReadMore(stream, state) {
		  if (!state.readingMore) {
		    state.readingMore = true;
		    process.nextTick(function() {
		      maybeReadMore_(stream, state);
		    });
		  }
		}

		function maybeReadMore_(stream, state) {
		  var len = state.length;
		  while (!state.reading && !state.flowing && !state.ended &&
		         state.length < state.highWaterMark) {
		    debug('maybeReadMore read 0');
		    stream.read(0);
		    if (len === state.length)
		      // didn't get any data, stop spinning.
		      break;
		    else
		      len = state.length;
		  }
		  state.readingMore = false;
		}

		// abstract method.  to be overridden in specific implementation classes.
		// call cb(er, data) where data is <= n in length.
		// for virtual (non-string, non-buffer) streams, "length" is somewhat
		// arbitrary, and perhaps not very meaningful.
		Readable.prototype._read = function(n) {
		  this.emit('error', new Error('not implemented'));
		};

		Readable.prototype.pipe = function(dest, pipeOpts) {
		  var src = this;
		  var state = this._readableState;

		  switch (state.pipesCount) {
		    case 0:
		      state.pipes = dest;
		      break;
		    case 1:
		      state.pipes = [state.pipes, dest];
		      break;
		    default:
		      state.pipes.push(dest);
		      break;
		  }
		  state.pipesCount += 1;
		  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

		  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
		              dest !== process.stdout &&
		              dest !== process.stderr;

		  var endFn = doEnd ? onend : cleanup;
		  if (state.endEmitted)
		    process.nextTick(endFn);
		  else
		    src.once('end', endFn);

		  dest.on('unpipe', onunpipe);
		  function onunpipe(readable) {
		    debug('onunpipe');
		    if (readable === src) {
		      cleanup();
		    }
		  }

		  function onend() {
		    debug('onend');
		    dest.end();
		  }

		  // when the dest drains, it reduces the awaitDrain counter
		  // on the source.  This would be more elegant with a .once()
		  // handler in flow(), but adding and removing repeatedly is
		  // too slow.
		  var ondrain = pipeOnDrain(src);
		  dest.on('drain', ondrain);

		  function cleanup() {
		    debug('cleanup');
		    // cleanup event handlers once the pipe is broken
		    dest.removeListener('close', onclose);
		    dest.removeListener('finish', onfinish);
		    dest.removeListener('drain', ondrain);
		    dest.removeListener('error', onerror);
		    dest.removeListener('unpipe', onunpipe);
		    src.removeListener('end', onend);
		    src.removeListener('end', cleanup);
		    src.removeListener('data', ondata);

		    // if the reader is waiting for a drain event from this
		    // specific writer, then it would cause it to never start
		    // flowing again.
		    // So, if this is awaiting a drain, then we just call it now.
		    // If we don't know, then assume that we are waiting for one.
		    if (state.awaitDrain &&
		        (!dest._writableState || dest._writableState.needDrain))
		      ondrain();
		  }

		  src.on('data', ondata);
		  function ondata(chunk) {
		    debug('ondata');
		    var ret = dest.write(chunk);
		    if (false === ret) {
		      debug('false write response, pause',
		            src._readableState.awaitDrain);
		      src._readableState.awaitDrain++;
		      src.pause();
		    }
		  }

		  // if the dest has an error, then stop piping into it.
		  // however, don't suppress the throwing behavior for this.
		  function onerror(er) {
		    debug('onerror', er);
		    unpipe();
		    dest.removeListener('error', onerror);
		    if (EE.listenerCount(dest, 'error') === 0)
		      dest.emit('error', er);
		  }
		  // This is a brutally ugly hack to make sure that our error handler
		  // is attached before any userland ones.  NEVER DO THIS.
		  if (!dest._events || !dest._events.error)
		    dest.on('error', onerror);
		  else if (isArray(dest._events.error))
		    dest._events.error.unshift(onerror);
		  else
		    dest._events.error = [onerror, dest._events.error];



		  // Both close and finish should trigger unpipe, but only once.
		  function onclose() {
		    dest.removeListener('finish', onfinish);
		    unpipe();
		  }
		  dest.once('close', onclose);
		  function onfinish() {
		    debug('onfinish');
		    dest.removeListener('close', onclose);
		    unpipe();
		  }
		  dest.once('finish', onfinish);

		  function unpipe() {
		    debug('unpipe');
		    src.unpipe(dest);
		  }

		  // tell the dest that it's being piped to
		  dest.emit('pipe', src);

		  // start the flow if it hasn't been started already.
		  if (!state.flowing) {
		    debug('pipe resume');
		    src.resume();
		  }

		  return dest;
		};

		function pipeOnDrain(src) {
		  return function() {
		    var state = src._readableState;
		    debug('pipeOnDrain', state.awaitDrain);
		    if (state.awaitDrain)
		      state.awaitDrain--;
		    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
		      state.flowing = true;
		      flow(src);
		    }
		  };
		}


		Readable.prototype.unpipe = function(dest) {
		  var state = this._readableState;

		  // if we're not piping anywhere, then do nothing.
		  if (state.pipesCount === 0)
		    return this;

		  // just one destination.  most common case.
		  if (state.pipesCount === 1) {
		    // passed in one, but it's not the right one.
		    if (dest && dest !== state.pipes)
		      return this;

		    if (!dest)
		      dest = state.pipes;

		    // got a match.
		    state.pipes = null;
		    state.pipesCount = 0;
		    state.flowing = false;
		    if (dest)
		      dest.emit('unpipe', this);
		    return this;
		  }

		  // slow case. multiple pipe destinations.

		  if (!dest) {
		    // remove all.
		    var dests = state.pipes;
		    var len = state.pipesCount;
		    state.pipes = null;
		    state.pipesCount = 0;
		    state.flowing = false;

		    for (var i = 0; i < len; i++)
		      dests[i].emit('unpipe', this);
		    return this;
		  }

		  // try to find the right one.
		  var i = indexOf(state.pipes, dest);
		  if (i === -1)
		    return this;

		  state.pipes.splice(i, 1);
		  state.pipesCount -= 1;
		  if (state.pipesCount === 1)
		    state.pipes = state.pipes[0];

		  dest.emit('unpipe', this);

		  return this;
		};

		// set up data events if they are asked for
		// Ensure readable listeners eventually get something
		Readable.prototype.on = function(ev, fn) {
		  var res = Stream.prototype.on.call(this, ev, fn);

		  // If listening to data, and it has not explicitly been paused,
		  // then call resume to start the flow of data on the next tick.
		  if (ev === 'data' && false !== this._readableState.flowing) {
		    this.resume();
		  }

		  if (ev === 'readable' && this.readable) {
		    var state = this._readableState;
		    if (!state.readableListening) {
		      state.readableListening = true;
		      state.emittedReadable = false;
		      state.needReadable = true;
		      if (!state.reading) {
		        var self = this;
		        process.nextTick(function() {
		          debug('readable nexttick read 0');
		          self.read(0);
		        });
		      } else if (state.length) {
		        emitReadable(this, state);
		      }
		    }
		  }

		  return res;
		};
		Readable.prototype.addListener = Readable.prototype.on;

		// pause() and resume() are remnants of the legacy readable stream API
		// If the user uses them, then switch into old mode.
		Readable.prototype.resume = function() {
		  var state = this._readableState;
		  if (!state.flowing) {
		    debug('resume');
		    state.flowing = true;
		    if (!state.reading) {
		      debug('resume read 0');
		      this.read(0);
		    }
		    resume(this, state);
		  }
		  return this;
		};

		function resume(stream, state) {
		  if (!state.resumeScheduled) {
		    state.resumeScheduled = true;
		    process.nextTick(function() {
		      resume_(stream, state);
		    });
		  }
		}

		function resume_(stream, state) {
		  state.resumeScheduled = false;
		  stream.emit('resume');
		  flow(stream);
		  if (state.flowing && !state.reading)
		    stream.read(0);
		}

		Readable.prototype.pause = function() {
		  debug('call pause flowing=%j', this._readableState.flowing);
		  if (false !== this._readableState.flowing) {
		    debug('pause');
		    this._readableState.flowing = false;
		    this.emit('pause');
		  }
		  return this;
		};

		function flow(stream) {
		  var state = stream._readableState;
		  debug('flow', state.flowing);
		  if (state.flowing) {
		    do {
		      var chunk = stream.read();
		    } while (null !== chunk && state.flowing);
		  }
		}

		// wrap an old-style stream as the async data source.
		// This is *not* part of the readable stream interface.
		// It is an ugly unfortunate mess of history.
		Readable.prototype.wrap = function(stream) {
		  var state = this._readableState;
		  var paused = false;

		  var self = this;
		  stream.on('end', function() {
		    debug('wrapped end');
		    if (state.decoder && !state.ended) {
		      var chunk = state.decoder.end();
		      if (chunk && chunk.length)
		        self.push(chunk);
		    }

		    self.push(null);
		  });

		  stream.on('data', function(chunk) {
		    debug('wrapped data');
		    if (state.decoder)
		      chunk = state.decoder.write(chunk);
		    if (!chunk || !state.objectMode && !chunk.length)
		      return;

		    var ret = self.push(chunk);
		    if (!ret) {
		      paused = true;
		      stream.pause();
		    }
		  });

		  // proxy all the other methods.
		  // important when wrapping filters and duplexes.
		  for (var i in stream) {
		    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
		      this[i] = function(method) { return function() {
		        return stream[method].apply(stream, arguments);
		      }}(i);
		    }
		  }

		  // proxy certain important events.
		  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
		  forEach(events, function(ev) {
		    stream.on(ev, self.emit.bind(self, ev));
		  });

		  // when we try to consume some more bytes, simply unpause the
		  // underlying stream.
		  self._read = function(n) {
		    debug('wrapped _read', n);
		    if (paused) {
		      paused = false;
		      stream.resume();
		    }
		  };

		  return self;
		};



		// exposed for testing purposes only.
		Readable._fromList = fromList;

		// Pluck off n bytes from an array of buffers.
		// Length is the combined lengths of all the buffers in the list.
		function fromList(n, state) {
		  var list = state.buffer;
		  var length = state.length;
		  var stringMode = !!state.decoder;
		  var objectMode = !!state.objectMode;
		  var ret;

		  // nothing in the list, definitely empty.
		  if (list.length === 0)
		    return null;

		  if (length === 0)
		    ret = null;
		  else if (objectMode)
		    ret = list.shift();
		  else if (!n || n >= length) {
		    // read it all, truncate the array.
		    if (stringMode)
		      ret = list.join('');
		    else
		      ret = Buffer.concat(list, length);
		    list.length = 0;
		  } else {
		    // read just some of it.
		    if (n < list[0].length) {
		      // just take a part of the first list item.
		      // slice is the same for buffers and strings.
		      var buf = list[0];
		      ret = buf.slice(0, n);
		      list[0] = buf.slice(n);
		    } else if (n === list[0].length) {
		      // first list is a perfect match
		      ret = list.shift();
		    } else {
		      // complex case.
		      // we have enough to cover it, but it spans past the first buffer.
		      if (stringMode)
		        ret = '';
		      else
		        ret = new Buffer(n);

		      var c = 0;
		      for (var i = 0, l = list.length; i < l && c < n; i++) {
		        var buf = list[0];
		        var cpy = Math.min(n - c, buf.length);

		        if (stringMode)
		          ret += buf.slice(0, cpy);
		        else
		          buf.copy(ret, c, 0, cpy);

		        if (cpy < buf.length)
		          list[0] = buf.slice(cpy);
		        else
		          list.shift();

		        c += cpy;
		      }
		    }
		  }

		  return ret;
		}

		function endReadable(stream) {
		  var state = stream._readableState;

		  // If we get here before consuming all the bytes, then that is a
		  // bug in node.  Should never happen.
		  if (state.length > 0)
		    throw new Error('endReadable called on non-empty stream');

		  if (!state.endEmitted) {
		    state.ended = true;
		    process.nextTick(function() {
		      // Check that we didn't get one last unshift.
		      if (!state.endEmitted && state.length === 0) {
		        state.endEmitted = true;
		        stream.readable = false;
		        stream.emit('end');
		      }
		    });
		  }
		}

		function forEach (xs, f) {
		  for (var i = 0, l = xs.length; i < l; i++) {
		    f(xs[i], i);
		  }
		}

		function indexOf (xs, x) {
		  for (var i = 0, l = xs.length; i < l; i++) {
		    if (xs[i] === x) return i;
		  }
		  return -1;
		}

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

	/***/ },
	/* 19 */
	/***/ function(module, exports) {

		module.exports = Array.isArray || function (arr) {
		  return Object.prototype.toString.call(arr) == '[object Array]';
		};


	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		/* (ignored) */

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		var Buffer = __webpack_require__(4).Buffer;

		var isBufferEncoding = Buffer.isEncoding
		  || function(encoding) {
		       switch (encoding && encoding.toLowerCase()) {
		         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
		         default: return false;
		       }
		     }


		function assertEncoding(encoding) {
		  if (encoding && !isBufferEncoding(encoding)) {
		    throw new Error('Unknown encoding: ' + encoding);
		  }
		}

		// StringDecoder provides an interface for efficiently splitting a series of
		// buffers into a series of JS strings without breaking apart multi-byte
		// characters. CESU-8 is handled as part of the UTF-8 encoding.
		//
		// @TODO Handling all encodings inside a single object makes it very difficult
		// to reason about this code, so it should be split up in the future.
		// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
		// points as used by CESU-8.
		var StringDecoder = exports.StringDecoder = function(encoding) {
		  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
		  assertEncoding(encoding);
		  switch (this.encoding) {
		    case 'utf8':
		      // CESU-8 represents each of Surrogate Pair by 3-bytes
		      this.surrogateSize = 3;
		      break;
		    case 'ucs2':
		    case 'utf16le':
		      // UTF-16 represents each of Surrogate Pair by 2-bytes
		      this.surrogateSize = 2;
		      this.detectIncompleteChar = utf16DetectIncompleteChar;
		      break;
		    case 'base64':
		      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
		      this.surrogateSize = 3;
		      this.detectIncompleteChar = base64DetectIncompleteChar;
		      break;
		    default:
		      this.write = passThroughWrite;
		      return;
		  }

		  // Enough space to store all bytes of a single character. UTF-8 needs 4
		  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
		  this.charBuffer = new Buffer(6);
		  // Number of bytes received for the current incomplete multi-byte character.
		  this.charReceived = 0;
		  // Number of bytes expected for the current incomplete multi-byte character.
		  this.charLength = 0;
		};


		// write decodes the given buffer and returns it as JS string that is
		// guaranteed to not contain any partial multi-byte characters. Any partial
		// character found at the end of the buffer is buffered up, and will be
		// returned when calling write again with the remaining bytes.
		//
		// Note: Converting a Buffer containing an orphan surrogate to a String
		// currently works, but converting a String to a Buffer (via `new Buffer`, or
		// Buffer#write) will replace incomplete surrogates with the unicode
		// replacement character. See https://codereview.chromium.org/121173009/ .
		StringDecoder.prototype.write = function(buffer) {
		  var charStr = '';
		  // if our last write ended with an incomplete multibyte character
		  while (this.charLength) {
		    // determine how many remaining bytes this buffer has to offer for this char
		    var available = (buffer.length >= this.charLength - this.charReceived) ?
		        this.charLength - this.charReceived :
		        buffer.length;

		    // add the new bytes to the char buffer
		    buffer.copy(this.charBuffer, this.charReceived, 0, available);
		    this.charReceived += available;

		    if (this.charReceived < this.charLength) {
		      // still not enough chars in this buffer? wait for more ...
		      return '';
		    }

		    // remove bytes belonging to the current character from the buffer
		    buffer = buffer.slice(available, buffer.length);

		    // get the character that was split
		    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

		    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
		    var charCode = charStr.charCodeAt(charStr.length - 1);
		    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
		      this.charLength += this.surrogateSize;
		      charStr = '';
		      continue;
		    }
		    this.charReceived = this.charLength = 0;

		    // if there are no more bytes in this buffer, just emit our char
		    if (buffer.length === 0) {
		      return charStr;
		    }
		    break;
		  }

		  // determine and set charLength / charReceived
		  this.detectIncompleteChar(buffer);

		  var end = buffer.length;
		  if (this.charLength) {
		    // buffer the incomplete character bytes we got
		    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
		    end -= this.charReceived;
		  }

		  charStr += buffer.toString(this.encoding, 0, end);

		  var end = charStr.length - 1;
		  var charCode = charStr.charCodeAt(end);
		  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
		  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
		    var size = this.surrogateSize;
		    this.charLength += size;
		    this.charReceived += size;
		    this.charBuffer.copy(this.charBuffer, size, 0, size);
		    buffer.copy(this.charBuffer, 0, 0, size);
		    return charStr.substring(0, end);
		  }

		  // or just emit the charStr
		  return charStr;
		};

		// detectIncompleteChar determines if there is an incomplete UTF-8 character at
		// the end of the given buffer. If so, it sets this.charLength to the byte
		// length that character, and sets this.charReceived to the number of bytes
		// that are available for this character.
		StringDecoder.prototype.detectIncompleteChar = function(buffer) {
		  // determine how many bytes we have to check at the end of this buffer
		  var i = (buffer.length >= 3) ? 3 : buffer.length;

		  // Figure out if one of the last i bytes of our buffer announces an
		  // incomplete char.
		  for (; i > 0; i--) {
		    var c = buffer[buffer.length - i];

		    // See http://en.wikipedia.org/wiki/UTF-8#Description

		    // 110XXXXX
		    if (i == 1 && c >> 5 == 0x06) {
		      this.charLength = 2;
		      break;
		    }

		    // 1110XXXX
		    if (i <= 2 && c >> 4 == 0x0E) {
		      this.charLength = 3;
		      break;
		    }

		    // 11110XXX
		    if (i <= 3 && c >> 3 == 0x1E) {
		      this.charLength = 4;
		      break;
		    }
		  }
		  this.charReceived = i;
		};

		StringDecoder.prototype.end = function(buffer) {
		  var res = '';
		  if (buffer && buffer.length)
		    res = this.write(buffer);

		  if (this.charReceived) {
		    var cr = this.charReceived;
		    var buf = this.charBuffer;
		    var enc = this.encoding;
		    res += buf.slice(0, cr).toString(enc);
		  }

		  return res;
		};

		function passThroughWrite(buffer) {
		  return buffer.toString(this.encoding);
		}

		function utf16DetectIncompleteChar(buffer) {
		  this.charReceived = buffer.length % 2;
		  this.charLength = this.charReceived ? 2 : 0;
		}

		function base64DetectIncompleteChar(buffer) {
		  this.charReceived = buffer.length % 3;
		  this.charLength = this.charReceived ? 3 : 0;
		}


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		// A bit simpler than readable streams.
		// Implement an async ._write(chunk, cb), and it'll handle all
		// the drain event emission and buffering.

		module.exports = Writable;

		/*<replacement>*/
		var Buffer = __webpack_require__(4).Buffer;
		/*</replacement>*/

		Writable.WritableState = WritableState;


		/*<replacement>*/
		var util = __webpack_require__(16);
		util.inherits = __webpack_require__(17);
		/*</replacement>*/

		var Stream = __webpack_require__(12);

		util.inherits(Writable, Stream);

		function WriteReq(chunk, encoding, cb) {
		  this.chunk = chunk;
		  this.encoding = encoding;
		  this.callback = cb;
		}

		function WritableState(options, stream) {
		  var Duplex = __webpack_require__(15);

		  options = options || {};

		  // the point at which write() starts returning false
		  // Note: 0 is a valid value, means that we always return false if
		  // the entire buffer is not flushed immediately on write()
		  var hwm = options.highWaterMark;
		  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
		  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

		  // object stream flag to indicate whether or not this stream
		  // contains buffers or objects.
		  this.objectMode = !!options.objectMode;

		  if (stream instanceof Duplex)
		    this.objectMode = this.objectMode || !!options.writableObjectMode;

		  // cast to ints.
		  this.highWaterMark = ~~this.highWaterMark;

		  this.needDrain = false;
		  // at the start of calling end()
		  this.ending = false;
		  // when end() has been called, and returned
		  this.ended = false;
		  // when 'finish' is emitted
		  this.finished = false;

		  // should we decode strings into buffers before passing to _write?
		  // this is here so that some node-core streams can optimize string
		  // handling at a lower level.
		  var noDecode = options.decodeStrings === false;
		  this.decodeStrings = !noDecode;

		  // Crypto is kind of old and crusty.  Historically, its default string
		  // encoding is 'binary' so we have to make this configurable.
		  // Everything else in the universe uses 'utf8', though.
		  this.defaultEncoding = options.defaultEncoding || 'utf8';

		  // not an actual buffer we keep track of, but a measurement
		  // of how much we're waiting to get pushed to some underlying
		  // socket or file.
		  this.length = 0;

		  // a flag to see when we're in the middle of a write.
		  this.writing = false;

		  // when true all writes will be buffered until .uncork() call
		  this.corked = 0;

		  // a flag to be able to tell if the onwrite cb is called immediately,
		  // or on a later tick.  We set this to true at first, because any
		  // actions that shouldn't happen until "later" should generally also
		  // not happen before the first write call.
		  this.sync = true;

		  // a flag to know if we're processing previously buffered items, which
		  // may call the _write() callback in the same tick, so that we don't
		  // end up in an overlapped onwrite situation.
		  this.bufferProcessing = false;

		  // the callback that's passed to _write(chunk,cb)
		  this.onwrite = function(er) {
		    onwrite(stream, er);
		  };

		  // the callback that the user supplies to write(chunk,encoding,cb)
		  this.writecb = null;

		  // the amount that is being written when _write is called.
		  this.writelen = 0;

		  this.buffer = [];

		  // number of pending user-supplied write callbacks
		  // this must be 0 before 'finish' can be emitted
		  this.pendingcb = 0;

		  // emit prefinish if the only thing we're waiting for is _write cbs
		  // This is relevant for synchronous Transform streams
		  this.prefinished = false;

		  // True if the error was already emitted and should not be thrown again
		  this.errorEmitted = false;
		}

		function Writable(options) {
		  var Duplex = __webpack_require__(15);

		  // Writable ctor is applied to Duplexes, though they're not
		  // instanceof Writable, they're instanceof Readable.
		  if (!(this instanceof Writable) && !(this instanceof Duplex))
		    return new Writable(options);

		  this._writableState = new WritableState(options, this);

		  // legacy.
		  this.writable = true;

		  Stream.call(this);
		}

		// Otherwise people can pipe Writable streams, which is just wrong.
		Writable.prototype.pipe = function() {
		  this.emit('error', new Error('Cannot pipe. Not readable.'));
		};


		function writeAfterEnd(stream, state, cb) {
		  var er = new Error('write after end');
		  // TODO: defer error events consistently everywhere, not just the cb
		  stream.emit('error', er);
		  process.nextTick(function() {
		    cb(er);
		  });
		}

		// If we get something that is not a buffer, string, null, or undefined,
		// and we're not in objectMode, then that's an error.
		// Otherwise stream chunks are all considered to be of length=1, and the
		// watermarks determine how many objects to keep in the buffer, rather than
		// how many bytes or characters.
		function validChunk(stream, state, chunk, cb) {
		  var valid = true;
		  if (!util.isBuffer(chunk) &&
		      !util.isString(chunk) &&
		      !util.isNullOrUndefined(chunk) &&
		      !state.objectMode) {
		    var er = new TypeError('Invalid non-string/buffer chunk');
		    stream.emit('error', er);
		    process.nextTick(function() {
		      cb(er);
		    });
		    valid = false;
		  }
		  return valid;
		}

		Writable.prototype.write = function(chunk, encoding, cb) {
		  var state = this._writableState;
		  var ret = false;

		  if (util.isFunction(encoding)) {
		    cb = encoding;
		    encoding = null;
		  }

		  if (util.isBuffer(chunk))
		    encoding = 'buffer';
		  else if (!encoding)
		    encoding = state.defaultEncoding;

		  if (!util.isFunction(cb))
		    cb = function() {};

		  if (state.ended)
		    writeAfterEnd(this, state, cb);
		  else if (validChunk(this, state, chunk, cb)) {
		    state.pendingcb++;
		    ret = writeOrBuffer(this, state, chunk, encoding, cb);
		  }

		  return ret;
		};

		Writable.prototype.cork = function() {
		  var state = this._writableState;

		  state.corked++;
		};

		Writable.prototype.uncork = function() {
		  var state = this._writableState;

		  if (state.corked) {
		    state.corked--;

		    if (!state.writing &&
		        !state.corked &&
		        !state.finished &&
		        !state.bufferProcessing &&
		        state.buffer.length)
		      clearBuffer(this, state);
		  }
		};

		function decodeChunk(state, chunk, encoding) {
		  if (!state.objectMode &&
		      state.decodeStrings !== false &&
		      util.isString(chunk)) {
		    chunk = new Buffer(chunk, encoding);
		  }
		  return chunk;
		}

		// if we're already writing something, then just put this
		// in the queue, and wait our turn.  Otherwise, call _write
		// If we return false, then we need a drain event, so set that flag.
		function writeOrBuffer(stream, state, chunk, encoding, cb) {
		  chunk = decodeChunk(state, chunk, encoding);
		  if (util.isBuffer(chunk))
		    encoding = 'buffer';
		  var len = state.objectMode ? 1 : chunk.length;

		  state.length += len;

		  var ret = state.length < state.highWaterMark;
		  // we must ensure that previous needDrain will not be reset to false.
		  if (!ret)
		    state.needDrain = true;

		  if (state.writing || state.corked)
		    state.buffer.push(new WriteReq(chunk, encoding, cb));
		  else
		    doWrite(stream, state, false, len, chunk, encoding, cb);

		  return ret;
		}

		function doWrite(stream, state, writev, len, chunk, encoding, cb) {
		  state.writelen = len;
		  state.writecb = cb;
		  state.writing = true;
		  state.sync = true;
		  if (writev)
		    stream._writev(chunk, state.onwrite);
		  else
		    stream._write(chunk, encoding, state.onwrite);
		  state.sync = false;
		}

		function onwriteError(stream, state, sync, er, cb) {
		  if (sync)
		    process.nextTick(function() {
		      state.pendingcb--;
		      cb(er);
		    });
		  else {
		    state.pendingcb--;
		    cb(er);
		  }

		  stream._writableState.errorEmitted = true;
		  stream.emit('error', er);
		}

		function onwriteStateUpdate(state) {
		  state.writing = false;
		  state.writecb = null;
		  state.length -= state.writelen;
		  state.writelen = 0;
		}

		function onwrite(stream, er) {
		  var state = stream._writableState;
		  var sync = state.sync;
		  var cb = state.writecb;

		  onwriteStateUpdate(state);

		  if (er)
		    onwriteError(stream, state, sync, er, cb);
		  else {
		    // Check if we're actually ready to finish, but don't emit yet
		    var finished = needFinish(stream, state);

		    if (!finished &&
		        !state.corked &&
		        !state.bufferProcessing &&
		        state.buffer.length) {
		      clearBuffer(stream, state);
		    }

		    if (sync) {
		      process.nextTick(function() {
		        afterWrite(stream, state, finished, cb);
		      });
		    } else {
		      afterWrite(stream, state, finished, cb);
		    }
		  }
		}

		function afterWrite(stream, state, finished, cb) {
		  if (!finished)
		    onwriteDrain(stream, state);
		  state.pendingcb--;
		  cb();
		  finishMaybe(stream, state);
		}

		// Must force callback to be called on nextTick, so that we don't
		// emit 'drain' before the write() consumer gets the 'false' return
		// value, and has a chance to attach a 'drain' listener.
		function onwriteDrain(stream, state) {
		  if (state.length === 0 && state.needDrain) {
		    state.needDrain = false;
		    stream.emit('drain');
		  }
		}


		// if there's something in the buffer waiting, then process it
		function clearBuffer(stream, state) {
		  state.bufferProcessing = true;

		  if (stream._writev && state.buffer.length > 1) {
		    // Fast case, write everything using _writev()
		    var cbs = [];
		    for (var c = 0; c < state.buffer.length; c++)
		      cbs.push(state.buffer[c].callback);

		    // count the one we are adding, as well.
		    // TODO(isaacs) clean this up
		    state.pendingcb++;
		    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
		      for (var i = 0; i < cbs.length; i++) {
		        state.pendingcb--;
		        cbs[i](err);
		      }
		    });

		    // Clear buffer
		    state.buffer = [];
		  } else {
		    // Slow case, write chunks one-by-one
		    for (var c = 0; c < state.buffer.length; c++) {
		      var entry = state.buffer[c];
		      var chunk = entry.chunk;
		      var encoding = entry.encoding;
		      var cb = entry.callback;
		      var len = state.objectMode ? 1 : chunk.length;

		      doWrite(stream, state, false, len, chunk, encoding, cb);

		      // if we didn't call the onwrite immediately, then
		      // it means that we need to wait until it does.
		      // also, that means that the chunk and cb are currently
		      // being processed, so move the buffer counter past them.
		      if (state.writing) {
		        c++;
		        break;
		      }
		    }

		    if (c < state.buffer.length)
		      state.buffer = state.buffer.slice(c);
		    else
		      state.buffer.length = 0;
		  }

		  state.bufferProcessing = false;
		}

		Writable.prototype._write = function(chunk, encoding, cb) {
		  cb(new Error('not implemented'));

		};

		Writable.prototype._writev = null;

		Writable.prototype.end = function(chunk, encoding, cb) {
		  var state = this._writableState;

		  if (util.isFunction(chunk)) {
		    cb = chunk;
		    chunk = null;
		    encoding = null;
		  } else if (util.isFunction(encoding)) {
		    cb = encoding;
		    encoding = null;
		  }

		  if (!util.isNullOrUndefined(chunk))
		    this.write(chunk, encoding);

		  // .end() fully uncorks
		  if (state.corked) {
		    state.corked = 1;
		    this.uncork();
		  }

		  // ignore unnecessary end() calls.
		  if (!state.ending && !state.finished)
		    endWritable(this, state, cb);
		};


		function needFinish(stream, state) {
		  return (state.ending &&
		          state.length === 0 &&
		          !state.finished &&
		          !state.writing);
		}

		function prefinish(stream, state) {
		  if (!state.prefinished) {
		    state.prefinished = true;
		    stream.emit('prefinish');
		  }
		}

		function finishMaybe(stream, state) {
		  var need = needFinish(stream, state);
		  if (need) {
		    if (state.pendingcb === 0) {
		      prefinish(stream, state);
		      state.finished = true;
		      stream.emit('finish');
		    } else
		      prefinish(stream, state);
		  }
		  return need;
		}

		function endWritable(stream, state, cb) {
		  state.ending = true;
		  finishMaybe(stream, state);
		  if (cb) {
		    if (state.finished)
		      process.nextTick(cb);
		    else
		      stream.once('finish', cb);
		  }
		  state.ended = true;
		}

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.


		// a transform stream is a readable/writable stream where you do
		// something with the data.  Sometimes it's called a "filter",
		// but that's not a great name for it, since that implies a thing where
		// some bits pass through, and others are simply ignored.  (That would
		// be a valid example of a transform, of course.)
		//
		// While the output is causally related to the input, it's not a
		// necessarily symmetric or synchronous transformation.  For example,
		// a zlib stream might take multiple plain-text writes(), and then
		// emit a single compressed chunk some time in the future.
		//
		// Here's how this works:
		//
		// The Transform stream has all the aspects of the readable and writable
		// stream classes.  When you write(chunk), that calls _write(chunk,cb)
		// internally, and returns false if there's a lot of pending writes
		// buffered up.  When you call read(), that calls _read(n) until
		// there's enough pending readable data buffered up.
		//
		// In a transform stream, the written data is placed in a buffer.  When
		// _read(n) is called, it transforms the queued up data, calling the
		// buffered _write cb's as it consumes chunks.  If consuming a single
		// written chunk would result in multiple output chunks, then the first
		// outputted bit calls the readcb, and subsequent chunks just go into
		// the read buffer, and will cause it to emit 'readable' if necessary.
		//
		// This way, back-pressure is actually determined by the reading side,
		// since _read has to be called to start processing a new chunk.  However,
		// a pathological inflate type of transform can cause excessive buffering
		// here.  For example, imagine a stream where every byte of input is
		// interpreted as an integer from 0-255, and then results in that many
		// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
		// 1kb of data being output.  In this case, you could write a very small
		// amount of input, and end up with a very large amount of output.  In
		// such a pathological inflating mechanism, there'd be no way to tell
		// the system to stop doing the transform.  A single 4MB write could
		// cause the system to run out of memory.
		//
		// However, even in such a pathological case, only a single written chunk
		// would be consumed, and then the rest would wait (un-transformed) until
		// the results of the previous transformed chunk were consumed.

		module.exports = Transform;

		var Duplex = __webpack_require__(15);

		/*<replacement>*/
		var util = __webpack_require__(16);
		util.inherits = __webpack_require__(17);
		/*</replacement>*/

		util.inherits(Transform, Duplex);


		function TransformState(options, stream) {
		  this.afterTransform = function(er, data) {
		    return afterTransform(stream, er, data);
		  };

		  this.needTransform = false;
		  this.transforming = false;
		  this.writecb = null;
		  this.writechunk = null;
		}

		function afterTransform(stream, er, data) {
		  var ts = stream._transformState;
		  ts.transforming = false;

		  var cb = ts.writecb;

		  if (!cb)
		    return stream.emit('error', new Error('no writecb in Transform class'));

		  ts.writechunk = null;
		  ts.writecb = null;

		  if (!util.isNullOrUndefined(data))
		    stream.push(data);

		  if (cb)
		    cb(er);

		  var rs = stream._readableState;
		  rs.reading = false;
		  if (rs.needReadable || rs.length < rs.highWaterMark) {
		    stream._read(rs.highWaterMark);
		  }
		}


		function Transform(options) {
		  if (!(this instanceof Transform))
		    return new Transform(options);

		  Duplex.call(this, options);

		  this._transformState = new TransformState(options, this);

		  // when the writable side finishes, then flush out anything remaining.
		  var stream = this;

		  // start out asking for a readable event once data is transformed.
		  this._readableState.needReadable = true;

		  // we have implemented the _read method, and done the other things
		  // that Readable wants before the first _read call, so unset the
		  // sync guard flag.
		  this._readableState.sync = false;

		  this.once('prefinish', function() {
		    if (util.isFunction(this._flush))
		      this._flush(function(er) {
		        done(stream, er);
		      });
		    else
		      done(stream);
		  });
		}

		Transform.prototype.push = function(chunk, encoding) {
		  this._transformState.needTransform = false;
		  return Duplex.prototype.push.call(this, chunk, encoding);
		};

		// This is the part where you do stuff!
		// override this function in implementation classes.
		// 'chunk' is an input chunk.
		//
		// Call `push(newChunk)` to pass along transformed output
		// to the readable side.  You may call 'push' zero or more times.
		//
		// Call `cb(err)` when you are done with this chunk.  If you pass
		// an error, then that'll put the hurt on the whole operation.  If you
		// never call cb(), then you'll never get another chunk.
		Transform.prototype._transform = function(chunk, encoding, cb) {
		  throw new Error('not implemented');
		};

		Transform.prototype._write = function(chunk, encoding, cb) {
		  var ts = this._transformState;
		  ts.writecb = cb;
		  ts.writechunk = chunk;
		  ts.writeencoding = encoding;
		  if (!ts.transforming) {
		    var rs = this._readableState;
		    if (ts.needTransform ||
		        rs.needReadable ||
		        rs.length < rs.highWaterMark)
		      this._read(rs.highWaterMark);
		  }
		};

		// Doesn't matter what the args are here.
		// _transform does all the work.
		// That we got here means that the readable side wants more data.
		Transform.prototype._read = function(n) {
		  var ts = this._transformState;

		  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
		    ts.transforming = true;
		    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
		  } else {
		    // mark that we need a transform, so that any data that comes in
		    // will get processed, now that we've asked for it.
		    ts.needTransform = true;
		  }
		};


		function done(stream, er) {
		  if (er)
		    return stream.emit('error', er);

		  // if there's nothing in the write buffer, then that means
		  // that nothing more will ever be provided
		  var ws = stream._writableState;
		  var ts = stream._transformState;

		  if (ws.length)
		    throw new Error('calling transform done when ws.length != 0');

		  if (ts.transforming)
		    throw new Error('calling transform done when still transforming');

		  return stream.push(null);
		}


	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		// a passthrough stream.
		// basically just the most minimal sort of Transform stream.
		// Every written chunk gets output as-is.

		module.exports = PassThrough;

		var Transform = __webpack_require__(23);

		/*<replacement>*/
		var util = __webpack_require__(16);
		util.inherits = __webpack_require__(17);
		/*</replacement>*/

		util.inherits(PassThrough, Transform);

		function PassThrough(options) {
		  if (!(this instanceof PassThrough))
		    return new PassThrough(options);

		  Transform.call(this, options);
		}

		PassThrough.prototype._transform = function(chunk, encoding, cb) {
		  cb(null, chunk);
		};


	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(22)


	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(15)


	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(23)


	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(24)


	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		module.exports = __webpack_require__(3);

	/***/ },
	/* 30 */
	/***/ function(module, exports) {

		module.exports = __webpack_require__(4);

	/***/ }
	/******/ ]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * js-data
	 * @version 2.2.2 - Homepage <http://www.js-data.io/>
	 * @author Jason Dobry <jason.dobry@gmail.com>
	 * @copyright (c) 2014-2015 Jason Dobry 
	 * @license MIT <https://github.com/js-data/js-data/blob/master/LICENSE>
	 * 
	 * @overview Robust framework-agnostic data store.
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["JSData"] = factory();
		else
			root["JSData"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var _datastoreIndex = __webpack_require__(1);

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		/**
		 * The library export.
		 *   - window.JSData
		 *   - require('js-data')
		 *   - define(['js-data', function (JSData) { ... }]);
		 *   - import JSData from 'js-data'
		 */
		module.exports = {
		  DS: _datastoreIndex['default'],
		  DSUtils: _utils['default'],
		  DSErrors: _errors['default'],
		  createStore: function createStore(options) {
		    return new _datastoreIndex['default'](options);
		  },
		  version: {
		    full: '2.2.2',
		    major: parseInt('2', 10),
		    minor: parseInt('2', 10),
		    patch: parseInt('2', 10),
		    alpha: true ? 'false' : false,
		    beta: true ? 'false' : false
		  }
		};

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		/* jshint eqeqeq:false */

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		var _sync_methodsIndex = __webpack_require__(4);

		var _async_methodsIndex = __webpack_require__(5);

		function lifecycleNoopCb(resource, attrs, cb) {
		  cb(null, attrs);
		}

		function lifecycleNoop(resource, attrs) {
		  return attrs;
		}

		function compare(_x, _x2, _x3, _x4) {
		  var _again = true;

		  _function: while (_again) {
		    var orderBy = _x,
		        index = _x2,
		        a = _x3,
		        b = _x4;
		    def = cA = cB = undefined;
		    _again = false;

		    var def = orderBy[index];
		    var cA = _utils['default'].get(a, def[0]),
		        cB = _utils['default'].get(b, def[0]);
		    if (_utils['default']._s(cA)) {
		      cA = _utils['default'].upperCase(cA);
		    }
		    if (_utils['default']._s(cB)) {
		      cB = _utils['default'].upperCase(cB);
		    }
		    if (def[1] === 'DESC') {
		      if (cB < cA) {
		        return -1;
		      } else if (cB > cA) {
		        return 1;
		      } else {
		        if (index < orderBy.length - 1) {
		          _x = orderBy;
		          _x2 = index + 1;
		          _x3 = a;
		          _x4 = b;
		          _again = true;
		          continue _function;
		        } else {
		          return 0;
		        }
		      }
		    } else {
		      if (cA < cB) {
		        return -1;
		      } else if (cA > cB) {
		        return 1;
		      } else {
		        if (index < orderBy.length - 1) {
		          _x = orderBy;
		          _x2 = index + 1;
		          _x3 = a;
		          _x4 = b;
		          _again = true;
		          continue _function;
		        } else {
		          return 0;
		        }
		      }
		    }
		  }
		}

		var Defaults = (function () {
		  function Defaults() {
		    _classCallCheck(this, Defaults);
		  }

		  _createClass(Defaults, [{
		    key: 'errorFn',
		    value: function errorFn(a, b) {
		      if (this.error && typeof this.error === 'function') {
		        try {
		          if (typeof a === 'string') {
		            throw new Error(a);
		          } else {
		            throw a;
		          }
		        } catch (err) {
		          a = err;
		        }
		        this.error(this.name || null, a || null, b || null);
		      }
		    }
		  }]);

		  return Defaults;
		})();

		var defaultsPrototype = Defaults.prototype;

		defaultsPrototype.actions = {};
		defaultsPrototype.afterCreate = lifecycleNoopCb;
		defaultsPrototype.afterCreateCollection = lifecycleNoop;
		defaultsPrototype.afterCreateInstance = lifecycleNoop;
		defaultsPrototype.afterDestroy = lifecycleNoopCb;
		defaultsPrototype.afterEject = lifecycleNoop;
		defaultsPrototype.afterInject = lifecycleNoop;
		defaultsPrototype.afterReap = lifecycleNoop;
		defaultsPrototype.afterUpdate = lifecycleNoopCb;
		defaultsPrototype.afterValidate = lifecycleNoopCb;
		defaultsPrototype.allowSimpleWhere = true;
		defaultsPrototype.basePath = '';
		defaultsPrototype.beforeCreate = lifecycleNoopCb;
		defaultsPrototype.beforeCreateCollection = lifecycleNoop;
		defaultsPrototype.beforeCreateInstance = lifecycleNoop;
		defaultsPrototype.beforeDestroy = lifecycleNoopCb;
		defaultsPrototype.beforeEject = lifecycleNoop;
		defaultsPrototype.beforeInject = lifecycleNoop;
		defaultsPrototype.beforeReap = lifecycleNoop;
		defaultsPrototype.beforeUpdate = lifecycleNoopCb;
		defaultsPrototype.beforeValidate = lifecycleNoopCb;
		defaultsPrototype.bypassCache = false;
		defaultsPrototype.cacheResponse = !!_utils['default'].w;
		defaultsPrototype.clearEmptyQueries = true;
		defaultsPrototype.computed = {};
		defaultsPrototype.defaultAdapter = 'http';
		defaultsPrototype.debug = false;
		defaultsPrototype.defaultValues = {};
		defaultsPrototype.eagerEject = false;
		// TODO: Implement eagerInject in DS#create
		defaultsPrototype.eagerInject = false;
		defaultsPrototype.endpoint = '';
		defaultsPrototype.error = console ? function (a, b, c) {
		  return console[typeof console.error === 'function' ? 'error' : 'log'](a, b, c);
		} : false;
		defaultsPrototype.fallbackAdapters = ['http'];
		defaultsPrototype.findStrictCache = false;
		defaultsPrototype.idAttribute = 'id';
		defaultsPrototype.ignoredChanges = [/\$/];
		defaultsPrototype.instanceEvents = !!_utils['default'].w;
		defaultsPrototype.keepChangeHistory = false;
		defaultsPrototype.linkRelations = true;
		defaultsPrototype.log = console ? function (a, b, c, d, e) {
		  return console[typeof console.info === 'function' ? 'info' : 'log'](a, b, c, d, e);
		} : false;

		defaultsPrototype.logFn = function (a, b, c, d) {
		  var _this = this;
		  if (_this.debug && _this.log && typeof _this.log === 'function') {
		    _this.log(_this.name || null, a || null, b || null, c || null, d || null);
		  }
		};

		defaultsPrototype.maxAge = false;
		defaultsPrototype.methods = {};
		defaultsPrototype.notify = !!_utils['default'].w;
		defaultsPrototype.omit = [];
		defaultsPrototype.onConflict = 'merge';
		defaultsPrototype.reapAction = !!_utils['default'].w ? 'inject' : 'none';
		defaultsPrototype.reapInterval = !!_utils['default'].w ? 30000 : false;
		defaultsPrototype.relationsEnumerable = false;
		defaultsPrototype.resetHistoryOnInject = true;
		defaultsPrototype.returnMeta = false;
		defaultsPrototype.strategy = 'single';
		defaultsPrototype.upsert = !!_utils['default'].w;
		defaultsPrototype.useClass = true;
		defaultsPrototype.useFilter = false;
		defaultsPrototype.validate = lifecycleNoopCb;
		defaultsPrototype.defaultFilter = function (collection, resourceName, params, options) {
		  var filtered = collection;
		  var where = null;
		  var reserved = {
		    skip: '',
		    offset: '',
		    where: '',
		    limit: '',
		    orderBy: '',
		    sort: ''
		  };

		  params = params || {};
		  options = options || {};

		  if (_utils['default']._o(params.where)) {
		    where = params.where;
		  } else {
		    where = {};
		  }

		  if (options.allowSimpleWhere) {
		    _utils['default'].forOwn(params, function (value, key) {
		      if (!(key in reserved) && !(key in where)) {
		        where[key] = {
		          '==': value
		        };
		      }
		    });
		  }

		  if (_utils['default'].isEmpty(where)) {
		    where = null;
		  }

		  if (where) {
		    filtered = _utils['default'].filter(filtered, function (attrs) {
		      var first = true;
		      var keep = true;
		      _utils['default'].forOwn(where, function (clause, field) {
		        if (!_utils['default']._o(clause)) {
		          clause = {
		            '==': clause
		          };
		        }
		        _utils['default'].forOwn(clause, function (term, op) {
		          var expr = undefined;
		          var isOr = op[0] === '|';
		          var val = _utils['default'].get(attrs, field);
		          op = isOr ? op.substr(1) : op;
		          if (op === '==') {
		            expr = val == term;
		          } else if (op === '===') {
		            expr = val === term;
		          } else if (op === '!=') {
		            expr = val != term;
		          } else if (op === '!==') {
		            expr = val !== term;
		          } else if (op === '>') {
		            expr = val > term;
		          } else if (op === '>=') {
		            expr = val >= term;
		          } else if (op === '<') {
		            expr = val < term;
		          } else if (op === '<=') {
		            expr = val <= term;
		          } else if (op === 'isectEmpty') {
		            expr = !_utils['default'].intersection(val || [], term || []).length;
		          } else if (op === 'isectNotEmpty') {
		            expr = _utils['default'].intersection(val || [], term || []).length;
		          } else if (op === 'in') {
		            if (_utils['default']._s(term)) {
		              expr = term.indexOf(val) !== -1;
		            } else {
		              expr = _utils['default'].contains(term, val);
		            }
		          } else if (op === 'notIn') {
		            if (_utils['default']._s(term)) {
		              expr = term.indexOf(val) === -1;
		            } else {
		              expr = !_utils['default'].contains(term, val);
		            }
		          } else if (op === 'contains') {
		            if (_utils['default']._s(val)) {
		              expr = val.indexOf(term) !== -1;
		            } else {
		              expr = _utils['default'].contains(val, term);
		            }
		          } else if (op === 'notContains') {
		            if (_utils['default']._s(val)) {
		              expr = val.indexOf(term) === -1;
		            } else {
		              expr = !_utils['default'].contains(val, term);
		            }
		          }
		          if (expr !== undefined) {
		            keep = first ? expr : isOr ? keep || expr : keep && expr;
		          }
		          first = false;
		        });
		      });
		      return keep;
		    });
		  }

		  var orderBy = null;

		  if (_utils['default']._s(params.orderBy)) {
		    orderBy = [[params.orderBy, 'ASC']];
		  } else if (_utils['default']._a(params.orderBy)) {
		    orderBy = params.orderBy;
		  }

		  if (!orderBy && _utils['default']._s(params.sort)) {
		    orderBy = [[params.sort, 'ASC']];
		  } else if (!orderBy && _utils['default']._a(params.sort)) {
		    orderBy = params.sort;
		  }

		  // Apply 'orderBy'
		  if (orderBy) {
		    (function () {
		      var index = 0;
		      _utils['default'].forEach(orderBy, function (def, i) {
		        if (_utils['default']._s(def)) {
		          orderBy[i] = [def, 'ASC'];
		        } else if (!_utils['default']._a(def)) {
		          throw new _errors['default'].IA('DS.filter("' + resourceName + '"[, params][, options]): ' + _utils['default'].toJson(def) + ': Must be a string or an array!', {
		            params: {
		              'orderBy[i]': {
		                actual: typeof def,
		                expected: 'string|array'
		              }
		            }
		          });
		        }
		      });
		      filtered = _utils['default'].sort(filtered, function (a, b) {
		        return compare(orderBy, index, a, b);
		      });
		    })();
		  }

		  var limit = _utils['default']._n(params.limit) ? params.limit : null;
		  var skip = null;

		  if (_utils['default']._n(params.skip)) {
		    skip = params.skip;
		  } else if (_utils['default']._n(params.offset)) {
		    skip = params.offset;
		  }

		  // Apply 'limit' and 'skip'
		  if (limit && skip) {
		    filtered = _utils['default'].slice(filtered, skip, Math.min(filtered.length, skip + limit));
		  } else if (_utils['default']._n(limit)) {
		    filtered = _utils['default'].slice(filtered, 0, Math.min(filtered.length, limit));
		  } else if (_utils['default']._n(skip)) {
		    if (skip < filtered.length) {
		      filtered = _utils['default'].slice(filtered, skip);
		    } else {
		      filtered = [];
		    }
		  }

		  if (filtered === collection) {
		    return filtered.slice();
		  } else {
		    return filtered;
		  }
		};

		var DS = (function () {
		  function DS(options) {
		    _classCallCheck(this, DS);

		    var _this = this;
		    options = options || {};

		    _this.store = {};
		    // alias store, shaves 0.1 kb off the minified build
		    _this.s = _this.store;
		    _this.definitions = {};
		    // alias definitions, shaves 0.3 kb off the minified build
		    _this.defs = _this.definitions;
		    _this.adapters = {};
		    _this.defaults = new Defaults();
		    _this.observe = _utils['default'].observe;
		    _utils['default'].forOwn(options, function (v, k) {
		      if (k === 'omit') {
		        _this.defaults.omit = v.concat(Defaults.prototype.omit);
		      } else {
		        _this.defaults[k] = v;
		      }
		    });
		    _this.defaults.logFn('new data store created', _this.defaults);

		    var P = _utils['default'].Promise;

		    if (P && !P.prototype.spread) {
		      P.prototype.spread = function (cb) {
		        return this.then(function (arr) {
		          return cb.apply(this, arr);
		        });
		      };
		    }

		    _utils['default'].Events(_this);
		  }

		  _createClass(DS, [{
		    key: 'getAdapterName',
		    value: function getAdapterName(options) {
		      var errorIfNotExist = false;
		      options = options || {};
		      this.defaults.logFn('getAdapterName', options);
		      if (_utils['default']._s(options)) {
		        errorIfNotExist = true;
		        options = {
		          adapter: options
		        };
		      }
		      if (this.adapters[options.adapter]) {
		        return options.adapter;
		      } else if (errorIfNotExist) {
		        throw new Error(options.adapter + ' is not a registered adapter!');
		      } else {
		        return options.defaultAdapter;
		      }
		    }
		  }, {
		    key: 'getAdapter',
		    value: function getAdapter(options) {
		      options = options || {};
		      this.defaults.logFn('getAdapter', options);
		      return this.adapters[this.getAdapterName(options)];
		    }
		  }, {
		    key: 'registerAdapter',
		    value: function registerAdapter(name, Adapter, options) {
		      var _this = this;
		      options = options || {};
		      _this.defaults.logFn('registerAdapter', name, Adapter, options);
		      if (_utils['default'].isFunction(Adapter)) {
		        _this.adapters[name] = new Adapter(options);
		      } else {
		        _this.adapters[name] = Adapter;
		      }
		      if (options['default']) {
		        _this.defaults.defaultAdapter = name;
		      }
		      _this.defaults.logFn('default adapter is ' + _this.defaults.defaultAdapter);
		    }
		  }, {
		    key: 'is',
		    value: function is(resourceName, instance) {
		      var definition = this.defs[resourceName];
		      if (!definition) {
		        throw new _errors['default'].NER(resourceName);
		      }
		      return instance instanceof definition[definition['class']];
		    }
		  }, {
		    key: 'clear',
		    value: function clear() {
		      var _this2 = this;

		      var ejected = {};
		      _utils['default'].forOwn(this.definitions, function (definition) {
		        var name = definition.name;
		        ejected[name] = definition.ejectAll();
		        _this2.store[name].completedQueries = {};
		        _this2.store[name].queryData = {};
		      });
		      return ejected;
		    }
		  }]);

		  return DS;
		})();

		var dsPrototype = DS.prototype;

		dsPrototype.getAdapterName.shorthand = false;
		dsPrototype.getAdapter.shorthand = false;
		dsPrototype.registerAdapter.shorthand = false;
		dsPrototype.errors = _errors['default'];
		dsPrototype.utils = _utils['default'];

		function addMethods(target, obj) {
		  _utils['default'].forOwn(obj, function (v, k) {
		    target[k] = v;
		    target[k].before = function (fn) {
		      var orig = target[k];
		      target[k] = function () {
		        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		          args[_key] = arguments[_key];
		        }

		        return orig.apply(this, fn.apply(this, args) || args);
		      };
		    };
		  });
		}

		addMethods(dsPrototype, _sync_methodsIndex['default']);
		addMethods(dsPrototype, _async_methodsIndex['default']);

		exports['default'] = DS;

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		/* jshint eqeqeq:false */

		/**
		 * Mix of ES6 and CommonJS module imports because the interop of Babel + Webpack + ES6 modules + CommonJS isn't very good.
		 */

		var _errors = __webpack_require__(3);

		var BinaryHeap = __webpack_require__(7);
		var forEach = __webpack_require__(8);
		var slice = __webpack_require__(9);
		var forOwn = __webpack_require__(13);
		var contains = __webpack_require__(10);
		var deepMixIn = __webpack_require__(14);
		var pascalCase = __webpack_require__(19);
		var remove = __webpack_require__(11);
		var pick = __webpack_require__(15);
		var _keys = __webpack_require__(16);
		var sort = __webpack_require__(12);
		var upperCase = __webpack_require__(20);
		var get = __webpack_require__(17);
		var set = __webpack_require__(18);
		var observe = __webpack_require__(6);
		var w = undefined;
		var objectProto = Object.prototype;
		var toString = objectProto.toString;
		var P = undefined;

		/**
		 * Attempt to detect the global Promise constructor.
		 * JSData will still work without one, as long you do something like this:
		 *
		 * var JSData = require('js-data');
		 * JSData.DSUtils.Promise = MyPromiseLib;
		 */
		try {
		  P = Promise;
		} catch (err) {
		  console.error('js-data requires a global Promise constructor!');
		}

		var isArray = Array.isArray || function isArray(value) {
		  return toString.call(value) == '[object Array]' || false;
		};

		var isRegExp = function isRegExp(value) {
		  return toString.call(value) == '[object RegExp]' || false;
		};

		// adapted from lodash.isString
		var isString = function isString(value) {
		  return typeof value == 'string' || value && typeof value == 'object' && toString.call(value) == '[object String]' || false;
		};

		var isObject = function isObject(value) {
		  return toString.call(value) == '[object Object]' || false;
		};

		// adapted from lodash.isDate
		var isDate = function isDate(value) {
		  return value && typeof value == 'object' && toString.call(value) == '[object Date]' || false;
		};

		// adapted from lodash.isNumber
		var isNumber = function isNumber(value) {
		  var type = typeof value;
		  return type == 'number' || value && type == 'object' && toString.call(value) == '[object Number]' || false;
		};

		// adapted from lodash.isFunction
		var isFunction = function isFunction(value) {
		  return typeof value == 'function' || value && toString.call(value) === '[object Function]' || false;
		};

		// shorthand argument checking functions, using these shaves 1.18 kb off of the minified build
		var isStringOrNumber = function isStringOrNumber(value) {
		  return isString(value) || isNumber(value);
		};
		var isStringOrNumberErr = function isStringOrNumberErr(field) {
		  return new _errors['default'].IA('"' + field + '" must be a string or a number!');
		};
		var isObjectErr = function isObjectErr(field) {
		  return new _errors['default'].IA('"' + field + '" must be an object!');
		};
		var isArrayErr = function isArrayErr(field) {
		  return new _errors['default'].IA('"' + field + '" must be an array!');
		};

		// adapted from mout.isEmpty
		var isEmpty = function isEmpty(val) {
		  if (val == null) {
		    // jshint ignore:line
		    // typeof null == 'object' so we check it first
		    return true;
		  } else if (typeof val === 'string' || isArray(val)) {
		    return !val.length;
		  } else if (typeof val === 'object') {
		    var result = true;
		    forOwn(val, function () {
		      result = false;
		      return false; // break loop
		    });
		    return result;
		  } else {
		    return true;
		  }
		};

		// Find the intersection between two arrays
		var intersection = function intersection(array1, array2) {
		  if (!array1 || !array2) {
		    return [];
		  }
		  var result = [];
		  var item = undefined;
		  for (var i = 0, _length = array1.length; i < _length; i++) {
		    item = array1[i];
		    if (contains(result, item)) {
		      continue;
		    }
		    if (contains(array2, item)) {
		      result.push(item);
		    }
		  }
		  return result;
		};

		var filter = function filter(array, cb, thisObj) {
		  var results = [];
		  forEach(array, function (value, key, arr) {
		    if (cb(value, key, arr)) {
		      results.push(value);
		    }
		  }, thisObj);
		  return results;
		};

		/**
		 * Attempt to detect whether we are in the browser.
		 */
		try {
		  w = window;
		  w = {};
		} catch (e) {
		  w = null;
		}

		/**
		 * Event mixin. Usage:
		 *
		 * function handler() { ... }
		 * Events(myObject);
		 * myObject.on('foo', handler);
		 * myObject.emit('foo', 'some', 'data');
		 * myObject.off('foo', handler);
		 */
		function Events(target) {
		  var events = {};
		  target = target || this;
		  target.on = function (type, func, ctx) {
		    events[type] = events[type] || [];
		    events[type].push({
		      f: func,
		      c: ctx
		    });
		  };
		  target.off = function (type, func) {
		    var listeners = events[type];
		    if (!listeners) {
		      events = {};
		    } else if (func) {
		      for (var i = 0; i < listeners.length; i++) {
		        if (listeners[i].f === func) {
		          listeners.splice(i, 1);
		          break;
		        }
		      }
		    } else {
		      listeners.splice(0, listeners.length);
		    }
		  };
		  target.emit = function () {
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    var listeners = events[args.shift()] || [];
		    if (listeners) {
		      for (var i = 0; i < listeners.length; i++) {
		        listeners[i].f.apply(listeners[i].c, args);
		      }
		    }
		  };
		}

		/**
		 * Lifecycle hooks that should support promises.
		 */
		var toPromisify = ['beforeValidate', 'validate', 'afterValidate', 'beforeCreate', 'afterCreate', 'beforeUpdate', 'afterUpdate', 'beforeDestroy', 'afterDestroy'];

		/**
		 * Return whether "prop" is in the blacklist.
		 */
		var isBlacklisted = observe.isBlacklisted;

		// adapted from angular.copy
		var copy = function copy(source, destination, stackSource, stackDest, blacklist) {
		  if (!destination) {
		    destination = source;
		    if (source) {
		      if (isArray(source)) {
		        destination = copy(source, [], stackSource, stackDest, blacklist);
		      } else if (isDate(source)) {
		        destination = new Date(source.getTime());
		      } else if (isRegExp(source)) {
		        destination = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
		        destination.lastIndex = source.lastIndex;
		      } else if (isObject(source)) {
		        destination = copy(source, Object.create(Object.getPrototypeOf(source)), stackSource, stackDest, blacklist);
		      }
		    }
		  } else {
		    if (source === destination) {
		      throw new Error('Cannot copy! Source and destination are identical.');
		    }

		    stackSource = stackSource || [];
		    stackDest = stackDest || [];

		    if (isObject(source)) {
		      var index = stackSource.indexOf(source);
		      if (index !== -1) {
		        return stackDest[index];
		      }

		      stackSource.push(source);
		      stackDest.push(destination);
		    }

		    var result = undefined;
		    if (isArray(source)) {
		      var i = undefined;
		      destination.length = 0;
		      for (i = 0; i < source.length; i++) {
		        result = copy(source[i], null, stackSource, stackDest, blacklist);
		        if (isObject(source[i])) {
		          stackSource.push(source[i]);
		          stackDest.push(result);
		        }
		        destination.push(result);
		      }
		    } else {
		      if (isArray(destination)) {
		        destination.length = 0;
		      } else {
		        forEach(destination, function (value, key) {
		          delete destination[key];
		        });
		      }
		      for (var key in source) {
		        if (source.hasOwnProperty(key)) {
		          if (isBlacklisted(key, blacklist)) {
		            continue;
		          }
		          result = copy(source[key], null, stackSource, stackDest, blacklist);
		          if (isObject(source[key])) {
		            stackSource.push(source[key]);
		            stackDest.push(result);
		          }
		          destination[key] = result;
		        }
		      }
		    }
		  }
		  return destination;
		};

		// adapted from angular.equals
		var equals = function equals(_x, _x2) {
		  var _again = true;

		  _function: while (_again) {
		    var o1 = _x,
		        o2 = _x2;
		    t1 = t2 = length = key = keySet = undefined;
		    _again = false;

		    if (o1 === o2) {
		      return true;
		    }
		    if (o1 === null || o2 === null) {
		      return false;
		    }
		    if (o1 !== o1 && o2 !== o2) {
		      return true;
		    } // NaN === NaN
		    var t1 = typeof o1,
		        t2 = typeof o2,
		        length,
		        key,
		        keySet;
		    if (t1 == t2) {
		      if (t1 == 'object') {
		        if (isArray(o1)) {
		          if (!isArray(o2)) {
		            return false;
		          }
		          if ((length = o1.length) == o2.length) {
		            // jshint ignore:line
		            for (key = 0; key < length; key++) {
		              if (!equals(o1[key], o2[key])) {
		                return false;
		              }
		            }
		            return true;
		          }
		        } else if (isDate(o1)) {
		          if (!isDate(o2)) {
		            return false;
		          }
		          _x = o1.getTime();
		          _x2 = o2.getTime();
		          _again = true;
		          continue _function;
		        } else if (isRegExp(o1) && isRegExp(o2)) {
		          return o1.toString() == o2.toString();
		        } else {
		          if (isArray(o2)) {
		            return false;
		          }
		          keySet = {};
		          for (key in o1) {
		            if (key.charAt(0) === '$' || isFunction(o1[key])) {
		              continue;
		            }
		            if (!equals(o1[key], o2[key])) {
		              return false;
		            }
		            keySet[key] = true;
		          }
		          for (key in o2) {
		            if (!keySet.hasOwnProperty(key) && key.charAt(0) !== '$' && o2[key] !== undefined && !isFunction(o2[key])) {
		              return false;
		            }
		          }
		          return true;
		        }
		      }
		    }
		    return false;
		  }
		};

		/**
		 * Given either an instance or the primary key of an instance, return the primary key.
		 */
		var resolveId = function resolveId(definition, idOrInstance) {
		  if (isString(idOrInstance) || isNumber(idOrInstance)) {
		    return idOrInstance;
		  } else if (idOrInstance && definition) {
		    return idOrInstance[definition.idAttribute] || idOrInstance;
		  } else {
		    return idOrInstance;
		  }
		};

		/**
		 * Given either an instance or the primary key of an instance, return the instance.
		 */
		var resolveItem = function resolveItem(resource, idOrInstance) {
		  if (resource && (isString(idOrInstance) || isNumber(idOrInstance))) {
		    return resource.index[idOrInstance] || idOrInstance;
		  } else {
		    return idOrInstance;
		  }
		};

		var isValidString = function isValidString(val) {
		  return val != null && val !== ''; // jshint ignore:line
		};

		var join = function join(items, separator) {
		  separator = separator || '';
		  return filter(items, isValidString).join(separator);
		};

		var makePath = function makePath() {
		  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		    args[_key2] = arguments[_key2];
		  }

		  var result = join(args, '/');
		  return result.replace(/([^:\/]|^)\/{2,}/g, '$1/');
		};

		exports['default'] = {
		  Promise: P,
		  /**
		   * Method to wrap an "options" object so that it will inherit from
		   * some parent object, such as a resource definition.
		   */
		  _: function _(parent, options) {
		    var _this = this;
		    options = options || {};
		    if (options && options.constructor === parent.constructor) {
		      return options;
		    } else if (!isObject(options)) {
		      throw new _errors['default'].IA('"options" must be an object!');
		    }
		    forEach(toPromisify, function (name) {
		      if (typeof options[name] === 'function' && options[name].toString().indexOf('for (var _len = arg') === -1) {
		        options[name] = _this.promisify(options[name]);
		      }
		    });
		    // Dynamic constructor function
		    var O = function Options(attrs) {
		      var self = this;
		      forOwn(attrs, function (value, key) {
		        self[key] = value;
		      });
		    };
		    // Inherit from some parent object
		    O.prototype = parent;
		    // Give us a way to get the original options back.
		    O.prototype.orig = function () {
		      var orig = {};
		      forOwn(this, function (value, key) {
		        orig[key] = value;
		      });
		      return orig;
		    };
		    return new O(options);
		  },
		  _n: isNumber,
		  _s: isString,
		  _sn: isStringOrNumber,
		  _snErr: isStringOrNumberErr,
		  _o: isObject,
		  _oErr: isObjectErr,
		  _a: isArray,
		  _aErr: isArrayErr,
		  compute: function compute(fn, field) {
		    var _this = this;
		    var args = [];
		    forEach(fn.deps, function (dep) {
		      args.push(get(_this, dep));
		    });
		    // compute property
		    set(_this, field, fn[fn.length - 1].apply(_this, args));
		  },
		  contains: contains,
		  copy: copy,
		  deepMixIn: deepMixIn,
		  diffObjectFromOldObject: observe.diffObjectFromOldObject,
		  BinaryHeap: BinaryHeap,
		  equals: equals,
		  Events: Events,
		  filter: filter,
		  fillIn: function fillIn(target, obj) {
		    forOwn(obj, function (v, k) {
		      if (!(k in target)) {
		        target[k] = v;
		      }
		    });
		    return target;
		  },
		  forEach: forEach,
		  forOwn: forOwn,
		  fromJson: function fromJson(json) {
		    return isString(json) ? JSON.parse(json) : json;
		  },
		  get: get,
		  intersection: intersection,
		  isArray: isArray,
		  isBlacklisted: isBlacklisted,
		  isEmpty: isEmpty,
		  isFunction: isFunction,
		  isObject: isObject,
		  isNumber: isNumber,
		  isString: isString,
		  keys: _keys,
		  makePath: makePath,
		  observe: observe,
		  omit: function omit(obj, bl) {
		    var toRemove = [];
		    forOwn(obj, function (v, k) {
		      if (isBlacklisted(k, bl)) {
		        toRemove.push(k);
		      }
		    });
		    forEach(toRemove, function (k) {
		      delete obj[k];
		    });
		    return obj;
		  },
		  pascalCase: pascalCase,
		  pick: pick,
		  // Turn the given node-style callback function into one that can return a promise.
		  promisify: function promisify(fn, target) {
		    var _this = this;
		    if (!fn) {
		      return;
		    } else if (typeof fn !== 'function') {
		      throw new Error('Can only promisify functions!');
		    }
		    return function () {
		      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		        args[_key3] = arguments[_key3];
		      }

		      return new _this.Promise(function (resolve, reject) {

		        args.push(function (err, result) {
		          if (err) {
		            reject(err);
		          } else {
		            resolve(result);
		          }
		        });

		        try {
		          var promise = fn.apply(target || this, args);
		          if (promise && promise.then) {
		            promise.then(resolve, reject);
		          }
		        } catch (err) {
		          reject(err);
		        }
		      });
		    };
		  },
		  remove: remove,
		  set: set,
		  slice: slice,
		  sort: sort,
		  toJson: JSON.stringify,
		  updateTimestamp: function updateTimestamp(timestamp) {
		    var newTimestamp = typeof Date.now === 'function' ? Date.now() : new Date().getTime();
		    if (timestamp && newTimestamp <= timestamp) {
		      return timestamp + 1;
		    } else {
		      return newTimestamp;
		    }
		  },
		  upperCase: upperCase,
		  // Return a copy of "object" with cycles removed.
		  removeCircular: function removeCircular(object) {
		    return (function rmCirc(value, ctx) {
		      var i = undefined;
		      var nu = undefined;

		      if (typeof value === 'object' && value !== null && !(value instanceof Boolean) && !(value instanceof Date) && !(value instanceof Number) && !(value instanceof RegExp) && !(value instanceof String)) {

		        // check if current object points back to itself
		        var cur = ctx.cur;
		        var parent = ctx.ctx;
		        while (parent) {
		          if (parent.cur === cur) {
		            return undefined;
		          }
		          parent = parent.ctx;
		        }

		        if (isArray(value)) {
		          nu = [];
		          for (i = 0; i < value.length; i += 1) {
		            nu[i] = rmCirc(value[i], { ctx: ctx, cur: value[i] });
		          }
		        } else {
		          nu = {};
		          forOwn(value, function (v, k) {
		            nu[k] = rmCirc(value[k], { ctx: ctx, cur: value[k] });
		          });
		        }
		        return nu;
		      }
		      return value;
		    })(object, { ctx: null, cur: object });
		  },
		  resolveItem: resolveItem,
		  resolveId: resolveId,
		  respond: function respond(response, meta, options) {
		    if (options.returnMeta === 'array') {
		      return [response, meta];
		    } else if (options.returnMeta === 'object') {
		      return { response: response, meta: meta };
		    } else {
		      return response;
		    }
		  },
		  w: w,
		  // This is where the magic of relations happens.
		  applyRelationGettersToTarget: function applyRelationGettersToTarget(store, definition, target) {
		    this.forEach(definition.relationList, function (def) {
		      var relationName = def.relation;
		      var localField = def.localField;
		      var localKey = def.localKey;
		      var foreignKey = def.foreignKey;
		      var localKeys = def.localKeys;
		      var enumerable = typeof def.enumerable === 'boolean' ? def.enumerable : !!definition.relationsEnumerable;
		      if (typeof def.link === 'boolean' ? def.link : !!definition.linkRelations) {
		        delete target[localField];
		        var prop = {
		          enumerable: enumerable,
		          set: function set() {}
		        };
		        if (def.type === 'belongsTo') {
		          prop.get = function () {
		            return get(this, localKey) ? definition.getResource(relationName).get(get(this, localKey)) : undefined;
		          };
		        } else if (def.type === 'hasMany') {
		          prop.get = function () {
		            var params = {};
		            if (foreignKey) {
		              params[foreignKey] = this[definition.idAttribute];
		              return definition.getResource(relationName).defaultFilter.call(store, store.s[relationName].collection, relationName, params, { allowSimpleWhere: true });
		            } else if (localKeys) {
		              var keys = get(this, localKeys) || [];
		              return definition.getResource(relationName).getAll(isArray(keys) ? keys : _keys(keys));
		            }
		            return undefined;
		          };
		        } else if (def.type === 'hasOne') {
		          if (localKey) {
		            prop.get = function () {
		              return get(this, localKey) ? definition.getResource(relationName).get(get(this, localKey)) : undefined;
		            };
		          } else {
		            prop.get = function () {
		              var params = {};
		              params[foreignKey] = this[definition.idAttribute];
		              var items = params[foreignKey] ? definition.getResource(relationName).defaultFilter.call(store, store.s[relationName].collection, relationName, params, { allowSimpleWhere: true }) : [];
		              if (items.length) {
		                return items[0];
		              }
		              return undefined;
		            };
		          }
		        }
		        if (def.get) {
		          (function () {
		            var orig = prop.get;
		            prop.get = function () {
		              var _this2 = this;

		              return def.get(definition, def, this, function () {
		                for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		                  args[_key4] = arguments[_key4];
		                }

		                return orig.apply(_this2, args);
		              });
		            };
		          })();
		        }
		        Object.defineProperty(target, def.localField, prop);
		      }
		    });
		  }
		};

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

		/**
		 * Thrown during a method call when an argument passed into the method is invalid.
		 */

		var IllegalArgumentError = (function (_Error) {
		  function IllegalArgumentError(message) {
		    _classCallCheck(this, IllegalArgumentError);

		    _get(Object.getPrototypeOf(IllegalArgumentError.prototype), 'constructor', this).call(this);
		    if (typeof Error.captureStackTrace === 'function') {
		      Error.captureStackTrace(this, this.constructor);
		    }
		    this.type = this.constructor.name;
		    this.message = message;
		  }

		  _inherits(IllegalArgumentError, _Error);

		  return IllegalArgumentError;
		})(Error);

		/**
		 * Thrown when an invariant is violated or unrecoverable error is encountered during execution.
		 */

		var RuntimeError = (function (_Error2) {
		  function RuntimeError(message) {
		    _classCallCheck(this, RuntimeError);

		    _get(Object.getPrototypeOf(RuntimeError.prototype), 'constructor', this).call(this);
		    if (typeof Error.captureStackTrace === 'function') {
		      Error.captureStackTrace(this, this.constructor);
		    }
		    this.type = this.constructor.name;
		    this.message = message;
		  }

		  _inherits(RuntimeError, _Error2);

		  return RuntimeError;
		})(Error);

		/**
		 * Thrown when attempting to access or work with a non-existent resource.
		 */

		var NonexistentResourceError = (function (_Error3) {
		  function NonexistentResourceError(resourceName) {
		    _classCallCheck(this, NonexistentResourceError);

		    _get(Object.getPrototypeOf(NonexistentResourceError.prototype), 'constructor', this).call(this);
		    if (typeof Error.captureStackTrace === 'function') {
		      Error.captureStackTrace(this, this.constructor);
		    }
		    this.type = this.constructor.name;
		    this.message = resourceName + ' is not a registered resource!';
		  }

		  _inherits(NonexistentResourceError, _Error3);

		  return NonexistentResourceError;
		})(Error);

		exports['default'] = {
		  IllegalArgumentError: IllegalArgumentError,
		  IA: IllegalArgumentError,
		  RuntimeError: RuntimeError,
		  R: RuntimeError,
		  NonexistentResourceError: NonexistentResourceError,
		  NER: NonexistentResourceError
		};

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		var NER = _errors['default'].NER;
		var IA = _errors['default'].IA;
		var R = _errors['default'].R;

		var fakeId = 'DS_' + new Date().getTime();

		function diffIsEmpty(diff) {
		  return !(_utils['default'].isEmpty(diff.added) && _utils['default'].isEmpty(diff.removed) && _utils['default'].isEmpty(diff.changed));
		}

		function check(fnName, resourceName, id, options) {
		  var _this = this;
		  var definition = _this.defs[resourceName];
		  options = options || {};

		  id = _utils['default'].resolveId(definition, id);
		  if (!definition) {
		    throw new NER(resourceName);
		  } else if (!_utils['default']._sn(id)) {
		    throw _utils['default']._snErr('id');
		  }
		  id = id === fakeId ? undefined : id;

		  options = _utils['default']._(definition, options);

		  options.logFn(fnName, id, options);

		  return { _this: _this, definition: definition, _resourceName: resourceName, _id: id, _options: options };
		}

		exports['default'] = {

		  // Return the changes for the given item, if any.
		  //
		  // @param resourceName The name of the type of resource of the item whose changes are to be returned.
		  // @param id The primary key of the item whose changes are to be returned.
		  // @param options Optional configuration.
		  // @param options.ignoredChanges Array of strings or regular expressions of fields, the changes of which are to be ignored.
		  // @returns The changes of the given item, if any.
		  changes: function changes(resourceName, id, options) {
		    var _check$call = check.call(this, 'changes', resourceName, id, options);

		    var _this = _check$call._this;
		    var definition = _check$call.definition;
		    var _resourceName = _check$call._resourceName;
		    var _id = _check$call._id;
		    var _options = _check$call._options;

		    var item = definition.get(_id);
		    if (item) {
		      var _ret = (function () {
		        if (_utils['default'].w) {
		          // force observation handler to be fired for item if there are changes and `Object.observe` is not available
		          _this.s[_resourceName].observers[_id].deliver();
		        }

		        var ignoredChanges = _options.ignoredChanges || [];
		        // add linked relations to list of ignored changes
		        _utils['default'].forEach(definition.relationFields, function (field) {
		          if (!_utils['default'].contains(ignoredChanges, field)) {
		            ignoredChanges.push(field);
		          }
		        });
		        // calculate changes
		        var diff = _utils['default'].diffObjectFromOldObject(item, _this.s[_resourceName].previousAttributes[_id], _utils['default'].equals, ignoredChanges);
		        // remove functions from diff
		        _utils['default'].forOwn(diff, function (changeset, name) {
		          var toKeep = [];
		          _utils['default'].forOwn(changeset, function (value, field) {
		            if (!_utils['default'].isFunction(value)) {
		              toKeep.push(field);
		            }
		          });
		          diff[name] = _utils['default'].pick(diff[name], toKeep);
		        });
		        // definitely ignore changes to linked relations
		        _utils['default'].forEach(definition.relationFields, function (field) {
		          delete diff.added[field];
		          delete diff.removed[field];
		          delete diff.changed[field];
		        });
		        return {
		          v: diff
		        };
		      })();

		      if (typeof _ret === 'object') return _ret.v;
		    }
		  },

		  // Return the change history of the given item, if any.
		  //
		  // @param resourceName The name of the type of resource of the item whose change history is to be returned.
		  // @param id The primary key of the item whose change history is to be returned.
		  // @returns The change history of the given item, if any.
		  changeHistory: function changeHistory(resourceName, id) {
		    var _check$call2 = check.call(this, 'changeHistory', resourceName, id || fakeId);

		    var _this = _check$call2._this;
		    var definition = _check$call2.definition;
		    var _resourceName = _check$call2._resourceName;
		    var _id = _check$call2._id;

		    var resource = _this.s[_resourceName];

		    if (!definition.keepChangeHistory) {
		      definition.errorFn('changeHistory is disabled for this resource!');
		    } else {
		      if (_resourceName) {
		        var item = definition.get(_id);
		        if (item) {
		          return resource.changeHistories[_id];
		        }
		      } else {
		        return resource.changeHistory;
		      }
		    }
		  },

		  // Re-compute the computed properties of the given item.
		  //
		  // @param resourceName The name of the type of resource of the item whose computed properties are to be re-computed.
		  // @param instance The instance whose computed properties are to be re-computed.
		  // @returns The item whose computed properties were re-computed.
		  compute: function compute(resourceName, instance) {
		    var _this = this;
		    var definition = _this.defs[resourceName];

		    instance = _utils['default'].resolveItem(_this.s[resourceName], instance);
		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (!instance) {
		      throw new R('Item not in the store!');
		    } else if (!_utils['default']._o(instance) && !_utils['default']._sn(instance)) {
		      throw new IA('"instance" must be an object, string or number!');
		    }

		    definition.logFn('compute', instance);

		    // re-compute all computed properties
		    _utils['default'].forOwn(definition.computed, function (fn, field) {
		      _utils['default'].compute.call(instance, fn, field);
		    });
		    return instance;
		  },

		  // Factory function to create an instance of the specified Resource.
		  //
		  // @param resourceName The name of the type of resource of which to create an instance.
		  // @param attrs Hash of properties with which to initialize the instance.
		  // @param options Optional configuration.
		  // @param options.defaults Default values with which to initialize the instance.
		  // @returns The new instance.
		  createInstance: function createInstance(resourceName, attrs, options) {
		    var definition = this.defs[resourceName];
		    var item = undefined;

		    attrs = attrs || {};

		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (attrs && !_utils['default'].isObject(attrs)) {
		      throw new IA('"attrs" must be an object!');
		    }

		    options = _utils['default']._(definition, options);
		    options.logFn('createInstance', attrs, options);

		    // lifecycle
		    options.beforeCreateInstance(options, attrs);

		    // grab instance constructor function from Resource definition
		    var Constructor = definition[definition['class']];

		    // create instance
		    item = new Constructor();

		    // add default values
		    if (options.defaultValues) {
		      _utils['default'].deepMixIn(item, options.defaultValues);
		    }
		    _utils['default'].deepMixIn(item, attrs);

		    // compute computed properties
		    if (definition.computed) {
		      definition.compute(item);
		    }
		    // lifecycle
		    options.afterCreateInstance(options, item);
		    return item;
		  },

		  // Create a new collection of the specified Resource.
		  //
		  // @param resourceName The name of the type of resource of which to create a collection
		  // @param arr Possibly empty array of data from which to create the collection.
		  // @param params The criteria by which to filter items. Will be passed to `DS#findAll` if `fetch` is called. See http://www.js-data.io/docs/query-syntax
		  // @param options Optional configuration.
		  // @param options.notify Whether to call the beforeCreateCollection and afterCreateCollection lifecycle hooks..
		  // @returns The new collection.
		  createCollection: function createCollection(resourceName, arr, params, options) {
		    var _this = this;
		    var definition = _this.defs[resourceName];

		    arr = arr || [];
		    params = params || {};

		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (arr && !_utils['default'].isArray(arr)) {
		      throw new IA('"arr" must be an array!');
		    }

		    options = _utils['default']._(definition, options);

		    options.logFn('createCollection', arr, options);

		    // lifecycle
		    options.beforeCreateCollection(options, arr);

		    // define the API for this collection
		    Object.defineProperties(arr, {
		      //  Call DS#findAll with the params of this collection, filling the collection with the results.
		      fetch: {
		        value: function value(params, options) {
		          var __this = this;
		          __this.params = params || __this.params;
		          return definition.findAll(__this.params, options).then(function (data) {
		            if (data === __this) {
		              return __this;
		            }
		            data.unshift(__this.length);
		            data.unshift(0);
		            __this.splice.apply(__this, data);
		            data.shift();
		            data.shift();
		            if (data.$$injected) {
		              _this.s[resourceName].queryData[_utils['default'].toJson(__this.params)] = __this;
		              __this.$$injected = true;
		            }
		            return __this;
		          });
		        }
		      },
		      // params for this collection. See http://www.js-data.io/docs/query-syntax
		      params: {
		        value: params,
		        writable: true
		      },
		      // name of the resource type of this collection
		      resourceName: {
		        value: resourceName
		      }
		    });

		    // lifecycle
		    options.afterCreateCollection(options, arr);
		    return arr;
		  },
		  defineResource: __webpack_require__(27),
		  digest: function digest() {
		    this.observe.Platform.performMicrotaskCheckpoint();
		  },
		  eject: __webpack_require__(28),
		  ejectAll: __webpack_require__(29),
		  filter: __webpack_require__(30),

		  // Return the item with the given primary key if its in the store.
		  //
		  // @param resourceName The name of the type of resource of the item to retrieve.
		  // @param id The primary key of the item to retrieve.
		  // @returns The item with the given primary key if it's in the store.
		  ///
		  get: function get(resourceName, id) {
		    var _check$call3 = check.call(this, 'get', resourceName, id);

		    var _this = _check$call3._this;
		    var _resourceName = _check$call3._resourceName;
		    var _id = _check$call3._id;

		    // return the item if it exists
		    return _this.s[_resourceName].index[_id];
		  },

		  // Return the items in the store that have the given primary keys.
		  //
		  // @param resourceName The name of the type of resource of the items to retrieve.
		  // @param ids The primary keys of the items to retrieve.
		  // @returns The items with the given primary keys if they're in the store.
		  getAll: function getAll(resourceName, ids) {
		    var _this = this;
		    var definition = _this.defs[resourceName];
		    var resource = _this.s[resourceName];
		    var collection = [];

		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (ids && !_utils['default']._a(ids)) {
		      throw _utils['default']._aErr('ids');
		    }

		    definition.logFn('getAll', ids);

		    if (_utils['default']._a(ids)) {
		      // return just the items with the given primary keys
		      var _length = ids.length;
		      for (var i = 0; i < _length; i++) {
		        if (resource.index[ids[i]]) {
		          collection.push(resource.index[ids[i]]);
		        }
		      }
		    } else {
		      // most efficient of retrieving ALL items from the store
		      collection = resource.collection.slice();
		    }

		    return collection;
		  },

		  // Return the whether the item with the given primary key has any changes.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns Whether the item with the given primary key has any changes.
		  hasChanges: function hasChanges(resourceName, id) {
		    var _check$call4 = check.call(this, 'hasChanges', resourceName, id);

		    var definition = _check$call4.definition;
		    var _id = _check$call4._id;

		    return definition.get(_id) ? diffIsEmpty(definition.changes(_id)) : false;
		  },
		  inject: __webpack_require__(31),

		  // Return the timestamp from the last time the item with the given primary key was changed.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns Timestamp from the last time the item was changed.
		  lastModified: function lastModified(resourceName, id) {
		    var _check$call5 = check.call(this, 'lastModified', resourceName, id || fakeId);

		    var _this = _check$call5._this;
		    var _resourceName = _check$call5._resourceName;
		    var _id = _check$call5._id;

		    var resource = _this.s[_resourceName];

		    if (_id) {
		      if (!(_id in resource.modified)) {
		        resource.modified[_id] = 0;
		      }
		      return resource.modified[_id];
		    }
		    return resource.collectionModified;
		  },

		  // Return the timestamp from the last time the item with the given primary key was saved via an adapter.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns Timestamp from the last time the item was saved.
		  lastSaved: function lastSaved(resourceName, id) {
		    var _check$call6 = check.call(this, 'lastSaved', resourceName, id || fakeId);

		    var _this = _check$call6._this;
		    var _resourceName = _check$call6._resourceName;
		    var _id = _check$call6._id;

		    var resource = _this.s[_resourceName];

		    if (!(_id in resource.saved)) {
		      resource.saved[_id] = 0;
		    }
		    return resource.saved[_id];
		  },

		  // Return the previous attributes of the item with the given primary key before it was changed.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns The previous attributes of the item
		  previous: function previous(resourceName, id) {
		    var _check$call7 = check.call(this, 'previous', resourceName, id);

		    var _this = _check$call7._this;
		    var _resourceName = _check$call7._resourceName;
		    var _id = _check$call7._id;

		    var resource = _this.s[_resourceName];

		    // return resource from cache
		    return resource.previousAttributes[_id] ? _utils['default'].copy(resource.previousAttributes[_id]) : undefined;
		  },

		  // Revert all attributes of the item with the given primary key to their previous values.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns The reverted item
		  revert: function revert(resourceName, id) {
		    var _check$call8 = check.call(this, 'revert', resourceName, id);

		    var _this = _check$call8._this;
		    var definition = _check$call8.definition;
		    var _resourceName = _check$call8._resourceName;
		    var _id = _check$call8._id;

		    return definition.inject(_this.previous(_resourceName, _id));
		  }
		};

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		exports['default'] = {
		  create: __webpack_require__(32),
		  destroy: __webpack_require__(33),
		  destroyAll: __webpack_require__(34),
		  find: __webpack_require__(35),
		  findAll: __webpack_require__(36),
		  loadRelations: __webpack_require__(37),
		  reap: __webpack_require__(38),
		  refresh: function refresh(resourceName, id, options) {
		    var _this = this;
		    var DSUtils = _this.utils;

		    return new DSUtils.Promise(function (resolve, reject) {
		      var definition = _this.defs[resourceName];
		      id = DSUtils.resolveId(_this.defs[resourceName], id);
		      if (!definition) {
		        reject(new _this.errors.NER(resourceName));
		      } else if (!DSUtils._sn(id)) {
		        reject(DSUtils._snErr('id'));
		      } else {
		        options = DSUtils._(definition, options);
		        options.bypassCache = true;
		        options.logFn('refresh', id, options);
		        resolve(_this.get(resourceName, id));
		      }
		    }).then(function (item) {
		      return item ? _this.find(resourceName, id, options) : item;
		    });
		  },
		  refreshAll: function refreshAll(resourceName, params, options) {
		    var _this = this;
		    var DSUtils = _this.utils;
		    var definition = _this.defs[resourceName];
		    params = params || {};

		    return new DSUtils.Promise(function (resolve, reject) {
		      if (!definition) {
		        reject(new _this.errors.NER(resourceName));
		      } else if (!DSUtils._o(params)) {
		        reject(DSUtils._oErr('params'));
		      } else {
		        options = DSUtils._(definition, options);
		        options.bypassCache = true;
		        options.logFn('refreshAll', params, options);
		        resolve(_this.filter(resourceName, params, options));
		      }
		    }).then(function (existing) {
		      options.bypassCache = true;
		      return _this.findAll(resourceName, params, options).then(function (found) {
		        DSUtils.forEach(existing, function (item) {
		          if (found.indexOf(item) === -1) {
		            definition.eject(item);
		          }
		        });
		        return found;
		      });
		    });
		  },
		  save: __webpack_require__(39),
		  update: __webpack_require__(40),
		  updateAll: __webpack_require__(41)
		};

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
		 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		 * Code distributed by Google as part of the polymer project is also
		 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		 */

		// Modifications
		// Copyright 2014-2015 Jason Dobry
		//
		// Summary of modifications:
		// Fixed use of "delete" keyword for IE8 compatibility
		// Exposed diffObjectFromOldObject on the exported object
		// Added the "equals" argument to diffObjectFromOldObject to be used to check equality
		// Added a way in diffObjectFromOldObject to ignore changes to certain properties
		// Removed all code related to:
		// - ArrayObserver
		// - ArraySplice
		// - PathObserver
		// - CompoundObserver
		// - Path
		// - ObserverTransform

		(function(global) {
		  var testingExposeCycleCount = global.testingExposeCycleCount;

		  // Detect and do basic sanity checking on Object/Array.observe.
		  function detectObjectObserve() {
		    if (typeof Object.observe !== 'function' ||
		        typeof Array.observe !== 'function') {
		      return false;
		    }

		    var records = [];

		    function callback(recs) {
		      records = recs;
		    }

		    var test = {};
		    var arr = [];
		    Object.observe(test, callback);
		    Array.observe(arr, callback);
		    test.id = 1;
		    test.id = 2;
		    delete test.id;
		    arr.push(1, 2);
		    arr.length = 0;

		    Object.deliverChangeRecords(callback);
		    if (records.length !== 5)
		      return false;

		    if (records[0].type != 'add' ||
		        records[1].type != 'update' ||
		        records[2].type != 'delete' ||
		        records[3].type != 'splice' ||
		        records[4].type != 'splice') {
		      return false;
		    }

		    Object.unobserve(test, callback);
		    Array.unobserve(arr, callback);

		    return true;
		  }

		  var hasObserve = detectObjectObserve();

		  var createObject = ('__proto__' in {}) ?
		    function(obj) { return obj; } :
		    function(obj) {
		      var proto = obj.__proto__;
		      if (!proto)
		        return obj;
		      var newObject = Object.create(proto);
		      Object.getOwnPropertyNames(obj).forEach(function(name) {
		        Object.defineProperty(newObject, name,
		                             Object.getOwnPropertyDescriptor(obj, name));
		      });
		      return newObject;
		    };

		  var MAX_DIRTY_CHECK_CYCLES = 1000;

		  function dirtyCheck(observer) {
		    var cycles = 0;
		    while (cycles < MAX_DIRTY_CHECK_CYCLES && observer.check_()) {
		      cycles++;
		    }
		    if (testingExposeCycleCount)
		      global.dirtyCheckCycleCount = cycles;

		    return cycles > 0;
		  }

		  function objectIsEmpty(object) {
		    for (var prop in object)
		      return false;
		    return true;
		  }

		  function diffIsEmpty(diff) {
		    return objectIsEmpty(diff.added) &&
		           objectIsEmpty(diff.removed) &&
		           objectIsEmpty(diff.changed);
		  }

		  function isBlacklisted(prop, bl) {
		    if (!bl || !bl.length) {
		      return false;
		    }
		    var matches;
		    for (var i = 0; i < bl.length; i++) {
		      if ((Object.prototype.toString.call(bl[i]) === '[object RegExp]' && bl[i].test(prop)) || bl[i] === prop) {
		        return matches = prop;
		      }
		    }
		    return !!matches;
		  }

		  function diffObjectFromOldObject(object, oldObject, equals, bl) {
		    var added = {};
		    var removed = {};
		    var changed = {};

		    for (var prop in oldObject) {
		      var newValue = object[prop];

		      if (isBlacklisted(prop, bl))
		        continue;

		      if (newValue !== undefined && (equals ? equals(newValue, oldObject[prop]) : newValue === oldObject[prop]))
		        continue;

		      if (!(prop in object)) {
		        removed[prop] = undefined;
		        continue;
		      }

		      if (equals ? !equals(newValue, oldObject[prop]) : newValue !== oldObject[prop])
		        changed[prop] = newValue;
		    }

		    for (var prop in object) {
		      if (prop in oldObject)
		        continue;

		      if (isBlacklisted(prop, bl))
		        continue;

		      added[prop] = object[prop];
		    }

		    if (Array.isArray(object) && object.length !== oldObject.length)
		      changed.length = object.length;

		    return {
		      added: added,
		      removed: removed,
		      changed: changed
		    };
		  }

		  var eomTasks = [];
		  function runEOMTasks() {
		    if (!eomTasks.length)
		      return false;

		    for (var i = 0; i < eomTasks.length; i++) {
		      eomTasks[i]();
		    }
		    eomTasks.length = 0;
		    return true;
		  }

		  var runEOM = hasObserve ? (function(){
		    return function(fn) {
		      return Promise.resolve().then(fn);
		    }
		  })() :
		  (function() {
		    return function(fn) {
		      eomTasks.push(fn);
		    };
		  })();

		  var observedObjectCache = [];

		  function newObservedObject() {
		    var observer;
		    var object;
		    var discardRecords = false;
		    var first = true;

		    function callback(records) {
		      if (observer && observer.state_ === OPENED && !discardRecords)
		        observer.check_(records);
		    }

		    return {
		      open: function(obs) {
		        if (observer)
		          throw Error('ObservedObject in use');

		        if (!first)
		          Object.deliverChangeRecords(callback);

		        observer = obs;
		        first = false;
		      },
		      observe: function(obj, arrayObserve) {
		        object = obj;
		        if (arrayObserve)
		          Array.observe(object, callback);
		        else
		          Object.observe(object, callback);
		      },
		      deliver: function(discard) {
		        discardRecords = discard;
		        Object.deliverChangeRecords(callback);
		        discardRecords = false;
		      },
		      close: function() {
		        observer = undefined;
		        Object.unobserve(object, callback);
		        observedObjectCache.push(this);
		      }
		    };
		  }

		  function getObservedObject(observer, object, arrayObserve) {
		    var dir = observedObjectCache.pop() || newObservedObject();
		    dir.open(observer);
		    dir.observe(object, arrayObserve);
		    return dir;
		  }

		  var UNOPENED = 0;
		  var OPENED = 1;
		  var CLOSED = 2;

		  var nextObserverId = 1;

		  function Observer() {
		    this.state_ = UNOPENED;
		    this.callback_ = undefined;
		    this.target_ = undefined; // TODO(rafaelw): Should be WeakRef
		    this.directObserver_ = undefined;
		    this.value_ = undefined;
		    this.id_ = nextObserverId++;
		  }

		  Observer.prototype = {
		    open: function(callback, target) {
		      if (this.state_ != UNOPENED)
		        throw Error('Observer has already been opened.');

		      addToAll(this);
		      this.callback_ = callback;
		      this.target_ = target;
		      this.connect_();
		      this.state_ = OPENED;
		      return this.value_;
		    },

		    close: function() {
		      if (this.state_ != OPENED)
		        return;

		      removeFromAll(this);
		      this.disconnect_();
		      this.value_ = undefined;
		      this.callback_ = undefined;
		      this.target_ = undefined;
		      this.state_ = CLOSED;
		    },

		    deliver: function() {
		      if (this.state_ != OPENED)
		        return;

		      dirtyCheck(this);
		    },

		    report_: function(changes) {
		      try {
		        this.callback_.apply(this.target_, changes);
		      } catch (ex) {
		        Observer._errorThrownDuringCallback = true;
		        console.error('Exception caught during observer callback: ' +
		                       (ex.stack || ex));
		      }
		    },

		    discardChanges: function() {
		      this.check_(undefined, true);
		      return this.value_;
		    }
		  }

		  var collectObservers = !hasObserve;
		  var allObservers;
		  Observer._allObserversCount = 0;

		  if (collectObservers) {
		    allObservers = [];
		  }

		  function addToAll(observer) {
		    Observer._allObserversCount++;
		    if (!collectObservers)
		      return;

		    allObservers.push(observer);
		  }

		  function removeFromAll(observer) {
		    Observer._allObserversCount--;
		  }

		  var runningMicrotaskCheckpoint = false;

		  global.Platform = global.Platform || {};

		  global.Platform.performMicrotaskCheckpoint = function() {
		    if (runningMicrotaskCheckpoint)
		      return;

		    if (!collectObservers)
		      return;

		    runningMicrotaskCheckpoint = true;

		    var cycles = 0;
		    var anyChanged, toCheck;

		    do {
		      cycles++;
		      toCheck = allObservers;
		      allObservers = [];
		      anyChanged = false;

		      for (var i = 0; i < toCheck.length; i++) {
		        var observer = toCheck[i];
		        if (observer.state_ != OPENED)
		          continue;

		        if (observer.check_())
		          anyChanged = true;

		        allObservers.push(observer);
		      }
		      if (runEOMTasks())
		        anyChanged = true;
		    } while (cycles < MAX_DIRTY_CHECK_CYCLES && anyChanged);

		    if (testingExposeCycleCount)
		      global.dirtyCheckCycleCount = cycles;

		    runningMicrotaskCheckpoint = false;
		  };

		  if (collectObservers) {
		    global.Platform.clearObservers = function() {
		      allObservers = [];
		    };
		  }

		  function ObjectObserver(object) {
		    Observer.call(this);
		    this.value_ = object;
		    this.oldObject_ = undefined;
		  }

		  ObjectObserver.prototype = createObject({
		    __proto__: Observer.prototype,

		    arrayObserve: false,

		    connect_: function(callback, target) {
		      if (hasObserve) {
		        this.directObserver_ = getObservedObject(this, this.value_,
		                                                 this.arrayObserve);
		      } else {
		        this.oldObject_ = this.copyObject(this.value_);
		      }

		    },

		    copyObject: function(object) {
		      var copy = Array.isArray(object) ? [] : {};
		      for (var prop in object) {
		        copy[prop] = object[prop];
		      };
		      if (Array.isArray(object))
		        copy.length = object.length;
		      return copy;
		    },

		    check_: function(changeRecords, skipChanges) {
		      var diff;
		      var oldValues;
		      if (hasObserve) {
		        if (!changeRecords)
		          return false;

		        oldValues = {};
		        diff = diffObjectFromChangeRecords(this.value_, changeRecords,
		                                           oldValues);
		      } else {
		        oldValues = this.oldObject_;
		        diff = diffObjectFromOldObject(this.value_, this.oldObject_);
		      }

		      if (diffIsEmpty(diff))
		        return false;

		      if (!hasObserve)
		        this.oldObject_ = this.copyObject(this.value_);

		      this.report_([
		        diff.added || {},
		        diff.removed || {},
		        diff.changed || {},
		        function(property) {
		          return oldValues[property];
		        }
		      ]);

		      return true;
		    },

		    disconnect_: function() {
		      if (hasObserve) {
		        this.directObserver_.close();
		        this.directObserver_ = undefined;
		      } else {
		        this.oldObject_ = undefined;
		      }
		    },

		    deliver: function() {
		      if (this.state_ != OPENED)
		        return;

		      if (hasObserve)
		        this.directObserver_.deliver(false);
		      else
		        dirtyCheck(this);
		    },

		    discardChanges: function() {
		      if (this.directObserver_)
		        this.directObserver_.deliver(true);
		      else
		        this.oldObject_ = this.copyObject(this.value_);

		      return this.value_;
		    }
		  });

		  var observerSentinel = {};

		  var expectedRecordTypes = {
		    add: true,
		    update: true,
		    'delete': true
		  };

		  function diffObjectFromChangeRecords(object, changeRecords, oldValues) {
		    var added = {};
		    var removed = {};

		    for (var i = 0; i < changeRecords.length; i++) {
		      var record = changeRecords[i];
		      if (!expectedRecordTypes[record.type]) {
		        console.error('Unknown changeRecord type: ' + record.type);
		        console.error(record);
		        continue;
		      }

		      if (!(record.name in oldValues))
		        oldValues[record.name] = record.oldValue;

		      if (record.type == 'update')
		        continue;

		      if (record.type == 'add') {
		        if (record.name in removed)
		          delete removed[record.name];
		        else
		          added[record.name] = true;

		        continue;
		      }

		      // type = 'delete'
		      if (record.name in added) {
		        delete added[record.name];
		        delete oldValues[record.name];
		      } else {
		        removed[record.name] = true;
		      }
		    }

		    for (var prop in added)
		      added[prop] = object[prop];

		    for (var prop in removed)
		      removed[prop] = undefined;

		    var changed = {};
		    for (var prop in oldValues) {
		      if (prop in added || prop in removed)
		        continue;

		      var newValue = object[prop];
		      if (oldValues[prop] !== newValue)
		        changed[prop] = newValue;
		    }

		    return {
		      added: added,
		      removed: removed,
		      changed: changed
		    };
		  }

		  // Export the observe-js object for **Node.js**, with backwards-compatibility
		  // for the old `require()` API. Also ensure `exports` is not a DOM Element.
		  // If we're in the browser, export as a global object.

		  global.Observer = Observer;
		  global.isBlacklisted = isBlacklisted;
		  global.Observer.runEOM_ = runEOM;
		  global.Observer.observerSentinel_ = observerSentinel; // for testing.
		  global.Observer.hasObjectObserve = hasObserve;
		  global.diffObjectFromOldObject = diffObjectFromOldObject;
		  global.ObjectObserver = ObjectObserver;

		})(exports);


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		/*!
		 * yabh
		 * @version 1.0.1 - Homepage <http://jmdobry.github.io/yabh/>
		 * @author Jason Dobry <jason.dobry@gmail.com>
		 * @copyright (c) 2015 Jason Dobry 
		 * @license MIT <https://github.com/jmdobry/yabh/blob/master/LICENSE>
		 * 
		 * @overview Yet another Binary Heap.
		 */
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory();
			else if(typeof define === 'function' && define.amd)
				define("yabh", factory);
			else if(typeof exports === 'object')
				exports["BinaryHeap"] = factory();
			else
				root["BinaryHeap"] = factory();
		})(this, function() {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};

		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {

		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};

		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;

		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {

			var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			Object.defineProperty(exports, '__esModule', {
			  value: true
			});
			/**
			 * @method bubbleUp
			 * @param {array} heap The heap.
			 * @param {function} weightFunc The weight function.
			 * @param {number} n The index of the element to bubble up.
			 */
			function bubbleUp(heap, weightFunc, n) {
			  var element = heap[n];
			  var weight = weightFunc(element);
			  // When at 0, an element can not go up any further.
			  while (n > 0) {
			    // Compute the parent element's index, and fetch it.
			    var parentN = Math.floor((n + 1) / 2) - 1;
			    var _parent = heap[parentN];
			    // If the parent has a lesser weight, things are in order and we
			    // are done.
			    if (weight >= weightFunc(_parent)) {
			      break;
			    } else {
			      heap[parentN] = element;
			      heap[n] = _parent;
			      n = parentN;
			    }
			  }
			}

			/**
			 * @method bubbleDown
			 * @param {array} heap The heap.
			 * @param {function} weightFunc The weight function.
			 * @param {number} n The index of the element to sink down.
			 */
			var bubbleDown = function bubbleDown(heap, weightFunc, n) {
			  var length = heap.length;
			  var node = heap[n];
			  var nodeWeight = weightFunc(node);

			  while (true) {
			    var child2N = (n + 1) * 2,
			        child1N = child2N - 1;
			    var swap = null;
			    if (child1N < length) {
			      var child1 = heap[child1N],
			          child1Weight = weightFunc(child1);
			      // If the score is less than our node's, we need to swap.
			      if (child1Weight < nodeWeight) {
			        swap = child1N;
			      }
			    }
			    // Do the same checks for the other child.
			    if (child2N < length) {
			      var child2 = heap[child2N],
			          child2Weight = weightFunc(child2);
			      if (child2Weight < (swap === null ? nodeWeight : weightFunc(heap[child1N]))) {
			        swap = child2N;
			      }
			    }

			    if (swap === null) {
			      break;
			    } else {
			      heap[n] = heap[swap];
			      heap[swap] = node;
			      n = swap;
			    }
			  }
			};

			var BinaryHeap = (function () {
			  function BinaryHeap(weightFunc, compareFunc) {
			    _classCallCheck(this, BinaryHeap);

			    if (!weightFunc) {
			      weightFunc = function (x) {
			        return x;
			      };
			    }
			    if (!compareFunc) {
			      compareFunc = function (x, y) {
			        return x === y;
			      };
			    }
			    if (typeof weightFunc !== 'function') {
			      throw new Error('BinaryHeap([weightFunc][, compareFunc]): "weightFunc" must be a function!');
			    }
			    if (typeof compareFunc !== 'function') {
			      throw new Error('BinaryHeap([weightFunc][, compareFunc]): "compareFunc" must be a function!');
			    }
			    this.weightFunc = weightFunc;
			    this.compareFunc = compareFunc;
			    this.heap = [];
			  }

			  _createClass(BinaryHeap, [{
			    key: 'push',
			    value: function push(node) {
			      this.heap.push(node);
			      bubbleUp(this.heap, this.weightFunc, this.heap.length - 1);
			    }
			  }, {
			    key: 'peek',
			    value: function peek() {
			      return this.heap[0];
			    }
			  }, {
			    key: 'pop',
			    value: function pop() {
			      var front = this.heap[0];
			      var end = this.heap.pop();
			      if (this.heap.length > 0) {
			        this.heap[0] = end;
			        bubbleDown(this.heap, this.weightFunc, 0);
			      }
			      return front;
			    }
			  }, {
			    key: 'remove',
			    value: function remove(node) {
			      var length = this.heap.length;
			      for (var i = 0; i < length; i++) {
			        if (this.compareFunc(this.heap[i], node)) {
			          var removed = this.heap[i];
			          var end = this.heap.pop();
			          if (i !== length - 1) {
			            this.heap[i] = end;
			            bubbleUp(this.heap, this.weightFunc, i);
			            bubbleDown(this.heap, this.weightFunc, i);
			          }
			          return removed;
			        }
			      }
			      return null;
			    }
			  }, {
			    key: 'removeAll',
			    value: function removeAll() {
			      this.heap = [];
			    }
			  }, {
			    key: 'size',
			    value: function size() {
			      return this.heap.length;
			    }
			  }]);

			  return BinaryHeap;
			})();

			exports['default'] = BinaryHeap;
			module.exports = exports['default'];

		/***/ }
		/******/ ])
		});
		;

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Array forEach
		     */
		    function forEach(arr, callback, thisObj) {
		        if (arr == null) {
		            return;
		        }
		        var i = -1,
		            len = arr.length;
		        while (++i < len) {
		            // we iterate over sparse items since there is no way to make it
		            // work properly on IE 7-8. see #64
		            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
		                break;
		            }
		        }
		    }

		    module.exports = forEach;




	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Create slice of source array or array-like object
		     */
		    function slice(arr, start, end){
		        var len = arr.length;

		        if (start == null) {
		            start = 0;
		        } else if (start < 0) {
		            start = Math.max(len + start, 0);
		        } else {
		            start = Math.min(start, len);
		        }

		        if (end == null) {
		            end = len;
		        } else if (end < 0) {
		            end = Math.max(len + end, 0);
		        } else {
		            end = Math.min(end, len);
		        }

		        var result = [];
		        while (start < end) {
		            result.push(arr[start++]);
		        }

		        return result;
		    }

		    module.exports = slice;




	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		var indexOf = __webpack_require__(21);

		    /**
		     * If array contains values.
		     */
		    function contains(arr, val) {
		        return indexOf(arr, val) !== -1;
		    }
		    module.exports = contains;



	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		var indexOf = __webpack_require__(21);

		    /**
		     * Remove a single item from the array.
		     * (it won't remove duplicates, just a single item)
		     */
		    function remove(arr, item){
		        var idx = indexOf(arr, item);
		        if (idx !== -1) arr.splice(idx, 1);
		    }

		    module.exports = remove;



	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Merge sort (http://en.wikipedia.org/wiki/Merge_sort)
		     */
		    function mergeSort(arr, compareFn) {
		        if (arr == null) {
		            return [];
		        } else if (arr.length < 2) {
		            return arr;
		        }

		        if (compareFn == null) {
		            compareFn = defaultCompare;
		        }

		        var mid, left, right;

		        mid   = ~~(arr.length / 2);
		        left  = mergeSort( arr.slice(0, mid), compareFn );
		        right = mergeSort( arr.slice(mid, arr.length), compareFn );

		        return merge(left, right, compareFn);
		    }

		    function defaultCompare(a, b) {
		        return a < b ? -1 : (a > b? 1 : 0);
		    }

		    function merge(left, right, compareFn) {
		        var result = [];

		        while (left.length && right.length) {
		            if (compareFn(left[0], right[0]) <= 0) {
		                // if 0 it should preserve same order (stable)
		                result.push(left.shift());
		            } else {
		                result.push(right.shift());
		            }
		        }

		        if (left.length) {
		            result.push.apply(result, left);
		        }

		        if (right.length) {
		            result.push.apply(result, right);
		        }

		        return result;
		    }

		    module.exports = mergeSort;




	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		var hasOwn = __webpack_require__(22);
		var forIn = __webpack_require__(23);

		    /**
		     * Similar to Array/forEach but works over object properties and fixes Don't
		     * Enum bug on IE.
		     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
		     */
		    function forOwn(obj, fn, thisObj){
		        forIn(obj, function(val, key){
		            if (hasOwn(obj, key)) {
		                return fn.call(thisObj, obj[key], key, obj);
		            }
		        });
		    }

		    module.exports = forOwn;




	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		var forOwn = __webpack_require__(13);
		var isPlainObject = __webpack_require__(24);

		    /**
		     * Mixes objects into the target object, recursively mixing existing child
		     * objects.
		     */
		    function deepMixIn(target, objects) {
		        var i = 0,
		            n = arguments.length,
		            obj;

		        while(++i < n){
		            obj = arguments[i];
		            if (obj) {
		                forOwn(obj, copyProp, target);
		            }
		        }

		        return target;
		    }

		    function copyProp(val, key) {
		        var existing = this[key];
		        if (isPlainObject(val) && isPlainObject(existing)) {
		            deepMixIn(existing, val);
		        } else {
		            this[key] = val;
		        }
		    }

		    module.exports = deepMixIn;




	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		var slice = __webpack_require__(9);

		    /**
		     * Return a copy of the object, filtered to only have values for the whitelisted keys.
		     */
		    function pick(obj, var_keys){
		        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
		            out = {},
		            i = 0, key;
		        while (key = keys[i++]) {
		            out[key] = obj[key];
		        }
		        return out;
		    }

		    module.exports = pick;




	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		var forOwn = __webpack_require__(13);

		    /**
		     * Get object keys
		     */
		     var keys = Object.keys || function (obj) {
		            var keys = [];
		            forOwn(obj, function(val, key){
		                keys.push(key);
		            });
		            return keys;
		        };

		    module.exports = keys;




	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var isPrimitive = __webpack_require__(25);

		    /**
		     * get "nested" object property
		     */
		    function get(obj, prop){
		        var parts = prop.split('.'),
		            last = parts.pop();

		        while (prop = parts.shift()) {
		            obj = obj[prop];
		            if (obj == null) return;
		        }

		        return obj[last];
		    }

		    module.exports = get;




	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var namespace = __webpack_require__(26);

		    /**
		     * set "nested" object property
		     */
		    function set(obj, prop, val){
		        var parts = (/^(.+)\.(.+)$/).exec(prop);
		        if (parts){
		            namespace(obj, parts[1])[parts[2]] = val;
		        } else {
		            obj[prop] = val;
		        }
		    }

		    module.exports = set;




	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		var camelCase = __webpack_require__(43);
		var upperCase = __webpack_require__(20);
		    /**
		     * camelCase + UPPERCASE first char
		     */
		    function pascalCase(str){
		        str = toString(str);
		        return camelCase(str).replace(/^[a-z]/, upperCase);
		    }

		    module.exports = pascalCase;



	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		    /**
		     * "Safer" String.toUpperCase()
		     */
		    function upperCase(str){
		        str = toString(str);
		        return str.toUpperCase();
		    }
		    module.exports = upperCase;



	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Array.indexOf
		     */
		    function indexOf(arr, item, fromIndex) {
		        fromIndex = fromIndex || 0;
		        if (arr == null) {
		            return -1;
		        }

		        var len = arr.length,
		            i = fromIndex < 0 ? len + fromIndex : fromIndex;
		        while (i < len) {
		            // we iterate over sparse items since there is no way to make it
		            // work properly on IE 7-8. see #64
		            if (arr[i] === item) {
		                return i;
		            }

		            i++;
		        }

		        return -1;
		    }

		    module.exports = indexOf;



	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Safer Object.hasOwnProperty
		     */
		     function hasOwn(obj, prop){
		         return Object.prototype.hasOwnProperty.call(obj, prop);
		     }

		     module.exports = hasOwn;




	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		var hasOwn = __webpack_require__(22);

		    var _hasDontEnumBug,
		        _dontEnums;

		    function checkDontEnum(){
		        _dontEnums = [
		                'toString',
		                'toLocaleString',
		                'valueOf',
		                'hasOwnProperty',
		                'isPrototypeOf',
		                'propertyIsEnumerable',
		                'constructor'
		            ];

		        _hasDontEnumBug = true;

		        for (var key in {'toString': null}) {
		            _hasDontEnumBug = false;
		        }
		    }

		    /**
		     * Similar to Array/forEach but works over object properties and fixes Don't
		     * Enum bug on IE.
		     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
		     */
		    function forIn(obj, fn, thisObj){
		        var key, i = 0;
		        // no need to check if argument is a real object that way we can use
		        // it for arrays, functions, date, etc.

		        //post-pone check till needed
		        if (_hasDontEnumBug == null) checkDontEnum();

		        for (key in obj) {
		            if (exec(fn, obj, key, thisObj) === false) {
		                break;
		            }
		        }


		        if (_hasDontEnumBug) {
		            var ctor = obj.constructor,
		                isProto = !!ctor && obj === ctor.prototype;

		            while (key = _dontEnums[i++]) {
		                // For constructor, if it is a prototype object the constructor
		                // is always non-enumerable unless defined otherwise (and
		                // enumerated above).  For non-prototype objects, it will have
		                // to be defined on this object, since it cannot be defined on
		                // any prototype objects.
		                //
		                // For other [[DontEnum]] properties, check if the value is
		                // different than Object prototype value.
		                if (
		                    (key !== 'constructor' ||
		                        (!isProto && hasOwn(obj, key))) &&
		                    obj[key] !== Object.prototype[key]
		                ) {
		                    if (exec(fn, obj, key, thisObj) === false) {
		                        break;
		                    }
		                }
		            }
		        }
		    }

		    function exec(fn, obj, key, thisObj){
		        return fn.call(thisObj, obj[key], key, obj);
		    }

		    module.exports = forIn;




	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Checks if the value is created by the `Object` constructor.
		     */
		    function isPlainObject(value) {
		        return (!!value && typeof value === 'object' &&
		            value.constructor === Object);
		    }

		    module.exports = isPlainObject;




	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Checks if the object is a primitive
		     */
		    function isPrimitive(value) {
		        // Using switch fallthrough because it's simple to read and is
		        // generally fast: http://jsperf.com/testing-value-is-primitive/5
		        switch (typeof value) {
		            case "string":
		            case "number":
		            case "boolean":
		                return true;
		        }

		        return value == null;
		    }

		    module.exports = isPrimitive;




	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		var forEach = __webpack_require__(8);

		    /**
		     * Create nested object if non-existent
		     */
		    function namespace(obj, path){
		        if (!path) return obj;
		        forEach(path.split('.'), function(key){
		            if (!obj[key]) {
		                obj[key] = {};
		            }
		            obj = obj[key];
		        });
		        return obj;
		    }

		    module.exports = namespace;




	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		/*jshint evil:true, loopfunc:true*/

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		/**
		 * These are DS methods that will be proxied by instances. e.g.
		 *
		 * var store = new JSData.DS();
		 * var User = store.defineResource('user');
		 * var user = User.createInstance({ id: 1 });
		 *
		 * store.update(resourceName, id, attrs[, options]) // DS method
		 * User.update(id, attrs[, options]) // DS method proxied on a Resource
		 * user.DSUpdate(attrs[, options]) // DS method proxied on an Instance
		 */
		var instanceMethods = ['compute', 'eject', 'refresh', 'save', 'update', 'destroy', 'loadRelations', 'changeHistory', 'changes', 'hasChanges', 'lastModified', 'lastSaved', 'previous', 'revert'];

		module.exports = function defineResource(definition) {
		  var _this = this;
		  var definitions = _this.defs;

		  /**
		   * This allows the name-only definition shorthand.
		   * store.defineResource('user') is the same as store.defineResource({ name: 'user'})
		   */
		  if (_utils['default']._s(definition)) {
		    definition = {
		      name: definition.replace(/\s/gi, '')
		    };
		  }
		  if (!_utils['default']._o(definition)) {
		    throw _utils['default']._oErr('definition');
		  } else if (!_utils['default']._s(definition.name)) {
		    throw new _errors['default'].IA('"name" must be a string!');
		  } else if (definitions[definition.name]) {
		    throw new _errors['default'].R(definition.name + ' is already registered!');
		  }

		  /**
		   * Dynamic Resource constructor function.
		   *
		   * A Resource inherits from the defaults of the data store that created it.
		   */
		  function Resource(options) {
		    this.defaultValues = {};
		    this.methods = {};
		    this.computed = {};
		    _utils['default'].deepMixIn(this, options);
		    var parent = _this.defaults;
		    if (definition['extends'] && definitions[definition['extends']]) {
		      parent = definitions[definition['extends']];
		    }
		    _utils['default'].fillIn(this.defaultValues, parent.defaultValues);
		    _utils['default'].fillIn(this.methods, parent.methods);
		    _utils['default'].fillIn(this.computed, parent.computed);
		    this.endpoint = 'endpoint' in options ? options.endpoint : this.name;
		  }

		  try {
		    var def;

		    var _class;

		    var _ret = (function () {
		      // Resources can inherit from another resource instead of inheriting directly from the data store defaults.
		      if (definition['extends'] && definitions[definition['extends']]) {
		        // Inherit from another resource
		        Resource.prototype = definitions[definition['extends']];
		      } else {
		        // Inherit from global defaults
		        Resource.prototype = _this.defaults;
		      }
		      definitions[definition.name] = new Resource(definition);

		      def = definitions[definition.name];

		      def.getResource = function (resourceName) {
		        return _this.defs[resourceName];
		      };

		      def.logFn('Preparing resource.');

		      if (!_utils['default']._s(def.idAttribute)) {
		        throw new _errors['default'].IA('"idAttribute" must be a string!');
		      }

		      // Setup nested parent configuration
		      if (def.relations) {
		        def.relationList = [];
		        def.relationFields = [];
		        _utils['default'].forOwn(def.relations, function (relatedModels, type) {
		          _utils['default'].forOwn(relatedModels, function (defs, relationName) {
		            if (!_utils['default']._a(defs)) {
		              relatedModels[relationName] = [defs];
		            }
		            _utils['default'].forEach(relatedModels[relationName], function (d) {
		              d.type = type;
		              d.relation = relationName;
		              d.name = def.name;
		              def.relationList.push(d);
		              if (d.localField) {
		                def.relationFields.push(d.localField);
		              }
		            });
		          });
		        });
		        if (def.relations.belongsTo) {
		          _utils['default'].forOwn(def.relations.belongsTo, function (relatedModel, modelName) {
		            _utils['default'].forEach(relatedModel, function (relation) {
		              if (relation.parent) {
		                def.parent = modelName;
		                def.parentKey = relation.localKey;
		                def.parentField = relation.localField;
		              }
		            });
		          });
		        }
		        if (typeof Object.freeze === 'function') {
		          Object.freeze(def.relations);
		          Object.freeze(def.relationList);
		        }
		      }

		      // Create the wrapper class for the new resource
		      _class = def['class'] = _utils['default'].pascalCase(def.name);

		      try {
		        if (typeof def.useClass === 'function') {
		          eval('function ' + _class + '() { def.useClass.call(this); }');
		          def[_class] = eval(_class);
		          def[_class].prototype = (function (proto) {
		            function Ctor() {}

		            Ctor.prototype = proto;
		            return new Ctor();
		          })(def.useClass.prototype);
		        } else {
		          eval('function ' + _class + '() {}');
		          def[_class] = eval(_class);
		        }
		      } catch (e) {
		        def[_class] = function () {};
		      }

		      // Apply developer-defined instance methods
		      _utils['default'].forOwn(def.methods, function (fn, m) {
		        def[_class].prototype[m] = fn;
		      });

		      /**
		       * var user = User.createInstance({ id: 1 });
		       * user.set('foo', 'bar');
		       */
		      def[_class].prototype.set = function (key, value) {
		        var _this2 = this;

		        _utils['default'].set(this, key, value);
		        def.compute(this);
		        if (def.instanceEvents) {
		          setTimeout(function () {
		            _this2.emit('DS.change', def, _this2);
		          }, 0);
		        }
		        def.handleChange(this);
		        return this;
		      };

		      /**
		       * var user = User.createInstance({ id: 1 });
		       * user.get('id'); // 1
		       */
		      def[_class].prototype.get = function (key) {
		        return _utils['default'].get(this, key);
		      };

		      if (def.instanceEvents) {
		        _utils['default'].Events(def[_class].prototype);
		      }

		      // Setup the relation links
		      _utils['default'].applyRelationGettersToTarget(_this, def, def[_class].prototype);

		      var parentOmit = null;
		      if (!def.hasOwnProperty('omit')) {
		        parentOmit = def.omit;
		        def.omit = [];
		      } else {
		        parentOmit = _this.defaults.omit;
		      }
		      def.omit = def.omit.concat(parentOmit || []);

		      // Prepare for computed properties
		      _utils['default'].forOwn(def.computed, function (fn, field) {
		        if (_utils['default'].isFunction(fn)) {
		          def.computed[field] = [fn];
		          fn = def.computed[field];
		        }
		        if (def.methods && field in def.methods) {
		          def.errorFn('Computed property "' + field + '" conflicts with previously defined prototype method!');
		        }
		        def.omit.push(field);
		        var deps;
		        if (fn.length === 1) {
		          var match = fn[0].toString().match(/function.*?\(([\s\S]*?)\)/);
		          deps = match[1].split(',');
		          def.computed[field] = deps.concat(fn);
		          fn = def.computed[field];
		          if (deps.length) {
		            def.errorFn('Use the computed property array syntax for compatibility with minified code!');
		          }
		        }
		        deps = fn.slice(0, fn.length - 1);
		        _utils['default'].forEach(deps, function (val, index) {
		          deps[index] = val.trim();
		        });
		        fn.deps = _utils['default'].filter(deps, function (dep) {
		          return !!dep;
		        });
		      });

		      // add instance proxies of DS methods
		      _utils['default'].forEach(instanceMethods, function (name) {
		        def[_class].prototype['DS' + _utils['default'].pascalCase(name)] = function () {
		          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		            args[_key] = arguments[_key];
		          }

		          args.unshift(this[def.idAttribute] || this);
		          args.unshift(def.name);
		          return _this[name].apply(_this, args);
		        };
		      });

		      // manually add instance proxy for DS#create
		      def[_class].prototype.DSCreate = function () {
		        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		          args[_key2] = arguments[_key2];
		        }

		        args.unshift(this);
		        args.unshift(def.name);
		        return _this.create.apply(_this, args);
		      };

		      // Initialize store data for the new resource
		      _this.s[def.name] = {
		        collection: [],
		        expiresHeap: new _utils['default'].BinaryHeap(function (x) {
		          return x.expires;
		        }, function (x, y) {
		          return x.item === y;
		        }),
		        completedQueries: {},
		        queryData: {},
		        pendingQueries: {},
		        index: {},
		        modified: {},
		        saved: {},
		        previousAttributes: {},
		        observers: {},
		        changeHistories: {},
		        changeHistory: [],
		        collectionModified: 0
		      };

		      var resource = _this.s[def.name];

		      // start the reaping
		      if (def.reapInterval) {
		        setInterval(function () {
		          return def.reap();
		        }, def.reapInterval);
		      }

		      // proxy DS methods with shorthand ones
		      var fns = ['registerAdapter', 'getAdapterName', 'getAdapter', 'is', '!clear'];
		      for (var key in _this) {
		        if (typeof _this[key] === 'function') {
		          fns.push(key);
		        }
		      }

		      /**
		       * Create the Resource shorthands that proxy DS methods. e.g.
		       *
		       * var store = new JSData.DS();
		       * var User = store.defineResource('user');
		       *
		       * store.update(resourceName, id, attrs[, options]) // DS method
		       * User.update(id, attrs[, options]) // DS method proxied on a Resource
		       */
		      _utils['default'].forEach(fns, function (key) {
		        var k = key;
		        if (k[0] === '!') {
		          return;
		        }
		        if (_this[k].shorthand !== false) {
		          def[k] = function () {
		            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		              args[_key3] = arguments[_key3];
		            }

		            args.unshift(def.name);
		            return _this[k].apply(_this, args);
		          };
		          def[k].before = function (fn) {
		            var orig = def[k];
		            def[k] = function () {
		              for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		                args[_key4] = arguments[_key4];
		              }

		              return orig.apply(def, fn.apply(def, args) || args);
		            };
		          };
		        } else {
		          def[k] = function () {
		            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
		              args[_key5] = arguments[_key5];
		            }

		            return _this[k].apply(_this, args);
		          };
		        }
		      });

		      def.beforeValidate = _utils['default'].promisify(def.beforeValidate);
		      def.validate = _utils['default'].promisify(def.validate);
		      def.afterValidate = _utils['default'].promisify(def.afterValidate);
		      def.beforeCreate = _utils['default'].promisify(def.beforeCreate);
		      def.afterCreate = _utils['default'].promisify(def.afterCreate);
		      def.beforeUpdate = _utils['default'].promisify(def.beforeUpdate);
		      def.afterUpdate = _utils['default'].promisify(def.afterUpdate);
		      def.beforeDestroy = _utils['default'].promisify(def.beforeDestroy);
		      def.afterDestroy = _utils['default'].promisify(def.afterDestroy);

		      var defaultAdapter = undefined;
		      if (def.hasOwnProperty('defaultAdapter')) {
		        defaultAdapter = def.defaultAdapter;
		      }

		      // setup "actions"
		      _utils['default'].forOwn(def.actions, function (action, name) {
		        if (def[name] && !def.actions[name]) {
		          throw new Error('Cannot override existing method "' + name + '"!');
		        }
		        action.request = action.request || function (config) {
		          return config;
		        };
		        action.response = action.response || function (response) {
		          return response;
		        };
		        action.responseError = action.responseError || function (err) {
		          return _utils['default'].Promise.reject(err);
		        };
		        def[name] = function (id, options) {
		          if (_utils['default']._o(id)) {
		            options = id;
		          }
		          options = options || {};
		          var adapter = def.getAdapter(action.adapter || defaultAdapter || 'http');
		          var config = _utils['default'].deepMixIn({}, action);
		          if (!options.hasOwnProperty('endpoint') && config.endpoint) {
		            options.endpoint = config.endpoint;
		          }
		          if (typeof options.getEndpoint === 'function') {
		            config.url = options.getEndpoint(def, options);
		          } else {
		            var args = [options.basePath || adapter.defaults.basePath || def.basePath, adapter.getEndpoint(def, _utils['default']._sn(id) ? id : null, options)];
		            if (_utils['default']._sn(id)) {
		              args.push(id);
		            }
		            args.push(action.pathname || name);
		            config.url = _utils['default'].makePath.apply(null, args);
		          }
		          config.method = config.method || 'GET';
		          _utils['default'].deepMixIn(config, options);
		          return new _utils['default'].Promise(function (r) {
		            return r(config);
		          }).then(options.request || action.request).then(function (config) {
		            return adapter.HTTP(config);
		          }).then(options.response || action.response, options.responseError || action.responseError);
		        };
		      });

		      // mix in events
		      _utils['default'].Events(def);

		      def.handleChange = function (data) {
		        resource.collectionModified = _utils['default'].updateTimestamp(resource.collectionModified);
		        if (def.notify) {
		          setTimeout(function () {
		            def.emit('DS.change', def, data);
		          }, 0);
		        }
		      };

		      def.logFn('Done preparing resource.');

		      return {
		        v: def
		      };
		    })();

		    if (typeof _ret === 'object') return _ret.v;
		  } catch (err) {
		    _this.defaults.errorFn(err);
		    delete definitions[definition.name];
		    delete _this.s[definition.name];
		    throw err;
		  }
		};

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Eject an item from the store, if it is currently in the store.
		 *
		 * @param resourceName The name of the resource type of the item eject.
		 * @param id The primary key of the item to eject.
		 * @param options Optional configuration.
		 * @param options.notify Whether to emit the "DS.beforeEject" and "DS.afterEject" events
		 * @param options.clearEmptyQueries Whether to remove cached findAll queries that become empty as a result of this method call.
		 * @returns The ejected item if one was ejected.
		 */
		module.exports = function eject(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var item = undefined;
		  var found = false;

		  id = DSUtils.resolveId(definition, id);

		  if (!definition) {
		    throw new _this.errors.NER(resourceName);
		  } else if (!DSUtils._sn(id)) {
		    throw DSUtils._snErr('id');
		  }

		  options = DSUtils._(definition, options);

		  options.logFn('eject', id, options);

		  // find the item to eject
		  for (var i = 0; i < resource.collection.length; i++) {
		    if (resource.collection[i][definition.idAttribute] == id) {
		      // jshint ignore:line
		      item = resource.collection[i];
		      // remove its expiration timestamp
		      resource.expiresHeap.remove(item);
		      found = true;
		      break;
		    }
		  }
		  if (found) {
		    var _ret = (function () {
		      // lifecycle
		      definition.beforeEject(options, item);
		      if (options.notify) {
		        definition.emit('DS.beforeEject', definition, item);
		      }

		      // find the item in any ($$injected) cached queries
		      var toRemove = [];
		      DSUtils.forOwn(resource.queryData, function (items, queryHash) {
		        if (items.$$injected) {
		          DSUtils.remove(items, item);
		        }
		        // optionally remove any empty queries
		        if (!items.length && options.clearEmptyQueries) {
		          toRemove.push(queryHash);
		        }
		      });

		      // clean up
		      DSUtils.forEach(resource.changeHistories[id], function (changeRecord) {
		        DSUtils.remove(resource.changeHistory, changeRecord);
		      });
		      DSUtils.forEach(toRemove, function (queryHash) {
		        delete resource.completedQueries[queryHash];
		        delete resource.queryData[queryHash];
		      });
		      if (DSUtils.w) {
		        // stop observation
		        resource.observers[id].close();
		      }
		      delete resource.observers[id];
		      delete resource.index[id];
		      delete resource.previousAttributes[id];
		      delete resource.completedQueries[id];
		      delete resource.pendingQueries[id];
		      delete resource.changeHistories[id];
		      delete resource.modified[id];
		      delete resource.saved[id];

		      // remove it from the store
		      resource.collection.splice(i, 1);
		      // collection has been modified
		      definition.handleChange(item);

		      // lifecycle
		      definition.afterEject(options, item);
		      if (options.notify) {
		        definition.emit('DS.afterEject', definition, item);
		      }

		      return {
		        v: item
		      };
		    })();

		    if (typeof _ret === 'object') return _ret.v;
		  }
		};

	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Eject a collection of items from the store, if any items currently in the store match the given criteria.
		 *
		 * @param resourceName The name of the resource type of the items eject.
		 * @param params The criteria by which to match items to eject. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @returns The collection of items that were ejected, if any.
		 */
		module.exports = function ejectAll(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  params = params || {};

		  if (!definition) {
		    throw new _this.errors.NER(resourceName);
		  } else if (!DSUtils._o(params)) {
		    throw DSUtils._oErr('params');
		  }

		  definition.logFn('ejectAll', params, options);

		  var resource = _this.s[resourceName];
		  var queryHash = DSUtils.toJson(params);

		  // get items that match the criteria
		  var items = definition.filter(params);

		  if (DSUtils.isEmpty(params)) {
		    // remove all completed queries if ejecting all items
		    resource.completedQueries = {};
		  } else {
		    // remove matching completed query, if any
		    delete resource.completedQueries[queryHash];
		  }
		  // prepare to remove matching items
		  DSUtils.forEach(items, function (item) {
		    if (item && item[definition.idAttribute]) {
		      definition.eject(item[definition.idAttribute], options);
		    }
		  });
		  // collection has been modified
		  definition.handleChange(items);
		  return items;
		};

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Return the subset of items currently in the store that match the given criteria.
		 *
		 * The actual filtering is delegated to DS#defaults.defaultFilter, which can be overridden by developers.
		 *
		 * @param resourceName The name of the resource type of the items to filter.
		 * @param params The criteria by which to filter items. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @returns Matching items.
		 */
		module.exports = function filter(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];

		  if (!definition) {
		    throw new _this.errors.NER(resourceName);
		  } else if (params && !DSUtils._o(params)) {
		    throw DSUtils._oErr('params');
		  }

		  // Protect against null
		  params = params || {};
		  options = DSUtils._(definition, options);
		  options.logFn('filter', params, options);

		  // delegate filtering to DS#defaults.defaultFilter, which can be overridden by developers.
		  return definition.defaultFilter.call(_this, _this.s[resourceName].collection, resourceName, params, options);
		};

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		/**
		 * This is a beast of a file, but it's where a significant portion of the magic happens.
		 *
		 * DS#inject makes up the core of how data gets into the store.
		 */

		/**
		 * This factory function produces an observer handler function tailor-made for the current item being injected.
		 *
		 * The observer handler is what allows computed properties and change tracking to function.
		 *
		 * @param definition Resource definition produced by DS#defineResource
		 * @param resource Resource data as internally stored by the data store
		 * @returns {Function} Observer handler function
		 * @private
		 */
		function makeObserverHandler(definition, resource) {
		  var DS = this;

		  // using "var" avoids a JSHint error
		  var name = definition.name;

		  /**
		   * This will be called by observe-js when a new change record is available for the observed object
		   *
		   * @param added Change record for added properties
		   * @param removed Change record for removed properties
		   * @param changed Change record for changed properties
		   * @param oldValueFn Function that can be used to get the previous value of a changed property
		   * @param firstTime Whether this is the first time this function is being called for the given item. Will only be true once.
		   */
		  return function _react(added, removed, changed, oldValueFn, firstTime) {
		    var target = this;
		    var item = undefined;

		    // Get the previous primary key of the observed item, in-case some knucklehead changed it
		    var innerId = oldValueFn && oldValueFn(definition.idAttribute) ? oldValueFn(definition.idAttribute) : target[definition.idAttribute];

		    // Ignore changes to relation links
		    _utils['default'].forEach(definition.relationFields, function (field) {
		      delete added[field];
		      delete removed[field];
		      delete changed[field];
		    });

		    // Detect whether there are actually any changes
		    if (!_utils['default'].isEmpty(added) || !_utils['default'].isEmpty(removed) || !_utils['default'].isEmpty(changed) || firstTime) {
		      item = DS.get(name, innerId);

		      // update item and collection "modified" timestamps
		      resource.modified[innerId] = _utils['default'].updateTimestamp(resource.modified[innerId]);

		      if (item && definition.instanceEvents) {
		        setTimeout(function () {
		          item.emit('DS.change', definition, item);
		        }, 0);
		      }

		      definition.handleChange(item);

		      // Save a change record for the item
		      if (definition.keepChangeHistory) {
		        var changeRecord = {
		          resourceName: name,
		          target: item,
		          added: added,
		          removed: removed,
		          changed: changed,
		          timestamp: resource.modified[innerId]
		        };
		        resource.changeHistories[innerId].push(changeRecord);
		        resource.changeHistory.push(changeRecord);
		      }
		    }

		    // Recompute computed properties if any computed properties depend on changed properties
		    if (definition.computed) {
		      item = item || DS.get(name, innerId);
		      _utils['default'].forOwn(definition.computed, function (fn, field) {
		        var compute = false;
		        // check if required fields changed
		        _utils['default'].forEach(fn.deps, function (dep) {
		          if (dep in added || dep in removed || dep in changed || !(field in item)) {
		            compute = true;
		          }
		        });
		        compute = compute || !fn.deps.length;
		        if (compute) {
		          _utils['default'].compute.call(item, fn, field);
		        }
		      });
		    }

		    if (definition.idAttribute in changed) {
		      definition.errorFn('Doh! You just changed the primary key of an object! Your data for the "' + name + '" resource is now in an undefined (probably broken) state.');
		    }
		  };
		}

		/**
		 * A recursive function for injecting data into the store.
		 *
		 * @param definition Resource definition produced by DS#defineResource
		 * @param resource Resource data as internally stored by the data store
		 * @param attrs The data to be injected. Will be an object or an array of objects.
		 * @param options Optional configuration.
		 * @returns The injected data
		 * @private
		 */
		function _inject(definition, resource, attrs, options) {
		  var _this = this;
		  var injected = undefined;

		  if (_utils['default']._a(attrs)) {
		    // have an array of objects, go ahead and inject each one individually and return the resulting array
		    injected = [];
		    for (var i = 0; i < attrs.length; i++) {
		      injected.push(_inject.call(_this, definition, resource, attrs[i], options));
		    }
		  } else {
		    // create the observer handler for the data to be injected
		    var _react = makeObserverHandler.call(_this, definition, resource);

		    // check if "idAttribute" is a computed property
		    var c = definition.computed;
		    var idA = definition.idAttribute;
		    // compute the primary key if necessary
		    if (c && c[idA]) {
		      (function () {
		        var args = [];
		        _utils['default'].forEach(c[idA].deps, function (dep) {
		          args.push(attrs[dep]);
		        });
		        attrs[idA] = c[idA][c[idA].length - 1].apply(attrs, args);
		      })();
		    }

		    if (!(idA in attrs)) {
		      // we cannot inject any object into the store that does not have a primary key!
		      var error = new _errors['default'].R(definition.name + '.inject: "attrs" must contain the property specified by "idAttribute"!');
		      options.errorFn(error);
		      throw error;
		    } else {
		      try {
		        (function () {
		          // when injecting object that contain their nested relations, this code
		          // will recursively inject them into their proper places in the data store.
		          // Magic!
		          _utils['default'].forEach(definition.relationList, function (def) {
		            var relationName = def.relation;
		            var relationDef = _this.defs[relationName];
		            var toInject = attrs[def.localField];
		            if (toInject) {
		              if (!relationDef) {
		                throw new _errors['default'].R(definition.name + ' relation is defined but the resource is not!');
		              }
		              // handle injecting hasMany relations
		              if (_utils['default']._a(toInject)) {
		                (function () {
		                  var items = [];
		                  _utils['default'].forEach(toInject, function (toInjectItem) {
		                    if (toInjectItem !== _this.s[relationName].index[toInjectItem[relationDef.idAttribute]]) {
		                      try {
		                        var injectedItem = relationDef.inject(toInjectItem, options.orig());
		                        if (def.foreignKey) {
		                          _utils['default'].set(injectedItem, def.foreignKey, attrs[definition.idAttribute]);
		                        }
		                        items.push(injectedItem);
		                      } catch (err) {
		                        options.errorFn(err, 'Failed to inject ' + def.type + ' relation: "' + relationName + '"!');
		                      }
		                    }
		                  });
		                })();
		              } else {
		                // handle injecting belongsTo and hasOne relations
		                if (toInject !== _this.s[relationName].index[toInject[relationDef.idAttribute]]) {
		                  try {
		                    var _injected = relationDef.inject(attrs[def.localField], options.orig());
		                    if (def.foreignKey) {
		                      _utils['default'].set(_injected, def.foreignKey, attrs[definition.idAttribute]);
		                    }
		                  } catch (err) {
		                    options.errorFn(err, 'Failed to inject ' + def.type + ' relation: "' + relationName + '"!');
		                  }
		                }
		              }
		            }
		          });

		          // primary key of item being injected
		          var id = attrs[idA];
		          // item being injected
		          var item = definition.get(id);
		          // 0 if the item is new, otherwise the previous last modified timestamp of the item
		          var initialLastModified = item ? resource.modified[id] : 0;

		          // item is new
		          if (!item) {
		            if (attrs instanceof definition[definition['class']]) {
		              item = attrs;
		            } else {
		              item = new definition[definition['class']]();
		            }
		            // remove relation properties from the item, since those relations have been injected by now
		            _utils['default'].forEach(definition.relationList, function (def) {
		              delete attrs[def.localField];
		            });
		            // copy remaining properties to the injected item
		            _utils['default'].deepMixIn(item, attrs);

		            // add item to collection
		            resource.collection.push(item);
		            resource.changeHistories[id] = [];

		            // If we're in the browser, start observation
		            if (_utils['default'].w) {
		              resource.observers[id] = new _this.observe.ObjectObserver(item);
		              resource.observers[id].open(_react, item);
		            }

		            // index item
		            resource.index[id] = item;
		            // fire observation handler for the first time
		            _react.call(item, {}, {}, {}, null, true);
		            // save "previous" attributes of the injected item, for change diffs later
		            resource.previousAttributes[id] = _utils['default'].copy(item, null, null, null, definition.relationFields);
		          } else {
		            // item is being re-injected
		            // new properties take precedence
		            if (options.onConflict === 'merge') {
		              _utils['default'].deepMixIn(item, attrs);
		            } else if (options.onConflict === 'replace') {
		              _utils['default'].forOwn(item, function (v, k) {
		                if (k !== definition.idAttribute) {
		                  if (!attrs.hasOwnProperty(k)) {
		                    delete item[k];
		                  }
		                }
		              });
		              _utils['default'].forOwn(attrs, function (v, k) {
		                if (k !== definition.idAttribute) {
		                  item[k] = v;
		                }
		              });
		            }

		            if (definition.resetHistoryOnInject) {
		              // clear change history for item
		              resource.previousAttributes[id] = _utils['default'].copy(item, null, null, null, definition.relationFields);
		              if (resource.changeHistories[id].length) {
		                _utils['default'].forEach(resource.changeHistories[id], function (changeRecord) {
		                  _utils['default'].remove(resource.changeHistory, changeRecord);
		                });
		                resource.changeHistories[id].splice(0, resource.changeHistories[id].length);
		              }
		            }
		            if (_utils['default'].w) {
		              // force observation callback to be fired if there are any changes to the item and `Object.observe` is not available
		              resource.observers[id].deliver();
		            }
		          }
		          // update modified timestamp of item
		          resource.modified[id] = initialLastModified && resource.modified[id] === initialLastModified ? _utils['default'].updateTimestamp(resource.modified[id]) : resource.modified[id];

		          // reset expiry tracking for item
		          resource.expiresHeap.remove(item);
		          var timestamp = new Date().getTime();
		          resource.expiresHeap.push({
		            item: item,
		            timestamp: timestamp,
		            expires: definition.maxAge ? timestamp + definition.maxAge : Number.MAX_VALUE
		          });

		          // final injected item
		          injected = item;
		        })();
		      } catch (err) {
		        options.errorFn(err, attrs);
		      }
		    }
		  }
		  return injected;
		}

		/**
		 * Inject the given object or array of objects into the data store.
		 *
		 * @param resourceName The name of the type of resource of the data to be injected.
		 * @param attrs Object or array of objects. Objects must contain a primary key.
		 * @param options Optional configuration.
		 * @param options.notify Whether to emit the "DS.beforeInject" and "DS.afterInject" events.
		 * @returns The injected data.
		 */
		module.exports = function inject(resourceName, attrs, options) {
		  var _this = this;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var injected = undefined;

		  if (!definition) {
		    throw new _errors['default'].NER(resourceName);
		  } else if (!_utils['default']._o(attrs) && !_utils['default']._a(attrs)) {
		    throw new _errors['default'].IA(resourceName + '.inject: "attrs" must be an object or an array!');
		  }

		  options = _utils['default']._(definition, options);
		  options.logFn('inject', attrs, options);

		  // lifecycle
		  options.beforeInject(options, attrs);
		  if (options.notify) {
		    definition.emit('DS.beforeInject', definition, attrs);
		  }

		  // start the recursive injection of data
		  injected = _inject.call(_this, definition, resource, attrs, options);

		  // collection was modified
		  definition.handleChange(injected);

		  // lifecycle
		  options.afterInject(options, injected);
		  if (options.notify) {
		    definition.emit('DS.afterInject', definition, injected);
		  }

		  return injected;
		};

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Using an adapter, create a new item.
		 *
		 * Generally a primary key will NOT be provided in the properties hash,
		 * because the adapter's persistence layer should be generating one.
		 *
		 * @param resourceName The name of the type of resource of the new item.
		 * @param attrs Hash of properties with which to create the new item.
		 * @param options Optional configuration.
		 * @param options.cacheResponse Whether the newly created item as returned by the adapter should be injected into the data store.
		 * @param options.upsert If the properties hash contains a primary key, attempt to call DS#update instead.
		 * @param options.notify Whether to emit the "DS.beforeCreate" and "DS.afterCreate" events.
		 * @param options.beforeValidate Lifecycle hook.
		 * @param options.validate Lifecycle hook.
		 * @param options.afterValidate Lifecycle hook.
		 * @param options.beforeCreate Lifecycle hook.
		 * @param options.afterCreate Lifecycle hook.
		 */
		module.exports = function create(resourceName, attrs, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var adapter = undefined;

		  options = options || {};
		  attrs = attrs || {};

		  var rejectionError = undefined;
		  if (!definition) {
		    rejectionError = new _this.errors.NER(resourceName);
		  } else if (!DSUtils._o(attrs)) {
		    rejectionError = DSUtils._oErr('attrs');
		  } else {
		    options = DSUtils._(definition, options);
		    if (options.upsert && DSUtils._sn(attrs[definition.idAttribute])) {
		      return _this.update(resourceName, attrs[definition.idAttribute], attrs, options);
		    }
		    options.logFn('create', attrs, options);
		  }

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (rejectionError) {
		      reject(rejectionError);
		    } else {
		      resolve(attrs);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeCreate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeCreate', definition, attrs);
		    }
		    adapter = _this.getAdapterName(options);
		    return _this.adapters[adapter].create(definition, DSUtils.omit(attrs, options.omit), options);
		  }).then(function (attrs) {
		    return options.afterCreate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.afterCreate', definition, attrs);
		    }
		    if (options.cacheResponse) {
		      // injected created intem into the store
		      var created = _this.inject(definition.name, attrs, options.orig());
		      var id = created[definition.idAttribute];
		      // mark item's `find` query as completed, so a subsequent `find` call for this item will resolve immediately
		      var resource = _this.s[resourceName];
		      resource.completedQueries[id] = new Date().getTime();
		      resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		      return created;
		    } else {
		      // just return an un-injected instance
		      return _this.createInstance(resourceName, attrs, options);
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  });
		};

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Using an adapter, destroy an item.
		 *
		 * @param resourceName The name of the type of resource of the item to destroy.
		 * @param id The primary key of the item to destroy.
		 * @param options Optional configuration.
		 * @param options.eagerEject Whether to eject the item from the store before the adapter operation completes, re-injecting if the adapter operation fails.
		 * @param options.notify Whether to emit the "DS.beforeDestroy" and "DS.afterDestroy" events.
		 * @param options.beforeDestroy Lifecycle hook.
		 * @param options.afterDestroy Lifecycle hook.
		 * @returns The primary key of the destroyed item.
		 */
		module.exports = function destroy(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var item = undefined;
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    id = DSUtils.resolveId(definition, id);
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else {
		      // check if the item is in the store
		      item = definition.get(id) || { id: id };
		      options = DSUtils._(definition, options);
		      options.logFn('destroy', id, options);
		      resolve(item);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeDestroy.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeDestroy', definition, attrs);
		    }
		    // don't wait for the adapter, remove the item from the store
		    if (options.eagerEject) {
		      definition.eject(id);
		    }
		    adapter = definition.getAdapter(options);
		    return adapter.destroy(definition, id, options);
		  }).then(function () {
		    return options.afterDestroy.call(item, options, item);
		  }).then(function (item) {
		    if (options.notify) {
		      definition.emit('DS.afterDestroy', definition, item);
		    }
		    // make sure the item is removed from the store
		    definition.eject(id);
		    return DSUtils.respond(id, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    // rollback by re-injecting the item into the store
		    if (options && options.eagerEject && item) {
		      definition.inject(item, { notify: false });
		    }
		    return DSUtils.Promise.reject(err);
		  });
		};

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Using an adapter, destroy an item.
		 *
		 * @param resourceName The name of the type of resource of the item to destroy.
		 * @param params The criteria by which to filter items to destroy. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @param options.eagerEject Whether to eject the items from the store before the adapter operation completes, re-injecting if the adapter operation fails.
		 * @param options.notify Whether to emit the "DS.beforeDestroy" and "DS.afterDestroy" events.
		 * @param options.beforeDestroy Lifecycle hook.
		 * @param options.afterDestroy Lifecycle hook.
		 * @returns The ejected items, if any.
		 */
		module.exports = function destroyAll(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var ejected = undefined,
		      toEject = undefined,
		      adapter = undefined;

		  params = params || {};

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._o(params)) {
		      reject(DSUtils._oErr('attrs'));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('destroyAll', params, options);
		      resolve();
		    }
		  }).then(function () {
		    // find items that are to be ejected from the store
		    toEject = definition.defaultFilter.call(_this, resourceName, params);
		    return options.beforeDestroy(options, toEject);
		  }).then(function () {
		    if (options.notify) {
		      definition.emit('DS.beforeDestroy', definition, toEject);
		    }
		    // don't wait for the adapter, remove the items from the store
		    if (options.eagerEject) {
		      ejected = definition.ejectAll(params);
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].destroyAll(definition, params, options);
		  }).then(function () {
		    return options.afterDestroy(options, toEject);
		  }).then(function () {
		    if (options.notify) {
		      definition.emit('DS.afterDestroy', definition, toEject);
		    }
		    // make sure items are removed from the store
		    return ejected || definition.ejectAll(params);
		  }).then(function (items) {
		    return DSUtils.respond(items, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    // rollback by re-injecting the items into the store
		    if (options && options.eagerEject && ejected) {
		      definition.inject(ejected, { notify: false });
		    }
		    return DSUtils.Promise.reject(err);
		  });
		};

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		/* jshint -W082 */

		/**
		 * Using an adapter, retrieve a single item.
		 *
		 * @param resourceName The of the type of resource of the item to retrieve.
		 * @param id The primary key of the item to retrieve.
		 * @param options Optional configuration.
		 * @param options.bypassCache Whether to ignore any cached item and force the retrieval through the adapter.
		 * @param options.cacheResponse Whether to inject the found item into the data store.
		 * @param options.strictCache Whether to only consider items to be "cached" if they were injected into the store as the result of `find` or `findAll`.
		 * @param options.strategy The retrieval strategy to use.
		 * @param options.findStrategy The retrieval strategy to use. Overrides "strategy".
		 * @param options.fallbackAdapters Array of names of adapters to use if using "fallback" strategy.
		 * @param options.findFallbackAdapters Array of names of adapters to use if using "fallback" strategy. Overrides "fallbackAdapters".
		 * @returns The item.
		 */
		module.exports = function find(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('find', id, options);

		      if (options.params) {
		        options.params = DSUtils.copy(options.params);
		      }

		      if (options.bypassCache || !options.cacheResponse) {
		        delete resource.completedQueries[id];
		      }
		      if ((!options.findStrictCache || id in resource.completedQueries) && definition.get(id) && !options.bypassCache) {
		        // resolve immediately with the cached item
		        resolve(definition.get(id));
		      } else {
		        // we're going to delegate to the adapter next
		        delete resource.completedQueries[id];
		        resolve();
		      }
		    }
		  }).then(function (item) {
		    if (!item) {
		      if (!(id in resource.pendingQueries)) {
		        var promise = undefined;
		        var strategy = options.findStrategy || options.strategy;

		        // try subsequent adapters if the preceeding one fails
		        if (strategy === 'fallback') {
		          (function () {
		            var makeFallbackCall = function makeFallbackCall(index) {
		              adapter = definition.getAdapterName((options.findFallbackAdapters || options.fallbackAdapters)[index]);
		              return _this.adapters[adapter].find(definition, id, options)['catch'](function (err) {
		                index++;
		                if (index < options.fallbackAdapters.length) {
		                  return makeFallbackCall(index);
		                } else {
		                  return DSUtils.Promise.reject(err);
		                }
		              });
		            };

		            promise = makeFallbackCall(0);
		          })();
		        } else {
		          adapter = definition.getAdapterName(options);
		          // just make a single attempt
		          promise = _this.adapters[adapter].find(definition, id, options);
		        }

		        resource.pendingQueries[id] = promise.then(function (data) {
		          // Query is no longer pending
		          delete resource.pendingQueries[id];
		          if (options.cacheResponse) {
		            // inject the item into the data store
		            var injected = definition.inject(data, options.orig());
		            // mark the item as "cached"
		            resource.completedQueries[id] = new Date().getTime();
		            resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		            return injected;
		          } else {
		            // just return an un-injected instance
		            return definition.createInstance(data, options.orig());
		          }
		        });
		      }
		      return resource.pendingQueries[id];
		    } else {
		      // resolve immediately with the item
		      return item;
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    if (resource) {
		      delete resource.pendingQueries[id];
		    }
		    return DSUtils.Promise.reject(err);
		  });
		};

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		/* jshint -W082 */
		function processResults(data, resourceName, queryHash, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var idAttribute = _this.defs[resourceName].idAttribute;
		  var date = new Date().getTime();

		  data = data || [];

		  // Query is no longer pending
		  delete resource.pendingQueries[queryHash];
		  resource.completedQueries[queryHash] = date;

		  // Merge the new values into the cache
		  var injected = definition.inject(data, options.orig());

		  // Make sure each object is added to completedQueries
		  if (DSUtils._a(injected)) {
		    DSUtils.forEach(injected, function (item) {
		      if (item) {
		        var id = item[idAttribute];
		        if (id) {
		          resource.completedQueries[id] = date;
		          resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		        }
		      }
		    });
		  } else {
		    options.errorFn('response is expected to be an array!');
		    resource.completedQueries[injected[idAttribute]] = date;
		  }

		  return injected;
		}

		/**
		 * Using an adapter, retrieve a collection of items.
		 *
		 * @param resourceName The name of the type of resource of the items to retrieve.
		 * @param params The criteria by which to filter items to retrieve. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @param options.bypassCache Whether to ignore any cached query for these items and force the retrieval through the adapter.
		 * @param options.cacheResponse Whether to inject the found items into the data store.
		 * @returns The items.
		 */
		module.exports = function findAll(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var queryHash = undefined,
		      adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    params = params || {};

		    if (!_this.defs[resourceName]) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._o(params)) {
		      reject(DSUtils._oErr('params'));
		    } else {
		      options = DSUtils._(definition, options);
		      queryHash = DSUtils.toJson(params);
		      options.logFn('findAll', params, options);

		      if (options.params) {
		        options.params = DSUtils.copy(options.params);
		      }

		      // force a new request
		      if (options.bypassCache || !options.cacheResponse) {
		        delete resource.completedQueries[queryHash];
		        delete resource.queryData[queryHash];
		      }
		      if (queryHash in resource.completedQueries) {
		        if (options.useFilter) {
		          if (options.localKeys) {
		            resolve(definition.getAll(options.localKeys, options.orig()));
		          } else {
		            // resolve immediately by filtering data from the data store
		            resolve(definition.filter(params, options.orig()));
		          }
		        } else {
		          // resolve immediately by returning the cached array from the previously made query
		          resolve(resource.queryData[queryHash]);
		        }
		      } else {
		        resolve();
		      }
		    }
		  }).then(function (items) {
		    if (!(queryHash in resource.completedQueries)) {
		      if (!(queryHash in resource.pendingQueries)) {
		        var promise = undefined;
		        var strategy = options.findAllStrategy || options.strategy;

		        // try subsequent adapters if the preceeding one fails
		        if (strategy === 'fallback') {
		          (function () {
		            var makeFallbackCall = function makeFallbackCall(index) {
		              adapter = definition.getAdapterName((options.findAllFallbackAdapters || options.fallbackAdapters)[index]);
		              return _this.adapters[adapter].findAll(definition, params, options)['catch'](function (err) {
		                index++;
		                if (index < options.fallbackAdapters.length) {
		                  return makeFallbackCall(index);
		                } else {
		                  return DSUtils.Promise.reject(err);
		                }
		              });
		            };

		            promise = makeFallbackCall(0);
		          })();
		        } else {
		          adapter = definition.getAdapterName(options);
		          // just make a single attempt
		          promise = _this.adapters[adapter].findAll(definition, params, options);
		        }

		        resource.pendingQueries[queryHash] = promise.then(function (data) {
		          // Query is no longer pending
		          delete resource.pendingQueries[queryHash];
		          if (options.cacheResponse) {
		            // inject the items into the data store
		            resource.queryData[queryHash] = processResults.call(_this, data, resourceName, queryHash, options);
		            resource.queryData[queryHash].$$injected = true;
		            return resource.queryData[queryHash];
		          } else {
		            DSUtils.forEach(data, function (item, i) {
		              data[i] = definition.createInstance(item, options.orig());
		            });
		            return data;
		          }
		        });
		      }

		      return resource.pendingQueries[queryHash];
		    } else {
		      // resolve immediately with the items
		      return items;
		    }
		  }).then(function (items) {
		    return DSUtils.respond(items, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    if (resource) {
		      delete resource.pendingQueries[queryHash];
		    }
		    return DSUtils.Promise.reject(err);
		  });
		};

	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		/**
		 * Load the specified relations for the given instance.
		 *
		 * @param resourceName The name of the type of resource of the instance for which to load relations.
		 * @param instance The instance or the primary key of the instance.
		 * @param relations An array of the relations to load.
		 * @param options Optional configuration.
		 * @returns The instance, now with its relations loaded.
		 */
		module.exports = function loadRelations(resourceName, instance, relations, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.defs[resourceName];

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (DSUtils._sn(instance)) {
		      instance = definition.get(instance);
		    }

		    if (DSUtils._s(relations)) {
		      relations = [relations];
		    }

		    relations = relations || [];

		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else if (!DSUtils._o(instance)) {
		      reject(new DSErrors.IA('"instance(id)" must be a string, number or object!'));
		    } else if (!DSUtils._a(relations)) {
		      reject(new DSErrors.IA('"relations" must be a string or an array!'));
		    } else {
		      (function () {
		        var _options = DSUtils._(definition, options);
		        _options.logFn('loadRelations', instance, relations, _options);

		        var tasks = [];

		        DSUtils.forEach(definition.relationList, function (def) {
		          var relationName = def.relation;
		          var relationDef = definition.getResource(relationName);
		          var __options = DSUtils._(relationDef, options);

		          // relations can be loaded based on resource name or field name
		          if (!relations.length || DSUtils.contains(relations, relationName) || DSUtils.contains(relations, def.localField)) {
		            var task = undefined;
		            var params = {};
		            if (__options.allowSimpleWhere) {
		              params[def.foreignKey] = instance[definition.idAttribute];
		            } else {
		              params.where = {};
		              params.where[def.foreignKey] = {
		                '==': instance[definition.idAttribute]
		              };
		            }

		            if (def.type === 'hasMany') {
		              var orig = __options.orig();
		              if (def.localKeys) {
		                delete params[def.foreignKey];
		                var keys = DSUtils.get(instance, def.localKeys) || [];
		                keys = DSUtils._a(keys) ? keys : DSUtils.keys(keys);
		                params.where = _defineProperty({}, relationDef.idAttribute, {
		                  'in': keys
		                });
		                orig.localKeys = keys;
		              }
		              task = relationDef.findAll(params, orig);
		            } else if (def.type === 'hasOne') {
		              if (def.localKey && DSUtils.get(instance, def.localKey)) {
		                task = relationDef.find(DSUtils.get(instance, def.localKey), __options.orig());
		              } else if (def.foreignKey) {
		                task = relationDef.findAll(params, __options.orig()).then(function (hasOnes) {
		                  return hasOnes.length ? hasOnes[0] : null;
		                });
		              }
		            } else if (DSUtils.get(instance, def.localKey)) {
		              task = relationDef.find(DSUtils.get(instance, def.localKey), __options.orig());
		            }

		            if (task) {
		              tasks.push(task);
		            }
		          }
		        });

		        resolve(tasks);
		      })();
		    }
		  }).then(function (tasks) {
		    return DSUtils.Promise.all(tasks);
		  }).then(function () {
		    return instance;
		  });
		};

	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Find expired items of the specified resource type and perform the configured action.
		 *
		 * @param resourceName The name of the type of resource of the items to reap.
		 * @param options Optional configuration.
		 * @returns The reaped items.
		 */
		module.exports = function reap(resourceName, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];

		  return new DSUtils.Promise(function (resolve, reject) {

		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else {
		      options = DSUtils._(definition, options);
		      if (!options.hasOwnProperty('notify')) {
		        options.notify = false;
		      }
		      options.logFn('reap', options);
		      var items = [];
		      var now = new Date().getTime();
		      var expiredItem = undefined;

		      // find the expired items
		      while ((expiredItem = resource.expiresHeap.peek()) && expiredItem.expires < now) {
		        items.push(expiredItem.item);
		        delete expiredItem.item;
		        resource.expiresHeap.pop();
		      }
		      resolve(items);
		    }
		  }).then(function (items) {
		    // only hit lifecycle if there are items
		    if (items.length) {
		      definition.beforeReap(options, items);
		      if (options.notify) {
		        definition.emit('DS.beforeReap', definition, items);
		      }
		    }

		    if (options.reapAction === 'inject') {
		      (function () {
		        var timestamp = new Date().getTime();
		        DSUtils.forEach(items, function (item) {
		          resource.expiresHeap.push({
		            item: item,
		            timestamp: timestamp,
		            expires: definition.maxAge ? timestamp + definition.maxAge : Number.MAX_VALUE
		          });
		        });
		      })();
		    } else if (options.reapAction === 'eject') {
		      DSUtils.forEach(items, function (item) {
		        definition.eject(item[definition.idAttribute]);
		      });
		    } else if (options.reapAction === 'refresh') {
		      var _ret2 = (function () {
		        var tasks = [];
		        DSUtils.forEach(items, function (item) {
		          tasks.push(definition.refresh(item[definition.idAttribute]));
		        });
		        return {
		          v: DSUtils.Promise.all(tasks)
		        };
		      })();

		      if (typeof _ret2 === 'object') return _ret2.v;
		    }
		    return items;
		  }).then(function (items) {
		    // only hit lifecycle if there are items
		    if (items.length) {
		      definition.afterReap(options, items);
		      if (options.notify) {
		        definition.emit('DS.afterReap', definition, items);
		      }
		    }
		    return items;
		  });
		};

	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Save a single item in its present state.
		 *
		 * @param resourceName The name of the type of resource of the item.
		 * @param id The primary key of the item.
		 * @param options Optional congifuration.
		 * @returns The item, now saved.
		 */
		module.exports = function save(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.defs[resourceName];
		  var resource = _this.s[resourceName];
		  var item = undefined,
		      noChanges = undefined,
		      adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    id = DSUtils.resolveId(definition, id);
		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else if (!definition.get(id)) {
		      reject(new DSErrors.R('id "' + id + '" not found in cache!'));
		    } else {
		      item = definition.get(id);
		      options = DSUtils._(definition, options);
		      options.logFn('save', id, options);
		      resolve(item);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeUpdate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeUpdate', definition, attrs);
		    }
		    // only send changed properties to the adapter
		    if (options.changesOnly) {

		      if (DSUtils.w) {
		        resource.observers[id].deliver();
		      }
		      var toKeep = [];
		      var changes = definition.changes(id);

		      for (var key in changes.added) {
		        toKeep.push(key);
		      }
		      for (key in changes.changed) {
		        toKeep.push(key);
		      }
		      changes = DSUtils.pick(attrs, toKeep);
		      // no changes? no save
		      if (DSUtils.isEmpty(changes)) {
		        // no changes, return
		        options.logFn('save - no changes', id, options);
		        noChanges = true;
		        return attrs;
		      } else {
		        attrs = changes;
		      }
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].update(definition, id, DSUtils.omit(attrs, options.omit), options);
		  }).then(function (data) {
		    return options.afterUpdate.call(data, options, data);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.afterUpdate', definition, attrs);
		    }
		    if (noChanges) {
		      // no changes, just return
		      return attrs;
		    } else if (options.cacheResponse) {
		      // inject the reponse into the store, updating the item
		      var injected = definition.inject(attrs, options.orig());
		      var _id = injected[definition.idAttribute];
		      // mark the item as "saved"
		      resource.saved[_id] = DSUtils.updateTimestamp(resource.saved[_id]);
		      if (!definition.resetHistoryOnInject) {
		        resource.previousAttributes[_id] = DSUtils.copy(injected, null, null, null, definition.relationFields);
		      }
		      return injected;
		    } else {
		      // just return an instance
		      return definition.createInstance(attrs, options.orig());
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  });
		};

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Update a single item using the supplied properties hash.
		 *
		 * @param resourceName The name of the type of resource of the item to update.
		 * @param id The primary key of the item to update.
		 * @param attrs The attributes with which to update the item.
		 * @param options Optional configuration.
		 * @returns The item, now updated.
		 */
		module.exports = function update(resourceName, id, attrs, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.defs[resourceName];
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    id = DSUtils.resolveId(definition, id);
		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('update', id, attrs, options);
		      resolve(attrs);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeUpdate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeUpdate', definition, attrs);
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].update(definition, id, DSUtils.omit(attrs, options.omit), options);
		  }).then(function (data) {
		    return options.afterUpdate.call(data, options, data);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.afterUpdate', definition, attrs);
		    }
		    if (options.cacheResponse) {
		      // inject the updated item into the store
		      var injected = definition.inject(attrs, options.orig());
		      var resource = _this.s[resourceName];
		      var _id = injected[definition.idAttribute];
		      // mark the item as "saved"
		      resource.saved[_id] = DSUtils.updateTimestamp(resource.saved[_id]);
		      if (!definition.resetHistoryOnInject) {
		        resource.previousAttributes[_id] = DSUtils.copy(injected, null, null, null, definition.relationFields);
		      }
		      return injected;
		    } else {
		      // just return an instance
		      return definition.createInstance(attrs, options.orig());
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  });
		};

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Update a collection of items using the supplied properties hash.
		 *
		 * @param resourceName The name of the type of resource of the items to update.
		 * @param attrs  The attributes with which to update the item.
		 * @param params The criteria by which to select items to update. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @returns The updated items.
		 */
		module.exports = function updateAll(resourceName, attrs, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.defs[resourceName];
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('updateAll', attrs, params, options);
		      resolve(attrs);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeUpdate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeUpdate', definition, attrs);
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].updateAll(definition, DSUtils.omit(attrs, options.omit), params, options);
		  }).then(function (data) {
		    return options.afterUpdate.call(data, options, data);
		  }).then(function (data) {
		    if (options.notify) {
		      definition.emit('DS.afterUpdate', definition, attrs);
		    }
		    var origOptions = options.orig();
		    if (options.cacheResponse) {
		      var _ret = (function () {
		        // inject the updated items into the store
		        var injected = definition.inject(data, origOptions);
		        var resource = _this.s[resourceName];
		        // mark the items as "saved"
		        DSUtils.forEach(injected, function (i) {
		          var id = i[definition.idAttribute];
		          resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		          if (!definition.resetHistoryOnInject) {
		            resource.previousAttributes[id] = DSUtils.copy(i, null, null, null, definition.relationFields);
		          }
		        });
		        return {
		          v: injected
		        };
		      })();

		      if (typeof _ret === 'object') return _ret.v;
		    } else {
		      var _ret2 = (function () {
		        // just return instances
		        var instances = [];
		        DSUtils.forEach(data, function (item) {
		          instances.push(definition.createInstance(item, origOptions));
		        });
		        return {
		          v: instances
		        };
		      })();

		      if (typeof _ret2 === 'object') return _ret2.v;
		    }
		  }).then(function (items) {
		    return DSUtils.respond(items, { adapter: adapter }, options);
		  });
		};

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		

		    /**
		     * Typecast a value to a String, using an empty string value for null or
		     * undefined.
		     */
		    function toString(val){
		        return val == null ? '' : val.toString();
		    }

		    module.exports = toString;




	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		var replaceAccents = __webpack_require__(44);
		var removeNonWord = __webpack_require__(45);
		var upperCase = __webpack_require__(20);
		var lowerCase = __webpack_require__(46);
		    /**
		    * Convert string to camelCase text.
		    */
		    function camelCase(str){
		        str = toString(str);
		        str = replaceAccents(str);
		        str = removeNonWord(str)
		            .replace(/[\-_]/g, ' ') //convert all hyphens and underscores to spaces
		            .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
		            .replace(/\s+/g, '') //remove spaces
		            .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
		        return str;
		    }
		    module.exports = camelCase;



	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		    /**
		    * Replaces all accented chars with regular ones
		    */
		    function replaceAccents(str){
		        str = toString(str);

		        // verifies if the String has accents and replace them
		        if (str.search(/[\xC0-\xFF]/g) > -1) {
		            str = str
		                    .replace(/[\xC0-\xC5]/g, "A")
		                    .replace(/[\xC6]/g, "AE")
		                    .replace(/[\xC7]/g, "C")
		                    .replace(/[\xC8-\xCB]/g, "E")
		                    .replace(/[\xCC-\xCF]/g, "I")
		                    .replace(/[\xD0]/g, "D")
		                    .replace(/[\xD1]/g, "N")
		                    .replace(/[\xD2-\xD6\xD8]/g, "O")
		                    .replace(/[\xD9-\xDC]/g, "U")
		                    .replace(/[\xDD]/g, "Y")
		                    .replace(/[\xDE]/g, "P")
		                    .replace(/[\xE0-\xE5]/g, "a")
		                    .replace(/[\xE6]/g, "ae")
		                    .replace(/[\xE7]/g, "c")
		                    .replace(/[\xE8-\xEB]/g, "e")
		                    .replace(/[\xEC-\xEF]/g, "i")
		                    .replace(/[\xF1]/g, "n")
		                    .replace(/[\xF2-\xF6\xF8]/g, "o")
		                    .replace(/[\xF9-\xFC]/g, "u")
		                    .replace(/[\xFE]/g, "p")
		                    .replace(/[\xFD\xFF]/g, "y");
		        }
		        return str;
		    }
		    module.exports = replaceAccents;



	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		    // This pattern is generated by the _build/pattern-removeNonWord.js script
		    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

		    /**
		     * Remove non-word chars.
		     */
		    function removeNonWord(str){
		        str = toString(str);
		        return str.replace(PATTERN, '');
		    }

		    module.exports = removeNonWord;



	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(42);
		    /**
		     * "Safer" String.toLowerCase()
		     */
		    function lowerCase(str){
		        str = toString(str);
		        return str.toLowerCase();
		    }

		    module.exports = lowerCase;



	/***/ }
	/******/ ])
	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(5);
	var slugify = __webpack_require__(6);
	var unCamelCase = __webpack_require__(7);
	    /**
	     * Replaces spaces with underscores, split camelCase text, remove non-word chars, remove accents and convert to lower case.
	     */
	    function underscore(str){
	        str = toString(str);
	        str = unCamelCase(str);
	        return slugify(str, "_");
	    }
	    module.exports = underscore;



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	

	    /**
	     * Typecast a value to a String, using an empty string value for null or
	     * undefined.
	     */
	    function toString(val){
	        return val == null ? '' : val.toString();
	    }

	    module.exports = toString;




/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(5);
	var replaceAccents = __webpack_require__(8);
	var removeNonWord = __webpack_require__(9);
	var trim = __webpack_require__(10);
	    /**
	     * Convert to lower case, remove accents, remove non-word chars and
	     * replace spaces with the specified delimeter.
	     * Does not split camelCase text.
	     */
	    function slugify(str, delimeter){
	        str = toString(str);

	        if (delimeter == null) {
	            delimeter = "-";
	        }
	        str = replaceAccents(str);
	        str = removeNonWord(str);
	        str = trim(str) //should come after removeNonWord
	                .replace(/ +/g, delimeter) //replace spaces with delimeter
	                .toLowerCase();
	        return str;
	    }
	    module.exports = slugify;



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(5);

	    var CAMEL_CASE_BORDER = /([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g;

	    /**
	     * Add space between camelCase text.
	     */
	    function unCamelCase(str, delimiter){
	        if (delimiter == null) {
	            delimiter = ' ';
	        }

	        function join(str, c1, c2) {
	            return c1 + delimiter + c2;
	        }

	        str = toString(str);
	        str = str.replace(CAMEL_CASE_BORDER, join);
	        str = str.toLowerCase(); //add space between camelCase text
	        return str;
	    }
	    module.exports = unCamelCase;



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(5);
	    /**
	    * Replaces all accented chars with regular ones
	    */
	    function replaceAccents(str){
	        str = toString(str);

	        // verifies if the String has accents and replace them
	        if (str.search(/[\xC0-\xFF]/g) > -1) {
	            str = str
	                    .replace(/[\xC0-\xC5]/g, "A")
	                    .replace(/[\xC6]/g, "AE")
	                    .replace(/[\xC7]/g, "C")
	                    .replace(/[\xC8-\xCB]/g, "E")
	                    .replace(/[\xCC-\xCF]/g, "I")
	                    .replace(/[\xD0]/g, "D")
	                    .replace(/[\xD1]/g, "N")
	                    .replace(/[\xD2-\xD6\xD8]/g, "O")
	                    .replace(/[\xD9-\xDC]/g, "U")
	                    .replace(/[\xDD]/g, "Y")
	                    .replace(/[\xDE]/g, "P")
	                    .replace(/[\xE0-\xE5]/g, "a")
	                    .replace(/[\xE6]/g, "ae")
	                    .replace(/[\xE7]/g, "c")
	                    .replace(/[\xE8-\xEB]/g, "e")
	                    .replace(/[\xEC-\xEF]/g, "i")
	                    .replace(/[\xF1]/g, "n")
	                    .replace(/[\xF2-\xF6\xF8]/g, "o")
	                    .replace(/[\xF9-\xFC]/g, "u")
	                    .replace(/[\xFE]/g, "p")
	                    .replace(/[\xFD\xFF]/g, "y");
	        }
	        return str;
	    }
	    module.exports = replaceAccents;



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(5);
	    // This pattern is generated by the _build/pattern-removeNonWord.js script
	    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

	    /**
	     * Remove non-word chars.
	     */
	    function removeNonWord(str){
	        str = toString(str);
	        return str.replace(PATTERN, '');
	    }

	    module.exports = removeNonWord;



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(5);
	var WHITE_SPACES = __webpack_require__(11);
	var ltrim = __webpack_require__(12);
	var rtrim = __webpack_require__(13);
	    /**
	     * Remove white-spaces from beginning and end of string.
	     */
	    function trim(str, chars) {
	        str = toString(str);
	        chars = chars || WHITE_SPACES;
	        return ltrim(rtrim(str, chars), chars);
	    }

	    module.exports = trim;



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	    /**
	     * Contains all Unicode white-spaces. Taken from
	     * http://en.wikipedia.org/wiki/Whitespace_character.
	     */
	    module.exports = [
	        ' ', '\n', '\r', '\t', '\f', '\v', '\u00A0', '\u1680', '\u180E',
	        '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006',
	        '\u2007', '\u2008', '\u2009', '\u200A', '\u2028', '\u2029', '\u202F',
	        '\u205F', '\u3000'
	    ];



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(5);
	var WHITE_SPACES = __webpack_require__(11);
	    /**
	     * Remove chars from beginning of string.
	     */
	    function ltrim(str, chars) {
	        str = toString(str);
	        chars = chars || WHITE_SPACES;

	        var start = 0,
	            len = str.length,
	            charLen = chars.length,
	            found = true,
	            i, c;

	        while (found && start < len) {
	            found = false;
	            i = -1;
	            c = str.charAt(start);

	            while (++i < charLen) {
	                if (c === chars[i]) {
	                    found = true;
	                    start++;
	                    break;
	                }
	            }
	        }

	        return (start >= len) ? '' : str.substr(start, len);
	    }

	    module.exports = ltrim;



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(5);
	var WHITE_SPACES = __webpack_require__(11);
	    /**
	     * Remove chars from end of string.
	     */
	    function rtrim(str, chars) {
	        str = toString(str);
	        chars = chars || WHITE_SPACES;

	        var end = str.length - 1,
	            charLen = chars.length,
	            found = true,
	            i, c;

	        while (found && end >= 0) {
	            found = false;
	            i = -1;
	            c = str.charAt(end);

	            while (++i < charLen) {
	                if (c === chars[i]) {
	                    found = true;
	                    end--;
	                    break;
	                }
	            }
	        }

	        return (end >= 0) ? str.substring(0, end + 1) : '';
	    }

	    module.exports = rtrim;



/***/ }
/******/ ]);