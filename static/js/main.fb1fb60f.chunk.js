(this.webpackJsonp2048game=this.webpackJsonp2048game||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n,a,r=c(1),i=c.n(r),l=c(6),o=c.n(l),s=(c(13),c(5)),u=c(2),m=c(3),b=(c(14),function(e,t){return JSON.stringify(e)===JSON.stringify(t)}),d=function(e,t){var c=Object(r.useState)((function(){var c=window.localStorage.getItem(e);return c?JSON.parse(c):t})),n=Object(m.a)(c,2),a=n[0],i=n[1];return[a,function(t){var c=t instanceof Function?t(a):t;i(c),window.localStorage.setItem(e,JSON.stringify(c))}]},f=(c(15),c(0)),j=function(e){var t=e.label,c=void 0===t?"":t,n=e.clickHandler;return Object(f.jsx)("div",{className:"button",onClick:n,children:c})},O=(c(17),function(e){var t=e.digit,c=e.textClass,n=e.areaClass;return Object(f.jsx)("div",{className:"board-item".concat(n||""),children:Object(f.jsx)("span",{className:"board-item-content".concat(c||""),children:t||""})})}),v=(c(18),function(e){var t=e.data;return Object(f.jsx)("div",{className:"board-play-area",children:!!t&&t.map((function(e,t){return Object(f.jsx)(O,{digit:e,textClass:2===e||4===e?" text-dark":" text-light",areaClass:e?" area-".concat(e):" area"},"digit_".concat(t))}))})}),h=(c(19),function(e){var t=e.score,c=e.bestScore;return Object(f.jsxs)("div",{className:"score-container",children:[Object(f.jsxs)("div",{className:"score-area",children:[Object(f.jsx)("div",{className:"score-title",children:"Score"}),Object(f.jsx)("div",{className:"score",children:t})]}),Object(f.jsxs)("div",{className:"score-area",children:[Object(f.jsx)("div",{className:"score-title",children:"Best"}),Object(f.jsx)("div",{className:"score",children:c})]})]})}),p=(c(20),function(e){var t=e.gridData,c=e.totalScore,n=e.bestScore,a=e.onClickNewGame;return Object(f.jsxs)("div",{className:"board",children:[Object(f.jsxs)("div",{className:"row board-header",children:[Object(f.jsx)("h1",{className:"board-heading",children:"2048"}),Object(f.jsx)(h,{score:c,bestScore:n})]}),Object(f.jsx)(j,{label:"New Game",clickHandler:a}),Object(f.jsxs)("p",{children:["Join the numbers and get to the ",Object(f.jsx)("b",{children:"2048 tile!"})]}),Object(f.jsx)(v,{data:t})]})}),z=["title","titleId"];function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var c,n,a=function(e,t){if(null==e)return{};var c,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}function y(e,t){var c=e.title,i=e.titleId,l=x(e,z);return r.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:"1280.000000pt",height:"743.000000pt",viewBox:"0 0 1280.000000 743.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":i},l),c?r.createElement("title",{id:i},c):null,n||(n=r.createElement("metadata",null,"\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n")),a||(a=r.createElement("g",{transform:"translate(0.000000,743.000000) scale(0.100000,-0.100000)",fill:"#ffffff",stroke:"none"},r.createElement("path",{d:"M2066 7208 c-8 -13 -49 -140 -91 -283 -42 -143 -121 -408 -175 -590 -54 -181 -171 -575 -260 -875 -89 -300 -211 -711 -272 -915 -131 -443 -251 -844 -468 -1575 -89 -300 -206 -693 -260 -875 -54 -181 -152 -513 -219 -737 -67 -224 -121 -418 -121 -431 0 -30 18 -47 50 -47 14 0 111 16 215 35 104 19 194 34 200 32 5 -2 -10 -8 -35 -12 -40 -7 -42 -9 -20 -16 57 -16 143 -6 427 50 164 33 867 173 1563 311 2343 465 3208 640 3257 656 26 9 55 22 64 30 8 8 21 14 27 14 6 0 13 4 16 8 3 5 -9 7 -27 5 -18 -1 1 6 42 16 83 21 117 47 106 80 -4 12 -104 144 -224 294 -293 367 -673 847 -735 927 -33 44 -40 56 -19 37 l30 -28 17 45 c43 112 202 204 561 325 56 19 231 69 265 76 8 2 45 10 83 19 37 9 82 18 100 21 17 4 50 10 72 15 108 24 345 43 535 44 188 1 215 11 45 17 -57 2 -62 3 -25 7 100 9 407 -41 609 -99 920 -265 1674 -1030 2011 -2039 114 -341 167 -635 177 -988 5 -183 9 -217 24 -235 l17 -22 1299 -3 c899 -3 1307 0 1326 7 15 6 32 22 37 37 11 29 -2 395 -21 574 -122 1170 -579 2319 -1304 3285 -146 195 -293 369 -442 526 -398 417 -781 726 -1233 996 -164 98 -528 277 -705 346 -792 312 -1622 417 -2490 316 -845 -98 -1664 -373 -2603 -871 -95 -51 -116 -58 -126 -47 -7 8 -222 280 -477 604 -565 720 -739 938 -753 947 -22 15 -56 8 -70 -14z m4617 -3315 c-29 -2 -77 -2 -105 0 -29 2 -6 3 52 3 58 0 81 -1 53 -3z m-255 -10 c-16 -2 -40 -2 -55 0 -16 2 -3 4 27 4 30 0 43 -2 28 -4z m-115 -10 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-90 -10 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-66 -9 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-70 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-94 -1841 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-46 -9 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-160 -30 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-350 -70 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-400 -80 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-450 -90 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-160 -30 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-450 -90 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-100 -20 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-40 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-44 -11 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z"}),r.createElement("path",{d:"M7003 3853 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"}),r.createElement("path",{d:"M7078 3843 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),r.createElement("path",{d:"M12282 1105 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"}),r.createElement("path",{d:"M12293 1005 c0 -27 2 -38 4 -22 2 15 2 37 0 50 -2 12 -4 0 -4 -28z"}),r.createElement("path",{d:"M12301 894 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}),r.createElement("path",{d:"M12301 804 c0 -38 4 -87 9 -109 6 -27 7 -6 3 65 -6 121 -13 145 -12 44z"}),r.createElement("path",{d:"M10055 480 c39 -4 509 -8 1045 -8 536 0 1007 4 1045 8 39 4 -432 7 -1045 7 -613 0 -1083 -3 -1045 -7z"}))))}var w,N=r.forwardRef(y),E=(c.p,["title","titleId"]);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var c,n,a=function(e,t){if(null==e)return{};var c,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}function S(e,t){var c=e.title,n=e.titleId,a=M(e,E);return r.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":n},a),c?r.createElement("title",{id:n},c):null,w||(w=r.createElement("path",{d:"M3 22v-20l18 10-18 10z"})))}var C,I,P=r.forwardRef(S),R=(c.p,["title","titleId"]);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var c,n,a=function(e,t){if(null==e)return{};var c,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}function G(e,t){var c=e.title,n=e.titleId,a=A(e,R);return r.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:"1280.000000pt",height:"743.000000pt",viewBox:"0 0 1280.000000 743.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":n},a),c?r.createElement("title",{id:n},c):null,C||(C=r.createElement("metadata",null,"\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n")),I||(I=r.createElement("g",{transform:"translate(0.000000,743.000000) scale(0.100000,-0.100000)",fill:"#ffffff",stroke:"none"},r.createElement("path",{d:"M10278 7138 c-81 -102 -1135 -1439 -1156 -1466 -12 -16 -20 -13 -100 31 -290 160 -720 361 -1022 477 -1274 492 -2482 577 -3625 255 -473 -134 -990 -374 -1410 -655 -869 -581 -1579 -1404 -2080 -2409 -424 -851 -661 -1753 -682 -2597 l-6 -242 24 -13 c20 -12 247 -14 1332 -14 l1309 0 19 24 c17 20 19 42 21 175 l2 151 6 -140 5 -140 9 70 c6 39 10 72 11 75 1 3 5 50 9 105 4 55 11 123 16 150 16 88 30 169 34 195 15 93 70 301 123 460 107 323 264 641 438 888 30 42 60 86 67 96 76 114 320 380 483 526 173 155 450 340 646 432 235 111 483 198 664 232 257 50 426 65 655 61 149 -2 142 10 -10 16 -61 2 -62 3 -16 6 27 3 108 -3 180 -12 330 -40 667 -133 1016 -282 90 -39 238 -109 248 -118 5 -4 -74 -105 -633 -806 -250 -314 -455 -579 -455 -589 0 -9 8 -24 18 -33 28 -25 -47 -10 4112 -837 861 -171 1596 -317 1634 -325 74 -15 112 -8 123 22 9 24 8 28 -227 818 -21 72 -64 214 -94 318 -31 103 -81 270 -111 372 -30 102 -80 268 -110 370 -30 102 -80 268 -110 370 -30 102 -80 268 -110 370 -30 102 -80 269 -111 373 -30 103 -73 246 -94 317 -21 72 -64 214 -94 318 -31 103 -81 270 -111 372 -30 102 -80 268 -110 370 -30 102 -79 267 -109 368 -30 100 -86 288 -124 417 -39 129 -94 314 -122 410 -103 345 -218 718 -229 739 -8 14 -21 21 -41 21 -25 0 -40 -14 -102 -92z m-4355 -3245 c-29 -2 -77 -2 -105 0 -29 2 -6 3 52 3 58 0 81 -1 53 -3z m-260 -10 c-13 -2 -35 -2 -50 0 -16 2 -5 4 22 4 28 0 40 -2 28 -4z m-110 -10 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-90 -10 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-56 -9 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-60 -10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-2370 -2496 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-20 -110 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-10 -60 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-10 -70 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m-10 -95 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m-10 -100 c-2 -16 -4 -5 -4 22 0 28 2 40 4 28 2 -13 2 -35 0 -50z"}),r.createElement("path",{d:"M6253 3853 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"}),r.createElement("path",{d:"M6328 3843 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),r.createElement("path",{d:"M665 480 c39 -4 507 -8 1040 -8 534 0 1002 4 1040 8 39 4 -429 7 -1040 7 -610 0 -1078 -3 -1040 -7z"}))))}var J=r.forwardRef(G),B=(c.p,c(21),function(e){var t=e.onClickUndo,c=e.onClickReplay,n=e.onClickRedo,a=e.undoDisabled,r=e.replayDisabled,i=e.redoDisabled;return Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"feature-container ".concat(a?"disabled":""),children:[Object(f.jsx)(N,{className:"feature ".concat(a?"disabled":""),onClick:a?null:t}),"Undo"]}),Object(f.jsxs)("div",{className:"feature-container ".concat(r?"disabled":""),children:[Object(f.jsx)(P,{className:"feature ".concat(r?"disabled":""),onClick:r?null:c}),"Replay"]}),Object(f.jsxs)("div",{className:"feature-container ".concat(i?"disabled":""),children:[Object(f.jsx)(J,{className:"feature ".concat(i?"disabled":""),onClick:i?null:n}),"Redo"]})]})}),H=(c(22),function(e){var t=e.message,c=e.buttons;return Object(f.jsxs)("div",{className:"message-container",children:[Object(f.jsx)("p",{className:"message",children:t}),Object(f.jsx)("div",{className:"buttons-container",children:c.map((function(e,t){return Object(f.jsx)(j,{label:e.label,clickHandler:e.clickHandler},"button_".concat(t))}))})]})}),L=function(e){var t=e.message,c=e.buttons;return o.a.createPortal(Object(f.jsx)(H,{message:t,buttons:c}),document.getElementsByClassName("board-play-area")[0])};var Y=function(){var e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=d("gridData",e),c=Object(m.a)(t,2),n=c[0],a=c[1],i=d("newGame",!0),l=Object(m.a)(i,2),o=l[0],j=l[1],O=d("score",0),v=Object(m.a)(O,2),h=v[0],z=v[1],g=d("best",0),x=Object(m.a)(g,2),y=x[0],w=x[1],N=d("scoreLog",[]),E=Object(m.a)(N,2),k=E[0],M=E[1],S=d("isWon",!1),C=Object(m.a)(S,2),I=C[0],P=C[1],R=d("movesLog",[]),D=Object(m.a)(R,2),A=D[0],G=D[1],J=d("undoMoves",[]),H=Object(m.a)(J,2),Y=H[0],U=H[1],W=d("replayStatus",!1),T=Object(m.a)(W,2),_=T[0],F=T[1],K=Object(r.useState)({visible:!1,message:""}),q=Object(m.a)(K,2),Q=q[0],V=q[1],X=function e(t){var c=Object(u.a)(t),a=Math.floor(Math.random()*n.length);return 0===c[a]?(c[a]=Math.random()>.1?2:4,c):e(Object(u.a)(c))},Z=function(e,t,c,n){var a=Object(u.a)(e),r=[a[t],a[t+c],a[t+2*c],a[t+3*c]].filter((function(e){return e})),i=4-r.length,l=Array(i).fill(0),o=n?[].concat(Object(u.a)(r),Object(u.a)(l)):[].concat(Object(u.a)(l),Object(u.a)(r)),s=Object(m.a)(o,4);return a[t]=s[0],a[t+c]=s[1],a[t+2*c]=s[2],a[t+3*c]=s[3],a},$=function(e,t,c,n,a){for(var r=Object(u.a)(e),i=0;i<t;i++)("horizontal"===a&&i%4===0||"vertical"===a)&&(r=Z(r,i,c,n));return r},ee=function(e){var t=Object(u.a)(e);return $(t,16,1,!1,"horizontal")},te=function(e){var t=Object(u.a)(e);return $(t,16,1,!0,"horizontal")},ce=function(e){var t=Object(u.a)(e);return $(t,4,4,!1,"vertical")},ne=function(e){var t=Object(u.a)(e);return $(t,4,4,!0,"vertical")},ae=function(e,t,c,n){var a=Object(u.a)(e),r=0;return n?(r=a[t]+a[t+c],a[t+c]=0):(r=a[t]+a[t-c],a[t-c]=0),a[t]=r,a},re=function(e,t,c,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=arguments.length>5?arguments[5]:void 0,i=arguments.length>6?arguments[6]:void 0,l=Object(u.a)(e),o=0;if("left"===r||"up"===r)for(var s=t;s<c;s++)0===l[s]||l[s]!==l[s+n]||a&&(s+n)%4===0||(l=ae(l,s,n,!0),o+=l[s]);else if("right"===r||"down"===r)for(var m=t;m>c;m--)0===l[m]||l[m]!==l[m-n]||a&&m%4===0||(l=ae(l,m,n,!1),o+=l[m]);return!o||b(l,e)||i||z((function(e){return e+o})),l},ie=function(e,t,c){var n=[];return"left"===t?n=re(e,0,15,1,!0,"left",c):"right"===t&&(n=re(e,15,0,1,!0,"right",c)),n},le=function(e,t,c){var n=[];return"up"===t?n=re(e,0,12,4,!1,"up",c):"down"===t&&(n=re(e,15,3,4,!1,"down",c)),n},oe=function(e,t,c,r){if(I)V({visible:!0,message:"Congrats!! You Won"});else if(!_){var i=Object(u.a)(n),l=e(Object(u.a)(n));if(l=e(l=t(l,c,r)),b(i,l)||(G([].concat(Object(u.a)(A),[i])),l.includes(2048)?(P(!0),V({visible:!0,message:"congratulations"})):l=X(Object(u.a)(l)),Y.length&&U([])),l.includes(0)||r||!de(l)||V({visible:!0,message:"Game Over!"}),r)return l;a(l)}},se=function(e){return oe(ee,ie,"right",e)},ue=function(e){return oe(te,ie,"left",e)},me=function(e){return oe(ce,le,"down",e)},be=function(e){return oe(ne,le,"up",e)},de=function(e){var t=Object(u.a)(e);return!!b(t,be(!0))&&(!!b(t,me(!0))&&(!!b(t,se(!0))&&!!b(t,ue(!0))))},fe=function(e){switch(e.keyCode){case 39:se(!1);break;case 37:ue(!1);break;case 40:me(!1);break;case 38:be(!1)}},je=function(){M([].concat(Object(u.a)(k),[h])),G([]),U([]),P(!1),j(!0),z(0),a(e)};return Object(r.useEffect)((function(){o&&function(){var e=Object(u.a)(n);e=X(e),e=X(e),a(e),j(!1)}()}),[o]),Object(r.useEffect)((function(){w(Math.max.apply(Math,Object(u.a)(k).concat([h])))}),[h]),Object(r.useEffect)((function(){return document.addEventListener("keydown",fe),function(){document.removeEventListener("keydown",fe)}})),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(p,{gridData:n,totalScore:h,bestScore:y,onClickNewGame:je}),Object(f.jsx)("div",{className:"extra-functions-container",children:Object(f.jsx)(B,{onClickUndo:function(){var e=Object(u.a)(A),t=e.pop();G(e),U([].concat(Object(u.a)(Y),[n])),a(t)},onClickReplay:function(){F(!0);var e=Object(u.a)(A);e.push(n);for(var t=function(t){setTimeout((function(){a(e[t]),t===e.length-1&&F(!1)}),2e3*t)},c=0;c<e.length;c++)t(c)},onClickRedo:function(){var e=Object(u.a)(A),t=Object(u.a)(Y),c=t.pop();e.push(n),G(e),U(t),a(c)},undoDisabled:!A.length||_||I,replayDisabled:!A.length||_,redoDisabled:!Y.length||_})}),Q.visible&&Object(f.jsx)(L,{message:Q.message,buttons:[{label:"OK",clickHandler:function(){V(Object(s.a)(Object(s.a)({},Q),{},{visible:!1}))}},{label:"".concat(I?"NEW GAME":"TRY AGAIN"),clickHandler:function(){V(Object(s.a)(Object(s.a)({},Q),{},{visible:!1})),je()}}]})]})};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(Y,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.fb1fb60f.chunk.js.map