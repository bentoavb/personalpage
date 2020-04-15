<template>
    <div class="publication">
        <div v-for="item in $t('publicationItens')" :key="item.title" class="publication-item">
            <div class="publication-title">{{item.title}}</div>
            <div class="publication-author">{{item.author}}</div>
            <div class="publication-date-and-place">
                <span><i class="fas fa-calendar-alt"></i> {{item.year}}</span>
                <span class="place"> <i :class="item.icon"></i> {{item.place}}</span>
                <span class="doi"><a :href="item.doi" target="_blank" >doi</a></span>
            </div>
            <div class="publication-abstract">
                {{item.abstract}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Publication"
}
</script>

<style>
.publication {
    padding: 0 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
}

.publication-title {
    color: rgb(100, 100, 255);
    font-weight: bold;
    font-size: 1.2rem;
}

.publication-author {
    font-size: 1.1rem;
}


.publication-date-and-place {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.publication-date-and-place .doi{
    font-weight: bold;
     -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    border-radius: 3px;
    padding: 0 5px;
}

.publication-date-and-place .doi a {
    text-decoration: none;
    color: black;
}

.publication-date-and-place .place{
    font-weight: bold;
}

.publication-abstract {
    font-size: 0.8rem;
    text-align: justify;
}
</style>