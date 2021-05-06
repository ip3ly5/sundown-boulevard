<template>
  <div class="home">
    <Card class="slider-card">
      <template v-slot:body>
        <Slider/>
      </template>
    </Card>
    <Card class="flow-card">
      <template v-slot:title>
        <H1 text="Order flow box"/>
      </template>
      <template v-slot:footer>
        <StandardButton>
          <template v-slot:action>
            <router-link :to="{name: 'Dish'}">Order</router-link>
          </template>
        </StandardButton>
      </template>
    </Card>
    <Card class="find-card">
      <template v-slot:title>
        <H1 text="Find your order"/>
      </template>
      <template v-slot:body>
        <Input placeholder="Enter your email" @inputUpdated="inputUpdated"/>
      </template>
      <template v-slot:footer>
        <StandardButton @click="getEmailData">
          <template v-slot:action>
            <div>Find</div>
          </template>
        </StandardButton>
      </template>
    </Card>
    <Card class="content-card">
      <template v-slot:title>
        <H1 text="Content"/>
      </template>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import H1 from '@/components/H1.vue'
import Input from '@/components/Input.vue'
import Card from '@/components/Card.vue'
import StandardButton from '@/components/StandardButton.vue'
import Slider from '@/components/Slider.vue'
import Validate from '@/common/validation'

import database from '@/db.json'

export default {
  name: 'Home',
  components: {
    StandardButton,
    Slider,
    H1,
    Input,
    Card
  },
  data () {
    return {
      emailInput: ''
    }
  },
  methods: {
    inputUpdated (value) {
      this.emailInput = value
    },
    getEmailData () {
      if (!Validate.email(this.emailInput)) {
        return console.log(`%c Email is invalid: %c "${this.emailInput}"`, 'color:red')
      }

      if (database.users.filter(user => user.email === this.emailInput).length === 0) {
        return console.log(`%c User does not exist: %c "${this.emailInput}"`, 'color:red')
      }

      const user = database.users.filter(user => user.email === this.emailInput)
      this.$store.dispatch('fetchUser', user[0]).then(() => {
        this.$router.push({ name: 'Dish' })
      })
    }
  }
}

</script>
<style scoped>
  .home {
    display:grid;
    grid-template-areas:
    'slider slider slider slider flow flow'
    'find find find content content content';
    grid-gap: 4em;
    padding:2em;
  }

  .slider-card {
    grid-area: slider;
  }

  .flow-card {
    grid-area: flow;
  }

  .find-card {
    grid-area: find;
  }

  .content-card {
    grid-area: content;
  }
</style>
