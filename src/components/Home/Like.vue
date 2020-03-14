<template>
  <div class="like">
    <div class="like-list" v-for="(item,index) in likeList" :key="index">
      <div class="like-top">
        <div class="top-left">
          <span>{{item.title}}</span>
        </div>
        <p class="top-right">更多></p>
      </div>
      <div class="like-bottom">
        <div
          class="bottom-header"
          :style="{'background':'url('+item.imgUrl+') no-repeat center center'}"
          @click="toShowPage(item)"
        >
          <div class="header-info">
            <span>{{item.title}}</span>
            <span>${{item.price}}</span>
          </div>
        </div>

        <ul>
          <li v-for="(items,index) in item.cityList" :key="index" @click="toShowPage(item)">
            <img :src="items.imgUrl" alt />
            <p class="f11">乐游海昌海洋公园</p>
            <span>￥{{items.price}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["likeList"],
  methods:{
    toShowPage(item){//item
      this.$router.push({
        path:'/details',
        query:{
          items:item
        }
        });
    }
  }
};
</script>
<style scoped>
.like {
  margin-top: 0.7rem;
  margin-bottom: 0.72rem;
}
.like-list {
  margin-top: 0.4rem;
}
.like-top {
  display: flex;
  justify-content: space-between;
}
.top-right {
  padding-right: 0.5rem;
  color: #999;
  font-weight: 500;
  font-size: 0.3rem;
}
.top-left {
  position: relative;
  font-size: 0.4rem; /**/
}
.top-left::before {
  position: absolute;
  content: "";
  background-color: #fed101;
  width: 0.1rem;
  height: 0.5rem;
}
.top-left span {
  padding-left: 0.5rem;
  font-size: 0.5rem;
}
.like-bottom {
  padding: 0.3rem;
}

.like-bottom .bottom-header {
  /* background: url('http://localhost:8080/img/like1.jpg') no-repeat ; */
  background-size: 100%;
  width: 100%;
  height: 4.466666rem;
  position: relative;
}
.like-bottom .header-info {
  position: absolute;
  bottom: 0.26rem;
  left: 0.2rem;
  color: #fff;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
}
.like-bottom .header-info span:first-child {
  width: 5.78rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.35rem;
}
.like-bottom .header-info span:last-child {
  color: orange;
  font-weight: 700;
  font-size: 0.25rem;
  margin-left: 1rem;
}
.like-bottom ul {
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
}
.f11 {
  font-size: 50%;
}
.like-bottom ul li > span {
  color: orange;
  font-weight: 700;
  font-size: 0.25rem;
}
.like-bottom ul img {
  width: 2.96rem;
  height: 1.9584rem;
}
</style>