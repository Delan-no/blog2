<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import { useRouter } from "vue-router";
import posts from "@/tables/articles.js";
import Authentification from "@/Layouts/Authentification.vue";

const router = useRouter();

const truncateDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 8) {
    return words.slice(0, 8).join(" ") + "...";
  }
  return description;
};

const readMore = (id) => {
  router.push({ name: "PostDetails", params: { id } });
};
</script>

<template>
  <Authentification>
    <section class="bg-white dark:bg-gray-900">
      <div class="px-6 py-10 mx-auto">
        <div class="text-center">
          <h1
            class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
          >
            From the blog
          </h1>
          <p class="max-w-lg mx-auto mt-4 text-gray-500">
            Salami mustard spice tea fridge authentic Chinese food dish salt
            tasty liquor. Sweet savory foodtruck pie.
          </p>
        </div>
        <div
          class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"
        >
          <div
            class="border-2 border-gray-200 rounded-lg pb-4 hover:bg-gray-50"
            v-for="post in posts"
            :key="post.id"
          >
            <h1
              class="mt-6 md:text-xl font-semibold text-gray-500 dark:text-white mx-2"
            >
              {{ post.title }}
            </h1>
            <div class="flex justify-center items-center">
              <img
                class="object-cover object-center w-24 h-24"
                :src="post.image"
                alt=""
              />
            </div>
            <hr class="w-32 my-6 text-blue-500" />
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ truncateDescription(post.description) }}
            </p>

            <figcaption class="flex items-center  bg-blue-50 p-2">
              <img
                class="object-cover object-center w-10 h-10 rounded-full"
                :src="post.authorImage"
                alt=""
              />
              <div
                class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"
              >
                <div>{{ post.author }}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ post.authorRole }}
                </div>
              </div>
            </figcaption>
            <button
              class="inline-block mt-4 bg-blue-500 px-3 rounded-md py-1 text-white hover:bg-blue-400"
              @click="readMore(post.id)"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  </Authentification>
</template>

<style></style>
