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
  function jumpTo(target) {
    var top = $(target).offset().top;

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

          this.allowDomainArr.forEach((domain) => {
            if(false) {
            } else if(typeof domain === 'string') {
              isAllowDomain = isAllowDomain || (domain === location.hostname);
            } else if(domain instanceof RegExp) {
              isAllowDomain = isAllowDomain || domain.test(location.hostname);
            }
          });

          this[mode](cmdStr);
        }
      });
    }

    findClass(cmdStr) {
      // var $elm = $('[class="' + cmdStr + '"]');
      var elm = document.querySelector('.' + cmdStr);
      jumpTo(elm);
    }

    query(cmdStr) {
      var elm = document.querySelector(cmdStr);
      jumpTo(elm);
    }

    exec(cmdStr) {
      if(isAllowDomain) {
        eval(cmdStr);
      }
    }

    jump(cmdStr) {
      var elm;
      if(isAllowDomain) {
        elm = document.querySelector(eval(cmdStr));
        jumpTo(elm);
      }
    }

    // とりあえず引数なし関数のみ実行できるように
    // TODO: 文字列、数値などに限って引数を渡せるように
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

    // 正規表現できたらワイルドカードは不要？
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
