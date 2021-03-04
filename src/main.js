import Vue from 'vue';
import store from '@/store';
import router from '@/router';

import App from '@/App';

import './style.scss';

new Vue({
    render: h => h(App),
    router,
    store
}).$mount("#app")
