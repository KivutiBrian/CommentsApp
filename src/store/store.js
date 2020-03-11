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
        ADD_NEW_COMMENT(state,payload){
            state.comments.unshift(payload)
        }
    },

    actions:{
        LOAD_POSTS(context){
            axios
                .get('https://tech-feedbacks-api.herokuapp.com/feedback')
                .then(response =>{
                    context.commit('UPDATE_COMMENTS',response.data)
                    console.log(response.data)
                })
                .catch(error=>console.log(error))
        },

        ADD_POST(context,payload){
            axios
                .post('https://tech-feedbacks-api.herokuapp.com/feedback',payload)
                .then(response =>{
                    context.commit('ADD_NEW_COMMENT',response.data)
                    console.log(response.data)
                    console.log(response.status)
                })
                .catch(error=>console.log(error))
        }
     
    },

    getters:{
        ALL_COMMENTS: state => state.comments.length

    }
})