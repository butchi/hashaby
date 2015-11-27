(() => {
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

  var isAllowDomain;

  function jumpTo($target) {
    var top = $target.offset().top;

    $('body,html').scrollTop(top);
  }

  class Hashaby {
    constructor() {
      this.allowDomainArr = ['localhost'];

      $(window).on('load hashchange', (evt) => {
        var hash = location.hash;
        var cmdStr = '';
        var cmd = _.noop;
        var operator = hash[1];
        var mode = '';

        if(_.contains(_.values(modeLi), operator)) {
          mode = _.invert(modeLi)[operator];
          cmdStr = hash.replace(/^#./, '');
          isAllowDomain = _.contains(this.allowDomainArr, location.hostname);

          this[mode](cmdStr);
        }
      });
    }

    findClass(cmdStr) {
      // var $elm = $('[class="' + cmdStr + '"]');
      var $elm = $('.' + cmdStr);
      jumpTo($elm);
    }

    query(cmdStr) {
      var $elm = $(cmdStr);
      jumpTo($elm);
    }

    exec(cmdStr) {
      if(isAllowDomain) {
        eval(cmdStr);
      }
    }

    jump(cmdStr) {
      var $elm;
      if(isAllowDomain) {
        $elm = $(eval(cmdStr));
        jumpTo($elm);
      }
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
