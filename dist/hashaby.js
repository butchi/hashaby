'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var modeLi = {
    findClass: '.', // 特定のクラスの位置にジャンプ
    query: '?', // ハッシュ値をセレクタとしてジャンプ
    exec: ';', // ハッシュを評価
    jump: '=', // ハッシュを評価した結果の文字列をセレクタとしてジャンプ
    func: '+' };

  // ローカル（nameSpace以下）の関数
  var modeName = {
    FIND_CLASS: 'findClass',
    QUERY: 'query',
    EXEC: 'exec',
    JUMP: 'jump',
    FUNC: 'func'
  };

  var isAllowDomain;
  var nameSpace = null;

  function jumpTo($target) {
    var top = $target.offset().top;

    $('body,html').scrollTop(top);
  }

  var Hashaby = (function () {
    function Hashaby() {
      var _this = this;

      _classCallCheck(this, Hashaby);

      this.allowDomainArr = ['localhost'];
      this.forceHashchange = true;

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
        var cmdStr = '';
        var cmd = _.noop;
        var operator = hash[1];
        var mode = '';

        if (_.contains(_.values(modeLi), operator)) {
          mode = _.invert(modeLi)[operator];
          cmdStr = hash.replace(/^#./, '');
          isAllowDomain = _.contains(_this.allowDomainArr, location.hostname);

          _this[mode](cmdStr);
        }
      });
    }

    _createClass(Hashaby, [{
      key: 'findClass',
      value: function findClass(cmdStr) {
        // var $elm = $('[class="' + cmdStr + '"]');
        var $elm = $('.' + cmdStr);
        jumpTo($elm);
      }
    }, {
      key: 'query',
      value: function query(cmdStr) {
        var $elm = $(cmdStr);
        jumpTo($elm);
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
        var $elm;
        if (isAllowDomain) {
          $elm = $(eval(cmdStr));
          jumpTo($elm);
        }
      }
    }, {
      key: 'func',
      value: function func(cmdStr) {
        // var [_, fn, args] = cmdStr.match(/^(.+)\((.*)\)$/);
        var expr = nameSpace + '.' + cmdStr;
        try {
          Function(expr)(); // XSSの虞あり
        } catch (err) {}
      }
    }, {
      key: 'allowDomain',
      value: function allowDomain(hostname) {
        this.allowDomainArr.push(hostname);
      }
    }, {
      key: 'with',
      value: function _with(obj) {
        nameSpace = obj;
      }
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