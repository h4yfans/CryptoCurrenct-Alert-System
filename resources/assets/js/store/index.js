import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
    state: {
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
        isAuth: null, //check if the user is auth
        email: '', //user email
        showNotification: false, //show the alert section in setting component
        informationText: '', // dynamic information text
        alertColor: '', // alerts color
        currencies: [], // currencies
    },
    actions: {
        checkAuth({commit}) {

            Vue.http.get('/check-auth')
            .then((response) => {
                commit('CHECK_AUTH', response.data)
            })
            .catch((error) => {
                console.log(error)
            });
        },
        getUserInfo({commit}) {
            Vue.http.get('/get-user-info')
            .then((response) => {
                commit('SET_EMAIL', response.body)
            })
            .catch((error) => {
                console.log(error)
            })
        },
        changeAuthInfo({commit}, payload) {
            Vue.http.post('/change-auth-info', {email: payload.email, password: payload.password})
            .then((response) => {
                if (response.status) {
                    console.log('success')
                    console.log(response)
                    commit('SET_EMAIL', payload);
                    commit('CHANGE_NOTIFICATION', true);
                    commit('UPDATE_INFORMATION_TEXT', response);
                } else {
                    commit('UPDATE_INFORMATION_TEXT', response);
                    console.log('error');
                    console.log(response);
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getCurrencies({commit}) {
            Vue.http.get('https://bittrex.com/api/v1.1/public/getmarketsummaries')
            .then(response => {
                console.log(response);
                commit('SET_CURRENCIES', response.body.result);
            }).catch(error => {

            })
        }
    },
    mutations: {
        CHECK_AUTH(state, payload) {
            if (payload) {
                state.isAuth = true;
            }
        },
        SET_EMAIL(state, payload) {
            state.email = payload.email
        },
        UPDATE_EMAIL(state, payload) {
            state.email = payload;
        },
        CHANGE_NOTIFICATION(state, payload) {
            state.showNotification = payload;
        },
        UPDATE_INFORMATION_TEXT(state, payload) {
            state.informationText = payload.body.message;
            if (payload.body.status) {
                state.alertColor = 'success';
            } else {
                state.alertColor = 'error';
            }
        },
        SET_CURRENCIES(state, payload) {
            payload.map(x => state.currencies.push(x.MarketName));

        }
    },
    getters: { // always return something
        alerts(state) {
            return state.alerts;
        },
        alertsInfo(state) {
            return state.alertsInfo;
        },
        checkAuth(state) {
            return state.isAuth;
        },
        email(state) {
            return state.email;
        },
        informationText(state) {
            return state.informationText;
        },
        showNotification(state) {
            return state.showNotification;
        },
        currencies(state){
            return state.currencies;
        }
    },


})