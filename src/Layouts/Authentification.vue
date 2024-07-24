<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-white hidden md:block border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between mx-auto p-2">
      <a
        href="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="../assets/images/delkremov.png"
          class="h-16"
          alt="DELK Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >BLOG</span
        >
      </a>
      <div class="w-full md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link to="/"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Accueil</router-link
            >
          </li>
          <li>
            <router-link to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Articles</router-link
            >
          </li>
          <li>
            <router-link to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Actualités</router-link
            >
          </li>
          <li>
            <router-link to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >A propos</router-link
            >
          </li>
          <li>
            <router-link to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div
    class="flex justify-between items-center px-4 py-1 sticky top-0 border-b bg-white"
  >
    <Header class="md:hidden"/> 

    <div>
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-[#0055ff] font-bold"
      >
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

  <AsideGauche />

  <transition name="slide">
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
      @click="toggleMobileMenu"
    >
      <aside class="bg-gray-200 w-64 p-4 absolute top-0 left-0 bottom-0">
        <nav>
          <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded"
            >Accueil</router-link
          >
          <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded"
            >Articles</router-link
          >
          <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded"
            >Actualités</router-link
          >
          <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded"
            >A propos</router-link
          >
          <router-link to="/" class="block py-2 px-4 hover:bg-gray-300 rounded"
            >Contact</router-link
          >
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
import { ref } from "vue";

   import Header from "@/components/navbar/Header.vue";
import AsideGauche from "@/Layouts/sidebar/AsideGauche.vue";
//    import AsideDroite from "@/Layouts/sidebar/AsideDroite.vue"

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
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
