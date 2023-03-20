<!-- <i class="icon-star-rounded exclusive"></i> -->
<template>
  <div>
  <a href="/ExploreCmp/:data" style="text-align: right; color: #79e9d2"
  ><i class="fa fa-home fa-2x" aria-hidden="true"></i>
</a>
<div class="col-sm" v-if="show != null">
  <img
    v-bind:src="show.image.original"
    style="width: 300px; height: 300px; margin-top: 3%; margin-bottom: 3%"
  />
</div>
<div style="display: flex; margin: 5%;  border:2px solid ;border-color: gray ;"  >
  
  <div style="margin-left:   5%;">
    <h2>{{show.name}}</h2>
    <span style="color: gray;">{{ show.rating.average }} Rating </span><br><br>
    <span>Premiered : {{ show.premiered }} </span><br><br>
    <span>End : {{ show.ended }}</span><br><br>
   <!-- <span :key="index" v-for="(genre,index) in show.genres">{{ genre.name }}</span>
   <span v-if="show.genres.length-1 != index">,</span>

    <span>Genre:  {{ show.genres }}</span><br><br> -->
    Genre:
    <span v-for="genre in show.genres" :key="genre"> {{ genre}}</span><br><br>
    <span>Language :  {{ show.language }}</span>
    <p   v-html="show.summary" style="margin-top:2%;" ></p>
    
    <div style="margin-top: 2%;">
       
            <a href="#" ><div class="button small round"><i class="fas fa-video fa-lg"></i> Watch Trailer</div></a>
    </div>

 
</div>
</div>
 <CastCmp :userId=id />
  
 </div>

</template>
<script>
import Axios from "axios";
import CastCmp from "./CastCmp.vue";

export default {
  name: "TvShows",
  components:{
      CastCmp
  },
  data() {
    return {
      id: this.$route.params.data,
      show: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
   
      Axios.get("https://api.tvmaze.com/shows/" + this.id)
        .then((response) => {
          this.show = response.data;
          this.loading = false;
        })
        .catch((err) => {
          this.laoding = false;
          this.err = "Somthing went wrong....";
          console.log("error", err);
        });
    },
  },
};
</script>
<style>
  label{
    font-weight:bold ;
  }
ul {
  list-style-type: none;
}
.contanier-fluid {
  background-color: rgb(13, 11, 11);
}
.viewmovies {
  margin-top: 10px;
  border-style: ridge;
  margin-bottom: 5px;
  border-block-color: #79e9d2;
 
}
.viewmovies {
  display: block;
}

</style>



<!-- <template>
 <div>
        <div style="display: flex; margin: 10%; border:2px solid ;border-color: gray ;"  >
          <img src="@/assets/images/POI.jpg" alt="" class="width:64">
          <div style="margin-left:   5%;">
            <h2>{{show.name}}</h2>
            <span style="color: gray;">8.8 <i class="icon-star-rounded exclusive"></i>(358 votes) | (2011 - 2016) | Action ,Crime ,Science-Fiction</span>
            <p style="margin-top:   2%;" >
              You are being watched. The government has a secret system, a machine that spies on you every hour of every day.
               I know because I built it. I designed the Machine to detect acts of terror but it sees everything. 
               Violent crimes involving ordinary people. People like you. Crimes the government considered "irrelevant". 
               They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. 
               Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, 
               if your number is up, we'll find you.
            </p>
            <div style="margin-top: 2%">
                <span style="margin-top: 2%;font-weight:bold">Featured Cast</span>
                <div style="display: flex;">
                    <div style="display: flex; flex-direction: column ;margin-top:2% ; margin-right:5%">
                        <span>James Caviezel </span>
    
                        <span style="color: gray;">Writer</span>
                    </div>
                    <div style="display: flex; flex-direction: column;margin-top:2% ;">
                        <span>Michael Emerson</span>
    
                        <span style="color: gray;">Jonathan Nolan</span>
    
                    </div>
                </div>
            </div>
            <div style="margin-top: 2%;">
               
                    <a href="#" ><div class="button small round"><i class="fas fa-video fa-lg"></i> Watch Trailer</div></a>
            </div>
       
            <div style="margin-top: 2%;">
              <span class="follow-toggle "><i class="fa fa-heart fa-lg"></i><span class="hide-for-small-only"> Follow</span></span>
      
            
          </div>
        </div>
      </div>
        <div>
          <CastCmp/>
        </div>
     
        
      
    </div> 

   


</template>
<script>
import Axios from "axios";
import CastCmp from "./CastCmp.vue";

export default {
    name: "TvShows",
    data() {
        return {
            id: this.$route.params.data,
            show: {},
        };
    },
    created() {
        this.getUser();
    },
    methods: {
        getUser() {
            console.log(this.search);
            this.loading = true;
            Axios.get("https://api.tvmaze.com/shows/" + this.id)
                .then((response) => {
                this.show = response.data;
                this.loading = false;
            })
                .catch((err) => {
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

    components: { CastCmp }
};
</script>
<style>
  label{
    font-weight:bold ;
  }
ul {
  list-style-type: none;
}
.contanier-fluid {
  background-color: rgb(13, 11, 11);
}
.viewmovies {
  margin-top: 10px;
  border-style: ridge;
  margin-bottom: 5px;
  border-block-color: #79e9d2;
 
}
.viewmovies {
  display: block;
}

</style> -->