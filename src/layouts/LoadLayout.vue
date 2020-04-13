<template>
  <div class="loading-layout">
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'LoadLayout'
}
</script>

<style lang="stylus" scoped>
.loading-layout
  width 100%
  height 100vh
</style>
