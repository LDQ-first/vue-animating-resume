<template>
  <div>
    <div id="app">
      <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
      <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
    </div>
    <div class="control clearfix">
        <button @click="speedUp" class="speedUp btns" id="speedUp" v-show="state != 'stop' && state != 'skip'">
          <svg class="icon" id="icon" aria-hidden="true">
            <use xlink:href="#icon-yingyongjiasuqi"></use>
          </svg>
          加速
        </button>
        <button @click="stop" class="stop btns" id="stop" v-show="state != 'stop' && state != 'skip'">
          <svg class="icon" id="icon"  aria-hidden="true">
            <use xlink:href="#icon-tag35"></use>
          </svg>
          停止
        </button>
        <button @click="keepOn" class="keepOn btns" id="keepOn" v-show="state === 'stop'">
          <svg class="icon" id="icon" aria-hidden="true">
            <use xlink:href="#icon-rightsanjiao-copy"></use>
          </svg>
          继续
        </button>
        <button @click="skip" class="skip btns" id="skip" v-show="state != 'skip'">
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
      interval: 50,
      timer: '',
      state: 'keepOn',
      currentStyle: ``,
      fullStyle: [ `/*
* Inspired by http://strml.net/
* 大家好，我是刘德铨 
* 这是我的一份动态简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
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
  border: none;  outline: none;
  margin-right: 0.5em;
  float: left;
  background: #03A9F4;
  font-size: .25rem;  color: #EEE;
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
  padding: .5em;  margin: .5em;
  width: 48vw;  height: 90vh; 
  border: 1px solid;
  background: white;  color: #222;
  overflow: auto;
}

#icon {
   color: #FFF;
   font-size: 20px;
}

/*#stop {
  display: inline-block;left: 14em;
}*/


/* 好了，我开始写简历了 */

        `,
        `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
        `,
        `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
 /* display: inline-block;*/
 /* border-bottom: 1px solid;*/
  margin: 1em 0 .5em;
  padding: 0.1em 0.5em;
  border-left: 4px solid #FF7203;
  background: #B79DFE;
}
.resumeEditor  p {
  font-size: 18px;
  line-height: 1.7em;
}
.resumeEditor img {
   width: 50%;
}
.resumeEditor a {
  color: #108ee9;
  background: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  -webkit-transition: color .3s ease;
  transition: color .3s ease;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}

`

],
      currentMarkdown: '',
      enableHtml: false,
      fullMarkdown: `刘德铨
---
在校大三学生，正在学习前端

技能
---
* JavaScript
* Vue

求职意向
---
前端工程师

联系方式
---
* 手机：18826136763
* 邮箱：2320975287@qq.com
* 微信：18826136763

![weChat](./static/img/weChat.png)

* qq: 2320975287

![QQ](./static/img/qq.jpg)

项目
---
1. Vue版CNode
2. Vue版在线简历编辑器


链接
----
* [GitHub](https://github.com/LDQ-first)

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/LDQ-first/vue-animating-resume-1)


`

    }
  },
  created() {
    this.makeResume();
  },
  methods: {
    stop() {
      this.state = 'stop';
      clearTimeout(this.timer);
    },
    keepOn() {
      this.state = 'keepOn';
      this.makeResume();
    },
    speedUp() {
      this.interval = 0;
    },
    skip() {
      this.stop();
      this.state = 'skip';
      this.immediatelyFillCode();
      this.enableHtml = true;
      this.immediatelyFillMarkdown();
      
      /*this.$refs.styleEditor.immediatelyShowCode();
      this.$refs.resumeEditor.immediatelyShowResume();*/
    },
    immediatelyFillCode() {
      this.currentStyle = '';
      for(let style of this.fullStyle) {
        console.log(style);
        this.currentStyle += style;
      } 
    },
    immediatelyFillMarkdown() {
      this.currentMarkdown = this.fullMarkdown;
    },
    again() {
      this.state = 'again';
      this.currentStyle = '';
      this.currentMarkdown = '';
      this.makeResume();
    },
    makeResume: async function () {
      await this.graduallyShowStyle(0)
      await this.graduallyShowResume()
      await this.graduallyShowStyle(1)
      await this.showHtml()
      await this.graduallyShowStyle(2)
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
            if(style.substring(len, len + 1) === '\n' && this.$refs.styleEditor) {
              this.$nextTick(()=> {
                this.$refs.styleEditor.dragScrollBar();
              })
            }
            this.currentStyle += style.substring(len, len + 1) || ' ';
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
    
  },
  components: {
    StyleEditor,
    ResumeEditor
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  border: none;  outline: none;
  width: 5em;  height: 3em;
  cursor: pointer;
  display: none;
}

.keepOn {
  border: none;  outline: none;
  width: 5em;  height: 3em;
  cursor: pointer;
  display: none;
}

.skip {
  border: none;  outline: none;
  width: 5em;  height: 3em;
  cursor: pointer;
} 

.again {
  border: none;  outline: none;
  width: 5em;  height: 3em;
  cursor: pointer;
}
</style>
