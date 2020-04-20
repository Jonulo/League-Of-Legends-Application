<template>
  <div>
    <section class="infoAccount">
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <v-avatar size="80">
            <img
              :src= "require(`@/assets/img/profileicon/${this.summoner.profileIconId}.png`)"
              alt="SummonerIcon"
            >
          </v-avatar>
          <h1 class="display-1 mb-2">{{ summoner.name }}</h1>
          <h4 class="subheading">Level: {{ summoner.summonerLevel }}</h4>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  name: 'summonerInfo',
  data () {
    return {
      iconImg: ''
    }
  },
  props: {
    summoner: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.infoAccount
  height auto
  background-image url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg')
  color white
  border-radius 10px
</style>
