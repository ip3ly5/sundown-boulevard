<template>
  <Nav/>
  <router-view/>
</template>
<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}

</script>
<style>
@import url('http://fonts.cdnfonts.com/css/neue-helvetica');

#app {
  font-family: 'Neue Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 20%;
  background-color:#F8F9FD;
  height:100vh;
}

html, body {
  padding:0;
  margin:0;
  box-sizing:border-box;
}

.primary-color {
  color: #BA2329;
}

.secondary-color {
  color:  #007DDB;
}
</style>
