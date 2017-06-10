<template>
  <div>
    <div id="app">
      <pre>
        {{code}}
      </pre>
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
      finalCode: `
/*
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
      `,
    }
  },
  created() {
    let n = 0;
    setInterval(()=> {
      this.code = this.finalCode.substring(0, n);
      n += 1;
    }, 100) 
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
