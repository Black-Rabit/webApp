<template>
  <div class="Tabs">
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in tabsList" :key="index">
          <div>
              <img :src="item.imgUrl" alt />
          <p>{{item.title}}</p>
          </div>
        </swiper-slide>

        <!-- 分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        swiperOption:{
            slidesPerView :4.5
        },
      tabsList: [
        {
          id: 1,
          imgUrl: "http://localhost:8080/img/tabs1.gif",
          title: "签证"
        },
        {
          id: 2,
          imgUrl: "http://localhost:8080/img/tabs2.png",
          title: "游侠集市"
        },
        {
          id: 3,
          imgUrl: "http://localhost:8080/img/tabs3.png",
          title: "分享会"
        },
        {
          id: 4,
          imgUrl: "http://localhost:8080/img/tabs4.gif",
          title: "别young之旅"
        },
        {
          id: 5,
          imgUrl: "http://localhost:8080/img/tabs5.gif",
          title: "瑜伽"
        },
        {
          id: 6,
          imgUrl: "http://localhost:8080/img/tabs6.png",
          title: "旅拍"
        },
        {
          id: 7,
          imgUrl: "http://localhost:8080/img/tabs7.png",
          title: "游记"
        },
        {
          id: 8,
          imgUrl: "http://localhost:8080/img/tabs8.png",
          title: "目的地"
        },
        {
          id: 9,
          imgUrl: "http://localhost:8080/img/tabs9.png",
          title: "圈子"
        },
        {
          id: 10,
          imgUrl: "http://localhost:8080/img/tabs10.png",
          title: "视频"
        }
      ]
    };
  }
};
</script>

<style scoped>

.swiper div{
   text-align: center; 
   padding: .1rem 0;
   overflow: hidden;
}
.swiper img{
    width: 1.0666666rem;
    height: 1.0666666rem;
}
.swiper p{
    font-size: .2rem;
}
</style>