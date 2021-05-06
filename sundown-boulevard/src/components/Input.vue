<template>
  <input :placeholder="placeholder" v-model="value" v-on:blur="valueToParent">
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      value: ''
    }
  },
  props: {
    placeholder: String
  },
  methods: {
    valueToParent () {
      this.$emit('inputUpdated', this.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  margin:.5em 0;
  height: 2.5rem;
  padding: 0px 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  outline: none;
}
</style>
