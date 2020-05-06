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
    background-color: rgb(100, 100, 255);
    padding: 10px 0;
}

.menu-item {
    padding: 7px 15px;
    border-radius: 1px;
    color: rgb(100,100,255);
    background-color: white;
}
.menu-item:hover {
    cursor: pointer;
    background-color: rgba(255,255,255,0.9);
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