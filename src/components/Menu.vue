<template>
  <div class="menu">
      <div class="menu-item" @click="navigate('/education')">{{$t('education')}}</div>
      <div class="menu-item" @click="navigate('/publications')">{{$t('publication')}}</div>
      <div class="menu-item" @click="navigate('/projects')">{{$t('projectsTitle')}}</div>
  </div>
</template>

<script>
export default {
    name: "Menu",
    methods: {
        navigate(local){
            this.$router.push(local)
        }
    }
}
</script>

<style>
.menu{
    grid-area: menu;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.menu-item {
    padding: 3px 10px;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    border-radius: 5px;
}
.menu-item:hover {
    cursor: pointer;
    background-color: rgba(0,0,0,0.1);
}
@media screen and (max-width: 800px) {
    .menu {
        padding: 20px 0;
    }
    .menu-item{
        margin: 0 10px;
    }
}
</style>