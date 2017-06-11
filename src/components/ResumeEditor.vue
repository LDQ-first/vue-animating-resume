<template>
    <div class="resumeEditor" :class="{htmlMode:enableHtml}" ref="container">
        <div v-if="enableHtml" v-html="resume"></div>
        <pre v-else>{{resume}}</pre>
    </div>
</template>

<script>
    import marked from 'marked'
    export default {
        name: 'ResumeEditor',
        props: ['markdown', 'enableHtml'],
        computed: {
            resume() {
                return this.enableHtml ? marked(this.markdown) : this.markdown;
            }
        },
        methods: {
            dragScrollBar() {
                this.$refs.container.scrollTop = 100000;
            },
            immediatelyShowResume() {
                this.$refs.container.classList.add('showResume');
            }
        }
    }
</script>

<style scoped>
    .htmlMode {
        animation: flip 2s;
    }
    @keyframes flip {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .showResume.resumeEditor{
        padding: 2em;
    }
    .showResume.resumeEditor h2{
        display: inline-block;
        border-bottom: 1px solid;
        margin: 1em 0 .5em;
    }
    .showResume.resumeEditor ul,.resumeEditor ol{
        list-style: none;
    }
    .showResume.resumeEditor ul> li::before{
        content: '•';
        margin-right: .5em;
    }
    .showResume.resumeEditor ol {
        counter-reset: section;
    }
    .showResume.resumeEditor ol li::before {
        counter-increment: section;            
        content: counters(section, ".") " ";  
        margin-right: .5em;
    }
    .showResume.resumeEditor blockquote {
        margin: 1em;
        padding: .5em;
        background: #ddd;
    }
</style>