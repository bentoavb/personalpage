(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0341":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"07fc":function(t,e,a){"use strict";var n=a("68f1"),i=a.n(n);i.a},"2af7":function(t,e,a){"use strict";var n=a("0341"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Info"),a("Content"),a("Menu")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view",{staticClass:"content"})},r=[],c={name:"Content"},l=c,u=(a("b318"),a("2877")),d=Object(u["a"])(l,s,r,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("div",{staticClass:"languagebuttons"},t._l(t.languages,(function(e){return a("span",{key:e.title,on:{click:function(a){return t.changeLanguage(e.language)}}},[a("flag",{attrs:{iso:e.flag,squared:!1}})],1)})),0),a("span",{staticClass:"name"},[t._v("Anderson Vítor Bento")])])},m=[],g=a("a925");n["a"].use(g["a"]);var h={en:{home:"About",eng:["Mechatronics","Engineering","Student"],infobiography:"I'm an engineering student involved in scientific projects on system analysis and control. My main research interest is evolving fuzzy systems. And last but not least I like mobile and web programming.",infocontact:"main contact:",education:"Academic Education",publication:"Main Publications",researchgate:"See my other publications on my ResearchGate page",educationItens:[{title:"B.Sc. Student in Mechatronics Engineering",place:"Federal Center for Technological Education of Minas Gerais",date:"2018 - Ongoing",city:"Divinópolis, MG, Brazil",others:[{title:"Since 2018, I'm working on a research project on control systems and evolving fuzzy systems, with an emphasis on:",others:["Fault detection and fault tolerant control (2020).","State estimation and nonlinear control (2019).","Nonlinear control (2018)."]},{title:"I was an undergraduate teaching assistant on C/C++ programming subjects in 2019."}]},{title:"Electromechanical Technician",place:"Federal Center for Technological Education of Minas Gerais",date:"2015 - 2017",city:"Divinópolis, MG, Brazil",others:[{title:"I was a member of a robotics competition group in the second and third year of the course."},{title:"I worked on a research project on  analysis and control of mobile robotics in the third year of the course."}]}],projectsTitle:"Programming Projects",projects:["Page under construction","Visit my Github page"]},br:{home:"Sobre",eng:["Estudante de","Engenharia","Mecatrônica"],infobiography:"Sou estudante de engenharia envolvido em projetos científicos sobre análise e controle de sistemas. Meu principal interesse de pesquisa é sistemas fuzzy evolutivos. E por último, mas não menos importante, gosto de programação mobile e web.",infocontact:"contato principal:",education:"Formação Acadêmica",publication:"Principais Publicações",researchgate:"Veja minhas outras publicações na minha página do ResearchGate",educationItens:[{title:"Estudante de Engenharia Mecatrônica",place:"Centro Federal de Educação Tecnológica de Minas Gerais",date:"2018 - Em andamento",city:"Divinópolis, MG, Brasil",others:[{title:"Desde 2018, estou trabalhando em um projeto de pesquisa sobre sistemas de controle e sistemas fuzzy evolutivos, com ênfase em:",others:["Detecção de falhas e controle tolerante a falhas (2020).","Estimadores de estados e controle não linear (2019).","Controle não linear (2018)."]},{title:"Fui monitor de graduação de disciplinas de programação em C/C++ em 2019."}]},{title:"Técnico em Eletromecânica",place:"Centro Federal de Educação Tecnológica de Minas Gerais",date:"2015 - 2017",city:"Divinópolis, MG, Brasil",others:[{title:"Fui membro de um grupo de competição de robótica no segundo e terceiro ano do curso."},{title:"Trabalhei em um projeto de pesquisa sobre análise e controle de robôs móveis no terceiro ano do curso."}]}],projectsTitle:"Projetos de Programação",projects:["Página em construção","Visite minha página do Github"]}},b=new g["a"]({locale:"br",fallbackLocale:"en",messages:h}),v=b,_={name:"Info",data:function(){return{languages:[{flag:"br",language:"br"},{flag:"gb",language:"en"}]}},methods:{changeLanguage:function(t){console.log(t),v.locale=t}}},C=_,y=(a("07fc"),Object(u["a"])(C,f,m,!1,null,null,null)),j=y.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-item",on:{click:function(e){return t.navigate("/")}}},[t._v(t._s(t.$t("home")))]),a("div",{staticClass:"menu-item",on:{click:function(e){return t.navigate("/education")}}},[t._v(t._s(t.$t("education")))]),a("div",{staticClass:"menu-item",on:{click:function(e){return t.navigate("/publications")}}},[t._v(t._s(t.$t("publication")))]),a("div",{staticClass:"menu-item",on:{click:function(e){return t.navigate("/projects")}}},[t._v(t._s(t.$t("projectsTitle")))])])},w=[],E={name:"Menu",methods:{navigate:function(t){this.$router.push(t)}}},M=E,O=(a("efa6"),Object(u["a"])(M,k,w,!1,null,null,null)),P=O.exports,$={name:"App",components:{Content:p,Info:j,Menu:P}},S=$,A=(a("034f"),Object(u["a"])(S,i,o,!1,null,null,null)),x=A.exports,G=a("d61f"),I=a("8c4f"),B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"img-text"},[n("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("infobiography"))+" ")]),n("img",{attrs:{src:a("9043"),alt:""}})]),n("div",{staticClass:"email"},[t._v(" "+t._s(t.$t("infocontact"))+" bentoavb@gmail.com ")]),t._m(0)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"links"},[a("a",{staticClass:"link",attrs:{href:"https://www.researchgate.net/profile/Anderson_Bento2",target:"_blank"}},[a("i",{staticClass:"fab fa-researchgate"}),t._v(" ResearchGate")]),a("a",{staticClass:"link",attrs:{href:"https://github.com/bentoavb",target:"_blank"}},[a("i",{staticClass:"fab fa-github"}),t._v(" GitHub")]),a("a",{staticClass:"link",attrs:{href:"http://lattes.cnpq.br/5455772822240957",target:"_blank"}},[a("i",{staticClass:"far fa-file-alt"}),t._v(" Curriculum Lattes")])])}],z={name:"Home"},F=z,L=(a("b0c4"),Object(u["a"])(F,B,T,!1,null,null,null)),D=L.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"education"},t._l(t.$t("educationItens"),(function(e){return a("div",{key:e.title,staticClass:"education-item"},[a("div",{staticClass:"education-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"education-place"},[t._v(t._s(e.place))]),a("div",{staticClass:"education-date-and-city"},[a("span",[a("i",{staticClass:"fas fa-calendar-alt"}),t._v(" "+t._s(e.date))]),a("span",[a("i",{staticClass:"fas fa-map-marked-alt"}),t._v(" "+t._s(e.city))])]),a("div",{staticClass:"education-others"},t._l(e.others,(function(e){return a("ul",{key:e},[a("li",[t._v(t._s(e.title))]),e.others?a("ul",t._l(e.others,(function(e){return a("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0):t._e()])})),0)])})),0)},q=[],R={name:"Education"},H=R,J=(a("b03c"),Object(u["a"])(H,V,q,!1,null,null,null)),N=J.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"publication"},[t._l(t.publicationItens,(function(e){return a("a",{key:e.title,staticClass:"publication-item",attrs:{href:e.doi,target:"_blank"}},[a("div",{staticClass:"publication-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"publication-author"},[t._v(t._s(e.author))]),a("div",{staticClass:"publication-date-and-place"},[a("span",{staticClass:"place"},[a("i",{class:e.icon}),t._v(" "+t._s(e.place))]),a("span",[a("i",{staticClass:"fas fa-calendar-alt"}),t._v(" "+t._s(e.year))])])])})),a("a",{staticClass:"other-pubs",attrs:{href:"https://www.researchgate.net/profile/Anderson_Bento2",target:"_blank"}},[t._v(t._s(t.$t("researchgate"))+" "),a("i",{staticClass:"fab fa-researchgate"})])],2)},Q=[],U={name:"Publication",data:function(){return{publicationItens:[{title:"Evolving granular feedback linearization: Design, analysis, and applications",author:"Lucas Oliveira, Anderson Bento, Valter Leite, Fernando Gomide",year:"2020",doi:"https://doi.org/10.1016/j.asoc.2019.105927",place:"Applied Soft Computing Journal",icon:"fas fa-book"},{title:"Linearização por realimentação granular robusta com algoritmo evolutivo Takagi-Sugeno: Análise e avaliação de desempenho",author:"Anderson Bento, Lucas Oliveira, Valter Leite, Fernando Gomide",doi:"https://www.doi.org/10.17648/sbai-2019-111229",icon:"fas fa-map-marked",year:"2019",place:"Simpósio Brasileiro de Automação Inteligente"},{title:"State Estimator Application in DC Motors of a Mobile Robot",author:"Anderson Bento, Lucas Oliveira, Ignacio Rubio Scola, Ariany Oliveira",doi:"https://www.doi.org/10.20906/CPS/CBA2018-0374",icon:"fas fa-map-marked",year:"2018",place:"Congresso Brasileiro de Automática"}]}}},W=U,X=(a("d811"),Object(u["a"])(W,K,Q,!1,null,null,null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects"},[a("span",[t._v(t._s(t.$t("projects")[0])+"!")]),a("a",{staticClass:"link",attrs:{href:"https://github.com/bentoavb",target:"_blank"}},[t._v(t._s(t.$t("projects")[1])+" "),a("i",{staticClass:"fab fa-github"})])])},tt=[],et={name:"Projects"},at=et,nt=(a("2af7"),Object(u["a"])(at,Z,tt,!1,null,null,null)),it=nt.exports;n["a"].use(I["a"]);var ot=new I["a"]({history:!0,routes:[{name:"Home",path:"/",component:D},{name:"Education",path:"/education",component:N},{name:"Publications",path:"/publications",component:Y},{name:"Projects",path:"/projects",component:it}]}),st=ot;n["a"].config.productionTip=!1,n["a"].use(G["a"]),new n["a"]({i18n:v,router:st,render:function(t){return t(x)}}).$mount("#app")},"68f1":function(t,e,a){},"7b40":function(t,e,a){},"85ec":function(t,e,a){},"8d50":function(t,e,a){},9043:function(t,e,a){t.exports=a.p+"img/bento.32065e82.jpeg"},adbd:function(t,e,a){},b03c:function(t,e,a){"use strict";var n=a("c2aa"),i=a.n(n);i.a},b0c4:function(t,e,a){"use strict";var n=a("7b40"),i=a.n(n);i.a},b318:function(t,e,a){"use strict";var n=a("d1f0"),i=a.n(n);i.a},c2aa:function(t,e,a){},d1f0:function(t,e,a){},d811:function(t,e,a){"use strict";var n=a("adbd"),i=a.n(n);i.a},efa6:function(t,e,a){"use strict";var n=a("8d50"),i=a.n(n);i.a}});
//# sourceMappingURL=app.e9fe994a.js.map