<template>
  <div>
      <div class="card mb-3" >
        <div class="card-body">
            <h5 class="card-title">{{ comment.author }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ comment.email }}</h6>
            <p class="card-text">{{ comment.message }}</p>
            
            <i class="far fa-thumbs-up mr-3"></i>
            <i class="far fa-thumbs-down"></i>
        
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Comment',
    props:{
        comment:{
            type:Object,
            required:true
        }
    }

}
</script>

<style scoped>

.icons{
    display: flex;
}

.far{
    padding: 1px;
    font-size: 20px;
    overflow: hidden;
    border-radius: 50%;
}
.far:hover{
    cursor: pointer;
    background-color: lightblue;
    
}

</style>