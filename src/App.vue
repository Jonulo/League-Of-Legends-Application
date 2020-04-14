<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>

    <MainLayout v-else/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import LoadLayout from './layouts/LoadLayout'
import MainLayout from './layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: 'App',
  data: function () {
    return {
    }
  },
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },
  computed: {
    // Uso: mapState(moduleName, { state })
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="stylus">
#app
  position relative
  height 100%
  // top 0
  // bottom 0
  // right 0
  // left 0
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #fff
  background-color black
  // background-image url('../src/assets/img/mainBackground.jpeg')
  // background-repeat no-repeat
  // background-size cover
  // background-position: center;
  // width 100%
    // padding-top 60px
</style>
