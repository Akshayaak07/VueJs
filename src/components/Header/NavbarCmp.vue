<template>
<div  style="display: flex;">
    <div style="margin-right: 45%;">
        <router-link to="/">
            <img src="@/assets/images/tv.png" alt="" style="  border-radius: 4px; width: 30px;">
            
        </router-link>
        
        <h2 >TvShows</h2>

        <!-- <div style="font-size: 250%;">
            <span style="color: #ff0000">T</span>
            <span style="color: #ff7f00">V</span>
            <span style="color: #ffff00">S</span>
            <span style="color: #00ff00">H</span>
            <span style="color: #00ffff">O</span>
            <span style="color: #0000ff">W</span>
            <span style="color: #8b00ff">S</span>
        </div> -->
    </div>

 
   
 
    <ul style="margin-right: 25px;"> 
         <li style="margin-left: 25px;">
            <router-link to="/ExploreCmp/Data"  style= "text-decoration: none; " >
                <h2>Explore</h2>
            </router-link>
        </li> 
        <li style="margin-left: 35px;">
            <router-link to="/ActorsCmp/:data" style="text-decoration: none;">
                <h2>Actors</h2>
            </router-link>
        </li>
        
       
    </ul> 
  
        
</div>
</template>

<script>


    export default{
        components:{
           
        }

    };

</script>

<style>
   
   router-link :hover{
    color: black;
   }
/* ul li {
    text-decoration: none;
    color: white;
    font-size: medium;
  
} */
      
</style>