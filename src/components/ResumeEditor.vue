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
            pureResume() {
                this.$refs.container.classList.add('pureResume');
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
    /*.resumeEditor {
        min-width: 450px;
    }*/
    .resumeEditor.pureResume {
        left: 0;
        top: 0;
        transform: translateX(0);
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    
</style>