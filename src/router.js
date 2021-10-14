import { createRouter, createWebHistory } from 'vue-router';

import TrainerDetail from './pages/trainers/TrainerDetail.vue';
import TrainersList from './pages/trainers/TrainersList.vue';
import TrainerRegistation from './pages/trainers/TrainerRegistration.vue';
import ContactTrainer from './pages/requests/ContactTrainer.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/trainers' },
    { path: '/trainers', component: TrainersList },
    {
      path: '/trainers/:id',
      component: TrainerDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactTrainer } // /trainers/t1/contact
      ]
    },
    { path: '/register', component: TrainerRegistation, meta: { requiresAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/trainers');
  } else {
    next();
  }
});

export default router;
