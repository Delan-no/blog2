<template>
  <div id="app">
   
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */

}

body {
  /* background-color: #000; */
 
}

router-view {
    position: relative; 
    z-index: 1; 
    padding: 20px;
  }
</style>
