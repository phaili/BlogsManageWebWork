<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>Blogs </h1>
      <input type="text" v-model="search" placeholder="搜索">

      <div class="a-blog" v-for="blog in filteredBlogs">

        <router-link v-bind:to=" /blog/+ blog.id">
          <h2 v-rainbow >{{blog.title | toUpperCase}}</h2> 
        </router-link>
        <router-link v-bind:to="/blog/ + blog.id">
          <!-- 表示页面中的一块与上下文不相关的独立内容 -->
            <article >
                {{blog.content | snippet}}
            </article>
        </router-link>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'show-blogs',
  data(){
    return{
        blogs:[],
        search:""
    }
  },
  created(){
    axios.get("/blogs.json")
      .then(function(res){
        return res.data
    })
    .then((data)=>{
      var arrayBlogs = [];
      for (let key in data) {
        data[key].id = key;
        arrayBlogs.push(data[key]);
      }
      this.blogs = arrayBlogs;
    })
  },

// computed 又称计算属性，computed只有在属性值发生改变时才会触发
  computed:{
    filteredBlogs:function(){
      //filter开始得到所有的博客，后得到搜索框中匹配的内容。
      return this.blogs.filter((blog)=>{
        //每一个blog去匹配搜索框中输入的内容，返回true false
        return blog.title.match(this.search)
      });
    }
  },

  filters:{
    toUpperCase(value){
      return value.toUpperCase();
    },

    "snippet":function(value){
      return value.slice(0,100) + "...";
    }
  },

  directives:{
    'rainbow':{
        //el代表当前元素, binding为调用指令时传递的参数
        bind(el,binding,vnode){
          el.style.color = '#'+ Math.random().toString(16).slice(2,8);
        }
      },
  }
}
</script>

<style>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
   
  }
  .a-blog{
    padding: 20px;
    margin: 20px, auto;
    margin-bottom: 10px;
    box-sizing: border-box;
    background: #eee ;
    border: 1px dotted #aaa;
  }
  #show-blogs a{
    color :#444;
    text-decoration: none;
  }
  /* 搜索框 */
  input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
</style>
