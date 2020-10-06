<template>
  <div id="app">
    <LanguageButtons />
    <Content />
    <Menu />
  </div>
</template>

<script>
import LanguageButtons from './components/tools/LanguageButtons';
import Content from './components/Content';
import Menu from './components/Menu';

export default {
  name: 'App',
  components: {LanguageButtons, Content, Menu}
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
  grid-template-rows: 0.1fr 1fr;
  grid-template-columns:1fr;
  grid-template-areas: 
    "menu"
    "content";
}

@media screen and (max-width: 800px) {
  #app {
    grid-template-rows: 0.1fr 1fr;
    grid-template-areas: 
      "menu"
      "content";
  }
}
</style>
