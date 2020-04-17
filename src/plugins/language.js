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
                    "Is currently working on a research project on control systems and evolving fuzzy systems, with an emphasis on fault detection and fault tolerant control.", "Was an undergraduate teaching assistant on C/C++ programming subjects."
                ]
            },
            {
                title: "Electromechanical Technician",
                place: "Federal Center for Technological Education of Minas Gerais",
                date: "2015 - 2017",
                city: "Divinópolis, MG, Brazil",
                others: [
                    "Was a member of a robotics competition group in the second and third year of the course.", "Worked on a research project on  analysis and control of mobile robotics in the third year of the course."
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
                abstract: "Feedback linearization is a powerful nonlinear control technique, but its performance degenerates substantially when subject to modeling errors. Recently robust granular feedback linearization, a method that uses the participatory learning to cancel the effect of model mismatches, was introduced to reduce the impact of modeling errors in the control loop. This paper aims to evaluate the performance of the robust, granular feedback linearization controller with learning done using eTS, the evolving Takagi-Sugeno approach. The behavior of the robust, granular feedback linearization with eTS is evaluated using an inverted pendulum control system to track a specified trajectory. Performance is measured using integral of the absolute error, the integral of the variability of the control signal, and the integral of the variability of the error indexes. Simulation results suggest that the robust, granular eTS control performs better than exact feedback linearization.",
                year: "2019",
                place: "Brazilian Symposium on Intelligent Automation"
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
                    "Atualmente, está trabalhando em um projeto de pesquisa sobre sistemas de controle e sistemas fuzzy evolutivos, com ênfase em detecção de falhas e controle tolerante a falhas.", "Foi monitor de graduação de disciplinas de programação em C/C++"
                ]
            },
            {
                title: "Técnico em Eletromecânica",
                place: "Centro Federal de Educação Tecnológica de Minas Gerais",
                date: "2015 - 2017",
                city: "Divinópolis, MG, Brasil",
                others: [
                    "Foi membro de um grupo de competição de robótica no segundo e terceiro ano do curso.", "Trabalhou em um projeto de pesquisa sobre análise e controle de robôs móveis no terceiro ano do curso."
                ]
            }
        ],
        publicationItens: [
            {
                title: "Evolving granular feedback linearization: Design, analysis, and applications",
                author: "Lucas Oliveira, Anderson Bento, Valter J.S.Leite, Fernando Gomide",
                year: "2020",
                doi: "https://doi.org/10.1016/j.asoc.2019.105927",
                place: "Revista Applied Soft Computing",
                icon: "fas fa-book",
                abstract: "A linearização por realimentação exata é um método para controle não linear que equivale a cancelar as não linearidades de um sistema não linear, de modo que a dinâmica de malha fechada resultante seja linear. A eficácia da linearização por realimentação exata depende de uma descrição precisa das não linearidades do sistema. Este artigo sugere uma nova abordagem de controle robusto para controle adaptativo de sistemas não lineares chamado linearização por realimentação granular robusta. A abordagem emprega uma instância do algoritmo evolutivo de aprendizado participativo para estimar continuamente não linearidades desconhecidas e cancelar seus efeitos na malha de controle. Sob condições amenas, a linearização por realimentação granular robusta é garantida como estável no sentido de Lyapunov, usando métodos convexos. Experimentos de simulação com um tanque são usados ​​para avaliar e comparar o desempenho da linearização por realimentação granular robusta com a linearização por realimentação exata e um controlador adaptativo baseado no forrageamento bacteriano. Os resultados indicam que a linearização por realimentação granular robusta supera os outros controladores. A eficácia da linearização por realimentação granular robusta é ainda testada em uma aplicação real em um sistema de controle de tanque."
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