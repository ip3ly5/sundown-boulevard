<template>
  <div class="dish">
    <Card class="meal-card">
      <template v-slot:title>
        <H1 :text="data.strMeal"/>
      </template>
      <template v-slot:body>
        <div>{{data.strInstructions}}</div>
      </template>
    </Card>
    <Card class="flow-card">
      <template v-slot:title>
        <H1 text="Order flow box"/>
      </template>
      <template v-slot:footer>
        <StandardButton>
          <template v-slot:action>
            <router-link :to="{name: 'Drinks'}">To drinks</router-link>
          </template>
        </StandardButton>
      </template>
    </Card>
    <StandardButton @click="generateRandom">
      <template v-slot:action>
        <div>Generate Random</div>
      </template>
    </StandardButton>
  </div>
</template>

<script>
// @ is an alias to /src
import H1 from '@/components/H1.vue'
import Card from '@/components/Card.vue'
import StandardButton from '@/components/StandardButton.vue'
import axios from 'axios'

export default {
  name: 'Dish',
  components: {
    StandardButton,
    H1,
    Card
  },
  data () {
    return {
      randomMeal: '',
      allowGeneration: false
    }
  },
  computed: {
    data () {
      return !this.$store.state.user.email || this.allowGeneration ? this.randomMeal : this.$store.state.user.order.dish[0]
    }
  },
  methods: {
    generateRandom () {
      axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res) => {
        this.allowGeneration = true
        this.randomMeal = res.data.meals[0]
      })
    }
  },
  mounted () {
    if (!this.$store.state.user.email) {
      this.generateRandom()
    }
  }
}

</script>
<style scoped>
  .dish {
    display:grid;
    grid-template-areas:
    'meal meal meal meal flow flow';
    grid-gap: 4em;
    padding:2em;
  }

  .meal-card {
    grid-area: meal;
  }

  .flow-card {
    grid-area: flow;
  }
</style>
