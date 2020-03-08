<template>
  <div>
      <div class="card mb-3" >
        <div class="card-body">
            <h5 class="card-title">{{ comment.author }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ comment.email }}</h6>
            <p class="card-text">{{ comment.message }}</p>

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

<style>

</style>