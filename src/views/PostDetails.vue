<template>
  <Authentification>
    <section class="bg-white dark:bg-gray-900 mt-20">
      <div class="">
        <div
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row"
        >
          <img
            class="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
            :src="post.authorImage"
            alt=""
          />
          <div
            class="flex flex-col justify-between p-4 leading-normal md:p-6 lg:p-8"
          >
            <h5
              class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl lg:text-3xl"
            >
              {{ post.title }}
            </h5>
            <p
              class="mb-3 font-normal text-gray-700 dark:text-gray-400 sm:text-base lg:text-lg"
            >
              {{ post.description }}
            </p>
            <figcaption class="flex items-center bg-blue-50 p-2 sm:p-3 lg:p-4">
              <img
                class="object-cover object-center w-10 h-10 rounded-full sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                :src="post.authorImage"
                alt=""
              />
              <div
                class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"
              >
                <div class="text-sm sm:text-base lg:text-lg">
                  {{ post.author }}
                </div>
                <div
                  class="text-xs text-gray-500 dark:text-gray-400 sm:text-sm lg:text-base"
                >
                  {{ post.authorRole }}
                </div>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  </Authentification>
</template>

<script setup>
import posts from "@/tables/articles.js";
import Authentification from "@/Layouts/Authentification.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();

onMounted(() => {
  create();
});
const post = ref({});
const postId = route.params.id;
const create = () => {
  post.value = posts.find((post) => post.id === parseInt(postId));
};
</script>
