import Vue from "vue"
import Vuex from "vuex"
 
Vue.use(Vuex);
 
const store = new Vuex.Store({
    state:{
        count:1,
		name: 'dkr',
		sex: '男',
		from: 'china'
    },
    mutations:{
        increment(state) {state.count ++},
		decrement(state) {state.count --},	
    }
})
export default store