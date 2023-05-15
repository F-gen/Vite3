import { createRouter, createWebHistory } from "vue-router";

const routes = [{
  path: '/Home',
  name: 'Home',
  component: () => import('@/views/Home/Home.vue'),
  hidden: true,
},
{
  path: "/",
  redirect: "/Home",
  hidden: true,
},
]
const router = createRouter({
  mode: 'hash',
  history: createWebHistory(),
  routes,
})

export default router
