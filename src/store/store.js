import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        comments:[
            {
              author:'John Doe',
              email:'johndoe@gmail.com',
              message:"Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
              author:'John Doe',
              email:'johndoe@gmail.com',
              message:"Some quick example text to build on the card title and make up the bulk of the card's content."
            }
          ]
    },
    mutations:{
        // to update a state, you need to commit a mutation
        ADD_TODO(state,payload){
            state.comments.push(payload)
        }

    },

    actions:{
        SAVE_TODO(context,payload){
            context.commit('ADD_TODO',payload)
        }

    },

    getters:{
        ALL_COMMENTS:state => state.comments 

    }
})