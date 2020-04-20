<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="my-1"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols='12' md="4">
          <v-text-field
            v-model="form.summonerName"
            label="Summoner Name"
            solo
            required
          ></v-text-field>
        </v-col>
        <v-col cols='12' md="4">
          <v-select
            v-model="form.region"
            :items="regions"
            :rules="[v => !!v || 'Region is required']"
            label="Region"
            solo
            required
            class="align-self-start"
          ></v-select>
        </v-col>
        <v-col cols='12' md="2">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="onSubmit"
          >
            Search
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <hr>
  </v-form>
</template>

<script>
import { regions } from '@/utils/regions'

export default {
  name: 'MainForm',
  data () {
    return {
      form: {
        summonerName: '',
        region: 'eu'
      },
      valid: false
    }
  },
  computed: {
    regions () {
      return regions.map(region => ({ value: region, text: region.toUpperCase() }))
    }
  },
  methods: {
    onSubmit () {
      const { region, summonerName } = this.form
      this.$router.push({ name: 'Profile', params: { region, summonerName } })
    }
  }
}
</script>
