import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
    state: {
        isAuth: null,
        alerts: [
            {id: 1, currency: 'BTC/USD', exchange: 'Bittrex', price: '1200 '},
            {id: 2, currency: 'BTC/ETH', exchange: 'Bittrex', price: '0.0000065'},
            {id: 3, currency: 'BTC/XRP', exchange: 'Bittrex', price: '0.00054 '},
            {id: 4, currency: 'BTC/NEO', exchange: 'Bittrex', price: '0.0123658 '},
            {id: 5, currency: 'BTC/OMG', exchange: 'Bittrex', price: '0.1512564 '},
            {id: 6, currency: 'BTC/STRAT', exchange: 'Bittrex', price: '0.00012 '},
            {id: 7, currency: 'BTC/XLM', exchange: 'Bittrex', price: '0.004412 '},
            {id: 8, currency: 'BTC/BCC', exchange: 'Bittrex', price: '0.313412 '},
            {id: 9, currency: 'BTC/VIA', exchange: 'Bittrex', price: '0.499312 '},
        ],
        alertsInfo: [{
            id: 1,
            exchanges: [{id: 1, name: 'Bittrex'}, {id: 2, name: 'Poloniex'}],
            currencies: [{id: 1, currency: 'BTC/USD'}, {id: 2, currency: 'BTC/ETH'}, {id: 3, currency: 'BTC/XRP'}]
        },]
    },
    actions: {
        checkAuth({commit}) {
            Vue.http.get('/check-auth')
            .then((response) => {
                commit('checkAuth', response.data)
            })
            .catch((error) => {
                console.log(error)
            });
        }
    },
    mutations: {
        checkAuth(state, payload) {
            if (payload) {
                state.isAuth = true;
            }

        }
    },
    getters: { // always return something
        alerts(state) {
            return state.alerts;
        },
        alertsInfo(state) {
            return state.alertsInfo;
        },
        checkAuth(state){
            return state.isAuth;
        }
    },


})