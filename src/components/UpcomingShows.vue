<template>
  <div id="example">
    <h2>
      ON AIR
    </h2>
    <Carousel-3d :controls-visible="true" :clickable="false" :height="300">
      <Slide v-for="(slide,i) in runningstatus" :key="i" :index="i">
        <figure>
          <img :src="slide.image.medium" />
          <figcaption>
            {{ slide.name }}
      
          </figcaption>
          
        </figure>
      </Slide>
    </Carousel-3d>
  </div>
  
</template>
<script>
  import Axios from "axios"
  import { Carousel3d, Slide } from "vue-carousel-3d";
  export default {
    components:{
      Carousel3d,
      Slide,
    },
    data() {
      return {
        runningstatus:[],
          shows: [],
          loading: false,
          err: "",
      };
    },
    created() {
        this.getShows();
    },
    methods: {
        getShows() {
            Axios.get("https://api.tvmaze.com/shows").then(response => {
                this.shows = response.data;
               this.runningstatus= this.shows.filter(show=>show.status=="Running");
                this.loading = false;
            }).catch(err => {
                this.laoding = false;
                this.err = "Somthing went wrong....";
                console.log("error", err);
            });
        },
    },

  }
</script>
<style>
  .carousel-3d-container figure {
  margin:0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

</style>