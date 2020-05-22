import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        home: "About",
        eng: ["Mechatronics","Engineering","Student"],
        infobiography: "I'm a mechatronics engineering student at CEFET-MG Divinópolis. Since the beginning of the course, I have been involved in scientific projects on systems analysis and control with an emphasis on evolving fuzzy systems. I participated in two conferences of the Brazilian Automatic Society (CBA 2018 and SBAI 2019) to present the results of the projects. And last but not least, I like mobile and web programming.",
        infocontact: "main contact:",
        education: "Academic Education",
        publication: "Main Publications",
        researchgate: "See my other publications on my ResearchGate page",
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
        projectsTitle: "Programming Projects",
        projects: ["Page under construction","Visit my Github page"]
    },
    'br': {
        home: "Sobre",
        eng: ["Estudante de","Engenharia","Mecatrônica"],
        infobiography: "Sou estudante de engenharia mecatrônica no CEFET-MG Unidade Divinópolis. Desde o início do curso, estou envolvido em projetos científicos sobre análise e controle de sistemas com ênfase em sistemas fuzzy evolutivos. Participei de dois congressos da Sociedade Brasileira de Automática (CBA 2018 e SBAI 2019) para apresentar resultados dos projetos. E por último, mas não menos importante, gosto de programação mobile e web.",
        infocontact: "contato principal:",
        education: "Formação Acadêmica",
        publication: "Principais Publicações",
        researchgate: "Veja minhas outras publicações na minha página do ResearchGate",
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