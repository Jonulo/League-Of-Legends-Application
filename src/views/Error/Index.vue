<template>
  <div>
    <h1>Error Page</h1>
    <h2>{{ error.data.status.message }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ErrorView',
  computed: {
    ...mapState('error', {
      error: 'error'
    })
  }
}
</script>
