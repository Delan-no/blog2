import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; 
import PostViews from './views/PostViews.vue'; 
import PostDetails from './views/PostDetails.vue'; 
import Apropos from './views/Apropos.vue';
import Actualities from './views/Actualities.vue';

const routes = [
  { path: '/', component: Home, name: 'accueil'},
  { path: '/posts', component: PostViews, name: 'posts' },
  { path: '/postsdetails/:id', component: PostDetails, name: 'PostDetails' },
  { path: '/apropos', component: Apropos, name: 'apropos' },
  { path: '/actualities', component: Actualities, name: 'actualities' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
