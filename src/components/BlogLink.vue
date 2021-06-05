<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>博客</router-link>
                 <router-link to="/add" exact>写博客</router-link>
                  <router-link class="report" to="/report" exact>结业报告</router-link>
            </li>
        </ul>
    </nav>    
</template>

<script>

export default({
    name: 'blog-link',
})
</script>

<style>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  
}
.report{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
    position: relative;
    left: 95%;
}
nav{
    background: gray;
    padding: 30px 0;
    margin-bottom: 45px;
}
.router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
}
</style>
