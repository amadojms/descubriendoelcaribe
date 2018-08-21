<template>
  <v-card
    color="blue-grey darken-1"
    dark
  >
    <v-card-media
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
    >
      <v-layout wrap>
        <!-- <v-flex xs12>
          <v-progress-linear
            :active="isUpdating"
            class="ma-0"
            color="green lighten-3"
            height="4"
            indeterminate
          ></v-progress-linear>
        </v-flex> -->
        <v-flex
          text-xs-right
          xs12
        >
        </v-flex>
        <v-layout
          align-start
          column
          justify-end
          pa-3
        >
          <h3 class="headline">Contactanos</h3>
          <span class="grey--text text--lighten-1">Para armar el mejor paquete, al mejor precio.</span>
        </v-layout>
      </v-layout>
    </v-card-media>
    <v-form>
      <v-container>
        <v-layout wrap>
          <v-flex xs12 sm12 md12>
            <v-text-field
              v-model="name"
              box
              color="blue-grey lighten-2"
              label="Nombre *"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <v-text-field
              v-model="email"
              box
              color="blue-grey lighten-2"
              label="Email *"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <v-text-field
              v-model="phone"
              box
              color="blue-grey lighten-2"
              label="Telefono (opcional)"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <div class="text-xs-right">
              <v-btn round color="primary" dark @click="sendEmail">Enviar</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
// import axios from "axios";
import { messaging } from "firebase";
export default {
  data() {
    let srcs = {
      1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
    };

    return {
      name: "",
      email: "",
      phone: "",
      // isUpdating:false
    };
  },

  // watch: {
  //   isUpdating(val) {
  //     if (val) {
  //       setTimeout(() => (this.isUpdating = false), 3000);
  //     }
  //   }
  // },
  methods: {
    sendEmail() {
      var vm = this;
      this.axios.post("http://localhost:3000/sendEmail", {
          name: vm.name,
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
    }
  },
  mounted() {
    var vm = this;
  }
};
</script>