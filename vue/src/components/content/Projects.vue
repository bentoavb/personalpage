<template>
  <div class="projects">
    <span>{{$t('projects')[0]}}!</span>
    <a href="https://github.com/bentoavb" target="_blank" class="link">{{$t('projects')[1]}}  <i class="fab fa-github"></i></a>
  </div>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style>
.projects {
    color: rgb(0, 0, 0);
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.projects a{
  color: rgb(0, 0, 0);
  text-decoration: none;
}

@media screen and (max-width: 800px) {
  .projects {
    font-size: 1.0rem;
    padding: 30px 5px;
  }
}
</style>