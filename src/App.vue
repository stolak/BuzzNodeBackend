<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="#" class="navbar-brand">Picture Gallery</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
           <a @click="newlink('/')" class="nav-link">Dashboard</a>
        </li>
        
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  

  
  methods: {
    
  newlink(link) {
        window.location.href = link
    },  
    

  }
,
  name: "app",
};
</script>
