import axios from 'axios';
import * as types from '../mutation-types';
const state = {
  UserInfo: {},
  PartInfo: []
};

const getters = {

};

const mutations = {
  // 用户信息
  [types.MUTATION_USER_INFO](state, all) {
    state.UserInfo = all;
  },
  // 商品信息
  [types.MUTATION_PART_INFO](state, all) {
    state.PartInfo = all;
  }
};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions
};
