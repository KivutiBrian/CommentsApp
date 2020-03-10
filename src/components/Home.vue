<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-6">
        <comment-section></comment-section>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import CommentSection from './CommentSection'

export default {
  name:'Home',
  components:{
    CommentSection
  }

}
</script>

<style>

</style>