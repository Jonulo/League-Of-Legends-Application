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
      <v-toolbar-title>League of Legends</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </div>
</template>

<script>
// import FooterBar from '@/components/Footer/Index'

export default {
  name: 'MainLayout',
  // components: {
  //   FooterBar,
  // },
  data: () => ({
    drawer: null,
    icons: [],
    mobileNavigator: true,
    game: ''
  }),
  created () {
    this.$vuetify.theme.dark = false
    // this.switchGame() fix this!!
    this.mainUrl('')
  },
  methods: {
    mainUrl: function (url) {
      if (url === 'tft') {
        this.icons = [
          {
            classes: ['fas', 'home'],
            title: 'Hometft',
            path: '/tft'
          },
          {
            classes: ['fas', 'home'],
            title: 'Profile',
            path: '/profile/:region/:summonerName'
          },
          {
            classes: ['fas', 'users'],
            title: 'Rankingstft',
            path: '/error'
          },
          {
            classes: ['fas', 'users'],
            title: 'About',
            path: '/about'
          }
        ]
      } else if (url === '') {
        this.icons = [
          {
            classes: ['fas', 'home'],
            title: 'Home',
            path: '/'
          },
          {
            classes: ['fas', 'home'],
            title: 'Profile',
            path: '/profile/:region/:summonerName'
          },
          {
            classes: ['fas', 'users'],
            title: 'Rankings',
            path: '/error'
          },
          {
            classes: ['fas', 'users'],
            title: 'About',
            path: '/about'
          }
        ]
      }
    },
    switchGame () {
      const pathName = this.$route.name
      this.game = pathName.includes('tft')
      if (this.game) {
        this.mainUrl('tft')
      } else {
        this.mainUrl('')
      }
    }
  }
}
</script>
