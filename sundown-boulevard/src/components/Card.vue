<template>
  <div class="card">
    <slot name="title"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    background:white;
    border-radius:1em;
    padding:2em;
    box-shadow:5px 3px 5px rgb(228, 228, 228);
  }
</style>
