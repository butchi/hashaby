(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.licker = window.licker || {};
(function (ns) {
  // hashaby.allowDomain(/0\.0\.0\.0/);
  hashaby.allowDomain('butchi.github.io');
  hashaby.doWith(window.licker);

  ns.clearHash = function () {
    hashaby.clearHash();
  };

  ns.showMessage = function () {
    alert('Thanks, world!');
  };

  ns.showArg = function (arg) {
    alert('Argument: ' + arg);
  };

  ns.showArgs = function () {
    alert('Arguments: ' + [].join.call(arguments, ','));
  };
})(window.licker);

},{}]},{},[1]);
