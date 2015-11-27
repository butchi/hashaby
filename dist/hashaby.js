'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var Hashaby = (function () {
    function Hashaby() {
      var _this = this;

      _classCallCheck(this, Hashaby);

      this.allowDomainArr = ['localhost'];

      var modeLi = {
        findClass: '.', // 特定のクラスの位置にジャンプ
        query: '?', // ハッシュ値をセレクタとしてジャンプ
        exec: ';', // ハッシュを評価
        jump: '=' };

      // ハッシュを評価した結果の文字列をセレクタとしてジャンプ
      var modeName = {
        FIND_CLASS: 'findClass',
        QUERY: 'query',
        EXEC: 'exec',
        JUMP: 'jump'
      };

      $(window).on('load hashchange', function (evt) {
        var hash = location.hash;
        var cmdStr = '';
        var cmd = _.noop;
        var operator = hash[1];
        var mode = '';
        var isAllowDomain;

        var $elm;

        function jumpTo($target) {
          var top = $target.offset().top;

          $('body,html').scrollTop(top);
        }

        if (_.contains(_.values(modeLi), operator)) {
          mode = _.invert(modeLi)[operator];
          cmdStr = hash.replace(/^#./, '');
          isAllowDomain = _.contains(_this.allowDomainArr, location.hostname);

          if (false) {} else if (mode === modeName.FIND_CLASS) {
            // $elm = $('[class="' + cmdStr + '"]');
            $elm = $('.' + cmdStr);
            jumpTo($elm);
          } else if (mode === modeName.QUERY) {
            $elm = $(cmdStr);
            jumpTo($elm);
          } else if (mode === modeName.EXEC) {
            if (isAllowDomain) {
              eval(cmdStr);
            }
          } else if (mode === modeName.JUMP) {
            if (isAllowDomain) {
              $elm = $(eval(cmdStr));
              jumpTo($elm);
            }
          } else if (true) {}
        }
      });
    }

    _createClass(Hashaby, [{
      key: 'allowDomain',
      value: function allowDomain(hostname) {
        this.allowDomainArr.push(hostname);
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