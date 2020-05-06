<template>
  <div id="app">
    <Info/>
    <Content/>
    <Menu/>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Info from './components/Info.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Content, Info, Menu
  }
}
</script>

<style>
* {
    font-family: 'Alegreya Sans', sans-serif;
}
html, body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
  display: grid;
  grid-template-rows: 0.11fr 0.1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "info"
    "menu"
    "content";
}

@media screen and (max-width: 800px) {
    #app {
        grid-template-rows: 0.11fr 0.1fr 0.1fr;
    }
}
</style>
