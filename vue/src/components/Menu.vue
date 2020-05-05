<template>
  <div class="menu">
      <div class="menu-item" @click="navigate('/')">{{$t('home')}}</div>
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
    font-weight: bold;
}
.menu-item {
    padding: 7px 15px;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    border-radius: 5px;
    background-color: rgb(100, 100, 255);
    color: white;
}
.menu-item:hover {
    cursor: pointer;
    background-color: rgba(100,100,255,0.65);
}
@media screen and (max-width: 800px) {
    .menu {
        padding: 5px 3px;
        flex-wrap: wrap;
    }
    .menu-item{
        margin: 3px 0;
        font-size: 0.65rem;
        flex-basis: 35%;
    }
}
</style>