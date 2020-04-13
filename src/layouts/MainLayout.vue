<template>
  <div class="container">
    <HeaderBar/>
    <router-view/>
    <h2>{{ fake }}</h2>
    <!-- <div class="borrar"></div> -->
    <FooterBar/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/Footer/Index'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  },
  computed: {
    ...mapState('fakeToken', {
      fake: 'fake'
    })
  }
}
</script>

<style lang="stylus" scoped>
.borrar
  position relative
  width 100%
  height 500px
  background-color red
  margin 20px 0
</style>
