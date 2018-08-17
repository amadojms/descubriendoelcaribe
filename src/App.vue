<style>
.no_link {
  text-decoration: none;
}
</style>

<template>
  <v-app>
    <template>
      <div>
        <v-toolbar color="primary" dense dark flat tabs app fixed>
          <!-- <v-btn icon>
            <v-icon>menu</v-icon>
          </v-btn> -->
          <v-toolbar-title v-text="title"></v-toolbar-title>
          <!-- <div v-text="title"></div> -->
          <v-spacer></v-spacer>

          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="tab in tabs" :key="tab.url" flat :to="tab.url">{{tab.title}}</v-btn>
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
      drawer: true,
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
          title: "Tours"
        },
        {
          url: "/hotels",
          title: "Hotels"
        },
        {
          url: "/contacto",
          title: "Contacto"
        },
        {
          url: "/admin",
          title: "Admin"
        },
        {
          url: "/login",
          title: "Login"
        }
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