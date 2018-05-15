<template>
  <div id="app">
    <div class="app">
      <div class="app-aside">
          <el-menu class="app-nav" :default-active="activeIndex"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b"
                   @open="handleOpen" @close="handleClose" @select="handleSelect">
            <template v-for="(item) in routes">
              <template v-if="item.children&&item.children.length">
                <el-submenu :index="item.index">
                  <template slot="title">
                    <i :class="item.class"></i>
                    <span slot="title">{{item.title}}</span>
                  </template>
                  <template v-for="(cItem) in item.children">
                    <el-menu-item :index="cItem.index">{{cItem.title}}</el-menu-item>
                  </template>
                </el-submenu>
              </template>
              <template v-else-if="item.index">
                <el-menu-item :index="item.index">
                  <i :class="item.class"></i>
                  <span slot="title">{{item.title}}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
      </div>
      <div class="app-main">
          <div class="app-menu">
            <el-menu :default-active="activeIndex" mode="horizontal"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b"
                     @open="handleOpen" @close="handleClose" @select="handleSelect">
              <template v-for="(item) in routes">
                <template v-if="item.children&&item.children.length">
                  <el-submenu :index="item.index">
                    <template slot="title">
                      <i :class="item.class"></i>
                      <span slot="title">{{item.name}}</span>
                    </template>
                    <template v-for="(cItem) in item.children">
                      <el-menu-item :index="cItem.index">{{cItem.name}}</el-menu-item>
                    </template>
                  </el-submenu>
                </template>
                <template v-else-if="item.index">
                  <el-menu-item :index="item.index">
                    <i :class="item.class"></i>
                    <span slot="title">{{item.name}}</span>
                  </el-menu-item>
                </template>
              </template>
            </el-menu>
          </div>
        <div class="app-container">
            <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from './router'

export default {
  name: 'App',
  data() {
    return {
      //activeIndex: '1-1',
      routes:router.options.routes,
    };
  },
  computed: {
    activeIndex: {
      get () {
        return this.$store.state.app.activeIndex;
      }
    }
  },
  mounted () {
    this.getActiveIndex();
  },
  methods: {
    handleSelect(key) {
      this.routerSelect(key);
    },
    handleOpen(key) {
      this.routerSelect(key);

    },
    handleClose(key) {
      this.routerSelect(key);
    },
    getActiveIndex(){
      let myThis = this;
      this.routes.forEach(function (item) {
        if(item.path==myThis.$route.path){
          myThis.$store.dispatch('changeActiveIndex', item.index);
        }else if(item.children&&item.children.length){
          item.children.forEach(function (cItem) {
            if(cItem.path==myThis.$route.path){
              myThis.$store.dispatch('changeActiveIndex', cItem.index);
            }
          });
        }
      });
    },
    routerSelect(key){
      let myThis = this;
      this.$store.dispatch('changeActiveIndex', key);
      this.routes.forEach(function (item) {
          if(item.index==key){
            myThis.$router.push({
              path:item.path
            });
          }else if(item.children&&item.children.length){
            item.children.forEach(function (cItem) {
              if(cItem.index==key){
                myThis.$router.push({
                  path:cItem.path
                });
              }
            });
          }
      });
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0px;
}
.app {
  display: flex;
}
.app-nav{

}
.app-menu{
  min-width: 100%;
}
.app-aside{
  background-color: #545c64;
  border-right: solid 1px #e6e6e6;
  min-height: 100vh;
}
.el-menu{
  border: none;
}
.app-main{
  flex: 1;
}
</style>
