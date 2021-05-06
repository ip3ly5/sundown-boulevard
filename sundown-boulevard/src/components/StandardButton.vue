<template>
  <div class="standard-button">
    <slot name="action">Submit</slot>
  </div>
</template>

<script>
export default {
  name: 'StandardButton'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *, a, a:hover, a:active, a:visited {
    color:white;
  }
  .standard-button {
    background:#007DDB;
    display:flex;
    border-radius:2em;
    padding:.5em .25em;
    max-width:8em;
    justify-content:center;
    align-items:center;
    margin:auto;
  }

  .standard-button:hover {
    cursor:pointer;
  }
</style>
