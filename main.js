'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gator = require('gator');

var _gator2 = _interopRequireDefault(_gator);

var _sweetScroll = require('sweet-scroll');

var _sweetScroll2 = _interopRequireDefault(_sweetScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modeLi = {
  '.': 'findClass', // 特定のクラスの位置にジャンプ
  '?': 'query', // ハッシュ値をセレクタとしてジャンプ
  ';': 'exec', // ハッシュを評価
  '=': 'jump', // ハッシュを評価した結果の文字列をセレクタとしてジャンプ
  '+': 'func' };

var isAllowDomain;
var nameSpace = window;

var sweetScroll = new _sweetScroll2.default();

// TODO: SweetScrollカスタマイズ
function jumpTo(target) {
  sweetScroll.toElement(target);
}

var Hashaby = function () {
  function Hashaby() {
    var _this = this;

    _classCallCheck(this, Hashaby);

    this.allowDomainArr = ['localhost'];
    this.forceHashchange = true;

    // 同じハッシュで何度も発火できるように
    // TODO: フラグではなくon/off制御
    (0, _gator2.default)(document).on('click', 'a[href]', function (evt) {
      if (_this.forceHashchange) {
        var elm = evt.target;
        var href = elm.getAttribute('href');

        // TODO: href='#'のときに戻れない→ここもpushState?
        if (typeof href === 'string' && href.match(/^#/)) {
          _this.clearHash();
          location.replace(href);
        }
      }
    });

    var hashchangeHandler = function hashchangeHandler(evt) {
      var hash = location.hash;
      var operator = hash[1];
      var mode = modeLi[operator];

      if (mode !== undefined) {
        var cmdStr = hash.replace(/^#./, '');

        _this.allowDomainArr.forEach(function (domain) {
          if (false) {} else if (typeof domain === 'string') {
            isAllowDomain = isAllowDomain || domain === location.hostname;
          } else if (domain instanceof RegExp) {
            isAllowDomain = isAllowDomain || domain.test(location.hostname);
          }
        });

        _this[mode](cmdStr);
      }
    };

    window.addEventListener('load', hashchangeHandler);
    window.addEventListener('hashchange', hashchangeHandler);
  }

  _createClass(Hashaby, [{
    key: 'findClass',
    value: function findClass(cmdStr) {
      // var $elm = $('[class="' + cmdStr + '"]');
      var elm = document.querySelector('.' + cmdStr);
      jumpTo(elm);
    }
  }, {
    key: 'query',
    value: function query(cmdStr) {
      var elm = document.querySelector(cmdStr);
      jumpTo(elm);
    }
  }, {
    key: 'exec',
    value: function exec(cmdStr) {
      if (isAllowDomain) {
        eval(cmdStr);
      }
    }
  }, {
    key: 'jump',
    value: function jump(cmdStr) {
      var elm;
      if (isAllowDomain) {
        elm = document.querySelector(eval(cmdStr));
        jumpTo(elm);
      }
    }

    // TODO: コマンドに')'を含む文字列を渡せないのを解消

  }, {
    key: 'func',
    value: function func(cmdStr) {
      var matched = cmdStr.match(/^(.+)\((.*)\)$/) || cmdStr.match(/^(.+)$/) || [];
      var methodName = matched[1];
      var args = matched[2] || '';
      var argArr = args.split(',');

      var safeFlag = true;

      argArr.forEach(function (arg, i) {
        var strArg = (arg.match(/"(.*)"/) || arg.match(/'(.*)'/) || [])[1];
        var numArg = Number(arg);
        if (false) {} else if (strArg) {
          argArr[i] = String(strArg);
        } else if (!isNaN(numArg)) {
          argArr[i] = numArg;
        } else {
          safeFlag = false;
        }
      });

      var f = nameSpace[methodName];
      if (typeof f === 'function' && safeFlag) {
        f.apply(null, argArr);
      }
    }

    // 正規表現できたらワイルドカードは不要？

  }, {
    key: 'allowDomain',
    value: function allowDomain(hostname) {
      this.allowDomainArr.push(hostname);
    }

    // func用のnameSpaceの設定関数

  }, {
    key: 'doWith',
    value: function doWith(obj) {
      if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
        nameSpace = obj;
      }
    }

    // 今のところHTMLをファイルとして開いた時に動作しない

  }, {
    key: 'clearHash',
    value: function clearHash() {
      var href = location.href;
      if (/^http/.test(href)) {
        var noHashHref = href.replace(/#.*$/, '');
        history.pushState(null, null, noHashHref);
      }
    }
  }]);

  return Hashaby;
}();

// export


global.hashaby = new Hashaby();