<template>
<div id = "main">
    <div id="show-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
        <p>作者：{{blog.author}}</p>
         <p>分类：
            <ul>
                <li v-for="category in blog.categories">
                    {{category}}
                </li>
            </ul>
        </p>
        <p>博客内容：</p>
        <p style="margin-bottom:40px;">{{blog.content}}</p>
       
       <router-link :to="'/edit/' + id "><button id="btn2">编辑</button></router-link>
        <button v-on:click="isDelete()" id = "btn1" >删除</button>
       
    </div>
</div>
</template>

<script>
import axios from "axios";

export default ({
    name:'show-blog',
    data(){
        return{
            //获取路由参数
            id:this.$route.params.id,
            blog:{},
        }
    },
    created(){
        axios.get('/blogs/'+ this.id +".json").then((res)=>{
            this.blog = res.data;
        })
    },
    methods:{
        deleteblog(){
            axios.delete('/blogs/'+ this.id +".json")
                .then(res=>{
                    this.$router.push({path:'/'}) 
                })
            },

        prompt(message, style, time){
            style = (style === undefined) ? 'alert-success' : style;
            time = (time === undefined) ? 1200 : time;
            $('<button>')
                .appendTo('body')
                .addClass('alert ' + style)
                .html(message)
                .show()
                .delay(time)
                .fadeOut();
        },
        isDelete(){
            var is = confirm("是否删除?");
            if(is == true){
                this.deleteblog()
                this.prompt("删除成功",'alert',1000)
            }
                
        },
    }
})
</script>

<style>
#btn1{
    position: relative;
    left: 85%;
    background-color: #8DEEEE;
    border-radius: 5px;
    height: 30px;
}
#btn2{
    border-radius: 5px;
    height: 30px;
}
#show-blog{
    max-width: 960px;
    padding: 20px;
    margin: 0 auto;
    background: #eee;
    border: 1px dotted #eee;
}
.alert {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
}

a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}
</style>
