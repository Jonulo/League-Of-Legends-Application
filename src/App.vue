<template>
  <v-app>
    <MainLayout/>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import MainLayout from './layouts/MainLayout'

export default {
  name: 'App',
  data: function () {
    return {
    }
  },
  components: {
    MainLayout
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
  color black
  background-color #fff
  // background-image url('../src/assets/img/mainBackground.jpeg')
  // background-repeat no-repeat
  // background-size cover
  // background-position: center;
  // width 100%
    // padding-top 60px
</style>
