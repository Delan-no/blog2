import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; 
import PostViews from './views/PostViews.vue'; 
import PostDetails from './views/PostDetails.vue'; 

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/posts', component: PostViews },
  { path: '/postsdetails', component: PostDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
