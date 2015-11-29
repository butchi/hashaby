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

  // TODO: jQuery脱却
  function jumpTo($target) {
    var top = $target.offset().top;

    $('body,html').scrollTop(top);
  }

  class Hashaby {
    constructor() {
      this.allowDomainArr = ['localhost'];
      this.forceHashchange = true;

      // TODO: デリゲートのjQuery脱却
      // TODO: フラグではなくon/off制御
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
        var operator = hash[1];

        // TODO: underscore脱却
        if(_.contains(_.values(modeLi), operator)) {
          let mode = _.invert(modeLi)[operator];
          let cmdStr = hash.replace(/^#./, '');
          isAllowDomain = _.contains(this.allowDomainArr, location.hostname);

          this[mode](cmdStr);
        }
      });
    }

    // TODO: querySelector使う
    findClass(cmdStr) {
      // var $elm = $('[class="' + cmdStr + '"]');
      var $elm = $('.' + cmdStr);
      jumpTo($elm);
    }

    // TODO: querySelector使う
    query(cmdStr) {
      var $elm = $(cmdStr);
      jumpTo($elm);
    }

    exec(cmdStr) {
      if(isAllowDomain) {
        eval(cmdStr);
      }
    }

    // TODO: querySelector使う
    jump(cmdStr) {
      var $elm;
      if(isAllowDomain) {
        $elm = $(eval(cmdStr));
        jumpTo($elm);
      }
    }

    // とりあえず引数なし関数のみ実行できるように
    func(cmdStr) {
      // var [_, fn, args] = cmdStr.match(/^(.+)\((.*)\)$/);

      if(nameSpace) {
        let methodName = cmdStr.match(/(^[^(]+)/)[1];

        let f = nameSpace[methodName];
        if(typeof f === 'function') {
          f();
        }
      }
    }

    // TODO: ワイルドカード指定
    allowDomain(hostname) {
      this.allowDomainArr.push(hostname);
    }

    // func用のnameSpaceの設定関数
    with(obj) {
      if(typeof obj === 'object') {
        nameSpace = obj;
      }
    }

    // 今のところHTMLをファイルとして開いた時に動作しない
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
