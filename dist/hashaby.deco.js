"use strict";function _typeof(ねん){return ねん&&"undefined"!=typeof Symbol&&ねん.constructor===Symbol?"symbol":typeof ねん}function _classCallCheck(ねん,ころ){if(!(ねん instanceof ころ))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function ねん(ねん,ころ){for(var りよ=0;りよ<ころ.length;りよ++){var ねんねん=ころ[りよ];ねんねん.enumerable=ねんねん.enumerable||!1,ねんねん.configurable=!0,"value"in ねんねん&&(ねんねん.writable=!0),Object.defineProperty(ねん,ねんねん.key,ねんねん)}}return function(ころ,りよ,ねんねん){return りよ&&ねん(ころ.prototype,りよ),ねんねん&&ねん(ころ,ねんねん),ころ}}();!function(){function jumpTo(ねん){var ころ=$(ねん).offset().top;$("body,html").scrollTop(ころ)}var modeLi={".":"findClass","?":"query",";":"exec","=":"jump","+":"func"},isAllowDomain,nameSpace=window,Hashaby=function(){function Hashaby(){var ねん=this;_classCallCheck(this,Hashaby),this.allowDomainArr=["localhost"],this.forceHashchange=!0,$(function(){$(document).on("click","a[href]",function(ころ){if(ねん.forceHashchange){var りよ=$(ころ.target),ねんねん=りよ.attr("href");ねんねん.match(/^#/)&&(ねん.clearHash(),location.replace(ねんねん))}})}),$(window).on("load hashchange",function(ころ){var りよ=location.hash,ねんねん=りよ[1],ころねん=modeLi[ねんねん];if(void 0!==ころねん){var りよねん=りよ.replace(/^#./,"");ねん.allowDomainArr.forEach(function(ねん){"string"==typeof ねん?isAllowDomain=isAllowDomain||ねん===location.hostname:ねん instanceof RegExp&&(isAllowDomain=isAllowDomain||ねん.test(location.hostname))}),ねん[ころねん](りよねん)}})}return _createClass(Hashaby,[{key:"findClass",value:function(ねん){var ころ=document.querySelector("."+ねん);jumpTo(ころ)}},{key:"query",value:function(ねん){var ころ=document.querySelector(ねん);jumpTo(ころ)}},{key:"exec",value:function exec(cmdStr){isAllowDomain&&eval(cmdStr)}},{key:"jump",value:function jump(cmdStr){var elm;isAllowDomain&&(elm=document.querySelector(eval(cmdStr)),jumpTo(elm))}},{key:"func",value:function(ねん){var ころ=ねん.match(/^(.+)\((.*)\)$/)||ねん.match(/^(.+)$/)||[],りよ=ころ[1],ねんねん=ころ[2]||"",ころねん=ねんねん.split(","),りよねん=!0;ころねん.forEach(function(ねん,ころ){var りよ=(ねん.match(/"(.*)"/)||ねん.match(/'(.*)'/)||[])[1],ねんねん=Number(ねん);りよ?ころねん[ころ]=String(りよ):isNaN(ねんねん)?りよねん=!1:ころねん[ころ]=ねんねん});var ねんころ=nameSpace[りよ];"function"==typeof ねんころ&&りよねん&&ねんころ.apply(null,ころねん)}},{key:"allowDomain",value:function(ねん){this.allowDomainArr.push(ねん)}},{key:"with",value:function(ねん){"object"===("undefined"==typeof ねん?"undefined":_typeof(ねん))&&(nameSpace=ねん)}},{key:"clearHash",value:function(){var ねん=location.href;if(/^http/.test(ねん)){var ころ=ねん.replace(/#.*$/,"");history.pushState(null,null,ころ)}}}]),Hashaby}();window.hashaby=new Hashaby}();