<template> 
<div id="app">

  <div id="nav">
    <router-link to="/">ToDo</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/slot">Slot</router-link>
  </div>
  <component :is='layout'>
    <router-view/>
  </component>
</div>
</template>

<script>

  export default {
    name: 'App',
    components: {
    },

    computed: {
      layout() {
        return this.$route.meta.layout;
      }
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  float: left;
  background: #d3e2ec;; 
  border: 2px solid rgb(255 255 255);
  border-radius: 10px;
  margin: 20px 15px;
  box-shadow: 5px -5px 2px 0px #e1e1e1;
  width: 5%;;
  padding: 30px;
  display: flex;
  flex-direction: column; 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
