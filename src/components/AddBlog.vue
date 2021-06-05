<template >
  <div id="add-blog">
    <h2>Add Blog</h2>
    <form v-if="!submitted">

      
      <label>博客标题</label>
      <!-- ，required属性 - 表示字段不能为空 -->
      <!--v-model: 双向绑定 -->
      <input type=" text" v-model="blog.title" required/>

      <label>博客内容</label>
      <div id="demo1"></div>
      <div id="checkboxes">
        <label> Vue.js </label><input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label> html </label><input type="checkbox" value="html" v-model="blog.categories">
        <label> CSS </label><input type="checkbox" value="CSS" v-model="blog.categories">
        <label> javascript </label><input type="checkbox" value="javascript" v-model="blog.categories">
        <label> java </label><input type="checkbox" value="java" v-model="blog.categories">
        <label> ElementUI </label><input type="checkbox" value="ElementUI" v-model="blog.categories">
      </div>
      <label>作者</label><input type=" text" v-model="blog.author" required/>
      <button v-on:click.prevent="post">添加博客</button>
    </form>

    <div v-if="submitted">
      <h3>您的博客添加成功！</h3>
    </div>

    <hr>
    
    <!-- 注意： wide需要用'' -->
    <div  id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p><p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="category in blog.categories">
          {{category}}
        </li>
      </ul>

      <p>作者：{{blog.author}}</p>
    </div>

    
  </div>
</template>

<script>
import axios from 'axios'
import wangEditor from  "wangeditor"
export default {
  name: 'blog',
  data () {
    return {
      blog:{
        title:null,
        content:'',
        categories:[],
        author:"",
        editor: null,
      },
      submitted:false
    }
  },
    mounted() {
    let editor = new wangEditor('#demo1')
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
        this.getEditorData()
    }
    editor.config.showLinkImg = false
    editor.config.uploadImgShowBase64 = false
    editor.config.uploadImgMaxSize = 5 * 1024 * 1024 
    // 创建编辑器
    editor.create()
    this.editor = editor
  },

  methods:{
    post:function(){
      if(this.blog.title==""||this.blog.content=="" || this.blog.author == "" || this.blog.categories == ""){
          alert("请输入完整信息");
      }
      else{
          axios.post("/blogs.json",this.blog)
                .then((data)=>{
                  this.submitted = true;
              });
      }
      
    },
    getEditorData() {
      // 通过代码获取编辑器内容
      this.blog.content = this.editor.txt.text()
    },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy()
    this.editor = null
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped 属性时，它的 CSS 只作用于当前组件中的元素 */
    #add-blog *{
      box-sizing: border-box;
    }
    #add-blog{
      margin: 20px auto;
      max-width: 600px;
      padding: 20px;
          background:url("/src/assets/logo.png");
    }

    label{
      display: block;
      margin: 20px 0 10px 0px;
    }
  input [type="text"]{
      display: block;  /* 声明为块元素，独占一行 */
      width: 200%;
      height: 60px;
      padding: 8px;
  }
    textarea, select{
      display: block;  /* 声明为块元素，独占一行 */
      width: 100%;
      padding: 8px;
    }
    select{
      display: block;  /* 声明为块元素，独占一行 */
      width: 50%;
      padding: 8px;
    }

    textarea{
      height: 200px;
    }

    #checkboxes label{
      display: inline-block;
      margin-top: 20px;
      padding-right: 15px;
      margin-left: 10px;
    }


    button{
      display: block;
      margin: 20px 0;
      background: skyblue;
      color: #fff;
      border: 0;
      padding: 14px;
      font-size: 18px;
      border-radius: 4px;
      position: relative;
      left:82%;
      cursor: pointer;
    }

    #preview{
      padding: 10px 20px;
      border: 1px dotted #ccc;
      margin: 30px 0;
    }

    h3{
      margin-top: 10px;
    }

    .home {
    width: 1200px;
    margin: auto;
    position: relative;
  }

  .btn {
    position: relative;
    right: 0;
    top: 0;
    padding: 5px 10px;
    cursor: pointer;
  }

</style>
