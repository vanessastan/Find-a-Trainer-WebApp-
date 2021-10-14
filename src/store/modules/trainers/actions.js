export default {
  async registerTrainer(context, data) {
    const userId = context.rootGetters.userId;
    const trainerData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const token = context.rootGetters.token;

    const response = await fetch(`https://vue-find-trainer-app-default-rtdb.firebaseio.com/trainers/${userId}.json?auth=` + 
      token, 
      {
        method: 'PUT',
        body: JSON.stringify(trainerData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerTrainer', {
      ...trainerData,
      id: userId
    });
  },
  async loadTrainers(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-find-trainer-app-default-rtdb.firebaseio.com/trainers.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const trainers = [];

    for (const key in responseData) {
      const trainer = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      trainers.push(trainer);
    }

    context.commit('setTrainers', trainers);
    context.commit('setFetchTimestamp');
  }
};
