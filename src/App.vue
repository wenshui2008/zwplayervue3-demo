<template>
  <div id="appmain">
    <div id="nav">
      <router-link to="/">介绍</router-link> |
      <router-link to="/hellowold">Hello World</router-link> |
      <router-link to="/advance">Advance</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
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
  margin-top: 60px;
}

#appmain {
	
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: inline-block;
  padding: 3px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}

.page-container {
	padding: 6px;
}

.titlebar {
	font-size: 16px;
	border-bottom: 1px solid #ccc;
	padding-bottom: 6px;
}

.titlebar h1 {
    margin: 0;
	font-size: 1.5em;
}

</style>
