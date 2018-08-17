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
        <v-flex xs12>
          <v-progress-linear
            :active="isUpdating"
            class="ma-0"
            color="green lighten-3"
            height="4"
            indeterminate
          ></v-progress-linear>
        </v-flex>
        <v-flex
          text-xs-right
          xs12
        >
          <v-menu
            bottom
            left
            transition="slide-y-transition"
          >
            <v-btn
              slot="activator"
              icon
            >
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile @click="isUpdating = true">
                <v-list-tile-action>
                  <v-icon>mdi-settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Update</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-layout
          align-start
          column
          justify-end
          pa-3
        >
          <h3 class="headline">Contacto</h3>
          <span class="grey--text text--lighten-1">{{ title }}</span>
        </v-layout>
      </v-layout>
    </v-card-media>
    <v-form>
      <v-container>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-text-field
              v-model="name"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="title"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Title"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
import axios from "axios";
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
      autoUpdate: true,
      friends: ["Sandra Adams", "Britta Holt"],
      isUpdating: false,
      name: "Midnight Crew",
      title: "The summer breeze"
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },
  methods: {
    sendEmail() {
      axios
        .post(`localhost:3000/sendEmail`, {
          tour: tour,
          emailClient: emailClient,
          message: message
        })
        .then(response => {})
        .catch(e => {
          this.errors.push(e);
        });
    },
    getMsg() {
      axios.get('http://localhost:3000/test', {
          body: this.postBody
        })
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  mounted(){
    var vm = this;
    vm.getMsg();
  }
};
</script>