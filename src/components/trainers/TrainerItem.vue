<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area">{{ area }}</base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="trainerContactLink">Contact</base-button>
      <base-button link :to="trainerDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    trainerContactLink() {
      return this.$route.path + '/' + this.id + '/contact' // /trainers/t1/contact
    },
    trainerDetailsLink() {
      return this.$route.path + '/' + this.id; // /trainers/t1
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1.5px solid black;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>