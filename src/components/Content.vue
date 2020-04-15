<template>
  <div class="content-container">
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style>
.content-container {
  grid-area: content;
  padding: 10px;
  padding-top: 0;
}
.content {
  -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
}
</style>
