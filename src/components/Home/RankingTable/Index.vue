<template>
  <div>
    <h2 class="my-4">Best players rankings <br><small>(Challenger)</small></h2>

    <v-data-table
    loading="true"
    :headers="headers"
    :items="players"
    :items-per-page="15"
    class="elevation-1"
    :loading-text="resolveDataText"
    :show-select="false"
    >
      <template v-slot:item.pos="{ item }">
        <v-chip :color="getColor(item.leaguePoints)" dark>
          #{{ players.map((x) => { return x.summonerName }).indexOf(item.summonerName) + 1 }}
        </v-chip>
      </template>
      <template v-slot:item.summonerName="{ item }" class="text-right">
        <img src="../../../assets/img/58.png"
        alt="Summoner-image"
        width="40"
        class="d-none d-lg-flex"
        >
        <span class="ml-4">{{ item.summonerName }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { getPlayers } from '@/api/ranking.js'
// import { getAccount } from '@/api/searchAccount.js'
import { regions } from '@/utils/regions'

export default {
  props: {
    game: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    fixedHeader: true,
    height: 500,
    players: [],
    icon: null,
    resolveDataText: 'Loading data...',
    headers: [
      {
        text: 'Position',
        align: 'start',
        sortable: false,
        value: 'pos'
      },
      { text: 'Summoner Name', sortable: false, value: 'summonerName' },
      { text: 'Region', sortable: false, value: 'region' },
      { text: 'League Points', value: 'leaguePoints' }
    ]
  }),
  methods: {
    async fetchData () {
      var regionsPromises = Object.entries(regions).map(([k, v]) => getPlayers(v, this.game))
      try {
        var playersData = await Promise.all(regionsPromises)
      } catch (err) {
        this.resolveDataText = 'Error! data is not available'
        // onerror(err)
      }
      (this.game) ? this.tftData(playersData) : this.lolData(playersData)
    },
    tftData (playersData) {
      Object.entries(regions).map(([k, v], i) => {
        playersData[i].data.entries.forEach(player => {
          // getAccount(v, player.summonerId) // error
          //   .then(response => {
          //     player.icon = response.profileIconId
          //   })
          player.region = k
        })
      })
      this.players = [
        ...playersData[0].data.entries,
        ...playersData[1].data.entries,
        ...playersData[2].data.entries,
        ...playersData[3].data.entries,
        ...playersData[4].data.entries,
        ...playersData[5].data.entries,
        ...playersData[6].data.entries,
        ...playersData[7].data.entries,
        ...playersData[8].data.entries,
        ...playersData[9].data.entries,
        ...playersData[10].data.entries
      ]
      this.players.sort((a, b) => {
        if (a.leaguePoints < b.leaguePoints) {
          return 1
        }
        if (a.leaguePoints > b.leaguePoints) {
          return -1
        }
        return 0
      })
    },
    lolData (playersData) {
      Object.entries(regions).map(([k, v], i) => {
        playersData[i].data.forEach(player => {
          // getAccount(v, player.summonerId) // error
          //   .then(response => {
          //     player.icon = response.profileIconId
          //   })
          player.region = k
        })
      })
      this.players = [
        ...playersData[0].data,
        ...playersData[1].data,
        ...playersData[2].data,
        ...playersData[3].data,
        ...playersData[4].data,
        ...playersData[5].data,
        ...playersData[6].data,
        ...playersData[7].data,
        ...playersData[8].data,
        ...playersData[9].data,
        ...playersData[10].data
      ]
      this.players.sort((a, b) => {
        if (a.leaguePoints < b.leaguePoints) {
          return 1
        }
        if (a.leaguePoints > b.leaguePoints) {
          return -1
        }
        return 0
      })
    },
    getColor (points) {
      if (points > 1600) return '#D4AF37'
      else if (points > 1400) return '#C0C0C0'
      else return '#CD7F32'
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
