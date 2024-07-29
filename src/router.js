import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; 
import PostViews from './views/PostViews.vue'; 
import PostDetails from './views/PostDetails.vue'; 
import Apropos from './components/Apropos.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/posts', component: PostViews, name: 'posts' },
  { path: '/postsdetails/:id', component: PostDetails, name: 'PostDetails' },
  { path: '/apropos', component: Apropos, name: 'Apropos' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
