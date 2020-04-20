<template>
  <div>
    <HomeTitle :game="switchGame"/>

    <MainForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from '@/components/Home/Title/Index'
import MainForm from '@/components/Home/summonerForm/Index'

export default {
  name: 'tftHome',
  components: {
    HomeTitle,
    MainForm
  },
  data: function () {
    return {
      switchGame: false
    }
  },
  methods: {
    Game () {
      const pathName = this.$route.name
      this.switchGame = pathName.includes('tft')
    }
  },
  created () {
    this.Game()
  }
}
</script>
