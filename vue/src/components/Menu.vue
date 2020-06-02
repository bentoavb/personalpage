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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    background-color: rgb(100, 100, 255);
    padding: 10px 0;
}

.menu-item {
    width: 80%;
    margin: 10px 5px;
    padding: 7px 15px;
    border-radius: 5px;
    color: white;
    background-color: rgb(100,100,255);
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
}
.menu-item:hover {
    cursor: pointer;
    background-color: rgba(255,255,255,0.1);
}

@media screen and (max-width: 800px) {
    .menu {
        padding: 5px 3px;
        padding-top: 0px;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .menu-item{
        margin: 3px 0;
        font-size: 0.65rem;
        flex-basis: 35%;
    }
}
</style>