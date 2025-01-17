import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddCourse from '@/views/AddCourse.vue';
import EditCourse from '@/views/EditCourse.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/nou', component: AddCourse },
  { path: '/editar/:id', component: EditCourse },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;