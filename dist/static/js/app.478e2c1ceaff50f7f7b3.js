webpackJsonp([1],{37:function(t,n,e){function o(t){e(80)}var r=e(20)(e(39),e(89),o,"data-v-4c825f1c",null);t.exports=r.exports},39:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(21),r=e.n(o),i=e(46),s=e.n(i),a=e(45),l=e.n(a),c=e(44),d=e.n(c),u=e(79),h=(e.n(u),e(42)),m=(e.n(h),e(88)),f=e.n(m),p=e(87),v=e.n(p);n.default={name:"app",data:function(){return{interval:10,timer:"",state:"keepOn",controlCode:!1,controlCodeText:"显示代码",currentStyle:"",fullStyle:['/*\n* Inspired by http://strml.net/\n* 大家好，我是刘德铨 \n* 这是我的一份动态简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  background:  rgba(31,110,212, 1); \n  color: rgb(222,222,222);\n  font-size: 16px;\n}\n/* 文字离边框太近了,我们来挪一下它 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw;  height: 90vh;\n  background: #303030;\n}\n\n/* 代码高亮\n  作为程序员，怎么能忍受代码都是一种颜色呢\n*/\n.token.comment { color: rgb(222,222,222); }\n.token.selector { color: #a6e22e; }\n.token.punctuation { color: yellow; }\n.token.property { color: #66d9ef; }\npre { color: #999cfe};\n.token.function { color: #2f9c0a; }\n\n/* \n  动画速度太慢了， 来个加速按钮吧\n*/\n#speedUp { display: inline-block; }\n\n/* \n  想停止动画， 来个停止按钮吧\n*/\n#stop { display: inline-block; }\n\n/* \n  想继续动画， 来个继续按钮吧\n*/\n#keepOn { display: inline-block; }\n\n/* \n  按钮样式太单调了，我们来装饰一下\n*/\n.btns {\n  background: #03A9F4;\n  color: #FFF;\n  border: none;  outline: none;\n  margin-right: 0.5em;\n  float: left;\n  font-size: .25rem;  color: #EEE;\n  width: 5em;  height: 3em;\n  text-align: center;\n  cursor: pointer;\n  border-radius: .3rem;\n  transition: all .3s ease-in-out;\n  box-shadow: 0 2px 10px rgba(0,0,0,.5);\n  position: relative;\n}\n\n.btns::before, .btns::after  {\n    content: "";\n    position: absolute;\n    top: 4px;  bottom: 4px;  left: 4px;  right: 4px;\n    border: 2px solid #eee; border-top: 0;  border-bottom: 0;\n    transition: all .4s ease-in-out\n} \n\n.btns::before {\n   transform: scale(0, 1);\n   border: 2px solid #EEE;\n   border-left: 0;  border-right: 0;\n}\n\n.btns::after { transform: scale(1, 0); }\n.btns:hover::before  { transform: scale(1); }\n.btns:hover::after  { transform: scale(1); }\n\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor {\n  position: fixed;\n  right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw;  height: 90vh; \n  border: 1px solid;\n  background: white;  color: #222;\n  overflow: auto;\n}\n\n#icon {\n   font-size: 20px;\n}\n\n/*#stop {\n  display: inline-block;left: 14em;\n}*/\n\n\n/* 好了，我开始写简历了 */\n\n        ',"\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n        ",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  margin: 1em 0 .5em;\n  padding: 0.1em 0.5em;\n  border-left: 4px solid #FF7203;\n  background: #B79DFE;\n}\n.resumeEditor  p {\n  font-size: 18px;\n  line-height: 1.7em;\n}\n.resumeEditor img {\n   width: 50%;\n}\n.resumeEditor .icon {\n   width: 1em; height: 1em;\n   vertical-align: -0.15em;\n   fill: currentColor;\n   overflow: hidden;\n}\n.resumeEditor a {\n  margin: 0 5px;\n  color: #108ee9;\n  background: transparent;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  -webkit-transition: color .3s ease;\n  transition: color .3s ease;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n\n/*\n好了，代码就展示到这里，接下来重点是优化简历了\n*/\n/*先隐藏代码*/\n.styleEditor {\n  -webkit-transform: translate(-50%, -200%);\n          transform: translate(-50%, -200%);  \n  position: fixed;\n  top: 4em;\n  left: 50%;\n  width: 80vw;\n  height: 80vh;\n  z-index: 100;\n}\n\n        ',"\n.resumeEditor {\n   position: absolute;\n   left: 50%;\n   transform: translateX(-50%); \n}\n\n        "],currentMarkdown:"",enableHtml:!1,fullMarkdown:'刘德铨\n---\n在校大三学生，正在学习前端\n\n技能\n---\n* JavaScript\n* Vue\n\n求职意向\n---\n前端工程师\n\n联系方式\n---\n* 手机：18826136763\n* 邮箱：2320975287@qq.com\n* 微信：18826136763\n\n![weChat](./static/img/weChat.png)\n\n* qq: 2320975287\n\n![QQ](./static/img/qq.jpg)\n\n项目\n---\n1. [Vue版CNode](https://ldq-first.github.io/vue-CNode-1/dist/#/)<a href="https://github.com/LDQ-first/vue-CNode-1" >\n  <svg class="icon" id="icon" aria-hidden="true">\n    <use xlink:href="#icon-github"></use>\n  </svg>\n</a>\n2. [Vue版在线简历编辑器](https://ldq-first.github.io/vue-cv-1/dist/#/)<a href="https://github.com/LDQ-first/vue-cv-1" >\n  <svg class="icon" id="icon" aria-hidden="true">\n    <use xlink:href="#icon-github"></use>\n  </svg>\n</a>\n3. [Vue版动态简历](https://ldq-first.github.io/vue-animating-resume-1/dist/)<a href="https://github.com/LDQ-first/vue-animating-resume-1" >\n  <svg class="icon" id="icon" aria-hidden="true">\n    <use xlink:href="#icon-github"></use>\n  </svg>\n</a>\n\n\n链接\n----\n* [GitHub](https://github.com/LDQ-first)\n\n> 如果你喜欢这个效果，Fork [我的项目](https://github.com/LDQ-first/vue-animating-resume-1)\n\n\n\n'}},created:function(){this.makeResume()},methods:{controlCodeEve:function(){this.$refs.styleEditor.controlCode(),this.controlCodeText="显示代码"===this.controlCodeText?"隐藏代码":"显示代码"},stop:function(){this.state="stop",clearTimeout(this.timer)},keepOn:function(){this.state="keepOn",this.makeResume()},speedUp:function(){this.state="speedUp",this.interval=0},skip:function(){this.stop(),this.state="skip",this.immediatelyFillCode(),this.enableHtml=!0,this.controlCode=!0,this.immediatelyFillMarkdown()},immediatelyFillCode:function(){this.currentStyle="";var t=!0,n=!1,e=void 0;try{for(var o,r=d()(this.fullStyle);!(t=(o=r.next()).done);t=!0){var i=o.value;this.currentStyle+=i}}catch(t){n=!0,e=t}finally{try{!t&&r.return&&r.return()}finally{if(n)throw e}}},immediatelyFillMarkdown:function(){this.currentMarkdown=this.fullMarkdown},again:function(){this.enableHtml=!1,this.controlCode=!1,this.state="again",this.currentStyle="",this.currentMarkdown="",this.makeResume()},makeResume:function(){function t(){return n.apply(this,arguments)}var n=l()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.graduallyShowStyle(0);case 2:return t.next=4,this.graduallyShowResume();case 4:return t.next=6,this.graduallyShowStyle(1);case 6:return t.next=8,this.showHtml();case 8:return t.next=10,this.graduallyShowStyle(2);case 10:return t.next=12,this.showControlCode();case 12:return t.next=14,this.graduallyShowStyle(3);case 14:this.state="over";case 15:case"end":return t.stop()}},t,this)}));return t}(),graduallyShowStyle:function(t){var n=this;return new r.a(function(e,o){!function o(){var r=n.fullStyle[t];if(r){var i=n.fullStyle.filter(function(n,e){return e<=t}).map(function(t){return t.length}).reduce(function(t,n){return t+n},0),s=i-r.length;if(n.currentStyle.length<i){var a=n.currentStyle.length-s;n.currentStyle+=r.substring(a,a+1)||" ","\n"===r.substring(a-1,a)&&n.$refs.styleEditor&&n.$nextTick(function(){n.$refs.styleEditor.dragScrollBar()}),n.timer=setTimeout(o,n.interval)}else e()}}()})},graduallyShowResume:function(){var t=this;return r.a.resolve({then:function(n,e){var o=t.fullMarkdown.length;!function e(){if(t.currentMarkdown.length<o){t.currentMarkdown=t.fullMarkdown.substring(0,t.currentMarkdown.length+1);t.currentMarkdown[t.currentMarkdown.length-1];"\n"===t.currentMarkdown[t.currentMarkdown.length-2]&&t.$refs.resumeEditor&&t.$nextTick(function(){return t.$refs.resumeEditor.dragScrollBar()}),t.timer=setTimeout(e,t.interval)}else n()}()}})},showHtml:function(){var t=this;return r.a.resolve({then:function(n,e){t.enableHtml=!0,n()}})},showControlCode:function(){var t=this;return r.a.resolve({then:function(n,e){t.controlCode=!0,n()}})}},components:{StyleEditor:f.a,ResumeEditor:v.a}}},40:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(83),r=e.n(o);n.default={name:"ResumeEditor",props:["markdown","enableHtml"],computed:{resume:function(){return this.enableHtml?r()(this.markdown):this.markdown}},methods:{dragScrollBar:function(){this.$refs.container.scrollTop=1e5},immediatelyShowResume:function(){this.$refs.container.classList.add("showResume")}}}},41:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(84),r=e.n(o);n.default={name:"StyleEditor",props:["code"],computed:{styleTag:function(){return"<style>"+this.code+"</style>"},highlightedCode:function(){return r.a.highlight(this.code,r.a.languages.css)}},methods:{dragScrollBar:function(){this.$refs.container.scrollTop=1e5},controlCode:function(){this.$refs.container.classList.toggle("showCode")}}}},42:function(t,n){!function(t){function n(){var t,n;t=document.createElement("div"),t.innerHTML=e,e=null,(n=t.getElementsByTagName("svg")[0])&&(n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.style.width=0,n.style.height=0,n.style.overflow="hidden",s(n,document.body))}var e='<svg><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"  ></path></symbol><symbol id="icon-tag35" viewBox="0 0 1024 1024"><path d="M364.5426 960.0055 220.322941 960.0055c-31.855522 0-57.655118-25.800619-57.655118-57.652048L162.667823 123.68702c0-31.853475 25.800619-57.644885 57.655118-57.644885l144.219659 0c31.855522 0 57.650001 25.791409 57.650001 57.644885L422.192601 902.354476C422.192601 934.205904 396.397099 960.0055 364.5426 960.0055L364.5426 960.0055z"  ></path><path d="M797.11255 960.0055 652.893914 960.0055c-31.855522 0-57.655118-25.800619-57.655118-57.652048L595.238796 123.68702c0-31.853475 25.800619-57.644885 57.655118-57.644885l144.219659 0c31.855522 0 57.650001 25.791409 57.650001 57.644885L854.763574 902.354476C854.763574 934.205904 828.968072 960.0055 797.11255 960.0055L797.11255 960.0055z"  ></path></symbol><symbol id="icon-rightsanjiao-copy" viewBox="0 0 1024 1024"><path d="M857.174 480.227l-554.599-408.946c-11.204-11.204-28.010-11.204-39.214-5.603s-22.408 22.408-22.408 33.612v823.495c0 16.807 5.602 28.010 22.408 33.612 0 5.602 5.602 5.602 16.806 5.603 5.603 0 16.807 0 22.408-5.602l554.599-408.946c5.603-11.204 11.204-22.408 11.204-33.612s-5.602-22.408-11.204-33.612z"  ></path></symbol><symbol id="icon-tiaoguo" viewBox="0 0 1025 1024"><path d="M581.775 873.695a26.185 26.185 0 0 1-26.18-26.185V667.294c-31.739 2.214-89.003 8.117-155.237 23.72-58.759 13.843-112.999 32.51-161.211 55.483-59.511 28.354-109.902 63.366-149.778 104.064a26.182 26.182 0 1 1-44.619-22.06c0.377-2.618 9.655-65.058 45.419-145.58 20.982-47.242 46.833-91.084 76.83-130.311 37.516-49.057 81.642-90.975 131.159-124.597 10.114-7.587 116.47-85.255 257.436-106.486V161.973a26.185 26.185 0 0 1 43.486-19.654L987.746 484.51a26.18 26.18 0 0 1 0.033 39.276L599.112 867.133a26.176 26.176 0 0 1-17.341 6.561z m0.006-260.08a26.182 26.182 0 0 1 26.183 26.185v149.642l322.894-285.245-322.894-284.284v124.696c0 13.439-10.174 24.697-23.545 26.051-141.472 14.333-254.047 98.646-255.167 99.495-0.373 0.283-0.777 0.574-1.165 0.836-45.063 30.515-85.265 68.678-119.487 113.429-27.507 35.969-51.251 76.262-70.568 119.756a638.289 638.289 0 0 0-21.054 53.854c30.21-21.977 63.744-41.753 100.325-59.135 51.744-24.587 109.711-44.488 172.293-59.148 106.241-24.888 188.44-26.093 191.887-26.132 0.098-0.002 0.198-0.002 0.296-0.002z"  ></path></symbol><symbol id="icon-yingyongjiasuqi" viewBox="0 0 1024 1024"><path d="M283.4 960l119.7-396.3-153.9-17.2L693.8 64.1 591.2 425.8H728L283.4 960z"></path><path d="M284.2 818.9l18.2-60.3c-12.9-9.5-25.1-20-36.6-31.5-59.5-59.5-92.3-138.6-92.3-222.8 0-84.2 32.8-163.3 92.3-222.8s138.6-92.3 222.8-92.3c11.4 0 22.6 0.6 33.7 1.8l48.6-52.7c-26.8-6-54.4-9.1-82.3-9.1-50.6 0-99.7 9.9-146 29.5-44.7 18.9-84.8 45.9-119.2 80.4-34.4 34.4-61.5 74.5-80.4 119.2-19.6 46.3-29.5 95.4-29.5 146 0 50.6 9.9 99.7 29.5 146 18.9 44.7 45.9 84.8 80.4 119.2 18.6 18.8 39 35.2 60.8 49.4zM834.2 358.4c-18.9-44.7-45.9-84.8-80.4-119.2-17-17-35.5-32.3-55.2-45.6L681.2 255c10.5 8.2 20.6 17 30.2 26.6 59.5 59.5 92.3 138.6 92.3 222.8 0 84.2-32.8 163.3-92.3 222.8s-138.6 92.3-222.8 92.3c-11.7 0-23.2-0.7-34.6-1.9l-44.6 53.5c25.8 5.6 52.3 8.4 79.2 8.4 50.6 0 99.7-9.9 146-29.5 44.7-18.9 84.8-45.9 119.2-80.4s61.5-74.5 80.4-119.2c19.6-46.3 29.5-95.4 29.5-146 0-50.6-10-99.8-29.5-146z"></path></symbol></svg>',o=function(){var t=document.getElementsByTagName("script");return t[t.length-1]}(),r=o.getAttribute("data-injectcss"),i=function(t,n){n.parentNode.insertBefore(t,n)},s=function(t,n){n.firstChild?i(t,n.firstChild):n.appendChild(t)};if(r&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}!function(n){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(n,0);else{var e=function t(){document.removeEventListener("DOMContentLoaded",t,!1),n()};document.addEventListener("DOMContentLoaded",e,!1)}else document.attachEvent&&function(t,n){var e=t.document,o=!1,r=function(){o||(o=!0,n())};!function t(){try{e.documentElement.doScroll("left")}catch(n){return void setTimeout(t,50)}r()}(),e.onreadystatechange=function(){"complete"==e.readyState&&(e.onreadystatechange=null,r())}}(t,n)}(n)}(window)},43:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(38),r=e(37),i=e.n(r);o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:i.a}})},79:function(t,n){},80:function(t,n){},81:function(t,n){},82:function(t,n){},87:function(t,n,e){function o(t){e(82)}var r=e(20)(e(40),e(91),o,"data-v-e398a9e4",null);t.exports=r.exports},88:function(t,n,e){function o(t){e(81)}var r=e(20)(e(41),e(90),o,"data-v-898c7dcc",null);t.exports=r.exports},89:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{attrs:{id:"app"}},[e("button",{directives:[{name:"show",rawName:"v-show",value:t.controlCode,expression:"controlCode"}],staticClass:"controlCode btns",on:{click:t.controlCodeEve}},[t._v(t._s(t.controlCodeText))]),t._v(" "),e("StyleEditor",{ref:"styleEditor",attrs:{code:t.currentStyle}}),t._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:t.currentMarkdown,enableHtml:t.enableHtml}})],1),t._v(" "),e("div",{staticClass:"control clearfix"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"stop"!=t.state&&"skip"!=t.state&&"speedUp"!=t.state&&"over"!=t.state,expression:"state != 'stop' && state != 'skip' && state != 'speedUp' && state != 'over' "}],staticClass:"speedUp btns",attrs:{id:"speedUp"},on:{click:t.speedUp}},[e("svg",{staticClass:"icon",attrs:{id:"icon","aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-yingyongjiasuqi"}})]),t._v("\n        加速\n      ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:"stop"!=t.state&&"skip"!=t.state&&"over"!=t.state,expression:"state != 'stop' && state != 'skip' && state != 'over' "}],staticClass:"stop btns",attrs:{id:"stop"},on:{click:t.stop}},[e("svg",{staticClass:"icon",attrs:{id:"icon","aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-tag35"}})]),t._v("\n        停止\n      ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:"stop"===t.state&&"over"!=t.state,expression:"state === 'stop' && state != 'over' "}],staticClass:"keepOn btns",attrs:{id:"keepOn"},on:{click:t.keepOn}},[e("svg",{staticClass:"icon",attrs:{id:"icon","aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-rightsanjiao-copy"}})]),t._v("\n        继续\n      ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:"skip"!=t.state&&"over"!=t.state,expression:"state != 'skip' && state != 'over' "}],staticClass:"skip btns",attrs:{id:"skip"},on:{click:t.skip}},[e("svg",{staticClass:"icon",attrs:{id:"icon","aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-tiaoguo"}})]),t._v("\n        跳过\n      ")]),t._v(" "),e("button",{staticClass:"again btns",attrs:{id:"again"},on:{click:t.again}},[e("svg",{staticClass:"icon",attrs:{id:"icon","aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-tiaoguo"}})]),t._v("\n        重来\n      ")])])])},staticRenderFns:[]}},90:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:t._s(t.styleTag)}}),t._v(" "),e("pre",{domProps:{innerHTML:t._s(t.highlightedCode)}})])},staticRenderFns:[]}},91:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:t.enableHtml}},[t.enableHtml?e("div",{domProps:{innerHTML:t._s(t.resume)}}):e("pre",[t._v(t._s(t.resume))])])},staticRenderFns:[]}}},[43]);
//# sourceMappingURL=app.478e2c1ceaff50f7f7b3.js.map