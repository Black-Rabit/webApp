<template>
<div class="home">
    <Banner/>
    <Icons/>
    <Tabs/>
    <Scroll/>
    <Swiper/>
    <Spike :spikeList='spikeList'/>
    <Like :likeList='likeList'/>
    <Nav class="nav"/>
</div>
</template>

<script>
import Banner from './Banner'
import Icons from './Icons'
import Scroll from './Scroll'
import Tabs from './Tabs'
import Swiper from './Swiper'
import Like from './Like'
import Spike from './Spike'
import Nav from './Nav'

import {mapState} from 'vuex';
export default{
    components:{
        Banner,
        Icons,
        Tabs,
        Scroll,
        Swiper,
        Spike,
        Like,
        Nav
    },
    data(){
        return {
            likeList:[],
            spikeList:[],
            city:''
        }
    },
    computed:{
        ...mapState(['cityName'])
    },
    methods:{
        http(){
            let that = this;
            this.axios.get("http://localhost:8080/api/dataHome.json")
            .then((res)=>{
                console.log(res);
                let data = res.data.data;
                data.forEach((item)=>{
                    if(that.city == item.city){
                    that.likeList = item.likeList;
                    that.spikeList = item.spikeList;
                    }
                });
                
            });
        }
    },
    created(){
        this.http();
        this.city = this.cityName;
    },
    activated(){
        if(this.city !== this.cityName){
            this.city = this.cityName;
            this.http();
        }
    }
}
</script>
<style scoped>
.home{
    overflow: hidden;
}

</style>