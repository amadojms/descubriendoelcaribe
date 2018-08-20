<style>
</style>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app >
      <v-list dense>
        <v-list-tile v-for="(tab, index) in tabs" :key="index" :to="tab.url">
          <v-list-tile-action>
            <v-icon>{{tab.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{tab.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <template>
      <div>
        <v-toolbar color="primary" dense dark flat tabs app fixed>
          <v-toolbar-side-icon class="hidden-lg-only hidden-md-only" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title v-text="title"></v-toolbar-title>
          <!-- <div v-text="title"></div> -->
          <v-spacer></v-spacer>

          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="tab in tabs" :key="tab.url" flat :to="tab.url">
              <div class="font-weight-thin">{{tab.title}}</div>
              <v-icon right dark>{{tab.icon}}</v-icon>
              </v-btn>
            <!-- <router-link  v-for="tab in tabs" :key="tab.url" class="no_link" :to="tab.url" ><v-btn flat>{{ tab.title }}</v-btn></router-link> -->
            <!-- <v-tabs v-model="active" color="white" dark slider-color="blue">
            <v-tab  v-for="tab in tabs" :key="tab.url" ripple @click="tab.url = tab.url">
              <router-link class="no_link" :to="tab.url" >{{ tab.title }}</router-link>
            </v-tab>
          </v-tabs> -->

          </v-toolbar-items>
        </v-toolbar>
      </div>
    </template>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="info">
        <strong class="subheading">Mantente conectado con nuestras redes sociales!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>{{title}}</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      clipped: false,
      drawer: false,
      fixed: false,
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ],
      tabs: [
        {
          url: "/",
          title: "Tours",
          icon: "directions_bus"
        },
        {
          url: "/hotels",
          title: "Hotels",
          icon: "domain"
        },
        {
          url: "/contacto",
          title: "Contacto",
          icon: "person"
        },
        // {
        //   url: "/admin",
        //   title: "Config",
        //   icon: "settings"
        // },
        // {
        //   url: "/login",
        //   title: "Login",
        //   icon: "account_circle"
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Descubriendo el caribe"
    };
  },
  name: "App",
  methods: {}
};
</script>