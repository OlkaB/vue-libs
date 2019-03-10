<template>
  <div id="app">
    <div id="nav">
      <router-link to="/user">Store modules II</router-link> |
      <router-link to="/basket">Store modules I</router-link> |
      <router-link to="/multiselect">multiselect</router-link> |
      <router-link to="/moment_luxon">moment_luxon</router-link> |
      <router-link to="/chart">chart</router-link> |
      <router-link to="/bulma">bulma</router-link> |
      <router-link to="/scoped_slots">scoped slots</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  box-shadow: 0 6px 15px rgba(140, 140, 140, 0.4);

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
