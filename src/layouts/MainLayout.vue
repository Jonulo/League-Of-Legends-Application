<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      :bottom="mobileNavigator"
    >
    <v-row>
      <v-col cols="12" class="d-flex justify-space-around py-4 pa-0">
        <router-link to="/">
          <img src="@/assets/img/lol-icon.png"
          alt="LeagueOfLegends"
          width="30"
          @click="mainUrl('')"
          >
        </router-link>
        <router-link to="/tft">
          <img src="@/assets/img/tft-icon.png"
          alt="TeamfightTactics"
          width="30"
          @click="mainUrl('tft')"
          >
        </router-link>
      </v-col>
    </v-row>
    <v-divider></v-divider>
      <v-list>
        <v-list-item
        v-for="(icon,idx) in icons"
        :key="idx"
        :to="icon.path"
        >
          <v-list-item-icon>
            <font-awesome-icon
            :icon="icon.classes"
            class="fa-lg"/>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ icon.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{titleBar}}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => ({
    drawer: null,
    icons: [],
    mobileNavigator: true,
    game: '',
    titleBar: ''
  }),
  created () {
    this.$vuetify.theme.dark = true
    this.mainUrl('')
  },
  methods: {
    mainUrl: function (url) {
      if (url === 'tft') {
        this.titleBar = 'Team Fight Tactics'
        this.icons = [
          {
            classes: ['fas', 'home'],
            title: 'Hometft',
            path: '/tft'
          },
          {
            classes: ['fas', 'user-circle'],
            title: 'Profile',
            path: '/profile/:region/:summonerName'
          },
          {
            classes: ['fas', 'trophy'],
            title: 'Rankingstft',
            path: '/error'
          },
          {
            classes: ['fas', 'info-circle'],
            title: 'About',
            path: '/about'
          }
        ]
      } else if (url === '') {
        this.titleBar = 'League of legends'
        this.icons = [
          {
            classes: ['fas', 'home'],
            title: 'Home',
            path: '/'
          },
          {
            classes: ['fas', 'user-circle'],
            title: 'Profile',
            path: '/profile/:region/:summonerName'
          },
          {
            classes: ['fas', 'trophy'],
            title: 'Rankings',
            path: '/error'
          },
          {
            classes: ['fas', 'info-circle'],
            title: 'About',
            path: '/about'
          }
        ]
      }
    }
  }
}
</script>
