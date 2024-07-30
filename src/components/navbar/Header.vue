<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between mx-auto px-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="../../assets/images/delkremov.png"
          class="h-16"
          alt="DELK Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >BLOG</span
        >
      </a>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="https://delan-no-delan-nos-projects.vercel.app/"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Accueil</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'posts' }"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Articles</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Actualités</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >A propos</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
