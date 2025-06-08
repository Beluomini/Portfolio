<template>
  <div class="carousel-container">
    <button class="carousel-control prev" @click="prevSlide"><</button>
    <div class="carousel-wrapper">
      <div
        class="carousel-inner"
        :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }"
      >
        <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
          <img :src="slide" :alt="'Slide ' + (index + 1)" />
        </div>
      </div>
    </div>
    <button class="carousel-control next" @click="nextSlide">></button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slides = [
  new URL('../../assets/images/king-pin-bowling.jpg', import.meta.url).href,
  new URL('../../assets/images/crazy-drake.png', import.meta.url).href,
  new URL('../../assets/images/pimball.webp', import.meta.url).href,
  new URL('../../assets/images/crazy-drake.png', import.meta.url).href,
  new URL('../../assets/images/pimball.webp', import.meta.url).href,
  new URL('../../assets/images/pimball.webp', import.meta.url).href,
  new URL('../../assets/images/pimball.webp', import.meta.url).href
]

const visibleCount = 3
const currentIndex = ref(0)

const maxIndex = Math.ceil(slides.length / visibleCount) - 1

const nextSlide = () => {
  if (currentIndex.value < maxIndex) currentIndex.value++
}

const prevSlide = () => {
  if (currentIndex.value > 0) currentIndex.value--
}
</script>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  overflow: hidden;
}

.carousel-wrapper {
  overflow: hidden;
  width: 80%;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
  width: fit-content;
}

.carousel-slide {
  flex: 0 0 calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-slide img {
  width: 100%;
  max-width: 15rem;
  height: auto;
}

.carousel-control {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
