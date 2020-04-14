<template>
  <div class="home-title text-center">
    <h1 class="my-5 font-diablo">League of Legends Profile Finder</h1>
    <p class="lead text-muted">Enter your
      <em>
        <a href="https://eu.battle.net/support/es/article/75767"
        target="_blank"
        title="Format: YourProfile#1234">
        summoner-name
        </a>
      </em>
      and select your region to see your profile!</p>
    <hr class="mt-5">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeTitle',
  computed: {
    // Uso: mapState(moduleName, { state })
    ...mapState('fakeToken', {
      fake: 'fake'
    })
  }
}
</script>
