function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}function k(e,t){return Array(t+1).join(e)}function S(e){return e.replace(/^\n*/,"")}function L(e){for(var t=e.length;t>0&&e[t-1]===`
`;)t--;return e.substring(0,t)}function B(e){return L(S(e))}var _=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function E(e){return w(e,_)}var O=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function D(e){return w(e,O)}function W(e){return x(e,O)}var P=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function j(e){return w(e,P)}function G(e){return x(e,P)}function w(e,t){return t.indexOf(e.nodeName)>=0}function x(e,t){return e.getElementsByTagName&&t.some(function(n){return e.getElementsByTagName(n).length})}var q=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function I(e){return q.reduce(function(t,n){return t.replace(n[0],n[1])},e)}var o={};o.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};o.lineBreak={filter:"br",replacement:function(e,t,n){return n.br+`
`}};o.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){var r=Number(t.nodeName.charAt(1));if(n.headingStyle==="setext"&&r<3){var i=k(r===1?"=":"-",e.length);return`

`+e+`
`+i+`

`}else return`

`+k("#",r)+" "+e+`

`}};o.blockquote={filter:"blockquote",replacement:function(e){return e=B(e).replace(/^/gm,"> "),`

`+e+`

`}};o.list={filter:["ul","ol"],replacement:function(e,t){var n=t.parentNode;return n.nodeName==="LI"&&n.lastElementChild===t?`
`+e:`

`+e+`

`}};o.listItem={filter:"li",replacement:function(e,t,n){var r=n.bulletListMarker+"   ",i=t.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),c=Array.prototype.indexOf.call(i.children,t);r=(a?Number(a)+c:c+1)+".  "}var s=/\n$/.test(e);return e=B(e)+(s?`
`:""),e=e.replace(/\n/gm,`
`+" ".repeat(r.length)),r+e+(t.nextSibling?`
`:"")}};o.indentedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,n){return`

    `+t.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};o.fencedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,n){for(var r=t.firstChild.getAttribute("class")||"",i=(r.match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,c=n.fence.charAt(0),s=3,l=new RegExp("^"+c+"{3,}","gm"),u;u=l.exec(a);)u[0].length>=s&&(s=u[0].length+1);var p=k(c,s);return`

`+p+i+`
`+a.replace(/\n$/,"")+`
`+p+`

`}};o.horizontalRule={filter:"hr",replacement:function(e,t,n){return`

`+n.hr+`

`}};o.inlineLink={filter:function(e,t){return t.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t){var n=T(t.getAttribute("href")),r=N(m(t.getAttribute("title"))),i=r?' "'+r+'"':"";return"["+e+"]("+n+i+")"}};o.referenceLink={filter:function(e,t){return t.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t,n){var r=T(t.getAttribute("href")),i=m(t.getAttribute("title"));i&&(i=' "'+N(i)+'"');var a,c;switch(n.linkReferenceStyle){case"collapsed":a="["+e+"][]",c="["+e+"]: "+r+i;break;case"shortcut":a="["+e+"]",c="["+e+"]: "+r+i;break;default:var s=this.references.length+1;a="["+e+"]["+s+"]",c="["+s+"]: "+r+i}return this.references.push(c),a},references:[],append:function(e){var t="";return this.references.length&&(t=`

`+this.references.join(`
`)+`

`,this.references=[]),t}};o.emphasis={filter:["em","i"],replacement:function(e,t,n){return e.trim()?n.emDelimiter+e+n.emDelimiter:""}};o.strong={filter:["strong","b"],replacement:function(e,t,n){return e.trim()?n.strongDelimiter+e+n.strongDelimiter:""}};o.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n=e.parentNode.nodeName==="PRE"&&!t;return e.nodeName==="CODE"&&!n},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",n="`",r=e.match(/`+/gm)||[];r.indexOf(n)!==-1;)n=n+"`";return n+t+e+t+n}};o.image={filter:"img",replacement:function(e,t){var n=I(m(t.getAttribute("alt"))),r=T(t.getAttribute("src")||""),i=m(t.getAttribute("title")),a=i?' "'+N(i)+'"':"";return r?"!["+n+"]("+r+a+")":""}};function m(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function T(e){var t=e.replace(/([<>()])/g,"\\$1");return t.indexOf(" ")>=0?"<"+t+">":t}function N(e){return e.replace(/"/g,'\\"')}function M(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var t in e.rules)this.array.push(e.rules[t])}M.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var t;return(t=g(this.array,e,this.options))||(t=g(this._keep,e,this.options))||(t=g(this._remove,e,this.options))?t:this.defaultRule},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};function g(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(X(i,t,n))return i}}function X(e,t,n){var r=e.filter;if(typeof r=="string"){if(r===t.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(t.nodeName.toLowerCase())>-1)return!0}else if(typeof r=="function"){if(r.call(e,t,n))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function z(e){var t=e.element,n=e.isBlock,r=e.isVoid,i=e.isPre||function(V){return V.nodeName==="PRE"};if(!(!t.firstChild||i(t))){for(var a=null,c=!1,s=null,l=b(s,t,i);l!==t;){if(l.nodeType===3||l.nodeType===4){var u=l.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!c&&u[0]===" "&&(u=u.substr(1)),!u){l=v(l);continue}l.data=u,a=l}else if(l.nodeType===1)n(l)||l.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,c=!1):r(l)||i(l)?(a=null,c=!0):a&&(c=!1);else{l=v(l);continue}var p=b(s,l,i);s=l,l=p}a&&(a.data=a.data.replace(/ $/,""),a.data||v(a))}}function v(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function b(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}var A=typeof window<"u"?window:{};function K(){var e=A.DOMParser,t=!1;try{new e().parseFromString("","text/html")&&(t=!0)}catch{}return t}function Y(){var e=function(){};return Q()?e.prototype.parseFromString=function(t){var n=new window.ActiveXObject("htmlfile");return n.designMode="on",n.open(),n.write(t),n.close(),n}:e.prototype.parseFromString=function(t){var n=document.implementation.createHTMLDocument("");return n.open(),n.write(t),n.close(),n},e}function Q(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{A.ActiveXObject&&(e=!0)}return e}var J=K()?A.DOMParser:Y();function Z(e,t){var n;if(typeof e=="string"){var r=ee().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");n=r.getElementById("turndown-root")}else n=e.cloneNode(!0);return z({element:n,isBlock:E,isVoid:D,isPre:t.preformattedCode?te:null}),n}var y;function ee(){return y=y||new J,y}function te(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function ne(e,t){return e.isBlock=E(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=re(e),e.flankingWhitespace=ie(e,t),e}function re(e){return!D(e)&&!j(e)&&/^\s*$/i.test(e.textContent)&&!W(e)&&!G(e)}function ie(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var n=ae(e.textContent);return n.leadingAscii&&R("left",e,t)&&(n.leading=n.leadingNonAscii),n.trailingAscii&&R("right",e,t)&&(n.trailing=n.trailingNonAscii),{leading:n.leading,trailing:n.trailing}}function ae(e){var t=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:t[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]}}function R(e,t,n){var r,i,a;return e==="left"?(r=t.previousSibling,i=/ $/):(r=t.nextSibling,i=/^ /),r&&(r.nodeType===3?a=i.test(r.nodeValue):n.preformattedCode&&r.nodeName==="CODE"?a=!1:r.nodeType===1&&!E(r)&&(a=i.test(r.textContent))),a}var le=Array.prototype.reduce;function h(e){if(!(this instanceof h))return new h(e);var t={rules:o,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(n,r){return r.isBlock?`

`:""},keepReplacement:function(n,r){return r.isBlock?`

`+r.outerHTML+`

`:r.outerHTML},defaultReplacement:function(n,r){return r.isBlock?`

`+n+`

`:n}};this.options=U({},t,e),this.rules=new M(this.options)}h.prototype={turndown:function(e){if(!se(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var t=F.call(this,new Z(e,this.options));return oe.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return I(e)}};function F(e){var t=this;return le.call(e.childNodes,function(n,r){r=new ne(r,t.options);var i="";return r.nodeType===3?i=r.isCode?r.nodeValue:t.escape(r.nodeValue):r.nodeType===1&&(i=ce.call(t,r)),H(n,i)},"")}function oe(e){var t=this;return this.rules.forEach(function(n){typeof n.append=="function"&&(e=H(e,n.append(t.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function ce(e){var t=this.rules.forNode(e),n=F.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(n=n.trim()),r.leading+t.replacement(n,e,this.options)+r.trailing}function H(e,t){var n=L(e),r=S(t),i=Math.max(e.length-n.length,t.length-r.length),a=`

`.substring(0,i);return n+a+r}function se(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}const $=new h({headingStyle:"atx",codeBlockStyle:"fenced"});$.addRule("starlightCallouts",{filter:["aside"],replacement:function(e){return"> "+e+`

`}});function d(){const e=document.querySelector(".sl-markdown-content");return e?$.turndown(e):""}function f(e){const t=document.getElementById("ai-toast");t&&(t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2e3))}async function ue(){const e=d();if(!e){f("No content found");return}try{await navigator.clipboard.writeText(e),f("Copied as Markdown")}catch{f("Failed to copy")}}function fe(){const e=d();if(!e)return;const t=1500,r=`Please analyze the following documentation:

${e.length>t?e.substring(0,t)+`

... (truncated)`:e}`;window.open(`https://chat.openai.com/?q=${encodeURIComponent(r)}`,"_blank")}function de(){const e=d();if(!e)return;const t=1500,r=`Please analyze the following documentation:

${e.length>t?e.substring(0,t)+`

... (truncated)`:e}`;window.open(`https://claude.ai/new?q=${encodeURIComponent(r)}`,"_blank")}function pe(){const e=d();if(!e)return;const t=3e3,r=`Read this documentation page and help me implement it:

${e.length>t?e.substring(0,t)+`

... (truncated)`:e}`;navigator.clipboard.writeText(r).then(()=>f("Prompt copied – paste in Cursor")).catch(()=>f("Failed to copy"))}function me(){const e=d();if(!e)return;const t=3e3,r=`Read this documentation page and help me implement it:

${e.length>t?e.substring(0,t)+`

... (truncated)`:e}`;navigator.clipboard.writeText(r).then(()=>f("Prompt copied – paste in VS Code")).catch(()=>f("Failed to copy"))}const he=document.getElementById("ac-copy-btn"),C=document.getElementById("ac-dropdown-menu");he?.addEventListener("click",e=>{e.stopPropagation(),C?.classList.toggle("open")});document.addEventListener("click",()=>{C?.classList.remove("open")});C?.addEventListener("click",e=>e.stopPropagation());document.getElementById("ac-copy-btn")?.addEventListener("click",ue);document.getElementById("chatgpt-btn")?.addEventListener("click",fe);document.getElementById("cursor-btn")?.addEventListener("click",pe);document.getElementById("vscode-btn")?.addEventListener("click",me);document.getElementById("claude-btn")?.addEventListener("click",de);
