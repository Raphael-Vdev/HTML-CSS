!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a026c618-3f30-4303-b2df-b7ab144b2bf2",e._sentryDebugIdIdentifier="sentry-dbid-a026c618-3f30-4303-b2df-b7ab144b2bf2")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"4edc5f77"},(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8814],{28814:function(e,t,i){i.d(t,{Dx:function(){return y},KS:function(){return p},Vt:function(){return x},c1:function(){return O},ir:function(){return A},j:function(){return S},jN:function(){return k},lC:function(){return u},p0:function(){return f}});var n=i(48587),o=i(87708),s=i(92522);class r{constructor(e,t,i){this.from=e,this.to=t,this.diagnostic=i}}class a{constructor(e,t,i){this.diagnostics=e,this.panel=t,this.selected=i}static init(e,t,i){let o=e,s=i.facet(R).markerFilter;s&&(o=s(o));let r=n.p.set(o.map((e=>e.from==e.to||e.from==e.to-1&&i.doc.lineAt(e.from).to==e.from?n.p.widget({widget:new D(e),diagnostic:e}).range(e.from):n.p.mark({attributes:{class:"cm-lintRange cm-lintRange-"+e.severity+(e.markClass?" "+e.markClass:"")},diagnostic:e}).range(e.from,e.to))),!0);return new a(r,t,l(r))}}function l(e,t=null,i=0){let n=null;return e.between(i,1e9,((e,i,{spec:o})=>{if(!t||o.diagnostic==t)return n=new r(e,i,o.diagnostic),!1})),n}function c(e,t){let i=e.startState.doc.lineAt(t.pos);return!(!e.effects.some((e=>e.is(u)))&&!e.changes.touchesRange(i.from,i.to))}function d(e,t){return e.field(g,!1)?t:t.concat(o.Py.appendConfig.of(E))}function f(e,t){return{effects:d(e,[u.of(t)])}}const u=o.Py.define(),h=o.Py.define(),m=o.Py.define(),g=o.QQ.define({create:()=>new a(n.p.none,null,null),update(e,t){if(t.docChanged){let i=e.diagnostics.map(t.changes),n=null;if(e.selected){let o=t.changes.mapPos(e.selected.from,1);n=l(i,e.selected.diagnostic,o)||l(i,null,o)}e=new a(i,e.panel,n)}for(let i of t.effects)i.is(u)?e=a.init(i.value,e.panel,t.state):i.is(h)?e=new a(e.diagnostics,i.value?_.open:null,e.selected):i.is(m)&&(e=new a(e.diagnostics,e.panel,i.value));return e},provide:e=>[n.mH.from(e,(e=>e.panel)),n.tk.decorations.from(e,(e=>e.diagnostics))]});function p(e){let t=e.field(g,!1);return t?t.diagnostics.size:0}const b=n.p.mark({class:"cm-lintRange cm-lintRange-active"});function w(e,t,i){let{diagnostics:n}=e.state.field(g),o=[],s=2e8,r=0;n.between(t-(i<0?1:0),t+(i>0?1:0),((e,n,{spec:a})=>{t>=e&&t<=n&&(e==n||(t>e||i>0)&&(t<n||i<0))&&(o.push(a.diagnostic),s=Math.min(e,s),r=Math.max(n,r))}));let a=e.state.facet(R).tooltipFilter;return a&&(o=a(o)),o.length?{pos:s,end:r,above:e.state.doc.lineAt(s).to<r,create:()=>({dom:v(e,o)})}:null}function v(e,t){return(0,s.Z)("ul",{class:"cm-tooltip-lint"},t.map((t=>T(e,t,!1))))}const y=e=>{let t=e.state.field(g,!1);t&&t.panel||e.dispatch({effects:d(e.state,[h.of(!0)])});let i=(0,n.Sd)(e,_.open);return i&&i.dom.querySelector(".cm-panel-lint ul").focus(),!0},k=e=>{let t=e.state.field(g,!1);return!(!t||!t.panel)&&(e.dispatch({effects:h.of(!1)}),!0)},x=e=>{let t=e.state.field(g,!1);if(!t)return!1;let i=e.state.selection.main,n=t.diagnostics.iter(i.to+1);return!(!n.value&&(n=t.diagnostics.iter(0),!n.value||n.from==i.from&&n.to==i.to))&&(e.dispatch({selection:{anchor:n.from,head:n.to},scrollIntoView:!0}),!0)},C=n.lg.fromClass(class{constructor(e){this.view=e,this.timeout=-1,this.set=!0;let{delay:t}=e.state.facet(R);this.lintTime=Date.now()+t,this.run=this.run.bind(this),this.timeout=setTimeout(this.run,t)}run(){let e=Date.now();if(e<this.lintTime-10)setTimeout(this.run,this.lintTime-e);else{this.set=!1;let{state:e}=this.view,{sources:t}=e.facet(R);Promise.all(t.map((e=>Promise.resolve(e(this.view))))).then((t=>{let i=t.reduce(((e,t)=>e.concat(t)));this.view.state.doc==e.doc&&this.view.dispatch(f(this.view.state,i))}),(e=>{(0,n.OO)(this.view.state,e)}))}}update(e){let t=e.state.facet(R);(e.docChanged||t!=e.startState.facet(R)||t.needsRefresh&&t.needsRefresh(e))&&(this.lintTime=Date.now()+t.delay,this.set||(this.set=!0,this.timeout=setTimeout(this.run,t.delay)))}force(){this.set&&(this.lintTime=Date.now(),this.run())}destroy(){clearTimeout(this.timeout)}}),R=o.r$.define({combine:e=>Object.assign({sources:e.map((e=>e.source))},(0,o.BO)(e.map((e=>e.config)),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null},{needsRefresh:(e,t)=>e?t?i=>e(i)||t(i):e:t}))});function A(e,t={}){return[R.of({source:e,config:t}),C,E]}function S(e){let t=e.plugin(C);t&&t.force()}function I(e){let t=[];if(e)e:for(let{name:i}of e){for(let e=0;e<i.length;e++){let n=i[e];if(/[a-zA-Z]/.test(n)&&!t.some((e=>e.toLowerCase()==n.toLowerCase()))){t.push(n);continue e}}t.push("")}return t}function T(e,t,i){var n;let o=i?I(t.actions):[];return(0,s.Z)("li",{class:"cm-diagnostic cm-diagnostic-"+t.severity},(0,s.Z)("span",{class:"cm-diagnosticText"},t.renderMessage?t.renderMessage():t.message),null===(n=t.actions)||void 0===n?void 0:n.map(((i,n)=>{let r=!1,a=n=>{if(n.preventDefault(),r)return;r=!0;let o=l(e.state.field(g).diagnostics,t);o&&i.apply(e,o.from,o.to)},{name:c}=i,d=o[n]?c.indexOf(o[n]):-1,f=d<0?c:[c.slice(0,d),(0,s.Z)("u",c.slice(d,d+1)),c.slice(d+1)];return(0,s.Z)("button",{type:"button",class:"cm-diagnosticAction",onclick:a,onmousedown:a,"aria-label":` Action: ${c}${d<0?"":` (access key "${o[n]})"`}.`},f)})),t.source&&(0,s.Z)("div",{class:"cm-diagnosticSource"},t.source))}class D extends n.l9{constructor(e){super(),this.diagnostic=e}eq(e){return e.diagnostic==this.diagnostic}toDOM(){return(0,s.Z)("span",{class:"cm-lintPoint cm-lintPoint-"+this.diagnostic.severity})}}class P{constructor(e,t){this.diagnostic=t,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=T(e,t,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class _{constructor(e){this.view=e,this.items=[];this.list=(0,s.Z)("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:t=>{if(27==t.keyCode)k(this.view),this.view.focus();else if(38==t.keyCode||33==t.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(40==t.keyCode||34==t.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(36==t.keyCode)this.moveSelection(0);else if(35==t.keyCode)this.moveSelection(this.items.length-1);else if(13==t.keyCode)this.view.focus();else{if(!(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0))return;{let{diagnostic:i}=this.items[this.selectedIndex],n=I(i.actions);for(let o=0;o<n.length;o++)if(n[o].toUpperCase().charCodeAt(0)==t.keyCode){let t=l(this.view.state.field(g).diagnostics,i);t&&i.actions[o].apply(e,t.from,t.to)}}}t.preventDefault()},onclick:e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)}}),this.dom=(0,s.Z)("div",{class:"cm-panel-lint"},this.list,(0,s.Z)("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>k(this.view)},"\xd7")),this.update()}get selectedIndex(){let e=this.view.state.field(g).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(g),i=0,n=!1,o=null;for(e.between(0,this.view.state.doc.length,((e,s,{spec:r})=>{let a,l=-1;for(let t=i;t<this.items.length;t++)if(this.items[t].diagnostic==r.diagnostic){l=t;break}l<0?(a=new P(this.view,r.diagnostic),this.items.splice(i,0,a),n=!0):(a=this.items[l],l>i&&(this.items.splice(i,l-i),n=!0)),t&&a.diagnostic==t.diagnostic?a.dom.hasAttribute("aria-selected")||(a.dom.setAttribute("aria-selected","true"),o=a):a.dom.hasAttribute("aria-selected")&&a.dom.removeAttribute("aria-selected"),i++}));i<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)n=!0,this.items.pop();0==this.items.length&&(this.items.push(new P(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),n=!0),o?(this.list.setAttribute("aria-activedescendant",o.id),this.view.requestMeasure({key:this,read:()=>({sel:o.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{e.top<t.top?this.list.scrollTop-=t.top-e.top:e.bottom>t.bottom&&(this.list.scrollTop+=e.bottom-t.bottom)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),n&&this.sync()}sync(){let e=this.list.firstChild;function t(){let t=e;e=t.nextSibling,t.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;e!=i.dom;)t();e=i.dom.nextSibling}else this.list.insertBefore(i.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=l(this.view.state.field(g).diagnostics,this.items[e].diagnostic);t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:m.of(t)})}static open(e){return new _(e)}}function Z(e,t='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function B(e){return Z(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const L=n.tk.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:B("#d11")},".cm-lintRange-warning":{backgroundImage:B("orange")},".cm-lintRange-info":{backgroundImage:B("#999")},".cm-lintRange-hint":{backgroundImage:B("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});n.SJ;const E=[g,n.tk.decorations.compute([g],(e=>{let{selected:t,panel:i}=e.field(g);return t&&i&&t.from!=t.to?n.p.set([b.range(t.from,t.to)]):n.p.none})),(0,n.bF)(w,{hideOn:c}),L];function O(e,t){let i=e.field(g,!1);if(i&&i.diagnostics.size)for(let n=o.Xs.iter([i.diagnostics]);n.value;n.next())t(n.value.spec.diagnostic,n.from,n.to)}},92522:function(e,t,i){function n(){var e=arguments[0];"string"==typeof e&&(e=document.createElement(e));var t=1,i=arguments[1];if(i&&"object"==typeof i&&null==i.nodeType&&!Array.isArray(i)){for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){var s=i[n];"string"==typeof s?e.setAttribute(n,s):null!=s&&(e[n]=s)}t++}for(;t<arguments.length;t++)o(e,arguments[t]);return e}function o(e,t){if("string"==typeof t)e.appendChild(document.createTextNode(t));else if(null==t);else if(null!=t.nodeType)e.appendChild(t);else{if(!Array.isArray(t))throw new RangeError("Unsupported child node: "+t);for(var i=0;i<t.length;i++)o(e,t[i])}}i.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=8814-3720c778673bb33e.js.map