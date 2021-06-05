<template>
  <div class="home">
      <h1 style="text-align : center">《Web应用基础》课程结业报告</h1>
      <p class="p1">  作者：631907060117 彭海栗</p>   
      <p class="p1">  班级：曙光1901班</p>  
       <p class="p1"> 学院：信息科学与工程学院</p> 
      <h2>一.网站主题</h2>
        <p class="p2">本网站设计的主题是管理自己的博客，使用firebase实时数据库、axios、vue2版本开发的一个博客系统，可以对自己的博客进行增删改查。</p>
      <h2>二.课程设计要求</h2>
      <p class="p2">使用任何一个前端框架如Angular等进行某应用网站的开发如英雄之旅等，需要有CRUD即增删改查功能并有一定的样式，网站内放置结业报告的超链接。
        网站需部署到你喜欢的托管服务器上如github等（可参阅https://angular.io/guide/deployment#deploy-to-github-pages）。</p>
      <h2>三.设计内容</h2>
        <h4>1.增加博客</h4>
          <p class="p2">增加博客界面主要是一些input标签构成，另外调用了一个wangeditor富文本编辑器编辑博客的内容，通过axios提交增加的博客数据到firebase实时数据库。
            注意：与数据交互时要保证能够访问firebase数据库。
          </p>
          <img src="../assets/addblog.png" width="600px" style="margin-left:20%;">
        <h4>2.展示所有博客</h4>
          <p class="p2">简要显示数据库中的所有博客，并可以根据博客的标题精确搜索到博客。</p>
          <img src="../assets/showblog.png" width="600px" style="margin-left:20%;">
        <h4>3.显示博客的具体内容</h4>
          <p class="p2">点击某一个博客，可以查看博客的详细信息，并且可以编辑或者删除该博客。</p>
      <h2>四.开发过程</h2>
        <p class="p2">在我自学了vue框架，加上本学期正在学习数据库，所以我想加深自己对vue的理解，更加熟练使用html、css、javascript以及数据库技术，所以便想着开发一个博客小系统。
          我先从增加博客界面及逻辑功能，再开发ShowBlogs界面以及开始使用数据库进行增加、显示数据，最后写博客编辑的功能，完成css样式的设计，UI界面的美化。
          在开发过程中，也遇到了诸多问题，如vue的生命周期，自定义vue的过滤器、钩子函数等等解决css样式完成不了的样式，不过这些通过查询vue的官方文档后就解决了。</p>
      <h2>五.未解决问题</h2>
        <p class="p2">1.添加博客调用的是wangEdior接口，未解决上传图片及视频保存数据库后再解析出来查看的问题。</p>
        <p class="p2">2.界面没有使用css框架，界面过于简约，不够丰富。</p>
      <h2>六.总结</h2>
        <p class="p2">本次课程设计，从我刚从入门前端，到现在我更加熟练的去使用html的各种标签、css样式，同时也掌握了vue框架的一部分，熟知了vue的基本使用以及生命周期，开发小项目的流程。
          但是，在偌大的前端体系中，我也仅仅只掌握了冰山一角，还有很多的内容需要我去掌握，如jQuery库、react框架等比较重要的前端知识点。
        </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
   
    }
  },

  methods: {
  
    }
}
</script>

<style lang="css">
  .p1{
    position: relative;
    text-align: center;
  }
  .p2{
    margin-left: 25px;
  }
  h4{
   margin-left: 25px;
  }
</style>
