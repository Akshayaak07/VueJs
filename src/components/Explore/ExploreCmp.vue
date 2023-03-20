<template>

    <div>
        <nav class="navbar navbar-expand-lg navbar-light"  style="margin-top:1%; background-color: #086360;" > 
            <ul style="margin-left: 15px;"> 
            
            <li>
                    <router-link to="/Explore/KoreanCmp/:data" style="margin-left: 35px;">
                        DRAMA
                    </router-link>
                </li>
                <li>
                    <router-link to="/Explore/ChineseCmp/:data" style="margin-left: 35px;">
                    ON-RUNNING
                    </router-link>
                </li> 
                <li>
                    <router-link to="/Explore/CompletedCmp/:data" style="margin-left: 35px;">
                    COMPLETED
                    </router-link>
                </li> 
                <li  >
                    <router-link to="/Explore/EnglishCmp/:data" style="margin-left: 35px;">
                       TALK SHOW
                    </router-link>
                </li>
               
                <li>
                    <router-link to="/Explore/TurkishCmp/:data" style="margin-left: 35px;">
                        ANIMATION
                    </router-link>
                </li>
               
            </ul> 
        </nav>

        <h1 style="text-align: center;">Explore Thousands of Shows From Around The World.... </h1>
     
            <ShowCmp/>
           
        
        
    </div> 
   

</template>

<script>
  import ShowCmp from './ShowCmp.vue';
  
    export default
    {
        components:{
            ShowCmp,
        },
    };
   

</script>

<style>
    /* @media screen and (max-width: 800px) {
  .nav {
    width: 500%; 
  }
} */
    ul{
    list-style-type: none;
    display: flex;
}
li a{
    text-decoration: none;
    color: white;
    font-size: medium;
  
}

    
</style>