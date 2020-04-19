<template>
  <div class="info">
    <div>
      <div class="name-buttons">
        <h1>Anderson Vítor Bento</h1>
          <div class="languagebuttons">
            <span v-for="entry in languages" :key="entry.title" @click="changeLanguage(entry.language)">
                    <flag :iso="entry.flag" v-bind:squared=false />
            </span>
          </div>
      </div>
      <div class="picture">
        <div class="name">
          <h2>{{$t('eng')[0]}}<br>{{$t('eng')[1]}}<br>{{$t('eng')[2]}}</h2>
        </div>
        <img src="@/assets/bento.jpeg" alt="">
      </div>
    </div>
    <div class="text">
      {{$t('infobiography')}}
    </div>
    <div class="email">
      {{$t('infocontact')}} bentoavb@gmail.com
    </div>
    <div class="links">
      <a href="https://www.researchgate.net/profile/Anderson_Bento2" target="_blank" class="link"><i class="fab fa-researchgate"></i> ResearchGate</a>
      <a href="http://lattes.cnpq.br/5455772822240957" target="_blank" class="link"><i class="far fa-file-alt"></i> Curriculum Lattes</a>
      <a href="https://github.com/bentoavb" target="_blank" class="link"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </div>
</template>

<script>
import i18n from '@/config/language';

export default {
  name: 'Info',
  data() {
      return {
          languages: [
              { flag: 'br', language: 'br' },
              { flag: 'gb', language: 'en'}
          ]
      };
  },
  methods: {
      changeLanguage(locale){
          console.log(locale)
          i18n.locale = locale
      }
  }
}
</script>

<style>
.info {
  grid-area: info;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(100, 100, 255);
  padding: 15px;
  color: white;
}

.name-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.picture {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.picture img {
  border-radius: 300px;
  width: 50%;
}

.text {
  text-align: justify;
  font-size: 1.15rem;
}

.links {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.links .link {
  color: white;
  background-color: rgb(100, 100, 255);
  box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.5);
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.0rem;
}
.links .link:hover {
  background-color: rgba(255,255,255,0.1);
}

.email {
  font-size: 1.15rem;
}

.languagebuttons {
  font-size:1.0rem;
  align-self: flex-start;
}
.languagebuttons span {
  margin-left: 3px;
}

.languagebuttons span:hover {
  cursor: pointer;
}

@media screen and (max-width: 800px) {
    .name-buttons h1 {
      font-size: 1.5rem;
    }
    .picture .name h2 {
      font-size: 1.2rem;
    }
    .text {
      font-size: 1rem;
    }
    .links .link{
      margin: 25px 0;
      font-size: 0.8rem;
    }
}
</style>
