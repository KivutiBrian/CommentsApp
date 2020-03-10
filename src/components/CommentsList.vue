<template>
  <div class="comments-list">
   <comment v-for="(comment, index) in comments" :key="index" :comment="comment"></comment>
  </div>
</template>

<script>

import Comment from './Comment'


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