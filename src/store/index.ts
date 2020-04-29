import Vue from 'vue';
import Vuex from 'vuex';
import AuthService from '@/core/AuthService';
import ColorsService from '@/core/ColorsService';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userIsLoggedIn: AuthService.getLoginStatus(),
        colors: []
    },
    mutations: {
        setUserIsLoggedIn(state, payload) {
            state.userIsLoggedIn = payload;
        },
        setColors(state, payload) {
            state.colors = payload;
        }
    },
    actions: {
        authorizeUser(context) {
            window.localStorage.setItem('userIsLoggedIn', 'true');
            context.commit('setUserIsLoggedIn', true);
        },
        unauthorizeUser(context) {
            window.localStorage.removeItem('userIsLoggedIn');
            context.commit('setUserIsLoggedIn', false);
        },
        loadColors(context) {
            context.commit('setColors', ColorsService.getColors());
        }
    }
})
