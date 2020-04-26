<template>
  <div>
    <HomeTitle :game="switchGame"/>

    <MainForm/>
    <RankingTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from '@/components/Home/Title/Index'
import MainForm from '@/components/Home/summonerForm/Index'
import RankingTable from '@/components/Home/RankingTable/Index'

export default {
  name: 'lolHome',
  components: {
    HomeTitle,
    MainForm,
    RankingTable
  },
  data: function () {
    return {
      switchGame: false
    }
  }
}
</script>
