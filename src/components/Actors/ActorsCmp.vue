

  <template>
    <div>
        
   
        <div class="container-fluid">
            <h2 class="cat-heading" style='color:#d7dee1'>POPULAR ACTORS</h2> 
        </div>
        <div class="container px-4" id='card'>
            <div class="row gx-5" >
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
            <div class="show" v-for="people in list.slice(10,30) " :key="people.id">
               <div class="card"  style="width: 18rem;" v-if="people.image!= null" @click="this.$router.push({ name: 'ActorDetails' ,params: {id: people.id}})">
                  
                <img :src="people.image.original" alt="image" class="card-img-top" height="200"> 
               
 
                <div style="background-color: #79e9d2;">   
                <div class="card-body">
                   <h5 class="card-title" style="color:black ;"> {{people.name}}</h5>
                   <!-- <a class="btn btn-primary" @click='info(people.id)' >More Information</a> -->
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
      name:'ActorsCmp',
       data()
      {
        return {
           list:[]
        }
      }, 
    
     
      mounted(){
     this.shows();
      },
//       computed: { 
// Status(){
//  return this.showst.filter(show=>show.status=="Running")
//  }
//  }, 
  
       
      
      methods:{
       
      shows()
      {
         Axios.get('https://api.tvmaze.com/people').then(response => {
            console.log("RESPONSE",response.data);
            this.list=response.data;
               }).catch(err => {
                   console.log("ERROR",err);
               });
          },
          info(id){
             console.log(this.$router);
             this.$router.push({name:"ActorDetails" , params: {data:id}})
            }
        
      }
      }
    
    
    
    </script>
    
    <style>
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