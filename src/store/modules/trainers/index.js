import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      trainers: [
        {
          id: 't1',
          firstName: 'Nick',
          lastName: 'Mitchell',
          areas: ['back-to-fit', 'xtreme-fit'],
          description:
            "I'm Nick, the founder of Ultimate Performance and I've worked as a personal trainer for years. I wrote four books on body transformation and run a team of 250 elite trainers. I can help you transform your body, mindset and live into what you really want!",
          hourlyRate: 60
        },
        {
          id: 't2',
          firstName: 'Alexia',
          lastName: 'Clark',
          areas: ['booty-lift'],
          description:
            'I am Alexia and I provide new daily workouts and nutrition support. My goal is for you to feel constantly challenged and stimulated by your workouts. Not just physically, but mentally too. Get fitter, stronger, healthier and more confident!',
          hourlyRate: 40
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
