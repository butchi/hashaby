(() => {
  var modeLi = {
    findClass: '.', // 特定のクラスの位置にジャンプ
    query:     '?', // ハッシュ値をセレクタとしてジャンプ
    exec:      ';', // ハッシュを評価
    jump:      '=', // ハッシュを評価した結果の文字列をセレクタとしてジャンプ
    func:      '+', // ローカル（nameSpace以下）の関数
  };

  var modeName = {
    FIND_CLASS: 'findClass',
    QUERY:      'query',
    EXEC:       'exec',
    JUMP:       'jump',
    FUNC:       'func',
  };

  var isAllowDomain;
  var nameSpace = null;

  function jumpTo($target) {
    var top = $target.offset().top;

    $('body,html').scrollTop(top);
  }

  class Hashaby {
    constructor() {
      this.allowDomainArr = ['localhost'];
      this.forceHashchange = true;

      $(() => {
        $(document).on('click', 'a[href]', (evt) => {
          if(this.forceHashchange) {
            var $elm = $(evt.target);
            var href = $elm.attr('href');

            if(href.match(/^#/)) {
              this.clearHash();
              location.replace(href);
            }
          }
        });
      });

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

    func(cmdStr) {
      // var [_, fn, args] = cmdStr.match(/^(.+)\((.*)\)$/);
      var expr = nameSpace + '.' + cmdStr;
      try {
        Function(expr)(); // XSSの虞あり
      } catch(err) {
      }
    }

    allowDomain(hostname) {
      this.allowDomainArr.push(hostname);
    }

    with(obj) {
      nameSpace = obj;
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
