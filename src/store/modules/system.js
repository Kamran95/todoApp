import { private_url, public_url } from "../axios";
const namespaced = true;
const state = {
        cardType:'',
};
const getters = {
  getShowUnverifiedDialog(state) {
    return state.showUnverifiedDialog;
  },
  

};
const mutations = {
  setShowUnverifiedDialog(state, payload){
    state.showUnverifiedDialog=payload
  },
  
  
};
const actions = {
    getAllTodos:({state,rootGetters},payload)=>{
      return new Promise((resolve, reject) => {
        private_url.get("showAllTodo/"+payload)
        .then(res=>{
          resolve(res) 
        })
        .catch(err=>{
          reject(err)
        })
      })
      },
      addTodo:({state,rootGetters},payload)=>{
        return new Promise((resolve, reject) => {
          private_url.post("addToList",payload)
          .then(res=>{
            resolve(res) 
          })
          .catch(err=>{
            reject(err)
          })
        })
        },

    
};
export default {
    namespaced,
    state,
    getters,
    mutations,
    actions,
};