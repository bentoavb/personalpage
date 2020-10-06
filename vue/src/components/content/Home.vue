<template>
  <div class="home-container">
    <div class="home">

      <div class="left">
        <img src="@/assets/bento.jpeg" alt="">
        
        <span>
          <h1>Anderson Bento</h1> 
          <hr style="color: white;">
          <h4>{{$t('infocontact')}} bentoavb@gmail.com</h4>
        </span>
        
        <div class="links">
          <a href="https://www.researchgate.net/profile/Anderson_Bento2" target="_blank" class="link"><i class="fab fa-researchgate"></i></a>
          <a href="https://github.com/bentoavb" target="_blank" class="link"><i class="fab fa-github"></i></a>
          <a href="http://lattes.cnpq.br/5455772822240957" target="_blank" class="link"><i class="far fa-file-alt"></i></a>
          <a href="https://twitter.com/bentoavb/" target="_blank" class="link"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/bentoavb/" target="_blank" class="link"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      
      <div class="right">
        <span>{{$t('infobiography1')}}</span>
        <span>{{$t('infobiography2')}}</span>
        <span>{{$t('infobiography3')}}</span>
        
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.home-container{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.home {
    width: 50%;
    height: 75%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "left right";
}

.left {
  color: white;
  grid-area: left;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: rgba(100, 100, 255, 1);
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
}

.right{
  grid-area: right;
  padding: 30px;
  font-size: 1.1rem;
  text-align: justify;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.right span {
  margin-top: 10px;
}

.links {
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
}

.links .link {
  text-decoration: none;
  color: white;
}

img {
  width: 60%;
  border-radius: 300px;
}


@media screen and (max-width: 800px) {
  .home {
    height: 95%;
    width: 95%;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.1fr;
    grid-template-areas: "left" "right";
  }
  .left{
    padding: 15px 0;
  }

}

</style>