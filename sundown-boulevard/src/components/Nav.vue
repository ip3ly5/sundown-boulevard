<template>
  <div id="nav">
    <div class="links-container">
      <router-link :to="{name: 'Home'}">
        <Logo class="logo-nav" />
      </router-link>
      <H1 text="Restauranter"/>
      <H1 text="Produkter"/>
      <H1 text="Nyhedsbrev"/>
      <H1 text="Kontakt"/>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import H1 from '@/components/H1.vue'

export default {
  name: 'Nav',
  components: {
    Logo,
    H1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nav {
    display:flex;
    justify-content:space-around;
    background:white;
    box-shadow:0px 10px 5px -4px rgb(223, 223, 223);
    padding-bottom:1em;
    width:100%;
  }

  .logo-nav {
    width:5em;
    height:5em;
  }

  .links-container {
    display:flex;
    width:100%;
    align-items:center;
    justify-content: space-around;
  }
</style>
