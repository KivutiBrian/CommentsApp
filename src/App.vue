<template>
  <div id="app">
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm"> 
          <comments-list :comments="comments"></comments-list>
        </div>

      </div>
    </div>  
    
  </div>
</template>

<script>

import CommentsList from './components/CommentsList'
import { mapActions,mapState } from 'vuex'

// import bus from './eventbus'

export default {
  name: 'App',
  components: {
    CommentsList
  },
  computed:{
    ...mapActions(['GET_COMMENTS']),
    ...mapState(['comments'])
  },
    // computed:{
    //     ...mapState([
    //         'comments'
    //     ])
    // },
  
  // created(){
  //   bus.$on('formData',(data)=>{
  //     this.updateComments(data)
  //   })
  // },
  // methods:{
  //   updateComments(data){
  //     this.comments.push(data)
  //   }
  // }
}
</script>

<style>



</style>
