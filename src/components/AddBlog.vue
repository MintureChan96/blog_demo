<template>
    <div class="add-blog">
        <h1 style="text-align: center;font-size: 2em">添加博客</h1>
        <h3 v-if="show">您的博客添加成功! 3秒后回到主页...</h3>
        <form v-if="!show">
            <label>博客标题:</label>
            <input type="text" v-model="form.title" required/>
            <label>博客内容:</label>
            <textarea v-model="form.content"></textarea>
            <div class="checkboxs">
                <template v-for="category in categories">
                    <label>{{category}}</label><input type="checkbox" v-model="form.categories" :value="category">
                </template>
            </div>
            <label>作者:</label>
            <select v-model="form.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            <button @click.prevent="submit">提交</button>
        </form>
        <hr style="padding: 0"/>
        <div class="showInfo">
            <h2 style="text-align: center">博客总览</h2>
            <p>博客标题:<span v-if="form.title">{{form.title}}</span></p>
            <p>博客内容:</p>
            <p style="background: #eee" v-if="form.content">{{form.content}}</p>
            <p>博客分类:</p>
            <ul>
                <li v-for="category in form.categories">
                    {{category}}
                </li>
            </ul>
            <p>作者:<span v-if="form.author">{{form.author}}</span></p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "AddBlog",
        data() {
            return {
                form: {
                    title: '',
                    content: '',
                    categories: [],
                    author: '',
                },
                categories: [],
                show: false,
                authors: ['minture', '新华社', '陈小春', '陈平安', '应采儿', '雷锋网', '东方视图']
            }
        }, methods: {
            submit() {
                this.show = !this.show
                this.$http.post("http://localhost:3000/blogs", this.form).then(res => {
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 3000)
                })
            },
            loadCategoryList() {
                this.$http.get("http://localhost:3000/categories").then(response => {
                    this.categories = response.body;
                })
            }
        },
        created() {
            this.loadCategoryList()
        }
    }
</script>

<style scoped>
    .add-blog * {
        box-sizing: border-box;
        padding: 10px;
        font-size: 16px;
    }

    .add-blog {
        margin: 20px auto;
        max-width: 800px;
        padding: 20px;
    }

    label {
        display: inline-block;
        margin: 20px 0 10px;
    }

    input[type='text'], textarea, select {
        display: block;
        width: 100%;
        padding: 8px;
        border: 2px solid #eee;
        border-radius: 8px;
        padding: 10px;
    }

    .checkboxs label {
        display: inline-block;
        margin-top: 10px;
    }

    .checkboxs input {
        display: inline-block;
        margin-right: 10px;
    }

    button {
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #fff;
        border: 0;
        padding: 14px;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
    }

    textarea {
        height: 200px;
    }

    .showInfo {
        padding: 20px 20px;
        border: 1px solid #ccc;
        margin: 30px 0px;
    }

    h2 {
        margin-top: 10px;
    }

    option {
        font-size: 16px;
        padding: 20px;
        font-weight: bold;
    }

    li {
        list-style-type: none;
        display: inline-block;
    }

    ul {
        background: #eee;
    }

    p > span {
        background: #eee;
    }
</style>
