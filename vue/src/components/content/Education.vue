<template>
    <div class="education">
        <div v-for="item in $t('educationItens')" :key="item.title" class="education-item">
            <div class="left">
                <img :src="getImgUrl(item.image)">
            </div>
            <div class="right">
                <div class="education-title">{{item.title}}</div>
                <div class="education-place">{{item.place}}</div>
                <div class="education-date-and-city"><span><i class="fas fa-calendar-alt"></i> {{item.date}}</span><span><i class="fas fa-map-marked-alt"></i> {{item.city}}</span></div>
                <div class="education-others">
                    <ul v-for="e in item.others" :key="e">
                        <li>{{e.title}}</li>
                        <ul v-if="e.others">
                            <li v-for="j in e.others" :key="j">
                                {{j}}
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Education",
    methods: {
      getImgUrl(pic) {
          return require('@/assets/'+pic)
      }
    }
}
</script>

<style scoped>
.education {
    padding: 1px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.education-item{
    width: 80%;
    padding: 10px;
    border-radius: 3px;
    display: flex;
}

.left{
    margin-right: 10px;
}

.left img {
    width: 75px;
}

.education-title {
    color: rgb(100, 100, 255);
    font-weight: bold;
    font-size: 1.3rem;
}

.education-place {
    font-weight: bold;
    font-size: 1.1rem;
}

.education-date-and-city {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px 0;
}
.education-others ul{
    padding-left: 13px;
}

@media screen and (max-width: 800px) {
    .education {
        font-size: 0.7rem;
        text-align: justify;
    }
    .education-item {
        width: 90%;
        margin-top: 10px;
    }
    .education-title{
        font-size: 0.9rem;
    }
    .education-place {
        font-size: 0.7rem;
    }
    .education-date-and-city {
        width: 100%;
    }
    .left img {
        width: 30px;
    }

}
</style>