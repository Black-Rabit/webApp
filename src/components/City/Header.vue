<template>
  <div>
    <header>
        选择城市
    <router-link class="iconfont icon-shanchu" :to="{path:'/'}"/>
    </header>
    
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
header{
    background-color: #fed101;
    text-align: center;
    height: 1.173rem;
    line-height: 1.173rem;
    color: #333;
    font-size: .4rem;
    position: relative;
}
header .iconfont {
    position: absolute;
    right: .3rem;
}
</style>