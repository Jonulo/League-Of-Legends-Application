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
  name: 'lolHome',
  components: {
    HomeTitle,
    MainForm
  },
  data: function () {
    return {
      switchGame: false
    }
  }
}
</script>
