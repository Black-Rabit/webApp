<template>
<div>
    <footer>
        <a href="#">
            <img src=" http://localhost:8080//img/footer1.png" alt="">
            <span>首页</span>
        </a>
        <a href="http://localhost:8080/log" @click="toLog">
            <img src=" http://localhost:8080//img/footer2.png" alt="">
            <span>订单</span>
        </a>
        <a href="#">
            <img src=" http://localhost:8080//img/footer3.png" alt="">
            <span>个人中心</span>
        </a>
        
    </footer>
</div>
</template>
<script>
import {mapState} from 'vuex';
export default{
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['isLoged'])
    },
    methods:{
        toLog(){
            this.$router.push('/log');
        }
    }
}
</script>
<style scoped>
footer{
    position: fixed;
    bottom: 0;
    z-index: 999;
    background-color: #fff;
    width: 100%;
    height: 1.4666666rem;
    display: flex;
    align-items:center;
}
footer a{
    flex: 1;
    display: flex;
    justify-items:center;
    align-items: center;
    flex-direction: column;
}
footer a img{
    width: .72rem;
    height: .72rem;
}
footer a span{
    font-size: .35rem;
    margin-top: .2rem;
}
</style>