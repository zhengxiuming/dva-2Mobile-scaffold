/**
 * Created by zhengxiuming on 2017/9/26.
 */

export default {
  namespace: 'app',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({pathname,query})=>{
        console.log(pathname,query,1212);
      });
    },
  },

  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
  },

  reducers: {
    // save(state, action) {
    //   return { ...state, ...action.payload };
    // },
  },

};
