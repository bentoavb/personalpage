import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/content/Home'
import Education from '@/components/content/Education'
import Publications from '@/components/content/Publications'
import Projects from '@/components/content/Projects'

Vue.use(VueRouter)

const router = new VueRouter({
    //mode: 'history',
    history: true,
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'Education',
            path: '/education',
            component: Education
        },
        {
            name: 'Publications',
            path: '/publications',
            component: Publications
        },
        {
            name: 'Projects',
            path: '/projects',
            component: Projects
        }
    ]
})

export default router