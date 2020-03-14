<template>
  <div>
    <transition name="leftbox">
      <div class="leftbox" v-show="isTrue"></div>
    </transition>

    <div class="banner">
      <div class="banner-top">
        <div class="top-left" @click="toCity">
          {{cityName}}
          <i class="iconfont icon-ai-arrow-down"></i>
        </div>
        <div class="search">
          <i class="iconfont icon-search"></i>
          泰国
        </div>
        <div class="top-right" @click="btn">
          <i class="iconfont icon-liebiao"></i>
        </div>
      </div>

      <div class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img :src="item" alt />
          </swiper-slide>

          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      swiperList: [
        "http://localhost:8080/img/banner1.png",
        "http://localhost:8080/img/banner2.png",
        "http://localhost:8080/img/banner3.png"
      ],
      isTrue: false
    };
  },
  computed:{
    ...mapState(['cityName'])
  },
  methods: {
    btn() {
      this.isTrue = !this.isTrue;
    },
    toCity(){
      this.$router.push('City');
    }
  }
};
</script>
<style scoped>
.leftbox {
  transition: all 1s;
  width: 5rem;
  height: 100%;
  background-color: #ccc;
  position: absolute;
  left: 0;
  z-index: 9999;
}

.banner {
  position: relative;
}
.swiper {
  width: 100%;
  height: 5.6rem;
}
.swiper img {
  width: 100%;
  height: 100%;
}
.banner-top {
  position: absolute;
  z-index: 999;
  width: 7rem;
  font-size: 0.377777rem;
  padding: 0.4666666rem;
}
.banner-top .top-left {
  position: absolute;
  padding: 0.1333333rem;
  color: #fff;
}
.banner-top .search {
  width: 5.2666666rem;
  position: absolute;
  right: 0;
  background-color: #fff;
  padding: 0.1333333rem;
  border-radius: 0.1rem;
  color: #ccc;
}
.banner-top .top-right {
  position: absolute;
  /* padding: 0.1333333rem; */
  right: -1.4rem;
}
.banner-top .top-right .iconfont {
  color: #fff;
  font-size: 0.75rem;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: orange;
}

.leftbox-enter {
  opacity: 0;
}
.leftbox-enter-active {
  transition: all 0.4s;
}
.leftbox-leave-active {
  transition: all 0.01s;
}
</style>