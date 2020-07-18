<template>
    <div class="publication">
        <a v-for="item in publicationItens" :href="item.doi" target="_blank" :key="item.title" class="publication-item">
            <div class="publication-title">{{item.title}}</div>
            <div class="publication-author">{{item.author}}</div>
            <div class="publication-date-and-place">
                <span class="place"> <i :class="item.icon"></i> {{item.place}}</span>
                <span><i class="fas fa-calendar-alt"></i> {{item.year}}</span>
            </div>
        </a>
        <a href="https://www.researchgate.net/profile/Anderson_Bento2" target="_blank" class="other-pubs">{{$t('researchgate')}} <i class="fab fa-researchgate"></i></a>
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
                    doi: "https://doi.org/10.1007/s12530-020-09349-y",
                    place: "Evolving Systems Journal",
                    icon: "fas fa-book"
                },
                {
                    title: "Evolving granular feedback linearization: Design, analysis, and applications",
                    author: "Lucas Oliveira, Anderson Bento, Valter Leite, Fernando Gomide",
                    year: "2020",
                    doi: "https://doi.org/10.1016/j.asoc.2019.105927",
                    place: "Applied Soft Computing Journal",
                    icon: "fas fa-book"
                },
                {
                    title: "Linearização por realimentação granular robusta com algoritmo evolutivo Takagi-Sugeno: Análise e avaliação de desempenho",
                    author: "Anderson Bento, Lucas Oliveira, Valter Leite, Fernando Gomide",
                    doi: "https://www.doi.org/10.17648/sbai-2019-111229",
                    icon: "fas fa-map-marked",
                    year: "2019",
                    place: "Simpósio Brasileiro de Automação Inteligente"
                },
                {
                    title: "State Estimator Application in DC Motors of a Mobile Robot",
                    author: "Anderson Bento, Lucas Oliveira, Ignacio Rubio Scola, Ariany Oliveira",
                    doi: "https://www.doi.org/10.20906/CPS/CBA2018-0374",
                    icon: "fas fa-map-marked",
                    year: "2018",
                    place: "Congresso Brasileiro de Automática"
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
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.publication-item {
    width: 80%;
    text-decoration: none;
    color: black;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    padding: 10px;
    border-radius: 3px;
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
    margin: 5px 0;
}

.publication-date-and-place .doi{
    font-weight: bold;
     -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    border-radius: 3px;
}

.doi:hover {
    background-color: rgba(0,0,0,0.1);
}

.publication-date-and-place .doi a {
    text-decoration: none;
    color: black;
    width: 100%;
    margin: 0;
    padding: 0 5px;
}

.publication-date-and-place .place{
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

    .publication-title{
        font-size: 0.85rem;
    }
    .publication-author {
        font-size: 0.75rem;
    }
    .publication-item {
        margin-top: 10px;
        width: 90%;
    }
    .publication-date-and-place{
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        font-size: 0.65rem;
    }
    .other-pubs {
        font-size: 1rem;
        margin: 15px 0;
        width: 70%;
    }
}
</style>