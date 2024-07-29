<template>
  <Authentification>
    <section class="bg-white dark:bg-gray-900 mt-20">
      <div class="container px-6 py-10 mx-auto">
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" :src="post.image" alt="">
            <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
              <img class="object-cover object-center w-10 h-10 md:w-full md:h-full rounded-full" :src="post.authorImage" alt="">
              <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">{{ post.author }}</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.authorRole }}</p>
              </div>
            </div>
          </div>
          <h1 class="mt-6 text-3xl font-semibold text-gray-800 dark:text-white">{{ post.title }}</h1>
          <p class="mt-4 text-gray-600 dark:text-gray-400">{{ post.description }}</p>
        </div>
      </div>
    </section>
  </Authentification>
</template>

<script setup>
import posts from '@/tables/articles.js';
import Authentification from '@/Layouts/Authentification.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();

onMounted(() => {
  create();
});
const post = ref({});
const create = () => {
  const postId = route.params.id;
  post.value = posts.find(post => post.id === parseInt(postId));
}
</script>
