<template>
  <div>
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
          <img :src="item.imgUrl" alt />
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
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperList: [
        { id: 1, imgUrl: "http://localhost:8080/img/swiper2.png" },
        { id: 2, imgUrl: "http://localhost:8080/img/swiper2.png" }
      ]
    };
  }
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 3.2rem;
  border: 1px solid #fff;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-pagination>>>.swiper-pagination-bullet{
    background-color: orange;
}
.swiper-container >>>.swiper-pagination{
    bottom: .05333333rem;
}
</style>