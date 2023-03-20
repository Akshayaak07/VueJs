<template>

<div>
  <form class="d-flex" style="margin-right:50%">
    <div class="w3-container">
     <div class="w3-dropdown-hover">
       <div  @keypress.enter="onSearch">    
        <input class="form-control me-2" type="text" placeholder="Search" v-model="name" @input='getShows' style="width:100%">
       </div>
       <div class="w3-dropdown-content w3-bar-block w3-border" id="card">
         <li class="w3-bar-item w3-button" v-for='show in shows' :key="show.score" @click="movie(show.show.name)" style="color:black">
           <div v-if="show.show.image!=null" >
             <div class="card mb-3" style="max-width: 540px;">
               <div class="row g-0">
                 <div class="col-md-4">
                   <img :src="show.show.image.medium" class="img-fluid rounded-start" alt="..." style="height:70px">
                 </div>
                 <div class="col-md-8">
                   <div class="card-body">
                     <h5 class="card-title">{{show.show.name}}</h5>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </li>
       </div>
     </div>
   </div>   
 </form>
</div>
</template>

<script>
  
  import Axios from 'axios'
export default {
    name:'SearchBar',
    data(){
      return{
         name: '',
         shows:[],
      }
    }, 
    methods: {
        onSearch(){
          this.$router.push({name:"ShowInfo" , params:{data: this.name}})
        },
         
        getShows(){  
        this.loading=true;
        Axios.get("https://api.tvmaze.com/search/shows?q="+this.name).then(response => {
            this.shows = response.data;
            this.loading=false;
        }).catch(err =>{
            this.laoding=false;
            this.err='Somthing went wrong....'
            console.log('error', err)
        });
        },
        movie(showName){
         this.name=showName;
         console.log(this.name);
         this.$router.push({name:"ShowInfo" , params:{data: this.name}})
       },
    },
    
}



</script>

<style scoped>
  @media screen and (max-width: 767px) {

.card {

  width: 25%;

  height: 5%;

border: 1px solid rgba(0, 0, 0, 0.749);



}

}




.w3-container {

position:absolute;

z-index:1;

}
  
  #card{
  overflow-y:scroll;
  max-height:300px; 
  width:301px; 
  color:rgb(7, 7, 7)
}
 
 form.Search-box input[type=text] {
  padding: 10px;
  font-size: 17px;
  border-radius: 2px solid grey;
  float: left;
  width: 50;
  height: 50;
  background: #f1f1f1;
  margin-right: 3;
}

form.Search-box button {
  float: left;
  width: 50;
  height: 50;
  padding: 10px;
  /* align-self: left; */
   background: #08615e;
  color: white;
  font-size: 17px;
  border-radius: 2px solid grey;
  border-left: none;
  cursor: pointer;
}

form.Search-box button:hover {
  background: #021313;
}  
</style>