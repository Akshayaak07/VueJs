<template>
 <div>

<div class="container px-4" id='card'>
<div class="row gx-5" >
<div class="col"  v-for='show in shows' :key="show.score" style="margin-bottom:2%">       
<div class="card" style="width: 18rem;" v-if="show.show.image!= null">
  <div>  
  <img :src="show.show.image.medium" class="card-img-top" alt="picture">
  <div style="background-color: #98c0bf;">
  <div class="card-body">
    <h5 class="card-title">{{show.show.name}}</h5>
    <p class="card-text">Rating-{{show.show.rating.average}}</p>
    <a class="btn btn-primary" @click='info(show.show.id)'>More Information</a>
  </div>
</div>
  </div>
</div>
</div>
</div>
</div>

</div>
</template>
<script>
import Axios from 'axios';
export default {
    name: 'ShowInfo',
    data(){
        return{
            search:this.$route.params.data,
            shows:[],
            loading: false,
            err: '',
        }
    },
    created (){
      this.getShows();
    },
    methods:{
        getShows(){
          console.log(this.search)   
        this.loading=true;
        Axios.get("https://api.tvmaze.com/search/shows?q="+this.search).then(response => {
            this.shows = response.data;
            this.loading=false;
        }).catch(err =>{
            this.laoding=false;
            this.err='Somthing went wrong....'
            console.log('error', err)
        });
        },
        info(id){
         console.log(id);
         this.$router.push({name:"TvShows" , params:{data:id}})
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