<template>
  <div>
    <div id="app">
      <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
      <ResumeEditor></ResumeEditor>
    </div>
  </div>
</template>

<script>
 import StyleEditor from './components/StyleEditor'
 import ResumeEditor from './components/ResumeEditor'

export default {
  name: 'app',
  data() {
    return {
      interval: 50,
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
  width: 45vw;
  height: 90vh;
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



        `,

]

    }
  },
  created() {
    this.makeResume();

  },
  methods: {
    makeResume: async function () {
      await this.graduallyShowStyle(0)

    },
    graduallyShowStyle(n) {
      return new Promise((resolve, reject) => {
          const showStyle = (()=> {
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
           /* console.log(showStyle);*/
            setTimeout(showStyle, this.interval);
          } else {
            resolve();
          }
        }).bind(this);
         showStyle();
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
