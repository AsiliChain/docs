function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}function y(e,t){return Array(t+1).join(e)}function R(e){return e.replace(/^\n*/,"")}function S(e){for(var t=e.length;t>0&&e[t-1]===`
`;)t--;return e.substring(0,t)}function O(e){return S(R(e))}var V=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function k(e){return E(e,V)}var B=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function D(e){return E(e,B)}function W(e){return P(e,B)}var L=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function _(e){return E(e,L)}function j(e){return P(e,L)}function E(e,t){return t.indexOf(e.nodeName)>=0}function P(e,t){return e.getElementsByTagName&&t.some(function(n){return e.getElementsByTagName(n).length})}var G=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function x(e){return G.reduce(function(t,n){return t.replace(n[0],n[1])},e)}var o={};o.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};o.lineBreak={filter:"br",replacement:function(e,t,n){return n.br+`
`}};o.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){var r=Number(t.nodeName.charAt(1));if(n.headingStyle==="setext"&&r<3){var i=y(r===1?"=":"-",e.length);return`

`+e+`
`+i+`

`}else return`

`+y("#",r)+" "+e+`

`}};o.blockquote={filter:"blockquote",replacement:function(e){return e=O(e).replace(/^/gm,"> "),`

`+e+`

`}};o.list={filter:["ul","ol"],replacement:function(e,t){var n=t.parentNode;return n.nodeName==="LI"&&n.lastElementChild===t?`
`+e:`

`+e+`

`}};o.listItem={filter:"li",replacement:function(e,t,n){var r=n.bulletListMarker+"   ",i=t.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),s=Array.prototype.indexOf.call(i.children,t);r=(a?Number(a)+s:s+1)+".  "}var c=/\n$/.test(e);return e=O(e)+(c?`
`:""),e=e.replace(/\n/gm,`
`+" ".repeat(r.length)),r+e+(t.nextSibling?`
`:"")}};o.indentedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,n){return`

    `+t.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};o.fencedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,n){for(var r=t.firstChild.getAttribute("class")||"",i=(r.match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,s=n.fence.charAt(0),c=3,l=new RegExp("^"+s+"{3,}","gm"),u;u=l.exec(a);)u[0].length>=c&&(c=u[0].length+1);var d=y(s,c);return`

`+d+i+`
`+a.replace(/\n$/,"")+`
`+d+`

`}};o.horizontalRule={filter:"hr",replacement:function(e,t,n){return`

`+n.hr+`

`}};o.inlineLink={filter:function(e,t){return t.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t){var n=N(t.getAttribute("href")),r=T(h(t.getAttribute("title"))),i=r?' "'+r+'"':"";return"["+e+"]("+n+i+")"}};o.referenceLink={filter:function(e,t){return t.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t,n){var r=N(t.getAttribute("href")),i=h(t.getAttribute("title"));i&&(i=' "'+T(i)+'"');var a,s;switch(n.linkReferenceStyle){case"collapsed":a="["+e+"][]",s="["+e+"]: "+r+i;break;case"shortcut":a="["+e+"]",s="["+e+"]: "+r+i;break;default:var c=this.references.length+1;a="["+e+"]["+c+"]",s="["+c+"]: "+r+i}return this.references.push(s),a},references:[],append:function(e){var t="";return this.references.length&&(t=`

`+this.references.join(`
`)+`

`,this.references=[]),t}};o.emphasis={filter:["em","i"],replacement:function(e,t,n){return e.trim()?n.emDelimiter+e+n.emDelimiter:""}};o.strong={filter:["strong","b"],replacement:function(e,t,n){return e.trim()?n.strongDelimiter+e+n.strongDelimiter:""}};o.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n=e.parentNode.nodeName==="PRE"&&!t;return e.nodeName==="CODE"&&!n},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",n="`",r=e.match(/`+/gm)||[];r.indexOf(n)!==-1;)n=n+"`";return n+t+e+t+n}};o.image={filter:"img",replacement:function(e,t){var n=x(h(t.getAttribute("alt"))),r=N(t.getAttribute("src")||""),i=h(t.getAttribute("title")),a=i?' "'+T(i)+'"':"";return r?"!["+n+"]("+r+a+")":""}};function h(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function N(e){var t=e.replace(/([<>()])/g,"\\$1");return t.indexOf(" ")>=0?"<"+t+">":t}function T(e){return e.replace(/"/g,'\\"')}function I(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var t in e.rules)this.array.push(e.rules[t])}I.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var t;return(t=m(this.array,e,this.options))||(t=m(this._keep,e,this.options))||(t=m(this._remove,e,this.options))?t:this.defaultRule},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};function m(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(X(i,t,n))return i}}function X(e,t,n){var r=e.filter;if(typeof r=="string"){if(r===t.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(t.nodeName.toLowerCase())>-1)return!0}else if(typeof r=="function"){if(r.call(e,t,n))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function q(e){var t=e.element,n=e.isBlock,r=e.isVoid,i=e.isPre||function($){return $.nodeName==="PRE"};if(!(!t.firstChild||i(t))){for(var a=null,s=!1,c=null,l=C(c,t,i);l!==t;){if(l.nodeType===3||l.nodeType===4){var u=l.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!s&&u[0]===" "&&(u=u.substr(1)),!u){l=g(l);continue}l.data=u,a=l}else if(l.nodeType===1)n(l)||l.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,s=!1):r(l)||i(l)?(a=null,s=!0):a&&(s=!1);else{l=g(l);continue}var d=C(c,l,i);c=l,l=d}a&&(a.data=a.data.replace(/ $/,""),a.data||g(a))}}function g(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function C(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}var A=typeof window<"u"?window:{};function K(){var e=A.DOMParser,t=!1;try{new e().parseFromString("","text/html")&&(t=!0)}catch{}return t}function Y(){var e=function(){};return z()?e.prototype.parseFromString=function(t){var n=new window.ActiveXObject("htmlfile");return n.designMode="on",n.open(),n.write(t),n.close(),n}:e.prototype.parseFromString=function(t){var n=document.implementation.createHTMLDocument("");return n.open(),n.write(t),n.close(),n},e}function z(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{A.ActiveXObject&&(e=!0)}return e}var Q=K()?A.DOMParser:Y();function J(e,t){var n;if(typeof e=="string"){var r=Z().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");n=r.getElementById("turndown-root")}else n=e.cloneNode(!0);return q({element:n,isBlock:k,isVoid:D,isPre:t.preformattedCode?ee:null}),n}var v;function Z(){return v=v||new Q,v}function ee(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function te(e,t){return e.isBlock=k(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=ne(e),e.flankingWhitespace=re(e,t),e}function ne(e){return!D(e)&&!_(e)&&/^\s*$/i.test(e.textContent)&&!W(e)&&!j(e)}function re(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var n=ie(e.textContent);return n.leadingAscii&&b("left",e,t)&&(n.leading=n.leadingNonAscii),n.trailingAscii&&b("right",e,t)&&(n.trailing=n.trailingNonAscii),{leading:n.leading,trailing:n.trailing}}function ie(e){var t=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:t[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]}}function b(e,t,n){var r,i,a;return e==="left"?(r=t.previousSibling,i=/ $/):(r=t.nextSibling,i=/^ /),r&&(r.nodeType===3?a=i.test(r.nodeValue):n.preformattedCode&&r.nodeName==="CODE"?a=!1:r.nodeType===1&&!k(r)&&(a=i.test(r.textContent))),a}var ae=Array.prototype.reduce;function p(e){if(!(this instanceof p))return new p(e);var t={rules:o,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(n,r){return r.isBlock?`

`:""},keepReplacement:function(n,r){return r.isBlock?`

`+r.outerHTML+`

`:r.outerHTML},defaultReplacement:function(n,r){return r.isBlock?`

`+n+`

`:n}};this.options=U({},t,e),this.rules=new I(this.options)}p.prototype={turndown:function(e){if(!se(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var t=M.call(this,new J(e,this.options));return le.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return x(e)}};function M(e){var t=this;return ae.call(e.childNodes,function(n,r){r=new te(r,t.options);var i="";return r.nodeType===3?i=r.isCode?r.nodeValue:t.escape(r.nodeValue):r.nodeType===1&&(i=oe.call(t,r)),F(n,i)},"")}function le(e){var t=this;return this.rules.forEach(function(n){typeof n.append=="function"&&(e=F(e,n.append(t.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function oe(e){var t=this.rules.forNode(e),n=M.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(n=n.trim()),r.leading+t.replacement(n,e,this.options)+r.trailing}function F(e,t){var n=S(e),r=R(t),i=Math.max(e.length-n.length,t.length-r.length),a=`

`.substring(0,i);return n+a+r}function se(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}const H=new p({headingStyle:"atx",codeBlockStyle:"fenced"});H.addRule("starlightCallouts",{filter:["aside"],replacement:function(e){return"> "+e+`

`}});function w(){const e=document.querySelector(".sl-markdown-content");return e?H.turndown(e):""}function f(e){const t=document.getElementById("ai-toast");t&&(t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2e3))}async function ce(){const e=w();if(!e){f("No content found");return}try{await navigator.clipboard.writeText(e),f("Copied as Markdown")}catch{f("Failed to copy")}}function ue(){const e=w();if(!e)return;const t=1500;let n=e;n.length>t&&(n=e.substring(0,t)+`

... (truncated)`);const r=`Please analyze the following documentation:

${n}`,i=`https://chat.openai.com/?q=${encodeURIComponent(r)}`;window.open(i,"_blank")}function fe(){const e=w();if(!e)return;const t=3e3;let n=e;n.length>t&&(n=e.substring(0,t)+`

... (truncated)`);const r=`Read this documentation page and help me implement it:

${n}`;navigator.clipboard.writeText(r).then(()=>{f("Prompt copied – paste in Cursor")}).catch(()=>{f("Failed to copy")})}document.getElementById("copy-markdown-btn")?.addEventListener("click",ce);document.getElementById("chatgpt-btn")?.addEventListener("click",ue);document.getElementById("cursor-btn")?.addEventListener("click",fe);
