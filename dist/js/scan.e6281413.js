(function(t){function e(e){for(var i,o,r=e[0],c=e[1],p=e[2],l=0,d=[];l<r.length;l++)o=r[l],a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={scan:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var p=0;p<r.length;p++)e(r[p]);var u=c;s.push([5,"chunk-vendors","chunk-common"]),n()})({"0044":function(t,e,n){},"04de":function(t,e,n){"use strict";var i=n("e11e"),a=n.n(i);a.a},5:function(t,e,n){t.exports=n("c85c")},"635b":function(t,e,n){"use strict";n.d(e,"a",function(){return c});n("96cf");var i=n("3b8d"),a=n("da8d"),s=n("e490"),o=n("18a0"),r=n.n(o);function c(t,e,n){return p.apply(this,arguments)}function p(){return p=Object(i["a"])(regeneratorRuntime.mark(function t(e,n,i){var o,c,p,u,l,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s["h"]){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(a["b"])();case 4:o=t.sent;while(!o.appId&&o.data)o=o.data;if(c=o,p=c.appId,u=c.timestamp,l=c.nonceStr,d=c.signature,p){t.next=9;break}return t.abrupt("return");case 9:r.a.config({debug:!1,appId:p,timestamp:u,nonceStr:l,signature:d,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage"]}),r.a.ready(function(){r.a.onMenuShareAppMessage({title:e,desc:n,link:i,imgUrl:"http://img.paas.onairm.cn/FiszsPODBypvSFnK-VAvPR3vqb-N"}),r.a.onMenuShareTimeline({desc:n,title:e,imgUrl:"http://img.paas.onairm.cn/FiszsPODBypvSFnK-VAvPR3vqb-N",img_width:"401",img_height:"275",link:i})});case 11:case"end":return t.stop()}},t)})),p.apply(this,arguments)}},"8bbf":function(t,e){t.exports=Vue},"8d92":function(t,e,n){},"93fe":function(t,e,n){"use strict";var i=n("cd8a"),a=n.n(i);a.a},"989b":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("e490");function a(){i["i"]?window.location.href="https://itunes.apple.com/cn/app/%E8%8A%B1%E8%A7%86%E9%A2%91/id1356074098?mt=8":window.location.href="https://sj.qq.com/myapp/detail.htm?apkName=com.onairm.cbn4android"}},aea0:function(t,e,n){"use strict";var i=n("d6fa"),a=n.n(i);a.a},c7d5:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n("e490"),a=n("c198"),s=n.n(a),o=n("f8d5"),r=n.n(o),c=n("81bf"),p=n.n(c),u=n("ead9"),l=n.n(u);function d(t){var e=r.a.parse("cyzd2019c1019hbp"),n=r.a.parse(t);return s.a.encrypt(n,e,{mode:p.a,padding:l.a})}function f(t){"string"!==typeof t&&(t=JSON.stringify(t)),t="hbp".concat(d(t),"hbp");var e=document.querySelector("#copy-input");e||(e=document.createElement("input"),e.id="copy-input",e.readOnly="readOnly",e.style.position="absolute",e.style.left="-1000px",e.style.zIndex="-1000",document.body.appendChild(e)),e.setAttribute("value",t),i["i"]?m(e,0,t.length):e.select(),document.execCommand&&document.execCommand("copy"),e.blur()}function m(t,e,n){if(t.createTextRange){var i=t.createTextRange();i.collapse(!0),i.moveStart("character",e),i.moveEnd("character",n-e),i.select()}else t.setSelectionRange(e,n)}},c85c:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("df49");var i=n("031d"),a=n("0679"),s=n("1cc1"),o=n("0c29"),r=(n("4cc8"),n("8bbf"));r.use(a["a"]),r.use(i["a"]),r.use(s["a"]),r.use(o["a"]);n("d921"),n("a4fc");var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("home"):t._e()},p=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("inner-page",{ref:"innerPage",staticClass:"v-scan-home",attrs:{type:"root","hide-header":t.isOuter,title:t.activityInfo.title,"header-background-color":"#A10625"},on:{share:t.toShare}},[n("div",{staticClass:"v-scan-home-content",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"v-scan-home-header",class:{"hide-nav":t.isOuter}},[n("span",{staticClass:"v-scan-home-header-rule",on:{click:t.handleShowRule}},[t._v("\n        活动规则\n      ")]),n("div",{staticClass:"v-scan-home-header-top"},[n("span",{staticClass:"v-scan-home-header-noti left-center"},[t._v(t._s(t.mergeNum)+"人已集齐，"+t._s(t._f("dateFormat")(t.activityInfo.unveiledTime))+"开奖")]),n("img",{staticClass:"v-scan-home-header-banner",attrs:{src:t._f("jointImgURL")("818748c7e8dfcd18971739b24270c34e"),alt:""}}),n("img",{staticClass:"v-scan-home-header-gif left-center",attrs:{src:"http://img.paas.onairm.cn/61bbeeb68f16dd22ed011707758cf049",alt:""}}),n("img",{staticClass:"v-scan-home-header-sub-banner left-center",attrs:{src:t._f("jointImgURL")("5678c6da81927bec8a72c858496f0aa0"),alt:""}}),n("img",{staticClass:"v-scan-home-header-house left-center",attrs:{src:t._f("jointImgURL")("8337e0d1f0900f10cc5eb6877359b166"),alt:""}})]),n("img",{staticClass:"v-scan-anim anim-1 translate-1",attrs:{src:t._f("jointImgURL")("55cfe3bb62ef3685ed531aebfd2748a9"),alt:""}}),n("img",{staticClass:"v-scan-anim anim-2 translate-2",attrs:{src:t._f("jointImgURL")("33873fb2cbd208d268d64cadf62fde0d"),alt:""}}),n("img",{staticClass:"v-scan-anim anim-3 translate-3",attrs:{src:t._f("jointImgURL")("0d712f8b0e7e5912c1ba515089a2e84c"),alt:""}}),n("div",{staticClass:"v-scan-home-header-btn",on:{click:t.handleScan}},[t._v(t._s(t.isOuter?"参加活动":"扫一扫"))]),n("span",{staticClass:"v-scan-home-header-tip"},[t._v("扫描电视二维码，集道具拿红包")]),t.nextScanDate?n("div",{staticClass:"v-scan-home-header-count-down"},[t._v("\n        下次可扫码时间段：\n        "),n("span",[t._v(t._s(t._f("dateFormat")(t.nextScanDate.startTime,"M月D日 HH:mm:ss"))+"-"+t._s(t._f("dateFormat")(t.nextScanDate.endTime,"HH:mm:ss")))])]):t._e()]),n("div",{staticClass:"v-scan-home-prop-list"},[n("prop-list",{attrs:{items:t.propList,"is-lotteried":t.isLotteried,"activity-info":t.activityInfo,"user-icon":t._f("jointImgURL")(t.info.userIcon)},on:{composite:t.handleComposite}})],1),Object.keys(t.activityInfo).length>0?n("count-down",{staticStyle:{"z-index":"-1000",position:"absolute",top:"0"},attrs:{time:t.countdown},on:{over:t.handleOver}}):t._e()],1)])},l=[],d=n("75fc"),f=n("cebc"),m=(n("c4e9"),n("58b0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"transition-fade"}},[n("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],attrs:{mask:t.mask,type:"my-popup",center:!0}},[n("div",{staticClass:"prop-box"},[n("div",{staticClass:"close-prop flex-center",class:{closeTop:t.handleConfig},on:{click:t.btnClicked}},[n("i",{staticClass:"cubeic-close"})]),t.isShowTitle?n("div",{staticClass:"prop-box-title flex-center"},[n("p",{staticClass:"flex-center"},[t._v("\n          "+t._s(t.item.propsTitle)+"\n        ")])]):t._e(),n("div",{staticClass:"prop-box-main"},[t.isShowTitle?n("span",[t._v(t._s(t.item.propsMsg))]):t._e(),t.item.hasNum&&t.propsNumber?n("i",{staticClass:"prop-number flex-center"},[t._v(t._s(t.item.hasNum))]):t._e(),n("img",{class:{noProps:1===t.propsIntrol.linkType||!t.item.hasNum&&2!==t.propsIntrol.linkType},attrs:{src:t._f("jointImgURL")(t.item.propsImg),alt:""}}),n("div",{staticClass:"prop-box-main-introl"},[n("div",{staticClass:"prop-box-main-introl-container",class:{noProps:1===t.propsIntrol.linkType||!t.item.hasNum&&2!==t.propsIntrol.linkType}},[n("div",{staticClass:"scroll-main"},[n("cube-scroll",[t.isVisible?n("p",[t._v("\n                  "+t._s(t.item.desc)+"\n                ")]):t._e()])],1)]),n("div",{staticClass:"handle"},[1!==t.propsIntrol.linkType&&!t.handleConfig||!t.item.isShowTitle&&void 0!==t.item.isShowTitle?t._e():n("button",{staticClass:"give",class:{noCard:(!t.item.hasNum||t.propsIntrol.status)&&1!==t.item.showNum},on:{click:function(e){return t.give(t.item,2)}}},[t._v("赠送")]),t.handleConfig?n("button",{staticClass:"askFor",on:{click:function(e){return t.give(t.item,1)}}},[t._v("索要")]):t._e()]),t.isOuter&&t.item.isFirstScan?n("div",{staticClass:"receive"},[n("button",{on:{click:function(e){return t.getProps(t.item)}}},[t._v("领取")])]):t._e(),3!==t.item.method||t.isOuter||t.item.isShowTitle?t._e():n("div",{staticClass:"thank-box"},[n("p",[n("i",[t._v("@"+t._s(t.item.userName))]),t._v(t._s(t.item.thanks))]),n("button",{on:{click:function(e){return t.SendThanksMsg(t.item)}}},[t._v("感谢")])])])])])])],1)}),h=[],v=n("11fd"),b=n("4e5f"),g=n("f26e"),y=n("e490"),I=(n("a481"),n("751a")),L=(n("6a0b"),n("c7d5")),C=n("989b");n("da8d"),Object(I["a"])(y["a"],"code"),localStorage.getItem("nwxuserinfo"),Object(I["a"])(y["a"],"isScan");function w(){var t={type:2,sceneType:2,source:y["a"],id:y["b"],columnCode:"hbjskn",checkType:6,contentType:6};Object(L["a"])(t),Object(C["a"])()}var _=n("bc3a"),k=n.n(_),j="/activity/v2/getActivityDetail",O="/transYear/getUserPropsList",P="/transYear/addUserProps",S="/transYear/giveUserProps",T="/transYear/sendPropsLink",x="/transYear/getPropsLinkStatus",N="/transYear/synthetize",$="/transYear/thanks ",U="/transYear/getUserTransYearDrawInfo",R="/transYear/scanProps",D="/transYear/stagingProps",M="/transYear/openPropLink",E="/transYear/synthetizeNumber",A={getActivityDetail:function(){return k.a.get(j)},getUserPropsList:function(){return k.a.get(O)},addUserProps:function(t){return k.a.post(P,t)},giveUserProps:function(t){return k.a.post(S,t)},getPropsLinkStatus:function(t){return k.a.get(x,{params:t})},compose:function(){return k.a.post(N)},propsLink:function(t){return k.a.post(T,t)},thanks:function(t){return k.a.post($,{params:t})},fetchDrawInfo:function(){return k.a.get(U)},scanProps:function(t){return k.a.post(R,t)},checkMergeNum:function(){return k.a.get(E)},receiveInOuter:function(t){return k.a.post(D,t)},openPropsLink:function(t){return k.a.post(M,t)}},V=n("2f62"),z=n("0bf8"),F={name:"Daoju",mixins:[v["a"],b["a"]],props:{item:{type:Object,default:function(){return{}}},propsIntrol:{type:Object,default:function(){return{}}},handleConfig:{type:Boolean,default:!1},propsNumber:{type:Boolean,default:!1},activityInfo:{type:Object,default:function(){return{}}},mask:{type:Boolean,default:!0},isLotteried:{type:Boolean,default:!1}},data:function(){return{propsLinkId:""}},computed:Object(f["a"])({},Object(V["c"])({userInfo:function(t){return t.user.info}}),{isOuter:function(){return!!y["g"]},isEnd:function(){return 1e3*this.activityInfo.endTime<=Date.now()||this.isLotteried},isShowTitle:function(){var t=this.item;return!this.handleConfig&&(t.isShowTitle||void 0===t.isShowTitle)}}),watch:{item:{immediate:!0,handler:function(t){t&&3===t.method&&this.openSendPropsLink(t)}}},methods:{btnClicked:function(){this.hide()},SendThanksMsg:function(t){var e={userId:t.userId,nickname:t.userName,message:"@".concat(t.userName," ").concat(t.thanks),columnId:this.activityInfo.columnId,isNotLive:this.activityInfo.isNotLive};Object(z["a"])(e)},propsLink:function(t,e){var n=this,i={propsId:t.propsId,propsType:e};return A.propsLink(i).then(function(t){n.propsLinkId=t.propsLinkId})},getProps:function(t){var e={type:2,propsId:t.propsId,method:1};A.receiveInOuter(e),w()},give:function(t,e){var n,i=this,a=this.activityInfo;y["g"]?w():this.isEnd?Object(g["d"])("活动已结束","error"):2===e?1===this.propsIntrol.linkType?this.item.hasNum?Object(g["a"])("确定要赠送吗","当前道具库里有".concat(this.item.hasNum,"个").concat(this.item.propsName)).then(function(e){var n={propsId:t.propsId,propsLinkId:Object(I["a"])(window.location.href,"propsLinkId")};A.giveUserProps(n).then(function(t){i.$set(i.propsIntrol,"status",1),i.$store.dispatch("updatePropList",{}),Object(g["d"])("已成功赠送","scan")}).catch(function(t){4906===t.statusCode&&Object(g["d"])("您还没有此道具，快去参与活动吧","scan")})}):Object(g["d"])("您还没有此道具，快去参与活动吧","scan"):this.item.hasNum?Object(g["a"])("确定要赠送吗","当前道具库里有".concat(this.item.hasNum,"个").concat(this.item.propsName)).then(function(e){n="".concat("http://frontend.onairm.cn","/hetv/scan.html?hideNavBar=true&propsId=").concat(t.propsId,"&activityId=").concat(y["b"],"&contentType=2");var s={type:2,url:n,propsType:2,propsId:t.propsId,contentType:2,activityId:y["b"],title:"我来送祝福啦！打开领取活动道具，新年福气不断，好运连连！",columnId:a.columnId,isNotLive:a.isNotLive,startImg:t.propsLogo,logo:"FLOWER_icon.jpg"};Object(z["k"])(s).then(function(t){"1"===t&&(Object(g["d"])("赠送成功","scan"),i.hide(),i.$store.dispatch("updatePropList",{}))})}):Object(g["d"])("您还没有此道具，快去参与活动吧","scan"):this.propsLink(t,1).then(function(e){n="".concat("http://frontend.onairm.cn","/hetv/scan.html?hideNavBar=true&propsId=").concat(t.propsId,"&propsLinkId=").concat(i.propsLinkId,"&activityId=").concat(y["b"],"&contentType=1");var s={type:2,url:n,activityId:y["b"],contentType:1,title:"我来求道具啦、大家一起来帮忙，新年欢乐享不停！",columnId:a.columnId,isNotLive:a.isNotLive,startImg:t.propsLogo,logo:"FLOWER_icon.jpg"};Object(z["k"])(s)})},openSendPropsLink:function(t){if(!y["g"]&&t.propsLinkId){var e={type:1,propsLinkId:t.propsLinkId};A.openPropsLink(e)}}}},Y=F,B=(n("e53a"),n("2877")),H=Object(B["a"])(Y,m,h,!1,null,"644ca3d8",null),q=H.exports,W=n("df9a"),J=n("8bbf");Object(W["a"])(J,q,["click"],!0);var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"transition-fade"}},[n("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],attrs:{type:"dialog","z-index":t.zIndex,mask:!0,center:!0}},[n("div",{staticClass:"transition-fade-main c-scan-lottery"},[n("div",{staticClass:"c-scan-lottery-close",on:{click:t.handleClose}},[n("i",{staticClass:"cubeic-close"})]),n("div",{staticClass:"c-scan-lottery-main"},[0===Object.keys(t.lotteryInfo).length?[n("div",{staticClass:"red-packet-1"},[n("span",{staticClass:"kai-btn",on:{click:t.handleOpen}}),n("p",{staticClass:"date"},[t._v("道具已合成 坐等"+t._s(t._f("dateFormat")(t.info.unveiledTime,"M月D日 HH:mm"))+"开奖")])])]:[n("div",{staticClass:"red-packet-2"},[n("p",{staticClass:"money"},[t._v(t._s(t.lotteryInfo.amount)),n("span",[t._v("花币")])]),n("p",{staticClass:"money-info"},[t._v("花币已自动存入你的钱包中")]),n("div",{staticClass:"withdraw-btn",on:{click:t.handleWithdraw}},[t._v("去提现")])])]],2)])])],1)},X=[],G={name:"VScanLottery",mixins:[v["a"],b["a"]],props:{info:{type:Object,default:function(){return{}}}},computed:Object(f["a"])({},Object(V["c"])(["lotteryInfo"])),methods:{handleClose:function(){this.hide()},handleOpen:function(){this.$emit("openLottery")},handleWithdraw:function(){Object(z["h"])()}}},Q=G,Z=(n("04de"),Object(B["a"])(Q,K,X,!1,null,"91bddf32",null)),tt=Z.exports,et=n("8bbf");Object(W["a"])(et,tt,["click"],!0);var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"transition-fade"}},[n("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],attrs:{type:"dialog composite","z-index":t.zIndex,mask:!0,center:!0}},[n("div",{staticClass:"transition-fade-main c-scan-composite"},[n("div",{staticClass:"c-scan-composite-wrapper"},[n("div",{ref:"outCircle",staticClass:"outer-circle"},t._l(t.anims,function(e,i){return n("div",{key:i,staticClass:"anim",class:t.rotate?i%2===0?"anim-rotate-right":"anim-rotate-left":"",style:e},[n("img",{attrs:{src:t._f("jointImgURL")(t.showItems[i].propsLogo),alt:""}})])}),0),n("div",{ref:"innerCircle",staticClass:"inner-circle"},[n("div",{ref:"innerCircleRing",staticClass:"ring"}),n("img",{ref:"innerCircleHalo",staticClass:"halo",attrs:{src:t._f("jointImgURL")("8655dc301dd2e1304a482ea00ae83e36"),alt:""}}),n("img",{staticClass:"composite-btn",attrs:{src:t._f("jointImgURL")("f993d0c19403ac3b8af6f4ddc891187e"),alt:""},on:{click:t.handleComposite}})])])])])],1)},it=[],at=window.innerWidth,st=at/375,ot=143*st,rt=36*st,ct={name:"CScanComposite",mixins:[v["a"],b["a"]],props:{items:{type:Array,default:function(){return[]}}},data:function(){return{rotate:!1,anims:[]}},computed:{showItems:function(){var t=this.items;return t.filter(function(t){return 3!==t.propsType})},allCount:function(){return this.showItems.length}},mounted:function(){this.draw(ot)},methods:{handleComposite:function(){this.animation(ot)},animation:function(t,e){var n=this;this.$refs.innerCircleHalo.classList.add("anim-scale-inner-halo"),setTimeout(function(){n.rotate=!0,n.$refs.innerCircleRing.classList.add("anim-scale-inner-ring"),setTimeout(function(){n.rotate=!1,n.$refs.outCircle.classList.add("anim-scale-rotate-outer"),n.$refs.innerCircle.classList.add("anim-scale-rotate-inner")},1300),setTimeout(function(){n.hide(),n.$emit("hide")},2e3)},60)},drawX:function(t){for(var e=this.allCount,n=Math.PI,i=2*n/e,a=[],s=0;s<e;s++){var o=i*s,r=t*Math.sin(o);r=r>0?Math.floor(r):Math.ceil(r),r=o<=n/2||o>=1.5*n?t+r:-(t+r),a.push(r)}return a},draw:function(t){var e=this,n=this.drawX(t);this.anims=n,this.anims=n.map(function(n){return e.drawPoint(Math.abs(n),n>0,t)})},drawPoint:function(t,e,n){var i=rt,a=n-Math.sqrt(n*n-Math.pow(t-n,2));e||(a=2*n-a),t>n&&(t-=3);var s=t-i+"px",o=a-i+"px";return{left:s,top:o}},compose:function(){return A.compose()}}},pt=ct,ut=(n("93fe"),n("f76d"),Object(B["a"])(pt,nt,it,!1,null,"8ac9aef8",null)),lt=ut.exports,dt=n("8bbf");Object(W["a"])(dt,lt,["click"],!0);var ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.rewardPropsList,function(e,i){return n("div",{key:i},[n("custom-daoju",{attrs:{mask:0===i,visible:t.isVisible,item:e,"activity-info":t.activityInfo}})],1)}),0)},mt=[],ht={name:"Props",components:{CustomDaoju:q},mixins:[v["a"]],props:{rewardPropsList:{type:Array,default:function(){return[]}},activityInfo:{type:Object,default:function(){return{}}}}},vt=ht,bt=Object(B["a"])(vt,ft,mt,!1,null,"4e81f7a0",null),gt=bt.exports,yt=n("8bbf");Object(W["a"])(yt,gt,["click"],!0);var It=n("0a94"),Lt=n("ec41"),Ct=n("635b"),wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-scan-prop-list"},[n("img",{staticClass:"avatar hpx-avatar",attrs:{src:t._f("jointImgURL")(t.userIcon),alt:""}}),n("div",{staticClass:"mine"},[t._v("我的道具")]),n("cube-scroll",{staticClass:"c-scan-prop-list-scroll",attrs:{direction:"horizontal",options:{click:!1}}},[n("div",{staticClass:"c-scan-prop-list-result"},t._l(t.items,function(e){return n("div",{key:e.propsId,staticClass:"c-scan-prop-list-item",class:{has:e.hasNum||3===e.propsType,composite:3===e.propsType},on:{click:function(n){return n.stopPropagation(),t.showProps(e)}}},[3!==e.propsType?[e.hasNum?n("div",{staticClass:"item-num"},[t._v(t._s(e.hasNum))]):t._e(),n("img",{attrs:{src:t._f("jointImgURL")(e.propsLogo),alt:""}}),n("span",{staticClass:"c-scan-prop-list-item-button"},[t._v(t._s(e.propsName))])]:[n("div",{staticClass:"composite-img"},[n("img",{staticClass:"anim-composite-packet",attrs:{src:t._f("jointImgURL")("cbea7997b4bf8dc82fecbe180e2c3f97"),alt:""}})]),n("span",{staticClass:"c-scan-prop-list-item-button"},[t._v(t._s(e.hasNum>0?"开奖":"合成"))])]],2)}),0)])],1)},_t=[],kt={name:"CScanPropList",props:{items:{type:Array,default:function(){return[]}},activityInfo:{type:Object,default:function(){return{}}},userIcon:{type:String,default:"https://placehold.it/100x100"},isLotteried:{type:Boolean,default:!1}},methods:{showProps:function(t){if(3===t.propsType)this.handleComposite(0===t.hasNum);else{var e={$props:{item:t,handleConfig:!0,propsNumber:!0,activityInfo:this.activityInfo,isLotteried:this.isLotteried}};this.$createDaoju(e).show()}},handleComposite:function(t){this.$emit("composite",t)}}},jt=kt,Ot=(n("d06a"),Object(B["a"])(jt,wt,_t,!1,null,null,null)),Pt=Ot.exports,St=n("a92b"),Tt=n("57af"),xt=localStorage.getItem("isScan"),Nt=Object(I["a"])(y["a"],"propsLinkId"),$t=Object(I["a"])(y["a"],"propsId"),Ut={name:"VScanHome",components:{InnerPage:Tt["a"],PropList:Pt,CountDown:St["a"]},data:function(){return{activityInfo:{},PropList:[],isLotteried:!1,propsData:{},mergeNum:0}},computed:Object(f["a"])({},Object(V["c"])({info:function(t){return t.user.info},propList:function(t){return t.propList}}),{isOuter:function(){return!!y["g"]},isEnd:function(){return 1e3*this.activityInfo.endTime<=Date.now()||this.isLotteried},countdown:function(){var t=this.activityInfo,e=t.unveiledTime,n=t.serviceTime,i=e-n+10;return i||0},nextScanDate:function(){var t=this.activityInfo.serviceTime,e=this.activityInfo.propsList||[],n=Object(It["a"])(e,function(e){return e.startTime>t});return n}}),mounted:function(){this.$createCScanComposite().show()},methods:{initShare:function(){var t="看经视！知文化！集道具瓜分千万现金！马上参与！",e="口袋里的电视，客厅里的精彩，花伴屏陪你速览电视。",n="".concat("http://frontend.onairm.cn","/hetv/scan.html?outer=1&activityId=").concat(y["b"]);Object(Ct["a"])(t,e,n)},toShare:function(){var t="".concat("http://frontend.onairm.cn","/hetv/scan.html?outer=1&activityId=").concat(y["b"],"&originType=2&contentType=0"),e={type:1,contentType:0,url:t,title:"看经视！知文化！集道具瓜分千万现金！马上参与！",subTitle:"口袋里的电视，客厅里的精彩，花伴屏陪你速览电视。",logo:"FLOWER_icon.jpg"};Object(z["k"])(e)},handleOver:function(){y["g"]||(this.isLotteried=!0,this.fetchLotteryInfo(!0))},handleComposite:function(t){var e=this;if(y["g"])w();else if(t){if(this.showEndInfo())return;var n={$props:{items:Object(d["a"])(this.propList)},$events:{hide:function(t){e.handleShowLottery()}}};this.$createCScanComposite(n).show()}else this.handleShowLottery()},handleShowLottery:function(){var t=this,e={$props:{info:this.activityInfo},$events:{openLottery:function(e){t.isLotteried?t.fetchLotteryInfo():Object(g["d"])("还未到开奖时间","white")}}};this.$createVScanLottery(e).show()},handleShowRule:function(){this.$createBBargainRule({info:"".concat(this.activityInfo.rules||"暂无活动规则")}).show()},handleScan:function(){if(y["g"])w();else{if(this.showEndInfo())return;Object(z["j"])()}},fetchData:function(){var t=this;this.pollingMergeNum(),this.getActivityDetail().then(function(e){y["g"]||Object(z["b"])(),t.scanProps(),Nt&&t.getPropsLinkStatus()})},scanProps:function(){var t=this;xt&&(localStorage.removeItem("isScan"),A.scanProps({method:1,type:y["g"]?2:1}).then(function(e){var n={$props:{item:e}};t.$createDaoju(n).show(),t.getUserPropsList()}))},getActivityDetail:function(){var t=this,e=Object(g["c"])("加载中",this);return A.getActivityDetail().then(function(n){e.hide(),t.activityInfo=n,t.mergeNum=Object(Lt["a"])(n,"propsInfo.mergeNum")||0;var i=n.rewardPropsList||[],a={$props:{rewardPropsList:i,activityInfo:t.activityInfo}};return t.$createProps(a).show(),t.getUserPropsList(),setTimeout(function(){t.showEndInfo()},1e3),n}).catch(function(t){e.hide()})},getPropsLinkStatus:function(){var t=this,e={propsId:$t,propsLinkId:Nt};A.getPropsLinkStatus(e).then(function(e){t.propsData=e;var n={$props:{item:t.propsData.props,propsIntrol:t.propsData,activityInfo:t.activityInfo}};if(2===e.linkType&&0===e.status){var i={method:3,propsId:$t,propsLinkId:Nt};A.addUserProps(i).then(function(e){t.getUserPropsList()})}else t.getUserPropsList();t.$createDaoju(n).show()})},getUserPropsList:function(){this.$store.dispatch("updatePropList")},fetchLotteryInfo:function(t){var e=this;return A.fetchDrawInfo().then(function(t){e.$store.commit("updateLotteryInfo",t||{})}).catch(function(e){t||4502!==e.statusCode&&4602!==e.statusCode||Object(g["d"])(e.message,"error")})},pollingMergeNum:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=null),A.checkMergeNum().then(function(e){t.mergeNum=e.userMergeNum,t.timeout=setTimeout(function(){t.pollingMergeNum()},8e3)})},showEndInfo:function(){return!!this.isEnd&&(Object(g["d"])("活动已结束","error"),!0)}}},Rt=Ut,Dt=(n("aea0"),Object(B["a"])(Rt,u,l,!1,null,"2da6e689",null)),Mt=Dt.exports,Et={name:"Scan",components:{Home:Mt},data:function(){return{show:!1}},created:function(){this.show=!0}},At=Et,Vt=Object(B["a"])(At,c,p,!1,null,null,null),zt=Vt.exports,Ft=n("2147"),Yt=n("8bbf");Yt.use(V["a"]);var Bt=new V["a"].Store({modules:{user:Ft["a"]},state:{propList:[],lotteryInfo:{}},mutations:{updatePropList:function(t,e){t.propList=e},updateLotteryInfo:function(t,e){t.lotteryInfo=e}},actions:{updatePropList:function(t){var e=t.commit;A.getUserPropsList().then(function(t){e("updatePropList",t||[])})}}}),Ht=(n("35ab"),n("0582")),qt=n("8de7"),Wt=n("8bbf");Object(Ht["a"])(),Object(qt["a"])();var Jt=new Wt({store:Bt,render:function(t){return t(zt)}}).$mount("#app");window.rootApp=Jt},cd8a:function(t,e,n){},d06a:function(t,e,n){"use strict";var i=n("8d92"),a=n.n(i);a.a},d639:function(t,e,n){},d6fa:function(t,e,n){},da8d:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"c",function(){return p}),n.d(e,"a",function(){return u});n("96cf");var i=n("3b8d"),a=n("bc3a"),s=n.n(a),o=n("6a0b");function r(t,e){var n="snsapi_userinfo";e=encodeURIComponent(e),e="http://api.v2.onairm.cn/omhsp/wxAuthCallback?redirectUrl=".concat(e);var i=encodeURIComponent(e),a="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(t,"&redirect_uri=").concat(i,"&response_type=code&scope=").concat(n,"&state=STATE#wechat_redirect");window.location.href=a}function c(){var t={url:window.location.href};return s.a.get("".concat(o["a"],"/getWxJsConfig"),{params:t})}function p(t,e){var n={code:t,unionId:e};return s.a.get("/v249/getWxUserInfo",{params:n})}function u(t){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:n=t.sent,r(n.appId,e);case 4:case"end":return t.stop()}},t)})),l.apply(this,arguments)}},e11e:function(t,e,n){},e53a:function(t,e,n){"use strict";var i=n("0044"),a=n.n(i);a.a},f76d:function(t,e,n){"use strict";var i=n("d639"),a=n.n(i);a.a}});