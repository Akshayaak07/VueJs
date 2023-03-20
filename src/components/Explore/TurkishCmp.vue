

 <template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light"  style="margin-top:1%; background-color: #086360;" > 
    <a href="/ExploreCmp/:data'" style="text-align: right; color: #79e9d2"
      ><i class="fa fa-home fa-2x" aria-hidden="true"></i>
      </a>
      <div class="container-fluid">
        
        <h2 class="cat-heading" style='color:#d7dee1' >Animation</h2> 
      </div>
    </nav>
    <div class="container px-4" id='card'>
      <div class="row gx-5" >
      <div class="col"  v-for='show in    moviesBasedOnAnimation.slice(0,10)' :key="show.score" style="margin-bottom:2%">       
      <div class="card" style="width: 18rem;" v-if="show.image!= null">
    
          <img :src="show.image.medium" class="card-img-top" alt="picture">
        
       
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
 import Axios from "axios"
 export default {
     name: 'TurkishCmp',
   
 data() {
     return {
         search: this.$route.params.data,
         shows: [],
         loading: false,
         err: "",
     };
 },
 created() {
     this.getShows();
 },
 computed: {
       
       moviesBasedOnAnimation(){
             return this.shows.filter(show=>show.type=="Animation")
           },
       
    },

 methods: {
     getShows() {
         console.log(this.search);
         this.loading = true;
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
 
}
</script>
 <style scoped>
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