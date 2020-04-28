<template>
    <div class="publication">
        <div v-for="item in publicationItens" :key="item.title" class="publication-item">
            <div class="publication-title">{{item.title}}</div>
            <div class="publication-author">{{item.author}}</div>
            <div class="publication-date-and-place">
                <span class="doi"><a :href="item.doi" target="_blank" >doi</a></span>
                <span><i class="fas fa-calendar-alt"></i> {{item.year}}</span>
                <span class="place"> <i :class="item.icon"></i> {{item.place}}</span>
            </div>
            <div class="publication-abstract">
                {{item.abstract}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Publication",
    data: function(){
        return {
            publicationItens: [
                {
                    title: "Evolving granular feedback linearization: Design, analysis, and applications",
                    author: "Lucas Oliveira, Anderson Bento, Valter J.S.Leite, Fernando Gomide",
                    year: "2020",
                    doi: "https://doi.org/10.1016/j.asoc.2019.105927",
                    place: "Applied Soft Computing Journal",
                    icon: "fas fa-book",
                    abstract: "Exact feedback linearization is a method for nonlinear control which amounts to cancel the nonlinearities of a nonlinear system such that the resulting closed-loop dynamics is linear. The effectiveness of exact feedback linearization relies on a precise description of the system nonlinearities. This paper suggests a novel robust control approach for adaptive control of nonlinear systems called robust granular feedback linearization. The approach employs an instance of evolving the participatory learning algorithm to continuously estimate unknown nonlinearities and cancel their effects in the control loop. Under mild conditions, the robust granular feedback linearization is ensured to be Lyapunov stable by using convex methods. Simulation experiments with a surge tank is used to evaluate and to compare the performance of the robust granular feedback linearization against exact feedback linearization and an adaptive controller based on bacterial foraging. The results indicate that the robust granular feedback linearization outperforms both, the exact and the adaptive foraging controllers. The effectiveness of robust granular feedback linearization is further testified in an actual surge tank control system application."
                },
                {
                    title: "Linearização por realimentação granular robusta com algoritmo evolutivo Takagi-Sugeno: Análise e avaliação de desempenho",
                    author: "Anderson Bento, Lucas Oliveira, Valter J.S.Leite, Fernando Gomide",
                    doi: "https://www.doi.org/10.17648/sbai-2019-111229",
                    icon: "fas fa-map-marked",
                    abstract: "A linearização por realimentação é uma poderosa técnica de controle não linear, mas quando aplicada a situações em que há erro de modelagem, seu desempenho fica comprometido. A linearização por realimentação granular robusta é uma técnica que utiliza aprendizagem participativa para cancelar os efeitos causados por erros de modelagem na malha de controle. Esse trabalho objetiva avaliar o desempenho do controlador de linearização por realimentação granular robusta quando o mecanismo de aprendizagem é substituído pelo eTS, o algoritmo evolutivo Takagi-Sugeno. O controlador granular robusto com eTS é utilizado para que os estados de um pêndulo invertido siga uma trajetória especificada. Os resultados de simulação são quantificados usando os critérios da integral do valor absoluto do erro, da integral da variabilidade do erro e da integral da variabilidade do sinal de controle. Os resultados sugerem que o controlador granular robusto com eTS tem desempenho superior à linearização por realimentação exata.",
                    year: "2019",
                    place: "Simpósio Brasileiro de Automação Inteligente"
                }
            ]
        }
    }
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

@media screen and (max-width: 800px) {
    .publication{
        padding: 10px;
    }
    .publication-title{
        font-size: 1rem;
    }
    .publication-author {
        font-size: 0.9rem;
    }
    .publication-date-and-place{
        margin: 5px 0;
        /*flex-direction: column;*/
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        font-size: 0.9rem;
    }
}
</style>