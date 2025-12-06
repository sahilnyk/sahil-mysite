import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import BlogDetail from '../views/BlogDetail.vue';
import Projects from '../views/Projects.vue';
import ProjectDetail from '../views/ProjectDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/blogs', component: Blogs },
  { path: '/blogs/:slug', component: BlogDetail, name: 'BlogDetail', props: true }, // Use 'slug' instead of 'id'
  { path: '/projects', component: Projects },
  { path: '/projects/:slug', component: ProjectDetail, name: 'ProjectDetail', props: true } // Use 'slug' instead of 'id'
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
