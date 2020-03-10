<template>
  <div class="feedback-box">
      <div>
          <h1><i class="fas fa-pen-square"></i></h1>
      </div>
      <form @submit.prevent="submitData">
          <div class="form-group">
              <input v-model="author" type="text" class="form-control" placeholder="Full name">
          </div>
          <div class="form-group">
              <input v-model="email" type="text" class="form-control" placeholder="Email address">
          </div>
          <div class="form-group">
              <!-- <label for="" class="text-monospace">Provide your feedback below</label> -->
              <textarea v-model="message" class="form-control" name="" id="" cols="30" rows="10">Message...</textarea>
          </div>
          <div class="form-group">
              <button type="submit" class="btn btn-success">Submit</button>
          </div>
      </form>
  </div>
</template>

<script>

// import bus from '../eventbus'

export default {
    name:'CommentSection',
    data(){
        return{
            author:'',
            email:'',
            message:''
        }
    },
    methods:{
        // submitForm(){
            
            // const payload = {
            //     author: this.author,
            //     email:this.email,
            //     message: this.message
            // }
            
        //     bus.$emit('formData', payload)

            // this.author = ''
            // this.email = ''
            // this.message = ''
        // }

        submitData(){

            const payload = {
                    author: this.author,
                    email:this.email,
                    message: this.message
            }
            
            this.$store.dispatch('SAVE_TODO',payload)

            this.author = ''
            this.email = ''
            this.message = ''
        }
    }

}
</script>

<style scoped>

.feedback-box{
    margin: 10px;
    padding: 12px 16px;
    background-color: burlywood;
}
input,textarea{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

input:focus{
    outline: none;
    box-shadow: none;
}
textarea:focus{
    outline: none;
    box-shadow: none;
}

</style>