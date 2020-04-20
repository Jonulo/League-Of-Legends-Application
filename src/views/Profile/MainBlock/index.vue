<template>
  <div>
    <div class="grid-container">
      <div class="grid-item item-top">
          <summonerInfo :summoner="summoner"/>
      </div>
      <div class="grid-item item-left">
        <h1>Izquierda</h1>
      </div>
      <div class="grid-item item-right">
        <h1>Derecha</h1>
      </div>
    </div>
  </div>
</template>

<script>
import summonerInfo from './summonerInfo/index'

export default {
  name: 'MainBlock',
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  components: {
    summonerInfo
  },
  computed: {
    summoner () {
      const { name, profileIconId, summonerLevel } = this.profileData
      return { name, profileIconId, summonerLevel }
    }
  }
}
</script>

<style lang="stylus">
@media (max-width: 991px)
  .grid-container
    display grid
    grid-template-columns 1fr

    .grid-item
      &.item-top
        grid-column span 1

      &.item-left
        grid-column span 1

      &.item-right
        grid-column span 1

@media (min-width: 992px)
  .grid-container
    display grid
    grid-template-columns repeat(6, 1fr)
    grid-template-rows 2fr 1fr

  .grid-item
    &.item-top
      grid-row span 1
      grid-column span 6

    &.item-left
      grid-row span 2
      grid-column span 4

    &.item-right
      grid-row span 2
      grid-column span 2
</style>
