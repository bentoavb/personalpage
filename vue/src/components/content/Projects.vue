<template>
  <div class="projects">
    <span>{{$t('projects')[0]}}!</span>
    <span>{{$t('projects')[1]}} 
      <a href="https://github.com/bentoavb" target="_blank" class="link"><i class="fab fa-github"></i></a>
    </span>
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
    font-size: 1.3rem;
    padding: 30px 5px;
  }
}
</style>