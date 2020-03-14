<template>
  <div class="list">
    <div class="city-item">
      <p>定位/附近城市</p>
      <div>{{cityName}}</div>
    </div>
    <div class="city-item">
      <p>已开通的周边站点</p>
      <div v-for="(item,index) in cities" :key="index"
      @click="toHome(item.name)">{{item.name}}</div>
    </div>
    <div class="city-item">
      <p>热门玩乐城市</p>
      <div v-for="(item,index) in hotCities" :key="index"
      @click="toHome(item.name)">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';

export default {
  data() {
    return {
      mapCities: [],
      cities: [],
      hotCities: []
    };
  },
  computed:{
    ...mapState(['cityName']),
    
  },
  mounted() {
    let That = this;
    this.axios.get("http://localhost:8080/api/city.json").then(res => {
      let data = res.data.data;
      That.mapCities = data.mapCities;
      That.cities = data.cities;
      That.hotCities = data.hotCities;
    });
  },
  methods:{
    ...mapMutations(['changeCityName']),
    toHome(cityName){
      this.changeCityName(cityName);
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
.city-item {
  padding-left: 0.4rem;
  color: #999;
  font-size: 0.45rem;
}
.city-item p {
  padding: 0.3rem 0;
  margin-top: 0.3rem;
}
.city-item div {
  box-sizing: border-box;
  display: inline-block;
  width: 2rem;
  height: 0.82rem;
  line-height: 0.7rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  margin-right: 0.4rem;
  margin-bottom: 0.2rem;
}
</style>