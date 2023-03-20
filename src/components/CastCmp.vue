<template>
    <!-- <div class="row row-cols-1 row-cols-lg-6 g-2 g-lg-3">

        <div class="col"  v-for="c in cast" :key="c">
    
          <div class="p-2 border bg-secondary" style="border:3px solid black">
    
            <img
    
              v-bind:src="c.person.image.original" class="img-circle"
    
              style="width:90%; height:75px; margin-bottom:2%;border:2px solid black">
    
             <div class="title" style="color:#fff">{{  c.person.name  }}</div>
    
            <div class="title" style="color:#fff">{{  c.character.name  }}</div>
          </div>
          </div>
    
         
    
      </div> -->
<!-- <div style=" margin: 10%; border:2px solid ;border-color: gray ;">
    <h2 style="color:gray;font-weight: bold;" >
        Cast
        
    </h2>
    <div style="display: flex; margin-left:   5%;">
        
        <div class="show" v-for="person in list.slice(0,5) " :key="person.id">
           <div class="card"  style="width: 18rem;" v-if="person.image!= null">
              
            <img :src="person.image.original" alt="image" class="card-img-top" height="200"> 
           
        <div class="auto cell" style="margin-left:   5%;margin-top: 10%;">
            <h2>James Caviezel</h2>

                    as John Reese        
        </div>
    
    </div>
    <div style="display: flex; margin-left:   5%;">
        <span class="small-4 cell img">
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/0/13.jpg" alt="John Reese">    </span>

        <div class="auto cell" style="margin-left:   5%;margin-top: 10%;">
            <h2>James Caviezel</h2>

                    as John Reese        
        </div>
    
    </div>
    <div style="display: flex; margin-left:   5%;">
        <span class="small-4 cell img">
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/0/13.jpg" alt="John Reese">    </span>

        <div class="auto cell" style="margin-left:   5%;margin-top: 10%;">
            <h2>James Caviezel</h2>

                    as John Reese        
        </div>
    
    </div>
</div>
</div>
</div> -->

<div>
        
   <!-- <div style=" margin: 10%; border:2px solid ;border-color: gray ;"> -->
    <div class="container-fluid">
        <h2 class="cat-heading" style='color:#d7dee1'>CAST</h2> 
    </div>
 
    <div class="container px-4" id='card'>
        <div class="row gx-5" >
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
        <div class="show" v-for="person in list.slice(0,6) " :key="person.person.name">
            <!-- {{person.person.name}} -->
            <div class="card"  style="width: 18rem; margin-left: 2%;" >
                <img :src="person.person.image.original" alt="image" class="card-img-top" width="200" height="200"> 
                <div style="background-color: #79e9d2;">   
                    <div class="card-body">
                       <h5 class="card-title" style="color:black ;">   {{person.person.name}}</h5>
                      
                    </div>
                    </div>
            </div>
               
         

           <!-- <div class="card"  style="width: 18rem;" v-if="person.person.image!= null">
              
            <img :src="person.image.original" alt="image" class="card-img-top" height="200"> 
           

            <div style="background-color: #79e9d2;">   
            <div class="card-body">
               <h5 class="card-title" style="color:black ;"> {{person.person.name}}</h5>
              
            </div>
            </div>
            </div>  -->
        </div>
        </div>
    </div> 
    </div>
<!-- </div> -->
</div>
 

</template>
<script>
    import Axios from 'axios';
    
    export default {
      name:'CastCmp',
         
 data() {
     return {
      
         list: [],
         loading: false,
         err: "",
     };
 },
 props: {

userId: String,

},
 created() {
     this.getShows();
 },

 methods: {
     getShows() {
       
        Axios.get(`https://api.tvmaze.com/shows/${this.userId}/cast`).then(response => {
             this.list = response.data;
             this.loading = false;
         })
            .catch(err => {
             this.laoding = false;
             this.err = "Somthing went wrong....";
             console.log("error", err);
         });
     },
     
 },
 
}

    
    </script>
    
<style scoped>

</style>