(() => {
  class Hashaby {
    constructor() {
      this.allowDomainArr = ['localhost'];

      var modeLi = {
        findClass: '.', // 特定のクラスの位置にジャンプ
        query:     '?', // ハッシュ値をセレクタとしてジャンプ
        exec:      ';', // ハッシュを評価
        jump:      '=', // ハッシュを評価した結果の文字列をセレクタとしてジャンプ
      };

      var modeName = {
        FIND_CLASS: 'findClass',
        QUERY:      'query',
        EXEC:       'exec',
        JUMP:       'jump',
      };

      $(window).on('load hashchange', (evt) => {
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

        if(_.contains(_.values(modeLi), operator)) {
          mode = _.invert(modeLi)[operator];
          cmdStr = hash.replace(/^#./, '');
          isAllowDomain = _.contains(this.allowDomainArr, location.hostname);

          if(false) {
          } else if(mode === modeName.FIND_CLASS) {
            // $elm = $('[class="' + cmdStr + '"]');
            $elm = $('.' + cmdStr);
            jumpTo($elm);
          } else if(mode === modeName.QUERY) {
            $elm = $(cmdStr);
            jumpTo($elm);
          } else if(mode === modeName.EXEC) {
            if(isAllowDomain) {
              eval(cmdStr);
            }
          } else if(mode === modeName.JUMP) {
            if(isAllowDomain) {
              $elm = $(eval(cmdStr));
              jumpTo($elm);
            }
          } else if(true) {
          }
        }
      });
    }

    allowDomain(hostname) {
      this.allowDomainArr.push(hostname);
    }

    clearHash() {
      var href = location.href;
      if(/^http/.test(href)) {
        var noHashHref = href.replace(/#.*$/, '');
        history.pushState(null, null, noHashHref);
      }
    }
  }

  // export
  window.hashaby = new Hashaby();
})();
