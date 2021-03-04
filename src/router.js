import Vue from 'vue';
import Router from 'vue-router';

import Home from '@v/Home';

Vue.use(Router);

const routes = [
    { path: '*', component: Home },
    { path: '/list/:page', component: () => import('@v/List') },
    { path: '/detail/:id', component: () => import('@v/Detail') },
]

export default new Router({
    routes
})