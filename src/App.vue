<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>

import AddBlog from "./components/AddBlog";
import BlogHeader from "./components/blogHeader";
import ShowBlogs from "./components/ShowBlogs";
export default {
  name: 'App',
  components: {
    ShowBlogs,
    BlogHeader,
    AddBlog
  }
}
</script>

<style>

</style>
