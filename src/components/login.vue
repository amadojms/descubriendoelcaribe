<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      email: "",
      password: ""
    }),
    props: {
      source: String
    },
    methods:{
      login(){
        var $this = this;
        firebase.auth().signInWithEmailAndPassword($this.email, $this.password).then(function (firebaseUser) {
          $this.toastMsg = "Has iniciado sesion correctamente";
          // $this.$.toast.open();
          location.href = "/list-tours";
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          $this.toastMsg = "Error al iniciar sesion "+ errorMessage;
          $this.$.toast.open();
        });
      }
    }
  }
</script>