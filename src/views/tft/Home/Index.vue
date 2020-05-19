<template>
  <div>
    <HomeTitle :game="switchGame"/>
    <MainForm/>
    <RankingTable :game="switchGame"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from '@/components/Home/Title/Index'
import MainForm from '@/components/Home/summonerForm/Index'
import RankingTable from '@/components/Home/RankingTable/Index'

export default {
  name: 'tftHome',
  components: {
    HomeTitle,
    MainForm,
    RankingTable
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
