<template>
  <div>
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>
    <div v-else>
      <h1>Welcome {{ profileData.name }}!</h1>
      <h3>Level: {{ profileData.summonerLevel }}</h3>
    </div>
  </div>
</template>

<script>
import { getAccount } from '@/api/searchAccount.js'
import LoadLayout from '@/layouts/LoadLayout'
import BaseLoading from '@/components/BaseLoading.vue'
import setError from '@/mixins/setError'

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
    BaseLoading
  },
  mixins: [
    setError // ya podemos usar las funciones de nuestro archivo de forma local
  ],
  methods: {
    fecthData (region, account) {
      getAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data
          console.log(data)
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
          this.isLoading = false
        )
    }
  },
  created () {
    this.isLoading = true
    const { region, summonerName: account } = this.$route.params
    this.fecthData(region, account)
  }
}
</script>
