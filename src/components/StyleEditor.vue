<template>
    <div class="styleEditor" ref="container">
        <div class="code" v-html="styleTag"></div>
        <pre v-html="highlightedCode"></pre>
    </div>
</template>

<script>
    import Prism from 'prismjs'

    export default {
        name: 'StyleEditor',
        props: ['code'],
        computed: {
            styleTag() {
                return `<style>${this.code}</style>`;
            },
            highlightedCode() {
                return Prism.highlight(this.code, Prism.languages.css);
            }
        },
        methods: {
            dragScrollBar() {
                this.$refs.container.scrollTop = 100000;
            },
            immediatelyShowCode() {
                this.$refs.container.classList.add('showCode');
            }
        }
    }
</script>


<style scoped>

</style>