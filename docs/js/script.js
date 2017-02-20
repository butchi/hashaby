(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ns = global.licker || {};
exports.default = ns;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
'use strict';

var _ns = require('./module/ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// hashaby.allowDomain(/0\.0\.0\.0/);
hashaby.allowDomain('butchi.github.io');
hashaby.doWith(window.licker);

_ns2.default.clearHash = function () {
  hashaby.clearHash();
};

_ns2.default.showMessage = function () {
  alert('Thanks, world!');
};

_ns2.default.showArg = function (arg) {
  alert('Argument: ' + arg);
};

_ns2.default.showArgs = function () {
  alert('Arguments: ' + [].join.call(arguments, ','));
};

},{"./module/ns":1}]},{},[2]);
