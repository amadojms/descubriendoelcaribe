<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row >
      <v-flex sm12 >
        <v-text-field
        
          id="search_tour"
          name="in_tour"
          label="Busca un hotel"
          single-line
          prepend-icon="search"
          solo
          suffix="Ingresa texto para una busqueda"
          v-model="filtro"
        ></v-text-field>
        </v-flex>
    </v-layout>
        <v-layout row wrap>
          <v-flex  v-for="hotel in filteredHotels" :key="hotel.key" xs12 sm6 md4>
            <v-card>
              <v-card-media class="white--text" height="400px" :src="hotel.image">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">{{hotel.tour}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import firebase from 'firebase'
  export default {
    data() {
      return {
        hotels: [],
        db: Object,
        filtro:""
      }
    },
    computed:{
      filteredHotels() {
        var $this = this;
        return $this.hotels.filter((item) => {
          return item.tour !== undefined ? item.tour.match($this.filtro) : []
        })
      },
    },
    methods: {
      getHotels() {
        var $this = this;
        $this.db.child("tours").orderByChild("service").equalTo("hotel").on("value", function (snapshot) {
          
          var hotels = [];
          var num = snapshot.numChildren();
          console.log(num);
          var cont = 0;
          snapshot.forEach(function (child) {
            if(child.val().image !== ""){
              var obj = child.val();
              if(obj.placeid !== undefined){
                $this.db.child("places").child(obj.placeid).on("value", function (place) {
                  
                  // if(place.val() !== null)
                  obj.place = place.val().place;
                  obj.$key = child.key;
                  hotels.push(obj);
                  cont++;
                  if (num == cont) {
                    $this.hotels = hotels;
                  }
                });
              }else{
                obj.$key = child.key;
                hotels.push(obj);
                cont++;
                if (num == cont) {
                  $this.hotels = hotels;
                }
              }
            }
                
          });
        });
      }
    },
    mounted() {
      var $this = this;
      $this.db = firebase.database().ref()
      $this.getHotels();
    },
    // name: 'Tours'
  }

</script>
