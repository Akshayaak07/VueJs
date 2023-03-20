<template>

  <div>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light"  style="margin-top:1%; background-color: #08615e;" > 
        <div class="container mx-auto  flex" >
       
            <NavbarCmp/>
            <SearchBar/>
          
        </div>
    
      </nav>
    <div>
       <router-view/>
    
    </div>
      
    </div>
  </div>
 
 
</template>

<script>
  import NavbarCmp from './components/Header/NavbarCmp.vue';
  import SearchBar from './components/Header/SearchBar.vue'; 
  export default{
  name:"App",
  components:{
    NavbarCmp,
    SearchBar,

  }
};
</script>


