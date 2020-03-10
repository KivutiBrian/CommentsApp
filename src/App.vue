<template>
  <div id="app">
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm"> 
          <comments-list ></comments-list>
        </div>

      </div>
    </div>  
    
  </div>
</template>

<script>

import CommentsList from './components/CommentsList'

// import bus from './eventbus'

export default {
  name: 'App',
  components: {
    CommentsList
  },
  data(){
    return{
      // comments:[
      //   {
      //     author:'John Doe',
      //     email:'johndoe@gmail.com',
      //     message:"Some quick example text to build on the card title and make up the bulk of the card's content."
      //   }
      // ]
    }
  },
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
