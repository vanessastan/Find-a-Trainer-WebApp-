export default {
  requests(state, _, _2, rootGetters) {
    const trainerId = rootGetters.userId;
    return state.requests.filter(req => req.trainerId === trainerId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};