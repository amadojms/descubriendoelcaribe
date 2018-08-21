<template>
  <v-layout id="parallax" justify-center style="padding-top:50px">
      <v-flex xs12 sm6 md6>
        <v-card class="opacity elevation-9">
          <v-toolbar >
            <v-toolbar-title>{{tour.tour}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              dark
              small
              absolute
              bottom
              right
              fab
              @click="dialog = true"
            >
              <v-icon>email</v-icon>
            </v-btn>
                      
          </v-toolbar>
          <!-- <v-card-text style="height: 236px;" class="grey lighten-5"></v-card-text> -->
          <v-card-text style="padding-top:25px; position: relative">
            {{tour.description}}
          </v-card-text>
        </v-card>
      </v-flex>

    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Email</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Enviar correo</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Auto-add widgets</v-list-tile-title>
              <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    drawer: null,
    tour: {},
    show: false,
    dialog: false, //dialog
    notifications: false,
    sound: true,
    widgets: false,
    direction: "top", //buton float
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: true,
    right: false,
    bottom: false,
    left: false,
    transition: "slide-y-reverse-transition"
  }),
  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  },
  methods: {
    getTour() {
      var vm = this;
      var idtour = this.$route.params.id;
      if (idtour !== "" || idtour !== undefined) {
        firebase
          .database()
          .ref("tours")
          .child(idtour)
          .once("value", function(tour) {
            vm.tour = tour.val();
            var image = vm.tour.image;
            document.body.style.backgroundImage = 
            document.getElementById("parallax").style.backgroundImage = "url('"+image+"')";
          });
      } else {
        console.log("sin datos");
      }
    },
    sendMail() {
      var vm = this;
      console.log("enviando correo");
      vm.dialog = true;
      this.axios.get('/sendMail').then((response) => {
        console.log(response.data)
      })
    }
  },
  mounted() {
    var vm = this;
    vm.getTour();
  }
};
</script>

<style>
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}

.opacity{
  opacity: .8;
}
#parallax {
  /* The image used */

  /* Set a specific height */
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
