import Vue from 'vue'
import Vuex from 'vuex'

import * as TYPES from './types';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: {
      status: false,
      text: '',
    },
    listAll: [
      { id: '1', status: '' }, { id: '2', status: '' }, { id: '3', status: '' },
      { id: '4', status: '' }, { id: '5', status: '' }, { id: '6', status: '' },
      { id: '7', status: '' }, { id: '8', status: '' }, { id: '9', status: '' },
    ],
    listPrize: ['1.png', '5.png', '10.png', '20.png', '30.png', '50.png', '100.png', '200.png', '250.png']
  },
  actions: {
    async getPrize({ commit }, params) {
      commit(TYPES.CHANGE_STATUS, { params, status: 'loading' });
      try {
        const min = 1, max = 4;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        const file = require('@/api/data-'+random+'.json');
        const response = await setTimeout(() => {
          if (file[0].status === 200) {
            const cell = file[0].data['cell' + params.id];
            commit(TYPES.CHANGE_STATUS, { params, status: cell });
          } else if (file[0].status === 500) {
            commit(TYPES.SET_ERROR, file[0].error.message);
          }
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    },

    stopGame({ commit }) {
      commit(TYPES.STOP_GAME);
    },
  },
  mutations: {
    [TYPES.CHANGE_STATUS](state, payload) {
      state.listAll.filter(item => item.id == payload.params.id ).map(item => item.status = payload.status);
    },

    [TYPES.SET_ERROR](state, payload) {
      state.error.status = true;
      state.error.text = payload;
    },

    [TYPES.STOP_GAME](state) {
      state.error.status = false;
      state.error.text = '';
      state.listAll.map(item => {
        item.status = '';
      })
    },
  }
})
