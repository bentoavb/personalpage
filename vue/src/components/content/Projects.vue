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
    height: 100%;
    color: rgb(100, 100, 255);
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.projects a{
  color: rgb(100, 100, 255);
  text-decoration: none;
}

@media screen and (max-width: 800px) {
  .projects {
    font-size: 1.0rem;
    padding: 30px 5px;
  }
}
</style>