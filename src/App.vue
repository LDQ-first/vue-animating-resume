<template>
  <div>
    <div id="app">
      <p  v-show="optimizeResume" class="optimizeResume">简历快速优化中……</p>
      <button @click="controlCodeEve" v-show="controlCode" class="controlCode btns">{{controlCodeText}}</button>
      <aside v-show="state === 'over'">
        <ul>
          <li v-for="(item, index) in asideArr" :key="index" >
            <a :href="item.link" target="_blank" v-if="isFirefox() && item.tag === 'PDF下载'" download 
               >{{item.tag}}</a>
            <!--<a :href="item.link" target="_blank"  v-else @click="pureResume(item.tag)" >{{item.tag}}</a>-->
            <a :href="item.link" target="_blank"  v-else>{{item.tag}}</a>
          </li>
        </ul>
      </aside>
      <StyleEditor ref="styleEditor" :code="currentStyle" ></StyleEditor>
      <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
    </div>
    <div class="control clearfix" v-show="showControl">
        <button @click="speedUp" class="speedUp btns" id="speedUp" 
        v-show="interval != 0  && state != 'over' ">
          <svg class="icon" id="icon" aria-hidden="true">
            <use xlink:href="#icon-yingyongjiasuqi"></use>
          </svg>
          加速
        </button>
        <button @click="stop" class="stop btns" id="stop" v-show="state != 'stop' && state != 'over' ">
          <svg class="icon" id="icon"  aria-hidden="true">
            <use xlink:href="#icon-tag35"></use>
          </svg>
          停止
        </button>
        <button @click="keepOn" class="keepOn btns" id="keepOn" v-show="state === 'stop' && state != 'over' ">
          <svg class="icon" id="icon" aria-hidden="true">
            <use xlink:href="#icon-rightsanjiao-copy"></use>
          </svg>
          继续
        </button>
        <button @click="skip" class="skip btns" id="skip" v-show="state != 'over' ">
          <svg class="icon" id="icon" aria-hidden="true">
            <use xlink:href="#icon-tiaoguo"></use>
          </svg>
          跳过
        </button>
        <button @click="again" class="again btns" id="again">
          <svg class="icon" id="icon" aria-hidden="true">
            <use xlink:href="#icon-tiaoguo"></use>
          </svg>
          重来
        </button>
     </div>
  </div>
</template>

<script>
 import './assets/reset.css'
 import './assets/js/iconfont.js'
 import StyleEditor from './components/StyleEditor'
 import ResumeEditor from './components/ResumeEditor'

