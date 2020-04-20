import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcome: "Welcome",
        eng: ["Mechatronics","Engineering","Student"],
        infobiography: "I'm an engineering student involved in scientific projects on system analysis and control. My main research interest is evolving fuzzy systems. And last but not least I like mobile and web programming.",
        infocontact: "main contact:",
        education: "Academic Education",
        publication: "Main Publications",
        educationItens: [
            {
                title: "B.Sc. Student in Mechatronics Engineering",
                place: "Federal Center for Technological Education of Minas Gerais",
                date: "2018 - Ongoing",
                city: "Divinópolis, MG, Brazil",
                others: [
                    {
                        title: "Since 2018, I'm working on a research project on control systems and evolving fuzzy systems, with an emphasis on:",
                        others: [
                            "Fault detection and fault tolerant control (2020).",
                            "State estimation and nonlinear control (2019).",
                            "Nonlinear control (2018)."
                        ]
                    },
                    {
                        title: "I was an undergraduate teaching assistant on C/C++ programming subjects in 2019."
                    }
                ]
            },
            {
                title: "Electromechanical Technician",
                place: "Federal Center for Technological Education of Minas Gerais",
                date: "2015 - 2017",
                city: "Divinópolis, MG, Brazil",
                others: [
                    {
                        title: "I was a member of a robotics competition group in the second and third year of the course."
                    },
                    {
                        title:"I worked on a research project on  analysis and control of mobile robotics in the third year of the course."
                    }
                ]
            }
        ],
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
        ],
        projectsTitle: "Programming Projects",
        projects: ["Page under construction","Visit my Github page"]
    },
    'br': {
        welcome: "Bem vindo",
        eng: ["Estudante de","Engenharia","Mecatrônica"],
        infobiography: "Sou estudante de engenharia envolvido em projetos científicos sobre análise e controle de sistemas. Meu principal interesse de pesquisa é sistemas fuzzy evolutivos. E por último, mas não menos importante, gosto de programação mobile e web.",
        infocontact: "contato principal:",
        education: "Formação Acadêmica",
        publication: "Publicações Principais",
        educationItens: [
            {
                title: "Estudante de Engenharia Mecatrônica",
                place: "Centro Federal de Educação Tecnológica de Minas Gerais",
                date: "2018 - Em andamento",
                city: "Divinópolis, MG, Brasil",
                others: [
                    {
                        title: "Desde 2018, estou trabalhando em um projeto de pesquisa sobre sistemas de controle e sistemas fuzzy evolutivos, com ênfase em:",
                        others: [
                            "Detecção de falhas e controle tolerante a falhas (2020).",
                            "Estimadores de estados e controle não linear (2019).",
                            "Controle não linear (2018)."
                        ]
                    },
                    {
                        title: "Fui monitor de graduação de disciplinas de programação em C/C++ em 2019."
                    }
                ]
            },
            {
                title: "Técnico em Eletromecânica",
                place: "Centro Federal de Educação Tecnológica de Minas Gerais",
                date: "2015 - 2017",
                city: "Divinópolis, MG, Brasil",
                others: [
                    {
                        title: "Fui membro de um grupo de competição de robótica no segundo e terceiro ano do curso."
                    },{
                        title: "Trabalhei em um projeto de pesquisa sobre análise e controle de robôs móveis no terceiro ano do curso."
                    }
                ]
            }
        ],
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
        ],
        projectsTitle: "Projetos de Programação",
        projects: ["Página em construção","Visite minha página do Github"]
    }
};

const i18n = new VueI18n({
    locale: 'br', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;