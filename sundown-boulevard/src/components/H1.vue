<template>
  <h1>{{text}}</h1>
</template>

<script>
export default {
  name: 'H1',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    display:flex;
    color:#BA2329;
    text-decoration:none;
    text-transform:uppercase;
    font-weight:500;
    font-size:1em;
  }
</style>
