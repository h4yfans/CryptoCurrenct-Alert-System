require('./bootstrap');

window.Vue = require('vue');

import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import {store} from './store/index'

import Sidebar from './components/home/_includes/Sidebar.vue'
import Index from './components/home/Index.vue'
import MyAlerts from './components/home/Alert/MyAlerts.vue'
import AddAlert from './components/home/Create/AddAlert.vue'
import EditAlert from './components/home/Edit/EditAlert.vue'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.component('sidebar', Sidebar);
Vue.component('home', Index);

const routes = [
    {title: 'My Alerts', icon: 'home', path: '/my-alerts', component: MyAlerts},
    {title: 'Add Alert', icon: 'add', path: '/add-alert', component: AddAlert},
    {title: 'Edit Alert', icon: 'edit', path: '/edit-alert', component: EditAlert},
]

const router = new VueRouter({
    routes,
    linkActiveClass: 'list__title--active'
})

const app = new Vue({
    el: '#app',
    data() {
        return {
            routes: routes,
        }
    },
    router,
    store,
    created() {
        if (this.$route.path == '/' && this.$route.path == '/login') {
            this.$router.push('my-alerts');
        }
    }
});

