<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <!-- <a class="nav-item nav-link" href="#">Home</a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#">Pricing</a> -->
                <router-link :to="{name:'Login'}">Login</router-link>
                <router-link :to="{ name:'Register' }">Register</router-link>
                
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name:'Navbar'
}
</script>

<style scoped>

.navbar-nav .nav-item{
    color: white;
    font-size: 18px;
    font-family: 'Oxanium', cursive;
    padding: 10 18px;
}

.navbar-nav .nav-item:hover{
    color: brown;
    
    
}

</style>