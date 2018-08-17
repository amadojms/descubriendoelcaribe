<style>
.no_link {
  text-decoration: none;
}
</style>

<template>
  <v-app>
    <template>
      <div>
        <v-toolbar color="#4785f5" flat tabs app fixed>
          <!-- <v-btn icon>
            <v-icon>menu</v-icon>
          </v-btn> -->
          <v-toolbar-title v-text="title"></v-toolbar-title>
          <!-- <div v-text="title"></div> -->
          <v-spacer></v-spacer>
          <!-- <v-tabs v-model="active" color="white" dark slider-color="blue">
            <v-tab  v-for="tab in tabs" :key="tab.url" ripple>
              <router-link class="no_link" :to="tab.url" >{{ tab.title }}</router-link>
            </v-tab>
          </v-tabs> -->
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="tab in tabs" :key="tab.url" flat><router-link class="no_link" :to="tab.url" >{{ tab.title }}</router-link></v-btn>
            <!-- <router-link  v-for="tab in tabs" :key="tab.url" class="no_link" :to="tab.url" ><v-btn flat>{{ tab.title }}</v-btn></router-link> -->

          </v-toolbar-items>
        </v-toolbar>
      </div>
    </template>
    <!-- <v-navigation-drawer
      persistent
      v-model="rightDrawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-toolbar> -->
    <v-content>
      <router-view/>
    </v-content>
    <!-- <v-footer :fixed="fixed" class="justify-center" app>
      <span>&copy; 2018 -
        <strong>{{title}}</strong>
      </span>
    </v-footer> -->
    <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="indigo">
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
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
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
  name: "App"
};
</script>