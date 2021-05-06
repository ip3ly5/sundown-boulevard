<template>
  <div class='carousel-view'>
    <transition-group class='carousel' tag="div">
      <div v-for="slide in slides" class='slide' :key="slide.id">
        <h4> {{ slide.title }} </h4>
        <img :src="slide.img" />
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls-button' @click="previous">prev</button>
      <button class='carousel-controls-button' @click="next">next</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        {
          title: 'I am Slide A',
          id: 1,
          img: 'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg'
        },
        {
          title: 'I am Slide B',
          id: 2,
          img: 'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg'
        },
        {
          title: 'I am Slide C',
          id: 3,
          img: 'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg'
        }
      ]
    }
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>

<style>

.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 24em;
  min-height: 25em;
}

.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .75s ease-in-out;
}

.slide:first-of-type {
  opacity: 0;
}

.slide:last-of-type {
  opacity: 0;
}
</style>
