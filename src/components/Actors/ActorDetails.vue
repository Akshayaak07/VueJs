  <template>
    <div>
      <a href="/ActorsCmp/:data'" style="text-align: right; color: #79e9d2"
      ><i class="fa fa-home fa-2x" aria-hidden="true"></i>
      </a>
          <div class="col-sm" v-if="people.image!=null">
            <img v-bind:src="people.image.original"  style="width: 300px; height: 300px; margin-top: 3%; margin-bottom: 3%"
            >
          </div>
          <div style="display: flex; margin: 5%;  border:2px solid ;border-color: gray ;"  >
  
            <div style="margin-left:   5%;">
         
              <h2>{{people.name}}</h2>
               <span>Gender:{{people.gender}} </span>
               <span>BirthDay:{{people.birthday}} </span>
              <span>Country:{{people.country.name}}</span>
              <span>for more :{{people.url}}</span>
             
           
            </div>
          </div>
     
      </div>
    </template>
    
    <script>
      import Axios from 'axios'; 
     export default {
       name:'ActorDetails',
       data()
       {
         return {
            id: this.$route.params.id, 
             people:{}
          
          
         }
       },
       created(){
      this.getshows();
       
              },
              
       methods:{
         
       getshows()
       {
          console.log(this.id)
            Axios.get('https://api.tvmaze.com/people/' +this.id).then(response => {
             console.log("RESPONSE",response.data); 
           
             this.people=response.data;
                }).catch(err => {
                    console.log("ERROR",err);
                });
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