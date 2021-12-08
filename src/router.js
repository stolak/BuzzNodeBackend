import { createWebHistory, createRouter } from "vue-router";
import Dashboard from './components/Dashboard.vue';

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: Dashboard
  }
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
