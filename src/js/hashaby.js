import HashabyCore from './hashaby-core';

// if(global.document) {
//   let elmArr = document.querySelectorAll('[data-hashaby-element]');

//   [].forEach.call(elmArr, (elm) => {
//     new HashabyCore({
//       elm,
//     });
//   });
// }

if(global.jQuery) {
  jQuery.fn.hashaby = function(opts = {}) {
    opts.elm = this[0];
    new HashabyCore(opts);
  };
}

global.Hashaby = HashabyCore;
