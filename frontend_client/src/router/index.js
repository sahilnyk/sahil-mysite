import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import BlogDetail from '../views/BlogDetail.vue';
import Projects from '../views/Projects.vue';
import ProjectDetail from '../views/ProjectDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/blogs', component: Blogs },
  { path: '/blogs/:id', component: BlogDetail, name: 'BlogDetail', props: true },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', component: ProjectDetail, name: 'ProjectDetail', props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
