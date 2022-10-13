import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import IngredientNutrients from '/src/components/pages/IngredientNutrients.vue';
import DoughNutrients from '/src/components/pages/DoughNutrients.vue';
import BreadNutrients from '/src/components/pages/BreadNutritiens.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/ingredient-nutrients'
  },
  {
    path: '/ingredient-nutrients',
    component: IngredientNutrients,
  },
  {
    path: '/dough-nutrients',
    component: DoughNutrients,
  },
  {
    path: '/bread-nutrients',
    component: BreadNutrients,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
