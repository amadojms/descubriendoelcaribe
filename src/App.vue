<style>
</style>
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile v-for="(tab, index) in tabs" :key="index" :to="tab.url">
          <v-list-tile-action>
            <v-icon>{{tab.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{tab.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <template v-if="auth">
          <v-list-tile to="/admin">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Config</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="signOut">
            <v-list-tile-action>
              <v-icon>power_settings_new</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <template>
      <div>
        <v-toolbar color="primary" dense dark flat tabs app fixed>
          <!-- <v-toolbar-side-icon class="hidden-xl-only hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
          <template v-if="mainIconHeader == 'arrow_back'">
            <v-btn icon :to="urlToBack">
              <v-icon>{{mainIconHeader}}</v-icon>
            </v-btn>
          </template>
          <template v-else>
            <v-btn icon class="" @click.stop="drawer = !drawer">
              <v-icon>{{mainIconHeader}}</v-icon>
            </v-btn>
          </template>
          <v-toolbar-title v-text="MainTitleHeader"></v-toolbar-title>
          <!-- <div v-text="title"></div> -->
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down hidden-xs-only">
            <v-btn v-for="tab in tabs" :key="tab.url" flat :to="tab.url">
              <div class="font-weight-thin">{{tab.title}}</div>
              <v-icon right dark>{{tab.icon}}</v-icon>
            </v-btn>
            <template v-if="auth">
              <v-btn flat to="/admin">
                <!-- <div class="font-weight-thin">Config</div> -->
                <v-icon dark>settings</v-icon>
              </v-btn>
              <v-btn @click="signOut" flat>
                <!-- <div class="font-weight-thin">Logout</div> -->
                <v-icon dark>power_settings_new</v-icon>
              </v-btn>
            </template>
            <v-btn flat @click="changeLang('en')">
              <img width="30" height="30" src="/static/img/united-states.png" alt="Cambia a ingles" />
              <!-- <div class="font-weight-thin">Config</div> -->
              <!-- <v-icon  dark>power_settings_new</v-icon> -->
              <!-- <v-icon right dark @click="lang('en')"><img src="static/img/mexico.png" alt="Cambia a espa�ol"></v-icon> -->
              <!-- <v-icon right dark @click="lang('es')"><img src="static/img/united_states.png" alt="Cambia a ingles"></v-icon> -->
            </v-btn>
            <v-btn flat @click="changeLang('es')">
              <img width="30" height="30" src="/static/img/mexico.png" alt="Cambia a espa�ol" />
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </template>
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>
    <v-footer v-if="false" dark height="auto">
      <div class="fb-customerchat" page_id="<PAGE_ID>"></div>
      <v-card class="flex" flat tile>
        <v-card-title class="info">
          <strong class="subheading">Mantente conectado con nuestras redes sociales!</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-actions class="grey darken-3 justify-center">
          &copy;2019 —
          <strong>{{titleFooter}} {{lang}}</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",
  data() {
    return {
      active: 1,
      clipped: false,
      drawer: false,
      fixed: false,
      uid: "",
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
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Descubriendo el caribe",
      titleFooter: "Descubriendo el caribe",
      auth: false
    };
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    },
    mainIconHeader() {
      return this.$store.state.mainIconHeader;
    },
    MainTitleHeader() {
      return this.$store.state.MainTitleHeader;
    },
    urlToBack() {
      return this.$store.state.urlToBack;
    }
  },
  methods: {
    OnAuth() {
      var vm = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          vm.auth = true;
        } else {
          vm.auth = false;
        }
      });
    },
    changeLang(lang) {
      var vm = this;
      // if(lang == 'es'){
      //   var lang = 'en';
      // }
      this.$store.commit("changeLang", { lang: lang });
    },
    signOut() {
      var vm = this;
      firebase
        .auth()
        .signOut()
        .then(function() {
          console.log("sesion cerrada");
          localStorage.removeItem("Uid");
          vm.$router.push({ path: "/login" });
          vm.logout = true;
          vm.uid = "";
        })
        .catch(function(error) {
          vm.$swal(error);
        });
    }
  },
  mounted() {
    var vm = this;
    vm.OnAuth();
    console.log(vm.$router);
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.4s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
