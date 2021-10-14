import { createStore } from 'vuex';

import trainersModule from './modules/trainers/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    trainers: trainersModule,
    requests: requestsModule,
    auth: authModule
  }
});

export default store;