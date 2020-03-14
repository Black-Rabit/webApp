import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海';
if(!localStorage.cityName){
  localStorage.setItem('cityName',defaultCity);
}

export default new Vuex.Store({
  state: {
    cityName:defaultCity,
    isLoged:false
  },
  mutations: {
    changeCityName(state,cName){
      state.cityName = cName;
      localStorage.setItem('cityName',cName);
    },
    changeisLoged(state){
      state.isLoged = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
