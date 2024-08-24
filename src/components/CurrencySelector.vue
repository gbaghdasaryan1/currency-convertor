<template>
    <div class="currency-selector">
      <label>{{ label }}</label>
      <select v-model="selectedCurrency">
        <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: String,
      currencies: Array,
      label: String,
    },
    computed: {
      selectedCurrency: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit('update:modelValue', value);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .currency-selector {
    margin: 10px;
  }
  </style>
  