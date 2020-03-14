<template>
  <div class="spike">
    <header>
      <div>
        <img src="http://localhost:8080//img/spike1.png" alt />
      </div>
      <section>
        <div class="Date">
          <span class="title">距离结束</span>
          <span class="hour">{{d}}天</span>
          <span>:</span>
          <span class="date">{{h}}</span>
          <span>:</span>
          <span class="date">{{m}}</span>
          <span>:</span>
          <span class="date">{{s}}</span>
        </div>
      </section>
    </header>
    <div class="container">
       <div class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in spikeList" :key="index">
            <img :src="item.imgUrl" alt=""> <!--http://localhost:8080/img/5c23366c3454d.jpg-->
            <div class="info">
              <div class="info-title">
                <!-- [开业特惠●小城故事]泰国清迈，塔佩门]喂鸽子-走街串巷游古城-
                契迪《泰囧》同款布帕兰寺-龙网红海南鸡饭-嘟嘟车环游古城-大塔寺-帕辛寺-清曼寺大象佛塔- 瓦落落水果街集市，邂逅清迈古城一日游 -->
                {{item.title}}
              </div>
              <div class="footer">
                <span class="price">￥{{item.price}}元</span>
                <span class="footer-right">仅剩50个</span>
              </div>
            </div>
          </swiper-slide>

          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props:['spikeList'],
  data() {
    return {
      d: "",
      h: "",
      m: "",
      s: "",
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      },
    };
  },
  created() {
    this.countTime();
  },
  methods: {
    countTime: function() {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date("2020-03-22 23:23:23");
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        if (Math.floor((leftTime / 1000 / 60 / 60) % 24) < 10) {
          this.h = "0" + Math.floor((leftTime / 1000 / 60 / 60) % 24);
        } else {
          this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        }
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);

        this.m = Math.floor((leftTime / 1000 / 60) % 60);
        this.s = Math.floor((leftTime / 1000) % 60);
      }

      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
    }
  }
};
</script>

<style scoped>
.spike {
  height: 4.377777rem;
  width: 100%;
  padding: 0.2666666rem;
}

header {
  display: flex;
  align-items: center;
  margin-bottom: .4rem;
}
header .title {
  color: #cbcbcb;
}
header span {
  margin-right: 0.1rem;
  font-size: 0.35rem;
  display: inline-block;
}
.date {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ccc;
  border-radius: 5px;
  text-align: center;
  line-height: 0.5rem;
}
header img {
  height: 0.4413333rem;
  width: 1.893333rem;
}
section {
  margin-left: 0.3rem;
}

.swiper-slide img{
  width: 3.5rem;
  height: 2.7rem;
  display: inline-block;
  margin-right: .2rem;
}
.info{
  font-size: .26rem;
  width: 5.2rem;
  height: 2.7rem;
  display: inline-block;
}
.info .info-title{
  display: flex;
  justify-content: space-between;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.info .footer{
  margin-top:1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price{
  font-weight: 600;
  font-size: .35rem;
  color: orange;
}
.footer-right{
  border:1px solid #ccc;
  background-color: orange;
  font-size: .35rem;
  border-radius: 2rem;
  display: inline-block;
  padding: .1rem; 
  
}
.swiper-container>>>.swiper-pagination{
  bottom: -20px;
}
.swiper-pagination >>> .swiper-pagination-bullet {
  background-color: orange;
}
.swiper-container {
  overflow: visible;
}
</style>