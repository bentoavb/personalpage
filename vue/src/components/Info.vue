<template>
  <div class="info">
    <div class="languagebuttons">
      <span v-for="entry in languages" :key="entry.title" @click="changeLanguage(entry.language)">
              <flag :iso="entry.flag" v-bind:squared=false />
      </span>
    </div>
    <div class="name">
      <h1>Anderson Vítor Bento</h1>
    </div>

    <div class="img">
      <h2>{{$t('eng')[0]}}<br>{{$t('eng')[1]}} {{$t('eng')[2]}}</h2>
      <img src="@/assets/bento.jpeg" alt="">
    </div>
    
    <div class="email">
      {{$t('infocontact')}} bentoavb@gmail.com
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

.name {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.img img {
  border-radius: 30px;
  width: 50%;
}

.languagebuttons {
  font-size:1.0rem;
  align-self: flex-end;
}
.languagebuttons span {
  margin-left: 3px;
}

.languagebuttons span:hover {
  cursor: pointer;
}

.email {
  font-size: 1.15rem;
  text-align: center;
}

@media screen and (max-width: 800px) {
    .img-buttons h1 {
      font-size: 1.5rem;
    }
    .img {
      flex-direction: row;
    }
    .img img {
      width: 30%;
    }
    .info .img h2 {
      font-size: 1rem;
    }
    .name {
      font-size: 0.7rem;
    }
    .email {
      margin-top: 10px;
      font-size: 1rem;
    }
}
</style>
