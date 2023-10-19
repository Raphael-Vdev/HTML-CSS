!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3ab103fd-d6c5-4763-84e1-56e01dcf151b",e._sentryDebugIdIdentifier="sentry-dbid-3ab103fd-d6c5-4763-84e1-56e01dcf151b")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"4edc5f77"},(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{95940:function(e,n,t){t.d(n,{M:function(){return Z},_d:function(){return h},bg:function(){return f},fP:function(){return g}});var r=t(72006),i=t(43119),o=t(71440),a=t(73768),l=t(81462),s=t(50216);function c(){var e=(0,i.Z)(["\n  fragment TipReplFragment on Repl {\n    id\n    slug\n    user {\n      id\n    }\n    totalCyclesTips\n    currentUserTotalTips\n  }\n"]);return c=function(){return e},e}function u(){var e=(0,i.Z)(["\n  fragment TipThemeFragment on CustomTheme {\n    id\n    slug\n    author {\n      id\n    }\n    totalCyclesTips\n    currentUserTotalTips\n  }\n"]);return u=function(){return e},e}function p(){var e=(0,i.Z)(["\n  mutation TipSendTip($input: SendTipInput!) {\n    sendTip(input: $input) {\n      ... on UserError {\n        __typename\n        message\n      }\n      ... on NotFoundError {\n        __typename\n        message\n      }\n      ... on UnauthorizedError {\n        __typename\n        message\n      }\n      ... on SendTipResult {\n        __typename\n        repl {\n          id\n          ...TipReplFragment\n          ...TopTipperReplLeaderboard\n        }\n        theme {\n          id\n          ...TipThemeFragment\n          ...TopTipperThemeLeaderboard\n        }\n        currentUser {\n          id\n          ...CyclesBalanceFragment\n        }\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return p=function(){return e},e}function d(){var e=(0,i.Z)(["\n  mutation TippingCyclesPurchaseStripeCheckoutSession(\n    $input: CreateCyclesStripeCheckoutSessionInput!\n  ) {\n    createCyclesStripeCheckoutSession(input: $input) {\n      ... on CreateCyclesStripeCheckoutSessionResult {\n        sessionUrl\n      }\n      ... on UnauthorizedError {\n        message\n      }\n      ... on UserError {\n        message\n      }\n    }\n  }\n"]);return d=function(){return e},e}var m={},f=(0,o.Ps)(c()),h=(0,o.Ps)(u()),T=(0,o.Ps)(p(),f,a.pT,h,a.h1,l.KD);function g(e){var n=(0,r.Z)({},m,e);return s.D(T,n)}var v=(0,o.Ps)(d());function Z(e){var n=(0,r.Z)({},m,e);return s.D(v,n)}},93366:function(e,n,t){t.d(n,{R1:function(){return h},SI:function(){return Z},ir:function(){return b},rd:function(){return g}});var r=t(72006),i=t(43119),o=t(71440),a=t(95940),l=t(73768),s=t(24635);function c(){var e=(0,i.Z)(["\n  fragment IsTippingAvailableForRecipient on User {\n    id\n    hasPrivacyRole\n    isVerified\n  }\n"]);return c=function(){return e},e}function u(){var e=(0,i.Z)(["\n  fragment TipSurfaceOwnerFragment on User {\n    id\n    username\n    ...IsTippingAvailableForRecipient\n  }\n  ","\n"]);return u=function(){return e},e}function p(){var e=(0,i.Z)(["\n  fragment IsTippingAvailableForSender on CurrentUser {\n    id\n    hasPrivacyRole\n    isVerified\n  }\n"]);return p=function(){return e},e}function d(){var e=(0,i.Z)(["\n  query TipRepl($id: String!) {\n    repl(id: $id) {\n      ... on Repl {\n        user {\n          ... on User {\n            id\n            ...TipSurfaceOwnerFragment\n          }\n        }\n        ...TipReplFragment\n        ...TopTipperReplLeaderboard\n      }\n    }\n    currentUser {\n      id\n      ...IsTippingAvailableForSender\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return d=function(){return e},e}function m(){var e=(0,i.Z)(["\n  query TipTheme($input: CustomThemeByIdInput!) {\n    customThemeById(input: $input) {\n      ... on CustomTheme {\n        author {\n          ... on User {\n            id\n            ...TipSurfaceOwnerFragment\n          }\n        }\n        ...TipThemeFragment\n        ...TopTipperThemeLeaderboard\n      }\n    }\n    currentUser {\n      id\n      ...IsTippingAvailableForSender\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return m=function(){return e},e}var f={},h=(0,o.Ps)(c()),T=(0,o.Ps)(u(),h),g=(0,o.Ps)(p()),v=(0,o.Ps)(d(),T,a.bg,l.pT,g);function Z(e){var n=(0,r.Z)({},f,e);return s.a(v,n)}var y=(0,o.Ps)(m(),T,a._d,l.h1,g);function b(e){var n=(0,r.Z)({},f,e);return s.a(y,n)}},15454:function(e,n,t){t.d(n,{Z:function(){return be},L:function(){return Te}});var r=t(57389),i=t(74985),o=t(39541),a=t(61284),l=t(85368),s=t(39902),c=t(32104),u=t(57135),p=t(2272),d=t(9970),m=t(96583),f=t(95940),h=t(66539),T=t(45510),g=t(82108),v=t(50959),Z=t(13233),y=t(625),b=t(43312),w=t(63128),S=t(34338),x=t(33137),C=(0,b.F4)({"0%":{width:"100%"},"100%":{width:"0%"}}),U=function(e){var n,t=e.tipAmount,c=e.onUndo,u=e.show,p=e.undoTime;return u?(0,i.BX)(w.Tg,{tag:"button",css:[o.l0.focusRing,o.l0.position.fixed,o.l0.bottom(24),o.l0.right(24),o.l0.zIndex(100),o.l0.borderRadius(8),o.l0.backgroundColor.accentPrimaryDimmer,o.l0.cursor.pointer,o.l0.overflow("hidden"),(n={},(0,r.Z)(n,(0,S.EM)("mobileMax"),[o.l0.bottom(16),o.l0.left(16),o.l0.width("calc(100% - 32px)")]),(0,r.Z)(n,"&:focus-visible",{outlineColor:o.TV.accentPrimaryStrongest,outlineOffset:0}),n)],onClick:c,children:[(0,i.BX)(l.G,{css:[o.l0.pb(24),o.l0.pt(12),o.l0.px(12),o.l0.zIndex(2),o.l0.rowWithGap(48),o.l0.align.center,o.l0.justify.spaceBetween],children:[(0,i.BX)(l.G,{css:[o.l0.colWithGap(8)],children:[(0,i.tZ)(a.xv,{variant:"subheadBig",multiline:!1,css:[o.l0.textAlign.left],children:"Woohoo!"}),(0,i.BX)(l.G,{css:[o.l0.rowWithGap(2),o.l0.align.center],children:[(0,i.tZ)(a.xv,{multiline:!1,children:"You just tipped"}),(0,i.tZ)(s.Z,{size:16}),(0,i.BX)(a.xv,{multiline:!1,children:[" ","".concat((0,x.d)(t))]})]})]}),(0,i.tZ)(l.G,{css:[o.l0.colWithGap(4),o.l0.align.end],children:(0,i.tZ)(a.xv,{css:[o.l0.textAlign.center,o.l0.fontWeight.medium,o.l0.pt(4)],children:"Cancel Tip"})})]}),(0,i.tZ)(l.G,{css:[o.l0.height(6),o.l0.position.absolute,o.l0.bottom(0),o.l0.left(0),o.l0.right(24),o.l0.zIndex(1),o.l0.backgroundColor.accentPrimaryDefault,{animation:"".concat(C," ").concat(p+100,"ms linear")}]})]}):null},G=t(31410),_=t(92355),B={100:"\ud83c\udf6c",500:"\ud83c\udf55",1e3:"\ud83c\udf2f"};function I(e){var n=e.tipAmount;return e.sending?(0,i.tZ)(i.HY,{children:"Sending\u2026"}):(0,i.BX)(l.G,{css:[o.l0.colWithGap(8)],children:[(0,i.tZ)(a.xv,{variant:"subheadBig",multiline:!1,children:B[n]}),(0,i.BX)(l.G,{css:[o.l0.rowWithGap(2),o.l0.align.center],children:[(0,i.tZ)(a.xv,{css:[o.l0.pr(4)],multiline:!1,children:"Tip"}),(0,i.tZ)(s.Z,{size:16}),(0,i.tZ)(a.xv,{multiline:!1,children:"".concat((0,x.d)(n))})]})]})}var R=t(90171),X=t(51631),E=t(11086),P=t(14351),W=t(70232),k=(0,b.F4)({"10%":{transform:"translate3d(-1px, 0, 0)"},"20%":{transform:"translate3d(2px, 0, 0)"},"30%":{transform:"translate3d(-4px, 0, 0)"},"50%":{transform:"translate3d(-4px, 0, 0)"},"70%":{transform:"translate3d(-4px, 0, 0)"},"80%":{transform:"translate3d(2px, 0, 0)"},"40%":{transform:"translate3d(4px, 0, 0)"},"60%":{transform:"translate3d(4px, 0, 0)"},"90%":{transform:"translate3d(-1px, 0, 0)"}}),F=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};function A(e){var n,t=e.tipAmount,a=e.currentUser,s=e.tipTarget,c=e.tipStatus,b=e.setTipStatus,w=s.id,S=s.type,x=s.slug,C=s.owner,B=C.id,A=C.username,D="@".concat(A,"/").concat(x),q=(0,Z.Z)().showError,z=(0,v.useRef)(void 0),j=(0,v.useState)(!1),Y=j[0],O=j[1],V=(0,g.Z)({forceFetch:!1}).cycles,$=(0,G.$0)().fireCircularBurstFrom,L=(0,v.useRef)(null),M=(0,_.T)(),H=(0,v.useState)(!1),N=H[0],K=H[1],Q="repl"===S?"replId":"themeId",J=(0,p.Z)((0,f.fP)({onError:function(e){return q(e.message)},onCompleted:function(e){b("ready"),"SendTipResult"!==e.sendTip.__typename&&(e.sendTip.message?q(e.sendTip.message):q("Something went wrong"))}}),2),ee=J[0],ne=J[1].loading,te=(0,R.useRouter)(),re=(0,p.Z)((0,f.M)({onCompleted:function(e){var n=e.createCyclesStripeCheckoutSession;if(n&&void 0!==n.__typename)return"UnauthorizedError"===n.__typename||"UserError"===n.__typename?(b("ready"),void q(n.message)):void("CreateCyclesStripeCheckoutSessionResult"===n.__typename&&te.push(n.sessionUrl))}}),2),ie=re[0],oe=re[1].loading,ae="ready"===c&&!!(null===a||void 0===a?void 0:a.isVerified)&&a.id!==B&&!ne&&!Y&&!oe,le=function(){var e=(0,u.Z)((function(){var e,n,i,o;return(0,m.__generator)(this,(function(a){switch(a.label){case 0:if(!ae)return[2];if((0,y.j)(y.U3.TIP_USED,(e={action:"tip-send-requested"},(0,r.Z)(e,S,D),(0,r.Z)(e,"tipTargetType",S),(0,r.Z)(e,"amount",t),e)),V&&!(t>V))return[3,2];switch((0,y.j)(y.U3.TIP_USED,(n={action:"insufficient-balance"},(0,r.Z)(n,S,D),(0,r.Z)(n,"tipTargetType",S),(0,r.Z)(n,"amount",t),n)),b("toppingUp"),K(!0),i=Math.max(t,P.q2),S){case"repl":o=E.oj.Repl;break;case"theme":o=E.oj.Theme;break;default:(0,W.Z)(S)}return[4,ie({variables:{input:{purchaseType:X.pO.OneTime,quantity:i,redirectDestination:E.ac.TipSurface,redirectTipSurface:{desiredAmount:t,slug:x,surfaceType:o,username:A}}}})];case 1:return a.sent(),[2];case 2:return b("sending"),L.current&&!M&&$({element:L.current}),O(!0),z.current=setTimeout((function(){O(!1),ee({variables:{input:(0,r.Z)({amount:t},Q,w)}})}),5e3),[2]}}))}));return function(){return e.apply(this,arguments)}}();ae?(n=t>=1e3?"Super-donor \u2014 ":t>=500?"Benefactor \u2014 ":"Supporter \u2014\xa0",n+="Tip this ".concat(F(S)," to show your support for @").concat(s.owner.username)):a&&!a.isVerified?n="You must be verified to tip":a&&a.id===B?n="You cannot tip your own ".concat(F(S)):a||(n="You must be logged in to tip");var se=(0,i.tZ)(l.G,{innerRef:L,css:(0,d.Z)(N?[{animation:"".concat(k," 1s"),"animation-iteration-count":1,"transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)"}]:[]),onAnimationEnd:function(){K(!1)},children:(0,i.tZ)(h.u,{tooltip:n,placement:"top",isDisabled:ne||Y||"ready"!==c,children:(0,i.tZ)(T.zx,{disabled:!ae,css:[o.l0.px(12),o.l0.py(8),o.l0.height(72),o.l0.width(96)],onClick:function(){ae&&le()},text:(0,i.tZ)(I,{tipAmount:t,sending:ne||Y})})})});return(0,i.BX)(i.HY,{children:[se,(0,i.tZ)(U,{tipAmount:t,undoTime:5e3,show:Y,onUndo:function(){var e;(0,y.j)(y.U3.TIP_USED,(e={action:"tip-undone"},(0,r.Z)(e,S,D),(0,r.Z)(e,"tipTargetType",S),(0,r.Z)(e,"amount",t),e)),clearTimeout(z.current),K(!0),O(!1),b("ready")}})]})}var D=t(93366),q=t(90349),z=t(2041),j=t(17807),Y=t(55923),O=t(77712);function V(e){var n=e.leaderboardTitle,t=e.topTippers;return(0,i.BX)(l.G,{css:[o.l0.colWithGap(24),o.l0.maxHeight("70vh"),o.l0.overflowY("scroll")],children:[(0,i.tZ)(a.xv,{variant:"headerDefault",multiline:!1,children:n}),(0,i.tZ)(l.G,{css:[o.l0.flex.column],children:t.map((function(e,n){var t=e.user,r=e.totalCyclesTipped;return t?(0,i.BX)(l.G,{tabIndex:0,css:[o.l0.cursor.pointer,o.l0.rowWithGap(12),o.l0.align.center,o.l0.borderRadius(8),o.l0.px(12),o.l0.py(8),j.gU.listItem,{flex:1,"> .popover-control-container":[{width:"100%"},o.l0.mr(0)]}],children:[(0,i.tZ)(a.xv,{css:[o.l0.fontWeight.medium],multiline:!1,children:n+1}),(0,i.tZ)(Y.Z,{username:t.username,children:(0,i.tZ)(O.ZP,{user:t,children:(0,i.BX)(l.G,{css:[o.l0.flex.row,o.l0.justify.spaceBetween,o.l0.align.center],children:[(0,i.BX)(l.G,{css:[o.l0.rowWithGap(8),o.l0.align.center],children:[(0,i.tZ)(q.q,{src:t.image,username:t.username,size:32,layout:"intrinsic"}),(0,i.tZ)(a.xv,{multiline:!1,children:t.username})]}),(0,i.BX)(l.G,{css:[o.l0.rowWithGap(4),o.l0.pl(4),o.l0.align.center],children:[(0,i.tZ)(s.Z,{size:16}),(0,i.BX)(a.xv,{multiline:!1,children:[" ","".concat((0,x.d)(r))]})]})]})})})]},n):null}))})]})}var $=t(82568),L=(0,$.X)({userCardWrapper:[o.l0.focusRingOnAfter,{background:"transparent","::after":{cursor:"pointer",borderRadius:o.TV.space32,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,display:"block",zIndex:1}}],userCard:[o.l0.rowWithGap(8),o.l0.align.center],cyclesTipped:[o.l0.rowWithGap(2),o.l0.pl(4),o.l0.align.center]}),M=function(e){var n=e.tipTarget,t=n.topTippers,o=n.type,c=n.slug,u=n.totalCyclesTips,p=(0,v.useState)(!1),d=p[0],m=p[1],f=t[0],T=f.user,g=f.totalCyclesTipped;if(!T)return null;var Z=(0,i.BX)(l.G,{css:L.userCard,children:[(0,i.tZ)(q.q,{src:T.image,username:T.username,size:24,layout:"intrinsic"}),(0,i.tZ)(a.xv,{multiline:!1,children:T.username}),(0,i.BX)(l.G,{css:L.cyclesTipped,children:[(0,i.tZ)(s.Z,{size:16}),(0,i.BX)(a.xv,{multiline:!1,children:[" ","".concat((0,x.d)(g))]})]})]}),b=l.K.button,w=1===t.length?Z:(0,i.tZ)(h.u,{tooltip:"See the leaderboard of the best supporters",children:(0,i.tZ)(b,{onClick:function(){var e;m(!0),(0,y.j)(y.U3.TIP_USED,(e={action:"leaderboard-opened"},(0,r.Z)(e,o,c),(0,r.Z)(e,"tipTargetType",o),(0,r.Z)(e,"amount",u),e))},css:L.userCardWrapper,children:Z})});return(0,i.BX)(i.HY,{children:[w,(0,i.tZ)(z.u,{isOpen:d,onRequestClose:function(){return m(!1)},children:(0,i.tZ)(V,{leaderboardTitle:"Supporters Leaderboard",topTippers:t})})]})},H=t(26721),N=t(72006),K=t(4405),Q=t(28518),J=t(81462),ee="2px",ne="12px",te=o.TV.accentPrimaryDefault,re=o.TV.orangeDefault,ie="-".concat(ee," ").concat(ee),oe="".concat(ee," ").concat(ee),ae="".concat(ee," -").concat(ee),le="-".concat(ee," -").concat(ee),se=(0,b.F4)("\n  0% { box-shadow: ".concat(ie," ").concat(ne," ").concat(te,", ").concat(ae," ").concat(ne," ").concat(re,"; }\n  25% { box-shadow: ").concat(oe," ").concat(ne," ").concat(te,", ").concat(le," ").concat(ne," ").concat(re,"; }\n  50% { box-shadow: ").concat(ae," ").concat(ne," ").concat(te,", ").concat(ie," ").concat(ne," ").concat(re,"; }\n  75% { box-shadow: ").concat(le," ").concat(ne," ").concat(te,", ").concat(oe," ").concat(ne," ").concat(re,"; }\n  100% { box-shadow: ").concat(ie," ").concat(ne," ").concat(te,", ").concat(ae," ").concat(ne," ").concat(re,"; }\n")),ce=(0,b.F4)("\n  from { text-shadow: 0 0 8px rgba(255, 255, 255, 0.3); }\n  to { text-shadow: 0 0 8px rgba(255, 255, 255, 0.7); }\n"),ue=function(e){var n="string"===typeof e.query.replUrl?e.query.replUrl:void 0;e.replace({pathname:e.pathname,query:(0,K.Z)((0,N.Z)({},e.query),{checkout:void 0,amount:void 0})},n)},pe=(0,$.X)({modal:[o.l0.colWithGap(16),o.l0.p(8)],buttonContainer:[o.l0.flex.row,o.l0.justify.center],button:[o.l0.px(12),o.l0.py(8),o.l0.height(72),o.l0.width(144),(0,b.iv)({marginTop:16,transition:"box-shadow 240ms ease-out, border-color 120ms ease-out, transform 240ms ease-out, background-color 120ms ease-out",boxShadow:"-".concat(ee," ").concat(ee," ").concat(ne," ").concat(te,", ").concat(ee," -").concat(ee," ").concat(ne," ").concat(re),animation:se+" 1500ms linear infinite 240ms"," span":{textShadow:"0 0 8px #ffffff80",animation:ce+" 1200ms ease-in-out infinite alternate 120ms"}})]}),de={query:J.s8},me={query:Q.BW},fe=function(e){var n=e.desiredAmount,t=e.tipTarget,o=e.setTipStatus,s=t.id,c=t.type,u=t.slug,d=(0,R.useRouter)(),m=(0,v.useState)(!0),h=m[0],g=m[1],b=(0,Z.Z)().showError,w=(0,G.$0)().fireCircularBurstFrom,S=(0,v.useRef)(null),x=(0,_.T)(),C="repl"===c?"replId":"themeId",U=(0,p.Z)((0,f.fP)({onError:function(e){return b(e.message)},onCompleted:function(e){o("ready"),"SendTipResult"!==e.sendTip.__typename?e.sendTip.message?b(e.sendTip.message):b("Something went wrong"):ue(d)},refetchQueries:[de,me]}),2),B=U[0],X=U[1].loading;return(0,i.tZ)(z.u,{isOpen:h,onRequestClose:function(){var e;X||(g(!1),ue(d),(0,y.j)(y.U3.TIP_USED,(e={action:"post-checkout-modal-closed"},(0,r.Z)(e,c,u),(0,r.Z)(e,"tipTargetType",c),(0,r.Z)(e,"amount",n),e)))},children:(0,i.BX)(l.G,{css:pe.modal,children:[(0,i.tZ)(a.xv,{variant:"subheadBig",multiline:!1,children:"Awesome!"}),(0,i.tZ)(a.xv,{children:"You successfully topped up your Cycles balance. You can now tip this creator and show them your support."}),(0,i.tZ)(l.G,{css:pe.buttonContainer,children:(0,i.tZ)(T.zx,{ref:S,text:(0,i.tZ)(I,{tipAmount:n,sending:X}),disabled:X,onClick:function(){var e;X||((0,y.j)(y.U3.TIP_USED,(e={action:"tip-send-requested"},(0,r.Z)(e,c,u),(0,r.Z)(e,"tipTargetType",c),(0,r.Z)(e,"amount",n),e)),o("sending"),S.current&&!x&&w({element:S.current}),B({variables:{input:(0,r.Z)({amount:n},C,s)}}))},css:pe.button})})]})})};function he(e){var n=e.tipTarget,t=e.currentUser,r=e.setTipStatus,o=(0,R.useRouter)();if(!(null===t||void 0===t?void 0:t.isVerified)||t.id===n.owner.id)return null;var a,l=o.query,s=l.checkout,c=l.amount,u=parseInt(c,10);return"success"===s&&u&&(100===(a=u)||500===a||1e3===a)&&"success"===s&&u?(0,i.tZ)(fe,{tipTarget:n,desiredAmount:u,setTipStatus:r}):null}var Te=function(e){var n=e.replOwner,t=e.currentUser;return!(!n||!n.isVerified||n.hasPrivacyRole)&&!(null===t||void 0===t?void 0:t.hasPrivacyRole)},ge=(0,$.X)({tips:[o.l0.colWithGap(16),o.l0.justify.center],tipButtons:[o.l0.rowWithGap(12),(0,r.Z)({},(0,S.EM)("tabletMin"),[o.l0.mr(0)])],tipsStats:[o.l0.rowWithGap(16)],totalTipsYouTippedWrapper:[o.l0.rowWithGap(16),(0,r.Z)({},(0,S.EM)("mobileMax"),[o.l0.mr(0),o.l0.justify.center])],tipSection:[o.l0.colWithGap(4)],tipSectionTitle:[o.l0.color.foregroundDimmer,o.l0.pb(2)],tipSectionCycles:[o.l0.py(8),o.l0.px(16),o.l0.borderRadius(4),o.l0.rowWithGap(2),o.l0.justify.center,o.l0.backgroundColor.backgroundDefault,o.l0.height(40),o.l0.align.center,{borderRadius:"40px",minWidth:70}],topTipperContainer:[o.l0.py(8),o.l0.pl(8),o.l0.pr(16),o.l0.borderRadius(4),o.l0.rowWithGap(2),o.l0.justify.spaceEvenly,o.l0.backgroundColor.backgroundDefault,j.gU.filled,o.l0.position.relative,{borderRadius:"100px",minWidth:80}]}),ve=function(e){var n,t,r,c=e.tipTarget,u=e.currentUser,p=(0,v.useState)("ready"),d=p[0],m=p[1],f=u&&u.id===c.owner.id;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(l.G,{css:[o.l0.colWithGap(8)],id:"tips",children:(0,i.BX)(l.G,{css:ge.tips,children:[f?null:(0,i.BX)(l.G,{css:[ge.tipButtons],children:[(0,i.tZ)(A,{currentUser:u,tipAmount:100,tipTarget:c,tipStatus:d,setTipStatus:m}),(0,i.tZ)(A,{currentUser:u,tipAmount:500,tipTarget:c,tipStatus:d,setTipStatus:m}),(0,i.tZ)(A,{currentUser:u,tipAmount:1e3,tipTarget:c,tipStatus:d,setTipStatus:m})]}),(0,i.BX)(l.G,{css:[ge.tipsStats],children:[(0,i.BX)(l.G,{css:ge.totalTipsYouTippedWrapper,children:[(0,i.BX)(l.G,{css:ge.tipSection,children:[(0,i.tZ)(a.xv,{css:ge.tipSectionTitle,multiline:!1,children:"Total Tips"}),(0,i.BX)(l.G,{css:ge.tipSectionCycles,children:[(0,i.tZ)(s.Z,{css:[o.l0.mt(2)],size:16}),(0,i.tZ)(a.xv,{multiline:!1,children:"".concat((0,x.d)(c.totalCyclesTips))})]})]}),c.currentUserTotalTips&&c.currentUserTotalTips>0?(0,i.BX)(l.G,{css:ge.tipSection,children:[(0,i.tZ)(a.xv,{css:ge.tipSectionTitle,multiline:!1,children:"You tipped"}),(0,i.BX)(l.G,{css:ge.tipSectionCycles,children:[(0,i.tZ)(s.Z,{css:[o.l0.mt(2)],size:16}),(0,i.tZ)(a.xv,{multiline:!1,children:"".concat((0,x.d)(c.currentUserTotalTips))})]})]}):null]}),(null===(n=c.topTippers)||void 0===n?void 0:n.length)>0&&null!==(null===(t=c.topTippers[0])||void 0===t?void 0:t.user)?(0,i.BX)(l.G,{css:ge.tipSection,children:[(0,i.BX)(a.xv,{css:ge.tipSectionTitle,multiline:!1,children:["Top Supporter",(null===(r=c.topTippers)||void 0===r?void 0:r.length)>1?"s":""]}),(0,i.tZ)(l.G,{css:ge.topTipperContainer,children:(0,i.tZ)(M,{tipTarget:c})})]}):null]})]})}),(0,i.tZ)(he,{tipTarget:c,currentUser:u,setTipStatus:m}),(0,i.tZ)(H.Z,{isOpen:"insufficientBalance"===d,context:"tipping_replView",initialTab:"cycles",onRequestClose:function(){m("ready")}})]})},Ze=function(e){var n,t,r,o=e.replId,a=(0,D.SI)({variables:{id:o}}),l=a.data,s=a.loading,u="Repl"===(null===l||void 0===l?void 0:l.repl.__typename)?l.repl:null,p="CurrentUser"===(null===l||void 0===l||null===(n=l.currentUser)||void 0===n?void 0:n.__typename)?l.currentUser:null;if(!u||!Te({replOwner:null===u||void 0===u?void 0:u.user,currentUser:p}))return null;if(!(null===u||void 0===u||null===(t=u.user)||void 0===t?void 0:t.id)||!(null===u||void 0===u||null===(r=u.user)||void 0===r?void 0:r.username))throw new Error("Expected repl id to be set");if(s)return(0,i.tZ)(c.Z,{});var d={id:u.id,slug:u.slug,type:"repl",owner:u.user,totalCyclesTips:u.totalCyclesTips,topTippers:u.topTippers,currentUserTotalTips:u.currentUserTotalTips};return(0,i.tZ)(ve,{tipTarget:d,currentUser:p})},ye=function(e){var n,t=e.themeId,r=(0,D.ir)({variables:{input:{themeId:t}}}),o=r.data,a=r.loading,l="CustomTheme"===(null===o||void 0===o?void 0:o.customThemeById.__typename)?o.customThemeById:null,s="CurrentUser"===(null===o||void 0===o||null===(n=o.currentUser)||void 0===n?void 0:n.__typename)?o.currentUser:null;if(!l||!Te({replOwner:null===l||void 0===l?void 0:l.author,currentUser:s}))return null;if(a)return(0,i.tZ)(c.Z,{});if(!l.author)return null;var u={id:l.id,slug:l.slug,type:"theme",owner:l.author,totalCyclesTips:l.totalCyclesTips,topTippers:l.topTippers,currentUserTotalTips:l.currentUserTotalTips};return(0,i.tZ)(ve,{tipTarget:u,currentUser:s})};function be(e){if("replId"in e)return(0,i.tZ)(Ze,{replId:e.replId});if("themeId"in e)return(0,i.tZ)(ye,{themeId:e.themeId});throw new Error("Tips component requires a tippable target.")}},73768:function(e,n,t){t.d(n,{h1:function(){return u},pT:function(){return c}});var r=t(43119),i=t(71440);function o(){var e=(0,r.Z)(["\n  fragment TopTippersFragment on TipperUser {\n    user {\n      id\n      username\n      url\n      image\n    }\n    totalCyclesTipped\n  }\n"]);return o=function(){return e},e}function a(){var e=(0,r.Z)(["\n  fragment TopTipperReplLeaderboard on Repl {\n    id\n    topTippers {\n      ...TopTippersFragment\n    }\n  }\n  ","\n"]);return a=function(){return e},e}function l(){var e=(0,r.Z)(["\n  fragment TopTipperThemeLeaderboard on CustomTheme {\n    id\n    topTippers {\n      ...TopTippersFragment\n    }\n  }\n  ","\n"]);return l=function(){return e},e}var s=(0,i.Ps)(o()),c=(0,i.Ps)(a(),s),u=(0,i.Ps)(l(),s)}}]);
//# sourceMappingURL=5454-77cb79aeb46f1edd.js.map