<template>
  <div>
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>

    <template v-if="profileData !== null && !isLoading"> <!-- Hasta que no obtenga la data no renderiza -->
      <MainBlock :profile-data="profileData"/>
    </template>
  </div>
</template>

<script>
import { getAccount } from '@/api/searchAccount.js'
import LoadLayout from '@/layouts/LoadLayout'
import BaseLoading from '@/components/loadings/BaseLoading.vue'
import setError from '@/mixins/setError'
import MainBlock from '@/components/Profile/index'

export default {
  name: 'ProfileView',
  data () {
    return {
      profileData: {},
      isLoading: false
    }
  },
  components: {
    LoadLayout,
    BaseLoading,
    MainBlock
  },
  mixins: [
    setError // ya podemos usar las funciones de nuestro archivo de forma local
  ],
  methods: {
    fecthData (region, account) {
      getAccount(region, account)
        .then(({ data }) => {
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          this.setApiErr(errObj) // uso del mixin guardando objeto error
          this.$router.push({ name: 'Error' })
        })
        .finally(
          setInterval(() => {
            this.isLoading = false
          }, 2000)

        )
    }
  },
  created () {
    this.isLoading = true
    const { region, summonerName } = this.$route.params
    this.fecthData(region, summonerName)
  }
}
</script>
