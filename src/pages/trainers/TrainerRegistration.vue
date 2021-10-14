<template>
  <section>
    <base-card>
      <h2>Register as a trainer now!</h2>
      <trainer-form @save-data="saveData"></trainer-form>
    </base-card>
  </section>
</template>

<script>
import TrainerForm from '../../components/trainers/TrainerForm.vue';

export default {
  components: {
    TrainerForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('trainers/registerTrainer', data);
      this.$router.replace('/trainers');
    }
  }
};
</script>