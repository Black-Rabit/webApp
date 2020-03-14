<template>
  <div class="icons">
    <ul class="uls">
      <li v-for="(item,index) in iconsList" :key="index">
        
          <img :src="item.imgUrl" />
          <p>{{item.title}}</p>
        
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconsList: [
        {
          id: 1,
          imgUrl: "http://localhost:8080/img/icons1.png",
          title: "国内游"
        },
        {
          id: 2,
          imgUrl: "http://localhost:8080/img/icons2.png",
          title: "出境游"
        },
        {
          id: 3,
          imgUrl: "http://localhost:8080/img/icons3.png",
          title: "周边游"
        },
        {
          id: 4,
          imgUrl: "http://localhost:8080/img/icons4.gif",
          title: "当地玩乐"
        },
        {
          id: 5,
          imgUrl: "http://localhost:8080/img/icons5.png",
          title: "活动赛事"
        },
        {
          id: 6,
          imgUrl: "http://localhost:8080/img/icons6.png",
          title: "摄影游"
        },
        {
          id: 7,
          imgUrl: "http://localhost:8080/img/icons7.png",
          title: "亲子游"
        },
        {
          id: 8,
          imgUrl: "http://localhost:8080/img/icons8.png",
          title: "户外游"
        },
        {
          id: 9,
          imgUrl: "http://localhost:8080/img/icons9.png",
          title: "主题游"
        },
        {
          id: 10,
          imgUrl: "http://localhost:8080/img/icons10.png",
          title: "定制游"
        }
      ]
    };
  }
};
</script>
<style scoped>
.uls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0.2666666rem 0;
  border-bottom: 1px solid #ccc;
}
.uls li {
  width: 20%;
  text-align: center;
  margin-bottom: 0.2666666rem;
  cursor: pointer;
  overflow: hidden;
}
.uls li img {
  width: 1.0666666rem;
  height: 1.0666666rem;
  cursor: pointer;
}
.uls li p {
  font-size: 0.4rem;
}
</style>
