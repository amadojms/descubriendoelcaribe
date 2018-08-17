<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row >
      <v-flex sm12 >
        <v-text-field
          id="search_tour"
          name="in_tour"
          label="Busca un tour"
          single-line
          prepend-icon="search"
          solo
          suffix="Ingresa texto para una busqueda"
          v-model="filter"
        ></v-text-field>
        </v-flex>
    </v-layout>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="tour in filteredTours" :key="tour.$key" md4 sm6  xs12>
        <a :href="'/detail/'+tour.$key">
         <v-card class="xs-0 pointer">
              <v-card-media class="white--text" height="400px" :src="tour.image">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">{{tour.tour}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
            </v-card>
        </a>
      </v-flex>
    </v-layout>
    </v-container>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import firebase from 'firebase'
  export default {
    data() {
      return {
        tours: [],
        db: Object,
        filter:""
      }
    },
    computed:{
      filteredTours() {
        var $this = this;
        return $this.tours.filter((item) => {
          return item.tour !== undefined ? item.tour.toLowerCase().match($this.filter.toLowerCase()) : []
        })
      }
    },
    methods: {
      getTours() {
        var $this = this;
        $this.db.child("tours").orderByChild("service").equalTo("tour").on("value", function (snapshot) {
          var tours = [];
          var num = snapshot.numChildren();
          console.log(num);
          var cont = 0;
          snapshot.forEach(function (child) {
            if(child.val().image !== ""){
              var obj = child.val();
              if(obj.placeid !== undefined){
                $this.db.child("places").child(obj.placeid).on("value", function (place) {
                  obj.place = place.val().place;
                  obj.$key = child.key;
                  tours.push(obj);
                  cont++;
                  if (num == cont) {
                    $this.tours = tours;
                    console.log($this.tours);
                  }
                });
              }else{
                obj.$key = child.key;
                tours.push(obj);
                cont++;
                if (num == cont) {
                  $this.tours = tours;
                }
              }
            }
                
          });
        });
      }
    },

    mounted() {
      var $this = this;
      $this.db = firebase.database().ref();
      $this.getTours();
    },
  }

</script>

<style>
.pointer {
  cursor: pointer;
}

a{
  text-decoration: none;
}
</style>

