const state = {
  tableData: [{
    name:'小猫赛跑',
    region:'上海',
    delivery:true,
    type:['美食/餐厅线上活动','地推活动','线下主题活动'],
    resource:'线上品牌商赞助',
    desc:'开心派对',
    date: '2016-05-01'
  }, {
    name:'小狗赛跑',
    region:'北京',
    delivery:true,
    type:['美食/餐厅线上活动','地推活动'],
    resource:'线上品牌商赞助',
    desc:'开心派对',
    date: '2018-05-02'
  }, {
    name:'狐狸选美',
    region:'上海',
    delivery:true,
    type:['美食/餐厅线上活动','地推活动','线下主题活动','单纯品牌曝光'],
    resource:'线下场地免费',
    desc:'开心派对',
    date: '2018-05-03'
  }, {
    name:'动物总动员',
    region:'北京',
    delivery:false,
    type:['线下主题活动'],
    resource:'线下场地免费',
    desc:'热闹',
    date: '2018-05-04'
  },{
    name:'动物联盟3',
    region:'上海',
    delivery:false,
    type:['线下主题活动'],
    resource:'线下场地免费',
    desc:'热闹',
    date: '2018-05-05'
  }]
};
const actions = {
  addOneAnimal({commit},value){
    commit('ADD_ONE_ANIMAL',value)
  },
};
const mutations = {
  ADD_ONE_ANIMAL(state,value){
    state.tableData.push(value);
  },
};
export default {
  state,
  mutations,
  actions,
}
