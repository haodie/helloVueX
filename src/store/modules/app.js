const state = {
  activeIndex: '1-1'
};
const actions = {
  changeActiveIndex({commit},value){
    commit('CHANGE_ACTIVE_INDEX',value)
  },
};
const mutations = {
  CHANGE_ACTIVE_INDEX(state,value){
    state.activeIndex = value;
  },
};

export default {
  state,
  mutations,
  actions,
}
