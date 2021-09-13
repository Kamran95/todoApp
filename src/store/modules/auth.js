import { private_url, public_url } from "../axios";
const namespaced = true;
const state = {
       token:'',
       userName:'',
       userEmail:''
};
const getters = {
  getToken(state) {
    return state.token;
  },


};
const mutations = {
  setLoginData(state, {name,email,token}){
    console.log('name,email,token',name,email,token)
    state.userName=name
    state.userEmail=email
    state.token=token
  },
  
  
};
const actions = {
    REGISTER_USER:({state,rootGetters,commit},payload)=>{
      return new Promise((resolve, reject) => {
         return public_url.post("register",payload)
        .then(res=>{
          commit('setLoginData',res.data.data)
          resolve(res) 
        })
        .catch(err=>{
          reject(err)
        })
      })
      },
      LOGIN_USER:({state,rootGetters,commit},payload)=>{
      return new Promise((resolve, reject) => {
         return public_url.post("login",payload)
        .then(res=>{
          console.log('setLoginData',res)
          commit('setLoginData',res.data.data)
          resolve(res) 
        })
        .catch(err=>{
          reject(err)
        })
      })
      },

    }
export default {
    namespaced,
    state,
    getters,
    mutations,
    actions,
};