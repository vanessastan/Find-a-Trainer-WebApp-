<template>
  <base-card>
    <h2>Find Your Trainer</h2>
    <span class="filter-option">
      <input type="checkbox" id="backToFit" checked @change="setFilter" />
      <label for="backToFit">Back-to-fit</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="xtremeFit" checked @change="setFilter" />
      <label for="xtremeFit">Xtreme-fit</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="bootyLift" checked @change="setFilter" />
      <label for="bootyLift">Booty-lift</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        backToFit: true,
        xtremeFit: true,
        bootyLift: true
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>