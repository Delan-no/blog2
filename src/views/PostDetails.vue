<template>
  <Authentification>
    <section class="bg-white dark:bg-gray-900 mt-4 text-sm">
      <div class="">
        <div
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row"
        >
          <img
            class="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
            :src="post.image"
            alt=""
          />
          <div
            class="flex flex-col justify-between p-4 leading-normal md:p-6 lg:p-8"
          >
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-center text-gray-900 dark:text-white sm:text-2xl lg:text-2xl"
            >
              {{ post.title }}
            </h5>
            <p
              class="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400 sm:text-base lg:text-lg"
            >
              {{ formatDescription(post.description) }}
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

function formatDescription(description) {
  // Vérifie si la description est définie et de type string
  if (!description || typeof description !== "string") return "";

  // Divise le texte en phrases en utilisant des délimiteurs de fin de phrase
  let sentences = description.match(/[^.!?]+[.!?]*/g);

  // Si aucune phrase n'est détectée (ex. pour les textes sans ponctuation), retourne le texte d'origine
  if (!sentences) return description;

  // Regroupe les phrases par deux et ajoute un saut de ligne après chaque groupe
  let formattedDescription = "";
  for (let i = 0; i < sentences.length; i++) {
    formattedDescription += sentences[i].trim(); // Supprime les espaces en début/fin de phrase
    if ((i + 1) % 2 === 0) {
      formattedDescription += "\n"; // Ajoute un saut de ligne HTML
    } else {
      formattedDescription += " "; // Ajoute un espace entre les phrases
    }
  }

  return formattedDescription.trim();
}

onMounted(() => {
  create();
});
const post = ref({});
const postId = route.params.id;
const create = () => {
  post.value = posts.find((post) => post.id === parseInt(postId));
};
</script>
