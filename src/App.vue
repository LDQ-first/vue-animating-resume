<template>
  <div>
    <div id="app" class="styleEditor">
      <pre>{{code}}</pre>
    </div>
    <div v-html="styleCode"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      code: ``,
      finalCode: `/*
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
}
/* 代码高亮
  作为程序员，怎么能忍受代码都是一种颜色呢
*/
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

.comment       { color: #857F6B; font-style: italic; }
.selector      { color: #E69F0F; }
.selector .key { color: #64D5EA; }
.key           { color: #64D5EA; }
.value         { color: #BE84F2; }
.value.px      { color: #F92772; }

        `,

    }
  },
  created() {
    let n = 0;
    setInterval(()=> {
      this.code = this.finalCode.substring(0, n);
      n += 1;
    }, 50) 
  },
  computed: {
    styleCode() {
      return `<style>${this.code}</style>`
    }
  },
  methods: {

  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
</style>
