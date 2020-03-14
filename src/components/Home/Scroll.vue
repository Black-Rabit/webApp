<template>
  <div class="scroll">
    <div scroll-right>
      <ul>
        <li v-for="(item,index) in scrollList" :key="index">
          <img :src="imgUrl" />
          <span class="title">{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: "http://localhost:8080/img/scroll.png",
      scrollList: [
        {
          id: 1,
          title: "12港珠澳大桥怎么走？穿梭巴士预约及过关全攻略1111111"
        },
        {
          id: 2,
          title: "港珠澳大桥怎么走？穿梭巴士预约及过关全攻略1111111"
        },
        {
          id: 3,
          title: "1"
        },
        {
          id: 4,
          title: "港珠澳大桥怎么走？穿梭巴士预约及过关全攻略11111111"
        },
        {
          id: 5,
          title: "港珠澳大桥怎么走？穿梭巴士预约及过关全攻略11121111"
        },
        {
          id: 6,
          title: "旅拍"
        },
        {
          id: 7,
          title: "游记"
        },
        {
          id: 8,
          title: "目的地"
        },
        {
          id: 9,
          title: "圈子"
        },
        {
          id: 10,
          title: "视频"
        }
      ]
    };
  },
  methods:{
      animata(){
          this.scrollList.push(this.scrollList[0]);
          this.scrollList.shift();
      }
  },
  mounted(){
      setInterval(() => {
          this.animata();
      }, 5000);
  }
};
</script>
<style scoped>
.scroll{
    background-color:#FFF7DE;
    padding: .1rem 0;
}
ul {
  height: 1.3333333rem;
  width: 100%;
  overflow: hidden;
}
ul li {
    width: 9rem;
    height: .7rem;
    white-space: nowrap;   
    overflow: hidden;        
    text-overflow: ellipsis;
    transition: all .5s;
    cursor: pointer;
    margin-left: .8rem;
}
ul .title {
  font-size: 0.4rem;
  margin-left: 0.2rem;
 
}
</style>