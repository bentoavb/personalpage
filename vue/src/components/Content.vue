<template>
  <transition name="fade">
    <router-view class="content"></router-view>
  </transition> 
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.content {
  grid-area: content;
}
</style>
