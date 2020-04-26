<template>
  <div>
    <h1>About me</h1>
    <h3> Hi! I'm a web developer, My name is Jorge!</h3>
    <div> {{datos}}</div>
  </div>
</template>
<script>
import { get } from 'axios'

export default {
  data: function () {
    return {
      datos: null
    }
  },
  created () {
    this.prueba()
  },
  methods: {
    prueba () {
      get('http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/1.json')
        .then(response => {
          this.datos = response.data.shortBio
          console.log(response)
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
