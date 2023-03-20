
<template>
  <div>

    <!-- <nav class="navbar navbar-expand-lg navbar-light"  style="margin-top:1%; background-color: #08615e;" >  -->
      <div class="container-fluid">
        <h2 class="cat-heading" style='color:#d7dee1'>Binge-Worthy Shows We Love</h2> 
      </div>
    <!-- </nav> -->
    <div class="container px-4" id='card'>
    <div class="row gx-5" >
    <div class="col"  v-for='show in moviesBasedOnRating.slice(17,27)' :key="show.score" style="margin-bottom:2%">       
    <div class="card" style="width: 18rem;" v-if="show.image!= null">
      <!-- <router-link to="/tvshows/data"> -->
        <img :src="show.image.medium" class="card-img-top" alt="picture">
      <!-- </router-link> -->
     
      <div style="background-color: #98c0bf;">
      <div class="card-body">
        <h5 class="card-title">{{show.name}}</h5>
        <p class="card-text">Rating-{{show.rating.average}}</p>
        <a class="btn btn-primary" @click='info(show.id)' >More Information</a>
      
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    
  </div>
</template>
<script>
  import Axios from 'axios'
// import TvShows from './TvShows.vue'
  export default {
    name: "FrontPage",
    data() {
        return {
           
            shows: [],
            loading: false,
            err: "",
        };
    },
    created() {
        this.getShows();
    },
    computed: {
       
        moviesBasedOnRating() {
            return this.shows.filter(show => show.rating.average > 8);
        },
       
    },
    methods: {
        getShows() {
           
            Axios.get("https://api.tvmaze.com/shows").then(response => {
                this.shows = response.data;
                this.loading = false;
            }).catch(err => {
                this.laoding = false;
                this.err = "Somthing went wrong....";
                console.log("error", err);
            });
        },
        info(id){
             console.log(id);
             this.$router.push({name:"TvShows" , params: {data:id}})
            }
    },
    // components: { TvShows }
}
</script>
<style  scoped>
#size{
  height: 4px;
  width: 1200px;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
}
.card .img-wrapper {
    max-width: 100%;
    height: 13em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card img {
    max-height: 100%;
}
@media (max-width: 767px) {
  .card .img-wrapper {
    height: 17em;
  }
}
#card{
  margin-top: 2%;
  margin-bottom: 2% ;
}  

</style>