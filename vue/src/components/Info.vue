<template>
  <div class="info">
    <div class="languagebuttons">
      <span v-for="entry in languages" :key="entry.title" @click="changeLanguage(entry.language)">
              <flag :iso="entry.flag" v-bind:squared=false />
      </span>
    </div>
    
    <span class="name">Anderson Vítor Bento</span>
    
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
  align-items: center;
  justify-content: center;
  color: rgb(100, 100, 255);
  padding: 5px 0;
}

.name {
  font-size: 2rem;
  font-weight: bold;
}

.languagebuttons {
  font-size:1.0rem;
  position: absolute;
  top: 0;
  right: 0;
  align-self: flex-end;
  margin-right: 5px;
  margin-top: 5px;
}
.languagebuttons span {
  margin-left: 3px;
}

.languagebuttons span:hover {
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .name {
    font-size: 1.5rem;
  }
}
</style>
