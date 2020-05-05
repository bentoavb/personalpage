<template>
  <div class="home">
    <div class="text">
      {{$t('infobiography')}}
    </div>
    
    <div class="links">
      <a href="https://www.researchgate.net/profile/Anderson_Bento2" target="_blank" class="link"><i class="fab fa-researchgate"></i> ResearchGate</a>
      <a href="https://github.com/bentoavb" target="_blank" class="link"><i class="fab fa-github"></i> GitHub</a>
      <a href="http://lattes.cnpq.br/5455772822240957" target="_blank" class="link"><i class="far fa-file-alt"></i> Curriculum Lattes</a>
    </div>
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
    padding: 0 30px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
}

.home .text {
  text-align: justify;
}

.links {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.links .link {
  color: black;
  -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.0rem;
}

.links .link:hover {
  background-color: rgba(0, 0, 0,0.1);
}


@media screen and (max-width: 800px) {
  .home {
    padding: 10px;
  }
  .home .text{
    margin: 15px 0;
    font-size: 1rem;
  }
  .links {
    flex-wrap: wrap;
  }
  .links .link {
    font-size: 0.7rem;
    margin-bottom: 10px;
  }
}

</style>