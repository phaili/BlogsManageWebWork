<template>
  <div id="app">
    <blog-link></blog-link>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogLink from './components/BlogLink'
import EditBlog from './components/EditBlog'

export default {
  name: 'App',
  components: {
    //在这里注册要使用的组件
    ShowBlogs,
    AddBlog,
    BlogLink,
    EditBlog,
  }
}
</script>

<BlogLinkstyle>

</style>
