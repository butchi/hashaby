!function ねん(ころ,りよ,ねんねん){function ころねん(ねんころ,ころころ){if(!りよ[ねんころ]){if(!ころ[ねんころ]){var りよころ="function"==typeof require&&require;if(!ころころ&&りよころ)return りよころ(ねんころ,!0);if(りよねん)return りよねん(ねんころ,!0);var ねんりよ=new Error("Cannot find module '"+ねんころ+"'");throw ねんりよ.code="MODULE_NOT_FOUND",ねんりよ}var ころりよ=りよ[ねんころ]={exports:{}};ころ[ねんころ][0].call(ころりよ.exports,function(ねん){var りよ=ころ[ねんころ][1][ねん];return ころねん(りよ?りよ:ねん)},ころりよ,ころりよ.exports,ねん,ころ,りよ,ねんねん)}return りよ[ねんころ].exports}for(var りよねん="function"==typeof require&&require,ねんころ=0;ねんころ<ねんねん.length;ねんころ++)ころねん(ねんねん[ねんころ]);return ころねん}({1:[function(ねん,ころ,りよ){/**
 * Copyright 2014 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * GATOR.JS
 * Simple Event Delegation
 *
 * @version 1.2.4
 *
 * Compatible with IE 9+, FF 3.6+, Safari 5+, Chrome
 *
 * Include legacy.js for compatibility with older browsers
 *
 *             .-._   _ _ _ _ _ _ _ _
 *  .-''-.__.-'00  '-' ' ' ' ' ' ' ' '-.
 * '.___ '    .   .--_'-' '-' '-' _'-' '._
 *  V: V 'vv-'   '_   '.       .'  _..' '.'.
 *    '=.____.=_.--'   :_.__.__:_   '.   : :
 *            (((____.-'        '-.  /   : :
 *                              (((-'\ .' /
 *                            _____..'  .'
 *                           '-._____.-'
 */
!function(){function ねん(ねん,ころ,りよ){var ねんねん="blur"==ころ||"focus"==ころ;ねん.element.addEventListener(ころ,りよ,ねんねん)}function りよ(ねん){ねん.preventDefault(),ねん.stopPropagation()}function ねんねん(ねん){return ころりよ?ころりよ:ころりよ=ねん.matches?ねん.matches:ねん.webkitMatchesSelector?ねん.webkitMatchesSelector:ねん.mozMatchesSelector?ねん.mozMatchesSelector:ねん.msMatchesSelector?ねん.msMatchesSelector:ねん.oMatchesSelector?ねん.oMatchesSelector:ねんりよ.matchesSelector}function ころねん(ねん,ころ,りよ){if("_root"==ころ)return りよ;if(ねん!==りよ)return ねんねん(ねん).call(ねん,ころ)?ねん:ねん.parentNode?(りよりよ++,ころねん(ねん.parentNode,ころ,りよ)):void 0}function りよねん(ねん,ころ,りよ,ねんねん){ころねんねん[ねん.id]||(ころねんねん[ねん.id]={}),ころねんねん[ねん.id][ころ]||(ころねんねん[ねん.id][ころ]={}),ころねんねん[ねん.id][ころ][りよ]||(ころねんねん[ねん.id][ころ][りよ]=[]),ころねんねん[ねん.id][ころ][りよ].push(ねんねん)}function ねんころ(ねん,ころ,りよ,ねんねん){if(ころねんねん[ねん.id])if(ころ){if(!ねんねん&&!りよ)return void(ころねんねん[ねん.id][ころ]={});if(!ねんねん)return void delete ころねんねん[ねん.id][ころ][りよ];if(ころねんねん[ねん.id][ころ][りよ])for(var ころねん=0;ころねん<ころねんねん[ねん.id][ころ][りよ].length;ころねん++)if(ころねんねん[ねん.id][ころ][りよ][ころねん]===ねんねん){ころねんねん[ねん.id][ころ][りよ].splice(ころねん,1);break}}else for(var りよねん in ころねんねん[ねん.id])ころねんねん[ねん.id].hasOwnProperty(りよねん)&&(ころねんねん[ねん.id][りよねん]={})}function ころころ(ねん,ころ,りよ){if(ころねんねん[ねん][りよ]){var ねんねん,りよねん,ねんころ=ころ.target||ころ.srcElement,ころころ={},りよころ=0,ころりよ=0;りよりよ=0;for(ねんねん in ころねんねん[ねん][りよ])ころねんねん[ねん][りよ].hasOwnProperty(ねんねん)&&(りよねん=ころねん(ねんころ,ねんねん,りよねんねん[ねん].element),りよねん&&ねんりよ.matchesEvent(りよ,りよねんねん[ねん].element,りよねん,"_root"==ねんねん,ころ)&&(りよりよ++,ころねんねん[ねん][りよ][ねんねん].match=りよねん,ころころ[りよりよ]=ころねんねん[ねん][りよ][ねんねん]));for(ころ.stopPropagation=function(){ころ.cancelBubble=!0},りよころ=0;りよりよ>=りよころ;りよころ++)if(ころころ[りよころ])for(ころりよ=0;ころりよ<ころころ[りよころ].length;ころりよ++){if(ころころ[りよころ][ころりよ].call(ころころ[りよころ].match,ころ)===!1)return void ねんりよ.cancel(ころ);if(ころ.cancelBubble)return}}}function りよころ(ねん,ころ,りよ,ねんねん){function ころねん(ねん){return function(ころ){ころころ(ころりよ,ころ,ねん)}}if(this.element){ねん instanceof Array||(ねん=[ねん]),りよ||"function"!=typeof ころ||(りよ=ころ,ころ="_root");var りよころ,ころりよ=this.id;for(りよころ=0;りよころ<ねん.length;りよころ++)ねんねん?ねんころ(this,ねん[りよころ],ころ,りよ):(ころねんねん[ころりよ]&&ころねんねん[ころりよ][ねん[りよころ]]||ねんりよ.addEvent(this,ねん[りよころ],ころねん(ねん[りよころ])),りよねん(this,ねん[りよころ],ころ,りよ));return this}}function ねんりよ(ねん,ころ){if(!(this instanceof ねんりよ)){for(var りよ in りよねんねん)if(りよねんねん[りよ].element===ねん)return りよねんねん[りよ];return ねんねんねん++,りよねんねん[ねんねんねん]=new ねんりよ(ねん,ねんねんねん),りよねんねん[ねんねんねん]}this.element=ねん,this.id=ころ}var ころりよ,りよりよ=0,ねんねんねん=0,ころねんねん={},りよねんねん={};ねんりよ.prototype.on=function(ねん,ころ,りよ){return りよころ.call(this,ねん,ころ,りよ)},ねんりよ.prototype.off=function(ねん,ころ,りよ){return りよころ.call(this,ねん,ころ,りよ,!0)},ねんりよ.matchesSelector=function(){},ねんりよ.cancel=りよ,ねんりよ.addEvent=ねん,ねんりよ.matchesEvent=function(){return!0},"undefined"!=typeof ころ&&ころ.exports&&(ころ.exports=ねんりよ),window.Gator=ねんりよ}()},{}],2:[function(ねん,ころ,りよ){/*!
 * sweet-scroll
 * Modern and the sweet smooth scroll library.
 * @author tsuyoshiwada
 * @license MIT
 * @version 2.2.0
 */
!function(ねん,ねんねん){"object"==typeof りよ&&"undefined"!=typeof ころ?ころ.exports=ねんねん():"function"==typeof define&&define.amd?define(ねんねん):ねん.SweetScroll=ねんねん()}(this,function(){"use strict";function ねん(ねん){return null==ねん?"":"object"===("undefined"==typeof ねん?"undefined":ねんりよねんころ(ねん))||"function"==typeof ねん?りよねんころころ[Object.prototype.toString.call(ねん)]||"object":"undefined"==typeof ねん?"undefined":ねんりよねんころ(ねん)}function ころ(ころ){return"number"===ねん(ころ)}function りよ(ころ){return"string"===ねん(ころ)}function ねんねん(ころ){return"function"===ねん(ころ)}function ころねん(ねん){return Array.isArray(ねん)}function りよねん(ねん){var りよ=null==ねん?null:ねん.length;return ころ(りよ)&&りよ>=0&&ねんねんころころ>=りよ}function ねんころ(ねん){return!ころねん(ねん)&&ねん-parseFloat(ねん)+1>=0}function ころころ(ころ){return!ころねん(ころ)&&"object"===ねん(ころ)}function りよころ(ねん,ころ){return ねん&&ねん.hasOwnProperty(ころ)}function ねんりよ(ねん,ころ,りよ){if(null==ねん)return ねん;var ねんねん=りよ||ねん;if(ころころ(ねん)){for(var ころねん in ねん)if(りよころ(ねん,ころねん)&&ころ.call(ねんねん,ねん[ころねん],ころねん)===!1)break}else if(りよねん(ねん))for(var ねんころ=0;ねんころ<ねん.length&&ころ.call(ねんねん,ねん[ねんころ],ねんころ)!==!1;ねんころ++);return ねん}function ころりよ(ねん){for(var ころ=arguments.length,りよ=Array(ころ>1?ころ-1:0),ねんねん=1;ころ>ねんねん;ねんねん++)りよ[ねんねん-1]=arguments[ねんねん];return ねんりよ(りよ,function(ころ){ねんりよ(ころ,function(ころ,りよ){ねん[りよ]=ころ})}),ねん}function りよりよ(ねん){return ねん.replace(/\s*/g,"")||""}function ねんねんねん(ねん){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(ねん);try{throw new Error(ねん)}catch(ころ){}}function ころねんねん(ねん){var ころ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(ねん)return(null==ころ?ねんりよころころ:ころ).querySelector(ねん)}function りよねんねん(ねん){var ころ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(ねん)return(null==ころ?ねんりよころころ:ころ).querySelectorAll(ねん)}function ねんころねん(ねん,ころ){for(var りよ=(ねん.document||ねん.ownerDocument).querySelectorAll(ころ),ねんねん=りよ.length;--ねんねん>=0&&りよ.item(ねんねん)!==ねん;);return ねんねん>-1}function ころころねん(ねん){return ねん===ねんりよころころ.documentElement||ねん===ねんりよころころ.body}function りよころねん(){var ねん=りよころころころ.outerWidth,ころ=りよころころころ.innerWidth;return ねん?ねん/ころ:1}function ねんりよねん(ねん){for(var ころ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",りよ=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!0,ねんねん=ころりよころころ[ころ],ころねん=ねん instanceof Element?[ねん]:りよねんねん(ねん),りよねん=[],ねんころ=ねんりよころころ.createElement("div"),ころころ=0;ころころ<ころねん.length;ころころ++){var りよころ=ころねん[ころころ];if(りよころ[ねんねん]>0?りよねん.push(りよころ):(ねんころ.style.width=りよころ.clientWidth+1+"px",ねんころ.style.height=りよころ.clientHeight+1+"px",りよころ.appendChild(ねんころ),りよころ[ねんねん]=1.5/りよころねん(),りよころ[ねんねん]>0&&りよねん.push(りよころ),りよころ[ねんねん]=0,りよころ.removeChild(ねんころ)),!りよ&&りよねん.length>0)break}return りよねん}function ころりよねん(ねん,ころ){var りよ=ねんりよねん(ねん,ころ,!1);return りよ.length>=1?りよ[0]:null}function りよりよねん(ねん){return null!=ねん&&ねん===ねん.window?ねん:9===ねん.nodeType&&ねん.defaultView}function ねんねんころ(ねん){return ねんころねんころ(ねん.scrollHeight,ねん.clientHeight,ねん.offsetHeight)}function ころねんころ(ねん){return ねんころねんころ(ねん.scrollWidth,ねん.clientWidth,ねん.offsetWidth)}function りよねんころ(ねん){return{width:ころねんころ(ねん),height:ねんねんころ(ねん)}}function ねんころころ(){return{width:ねんころねんころ(ころねんころ(ねんりよころころ.body),ころねんころ(ねんりよころころ.documentElement)),height:ねんころねんころ(ねんねんころ(ねんりよころころ.body),ねんねんころ(ねんりよころころ.documentElement))}}function ころころころ(ねん){return ころころねん(ねん)?{viewport:{width:ころころねんころ(りよころころころ.innerWidth,ねんりよころころ.documentElement.clientWidth),height:りよころころころ.innerHeight},size:ねんころころ()}:{viewport:{width:ねん.clientWidth,height:ねん.clientHeight},size:りよねんころ(ねん)}}function りよころころ(ねん){var ころ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",りよ=りよりよねん(ねん);return りよ?りよ[りよりよころころ[ころ]]:ねん[ころりよころころ[ころ]]}function ねんりよころ(ねん,ころ){var りよ=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"y",ねんねん=りよりよねん(ねん),ころねん="y"===りよ;ねんねん?ねんねん.scrollTo(ころねん?ねんねん[りよりよころころ.x]:ころ,ころねん?ころ:ねんねん[りよりよころころ.y]):ねん[ころりよころころ[りよ]]=ころ}function ころりよころ(ねん){var ころ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!ねん||ねん&&!ねん.getClientRects().length)return{top:0,left:0};var りよ=ねん.getBoundingClientRect();if(りよ.width||りよ.height){var ねんねん={},ころねん=null;if(null==ころ||ころころねん(ころ))ころねん=ねん.ownerDocument.documentElement,ねんねん.top=りよころころころ.pageYOffset,ねんねん.left=りよころころころ.pageXOffset;else{ころねん=ころ;var りよねん=ころねん.getBoundingClientRect();ねんねん.top=-1*りよねん.top+ころねん.scrollTop,ねんねん.left=-1*りよねん.left+ころねん.scrollLeft}return{top:りよ.top+ねんねん.top-ころねん.clientTop,left:りよ.left+ねんねん.left-ころねん.clientLeft}}return りよ}function りよりよころ(ねん,ころ,りよ){var ねんねん=ころ.split(",");ねんねん.forEach(function(ころ){ねん.addEventListener(ころ.trim(),りよ,!1)})}function ねんねんりよ(ねん,ころ,りよ){var ねんねん=ころ.split(",");ねんねん.forEach(function(ころ){ねん.removeEventListener(ころ.trim(),りよ,!1)})}function ころねんりよ(ねん){return ねん}function りよねんりよ(ねん,ころ,りよ,ねんねん,ころねん){return ねんねん*(ころ/=ころねん)*ころ+りよ}function ねんころりよ(ねん,ころ,りよ,ねんねん,ころねん){return-ねんねん*(ころ/=ころねん)*(ころ-2)+りよ}function ころころりよ(ねん,ころ,りよ,ねんねん,ころねん){return(ころ/=ころねん/2)<1?ねんねん/2*ころ*ころ+りよ:-ねんねん/2*(--ころ*(ころ-2)-1)+りよ}function りよころりよ(ねん,ころ,りよ,ねんねん,ころねん){return ねんねん*(ころ/=ころねん)*ころ*ころ+りよ}function ねんりよりよ(ねん,ころ,りよ,ねんねん,ころねん){return ねんねん*((ころ=ころ/ころねん-1)*ころ*ころ+1)+りよ}function ころりよりよ(ねん,ころ,りよ,ねんねん,ころねん){return(ころ/=ころねん/2)<1?ねんねん/2*ころ*ころ*ころ+りよ:ねんねん/2*((ころ-=2)*ころ*ころ+2)+りよ}function りよりよりよ(ねん,ころ,りよ,ねんねん,ころねん){return ねんねん*(ころ/=ころねん)*ころ*ころ*ころ+りよ}function ねんねんねんねん(ねん,ころ,りよ,ねんねん,ころねん){return-ねんねん*((ころ=ころ/ころねん-1)*ころ*ころ*ころ-1)+りよ}function ころねんねんねん(ねん,ころ,りよ,ねんねん,ころねん){return(ころ/=ころねん/2)<1?ねんねん/2*ころ*ころ*ころ*ころ+りよ:-ねんねん/2*((ころ-=2)*ころ*ころ*ころ-2)+りよ}function りよねんねんねん(ねん,ころ,りよ,ねんねん,ころねん){return ねんねん*(ころ/=ころねん)*ころ*ころ*ころ*ころ+りよ}function ねんころねんねん(ねん,ころ,りよ,ねんねん,ころねん){return ねんねん*((ころ=ころ/ころねん-1)*ころ*ころ*ころ*ころ+1)+りよ}function ころころねんねん(ねん,ころ,りよ,ねんねん,ころねん){return(ころ/=ころねん/2)<1?ねんねん/2*ころ*ころ*ころ*ころ*ころ+りよ:ねんねん/2*((ころ-=2)*ころ*ころ*ころ*ころ+2)+りよ}function りよころねんねん(ねん,ころ,りよ,ねんねん,ころねん){return-ねんねん*りよころりよねん(ころ/ころねん*(りよねんねんころ/2))+ねんねん+りよ}function ねんりよねんねん(ねん,ころ,りよ,ねんねん,ころねん){return ねんねん*ねんりよりよねん(ころ/ころねん*(りよねんねんころ/2))+りよ}function ころりよねんねん(ねん,ころ,りよ,ねんねん,ころねん){return-ねんねん/2*(りよころりよねん(りよねんねんころ*ころ/ころねん)-1)+りよ}function りよりよねんねん(ねん,ころ,りよ,ねんねん,ころねん){return 0===ころ?りよ:ねんねん*ころりよりよねん(2,10*(ころ/ころねん-1))+りよ}function ねんねんころねん(ねん,ころ,りよ,ねんねん,ころねん){return ころ===ころねん?りよ+ねんねん:ねんねん*(-ころりよりよねん(2,-10*ころ/ころねん)+1)+りよ}function ころねんころねん(ねん,ころ,りよ,ねんねん,ころねん){return 0===ころ?りよ:ころ===ころねん?りよ+ねんねん:(ころ/=ころねん/2)<1?ねんねん/2*ころりよりよねん(2,10*(ころ-1))+りよ:ねんねん/2*(-ころりよりよねん(2,-10*--ころ)+2)+りよ}function りよねんころねん(ねん,ころ,りよ,ねんねん,ころねん){return-ねんねん*(ねんねんねんころ(1-(ころ/=ころねん)*ころ)-1)+りよ}function ねんころころねん(ねん,ころ,りよ,ねんねん,ころねん){return ねんねん*ねんねんねんころ(1-(ころ=ころ/ころねん-1)*ころ)+りよ}function ころころころねん(ねん,ころ,りよ,ねんねん,ころねん){return(ころ/=ころねん/2)<1?-ねんねん/2*(ねんねんねんころ(1-ころ*ころ)-1)+りよ:ねんねん/2*(ねんねんねんころ(1-(ころ-=2)*ころ)+1)+りよ}function りよころころねん(ねん,ころ,りよ,ねんねん,ころねん){var りよねん=1.70158,ねんころ=0,ころころ=ねんねん;return 0===ころ?りよ:1===(ころ/=ころねん)?りよ+ねんねん:(ねんころ||(ねんころ=.3*ころねん),ころころ<りよりよりよねん(ねんねん)?(ころころ=ねんねん,りよねん=ねんころ/4):りよねん=ねんころ/(2*りよねんねんころ)*ころねんねんころ(ねんねん/ころころ),-(ころころ*ころりよりよねん(2,10*(ころ-=1))*ねんりよりよねん((ころ*ころねん-りよねん)*(2*りよねんねんころ)/ねんころ))+りよ)}function ねんりよころねん(ねん,ころ,りよ,ねんねん,ころねん){var りよねん=1.70158,ねんころ=0,ころころ=ねんねん;return 0===ころ?りよ:1===(ころ/=ころねん)?りよ+ねんねん:(ねんころ||(ねんころ=.3*ころねん),ころころ<りよりよりよねん(ねんねん)?(ころころ=ねんねん,りよねん=ねんころ/4):りよねん=ねんころ/(2*りよねんねんころ)*ころねんねんころ(ねんねん/ころころ),ころころ*ころりよりよねん(2,-10*ころ)*ねんりよりよねん((ころ*ころねん-りよねん)*(2*りよねんねんころ)/ねんころ)+ねんねん+りよ)}function ころりよころねん(ねん,ころ,りよ,ねんねん,ころねん){var りよねん=1.70158,ねんころ=0,ころころ=ねんねん;return 0===ころ?りよ:2===(ころ/=ころねん/2)?りよ+ねんねん:(ねんころ||(ねんころ=ころねん*(.3*1.5)),ころころ<りよりよりよねん(ねんねん)?(ころころ=ねんねん,りよねん=ねんころ/4):りよねん=ねんころ/(2*りよねんねんころ)*ころねんねんころ(ねんねん/ころころ),1>ころ?-.5*(ころころ*ころりよりよねん(2,10*(ころ-=1))*ねんりよりよねん((ころ*ころねん-りよねん)*(2*りよねんねんころ)/ねんころ))+りよ:ころころ*ころりよりよねん(2,-10*(ころ-=1))*ねんりよりよねん((ころ*ころねん-りよねん)*(2*りよねんねんころ)/ねんころ)*.5+ねんねん+りよ)}function りよりよころねん(ねん,ころ,りよ,ねんねん,ころねん){var りよねん=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.70158;return ねんねん*(ころ/=ころねん)*ころ*((りよねん+1)*ころ-りよねん)+りよ}function ねんねんりよねん(ねん,ころ,りよ,ねんねん,ころねん){var りよねん=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.70158;return ねんねん*((ころ=ころ/ころねん-1)*ころ*((りよねん+1)*ころ+りよねん)+1)+りよ}function ころねんりよねん(ねん,ころ,りよ,ねんねん,ころねん){var りよねん=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.70158;return(ころ/=ころねん/2)<1?ねんねん/2*(ころ*ころ*(((りよねん*=1.525)+1)*ころ-りよねん))+りよ:ねんねん/2*((ころ-=2)*ころ*(((りよねん*=1.525)+1)*ころ+りよねん)+2)+りよ}function りよねんりよねん(ねん,ころ,りよ,ねんねん,ころねん){return(ころ/=ころねん)<1/2.75?ねんねん*(7.5625*ころ*ころ)+りよ:2/2.75>ころ?ねんねん*(7.5625*(ころ-=1.5/2.75)*ころ+.75)+りよ:2.5/2.75>ころ?ねんねん*(7.5625*(ころ-=2.25/2.75)*ころ+.9375)+りよ:ねんねん*(7.5625*(ころ-=2.625/2.75)*ころ+.984375)+りよ}function ねんころりよねん(ねん,ころ,りよ,ねんねん,ころねん){return ねんねん-りよねんりよねん(ねん,ころねん-ころ,0,ねんねん,ころねん)+りよ}function ころころりよねん(ねん,ころ,りよ,ねんねん,ころねん){return ころねん/2>ころ?.5*ねんころりよねん(ねん,2*ころ,0,ねんねん,ころねん)+りよ:.5*りよねんりよねん(ねん,2*ころ-ころねん,0,ねんねん,ころねん)+.5*ねんねん+りよ}var りよころりよねん=Math.cos,ねんりよりよねん=Math.sin,ころりよりよねん=Math.pow,りよりよりよねん=Math.abs,ねんねんねんころ=Math.sqrt,ころねんねんころ=Math.asin,りよねんねんころ=Math.PI,ねんころねんころ=Math.max,ころころねんころ=Math.min,りよころねんころ=Math.round,ねんりよねんころ="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(ねん){return typeof ねん}:function(ねん){return ねん&&"function"==typeof Symbol&&ねん.constructor===Symbol&&ねん!==Symbol.prototype?"symbol":typeof ねん},ころりよねんころ=function(ねん,ころ){if(!(ねん instanceof ころ))throw new TypeError("Cannot call a class as a function")},りよりよねんころ=function(){function ねん(ねん,ころ){for(var りよ=0;りよ<ころ.length;りよ++){var ねんねん=ころ[りよ];ねんねん.enumerable=ねんねん.enumerable||!1,ねんねん.configurable=!0,"value"in ねんねん&&(ねんねん.writable=!0),Object.defineProperty(ねん,ねんねん.key,ねんねん)}}return function(ころ,りよ,ねんねん){return りよ&&ねん(ころ.prototype,りよ),ねんねん&&ねん(ころ,ねんねん),ころ}}(),ねんねんころころ=ころりよりよねん(2,53)-1,ころねんころころ=["Boolean","Number","String","Function","Array","Object"],りよねんころころ={};ころねんころころ.forEach(function(ねん){りよねんころころ["[object "+ねん+"]"]=ねん.toLowerCase()});var ねんころころころ=!("undefined"==typeof window||!window.document||!window.document.createElement),ころころころころ=function(){if(!ねんころころころ)return!1;var ねん=navigator.userAgent;return-1===ねん.indexOf("Android 2.")&&-1===ねん.indexOf("Android 4.0")||-1===ねん.indexOf("Mobile Safari")||-1!==ねん.indexOf("Chrome")||-1!==ねん.indexOf("Windows Phone")?window.history&&"pushState"in window.history&&"file:"!==window.location.protocol:!1}(),りよころころころ=ねんころころころ?window:null,ねんりよころころ=ねんころころころ?document:null,ころりよころころ={y:"scrollTop",x:"scrollLeft"},りよりよころころ={y:"pageYOffset",x:"pageXOffset"},ねんねんりよころ=Object.freeze({linear:ころねんりよ,InQuad:りよねんりよ,OutQuad:ねんころりよ,InOutQuad:ころころりよ,InCubic:りよころりよ,OutCubic:ねんりよりよ,InOutCubic:ころりよりよ,InQuart:りよりよりよ,OutQuart:ねんねんねんねん,InOutQuart:ころねんねんねん,InQuint:りよねんねんねん,OutQuint:ねんころねんねん,InOutQuint:ころころねんねん,InSine:りよころねんねん,OutSine:ねんりよねんねん,InOutSine:ころりよねんねん,InExpo:りよりよねんねん,OutExpo:ねんねんころねん,InOutExpo:ころねんころねん,InCirc:りよねんころねん,OutCirc:ねんころころねん,InOutCirc:ころころころねん,InElastic:りよころころねん,OutElastic:ねんりよころねん,InOutElastic:ころりよころねん,InBack:りよりよころねん,OutBack:ねんねんりよねん,InOutBack:ころねんりよねん,OutBounce:りよねんりよねん,InBounce:ねんころりよねん,InOutBounce:ころころりよねん}),ころねんりよころ=["ms","moz","webkit"],りよねんりよころ=0,ねんころりよころ=ねんころころころ?りよころころころ.requestAnimationFrame:null,ころころりよころ=ねんころころころ?りよころころころ.cancelAnimationFrame:null;if(ねんころころころ){for(var りよころりよころ=0;りよころりよころ<ころねんりよころ.length&&!ねんころりよころ;++りよころりよころ)ねんころりよころ=りよころころころ[ころねんりよころ[りよころりよころ]+"RequestAnimationFrame"],ころころりよころ=りよころころころ[ころねんりよころ[りよころりよころ]+"CancelAnimationFrame"]||りよころころころ[ころねんりよころ[りよころりよころ]+"CancelRequestAnimationFrame"];ねんころりよころ||(ねんころりよころ=function(ねん){var ころ=Date.now(),りよ=ねんころねんころ(0,16-(ころ-りよねんりよころ)),ねんねん=setTimeout(function(){ねん(ころ+りよ)},りよ);return りよねんりよころ=ころ+りよ,ねんねん}),ころころりよころ||(ころころりよころ=function(ねん){clearTimeout(ねん)})}var ねんりよりよころ=function(){function ねん(ころ){ころりよねんころ(this,ねん),this.el=ころ,this.props={},this.options={},this.progress=!1,this.easing=null,this.startTime=null,this.rafId=null}return りよりよねんころ(ねん,[{key:"run",value:function(ねん,ころ,りよ){var ころねん=this;this.progress||(this.props={x:ねん,y:ころ},this.options=りよ,this.easing=ねんねん(りよ.easing)?りよ.easing:ねんねんりよころ[りよ.easing.replace("ease","")],this.progress=!0,setTimeout(function(){ころねん.startProps=ころねん.calcStartProps(ねん,ころ),ころねん.rafId=ねんころりよころ(function(ねん){return ころねん._loop(ねん)})},this.options.delay))}},{key:"stop",value:function(){var ねん=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!0,ころ=this.options.complete;this.startTime=null,this.progress=!1,ころころりよころ(this.rafId),ねん&&(ねんりよころ(this.el,this.props.x,"x"),ねんりよころ(this.el,this.props.y,"y")),ねんねん(ころ)&&(ころ.call(this),this.options.complete=null)}},{key:"_loop",value:function(ねん){var ころ=this;if(this.startTime||(this.startTime=ねん),!this.progress)return void this.stop(!1);var りよ=this.el,ねんねん=this.props,ころねん=this.options,りよねん=this.startTime,ねんころ=this.startProps,ころころ=this.easing,りよころ=ころねん.duration,ころりよ=ころねん.step,りよりよ={},ねんねんねん=ねん-りよねん,ころねんねん=ころころねんころ(1,ねんころねんころ(ねんねんねん/りよころ,0));ねんりよ(ねんねん,function(ねん,ころ){var りよ=ねんころ[ころ],ねんねん=ねん-りよ;if(0===ねんねん)return!0;var ころねん=ころころ(ころねんねん,りよころ*ころねんねん,0,1,りよころ);りよりよ[ころ]=りよころねんころ(りよ+ねんねん*ころねん)}),ねんりよ(りよりよ,function(ねん,ころ){ねんりよころ(りよ,ねん,ころ)}),りよころ>=ねんねんねん?(ころりよ.call(this,ころねんねん,りよりよ),this.rafId=ねんころりよころ(function(ねん){return ころ._loop(ねん)})):this.stop(!0)}},{key:"calcStartProps",value:function(ねん,ころ){var りよ={x:りよころころ(this.el,"x"),y:りよころころ(this.el,"y")};if(this.options.quickMode){var ねんねん=ころころころ(this.el),ころねん=ねんねん.viewport,りよねん=ころねん.width,ねんころ=ころねん.height;りよりよりよねん(りよ.y-ころ)>ねんころ&&(りよ.y=りよ.y>ころ?ころ+ねんころ:ころ-ねんころ),りよりよりよねん(りよ.x-ねん)>りよねん&&(りよ.x=りよ.x>ねん?ねん+りよねん:ねん-りよねん)}return りよ}}]),ねん}(),ころりよりよころ=function(){return ねんころころころ?"onwheel"in ねんりよころころ?"wheel":"onmousewheel"in ねんりよころころ?"mousewheel":"DOMMouseScroll":"wheel"}(),りよりよりよころ=ころりよりよころ+", touchstart, touchmove",ねんねんねんりよ=function(){function ねん(){var ころ=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},りよ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body, html";ころりよねんころ(this,ねん),this.isSSR=!ねんころころころ,this.options=ころりよ({},ねん.defaults,ころ),this.container=this.getContainer(りよ),null==this.container?(this.header=null,this.tween=null,this.isSSR||(/comp|inter|loaded/.test(ねんりよころころ.readyState)?this.log('Not found scrollable container. => "'+りよ+'"'):this.log("Should be initialize later than DOMContentLoaded."))):(this.header=ころねんねん(this.options.header),this.tween=new ねんりよりよころ(this.container),this._trigger=null,this._shouldCallCancelScroll=!1,this.bindContainerClick())}return りよりよねんころ(ねん,[{key:"log",value:function(ねん){this.options.outputLog&&ねんねんねん("[SweetScroll] "+ねん)}},{key:"getScrollOffset",value:function(ねん,ころ){var ねんねん=this.container,ころねん=this.header,りよねん=this.parseCoodinate(ころ.offset),ねんころ=this.parseCoodinate(ねん);if(!ねんころ&&りよ(ねん))if("#"===ねん)ねんころ={top:0,left:0};else{var ころころ=ころねんねん(ねん),りよころ=ころりよころ(ころころ,ねんねん);if(!りよころ)return;ねんころ=りよころ}return ねんころ?(りよねん&&(ねんころ.top+=りよねん.top,ねんころ.left+=りよねん.left),ころねん&&(ねんころ.top=ねんころねんころ(0,ねんころ.top-りよねんころ(ころねん).height)),ねんころ):null}},{key:"normalizeScrollOffset",value:function(ねん,ころ){var りよ=this.container,ねんねん=ころりよ({},ねん),ころねん=ころころころ(りよ),りよねん=ころねん.viewport,ねんころ=ころねん.size;return ねんねん.top=ころ.verticalScroll?ねんころねんころ(0,ころころねんころ(ねんころ.height-りよねん.height,ねんねん.top)):りよころころ(りよ,"y"),ねんねん.left=ころ.horizontalScroll?ねんころねんころ(0,ころころねんころ(ねんころ.width-りよねん.width,ねんねん.left)):りよころころ(りよ,"x"),ねんねん}},{key:"to",value:function(ねん){var ころ=this,ねんねん=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isSSR){var ころねん=this.container,りよねん=ころりよ({},this.options,ねんねん),ねんころ=this._trigger,ころころ=りよ(ねん)&&/^#/.test(ねん)?ねん:null;if(this._options=りよねん,this._trigger=null,this._shouldCallCancelScroll=!1,this.stop(),!ころねん)return this.log("Not found container element.");var りよころ=this.getScrollOffset(ねん,りよねん);if(!りよころ)return this.log("Invalid parameter of distance. => "+ねん);if(this.hook(りよねん,"beforeScroll",りよころ,ねんころ)===!1)return void(this._options=null);りよころ=this.normalizeScrollOffset(りよころ,りよねん),this.tween.run(りよころ.left,りよころ.top,{duration:りよねん.duration,delay:りよねん.delay,easing:りよねん.easing,quickMode:りよねん.quickMode,complete:function(){null!=ころころ&&ころころ!==りよころころころ.location.hash&&ころ.updateURLHash(ころころ,りよねん.updateURL),ころ.unbindContainerStop(),ころ._options=null,ころ._shouldCallCancelScroll?ころ.hook(りよねん,"cancelScroll"):ころ.hook(りよねん,"afterScroll",りよころ,ねんころ),ころ.hook(りよねん,"completeScroll",ころ._shouldCallCancelScroll)},step:function(ねん,りよ){ころ.hook(りよねん,"stepScroll",ねん,りよ)}}),this.bindContainerStop()}}},{key:"toTop",value:function(ねん){var ころ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.to(ねん,ころりよ({},ころ,{verticalScroll:!0,horizontalScroll:!1}))}},{key:"toLeft",value:function(ねん){var ころ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.to(ねん,ころりよ({},ころ,{verticalScroll:!1,horizontalScroll:!0}))}},{key:"toElement",value:function(ねん){var ころ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isSSR)if(ねん instanceof Element){var りよ=ころりよころ(ねん,this.container);this.to(りよ,ころりよ({},ころ))}else this.log("Invalid parameter.")}},{key:"stop",value:function(){var ねん=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1;this.isSSR||(this.container?(this._stopScrollListener&&(this._shouldCallCancelScroll=!0),this.tween.stop(ねん)):this.log("Not found scrollable container."))}},{key:"update",value:function(){var ねん=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.container?(this.stop(),this.unbindContainerClick(),this.unbindContainerStop(),this.options=ころりよ({},this.options,ねん),this.header=ころねんねん(this.options.header),this.bindContainerClick()):this.isSSR||this.log("Not found scrollable container.")}},{key:"destroy",value:function(){this.container?(this.stop(),this.unbindContainerClick(),this.unbindContainerStop(),this.container=null,this.header=null,this.tween=null):this.isSSR||this.log("Not found scrollable container.")}},{key:"beforeScroll",value:function(ねん,ころ){return!0}},{key:"cancelScroll",value:function(){}},{key:"afterScroll",value:function(ねん,ころ){}},{key:"completeScroll",value:function(ねん){}},{key:"stepScroll",value:function(ねん,ころ){}},{key:"parseCoodinate",value:function(ねん){var ころ=this._options?this._options.verticalScroll:this.options.verticalScroll,ねんねん={top:0,left:0};if(りよころ(ねん,"top")||りよころ(ねん,"left"))ねんねん=ころりよ(ねんねん,ねん);else if(ころねん(ねん))2===ねん.length?(ねんねん.top=ねん[0],ねんねん.left=ねん[1]):(ねんねん.top=ころ?ねん[0]:0,ねんねん.left=ころ?0:ねん[0]);else if(ねんころ(ねん))ねんねん.top=ころ?ねん:0,ねんねん.left=ころ?0:ねん;else{if(!りよ(ねん))return null;var りよねん=りよりよ(ねん);if(/^\d+,\d+$/.test(りよねん))りよねん=りよねん.split(","),ねんねん.top=りよねん[0],ねんねん.left=りよねん[1];else if(/^(top|left):\d+,?(?:(top|left):\d+)?$/.test(りよねん)){var ころころ=りよねん.match(/top:(\d+)/),ねんりよ=りよねん.match(/left:(\d+)/);ねんねん.top=ころころ?ころころ[1]:0,ねんねん.left=ねんりよ?ねんりよ[1]:0}else{if(!this.container||!/^(\+|-)=(\d+)$/.test(りよねん))return null;var ねんねんねん=りよころころ(this.container,ころ?"y":"x"),ころねんねん=りよねん.match(/^(\+|-)=(\d+)$/),りよねんねん=ころねんねん[1],ねんころねん=parseInt(ころねんねん[2],10);"+"===りよねんねん?(ねんねん.top=ころ?ねんねんねん+ねんころねん:0,ねんねん.left=ころ?0:ねんねんねん+ねんころねん):(ねんねん.top=ころ?ねんねんねん-ねんころねん:0,ねんねん.left=ころ?0:ねんねんねん-ねんころねん)}}return ねんねん.top=parseInt(ねんねん.top,10),ねんねん.left=parseInt(ねんねん.left,10),ねんねん}},{key:"updateURLHash",value:function(ねん,ころ){!this.isSSR&&ころころころころ&&ころ&&りよころころころ.history["replace"===ころ?"replaceState":"pushState"](null,null,ねん)}},{key:"getContainer",value:function(ねん){var ころ=this.options,りよ=ころ.verticalScroll,ねんねん=ころ.horizontalScroll,ころねん=null;return this.isSSR?ころねん:(りよ&&(ころねん=ころりよねん(ねん,"y")),!ころねん&&ねんねん&&(ころねん=ころりよねん(ねん,"x")),ころねん)}},{key:"bindContainerClick",value:function(){var ねん=this.container;ねん&&(this._containerClickListener=this.handleContainerClick.bind(this),りよりよころ(ねん,"click",this._containerClickListener))}},{key:"unbindContainerClick",value:function(){var ねん=this.container;ねん&&this._containerClickListener&&(ねんねんりよ(ねん,"click",this._containerClickListener),this._containerClickListener=null)}},{key:"bindContainerStop",value:function(){var ねん=this.container;ねん&&(this._stopScrollListener=this.handleStopScroll.bind(this),りよりよころ(ねん,りよりよりよころ,this._stopScrollListener))}},{key:"unbindContainerStop",value:function(){var ねん=this.container;ねん&&this._stopScrollListener&&(ねんねんりよ(ねん,りよりよりよころ,this._stopScrollListener),this._stopScrollListener=null)}},{key:"hook",value:function(ねん,ころ){for(var りよ=ねん[ころ],ころねん=arguments.length,りよねん=Array(ころねん>2?ころねん-2:0),ねんころ=2;ころねん>ねんころ;ねんころ++)りよねん[ねんころ-2]=arguments[ねんころ];if(ねんねん(りよ)){var ころころ=りよ.apply(this,りよねん);if("undefined"==typeof ころころ)return ころころ}return this[ころ].apply(this,りよねん)}},{key:"handleStopScroll",value:function(ねん){var ころ=this._options?this._options.stopScroll:this.options.stopScroll;ころ?this.stop():ねん.preventDefault()}},{key:"handleContainerClick",value:function(ねん){for(var ころ=this.options,りよ=ねん.target;りよ&&りよ!==ねんりよころころ;りよ=りよ.parentNode)if(ねんころねん(りよ,ころ.trigger)){var ねんねん=りよ.getAttribute("data-scroll"),ころねん=this.parseDataOptions(りよ),りよねん=ねんねん||りよ.getAttribute("href");ころ=ころりよ({},ころ,ころねん),ころ.preventDefault&&ねん.preventDefault(),ころ.stopPropagation&&ねん.stopPropagation(),this._trigger=りよ,ころ.horizontalScroll&&ころ.verticalScroll?this.to(りよねん,ころ):ころ.verticalScroll?this.toTop(りよねん,ころ):ころ.horizontalScroll&&this.toLeft(りよねん,ころ)}}},{key:"parseDataOptions",value:function(ねん){var ころ=ねん.getAttribute("data-scroll-options");return ころ?JSON.parse(ころ):{}}}]),ねん}();return ねんねんねんりよ.defaults={trigger:"[data-scroll]",header:"[data-scroll-header]",duration:1e3,delay:0,easing:"easeOutQuint",offset:0,verticalScroll:!0,horizontalScroll:!1,stopScroll:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0,outputLog:!1,quickMode:!1,beforeScroll:null,afterScroll:null,cancelScroll:null,completeScroll:null,stepScroll:null},ねんねんねんりよ})},{}],3:[function(require,module,exports){"use strict";function _interopRequireDefault(ねん){return ねん&&ねん.__esModule?ねん:{"default":ねん}}function _classCallCheck(ねん,ころ){if(!(ねん instanceof ころ))throw new TypeError("Cannot call a class as a function")}function jumpTo(ねん){sweetScroll.toElement(ねん)}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(ねん){return typeof ねん}:function(ねん){return ねん&&"function"==typeof Symbol&&ねん.constructor===Symbol&&ねん!==Symbol.prototype?"symbol":typeof ねん},_createClass=function(){function ねん(ねん,ころ){for(var りよ=0;りよ<ころ.length;りよ++){var ねんねん=ころ[りよ];ねんねん.enumerable=ねんねん.enumerable||!1,ねんねん.configurable=!0,"value"in ねんねん&&(ねんねん.writable=!0),Object.defineProperty(ねん,ねんねん.key,ねんねん)}}return function(ころ,りよ,ねんねん){return りよ&&ねん(ころ.prototype,りよ),ねんねん&&ねん(ころ,ねんねん),ころ}}(),_gator=require("gator"),_gator2=_interopRequireDefault(_gator),_sweetScroll=require("sweet-scroll"),_sweetScroll2=_interopRequireDefault(_sweetScroll),modeLi={".":"findClass","?":"query",";":"exec","=":"jump","+":"func"},isAllowDomain,nameSpace=window,sweetScroll=void 0,HashabyCore=function(){function HashabyCore(){var ねん=this,ころ=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,HashabyCore),sweetScroll=new _sweetScroll2["default"](ころ.sweetScroll,ころ.sweetScrollContainer),this.allowDomainArr=["localhost"],this.forceHashchange=!0,(0,_gator2["default"])(document).on("click","a[href]",function(ころ){if(ねん.forceHashchange){var りよ=ころ.target,ねんねん=りよ.getAttribute("href");"string"==typeof ねんねん&&ねんねん.match(/^#/)&&(ねん.clearHash(),location.replace(ねんねん))}});var りよ=function(ころ){var りよ=location.hash,ねんねん=りよ[1],ころねん=modeLi[ねんねん];if(void 0!==ころねん){var りよねん=りよ.replace(/^#./,"");ねん.allowDomainArr.forEach(function(ねん){"string"==typeof ねん?isAllowDomain=isAllowDomain||ねん===location.hostname:ねん instanceof RegExp&&(isAllowDomain=isAllowDomain||ねん.test(location.hostname))}),ねん[ころねん](りよねん)}};window.addEventListener("load",りよ),window.addEventListener("hashchange",りよ)}return _createClass(HashabyCore,[{key:"findClass",value:function(ねん){var ころ=document.querySelector("."+ねん);jumpTo(ころ)}},{key:"query",value:function(ねん){var ころ=document.querySelector(ねん);jumpTo(ころ)}},{key:"exec",value:function exec(cmdStr){isAllowDomain&&eval(cmdStr)}},{key:"jump",value:function jump(cmdStr){var elm;isAllowDomain&&(elm=document.querySelector(eval(cmdStr)),jumpTo(elm))}},{key:"func",value:function(ねん){var ころ=ねん.match(/^(.+)\((.*)\)$/)||ねん.match(/^(.+)$/)||[],りよ=ころ[1],ねんねん=ころ[2]||"",ころねん=ねんねん.split(","),りよねん=!0;ころねん.forEach(function(ねん,ころ){var りよ=(ねん.match(/"(.*)"/)||ねん.match(/'(.*)'/)||[])[1],ねんねん=Number(ねん);りよ?ころねん[ころ]=String(りよ):isNaN(ねんねん)?りよねん=!1:ころねん[ころ]=ねんねん});var ねんころ=nameSpace[りよ];"function"==typeof ねんころ&&りよねん&&ねんころ.apply(null,ころねん)}},{key:"allowDomain",value:function(ねん){this.allowDomainArr.push(ねん)}},{key:"doWith",value:function(ねん){"object"===("undefined"==typeof ねん?"undefined":_typeof(ねん))&&(nameSpace=ねん)}},{key:"clearHash",value:function(){var ねん=location.href;if(/^http/.test(ねん)){var ころ=ねん.replace(/#.*$/,"");history.pushState(null,null,ころ)}}}]),HashabyCore}();exports["default"]=HashabyCore},{gator:1,"sweet-scroll":2}],4:[function(ねん,ころ,りよ){(function(ころ){"use strict";function りよ(ねん){return ねん&&ねん.__esModule?ねん:{"default":ねん}}var ねんねん=ねん("./hashaby-core"),ころねん=りよ(ねんねん);ころ.hashaby=new ころねん["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./hashaby-core":3}]},{},[4]);