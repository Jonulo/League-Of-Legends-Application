<template>
  <div class="text-center">
    <div
      :class="game ? 'tftclass' : 'lolclass'"
      id="banner"
    ></div>
    <p class="lead text-muted mt-4">Enter your
      <em>
        <a href="https://eu.battle.net/support/es/article/75767"
        target="_blank"
        title="Format: YourProfile#1234"
        >
        summoner-name
        </a>
      </em>
      and select your region to see your profile!</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeTitle',
  props: {
    game: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    // Uso: mapState(moduleName, { state })
    ...mapState('fakeToken', {
      fake: 'fake'
    })
  }
}
</script>
<style lang="stylus" scoped>
#banner
  width 100%
  height 200px
  background-repeat no-repeat
  background-size cover
  background-position: center
  border-radius 10px
.tftclass
  background-image url('../../../assets/img/tftbanner.png')
.lolclass
  background-image url('../../../assets/img/lolbanner.jpg')
</style>
