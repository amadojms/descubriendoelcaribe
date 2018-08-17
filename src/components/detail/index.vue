<template>
  <v-layout id="parallax" justify-center>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-toolbar >
            <v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              left
              fab
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text style="height: 236px;" class="grey lighten-5"></v-card-text>
          <v-card-text style="height: 100px; position: relative"></v-card-text>
        </v-card>
      </v-flex>
    <!-- <v-flex xs12 sm6>
      <v-btn fab dark small color="primary">
      <v-icon dark>remove</v-icon>
    </v-btn>  
    </v-flex>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Volver</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex> -->
    <!-- <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
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
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
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
    </v-dialog> -->

    <!-- <v-flex xs12 sm12 md12>
      
      <v-card>
          <v-layout row justify-end>
            <v-flex xs1>  
              <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <v-btn
          slot="activator"
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon>account_circle</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="green"
        >
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-speed-dial>
 </v-flex>
          </v-layout>

      

        <v-card-title primary-title>



          <div>
            <h3 class="headline mb-0">{{tour.tour}}</h3>
            <div>{{tour.description}}</div>
          </div>
        </v-card-title>


<v-card-actions>
          <v-btn flat color="orange" to="/">Back</v-btn>
          <v-btn flat color="orange" @click="sendMail">Email</v-btn>
        </v-card-actions>

      </v-card> -->


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
    right: true,
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
