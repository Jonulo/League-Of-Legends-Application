<template>
  <div>
    <v-skeleton-loader
      class=""
      max-width="100%"
      type="image"
    ></v-skeleton-loader>
    <v-row>
      <v-col>
        <v-boilerplate
            class="mb-6"
            type="image, image, image"
          ></v-boilerplate>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  components: {
    // Create a new component that
    // extends v-skeleton-loader
    VBoilerplate: {
      functional: true,

      render (h, { data, props, children }) {
        return h('v-skeleton-loader', {
          ...data,
          props: {
            boilerplate: false,
            elevation: 2,
            ...props
          }
        }, children)
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