export default {
  name: 'app',
  data() {
    return {
      asideArr: [
        { tag: 'PDF下载', link: './static/刘德铨-应聘前端开发-2017.pdf'},
        { tag: '源码', link: 'https://github.com/LDQ-first/vue-animating-resume'},
        { tag: 'GitHub', link: 'https://github.com/LDQ-first'},
        { tag: 'React版', link: '//ldqblog.me/react-animating-resume/build/'},
      ],
      showControl: true,
      interval: 50,
      timer: '',
      state: 'keepOn',
      controlCode: false,
      controlCodeText: '显示代码',
      optimizeResume: false,
      currentStyle: ``,
      fullStyle: [ `/*
* Inspired by http://strml.net/
* 大家好，我是刘德铨 
* 这是我的一份Vue版动态简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  background:  rgba(31,110,212, 1); 
  color: rgb(222,222,222);
  font-size: 16px;
}
/* 文字离边框太近了,我们来挪一下它 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw;  height: 90vh;
  background: #303030;
}
.styleEditor pre { padding: 0.5em; }

/* 代码高亮
  作为程序员，怎么能忍受代码都是一种颜色呢
*/
.token.comment { color: rgb(222,222,222); }
.token.selector { color: #a6e22e; }
.token.punctuation { color: yellow; }
.token.property { color: #66d9ef; }
pre { color: #999cfe};
.token.function { color: #2f9c0a; }

/* 
  动画速度太慢了， 来个加速按钮吧
*/
#speedUp { display: inline-block; }

/* 
  想停止动画， 来个停止按钮吧
*/
#stop { display: inline-block; }

/* 
  想继续动画， 来个继续按钮吧
*/
#keepOn { display: inline-block; }

/* 
  按钮样式太单调了，我们来装饰一下
*/
.btns {
  background: #03A9F4;
  color: #FFF;
  border: none;  outline: none;
  margin-right: 0.5em;
  float: left;
  font-size: 14px;  color: #EEE;
  width: 5em;  height: 3em;
  text-align: center;
  cursor: pointer;
  border-radius: .3rem;
  transition: all .3s ease-in-out;
  box-shadow: 0 2px 10px rgba(0,0,0,.5);
  position: relative;
}
.btns::before, .btns::after  {
    content: "";
    position: absolute;
    top: 4px;  bottom: 4px;  left: 4px;  right: 4px;
    border: 2px solid #eee; border-top: 0;  border-bottom: 0;
    transition: all .4s ease-in-out
} 

.btns::before {
   transform: scale(0, 1);
   border: 2px solid #EEE;
   border-left: 0;  border-right: 0;
}

.btns::after { transform: scale(1, 0); }
.btns:hover::before  { transform: scale(1); }
.btns:hover::after  { transform: scale(1); }


/* 接下来我给自己准备一个编辑器 */
.resumeEditor {
  position: fixed;
  right: 0; top: 0;
  padding: 1em;  margin: .5em;
  width: 48vw;  height: 90vh; 
  border: 1px solid;
  background: white;  color: #222;
  overflow: auto;
}
#icon { font-size: 20px; }

/* 好了，我开始写简历了 */
        `,
        `
/* 这个简历好像差点什么
 * 对了，这是 Markdown + Html 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
        `,
        `
/* 再对 HTML 加点样式 */
.resumeEditor h2{
  padding: 0.3em 0.5em;
  margin: 0.4em 0;
  border-left: 4px solid #FF7203;
  background: #B79DFE;
  color: #222;
  font-size: 20px;
}
.resumeEditor pre {
  color: #222;
  line-height: 1.4em;
  padding: 0.6em 1em;
}
.resumeEditor  p {
  font-size: 18px;
  line-height: 1.7em;
  padding: 0.6em 1em;
}
.resumeEditor img { width: 170px; }
.resumeEditor .icon {
   width: 1em; height: 1em;
   margin-right: 0.4em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.resumeEditor a {
  margin: 0 5px;
  color: #108ee9; background: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color .3s ease;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
  padding: 0.4em 1em;
}
.resumeEditor ul li,.resumeEditor ol li{
  padding: 0.4em 1em;
}
.resumeEditor .contact { padding: 0 2em; }
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before{
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em; padding: .5em;
  background: #FFBD8D;
}

/*
好了，代码就展示到这里，接下来重点是优化简历了
*/
/*隐藏代码*/
.styleEditor { transform: translate(-50%, -200%); }
.resumeEditor { position: absolute; left: 50%; top: 3.5em; transform: translateX(-50%); }
.styleEditor { 
   position: fixed; z-index: 100;
   top: 4em; left: 50%;
   width: 90vw; height: 80vh; margin: 0;
   opacity: 0;
}
        `,
        `
/*优化简历*/
.resumeEditor {
  width: 90vw;  min-width: 320px; height: 82vh;
  margin: 0;
}
progress {
    width: 160px; height: 20px;
    border: 1px solid #0064B4;  
    background: #e6e6e6;
    color: #0064B4; 
}
progress::-moz-progress-bar { background: #0064B4; }
progress::-webkit-progress-bar { background: #e6e6e6; }
progress::-webkit-progress-value  { background: #0064B4; }

@media screen and (max-width: 450px) {
  progress { display: block; }
}
.resumeEditor img.webpack { 
  width: 20px; height: 20px;
  margin-right:0.4em;
  display: inline-block;vertical-align: middle
}
.resumeEditor .github { color: #000 }
.resumeEditor .icon { box-sizing: content-box; }
.resumeEditor .icon-border {
   display: block; height: calc(1.5em + 7px); border-bottom: 2px solid #CCC;
}
.resumeEditor .icon-border .icon {
   width: 5em; height: 1.5em;
   border-bottom: 4px solid #2AA8E9;
}
.resumeEditor p{ padding: 0.2em 0; }
.resumeEditor p:not(:nth-of-type(1)) { margin-top: 0.5em; }
        `

],
      currentMarkdown: '',
      enableHtml: false,
      fullMarkdown: `
<span class="icon-border">
  <svg class="icon" id="icon" aria-hidden="true">
      <use xlink:href="#icon-geren"></use>
  </svg>
</span>
刘德铨
---
在校大三学生，正在学习前端, 对前端有强烈的兴趣

<span class="icon-border">
  <svg class="icon" id="icon" aria-hidden="true">
      <use xlink:href="#icon-diannao"></use>
  </svg>
</span>
技能
---
<pre><svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-html"></use>
</svg>HTML5       熟悉  <progress value="60" max="100"></progress>
<svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-socialcss3"></use>
</svg>CSS3        熟悉  <progress value="60" max="100"></progress>
<svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-sass"></use>
</svg>SCSS        熟悉  <progress value="60" max="100"></progress>
<svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-js-copy"></use>
</svg>JavaScript  熟悉  <progress value="50" max="100"></progress>
<svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-jquery"></use>
</svg>jQuery      熟悉  <progress value="70" max="100"></progress>
<svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-vuejs"></use>
</svg>Vue         熟悉  <progress value="40" max="100"></progress>
<svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-download_react-native"></use>
</svg>React       了解  <progress value="20" max="100"></progress>
<img src="../static/img/webpack.png" class="webpack">Webpack     了解  <progress value="35" max="100"></progress>  
</pre>

<span class="icon-border">
  <svg class="icon" id="icon" aria-hidden="true">
      <use xlink:href="#icon-mubiao"></use>
  </svg>
</span>
求职意向
---
前端工程师

<span class="icon-border">
  <svg class="icon" id="icon" aria-hidden="true">
      <use xlink:href="#icon-xiangmu"></use>
  </svg>
</span>
项目
---
1. [Vue版CNode](//ldqblog.me/vue-CNode/dist/#/)<a href="https://github.com/LDQ-first/vue-CNode" >
  <svg class="icon github" id="icon" aria-hidden="true">
    <use xlink:href="#icon-github"></use>
  </svg>
</a>
2. [Vue版动态简历](//ldqblog.me/vue-animating-resume/dist/)<a href="https://github.com/LDQ-first/vue-animating-resume" >
  <svg class="icon github" id="icon" aria-hidden="true">
    <use xlink:href="#icon-github"></use>
  </svg>
</a>
3. [React版动态简历](//ldqblog.me/react-animating-resume/build/)<a href="https://github.com/LDQ-first/react-animating-resume">
  <svg class="icon github" id="icon" aria-hidden="true">
    <use xlink:href="#icon-github"></use>
  </svg>
</a>

<span class="icon-border">
  <svg class="icon" id="icon" aria-hidden="true">
      <use xlink:href="#icon-lianxi"></use>
  </svg>
</span>
联系方式
---
* <svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-shouji"></use>
</svg>手机：18826136763
* <svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-youxiang"></use>
</svg>邮箱：2320975287@qq.com
* <svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-weixin-copy-copy"></use>
</svg>微信：18826136763

<span class="contact">![weChat](./static/img/weChat.png)</span>
*  <svg class="icon" id="icon" aria-hidden="true">
    <use xlink:href="#icon-QQ1"></use>
</svg>qq: 2320975287

<span class="contact">![QQ](./static/img/qq.jpg)</span>


<span class="icon-border">
  <svg class="icon" id="icon" aria-hidden="true">
      <use xlink:href="#icon-jiaoyu"></use>
  </svg>
</span>
教育背景
---
- 就读于广东工业大学 计算机科学与技术 本科 
- 英语四级

<span class="icon-border">
  <svg class="icon" id="icon" aria-hidden="true">
      <use xlink:href="#icon-ziwomiaoshu"></use>
  </svg>
</span>
自我评价和期望
---
> 热衷于学习新技术，做事认真，对前端有浓厚的兴趣。   
> 我希望能够加入一个以技术驱动为导向，技术氛围浓厚，有发展空间的互联网公司 :)  
> 希望借此机会为贵司贡献自身所长

`

    }
  },
  created() {
    this.makeResume();
  },
  methods: {
    isFirefox() {
      return navigator.userAgent.indexOf('Firefox') >-1;
    },
    pureResume(tag) {
      if(tag === 'PDF下载') {
        this.skip();
        this.showControl = false;
        this.controlCode = false;
        this.state = 'pure';
        this.$refs.resumeEditor.pureResume();
      } 
    },
    controlCodeEve() {
      this.$refs.styleEditor.controlCode();
      this.controlCodeText = this.controlCodeText === '显示代码' ? '隐藏代码' : '显示代码';
    },
    stop() {
      this.state = 'stop';
      clearTimeout(this.timer);
    },
    keepOn() {
      this.state = 'keepOn';
      this.makeResume();
    },
    speedUp() {
      this.state = 'speedUp';
      this.interval = 0;
    },
    skip() {
      this.stop();
      this.state = 'over';
      this.immediatelyFillCode();
      this.enableHtml = true;
      this.controlCode = true;
      this.optimizeResume = false;
      this.immediatelyFillMarkdown();
      this.controlCodeText = '显示代码';
    },
    immediatelyFillCode() {
      this.currentStyle = '';
      for(let style of this.fullStyle) {
        this.currentStyle += style;
      } 
    },
    immediatelyFillMarkdown() {
      this.currentMarkdown = this.fullMarkdown;
    },
    again() {
      clearTimeout(this.timer);
      this.timer = '';
      this.showControl = true;
      this.interval = 50;
      this.enableHtml = false;
      this.controlCode = false;
      this.optimizeResume = false;
      this.state = 'keepOn';
      this.currentStyle = '';
      this.currentMarkdown = '';
      this.controlCodeText = '显示代码';
      this.makeResume();
    },
    makeResume: async function () {
      await this.graduallyShowStyle(0)
      await this.graduallyShowResume()
      await this.graduallyShowStyle(1)
      await this.showHtml()
      await this.graduallyShowStyle(2)
      await this.showControlCode()
      await this.immediatelyCode()
      await this.graduallyShowStyle(3)
      this.optimizeResume = false;
      this.state = 'over';
    },
    graduallyShowStyle(n) {
      return new Promise((resolve, reject) => {
          const showStyle = ()=> {
          const style = this.fullStyle[n];
          if(!style) {
            return;
          }
          const length = this.fullStyle.filter((ele, index) => index <= n).map( item => item.length ).reduce((acc, cur) => acc + cur, 0);
          const prefixLength = length - style.length;
          if(this.currentStyle.length < length) {
            let len = this.currentStyle.length - prefixLength;
            this.currentStyle += style.substring(len, len + 1) || ' ';
            if(style.substring(len - 1, len) === '\n' && this.$refs.styleEditor) {
              this.$nextTick(()=> {
                this.$refs.styleEditor.dragScrollBar();
              })
            }
            this.timer = setTimeout(showStyle, this.interval);
          } else {
            resolve();
          }
        };
         showStyle();
      })
    },
    graduallyShowResume() {
      return Promise.resolve({
        then: (resolve, reject) => {
          const length = this.fullMarkdown.length;
          const showResume = () => {
            if(this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1);
              const lastLetter = this.currentMarkdown[this.currentMarkdown.length - 1];
              const prevLetter = this.currentMarkdown[this.currentMarkdown.length - 2];
              if(prevLetter === '\n' && this.$refs.resumeEditor) {
                this.$nextTick( () => this.$refs.resumeEditor.dragScrollBar() )
              }
              this.timer = setTimeout(showResume, this.interval)
            } else {
              resolve();
            }
          }
          showResume()
        }
      })
    },
    showHtml() {
      return Promise.resolve({
        then: (resolve, reject) => {
          this.enableHtml = true;
          resolve();
        }
      })
    },
    showControlCode() {
      return Promise.resolve({
        then: (resolve, reject) => {
          this.controlCode = true;
          resolve();
        }
      })
    },
    immediatelyCode() {
      return Promise.resolve({
        then: (resolve, reject) => {
          this.speedUp();
          this.optimizeResume = true;
          resolve();
        }
      })
    }
    
  },
  components: {
    StyleEditor,
    ResumeEditor
  }
}
</script>

