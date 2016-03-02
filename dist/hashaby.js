'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var modeLi = {
    '.': 'findClass', // 特定のクラスの位置にジャンプ
    '?': 'query', // ハッシュ値をセレクタとしてジャンプ
    ';': 'exec', // ハッシュを評価
    '=': 'jump', // ハッシュを評価した結果の文字列をセレクタとしてジャンプ
    '+': 'func' };

  // ローカル（nameSpace以下）の関数
  var isAllowDomain;
  var nameSpace = null;

  // TODO: jQuery脱却
  // TODO: スムーズスクロール
  function jumpTo(target) {
    var top = $(target).offset().top;

    $('body,html').scrollTop(top);
  }

  var Hashaby = (function () {
    function Hashaby() {
      var _this = this;

      _classCallCheck(this, Hashaby);

      this.allowDomainArr = ['localhost'];
      this.forceHashchange = true;

      // TODO: デリゲートのjQuery脱却
      // TODO: フラグではなくon/off制御
      $(function () {
        $(document).on('click', 'a[href]', function (evt) {
          if (_this.forceHashchange) {
            var $elm = $(evt.target);
            var href = $elm.attr('href');

            if (href.match(/^#/)) {
              _this.clearHash();
              location.replace(href);
            }
          }
        });
      });

      $(window).on('load hashchange', function (evt) {
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
      });
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

      // とりあえず引数なし関数のみ実行できるように
      // TODO: 文字列、数値などに限って引数を渡せるように

    }, {
      key: 'func',
      value: function func(cmdStr) {
        // var [_, fn, args] = cmdStr.match(/^(.+)\((.*)\)$/);

        if (nameSpace) {
          var methodName = cmdStr.match(/(^[^(]+)/)[1];

          var f = nameSpace[methodName];
          if (typeof f === 'function') {
            f();
          }
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
      key: 'with',
      value: function _with(obj) {
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
  })();

  // export

  window.hashaby = new Hashaby();
})();