const state = {
  count: 0
};
const mutations = {
  add(state) {
    state.count++
  },
  reset(state) {
    state.count = 0
  }
};
const actions = {};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
