<template>
  <div class="home">
    <div class="img-text">
      <div class="text">
        {{$t('infobiography')}}
      </div>
      <img src="@/assets/bento.jpeg" alt="">
    </div>

    <div class="email">
      {{$t('infocontact')}} bentoavb@gmail.com
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
    padding: 0 30px;
    padding-bottom: 5px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
}

.img-text {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
}

.img-text img {
  width: 15%;
  border-radius: 5px;
}

.img-text .text {
  text-align: justify;
  width: 50%;
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
  border-radius: 1px;
  text-decoration: none;
  font-size: 1.0rem;
  background-color: rgb(100, 100, 255);
  color: white;
}

.links .link:hover {
  background-color: rgba(100, 100, 255,0.7);
}

.email {
  text-align: center;
}


@media screen and (max-width: 800px) {
  .home {
    padding: 0 10px;
  }
  .img-text {
    margin: 10px 0;
    flex-direction: column-reverse;
  }
  .img-text img {
    width: 40%;
    margin-bottom: 15px;
  }
  .img-text .text{
    font-size: 1rem;
    width: 90%;
  }
  .email {
    font-size: 1rem;
    margin: 10px 0;
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