<template>
  <div class="menu">
      <div class="menu-item" @click="navigate('/')"><i class="far fa-user"></i> {{$t('home')}}</div>
      <div class="menu-item" @click="navigate('/education')"><i class="fas fa-university"></i> {{$t('education')}}</div>
      <div class="menu-item" @click="navigate('/publications')"><i class="fas fa-book-open"></i> {{$t('publication')}}</div>
      <div class="menu-item" @click="navigate('/projects')"><i class="fas fa-server"></i> {{$t('projectsTitle')}}</div>
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
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    padding-top: 10px;
    padding-left: 10px;
}

.menu-item {
    margin: 10px;
    padding: 7px 15px;
    border-radius: 5px;
    color: white;
    background-color: rgb(100,100,255);
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    display: flex;
    justify-content: space-between;
}
.menu-item:hover {
    cursor: pointer;
    background-color: rgba(0,0,0,0.3);
}
.menu-item i {
    margin-right: 30px;
}

@media screen and (max-width: 800px) {
    .menu {
        padding: 5px 3px;
        margin-top: 25px;
        padding-top: 0px;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .menu-item{
        margin: 5px 0;
        font-size: 0.65rem;
        flex-basis: 35%;
    }
    .menu-item i {
        margin-right: 5px;
    }
}
</style>