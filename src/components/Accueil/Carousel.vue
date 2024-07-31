<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Authentification>
    <h3 class="text-gray-600 mb-4 text-sm text-justify lg:text-xl">
      Bienvenue sur notre page ! Si vous êtes entrepreneur, nous vous invitons
      à découvrir les 22 lois du marketing, qui pourraient considérablement
      booster vos différentes entreprises.
    </h3>
    <div class="relative w-full mb-4" id="carousel">
      <!-- Carousel wrapper -->
      <div class="relative h-56 lg:h-96 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div
          class="carousel-item duration-700 ease-in-out"
          :class="{ active: currentSlide === 0 }"
        >
          <img
            src="../../assets/images/delk2.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="images"
          />
        </div>
        <!-- Item 2 -->
        <div
          class="carousel-item duration-700 ease-in-out"
          :class="{ active: currentSlide === 1 }"
        >
          <img
            src="../../assets/images/delk1.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="images"
          />
        </div>
        <!-- Item 3 -->
        <div
          class="carousel-item duration-700 ease-in-out"
          :class="{ active: currentSlide === 2 }"
        >
          <img
            src="../../assets/images/delk.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="images"
          />
        </div>
        <!-- Item 4 -->
        <div
          class="carousel-item duration-700 ease-in-out"
          :class="{ active: currentSlide === 3 }"
        >
          <img
            src="../../assets/images/image1.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="images"
          />
        </div>
        <!-- Item 5 -->
        <div
          class="carousel-item duration-700 ease-in-out"
          :class="{ active: currentSlide === 4 }"
        >
          <img
            src="../../assets/images/image4.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="images"
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          @click="goToSlide(0)"
          :class="{
            'bg-white': currentSlide === 0,
            'bg-gray-400': currentSlide !== 0,
          }"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          @click="goToSlide(1)"
          :class="{
            'bg-white': currentSlide === 1,
            'bg-gray-400': currentSlide !== 1,
          }"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          @click="goToSlide(2)"
          :class="{
            'bg-white': currentSlide === 2,
            'bg-gray-400': currentSlide !== 2,
          }"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          @click="goToSlide(3)"
          :class="{
            'bg-white': currentSlide === 3,
            'bg-gray-400': currentSlide !== 3,
          }"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          @click="goToSlide(4)"
          :class="{
            'bg-white': currentSlide === 4,
            'bg-gray-400': currentSlide !== 4,
          }"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="prevSlide"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="nextSlide"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </Authentification>
</template>

<script setup>
import Authentification from "@/Layouts/Authentification.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentSlide = ref(0);
const totalSlides = 5;
const intervalTime = 3000; // Intervalle de temps en millisecondes

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Définir l'intervalle pour changer automatiquement de diapositive
let slideInterval;
onMounted(() => {
  slideInterval = setInterval(nextSlide, intervalTime);
});

// Nettoyer l'intervalle lorsque le composant est démonté
onBeforeUnmount(() => {
  clearInterval(slideInterval);
});
</script>

<style>
.carousel-item {
  display: none;
}
.carousel-item.active {
  display: block;
}
</style>
