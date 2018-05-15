<template>
  <div class="animal">
    <template>
      <router-view></router-view>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'Animal',
    data () {
      return {
        msg: 'Animal'
      }
    },
    mounted () {
      //console.log('mounted',this.$route);
    },
    watch: {
      /*'$route' (to, from) {
        // 对路由变化作出响应...
        console.log('watch-to',to);
        console.log('watch-from',from);
        console.log('watch-$route',this.$route);
      }*/
    }
  }
</script>

<style>
  .animal{
    padding: 10px;
  }
</style>
