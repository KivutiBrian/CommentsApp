<template>
  <div>
    
    <div>
        <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
        <span class="sr-only">Loading...</span>
        </div>
    </div>

    <p>Total:{{ totalComments }}</p>
    <div  class="comments-list">
        <comment v-for="(comment, index) in comments" :key="index" :comment="comment"></comment>
    </div>
  </div>
</template>

<script>

import Comment from './Comment'
import { mapGetters } from 'vuex'
 
export default {
    name:'commentsList',
    components:{
        Comment
    },
    props:{
        comments:{
            type:Array,
            required:true
        }
    },
    computed:{
        ...mapGetters(['totalComments'])
    }
    
    

}
</script>

<style scoped>
.comments-list{
    margin: 10px;
    width: 100%;
    padding: 12px 16px;

}

</style>