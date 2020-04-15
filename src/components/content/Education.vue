<template>
    <div class="education">
        <div v-for="item in $t('educationItens')" :key="item.title" class="education-item">
            <div class="education-title">{{item.title}}</div>
            <div class="education-place">{{item.place}}</div>
            <div class="education-date-and-city"><span><i class="fas fa-calendar-alt"></i> {{item.date}}</span><span><i class="fas fa-map-marked-alt"></i> {{item.city}}</span></div>
            <div class="education-others">
                <ul v-for="e in item.others" :key="e">
                    <li>{{e}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Education"
}
</script>

<style>
.education {
    padding: 0 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
    align-items: center;
    width: 60%;
}

@media screen and (max-width: 800px) {
    .education-date-and-city {
        width: 100%;
    }

    .education {
        padding: 15px;
    }
}
</style>