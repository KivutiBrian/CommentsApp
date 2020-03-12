import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex,axios)

export default new Vuex.Store({
    state:{
        comments:[]
        
    },
    mutations:{
        // to update a state, you need to commit a mutation
        UPDATE_COMMENTS(state,payload){
            state.comments = payload
        },
        NEW_COMMENT(state,payload){
            state.comments.push(payload)
        }
        
    },

    actions:{

        GET_COMMENTS(context){

            axios.get('https://tech-feedbacks-api.herokuapp.com/feedback')
                .then(response =>{
                    console.log(response.data)
                    context.commit('UPDATE_COMMENTS',response.data)
                })
                .catch(err=>console.log(err))
        },

        ADD_COMMENT(context,payload){
            axios.post('https://tech-feedbacks-api.herokuapp.com/feedback',payload)
                .then(response=>{
                    context.commit('NEW_COMMENT',response.data)
                })
        }

        
    },

    getters:{
       totalComments: state => state.comments.length
    }
})