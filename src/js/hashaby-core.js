import Gator from 'gator';
import SweetScroll from "sweet-scroll";

var modeLi = {
  '.': 'findClass', // 特定のクラスの位置にジャンプ
  '?': 'query',     // ハッシュ値をセレクタとしてジャンプ
  ';': 'exec',      // ハッシュを評価
  '=': 'jump',      // ハッシュを評価した結果の文字列をセレクタとしてジャンプ
  '+': 'func',      // ローカル（nameSpace以下）の関数
};

var isAllowDomain;
var nameSpace = window;

const sweetScroll = new SweetScroll();

// TODO: SweetScrollカスタマイズ
function jumpTo(target) {
  sweetScroll.toElement(target);
}

class Hashaby {
  constructor() {
    this.allowDomainArr = ['localhost'];
    this.forceHashchange = true;

    // 同じハッシュで何度も発火できるように
    // TODO: フラグではなくon/off制御
    Gator(document).on('click', 'a[href]', (evt) => {
      if(this.forceHashchange) {
        let elm = evt.target;
        let href = elm.getAttribute('href');

        // TODO: href='#'のときに戻れない→ここもpushState?
        if(typeof href === 'string' && href.match(/^#/)) {
          this.clearHash();
          location.replace(href);
        }
      }
    });

    var hashchangeHandler = (evt) => {
      var hash = location.hash;
      var operator = hash[1];
      var mode = modeLi[operator];

      if(mode !== undefined) {
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
    };

    window.addEventListener('load', hashchangeHandler);
    window.addEventListener('hashchange', hashchangeHandler);
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

  // TODO: コマンドに')'を含む文字列を渡せないのを解消
  func(cmdStr) {
    var matched = cmdStr.match(/^(.+)\((.*)\)$/) || cmdStr.match(/^(.+)$/) || [];
    var methodName = matched[1];
    var args = matched[2] || '';
    var argArr = args.split(',');

    var safeFlag = true;

    argArr.forEach((arg, i) => {
      var strArg = (arg.match(/"(.*)"/) || arg.match(/'(.*)'/) || [])[1];
      var numArg = Number(arg);
      if(false) {
      } else if(strArg) {
        argArr[i] = String(strArg);
      } else if(!isNaN(numArg)) {
        argArr[i] = numArg;
      } else {
        safeFlag = false;
      }
    });

    var f = nameSpace[methodName];
    if(typeof f === 'function' && safeFlag) {
      f.apply(null, argArr);
    }
  }

  // 正規表現できたらワイルドカードは不要？
  allowDomain(hostname) {
    this.allowDomainArr.push(hostname);
  }

  // func用のnameSpaceの設定関数
  doWith(obj) {
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
global.hashaby = new Hashaby();
