<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <trainer-filter @change-filter="setFilters"></trainer-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadTrainers(true)">Refresh</base-button>
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Register as Trainer</base-button>
          <base-button v-if="isLoggedIn && !isTrainer && !isLoading" link to="/register">Register as Trainer</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasTrainers">
          <trainer-item
            v-for="trainer in filteredTrainers"
            :key="trainer.id"
            :id="trainer.id"
            :first-name="trainer.firstName"
            :last-name="trainer.lastName"
            :rate="trainer.hourlyRate"
            :areas="trainer.areas"
          ></trainer-item>
        </ul>
        <h3 v-else>No trainers found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import TrainerItem from '../../components/trainers/TrainerItem.vue';
import TrainerFilter from '../../components/trainers/TrainerFilter.vue';

export default {
  components: {
    TrainerItem,
    TrainerFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        backToFit: true,
        xtremeFit: true,
        bootyLift: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isTrainer() {
      return this.$store.getters['trainers/isTrainer'];
    },
    filteredTrainers() {
      const trainers = this.$store.getters['trainers/trainers'];
      return trainers.filter((trainer) => {
        if (this.activeFilters.backToFit && trainer.areas.includes('back-to-fit')) {
          return true;
        }
        if (this.activeFilters.xtremeFit && trainer.areas.includes('xtreme-fit')) {
          return true;
        }
        if (this.activeFilters.bootyLift && trainer.areas.includes('booty-lift')) {
          return true;
        }
        return false;
      });
    },
    hasTrainers() {
      return !this.isLoading && this.$store.getters['trainers/hasTrainers'];
    },
  },
  created() {
    this.loadTrainers();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadTrainers(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('trainers/loadTrainers', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>