<style scoped>
#app {
  overflow: auto;
}

pre {
    font-family: 'Avenir', Helvetica, Arial, sans-serif,
    "Microsoft YaHei", "微软雅黑","MicrosoftJhengHei","华文细黑",STHeiti,MingLiu;
}

a {
    text-decoration: none;
}

aside {
  position: fixed;
  right: 0;
  top: 30%;
  z-index: 10;
}

aside ul li {
  list-style: none;
  background: #00A68F;
  margin-bottom: 10px;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
              0 3px 1px -2px rgba(0,0,0,.2),
              0 1px 5px 0 rgba(0,0,0,.12);
}

aside a {
    display: inline-block;
    width: 80px;
    height: 38px;
    line-height: 38px;
    padding-left: 10px;
    color: #FFF;
}

.styleEditor.showCode {
  transform: translate(-50%, 0);
  opacity: 1;
}

.optimizeResume {
  width: 100vw;
  margin: 10px 0;
  text-align: center;
  color: #FFF;
}

.control {
  position: fixed;
  bottom: 0.5em;  left: 0.5em;
  width: 100%;
  overflow-x: auto; 
}

.speedUp {
  display: none;
}

.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}

.stop {
  display: none;
}

.keepOn {
  display: none;
}

.controlCode {
  margin: 10px;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
