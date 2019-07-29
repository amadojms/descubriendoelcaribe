<template>
  <v-layout >
    <v-card flat>
      <v-btn absolute bottom color="primary" right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <div class="banner">
        <img class="banner" :src="tour.image" alt />
      </div>
    </v-card>
    <v-card>
      <v-flex>
        <div v-html="tour.content"></div>
      </v-flex>
    </v-card>
  </v-layout>
</template>
<script>
import firebase from "firebase";
export default {
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  },
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
    transition: "slide-y-reverse-transition",
    name: "",
    email: "",
    phone: ""
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
            vm.changeIconAndTitle(tour.val());
            var image = vm.tour.image;
            // document.body.style.backgroundImage = document.getElementById("parallax").style.backgroundImage = "url('" + image + "')";
          });
      } else {
        console.log("sin datos");
      }
    },
    sendEmail() {
      var vm = this;
      this.axios
        .post("http://localhost:3000/sendEmail", {
          name: vm.name,
          tour: vm.tour.tour,
          email: vm.email,
          phone: vm.phone
        })
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
          // this.errors.push(e);
        });
    },
    changeIconAndTitle(tour) {
      console.log(tour);
      this.$store.commit("changeMainTitleHeader", {
        MainTitleHeader: tour.tour
      });
    }
  },
  mounted() {
    var vm = this;
    vm.getTour();
    this.$store.commit("changeMainIconHeader", {
      mainIconHeader: "arrow_back"
    });
  }
};
</script>

<style>
.banner {
  width: 100%; /* or whatever is required */
  text-align: center; /* ensures the image is always in the h-middle */
  overflow: hidden; /* hide the cropped portion */
}

.banner img {
  position: relative; /* allows repositioning */
  left: 100%; /* move the whole width of the image to the right */
  margin-left: -200%; /* magic! */
}

.pad-l-10 {
  padding-left: 10px;
}

#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}

.opacity {
  opacity: 0.9;
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

.banner_for_email {
  height: 100vh;
  background-size: cover;
}

.border_radius_10 {
  border-radius: 5px;
}
</style>
