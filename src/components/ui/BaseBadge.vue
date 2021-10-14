<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: rgb(204, 204, 204);
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.back-to-fit {
  background-color: #7cd2f5;
  color: white;
}

.xtreme-fit {
  background-color: #8ce28c;
  color: white;
}

.booty-lift {
  background-color: #ce70b9;
  color: white;
}
</style>