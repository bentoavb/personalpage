<template>
    <div class="publication">
        <a v-for="item in publicationItens" :href="item.doi" target="_blank" :key="item.title" class="publication-item">
            <div class="publication-title">{{item.title}}</div>
            <div class="publication-author">{{item.author}}</div>
            <div class="place"> <i :class="item.icon"></i> {{item.place}}</div>
            <div class="year"> <i class="fas fa-calendar-alt"></i> {{item.year}}</div>
        </a>
    </div>
</template>

<script>
export default {
    name: "Publication",
    data: function(){
        return {
            publicationItens: [
                {
                    title: "Evolving granular control with high-gain observers for feedback linearizable nonlinear systems",
                    author: "Anderson Bento, Lucas Oliveira, Ignácio Rubio Scola, Valter Leite, Fernando Gomide",
                    year: "2020",
                    doi: "https://www.researchgate.net/publication/343027110_Evolving_granular_control_with_high-gain_observers_for_feedback_linearizable_nonlinear_systems",
                    place: "Evolving Systems Journal",
                    icon: "fas fa-book"
                },
                {
                    title: "Evolving granular feedback linearization: Design, analysis, and applications",
                    author: "Lucas Oliveira, Anderson Bento, Valter Leite, Fernando Gomide",
                    year: "2019",
                    doi: "https://www.researchgate.net/publication/337264549_Evolving_granular_feedback_linearization_Design_analysis_and_applications",
                    place: "Applied Soft Computing Journal",
                    icon: "fas fa-book"
                }
            ]
        }
    }
}
</script>

<style>
.publication {
    padding: 1px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.publication-item {
    width: 25%;
    min-height: 30%;
    text-decoration: none;
    color: black;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    padding: 30px;
    border-radius: 3px;
}

.publication-item div {
    margin-bottom: 5px;
}

.publication-title {
    color: rgb(100, 100, 255);
    font-weight: bold;
    font-size: 1.2rem;
}

.publication-author {
    font-size: 1.1rem;
}

.place{
    font-weight: bold;
}

.year{
    font-weight: bold;
}

.publication-abstract {
    font-size: 0.8rem;
    text-align: justify;
}

.other-pubs{
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    text-align: center;
    align-self: center;
}

@media screen and (max-width: 800px) {
    .publication{
        flex-direction: column;
    }
    .publication-title{
        font-size: 0.85rem;
    }
    .publication-author {
        font-size: 0.85rem;
    }
    .publication-item {
        margin-top: 10px;
        width: 75%;
    }
    .place, .year{
        font-size: 0.85rem;
    }
    .other-pubs {
        font-size: 1rem;
        margin: 15px 0;
        width: 70%;
    }
}
</style>