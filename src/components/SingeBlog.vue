<template>
    <div class="singe-blog">
        <h1>博客详情</h1>
        <p>博客标题:</p>
        <p>{{blog.title}}</p>
        <p>博客内容:</p>
        <p>{{blog.content}}</p>
    </div>
</template>

<script>
    export default {
        name: "SingeBlog",
        data() {
            return {
                blog: {},
            }
        },
        methods: {
            getBlog(id) {
                this.$http.get("http://localhost:3000/blogs/" + id).then(res => {
                    this.blog = res.body
                })
            }
        },
        created() {
            this.getBlog(this.$route.params.id)
        }
    }
</script>

<style scoped>

    .singe-blog {
        max-width: 1080px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }

    h1 {
        text-align: center;
    }

    p {
        margin: 20px;
        padding: 20px;
        letter-spacing: 2px;
    }

    p:nth-child(2) {
        font-size: 20px;
        font-weight: bold;
    }

    p:nth-child(4) {
        font-size: 20px;
        font-weight: bold;
    }

    p:nth-child(3) {
        background: #aaa;
    }

    p:nth-child(5) {
        background: #aaa;
    }
</style>
