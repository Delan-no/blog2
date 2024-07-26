import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; 
import PostViews from './views/PostViews.vue'; 

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/posts', component: PostViews }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
