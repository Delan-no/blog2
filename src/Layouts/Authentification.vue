<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex justify-around md:justify-evenly items-center px-4 py-3 sticky top-0 border-b bg-white">
        <Header/> 
     
  
      <div>
        <button @click="toggleMobileMenu" class="md:hidden text-[#0055ff] font-bold">
          <svg
            class="w-8 h-8 mr-2 mt-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
  
    </div>
  
    <AsideGauche/>
  
    <transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
        @click="toggleMobileMenu"
      >
        <aside class="bg-gray-200 w-64 p-4 absolute top-0 left-0 bottom-0">
          <nav>
            <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded">Accueil</router-link>
            <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded">Articles</router-link>
            <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded">Actualités</router-link>
            <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded">A propos</router-link>
            <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded">Contact</router-link>
            <!-- <a href="#" class="block py-2 px-4 hover:bg-gray-300 rounded">Logout</a> -->
          </nav>
        </aside>
      </div>
    </transition>
  
    <div class="md:ml-64 lg:ml-32">
      <div class="rounded-lg">
        <main class="flex-1 p-4 max-w-5xl mx-auto">
          <slot></slot>
        </main>
      </div>
    </div>
  <!-- <AsideDroite/> -->
  
  </template>
  <script setup>
  import { ref } from 'vue'
  
   import Header from "@/components/navbar/Header.vue";
   import AsideGauche from "@/Layouts/sidebar/AsideGauche.vue"
//    import AsideDroite from "@/Layouts/sidebar/AsideDroite.vue"
  
  const isMobileMenuOpen = ref(false)
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  </script>
  
  <style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease;
  }
  
  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
  }
  </style>
  