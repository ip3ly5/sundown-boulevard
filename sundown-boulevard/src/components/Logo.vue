<template>
  <div id="logo">
    <img src="../assets/logo.svg">
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isLink: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #logo {
    display:flex;
  }
</style>
