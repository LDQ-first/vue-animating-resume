<template>
  <div>
    <div id="app">
      {{code}}
    </div>
    <div v-html="styleCode">

    </div>
  </div>
  
  
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      code: ``,
      finalCode: `
body {
  background: red;
}
`
    }
  },
  created() {
    let n = 0;
    setInterval(()=> {
      this.code = this.finalCode.substring(0, n);
      n += 1;
    }, 10000) 
  },
  computed: {
    styleCode() {
      return `<style>${this.code}</style>`
    }
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
