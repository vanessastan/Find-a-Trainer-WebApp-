<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedTrainer: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedTrainer.firstName + ' ' + this.selectedTrainer.lastName;
    },
    areas() {
      return this.selectedTrainer.areas;
    },
    rate() {
      return this.selectedTrainer.hourlyRate;
    },
    description() {
      return this.selectedTrainer.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
  created() {
    this.selectedTrainer = this.$store.getters['trainers/trainers'].find(
      (trainer) => trainer.id === this.id
    );
  },
};
</script>