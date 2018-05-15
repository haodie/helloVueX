import Vue from 'vue'
import Vuex from 'vuex'
//import createLogger from 'vuex/dist/logger'
import Apple from './modules/fruit/apple/'
import Banana from './modules/fruit/banana/'
import Orange from './modules/fruit/orange/'
import Cat from './modules/animal/cat/'
import Dog from './modules/animal/dog/'
import Fox from './modules/animal/fox/'
import App from './modules/app'
Vue.use(Vuex);
/*const logger = createLogger({
  collapsed: false, // 自动展开记录的 mutation
})*/

export default new Vuex.Store({
  //plugins: [logger],
  modules: {
    apple: Apple,
    banana: Banana,
    orange: Orange,
    cat: Cat,
    dog: Dog,
    fox: Fox,
    app: App
  }
});
