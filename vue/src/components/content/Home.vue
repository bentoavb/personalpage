<template>
  <div class="home">
    <!--
    <div class="home-container">
      <span class="home-name">
        <span>b</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
        <span>o</span>
        <span>a</span>
        <span>v</span>
        <span>b</span>
      </span >
      <span style="margin-bottom: -25px;">
        <div style="margin-top: -25px;">nderson</div>
        <div style="margin-top: -25px;">ítor</div>
        <div style="margin-top: -25px;">ento</div>
      </span>
    </div>
    -->
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
.home {
    height: 100%;
    color: rgb(100, 100, 255);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.home-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
}
.home-name {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: bold;
}

.home-name span {
  margin-bottom: -25px;
}

@media screen and (max-width: 800px) {
  .home {
    display: none;
  }
}

</style>