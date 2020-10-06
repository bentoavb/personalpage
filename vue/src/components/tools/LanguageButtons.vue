<template>
<div class="languagebuttons">
    <span v-for="entry in languages" :key="entry.title" @click="changeLanguage(entry.language)">
        <flag :iso="entry.flag" v-bind:squared=false />
    </span>
</div>
</template>

<script>
import i18n from '@/config/language';

export default {
  name: 'LanguageButtons',
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
.languagebuttons {
  font-size:1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  align-self: flex-end;
  margin-right: 5px;
  margin-top: 5px;
}
.languagebuttons span {
  margin-left: 3px;
  border-radius: 5px;
}

.languagebuttons span:hover {
  cursor: pointer;
}

@media screen and (max-width: 800px) {
    .languagebuttons {
      font-size:1.0rem;
    }
}
</style>