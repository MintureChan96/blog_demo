<template>
    <div v-theme:column="'wide'" class="show-blog">
        <h1 style="text-align: center">博客总览</h1>
        <input type="text" v-model="search" placeholder="关键字查询">
        <div class="single-blog" v-for="blog in filterBlog">
            <router-link :to="'/detail/'+blog.id"><h2 v-rainbow="">{{blog.title}}</h2></router-link>
            <div class="blog-content">{{blog.content|snippet}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShowBlogs",
        data() {
            return {
                blogs: [],
                search: ''
            }
        }, methods: {
            getBlogList() {
                this.$http.get("http://localhost:3000/blogs").then(res => {
                    this.blogs = res.body
                })
            }
        }, created() {
            this.getBlogList()
        },
        directives: {
            rainbow: {
                bind: function (el, binding, vnode) {
                    return el.style.color = '#' + Math.random().toString(16).slice(2, 8)
                }
            },
            theme: {
                bind: (el, binding, vnode) => {
                    if (binding.value == 'wide') {
                        el.style.maxWidth = "1980px"
                    } else if (binding.value == 'narrow') {
                        el.style.maxWidth = "1260px"
                    }
                    if (binding.arg == 'column') {
                        el.style.background = 'lig'
                        el.style.padding = '20px'
                    }
                }
            }
        },
        filters: {
            snippet(val) {
                return val.slice(0, 100) + '...'
            }
        },
        computed: {
            filterBlog() {
                return this.blogs.filter(item => {
                    return item.title.match(this.search)
                })
            }
        }
    }
</script>

<style scoped>
    .show-blog * {
        margin: 0 auto;
    }

    .single-blog {
        padding: 20px;
        background: #eee;
        margin: 20px auto;
    }

    .blog-content {
        margin-top: 10px;
    }

    input[type="text"] {
        width: 100%;
        border: 3px solid #eee;
        border-radius: 8px;
        padding: 10px;
        margin-top: 20px !important;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: #aaa;
    }
</style>
