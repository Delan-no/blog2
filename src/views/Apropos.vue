<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Authentification>
      <div class="p-2">
        <h1>À propos</h1>
        <p class="text-justify">
          Bienvenue sur notre blog dédié aux actualités et aux réflexions sur divers
          sujets passionnants. Notre mission est de vous offrir des articles de
          qualité, des analyses approfondies et des perspectives uniques qui
          enrichiront vos connaissances et vous inspireront.
        </p>
        <h2 class="mt-4 text-blue-500">Qui sommes-nous ?</h2>
        <p class="text-justify">
          Nous sommes une équipe de passionnés, déterminés à partager des
          informations pertinentes et à susciter des discussions enrichissantes. Que
          vous soyez un entrepreneur en quête de conseils, un amateur de
          technologie, ou simplement curieux des tendances actuelles, notre blog est
          conçu pour répondre à vos attentes.
        </p>
        <h2>Ce que vous trouverez ici</h2>
        <ul>
          <li>
            <strong>Articles d'actualité</strong> : Restez informé des dernières
            nouvelles et événements marquants.
          </li>
          <li>
            <strong>Analyses et réflexions</strong> : Plongez dans des analyses
            approfondies et des réflexions sur des sujets variés.
          </li>
          <li>
            <strong>Conseils pratiques</strong> : Découvrez des astuces et des
            conseils pour améliorer vos compétences et votre vie quotidienne.
          </li>
          <li>
            <strong>Interviews et témoignages</strong> : Lisez des interviews
            exclusives et des témoignages inspirants.
          </li>
        </ul>
        <h2>Pourquoi nous suivre ?</h2>
        <p class="text-justify">
          En nous suivant, vous aurez accès à des contenus régulièrement mis à jour,
          rédigés par des experts et des passionnés. Nous nous engageons à vous
          fournir des informations fiables et à vous offrir une expérience de
          lecture agréable et enrichissante.
        </p>
        <h2>Contactez-nous</h2>
        <p class="text-justify">
          Nous serions ravis de recevoir vos commentaires, suggestions et questions.
          N'hésitez pas à nous contacter via notre formulaire de contact ou à nous
          suivre sur les réseaux sociaux pour rester connecté.
        </p>
        <p class="text-justify">
          Merci de faire partie de notre communauté. Nous espérons que vous
          trouverez notre blog utile et inspirant.
        </p>
      </div>
      <div class="flex justify-center">
        <div class="loader "></div>
      </div>
  </Authentification>
</template>

<script setup>
import Authentification from "../Layouts/Authentification"
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 20px;
}
h1,
h2,
h3 {
  color: rgb(69, 69, 235);
  margin-top: 14px;
  margin-bottom: 5px;
}
h1{
  font-size: 20px;
  font-weight: 800;
}
h2{
  font-size: 17px;
  font-weight: 800;
}
p {
  color: #666;
}

.loader {
  display: inline-grid;
  width: 50vmin;
  aspect-ratio: 1;
  animation: l3-0 5s steps(10) infinite;
}
.loader:before,
.loader:after {
  content:"";
  grid-area: 1/1;
}
.loader:before {
  clip-path: polygon(100% 50%,90.45% 79.39%,65.45% 97.55%,34.55% 97.55%,9.55% 79.39%,0% 50%,9.55% 20.61%,34.55% 2.45%,65.45% 2.45%,90.45% 20.61%,100% 50%,85.6% 24.14%,63.6% 8.15%,36.4% 8.15%,14.4% 24.14%,6% 50%,14.4% 75.86%,36.4% 91.85%,63.6% 91.85%,85.6% 75.86%,94% 50%,85.6% 24.14%);
  background: rgb(102, 102, 196);
}
.loader:after {
  background: rgb(65, 65, 217);
  clip-path: polygon(100% 50%,65.45% 97.55%,9.55% 79.39%,9.55% 20.61%,65.45% 2.45%);
  margin: 27%;
  translate: 46% 0;
  transform-origin: right;
  animation: l3-1 .5s linear infinite;
}
@keyframes l3-0 {to{rotate: 1turn}}
@keyframes l3-1 {
  0%{rotate:  18deg}
  to{rotate: -18deg}
}

/* body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
} */
</style>
