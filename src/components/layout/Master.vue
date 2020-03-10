<template>
  <div>
    <navbar></navbar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '../Navbar'
export default {
    name:'Master',
    components:{
        Navbar
    }

}
</script>

<style>

</style>